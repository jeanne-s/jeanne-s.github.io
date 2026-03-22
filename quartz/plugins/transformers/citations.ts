import * as fs from "fs"
import * as path from "path"
import rehypeCitation from "rehype-citation"
import { PluggableList } from "unified"
import { visit } from "unist-util-visit"
import { QuartzTransformerPlugin } from "../types"

function normalizeQuotes(s: string): string {
  return s
    .replace(/[\u2018\u2019\u201A\u201B]/g, "'")
    .replace(/[\u201C\u201D\u201E\u201F]/g, '"')
}

function cleanLatex(s: string): string {
  return s
    .replace(/\\textbar\b/g, "|")
    .replace(/\\\$/g, "$")
    .replace(/\\%/g, "%")
    .replace(/\\&/g, "&")
    .replace(/\\#/g, "#")
    .replace(/\\_/g, "_")
    .replace(/\\[a-zA-Z]+\{([^}]*)\}/g, "$1")
    .replace(/\{([^}]*)\}/g, "$1")
    .trim()
}

function parseBibEntries(content: string): Record<string, { url?: string; title?: string }> {
  const result: Record<string, { url?: string; title?: string }> = {}
  const entries = content.split(/(?=@\w+\{)/).filter((s) => s.trim().startsWith("@"))
  for (const entry of entries) {
    const keyMatch = entry.match(/@\w+\{([^,\s]+),/)
    if (!keyMatch) continue
    const key = keyMatch[1]
    result[key] = {}
    const titleMatch = entry.match(/\btitle\s*=\s*\{((?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*)\}/i)
    if (titleMatch) result[key].title = cleanLatex(titleMatch[1])
    const urlMatch = entry.match(/\burl\s*=\s*\{([^}]+)\}/i)
    if (urlMatch) result[key].url = urlMatch[1]
  }
  return result
}

export interface Options {
  bibliographyFile?: string
  suppressBibliography: boolean
  linkCitations: boolean
  csl: string
}

const defaultOptions: Options = {
  suppressBibliography: false,
  linkCitations: false,
  csl: "apa",
}

export const Citations: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "Citations",
    htmlPlugins(ctx) {
      const plugins: PluggableList = []
      // per default, rehype-citations only supports en-US
      // see: https://github.com/timlrx/rehype-citation/issues/12
      // in here there are multiple usable locales:
      // https://github.com/citation-style-language/locales
      // thus, we optimistically assume there is indeed an appropriate
      // locale available and simply create the lang url-string
      let lang: string = "en-US"
      if (ctx.cfg.configuration.locale !== "en-US") {
        lang = `https://raw.githubusercontent.com/citation-stylelanguage/locales/refs/heads/master/locales-${ctx.cfg.configuration.locale}.xml`
      }
      // rehype-citation natively reads the `bibliography` field from frontmatter
      // (file.data.frontmatter) and resolves paths relative to file.cwd.
      // Passing bibliography: undefined here lets per-page frontmatter take over.
      // Pass bibliographyFile in Plugin.Citations({ bibliographyFile: "..." }) for a global fallback.
      plugins.push([
        rehypeCitation,
        {
          bibliography: opts.bibliographyFile,
          suppressBibliography: opts.suppressBibliography,
          linkCitations: opts.linkCitations,
          csl: opts.csl,
          lang,
        },
      ])

      // Transform the HTML of the citations; add data-no-popover property to the citation links
      // using https://github.com/syntax-tree/unist-util-visit as they're just anchor links
      plugins.push(() => {
        return (tree, _file) => {
          visit(tree, "element", (node, _index, _parent) => {
            if (node.tagName === "a" && node.properties?.href?.startsWith("#bib")) {
              node.properties["data-no-popover"] = true
            }
          })
        }
      })

      // Make bibliography entry titles clickable links to their source URLs
      plugins.push(() => {
        return (tree: any, file: any) => {
          const bibPath = file.data?.frontmatter?.bibliography
          if (!bibPath) return
          const fullPath = path.resolve(process.cwd(), bibPath as string)
          let bibContent: string
          try {
            bibContent = fs.readFileSync(fullPath, "utf-8")
          } catch {
            return
          }
          const bibData = parseBibEntries(bibContent)

          visit(tree, "element", (node: any) => {
            const id = node.properties?.id?.toString() ?? ""
            if (!id.startsWith("bib-")) return
            const key = id.slice("bib-".length)
            const entry = bibData[key]
            if (!entry?.url || !entry?.title) return

            // Find the csl-right-inline child
            const rightInline = (node.children ?? []).find(
              (c: any) =>
                c.type === "element" &&
                (c.properties?.className ?? []).includes("csl-right-inline"),
            )
            if (!rightInline) return

            // Search top-level text nodes for the title and wrap it in a link
            const children: any[] = rightInline.children ?? []
            const titleNorm = normalizeQuotes(entry.title.toLowerCase())
            for (let i = 0; i < children.length; i++) {
              const child = children[i]
              if (child.type !== "text") continue
              const idx = normalizeQuotes(child.value.toLowerCase()).indexOf(titleNorm)
              if (idx === -1) continue

              const before = child.value.slice(0, idx)
              const titleText = child.value.slice(idx, idx + entry.title.length)
              const after = child.value.slice(idx + entry.title.length)
              const replacement: any[] = []
              if (before) replacement.push({ type: "text", value: before })
              replacement.push({
                type: "element",
                tagName: "a",
                properties: { href: entry.url, "data-no-popover": true },
                children: [{ type: "text", value: titleText }],
              })
              if (after) replacement.push({ type: "text", value: after })
              children.splice(i, 1, ...replacement)
              return
            }
          })
        }
      })

      return plugins
    },
  }
}

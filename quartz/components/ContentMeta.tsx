import { Date, getDate } from "./Date"
import { FullSlug, resolveRelative } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

      if (fileData.dates) {
        segments.push(<Date date={getDate(cfg, fileData)!} locale={cfg.locale} />)
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(<span>{displayedTime}</span>)
      }

      const tags = fileData.frontmatter?.tags
      return (
        <div class={classNames(displayClass, "content-meta")}>
          <span show-comma={options.showComma} class="content-meta-left">
            {segments}
          </span>
          {tags && tags.length > 0 && (
            <span class="content-meta-tags">
              {tags.map((tag) => {
                const linkDest = resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)
                return (
                  <a href={linkDest} class="internal tag-link">
                    {tag}
                  </a>
                )
              })}
            </span>
          )}
        </div>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor

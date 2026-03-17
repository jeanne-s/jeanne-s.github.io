import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  const subtitle = fileData.frontmatter?.subtitle
  if (title) {
    return (
      <div class={classNames(displayClass, "article-title")}>
        <h1>{title}</h1>
        {subtitle && <p class="article-subtitle">{subtitle}</p>}
      </div>
    )
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}

.article-subtitle {
  margin: 0.3rem 0 0.8rem 0;
  font-size: 1rem;
  color: var(--darkgray);
  font-style: italic;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor

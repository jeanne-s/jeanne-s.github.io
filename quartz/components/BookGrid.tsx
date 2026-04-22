import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// @ts-ignore
import script from "./scripts/bookgrid.inline"

const BookGrid: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  // Only render on the reading page
  if (fileData.slug !== "reading") return null

  return <></>
}

BookGrid.afterDOMLoaded = script

BookGrid.css = `
.book-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.book-card {
  position: relative;
}

.book-cover {
  cursor: pointer;
  display: block;
}

.book-cover img {
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.book-cover:hover img {
  transform: scale(1.03);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.book-card.active .book-cover img {
  box-shadow: 0 0 0 2px var(--secondary);
}

.book-detail {
  display: none;
}

.book-detail-expanded {
  display: none;
  grid-column: 1 / -1;
  padding: 1rem 0;
  margin: 0.5rem 0;
  border-top: 1px solid var(--lightgray);
}

.book-detail-expanded.open {
  display: block;
}

.book-detail-expanded h3 {
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
  color: var(--secondary);
}

.book-detail-expanded .book-author {
  color: var(--darkgray);
  font-size: 0.85rem;
  font-style: italic;
  margin: 0 0 0.5rem 0;
}

.book-detail-expanded .book-summary {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--darkgray);
}
`

export default (() => BookGrid) satisfies QuartzComponentConstructor

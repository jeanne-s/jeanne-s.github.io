import { QuartzComponent, QuartzComponentConstructor } from "./types"

// @ts-ignore
import script from "./scripts/email.inline"

// Renders nothing: it exists only to ship the script that turns
// <span class="email" data-rev="..."> slots in the content into mailto links.
const Email: QuartzComponent = () => null

Email.afterDOMLoaded = script

Email.css = `
span.email {
  white-space: nowrap;
}

span.email:not(.resolved) {
  font-style: italic;
  color: var(--darkgray);
}
`

export default (() => Email) satisfies QuartzComponentConstructor

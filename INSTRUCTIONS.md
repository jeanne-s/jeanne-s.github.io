# Quartz Personal Site — Claude Code Plan

## Overview

Build a minimal personal blog using [Quartz v4](https://quartz.jzhao.xyz/) deployed to GitHub Pages at `yourhandle.github.io`. Two main pages: a homepage (who I am + what I do) and a writing page (chronological post list). Clean, minimal aesthetic — serif headings, amber accent, left sidebar with two navigation links.

---

## 1. Setup

- Clone the Quartz v4 repo: `git clone https://github.com/jackyzha0/quartz.git`
- Install dependencies: `npm install`
- Target deployment: GitHub Pages at `yourhandle.github.io` (replace with real handle)
- Run locally with: `npx quartz build --serve`

---

## 2. `quartz.config.ts` changes

```ts
baseUrl: "yourhandle.github.io"
```

**Enable:**
- `Darkmode` toggle
- `Tags` on posts

**Disable:**
- `Graph` (no graph view)
- `Backlinks`
- `TableOfContents`
- `Search`
- `Explorer` (folder tree — replaced by manual sidebar nav)

---

## 3. Layout — `quartz.layout.ts`

Use a left sidebar with manual nav links + dark mode toggle. No right sidebar.

```ts
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Darkmode(),
    // Custom sidebar nav — see section 5
  ],
  right: [],
}
```

The sidebar should show:
- Site name / handle at the top (links to `/`)
- `About me` → links to `/about`
- `Writing` → links to `/writing`
- GitHub and LinkedIn links at the bottom

---

## 4. Pages to create

### `content/index.md` — Homepage

```markdown
---
title: "Your Name"
---

# Your Name

[Placeholder bio: 2–3 sentences about who you are and what you do.
Keep it warm and specific — not a resume summary.]

[Start here](#start-here)

## Start here

1. [Post title one](/writing/post-one)
2. [Post title two](/writing/post-two)
3. [Post title three](/writing/post-three)

Or browse [all my writing →](/writing)
```

- No photo
- Short bio up top
- "Start here" section: 3–5 manually curated post links (update as you publish)
- A clear link to `/writing` at the bottom

---

### `content/about.md` — About page

```markdown
---
title: "About me"
---

# About me

[Placeholder: longer bio, background, what you care about.
Even one solid paragraph is enough to start.]

[GitHub](https://github.com/yourhandle) · [LinkedIn](https://linkedin.com/in/yourhandle)
```

---

### `content/writing/index.md` — Writing index

```markdown
---
title: "Writing"
---

# Writing

[Auto-generated chronological list of all posts via Quartz ContentIndex]
```

- Chronological order, newest first
- Each entry: post title + date
- Tags shown inline, small and subtle

---

### `content/writing/hello-world.md` — Sample post

```markdown
---
title: "Hello, world"
date: 2026-03-17
tags:
  - note
---

A placeholder first post so the writing page isn't empty.
```

---

## 5. Custom sidebar component

Create `quartz/components/SidebarNav.tsx`:

```tsx
import { QuartzComponent, QuartzComponentProps } from "./types"

const SidebarNav: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  return (
    <nav class="sidebar-nav">
      <ul>
        <li><a href="/about">About me</a></li>
        <li><a href="/writing">Writing</a></li>
      </ul>
      <div class="sidebar-links">
        <a href="https://github.com/yourhandle" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/yourhandle" target="_blank">LinkedIn</a>
      </div>
    </nav>
  )
}

export default SidebarNav
```

Then import and add `Component.SidebarNav()` to the `left` array in `quartz.layout.ts`.

---

## 6. Styling — `quartz/styles/custom.scss`

### Serif headings

```scss
h1, h2, h3 {
  font-family: Georgia, 'Times New Roman', serif;
}
```

### Amber accent

```scss
$amber: #BA7517;

a {
  color: $amber;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

.page-title a {
  color: $amber;
}
```

### Sidebar styling

```scss
.sidebar-nav {
  margin-top: 1.5rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem 0;

    li {
      margin-bottom: 0.5rem;
    }

    a {
      font-size: 0.95rem;
      color: var(--gray);
      text-decoration: none;

      &:hover {
        color: $amber;
      }

      // Highlight active page
      &[aria-current="page"] {
        color: $amber;
        font-weight: 500;
      }
    }
  }
}

.sidebar-links {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.85rem;

  a {
    color: var(--gray);
    &:hover { color: $amber; }
  }
}
```

### Minimal content area

```scss
article {
  max-width: 640px;
  font-size: 1.05rem;
  line-height: 1.75;
}

// No decorative borders or shadows
.page { box-shadow: none; border: none; }
```

### Tags — subtle

```scss
.tag-link {
  font-size: 0.75rem;
  color: var(--gray);
  background: var(--light);
  border-radius: 4px;
  padding: 2px 6px;
  margin-left: 6px;
  text-decoration: none;

  &:hover {
    color: $amber;
  }
}
```

---

## 7. GitHub Pages deployment

1. Create a repo named `yourhandle.github.io` on GitHub
2. Add the Quartz deploy workflow: copy `.github/workflows/deploy.yml` from [Quartz's official docs](https://quartz.jzhao.xyz/hosting)
3. Push to `main` → auto-deploys via GitHub Actions

---

## 8. Things to fill in before going live

| Placeholder | What to replace with |
|---|---|
| `yourhandle` | Your real GitHub/site handle |
| `Your Name` | Your real name or alias |
| Placeholder bio | 2–3 sentence personal bio |
| "Start here" links | Real post URLs once published |
| GitHub / LinkedIn URLs | Your real profile URLs |

---

## 9. What to leave for later

- RSS feed (Quartz supports it natively — enable in config when ready)
- A `Projects` or `Research` page if needed
- Real domain (moving off `.github.io`)
- Post series / sequences if you end up writing related essays
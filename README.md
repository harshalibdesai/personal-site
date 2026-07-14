# Personal site

Next.js (App Router) personal site — About + Writing, no CMS, no blog engine.

## Edit your content

Everything editable lives in one file:

```
content/site-content.ts
```

- `siteMeta` — name, tagline, meta description, site URL
- `aboutContent` — the About page bio copy (placeholder text is clearly marked)
- `writingContent` — the Writing page intro/coming-soon copy, and a `posts`
  array. Drop post objects into `posts` later (title, date, summary, href)
  and the page automatically switches from "coming soon" to a post list —
  no component or layout changes needed.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Design system

Colors, fonts, and spacing tokens are CSS variables at the top of
`app/globals.css` (light + dark variants). Fonts are `Space Grotesk`
(display) and `JetBrains Mono` (labels/nav), loaded via `next/font/google`
in `app/layout.tsx`.

## Deploy to Vercel

No extra config needed.

- **CLI:** run `vercel deploy` from this directory (or `vercel --prod` to
  ship straight to production).
- **GitHub-connected project:** push this folder to a GitHub repo and import
  it in the Vercel dashboard — it's detected as Next.js automatically.

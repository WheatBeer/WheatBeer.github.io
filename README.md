# WheatBeer's Blog

Personal resume/portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS, statically exported and deployed to GitHub Pages.

## Develop

~~~bash
npm install
npm run dev      # http://localhost:3000
~~~

## Build

~~~bash
npm run build     # emits static output to ./out
~~~

## Content

* `src/content/resume.ts` — structured resume data (education, work experience, publications, etc.)
* `src/content/{docs,projects,research}/*.md` — Markdown articles with `title`/`category` frontmatter, grouped in the sidebar by category

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it via GitHub Pages (Pages source must be set to "GitHub Actions" in repo Settings).

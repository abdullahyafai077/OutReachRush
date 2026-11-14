# OutreachRush — Next.js prototype

Modern, SEO-focused marketing site for **OutreachRush** (App Router, TypeScript, Tailwind CSS v4).

## Figma MCP note

Visual tokens live in `src/data/design-tokens.ts` and match the client HTML reference: **#242424** canvas, **#F89822** accent, **#F2F6F9** light sections, Poppins + serif headlines.

## Content

All copy, keywords, pricing tiers, and FAQs live in **`src/data/seo-content.ts`**. Pull exact Google Doc copy in there without touching components.

Source context: [outreachrush.com](https://outreachrush.com/).

## SEO

- `src/lib/metadata.ts` — Metadata API (title, description, OG, canonical, Twitter)
- `src/components/seo/JsonLd.tsx` — Organization, Service, FAQPage JSON-LD
- Semantic sections with a single `<h1>` on the homepage

## Develop

Use **Node 20 LTS or 22+** (Node 21 triggers `EBADENGINE` warnings with Next 16). Close other terminals running `npm install` in this folder—parallel installs corrupt `node_modules` on Windows.

```powershell
cd d:\outreach
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/           layout, page, globals
  components/    layout, sections, seo, ui
  data/          seo-content.ts, design-tokens.ts
  lib/           metadata, pricing, cn
```
"# OutReachRush" 

# Filipino Food API Showcase 🍚

A static showcase site for the [Filipino Food API](https://github.com/eigdoyr/filipino-food-api) — 100 Filipino dishes you can browse, search, and filter.

## Preview

![Filipino Food API Showcase Preview](/public/preview.png)

## Live Demo

[filipino-food-api-showcase.ryodgie.workers.dev](https://filipino-food-api-showcase.ryodgie.workers.dev)

## Built With

- Astro
- TypeScript
- Tailwind CSS v4
- Vanilla JS for interactivity (no client framework)
- Cloudflare Workers (static assets)

## Features

- 100 dishes fetched at build time and rendered as static HTML
- Debounced client-side search across names, ingredients, regions, and tags
- Multi-select filters by type, occasion, region, and flavor (AND across groups, OR within)
- Detail modal with full schema, image credit, and Copy as JSON button
- Shareable URLs — search, filters, and open dish all sync to the query string
- Random dish navigation inside the modal + grid shuffle in the search bar
- Light, dark, and system theme toggle with no flash on load
- Fully responsive — drawer filters on mobile, inline sidebar on desktop
- Self-hosted DM Sans via Astro's Fonts API
- SEO meta tags, canonical URLs, Open Graph, Twitter cards, sitemap, robots.txt

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

```text
src/
├── components/ # DishCard, DishDetail, FilterSidebar, Header, Footer, SearchBar, ThemeToggle
├── layouts/ # Layout.astro — base shell, SEO tags, dark-mode init
├── lib/ # api.ts (build-time fetch), types.ts
├── pages/ # index.astro — the single page
└── styles/ # global.css — Tailwind import, dark variant, font theme
public/ # robots.txt, preview.png, favicons
astro.config.mjs # Tailwind plugin, DM Sans, sitemap, site URL
wrangler.jsonc # Cloudflare deploy config
```

## API

This site is powered by the [Filipino Food API](https://github.com/eigdoyr/filipino-food-api).

- API: [filipino-food-api.ryodgie.workers.dev/v1](https://filipino-food-api.ryodgie.workers.dev/v1)
- Docs: [ryodgie.mintlify.app/introduction](https://ryodgie.mintlify.app/introduction)
- Swagger: [filipino-food-api.ryodgie.workers.dev/docs](https://filipino-food-api.ryodgie.workers.dev/docs)

## Design

Designed & Built by [Ryodgie Barnatia](https://www.ryodgie.com)

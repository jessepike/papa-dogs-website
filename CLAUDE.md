# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for Papa Dogs Taphouse & Deli (Weaverville, CA). Built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Deploys to Railway as static HTML/CSS/JS.

## Commands

```bash
npm run dev          # Development server (localhost:3000)
npm run build        # Production build (outputs to out/)
npm run lint         # ESLint
npm run type-check   # TypeScript compilation check
npm start            # Serve production build locally
```

## Architecture

### Content Management

**Single source of truth:** `content/site-content.json`

All site content (hero, carousel images, featured items, hours, contact info, SEO) is stored in this JSON file. Content schema is defined in `content/types.ts`. The `components/content-loader.ts` utility validates and loads content at build time.

Content updates flow:
1. Discord bot (`papa-dogs-content-agent`) or direct edit commits to `site-content.json`
2. Push to `main` triggers Railway auto-deploy
3. Static site regenerates with new content (~2 minutes)

### Key Directories

- `app/` - Next.js App Router pages (homepage, menu, rewards)
- `components/marketing/` - Business-specific components (navigation, hero, footer, etc.)
- `components/ui/` - shadcn/ui primitives
- `content/` - Site content JSON and TypeScript types
- `public/images/` - Static images (carousel, menu, logo)

### Styling

Tailwind CSS with custom Papa Dogs brand colors defined in `tailwind.config.ts`:
- `papa-black`, `paper-white`, `weaverville-sage`, `trinity-blue`, `sunburst-gold`, `brick-red`

Custom fonts: Chonburi (display), Patrick Hand (handwriting), Montserrat (body)

## Deployment

Railway auto-deploys on push to `main`. Configuration in `railway.toml`. Static export means no server runtime—just HTML/CSS/JS served via `npx serve`.

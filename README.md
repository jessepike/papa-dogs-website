# Papa Dogs Website

Public marketing website for Papa Dogs Taphouse & Deli in Weaverville, California.

## Overview

This is a fully static Next.js 15 site with no database or API dependencies. All content is managed via a git-based workflow using the `papa-dogs-content-agent` Discord bot.

## Content Management

Content is stored in `content/site-content.json` and updated by the agent via GitHub commits:

- **Featured items** - Weekly specials (soup, sandwiches, etc.)
- **Business hours** - Seasonal schedules
- **Announcement banner** - Promotions and alerts
- **Hero carousel** - Homepage images

### How Ann Updates Content

Via Discord in the `papa-dogs-content-agent` bot:
- `/update-website soup` - Update soup special
- `/update-website announcement` - Toggle banner
- `/update-website hours` - Update hours
- `/update-website image` - Upload carousel images
- `/update-website preview` - View current content

The agent commits changes to this repo → Railway auto-deploys → Live in ~2 minutes

### Manual Updates (if agent unavailable)

Edit `content/site-content.json` directly in GitHub and commit to `main` branch.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Railway** - Deployment platform

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Serve production build locally
npm run start
```

Visit http://localhost:3000

## Deployment

**Production**: https://papadogs.com

Push to `main` branch → Railway auto-deploys in ~2 minutes.

**Important**: Railway GitHub auto-deploy must be enabled for the `main` branch.
Verify in: Project → Settings → Source → Automatic Deploys

## Project Structure

```
papa-dogs-website/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage (dynamic from content.json)
│   ├── menu/              # Menu page
│   └── rewards/           # Rewards program
├── components/
│   ├── ui/                # shadcn/ui primitives
│   ├── marketing/         # Marketing components
│   └── content-loader.ts  # Content loading utility
├── content/
│   ├── site-content.json  # ← Content source of truth
│   └── types.ts           # TypeScript schema
├── public/
│   └── images/            # Static assets
└── package.json
```

## Pages

- `/` - Homepage with hero carousel and featured items
- `/menu` - Full menu display
- `/rewards` - Rewards program signup

## Related Repositories

- [papa-dogs-content-agent](https://github.com/jessepike/papa-dogs-content-agent) - Dashboard and content management agent

## License

Private - © 2025 Papa Dogs Taphouse & Deli

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Maylor Taylor Portfolio** is a modern, performant portfolio website built with Next.js 15 and Tailwind CSS. It was migrated from Jekyll static site generation to leverage Next.js's static export capabilities for GitHub Pages deployment. The site features a blog system with Markdown support, animated components, and an embedded SecPlus Study study application.

**Hosting**: GitHub Pages (static export)
**Repository**: https://github.com/maylortaylor/maylortaylor.github.io
**Live Site**: https://maylortaylor.github.io

## Development Commands

### Setup & Installation
```bash
npm install              # Install dependencies
npm run dev              # Start dev server on http://localhost:3000
```

### Build & Deployment
```bash
npm run build            # Build static site to /out directory
npm run lint             # Run ESLint
```

### Build Details
- **Static Export**: Configured to generate static HTML in `/out/` directory
- **Deployment**: GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys when pushing to `main` or `master`
- **Output Format**: Pure HTML with trailing slashes (`/blog/2024/01/01/slug/`)

## Architecture Overview

### Next.js Static Site Generation (SSG)

The site uses Next.js 15 App Router with static export configuration:

```javascript
// next.config.ts
output: 'export'              // Generate static HTML files
images: { unoptimized: true } // Disable Next.js image optimization
trailingSlash: true           // Add trailing slashes to URLs
```

This approach allows the entire site to be served as static files from GitHub Pages with zero runtime server overhead.

### Page Structure

**Dynamic Route Segments**:
- Blog posts: `src/app/blog/[year]/[month]/[day]/[slug]/page.tsx` - Generates 18+ pages from Markdown files
- Tag pages: `src/app/tags/[tag]/page.tsx` - Generates pages for each tag dynamically
- Root pages: `src/app/page.tsx` (home), `about/page.tsx`, `cv/page.tsx`, `apps/page.tsx`
- Catch-all: `src/app/not-found.tsx` for 404 handling

**Layout Hierarchy**:
```
src/app/layout.tsx (root)
├── Header component
├── Page content
└── Footer component
```

### Content & Blog System

**Blog Post Storage**: `src/content/posts/` (YYYY-MM-DD-slug.md format)
- Posts are read at build time using Node.js file operations in `src/lib/posts.ts`
- Each post has YAML frontmatter with metadata (title, date, tags, description)
- Markdown is processed using Unified pipeline (Remark + Rehype) with syntax highlighting

**URL Format**: Preserved from Jekyll for SEO
- Pattern: `/blog/{year}/{month}/{day}/{slug}/`
- Example: `/blog/2018/08/20/maylortaylor-site-launched/`

**Tag Handling**:
- Tags can be space or comma-separated strings: `tags: c-sharp general-development`
- Parsed dynamically in `src/lib/posts.ts` using regex `/[,\s]+/`
- Tag pages generated at `/tags/{tag-slug}/`

### Markdown Processing Pipeline

Located in `src/lib/markdown.ts`:

```typescript
unified()
  .use(remarkParse)           // Parse Markdown
  .use(remarkGfm)             // Support GitHub-flavored Markdown
  .use(remarkRehype)          // Convert to HTML AST
  .use(rehypePrism)           // Add syntax highlighting to code blocks
  .use(rehypeStringify)       // Serialize to HTML string
```

Supports:
- Fenced code blocks with language specification (auto-highlighted)
- Tables, strikethrough, task lists (GFM)
- Proper HTML escaping for security

## Key Technical Decisions

### Static Export vs. Server-Side Rendering
The site uses static export for optimal performance and GitHub Pages compatibility. This means:
- All pages are generated at build time
- No runtime server required
- Blog posts and tags must be enumerable at build time
- Use `generateStaticParams()` in dynamic route segments to pre-generate all possible pages

### Color System
Custom color palette defined in `tailwind.config.ts`:

```typescript
colors: {
  primary: { DEFAULT: "#ccdbdc", light: "#e5eff0", dark: "#a8c5c7" },
  secondary: { DEFAULT: "#80ced7", light: "#a8dfe5", dark: "#5eb5bf" },
  accent: { DEFAULT: "#63c7b2", light: "#8dd9c7", dark: "#4aa996" },
  accent2: { DEFAULT: "#8e6c88", light: "#a88aa3", dark: "#6f5469" },
  dark: { DEFAULT: "#263d42", light: "#3a5a61", dark: "#1a2a2e" },
}
```

**Important**: Do NOT use custom color names in `@apply` directives (e.g., `@apply text-dark` fails). Instead:
- Use Tailwind classes: `className="text-dark"` ✓
- Use arbitrary values: `className="text-[#263d42]"` ✓
- Avoid: `@apply text-dark` ✗

### Embedded SecPlus Study SPA

The SecPlus Study single-page application is embedded as static content at `/secplusstudy/`:
- Source: Pre-built SPA output from separate project
- Location: `public/secplusstudy/` (fully copied static files)
- Serves all SPA routes: `/study/all`, `/study/1-5`, `/profile/`, `/reference/`
- No integration needed; served as-is static content

## Common Development Tasks

### Adding a New Blog Post

1. Create file in `src/content/posts/` with format: `YYYY-MM-DD-slug.md`
2. Add YAML frontmatter:
```markdown
---
title: "Post Title"
description: "Brief description"
date: 2024-02-09
tags: tag1 tag2
share: true
---
# Content...
```
3. Run `npm run build` to generate static pages

### Adding a New Root Page

1. Create `src/app/newpage/page.tsx`
2. Export default React component (Server Component by default)
3. Use `generateMetadata()` for SEO meta tags
4. Build and deploy - page is automatically included

### Modifying Styling

- **Tailwind classes**: Use directly in className props
- **Global styles**: Edit `src/app/globals.css`
- **Component styles**: Co-locate with component file (no CSS Modules)
- **Custom colors**: Use Tailwind color classes or arbitrary values `[#hex]`

### Adding Interactive Components

Client-side interactivity uses the `'use client'` directive:
```typescript
'use client'
import { useState } from 'react'
export default function Component() { ... }
```

Examples: `TypedAnimation.tsx`, `ParallaxImage.tsx`, `TimelineItem.tsx`

## Deployment & GitHub Pages

**Automatic Deployment**:
- GitHub Actions workflow triggers on push to `main` or `master`
- Runs `npm run build` to generate `/out` directory
- Uploads artifact and deploys to GitHub Pages

**Manual Testing**:
```bash
npm run build
# Contents of /out/ are ready to deploy
```

**Important**: Do NOT commit the `/out/` directory to git - it's generated fresh each deployment.

## Testing Checklist

When making changes:
- Run `npm run build` locally and verify no errors
- Check that all dynamic routes generate correctly
- Test responsive design across mobile/tablet/desktop
- Verify syntax highlighting on code blocks (if modifying Markdown pipeline)
- Ensure custom colors render correctly

## File Organization

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with Header/Footer
│   ├── page.tsx                 # Homepage (TypedAnimation + ParallaxImage)
│   ├── about/page.tsx           # About page (Timeline animation)
│   ├── blog/                    # Blog list and post pages
│   ├── tags/                    # Tag listing and tag filter pages
│   ├── cv/page.tsx              # Resume/CV page
│   ├── apps/page.tsx            # Apps/Projects page
│   ├── globals.css              # Global Tailwind styles
│   └── not-found.tsx            # 404 page
├── components/
│   ├── layout/                  # Header.tsx, Footer.tsx
│   ├── home/                    # TypedAnimation, ParallaxImage
│   ├── about/                   # TimelineItem
│   ├── blog/                    # PostCard
│   └── apps/                    # AppCard
├── lib/
│   ├── posts.ts                 # Blog utilities (getAllPosts, getPostBySlug, getTags, etc.)
│   ├── markdown.ts              # Unified pipeline for Markdown → HTML
│   └── utils.ts                 # General utilities (cn for class merging)
├── types/
│   └── blog.ts                  # BlogPost, BlogPostMetadata, TimelineItem types
└── content/
    ├── posts/                   # Markdown blog posts (YYYY-MM-DD-slug.md)
    └── profile.json             # Profile/CV data

public/
├── images/                      # Image assets
├── Resume_2026.pdf              # Resume PDF
├── secplusstudy/               # Embedded SecPlus Study SPA (static)
└── .nojekyll                   # GitHub Pages marker
```

## Important Notes for Future Development

1. **Blog Post Naming**: Must follow `YYYY-MM-DD-slug.md` pattern or posts won't be discovered
2. **Build-Time Processing**: All dynamic content (blog posts, tags) is processed at build time via `getAllPosts()`, not at runtime
3. **Image Optimization**: Disabled (`unoptimized: true`) for static export - use optimized images in `public/images/`
4. **URL Preservation**: The Jekyll URL format is critical for SEO - don't change dynamic route structure without redirects
5. **No Environment Variables**: Static export doesn't support runtime environment variables - bake everything into static pages at build time
6. **Git Workflow**: Push to `main`/`master` triggers automatic GitHub Pages deployment via Actions

## Dependencies & Versions

- **next**: 16.1.6 (App Router)
- **react**: 19.2.4
- **tailwindcss**: 4.1.18
- **framer-motion**: 12.34.0 (Animations)
- **gray-matter**: 4.0.3 (YAML frontmatter parsing)
- **unified**, **remark**, **rehype**: Markdown processing pipeline
- **lucide-react**: Icon library

See `package.json` for complete dependency list.

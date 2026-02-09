# Maylor Taylor Portfolio - Next.js 15

A modern portfolio website built with Next.js 15, Tailwind CSS, and shadcn/ui. Migrated from Jekyll static site generator to a performant Next.js application.

## Features

- ✨ Modern, responsive design with custom color palette
- 📝 Blog system with Markdown support and syntax highlighting
- 🏷️ Tag-based blog filtering
- 🎬 Animated components (typed text, parallax scrolling, timeline)
- 📱 Mobile-first responsive design
- 📊 Static site generation (SSG) for optimal performance
- 🧠 Embedded SecPlus Study SPA at `/secplusstudy/`
- 🚀 Deployed to GitHub Pages

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Markdown**: Gray Matter, Remark, Rehype
- **Syntax Highlighting**: Rehype Prism Plus
- **Icons**: Lucide React
- **Hosting**: GitHub Pages (static export)

## Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
```

### Build

```bash
# Build static site
npm run build

# Output goes to `out/` directory
```

## Project Structure

```
src/
├── app/                     # Next.js app router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── about/              # About/Timeline page
│   ├── blog/               # Blog pages
│   ├── cv/                 # Resume/CV page
│   ├── tags/               # Tag pages
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── layout/             # Header, Footer
│   ├── home/               # Homepage components
│   ├── blog/               # Blog components
│   └── about/              # About page components
├── lib/                    # Utility functions
│   ├── posts.ts            # Blog post utilities
│   ├── markdown.ts         # Markdown processing
│   └── utils.ts            # General utilities
├── types/                  # TypeScript types
│   └── blog.ts             # Blog-related types
└── content/                # Content files
    ├── posts/              # Markdown blog posts
    └── profile.json        # Profile data

public/
├── images/                 # Image assets
├── resume.pdf              # Resume file
└── .nojekyll               # GitHub Pages marker
```

## Color Palette

- **Primary**: #ccdbdc (light grayish blue)
- **Secondary**: #80ced7 (light cyan)
- **Accent**: #63c7b2 (medium aquamarine)
- **Accent 2**: #8e6c88 (mauve/purple)
- **Dark**: #263d42 (dark slate)

## Blog Posts

Blog posts are stored in `src/content/posts/` as Markdown files with YAML frontmatter:

```markdown
---
layout: post
title: "Post Title"
description: "Short description"
date: 2024-02-09
tags: tag1 tag2
share: true
---

# Content...
```

URL format is preserved from Jekyll: `/blog/{year}/{month}/{day}/{slug}/`

### Supported Frontmatter Fields

- `title` (required): Post title
- `description`: Short post description
- `date`: Publication date (YYYY-MM-DD)
- `tags`: Space or comma-separated tag list
- `share`: Enable social sharing buttons (optional)

## Static Export

The site is configured for static export to work with GitHub Pages:

```javascript
// next.config.ts
output: 'export'
images: { unoptimized: true }
trailingSlash: true
```

This generates static HTML files in the `out/` directory, which are served directly by GitHub Pages.

## Deployment

### GitHub Pages Setup

1. Push to `master` or `main` branch
2. GitHub Actions workflow automatically builds and deploys
3. Site is served from `https://maylortaylor.github.io`

### Manual Deployment

```bash
# Build the site
npm run build

# The `out/` directory can be deployed to any static host
```

## URL Preservation

All blog post URLs are preserved from the Jekyll site:

- `/blog/2018/08/20/maylortaylor-site-launched`
- `/blog/2018/08/22/into-to-the-blog`
- `/blog/2018/08/27/const-vs-readonly`
- etc.

Tag pages are also preserved:
- `/tags/c-sharp`
- `/tags/general-development`

## SecPlus Study SPA Integration

The SecPlus Study single-page application is embedded at `/secplusstudy/` and includes:
- `/secplusstudy/` - Main study page
- `/secplusstudy/study/all` - All questions
- `/secplusstudy/study/1`, `/study/2`, etc. - Questions by domain
- `/secplusstudy/profile/` - Profile page
- `/secplusstudy/reference/` - Reference materials

The SPA files are served as static content from `public/secplusstudy/` and maintain full functionality when deployed.

## Performance Optimizations

- ✅ Static site generation (zero runtime overhead)
- ✅ Image optimization with Next.js Image component
- ✅ Tailwind CSS purging (minimal CSS bundle)
- ✅ Code splitting and lazy loading
- ✅ SEO meta tags and Open Graph

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome for Android)

## License

Personal portfolio website. All content rights reserved.

## Author

Matt Maylor Taylor - Full Stack Web Developer

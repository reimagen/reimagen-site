# Next.js Migration Plan: React (Vite) → Next.js with Static Export

## Goal
Migrate Reimagen website from Vite + React Router to Next.js with static HTML generation for improved AI crawler visibility.

## Why Next.js?
- **Pre-rendered HTML**: AI crawlers (Claude, GPT, Perplexity) can read full content without executing JavaScript
- **Built-in SEO**: Metadata API generates meta tags server-side
- **Static Export**: `output: 'export'` creates static HTML files perfect for your use case
- **Vercel Optimization**: Already hosted on Vercel, seamless deployment

## Current Setup
- **Build**: Vite 7.0.0
- **Routing**: React Router 7.6.3 (7 routes)
- **Styling**: Tailwind CSS 3.4.17
- **Content**: 100% static (no API data fetching)
- **Dependencies**: Minimal (React 19.1, react-dom, react-router-dom)
- **External**: Swiper.js via CDN, FormSubmit.co for contact form

## Recommended Approach: App Router with Static Generation

Use Next.js App Router with `output: 'export'` configuration for static HTML generation.

---

## Migration Steps

### 1. Create New Next.js Project (1-2 hours)

```bash
# Create new project in a separate directory first
npx create-next-app@latest reimagen-nextjs --no-typescript --tailwind --app --src-dir --no-import-alias

cd reimagen-nextjs

# Install Swiper (migrate from CDN to npm)
npm install swiper
```

**Configuration choices:**
- No TypeScript
- Yes Tailwind CSS
- Yes App Router
- Yes src/ directory
- No custom import alias

### 2. Configure Next.js for Static Export (30 minutes)

**Create `next.config.js`:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Critical: enables static HTML generation
  images: {
    unoptimized: true,  // Required for static export
  },
}

module.exports = nextConfig
```

**Update `package.json` scripts:**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### 3. Migrate Tailwind Configuration (15 minutes)

**Update `/reimagen-nextjs/tailwind.config.js`:**
- Keep Next.js content paths
- Merge custom brand colors from `/Users/lisagu/Projects/Reimagen Website/tailwind.config.js`
- Merge custom font family (Nexa)

**Copy `/Users/lisagu/Projects/Reimagen Website/tailwind.config.js` theme.extend section:**
```javascript
colors: {
  'brand-lavender': '#FAD7F8',
  'brand-pink': '#FF9AA2',
  'brand-peach': '#FFB19E',
  'brand-midnight': '#020617',
  // ... all other brand colors
},
fontFamily: {
  'nexa': ['Nexa', 'sans-serif'],
}
```

### 4. Migrate Assets (30 minutes)

**Move all assets to new project:**
```bash
# From old project to new project
cp -r public/videos reimagen-nextjs/public/
cp public/logo-blur.png reimagen-nextjs/public/
cp public/robots.txt reimagen-nextjs/public/
cp public/sitemap.xml reimagen-nextjs/public/
cp public/*.svg reimagen-nextjs/public/

# Move images from src/assets/ to public/assets/
mkdir reimagen-nextjs/public/assets
cp src/assets/* reimagen-nextjs/public/assets/
```

**Update asset references in all files:**
- Change: `import monumentPoster from "../assets/monument-valley-aurora.jpg"`
- To: `const monumentPoster = "/assets/monument-valley-aurora.jpg"`

### 5. Migrate Global Styles (15 minutes)

**Copy styles:**
```bash
cp src/index.css reimagen-nextjs/src/app/globals.css
mkdir reimagen-nextjs/src/styles
cp src/styles/* reimagen-nextjs/src/styles/
```

**Import additional CSS in components:**
- Import `galleryCarousel.css` in GalleryCarousel component
- Import `contactFlip.css` in Contact page

### 6. Create Root Layout (1 hour)

**Critical file**: `/reimagen-nextjs/src/app/layout.js`

This replaces:
- `/Users/lisagu/Projects/Reimagen Website/src/components/Layout.jsx`
- Index.html meta tags
- Schema.org markup

**Key elements:**
```javascript
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Global metadata (for home page and defaults)
export const metadata = {
  title: 'Reimagen - AI Consulting for Startups, Consumer Brands, and Advertisers',
  description: 'Tool-agnostic AI consulting...',
  openGraph: { /* ... */ },
  twitter: { /* ... */ },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Global schema.org JSON-LD from Home.jsx */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{...}} />
      </head>
      <body className="min-h-screen bg-black text-white flex flex-col">
        <Navbar />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
```

**Migrate schema.org from** `/Users/lisagu/Projects/Reimagen Website/src/pages/Home.jsx:327-383`

**Delete after migration:**
- `/Users/lisagu/Projects/Reimagen Website/src/components/Layout.jsx` (logic moved to layout.js)
- `/Users/lisagu/Projects/Reimagen Website/src/components/ScrollToTop.jsx` (Next.js handles automatically)

### 7. Migrate Pages (3-4 hours)

**New structure:**
```
src/app/
├── layout.js          # Root layout (already created)
├── page.js            # Home (/)
├── about/
│   ├── layout.js      # Custom metadata
│   └── page.js        # About page content
├── gallery/
│   ├── layout.js
│   └── page.js
├── products/
│   ├── layout.js
│   └── page.js
├── toolkit/
│   ├── layout.js
│   └── page.js
├── contact/
│   ├── layout.js
│   └── page.js
└── not-found.js       # 404 page
```

**For EVERY page component:**

1. **Add `'use client'` directive at top** (all pages use hooks/state)
2. **Remove `useDocumentHead()` call** (replaced by layout metadata)
3. **Update import paths** if needed (use relative or @/ alias)
4. **Keep all other logic unchanged**

**Example: Home page** (`/reimagen-nextjs/src/app/page.js`)
```javascript
'use client'

import { useState, useEffect } from 'react'
// ... other imports (update paths)

export default function Home() {
  // REMOVE: useDocumentHead() call
  // REMOVE: schema.org useEffect (moved to root layout)

  // KEEP: All state, effects, and rendering logic
  const [reduceMotion, setReduceMotion] = useState(false)
  // ... rest of component unchanged
}
```

**For pages with custom metadata**, create parallel `layout.js`:

**Example: About** (`/reimagen-nextjs/src/app/about/layout.js`)
```javascript
export const metadata = {
  title: "About Reimagen | Tool-agnostic AI Consulting",
  description: "Reimagen helps teams decide where AI belongs...",
  openGraph: {
    images: ['/assets/galaxy.jpg'],
  },
}

export default function AboutLayout({ children }) {
  return children
}
```

**Handle pt-24 padding** from old Layout.jsx:
- Root layout should NOT add padding to children
- Each page (except home) should add `<div className="pt-24">` wrapper OR add padding via layout

**Alternative approach for padding:**
Create template.js in each route folder (except home) that adds padding wrapper.

### 8. Migrate Components (2 hours)

**Copy all components:**
```bash
cp -r src/components reimagen-nextjs/src/
cp -r src/data reimagen-nextjs/src/
```

**Add `'use client'` to components using hooks/browser APIs:**
- `/Users/lisagu/Projects/Reimagen Website/src/components/Navbar.jsx`
- `/Users/lisagu/Projects/Reimagen Website/src/components/GalleryCarousel.jsx`
- `/Users/lisagu/Projects/Reimagen Website/src/components/CarouselNavigationButtons.jsx`
- Any component using `useReveal` hook

**Update Navbar routing:**
```javascript
'use client'

import Link from 'next/link'  // Changed from react-router-dom
import { usePathname } from 'next/navigation'  // Changed from useLocation

export default function Navbar() {
  const pathname = usePathname()  // Returns string directly

  // Update all <Link to="/about"> to <Link href="/about">
  // Replace location.pathname with pathname
}
```

**Footer**: No changes needed (likely static)

### 9. Migrate Custom Hooks (15 minutes)

**Copy hooks:**
```bash
mkdir reimagen-nextjs/src/hooks
cp src/hooks/useReveal.js reimagen-nextjs/src/hooks/
```

**Delete `useDocumentHead.js`** - replaced by Next.js Metadata API

### 10. Update Swiper Integration (30 minutes)

**Old approach** (CDN in GalleryCarousel):
```javascript
// Dynamically loaded from CDN
```

**New approach** (npm package):
```javascript
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// Use Swiper component directly
<Swiper modules={[EffectCoverflow, Pagination]} {...options}>
  {/* slides */}
</Swiper>
```

### 11. Handle Contact Form (15 minutes)

**Option A: Keep FormSubmit.co** (Recommended - simplest)
- No changes needed
- Component works as-is

**Option B: Create Next.js API Route** (Optional)
- Create `/reimagen-nextjs/src/app/api/contact/route.js`
- Proxy to FormSubmit.co for better control
- Update form action URL to `/api/contact`

Start with Option A, migrate to Option B only if needed.

---

## Critical Files to Modify

### Must Update:
1. `/src/components/Navbar.jsx` - Change Link and useLocation imports
2. All pages in `/src/pages/` - Add 'use client', remove useDocumentHead
3. `/src/components/GalleryCarousel.jsx` - Migrate from CDN to npm Swiper
4. All asset import statements - Change to public path strings

### Files to Create:
1. `/src/app/layout.js` - Root layout with metadata and schema
2. `/src/app/page.js` - Home page
3. `/src/app/{route}/layout.js` - Custom metadata for each route
4. `/src/app/{route}/page.js` - Page content for each route
5. `/src/app/not-found.js` - 404 page
6. `next.config.js` - With `output: 'export'`

### Files to Delete:
1. `/src/App.jsx` - Routing now file-based
2. `/src/main.jsx` - Next.js handles entry
3. `/src/components/Layout.jsx` - Replaced by layout.js
4. `/src/components/ScrollToTop.jsx` - Built into Next.js
5. `/src/hooks/useDocumentHead.js` - Replaced by Metadata API
6. `vite.config.js` - Replaced by next.config.js
7. `index.html` - Replaced by layout.js

---

## Gotchas & Risks

### CRITICAL Issues:

1. **'use client' Required**
   - All pages use hooks/state → MUST add `'use client'` at top
   - Forgetting this causes "useState/useEffect can't be used in Server Components" errors
   - Components to mark: All pages, Navbar, GalleryCarousel, any component using useReveal

2. **Metadata in Client Components**
   - Client components (`'use client'`) CANNOT export metadata
   - **Solution**: Create parallel `layout.js` (Server Component) for each route needing custom metadata
   - Example: `/app/about/layout.js` exports metadata, `/app/about/page.js` is client component

3. **Asset Path Changes**
   - Old: `import logo from '../assets/logo.jpg'` (Vite handles this)
   - New: `const logo = '/assets/logo.jpg'` (reference public folder)
   - **Must move** all images from `src/assets/` to `public/assets/`

4. **Routing API Changes**
   - React Router: `import { Link, useLocation } from 'react-router-dom'`
   - Next.js: `import Link from 'next/link'` and `import { usePathname } from 'next/navigation'`
   - `<Link to="/about">` → `<Link href="/about">`
   - `location.pathname` → `pathname` (usePathname returns string directly)

5. **Layout Padding Logic**
   - Old Layout.jsx adds `pt-24` conditionally based on route
   - Options for Next.js:
     - A. Add padding wrapper in each non-home page
     - B. Create route-specific layouts with padding
     - C. Use template.js to add conditional wrapper
   - **Recommended**: Add `<div className="pt-24">` in each page except Home

### Performance Notes:

1. **Image Optimization Disabled**
   - Static export requires `images: { unoptimized: true }`
   - Can't use Next.js Image optimization features
   - **Mitigation**: Manually optimize images before adding to public folder

2. **Client-Heavy Site**
   - All pages need 'use client' = no Server Component benefits for pages
   - **Impact**: Still get static HTML pre-rendering (your main goal!)
   - **Future optimization**: Refactor to split static sections into Server Components

3. **Swiper Bundle Size**
   - Moving from CDN to npm adds to bundle
   - **Mitigation**: Import only needed modules (`EffectCoverflow`, `Pagination`)

### Migration Risks:

1. **Route Animation**
   - Old: `route-fade` class on route change wrapper in Layout.jsx
   - Next.js: No direct equivalent for page transition animations
   - **Solution**: Use pathname in useEffect to trigger animations, or use Framer Motion

2. **Schema.org Placement**
   - Home page currently injects schema in useEffect (client-side)
   - Moving to root layout makes it server-side (better for SEO!)
   - Verify schema is rendered in HTML source, not injected by JS

---

## Verification Checklist

### Local Development Testing:

```bash
cd reimagen-nextjs
npm run dev
```

**Test each page:**
- [x] Home (/) - Hero video, animations, scroll reveals
- [x] About (/about) - Video backgrounds, animations
- [x] Gallery (/gallery) - Carousel navigation, video playback
- [x] Products (/products) - Horizontal scroll carousels
- [x] Toolkit (/toolkit) - Scroll to sections, animations
- [x] Contact (/contact) - Form submission, flip animation
- [x] 404 - Navigate to invalid route

**Test navigation:**
- [x] Links between pages work
- [x] Browser back/forward buttons work
- [x] Mobile menu toggles correctly
- [x] Active link highlighting in navbar
- [x] Scroll position resets on navigation (except Home)

**Test interactivity:**
- [x] All videos autoplay and loop
- [x] Scroll animations trigger on reveal (useReveal)
- [x] Contact form submission works
- [x] Contact card flip animation works
- [x] Gallery carousel swipe/navigation works
- [x] Responsive design (mobile, tablet, desktop)

### Build & Static Export Testing:

```bash
npm run build
```

**Verify build output:**
- [x] Build completes without errors
- [x] Check `/out` directory created
- [x] Each route has `.html` file (index.html, about.html, gallery.html, etc.)
- [x] Assets copied to `/out` (videos, images, fonts)

**Test static HTML:**
```bash
# Serve the out directory
npx serve out
```

- [x] All pages load correctly
- [x] No console errors (check for hydration mismatches)
- [x] View page source - verify content is in HTML (not JS-injected)

### SEO & Metadata Verification:

**For each page**, view source (Cmd/Ctrl+U) and verify:
- [x] `<title>` tag present and correct
- [x] `<meta name="description">` present
- [x] `<meta property="og:*">` tags present (Open Graph)
- [x] `<meta name="twitter:*">` tags present
- [x] Schema.org JSON-LD `<script type="application/ld+json">` in HTML

**Test with tools:**
- [ ] Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Open Graph Debugger: https://www.opengraph.xyz/
- [ ] Run Lighthouse audit (Target: SEO 100, Performance 90+)

### AI Crawlability Test:

**The main goal!**

1. Open `/out/index.html` in browser
2. View page source (Cmd/Ctrl+U)
3. Verify all visible content is in the HTML:
   - [x] Hero section text visible in HTML
   - [x] "What We Do" section text visible
   - [ ] "Who We Work With" section visible
   - [x] Process steps visible
   - [x] No content that says "Loading..." or requires JS to render

4. Test with Claude:
   - Copy HTML source from `/out/index.html`
   - Ask Claude: "What does this company do?"
   - Verify Claude can accurately describe Reimagen's services

### Production Deployment:

**Update Vercel project:**
1. Go to Vercel dashboard → Project Settings
2. Change Framework Preset to "Next.js"
3. Verify Build Command: `next build`
4. Verify Output Directory: (leave empty)

**Deploy:**
```bash
cd reimagen-nextjs
git init
git add .
git commit -m "Initial Next.js migration"

# Push to your repository (connect to Vercel)
# Or use Vercel CLI:
vercel
```

**Production verification:**
- [ ] All pages load correctly on production URL
- [ ] View source shows pre-rendered content
- [ ] Test on multiple devices (iOS Safari, Chrome Mobile, Desktop)
- [ ] No console errors in production
- [ ] Check Vercel deployment logs for any issues

### Post-Deploy Testing:

- [ ] Test with real AI crawlers (may take time to re-index)
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor Vercel Analytics for errors
- [ ] Run production Lighthouse audit
- [ ] Test all external links (footer social links)
- [ ] Verify contact form works in production

---

## Rollback Plan

**Before migration:**
1. Ensure current Vite site is in git with clean commit
2. Create backup branch: `git checkout -b vite-backup`

**If issues occur:**
1. Keep both projects during testing phase
2. Can revert Vercel to previous deployment from dashboard
3. Old codebase at `/Users/lisagu/Projects/Reimagen Website`
4. New codebase at `/reimagen-nextjs`

**After successful migration:**
1. Replace old project directory with new one
2. Update repository remote
3. Keep vite-backup branch for reference

---

## Status & Remaining Work

### ✅ Completed
- Local dev testing (pages, navigation, interactivity)
- Build + static export checks (`out/` created, routes exported)
- Static HTML verification (page source includes content)
- Metadata + JSON-LD presence verified in HTML
- Vercel deployment created (new project deployed)

### ⏳ Remaining
- SEO tool audits (Rich Results, Open Graph Debugger, Lighthouse)
- AI crawlability: confirm "Who We Work With" section in HTML and Claude test
- Production verification on custom domain (load, view source, devices, console, logs)
- Post-deploy checks (sitemap submission, analytics, external links, production form test)

---

## Post-Migration Optimizations (Future)

Once migration is stable:

1. **Image Optimization**: Use Next.js `<Image>` with custom loader for WebP/AVIF
2. **Server Components**: Refactor pages to split static sections into Server Components
3. **Code Splitting**: Dynamic import heavy components (Swiper, videos)
4. **Analytics**: Add Vercel Analytics or Google Analytics
5. **API Route**: Migrate contact form to Next.js API route for better control
6. **Sitemap**: Use next-sitemap package for automated sitemap generation
7. **Performance**: Monitor Core Web Vitals, optimize LCP/CLS/FID
- ✅ Metadata warning resolved (`metadataBase` set)
- ✅ Tailwind v4 working with @apply
- ⬜ Swap directories (keep current project as rollback as Reimagen-Website-backup)
- ⬜ Deploy and validate production URLs

### Project Structure
```
/Users/lisagu/Projects/reimagen-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx (root with metadata & schema)
│   │   ├── page.jsx (home)
│   │   ├── not-found.jsx (404)
│   │   ├── about/
│   │   ├── contact/
│   │   ├── gallery/
│   │   ├── products/
│   │   └── toolkit/
│   ├── components/ (all migrated)
│   ├── data/ (toolkitData.js)
│   ├── hooks/ (useReveal.js)
│   └── styles/ (CSS files)
├── public/ (assets: videos, images)
├── next.config.js (output: 'export' configured)
└── tailwind.config.js (brand colors merged)
```

---

## Key Takeaway

This migration maintains all current functionality while achieving the primary goal: **pre-rendered HTML that AI crawlers can read without executing JavaScript**. The App Router with `output: 'export'` configuration is perfect for your static business site and solves the crawlability problem Claude identified.

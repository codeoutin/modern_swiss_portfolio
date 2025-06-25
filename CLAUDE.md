# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional portfolio website built with Next.js 14, React, and TypeScript, specifically designed for the Swiss market. It showcases Patrick Steger's services as a Senior Full-Stack Developer, targeting Swiss companies with transparent pricing (CHF 150/h) and professional service offerings. The site features modern design, interactive elements, and is optimized for Swiss SEO.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Technology Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Monitoring**: Sentry for error tracking
- **Theming**: next-themes (forced dark mode)

### Project Structure
- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable React components
- `/components/ui` - UI components with advanced animations and effects
- `/data` - Static data exports (navigation, projects, testimonials, etc.)
- `/lib` - Utility functions
- `/public` - Static assets (SVGs, images)
- `/pages/r` - Redirect pages for shortened URLs

### Key Components Architecture
The main page (`app/page.tsx`) renders components in this order:
1. `FloatingNav` - Animated navigation bar (German navigation)
2. `Hero` - Professional landing section with Swiss focus and pricing
3. `Grid` - Interactive grid showcase using BentoGrid (Swiss-focused content)
4. `Services` - Professional services section with pricing (CHF 150/h)
5. `RecentProjects` - Project portfolio section (German descriptions)
6. `Clients` - Testimonials with infinite scroll
7. `Experience` - Work experience timeline (current role at Sly AG)
8. `Approach` - Development approach section
9. `Contact` - Hybrid contact section with Cal.com integration and project form
10. `Footer` - Simplified footer with legal links and social media

### Data Management
All content is centralized in `/data/index.ts` with typed exports (German/Swiss-focused):
- `navItems` - Navigation links (German: Über mich, Services, etc.)
- `gridItems` - About section grid content (Swiss market focus, pricing)
- `projects` - Portfolio projects (German descriptions, Swiss context)
- `testimonials` - Client testimonials
- `companies` - Company logos and info
- `workExperience` - Career timeline (current Sly AG role highlighted)
- `socialMedia` - Social media links

### UI Components
Advanced UI components in `/components/ui/`:
- `BentoGrid` - Interactive grid layout with animations
- `Globe` - 3D globe visualization with React Three Fiber
- `FloatingNav` - Scroll-aware navigation
- `InfiniteMovingCards` - Animated testimonials carousel
- `TextGenerateEffect` - Typewriter text animations
- `CanvasRevealEffect` - Canvas-based reveal animations
- `3d-pin` - Interactive 3D pin components

### Redirect System
Short URL redirects are handled via `/pages/r/[page].ts` files using Next.js `getServerSideProps`. See `/pages/redirects.md` for implementation details.

### Sentry Configuration
Comprehensive error monitoring setup across:
- `sentry.client.config.ts` - Client-side error tracking
- `sentry.server.config.ts` - Server-side error tracking
- `sentry.edge.config.ts` - Edge runtime error tracking
- `instrumentation.ts` - Runtime-specific initialization

### SEO & Structured Data
- `components/StructuredData.tsx` - Schema.org markup for Swiss business
- Optimized metadata for Swiss market and Zürich location
- German keywords and Swiss-specific content optimization

### Contact & Lead Generation
- `components/Contact.tsx` - Hybrid contact section with Cal.com and form
- `app/api/contact/route.ts` - API endpoint for form submissions with Resend integration
- **Cal.com Integration**: Direct scheduling for 30-min consultations
- **Project Form**: Detailed form for complex project inquiries
- **Resend Email Service**: Professional HTML emails sent automatically
- Form validation, error handling, and success states implemented
- Environment variables: RESEND_API_KEY, FROM_EMAIL, TO_EMAIL

## Important Notes

- **Swiss Market Focus**: Content is German/Swiss-focused with CHF pricing
- **SEO Optimized**: Structured data, Swiss keywords, and local SEO
- **Professional Services**: Dedicated Services component with transparent pricing
- **Current Availability**: Shows 1-2 days/week availability (employed at Sly AG)
- **Modern Tech Stack**: Updated to latest versions of React, Next.js, TypeScript
- **Performance**: Optimized for Swiss business clients with professional design
- **Hybrid Contact System**: Cal.com for consultations + detailed project form
- The site uses a forced dark theme via ThemeProvider
- Content should be updated in `/data/index.ts` rather than hardcoded in components
- The build process includes Sentry source map upload for debugging
- SVG assets are extensively used for scalable graphics

## Swiss Market Positioning

- **Target Audience**: Swiss companies looking for professional development services
- **Pricing**: Transparent CHF 150/h hourly rate
- **Availability**: 1-2 days per week (employed full-time at Sly AG)
- **Location**: Zürich-based, available Switzerland-wide
- **Languages**: German-focused content for Swiss market
- **Services**: Full-stack development, consulting, team mentoring
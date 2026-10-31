# chaotic-solutions-site

Website for Chaotic Solutions, the technology and IT services division of
Chaotic Minds Collective.

> Order from the chaos. Solutions that work.

## Stack (decided 2026-10-31)

- **Framework:** Next.js (App Router) + TypeScript + Tailwind CSS v4
- **Hosting:** Vercel free tier (vercel.app subdomain until the real domain is registered)
- **Backend:** existing Supabase project "Chaotic Minds Website"
- **Contact form:** Tally free tier or Resend-backed form feeding Google Workspace email (to be wired)

## Local development

1. Install Node.js 20+ (LTS).
2. `npm install`
3. `npm run dev` -> http://localhost:3000

## Project layout

- `app/` - pages and layout (App Router)
- `lib/pricing.ts` - single source of truth for all service copy and pricing
- `app/globals.css` - brand color tokens (void/coal/steel/volt = the turquoise)
- `docs/DECISIONS.md` - running decision log

## Deployment (Vercel)

1. Push to `main`.
2. In Vercel: Add New -> Project -> import `psyryn82/chaotic-solutions-site`.
3. Accept the detected Next.js settings, click Deploy. No environment variables needed yet.
4. When the chaoticmindscollective.com domain is registered, add
   `solutions.chaoticmindscollective.com` in Vercel -> Domains and set the
   DNS records at Cloudflare.

## Pricing/copy rules

- Public prices exist only for Build, Maintain, and Fix tiers (see `lib/pricing.ts`).
- Full Package and Rescue Job are quoted per project - no public figures.
- Service area: local AND remote.
- Response time: depends on the project (stated as such on the site).

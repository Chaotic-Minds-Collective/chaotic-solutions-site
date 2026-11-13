# Chaotic Minds Solutions

The website for **Chaotic Minds Solutions (CMS)**, the technology and IT services brand within Chaotic Minds Collective.

> Order from the chaos. Solutions that work.

## Stack (updated 2026-11-05)

- **Framework:** Next.js (App Router) + TypeScript + Tailwind CSS v4
- **Hosting:** Cloudflare Workers (worker `chaotic-solutions-site`, built automatically from `main`)
- **Domain:** solutions.chaoticmindscollective.com (DNS zone hosted on Cloudflare; migrated from IONOS on 2026-11-05)
- **Backend:** existing Supabase project (inquiries table)
- **Contact form:** Tally form `OQa5xg` -> Supabase Edge Function `tally-inquiry` -> `public.inquiries`

## Local development

1. Install Node.js 20+ (LTS).
2. `npm install`
3. `npm run dev` -> http://localhost:3000

## Project layout

- `app/` - pages and layout (App Router)
- `lib/pricing.ts` - single source of truth for all service copy and pricing
- `app/globals.css` - brand color tokens (void/coal/steel/volt = the turquoise)
- `public/brand/` - favicon, icon and emblem asset set
- `docs/DECISIONS.md` - running decision log
- `docs/CONTACT-FORM.md` - inquiry form + pipeline setup

## Deployment (Cloudflare Workers)

1. Open a feature branch and submit a PR (never commit straight to `main`).
2. Merge the PR - Cloudflare Workers Builds builds and deploys automatically.
3. `solutions.chaoticmindscollective.com` is bound to the worker as a custom domain.

Note: the old Vercel deployment is retired. Vercel could not build from a
private GitHub organization repository on the Hobby plan, which is why hosting
moved to Cloudflare Workers.

## Pricing/copy rules

- Public prices exist only for Build, Maintain, and Fix tiers (see `lib/pricing.ts`).
- Full Package and Rescue Job are quoted per project - no public figures.
- Service area: local AND remote.
- Response time: depends on the project (stated as such on the site).

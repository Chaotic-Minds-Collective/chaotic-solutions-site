# CMS Site - Decision Log

Key decisions with dates. Update this file when a decision changes.

| Date | Decision | Status |
|------|----------|--------|
| 2026-10-31 | Platform: Next.js on Vercel + existing Supabase project | DECIDED (superseded 2026-11-05: hosting moved to Cloudflare Workers) |
| 2026-10-31 | Contact path: simple inquiry form feeding the business inbox; booking link later | DECIDED |
| 2026-10-31 | Pricing v1: Build $750/$1,500; Maintain $50/$100/$175/mo; Fix $65/hr, audit $300; Full Package + Rescue quoted per project | DECIDED (draft) |
| 2026-10-31 | Service area: local AND remote | DECIDED |
| 2026-10-31 | Response time: depends on the project | DECIDED |
| 2026-10-31 | Portfolio cleared: FQ SNRG MMA site, The Diagnostic Bay, Chaotic Command | DECIDED |
| 2026-10-31 | Logo/brand: build with placeholders, swap when final | DECIDED |
| 2026-10-31 | Domains: Cloudflare DNS, bought one at a time by Danielle (never auto-registered) | DECIDED |
| 2026-11-05 | Hosting: Vercel -> Cloudflare Workers. Reason: Vercel Hobby plan cannot build from a private GitHub organization repository; Cloudflare Workers Builds works from `main` | DECIDED |
| 2026-11-05 | DNS: zone chaoticmindscollective.com migrated from IONOS to Cloudflare (nameservers kolton/linda.ns.cloudflare.com). All records mirrored and verified DNS-only before cutover | DECIDED |
| 2026-11-05 | Inquiry pipeline: Tally form `OQa5xg` -> Supabase Edge Function `tally-inquiry` (secret-key URL) -> `public.inquiries` table, insert-only RLS policy `tally_webhook_insert_only`. Previous Make scenario and webhook deleted | DECIDED |
| 2026-11-05 | Brand assets: favicon set, icons/emblems, 1536x864 hero, 1200x630 OG image merged via PR #7 and wired into `app/layout.tsx` metadata | DECIDED |
| OPEN | Which services show public prices vs contact-for-quote | OPEN |
| OPEN | Simplified-mark SVG redraw (PNG variants exist) | OPEN |

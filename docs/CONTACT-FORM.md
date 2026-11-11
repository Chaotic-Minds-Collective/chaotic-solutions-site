# Contact Form Setup (Tally + Supabase)

The project inquiry form is embedded from Tally on both `/contact` and `/inquiry`. Keeping both routes on the same form ensures every submission follows the notification and storage pipeline below.

## Current pipeline (2026-11-05)

1. A visitor submits the embedded Tally form (form ID `OQa5xg`, "Chaotic Solutions - Project Inquiry") on `/contact` or `/inquiry`.
2. Tally sends a webhook to the Supabase Edge Function `tally-inquiry` (project `sfelfrxrgszezztjyvtv`). The function URL contains a secret key - it is a credential and is documented in the project notes, never in this repo.
3. The function validates the secret key and form ID, maps field values by label (with fallback indexes), and inserts a row into `public.inquiries` with `status = 'new'` plus the raw payload.
4. An insert-only RLS policy (`tally_webhook_insert_only`) allows anonymous inserts but blocks reads, updates and deletes. Nobody can scrape the table.
5. Tally notification emails go to chaotic.minds.info@gmail.com so every inquiry also lands in the business inbox.

## Changing the form fields

If you add or reorder fields in Tally, the Edge Function maps by label first and falls back to fixed indexes. Check `supabase/functions/tally-inquiry/` (or the function source in the Supabase dashboard) and update the label map to match, then redeploy the function.

## Testing

1. Submit a real test through the form at `/contact` and `/inquiry`.
2. Confirm the row appears in Supabase (`public.inquiries`) with mapped fields and `status = 'new'`.
3. Confirm the notification email arrives at the business inbox.

A synthetic end-to-end test (direct function call) passed on 2026-11-05; a bad secret key returns 403 and a wrong form ID returns 400.

## Why this stack (decision note)

- Tally free tier: unlimited forms and submissions, email notifications.
- Supabase Edge Function replaces the previous Make.com scenario (Make organization was paused over negative credits; the Edge Function is permanent and $0).
- Keep the secret function URL out of the repo. Treat it like a password.

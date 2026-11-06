/*
 * Supabase browser client for the inquiry form.
 *
 * The publishable (anon) key is NOT a secret: it is designed to ship in
 * public client code. Security comes from the database's insert-only RLS
 * policy "tally_webhook_insert_only", which allows anonymous INSERTs only,
 * with length limits and a required valid email. Reads/updates/deletes are
 * denied to anon.
 */
export const SUPABASE_URL = "https://sfelfrxrgszezztjyvtv.supabase.co";

// Publishable key from project "Chaotic Minds Website"
// (sfelfrxrgszezztjyvtv). Rotate or move to env vars if policy changes.
export const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_QdBQ1ZUvkbpqf3rNofKrEg_9nyEqsCH";

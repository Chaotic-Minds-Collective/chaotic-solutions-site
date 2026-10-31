# Contact Form Setup (Tally free tier)

## Step-by-step

1. Go to https://tally.so and sign up free (use chaotic.minds.info@gmail.com
   so the business form lives on the business account).
2. Click **Create form**, name it "Chaotic Solutions - Project Inquiry".
3. Add these blocks, in order:

   | # | Block type | Label | Required? |
   |---|------------|-------|-----------|
   | 1 | Short answer | Your name | Yes |
   | 2 | Email | Your email | Yes |
   | 3 | Multiple choice | What do you need? | Yes |
   | 4 | Long answer | Tell us about your project | Yes |
   | 5 | Long answer | Anything else? (budget, timeline, links) | No |

   Multiple choice options for #3:
   - New website (Build)
   - Ongoing maintenance (Maintain)
   - Fix something broken (Fix)
   - Security audit
   - Full Package (build + maintain + fix)
   - Something else
4. In the form settings:
   - Turn ON **Email notifications** (sent to you on every submission - free).
   - Set the notification email to chaotic.minds.info@gmail.com.
   - Turn ON **Self-notifications are anonymous-free** - actually skip this,
     default is fine.
5. Click **Publish**, then copy the share link. It looks like
   `https://tally.so/r/XXXXXXXX`.
6. Send the XXXXXXXX part (the form ID) to your assistant, or edit
   `app/page.tsx` yourself: paste it into `TALLY_FORM_ID` at the top of the
   file, commit to main. The site auto-deploys and the form goes live.

## Styling tips (optional, free)

- Form -> Theme: pick a dark background theme so it blends with the site.
- The embed code already requests transparent background and left alignment.

## Why Tally (decision note)

- Free tier: unlimited forms, unlimited submissions, email notifications.
- No backend code needed; embeds in one iframe.
- If we later want a fully custom form, we swap to a Resend-backed form and
  delete the embed. Nothing else changes.

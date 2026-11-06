import type { Metadata } from "next";

/*
 * CONTACT FORM: Tally free tier, live.
 * Form: https://tally.so/r/OQa5xg - setup doc in docs/CONTACT-FORM.md.
 * Submissions email-notify chaotic.minds.info@gmail.com.
 */
const TALLY_FORM_ID = "OQa5xg";

export const metadata: Metadata = {
  title: "Start a project - Chaotic Solutions",
  description:
    "Tell us what you need - a new website build, ongoing care, or a fix. We reply to every inquiry.",
};

export default function Contact() {
  return (
    <main>
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h1 className="text-4xl text-white sm:text-5xl">Start a project</h1>
        <p className="mt-3 max-w-2xl text-lg">
          Tell us what you need - a new build, ongoing care, or a fix. We reply
          to every inquiry; response time depends on the current project load.
        </p>
        <iframe
          src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1`}
          width="100%"
          height="620"
          className="mt-8 rounded-xl border border-steel bg-coal/60"
          title="Project inquiry form"
        />
      </section>
    </main>
  );
}

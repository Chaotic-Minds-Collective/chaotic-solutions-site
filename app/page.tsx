import {
  buildTiers,
  maintainTiers,
  fixTiers,
  quotedServices,
  type PriceTier,
} from "@/lib/pricing";

/*
 * CONTACT FORM SETUP
 * 1. Create the form at tally.so (free tier) using the field spec in
 *    docs/CONTACT-FORM.md.
 * 2. Copy the form ID from the form's public URL
 *    (tally.so/r/XXXXXXXX -> the XXXXXXXX part).
 * 3. Paste it below. The embedded form replaces the placeholder automatically.
 */
const TALLY_FORM_ID = ""; // <- paste form ID here

const services = [
  {
    title: "Build",
    tagline: "New sites, done right",
    body:
      "From a single landing page to a full business site. Built on modern, maintainable technology so it is easy to grow and cheap to run.",
  },
  {
    title: "Maintain",
    tagline: "Staying healthy",
    body:
      "Updates, backups, monitoring, and content changes. Your site stays current and secure without you thinking about it.",
  },
  {
    title: "Fix",
    tagline: "Breaking things apart",
    body:
      "Something broken, slow, or compromised? Diagnostics first, then a clear fix and a plain-English explanation of what happened.",
  },
];

function TierCard({ tier }: { tier: PriceTier }) {
  return (
    <div
      className={`rounded-xl border p-6 ${
        tier.highlight
          ? "border-volt/60 bg-steel/60"
          : "border-steel bg-coal/60"
      }`}
    >
      <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
      <p className="mt-1 text-2xl font-bold text-volt">{tier.price}</p>
      <p className="mt-2 text-sm">{tier.blurb}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {tier.points.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="text-volt">/</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-28 pb-20 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-volt">
          Chaotic Solutions
        </p>
        <h1 className="mt-4 text-4xl font-bold text-white sm:text-6xl">
          Order from the chaos.
          <span className="block text-volt">Solutions that work.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg">
          Practical technology for individuals, entrepreneurs, and businesses.
          Websites built, maintained, and repaired - with security taken
          seriously from day one.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="rounded-lg bg-volt px-6 py-3 font-semibold text-void hover:bg-volt-dim"
          >
            Start a project
          </a>
          <a
            href="#pricing"
            className="rounded-lg border border-steel px-6 py-3 font-semibold text-white hover:border-volt"
          >
            See pricing
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-bold text-white">What we do</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-steel bg-coal/60 p-6">
              <h3 className="text-xl font-semibold text-volt">{s.title}</h3>
              <p className="mt-1 text-sm uppercase tracking-wide text-mist/70">
                {s.tagline}
              </p>
              <p className="mt-4 text-sm">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-bold text-white">Pricing</h2>
        <p className="mt-2 max-w-2xl">
          Straightforward rates, no surprises. Serving clients locally and
          remotely. Bigger jobs are quoted per project so you always know the
          number before work starts.
        </p>

        <h3 className="mt-12 text-xl font-semibold text-volt">Build</h3>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {buildTiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>

        <h3 className="mt-12 text-xl font-semibold text-volt">Maintain</h3>
        <div className="mt-4 grid gap-6 sm:grid-cols-3">
          {maintainTiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>

        <h3 className="mt-12 text-xl font-semibold text-volt">Fix</h3>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {fixTiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {quotedServices.map((s) => (
            <div key={s.name} className="rounded-xl border border-dashed border-steel bg-coal/40 p-6">
              <h3 className="text-lg font-semibold text-white">{s.name}</h3>
              <p className="mt-2 text-sm">{s.blurb}</p>
              <p className="mt-4 text-sm font-semibold text-volt">
                Contact for a quote
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-bold text-white">Start a project</h2>
        <p className="mt-2 max-w-2xl">
          Tell us what you need - a new build, ongoing care, or a fix. We reply
          to every inquiry; response time depends on the current project load.
        </p>
        {TALLY_FORM_ID ? (
          <iframe
            src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1`}
            width="100%"
            height="520"
            className="mt-8 rounded-xl border border-steel bg-coal/60"
            title="Project inquiry form"
            loading="lazy"
          />
        ) : (
          <div className="mt-8 rounded-xl border border-dashed border-volt/40 bg-coal/40 p-8 text-center">
            <p className="text-sm text-mist/70">
              Inquiry form goes here. Until it is wired up, reach us at:
            </p>
            <p className="mt-2 text-lg font-semibold text-volt">
              hello@ [domain pending]
            </p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-steel">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm sm:flex-row">
          <p>
            <span className="font-semibold text-white">Chaotic Solutions</span>
            <span className="mx-2 text-mist/40">|</span>
            A Chaotic Minds Collective division
          </p>
          <p className="text-mist/50">Order from the chaos. Solutions that work.</p>
        </div>
      </footer>
    </main>
  );
}

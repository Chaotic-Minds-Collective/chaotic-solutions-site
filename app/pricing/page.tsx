import type { Metadata } from "next";
import {
  buildTiers,
  maintainTiers,
  fixTiers,
  quotedServices,
} from "@/lib/pricing";
import TierCard from "@/components/TierCard";

export const metadata: Metadata = {
  title: "Pricing - Chaotic Minds Solutions",
  description:
    "Straightforward rates for website builds, maintenance plans, and fix-it work. Bigger jobs quoted per project.",
};

export default function Pricing() {
  return (
    <main>
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h1 className="text-4xl text-white sm:text-5xl">Pricing</h1>
        <p className="mt-3 max-w-2xl text-lg">
          Straightforward rates, no surprises. Serving clients locally and
          remotely. Bigger jobs are quoted per project so you always know the
          number before work starts.
        </p>

        <h2 className="mt-12 text-2xl text-volt">Build</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {buildTiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>

        <h2 className="mt-12 text-2xl text-volt">Maintain</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-3">
          {maintainTiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>

        <h2 className="mt-12 text-2xl text-volt">Fix</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {fixTiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>

        <h2 className="mt-16 text-2xl text-volt">Quoted per project</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {quotedServices.map((s) => (
            <div
              key={s.name}
              className="rounded-xl border border-dashed border-steel bg-coal/40 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{s.name}</h3>
              <p className="mt-2 text-sm">{s.blurb}</p>
              <p className="mt-4 text-sm font-semibold text-volt">
                Contact for a quote
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

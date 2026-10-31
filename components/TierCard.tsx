import type { PriceTier } from "@/lib/pricing";

export default function TierCard({ tier }: { tier: PriceTier }) {
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

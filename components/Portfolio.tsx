import { portfolioItems } from "@/lib/portfolio";

export default function Portfolio() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-3xl font-bold text-white">Selected work</h2>
      <p className="mt-2 max-w-2xl">
        A sample of what we have built - from business sites to full platforms.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {portfolioItems.map((item) => (
          <div
            key={item.name}
            className="flex flex-col rounded-xl border border-steel bg-coal/60 p-6"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-mist/60">
              {item.kind}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white">
              {item.name}
            </h3>
            <p className="mt-3 flex-1 text-sm">{item.blurb}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-volt/40 px-3 py-1 text-xs text-volt"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";
import { services } from "@/lib/services";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-16 text-center sm:pt-24 sm:pb-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/emblem-512.png"
          alt="Chaotic Solutions emblem - hooded sentinel with security shield"
          width={120}
          height={120}
          className="mx-auto mb-8"
        />
        <p className="text-sm uppercase tracking-[0.3em] text-spark">
          Chaotic Solutions
        </p>
        <h1 className="mt-4 text-4xl sm:text-6xl">
          Order from the chaos.
          <span className="text-glow-gradient block">Solutions that work.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg">
          Practical technology for individuals, entrepreneurs, and businesses.
          Websites built, maintained, and repaired - with security taken
          seriously from day one.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-lg bg-volt px-6 py-3 font-semibold text-void hover:bg-volt-dim"
          >
            Start a project
          </Link>
          <Link
            href="/pricing"
            className="rounded-lg border border-steel px-6 py-3 font-semibold text-white hover:border-volt"
          >
            See pricing
          </Link>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/banner-hero-1536x864.jpg"
          alt="Chaotic Solutions banner"
          width={1536}
          height={864}
          className="mx-auto mt-12 w-full max-w-4xl rounded-2xl border border-steel"
        />
      </section>

      {/* Services */}
      <section className="border-t border-steel bg-coal/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl">What we do</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-steel bg-coal/60 p-6"
              >
                <h3 className="text-xl font-semibold text-volt">{s.title}</h3>
                <p className="mt-1 text-sm uppercase tracking-wide text-mist/70">
                  {s.tagline}
                </p>
                <p className="mt-4 text-sm">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-steel">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="text-3xl">Who we are</h2>
              <p className="mt-6">
                Chaotic Solutions is the technology services division of
                Chaotic Minds Collective - owner-operated, based in Enumclaw,
                Washington, and serving clients locally and remotely.
              </p>
              <p className="mt-4">
                We exist for a simple reason: most people should not have to
                think about the machinery behind their website. You describe
                what you need in plain English; we handle the build, the
                upkeep, and the security - and we explain every decision along
                the way.
              </p>
            </div>
            <ul className="space-y-6 self-center">
              <li className="rounded-xl border border-steel bg-coal/60 p-5">
                <h3 className="font-semibold text-white">
                  You work with the owner
                </h3>
                <p className="mt-1 text-sm">
                  No account managers, no ticket black holes. The person who
                  builds your site is the person who answers your message.
                </p>
              </li>
              <li className="rounded-xl border border-steel bg-coal/60 p-5">
                <h3 className="font-semibold text-white">
                  Security is not an add-on
                </h3>
                <p className="mt-1 text-sm">
                  Every site we build gets HTTPS, hardened headers, and
                  dependency hygiene from day one - not as a paid extra.
                </p>
              </li>
              <li className="rounded-xl border border-steel bg-coal/60 p-5">
                <h3 className="font-semibold text-white">
                  Plain English, always
                </h3>
                <p className="mt-1 text-sm">
                  You will never be left wondering what happened to your site
                  or why. If something breaks, you get the cause and the fix
                  in words that make sense.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work */}
      <Portfolio />

      {/* CTA */}
      <section className="border-t border-steel bg-coal/40">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-3xl">Ready when you are.</h2>
          <p className="mx-auto mt-3 max-w-xl">
            Tell us what needs building, fixing, or guarding. We reply to every
            inquiry.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-volt px-6 py-3 font-semibold text-void hover:bg-volt-dim"
          >
            Start a project
          </Link>
        </div>
      </section>
    </main>
  );
}

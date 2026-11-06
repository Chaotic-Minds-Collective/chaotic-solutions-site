import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-steel bg-void/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-y-2 px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/emblem-512.png"
            alt="Chaotic Solutions"
            width={40}
            height={40}
          />
          <span className="font-gothic text-2xl leading-none text-white sm:text-3xl">
            Chaotic Solutions
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <Link href="/" className="text-mist hover:text-spark">
            Home
          </Link>
          <Link href="/pricing" className="text-mist hover:text-spark">
            Pricing
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-volt px-3 py-1.5 font-semibold text-void hover:bg-volt-dim"
          >
            Start a project
          </Link>
        </nav>
      </div>
    </header>
  );
}

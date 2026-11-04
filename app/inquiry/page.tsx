import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project Inquiry - Chaotic Solutions",
  description:
    "Tell us about your project. Order from the chaos. Solutions that work.",
};

export default function InquiryPage() {
  return (
    <main className="flex h-dvh flex-col bg-void">
      <header className="flex items-center justify-between border-b border-steel px-6 py-4">
        <div>
          <p className="text-sm font-bold tracking-[0.2em] text-volt uppercase">
            Chaotic Solutions
          </p>
          <p className="text-xs text-mist">The Method To Your Madness.</p>
        </div>
        <Link
          href="/"
          className="text-sm text-mist underline decoration-volt-dim underline-offset-4 transition-colors hover:text-volt"
        >
          Back to site
        </Link>
      </header>
      <iframe
        src="https://tally.so/embed/OQa5xg?transparentBackground=1"
        title="Chaotic Solutions - Project Inquiry"
        className="min-h-0 w-full flex-1 border-0"
      />
    </main>
  );
}

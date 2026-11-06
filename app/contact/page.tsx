import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Start a project - Chaotic Solutions",
  description:
    "Tell us what you need - a new website build, ongoing care, or a fix. We reply to every inquiry.",
};

export default function Contact() {
  return (
    <main>
      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <h1 className="text-4xl sm:text-5xl">Start a project</h1>
        <p className="mt-3 text-lg">
          Tell us what you need - a new build, ongoing care, or a fix. We reply
          to every inquiry; response time depends on the current project load.
        </p>
        <div className="mt-8">
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}

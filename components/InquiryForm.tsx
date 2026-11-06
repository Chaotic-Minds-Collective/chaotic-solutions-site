"use client";

import { useState } from "react";
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from "@/lib/supabase";

const SERVICE_OPTIONS = ["Build", "Maintain", "Fix", "Security audit", "Something else"];

const BUDGET_OPTIONS = [
  "Under $250",
  "$250 - $500",
  "$500 - $1,000",
  "$1,000 - $2,500",
  "$2,500+",
  "Not sure yet",
];

/*
 * DB enforces via RLS (tally_webhook_insert_only): email must match an
 * email pattern; name <= 200 chars, service <= 300, budget <= 100,
 * message <= 10000. Keep client-side limits aligned.
 */
const LIMITS = { name: 200, email: 320, service: 300, budget: 100, message: 10000 };

export default function InquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [budget, setBudget] = useState(BUDGET_OPTIONS[5]);
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState(""); // honeypot - bots only
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honey) return; // honeypot filled: silently drop

    if (!name.trim()) return setError("Please tell us your name.");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      return setError("Please enter a valid email address.");
    if (!message.trim()) return setError("Please include a short message.");

    setSending(true);
    setError(null);

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/inquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_PUBLISHABLE_KEY,
          Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          name: name.trim().slice(0, LIMITS.name),
          email: email.trim().slice(0, LIMITS.email),
          service_interest: service.slice(0, LIMITS.service),
          budget: budget.slice(0, LIMITS.budget),
          message: message.trim().slice(0, LIMITS.message),
        }),
      });

      if (!res.ok) {
        throw new Error(`Insert failed (${res.status})`);
      }
      setDone(true);
    } catch (err) {
      setError(
        "Something went wrong sending your message. Please try again, or email us directly."
      );
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-xl border border-steel bg-coal/60 p-10 text-center">
        <h2 className="text-3xl">Message received.</h2>
        <p className="mt-3">
          Thanks, {name.trim().split(" ")[0] || "friend"} - your inquiry is in.
          We reply to every message.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-lg border border-steel bg-coal px-4 py-3 text-mist placeholder:text-mist/40 focus:border-spark focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-steel bg-coal/60 p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="inq-name" className="mb-1 block text-sm text-mist/80">
            Name
          </label>
          <input
            id="inq-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={LIMITS.name}
            className={fieldClass}
            placeholder="Your name"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="inq-email" className="mb-1 block text-sm text-mist/80">
            Email
          </label>
          <input
            id="inq-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={LIMITS.email}
            className={fieldClass}
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label
            htmlFor="inq-service"
            className="mb-1 block text-sm text-mist/80"
          >
            What do you need?
          </label>
          <select
            id="inq-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={fieldClass}
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="inq-budget"
            className="mb-1 block text-sm text-mist/80"
          >
            Budget
          </label>
          <select
            id="inq-budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className={fieldClass}
          >
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="inq-message" className="mb-1 block text-sm text-mist/80">
          Message
        </label>
        <textarea
          id="inq-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={LIMITS.message}
          rows={5}
          className={fieldClass}
          placeholder="Tell us about the project, the problem, or the idea."
        />
      </div>

      {/* Honeypot: hidden from humans, catches bots */}
      <input
        type="text"
        value={honey}
        onChange={(e) => setHoney(e.target.value)}
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {error && (
        <p className="mt-4 rounded-lg border border-volt-dim bg-coal px-4 py-3 text-sm text-volt">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="mt-6 w-full rounded-lg bg-volt px-6 py-3 font-semibold text-void hover:bg-volt-dim disabled:opacity-50 sm:w-auto"
      >
        {sending ? "Sending..." : "Send it"}
      </button>
    </form>
  );
}

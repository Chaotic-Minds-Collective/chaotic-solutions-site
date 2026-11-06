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

type FieldName = "name" | "email" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

export default function InquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [budget, setBudget] = useState(BUDGET_OPTIONS[5]);
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState(""); // honeypot - bots only
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  /* Clear a field's error as soon as the user edits that field. */
  function clearFieldError(field: FieldName) {
    setFieldErrors((prev) => {
      if (!(field in prev)) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honey) return; // honeypot filled: silently drop

    // A retry starts a fresh error state.
    setSubmitError(null);

    const errors: FieldErrors = {};
    if (!name.trim()) {
      errors.name = "Please tell us your name.";
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!message.trim()) {
      errors.message = "Please include a short message.";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});

    setSending(true);

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
      // Stays visible until the user retries.
      setSubmitError(
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
    "w-full rounded-lg border bg-coal px-4 py-3 text-mist placeholder:text-mist/40 focus:outline-none";
  const okFieldClass = `${fieldClass} border-steel focus:border-spark`;
  const badFieldClass = `${fieldClass} border-volt-dim focus:border-volt`;
  const errorTextClass = "mt-1 text-sm text-volt";

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
            onChange={(e) => {
              setName(e.target.value);
              clearFieldError("name");
            }}
            maxLength={LIMITS.name}
            className={fieldErrors.name ? badFieldClass : okFieldClass}
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={fieldErrors.name ? true : undefined}
            aria-describedby={fieldErrors.name ? "inq-name-error" : undefined}
          />
          {fieldErrors.name && (
            <p id="inq-name-error" className={errorTextClass}>
              {fieldErrors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="inq-email" className="mb-1 block text-sm text-mist/80">
            Email
          </label>
          <input
            id="inq-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearFieldError("email");
            }}
            maxLength={LIMITS.email}
            className={fieldErrors.email ? badFieldClass : okFieldClass}
            placeholder="you@example.com"
            autoComplete="email"
            required
            aria-invalid={fieldErrors.email ? true : undefined}
            aria-describedby={fieldErrors.email ? "inq-email-error" : undefined}
          />
          {fieldErrors.email && (
            <p id="inq-email-error" className={errorTextClass}>
              {fieldErrors.email}
            </p>
          )}
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
            className={okFieldClass}
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
            className={okFieldClass}
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
          onChange={(e) => {
            setMessage(e.target.value);
            clearFieldError("message");
          }}
          maxLength={LIMITS.message}
          rows={5}
          className={fieldErrors.message ? badFieldClass : okFieldClass}
          placeholder="Tell us about the project, the problem, or the idea."
          aria-invalid={fieldErrors.message ? true : undefined}
          aria-describedby={fieldErrors.message ? "inq-message-error" : undefined}
        />
        {fieldErrors.message && (
          <p id="inq-message-error" className={errorTextClass}>
            {fieldErrors.message}
          </p>
        )}
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

      {/*
        Submission errors: announced to screen readers via the alert role
        (implicit assertive live region). Persists until the next retry.
      */}
      {submitError && (
        <p
          role="alert"
          className="mt-4 rounded-lg border border-volt-dim bg-coal px-4 py-3 text-sm text-volt"
        >
          {submitError}
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

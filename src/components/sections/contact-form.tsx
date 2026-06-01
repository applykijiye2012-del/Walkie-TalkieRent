"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  company: string;
  automationGoal: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  automationGoal: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const valid = useMemo(() => {
    return (
      form.name.trim().length > 1 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
      form.automationGoal.trim().length > 12
    );
  }, [form]);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!valid) return;

    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(initialState);
    }, 700);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-cyan-200/20 bg-cyan-200/10 p-8 text-center shadow-[0_0_50px_rgba(103,232,249,0.12)]">
        <CheckCircle2 className="mx-auto h-12 w-12 text-cyan-200" />
        <h3 className="mt-5 text-2xl font-bold text-white">Strategy request received</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          We will review your workflow goals and follow up with a practical automation path.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-white/5"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      id="contact"
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl sm:p-8"
      noValidate
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Name
          <input
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            autoComplete="name"
            className="min-h-12 rounded-2xl border border-white/10 bg-slate-950/70 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200/60 focus:ring-4 focus:ring-cyan-200/10"
            placeholder="Your name"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Work email
          <input
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            autoComplete="email"
            type="email"
            className="min-h-12 rounded-2xl border border-white/10 bg-slate-950/70 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200/60 focus:ring-4 focus:ring-cyan-200/10"
            placeholder="you@company.com"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Company
          <input
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            autoComplete="organization"
            className="min-h-12 rounded-2xl border border-white/10 bg-slate-950/70 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200/60 focus:ring-4 focus:ring-cyan-200/10"
            placeholder="Company name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          What do you want automated?
          <textarea
            value={form.automationGoal}
            onChange={(event) => updateField("automationGoal", event.target.value)}
            className="min-h-32 resize-y rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200/60 focus:ring-4 focus:ring-cyan-200/10"
            placeholder="Example: capture website leads, update HubSpot, and send AI follow-up emails within 5 minutes."
            required
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={!valid || loading}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cyan-200 px-5 text-sm font-bold text-slate-950 shadow-[0_0_32px_rgba(103,232,249,0.28)] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-45"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Book Free Strategy Call
      </button>
      <p className="mt-4 text-center text-xs leading-6 text-slate-500">
        No spam. No generic pitch. Just a clear automation opportunity map.
      </p>
    </form>
  );
}

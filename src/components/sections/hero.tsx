import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";
import { trustBadges, integrationStack, partnerLogos } from "@/data/site";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-20">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_15%,rgba(103,232,249,0.18),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(14,165,233,0.12),transparent_30%),linear-gradient(180deg,#020617_0%,#020617_62%,#04111f_100%)]" />
      <div className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-200/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-5 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-5">
        <MotionReveal>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
              <Sparkles className="h-4 w-4" />
              AI automation built on n8n
            </div>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Turn repetitive business workflows into automated revenue systems.
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
              RentalXgogo designs n8n and AI automation for lead capture, CRM updates,
              follow-ups, internal workflows, and business process optimization.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact">Book Free Consultation</Button>
              <Button href="#services" variant="secondary">
                See Automations in Action
              </Button>
            </div>
            <div className="mt-7 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-200" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.12}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-cyan-200/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-2xl shadow-cyan-950/40 backdrop-blur-2xl">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                    Live Workflow Console
                  </p>
                  <p className="mt-1 text-sm text-slate-400">Lead captured to qualified follow-up</p>
                </div>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200">
                  Active
                </span>
              </div>
              <div className="grid gap-3 p-4">
                {[
                  ["Website form", "New lead received", "00:01"],
                  ["AI scoring", "Intent detected: high priority", "00:04"],
                  ["CRM sync", "Deal, contact, and owner updated", "00:07"],
                  ["Email follow-up", "Personalized reply scheduled", "00:11"],
                ].map(([title, copy, time], index) => (
                  <div key={title} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-cyan-200/10 text-sm font-black text-cyan-100">
                      {index + 1}
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-white">{title}</h2>
                      <p className="mt-1 text-xs text-slate-400">{copy}</p>
                    </div>
                    <span className="text-xs font-semibold text-cyan-100">{time}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 p-4">
                <div className="flex flex-wrap gap-2">
                  {integrationStack.map((tool) => (
                    <span key={tool} className="rounded-full border border-cyan-200/10 bg-cyan-200/[0.06] px-3 py-1 text-xs font-semibold text-slate-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>

      <div className="border-y border-white/10 bg-white/[0.025] py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 sm:px-6 lg:px-8">
          {partnerLogos.map((logo) => (
            <div key={logo} className="flex items-center gap-2 text-sm font-black tracking-[0.16em] text-slate-400">
              <Image src="/window.svg" alt="" width={18} height={18} className="opacity-50 invert" />
              {logo}
            </div>
          ))}
          <a href="#case-studies" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-100 hover:text-white">
            Proof-backed automation outcomes <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

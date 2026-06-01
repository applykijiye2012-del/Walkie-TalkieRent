import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import {
  authoritySignals,
  benefits,
  caseStudies,
  faqs,
  metrics,
  painPoints,
  processSteps,
  services,
  testimonials,
} from "@/data/site";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/sections/contact-form";

export function ProblemSection() {
  return (
    <Section
      eyebrow="The hidden growth tax"
      title="Manual workflows quietly leak leads, time, and trust."
      description="The problem is rarely one broken tool. It is the gap between tools, people, and decisions that should already be automated."
      className="bg-slate-950"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {painPoints.map((item, index) => {
          const Icon = item.icon;
          return (
            <MotionReveal key={item.title} delay={index * 0.04}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-cyan-200/[0.055]">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-200/10 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.copy}</p>
              </article>
            </MotionReveal>
          );
        })}
      </div>
    </Section>
  );
}

export function SolutionSection() {
  return (
    <Section
      id="solution"
      eyebrow="The RentalXgogo system"
      title="AI workflows that move work forward before your team has to ask."
      description="We combine n8n orchestration, CRM integrations, AI decisioning, and careful process design to build automations that are fast, observable, and practical."
      className="bg-[#020617]"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <MotionReveal>
          <div className="rounded-3xl border border-cyan-200/15 bg-cyan-200/[0.055] p-6 shadow-[0_0_70px_rgba(103,232,249,0.12)] backdrop-blur-2xl sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-200 text-slate-950">
                <Sparkles className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl font-extrabold text-white">Automation command layer</h3>
                <p className="text-sm text-slate-400">Designed around real business events</p>
              </div>
            </div>
            <div className="mt-8 grid gap-4">
              {[
                "Capture and validate every inbound lead",
                "Sync clean records into your CRM",
                "Trigger AI-personalized follow-ups",
                "Alert humans only when judgment is required",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                  <span className="text-sm font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
        <MotionReveal delay={0.08}>
          <div className="grid gap-4 sm:grid-cols-3">
            {authoritySignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div key={signal.label} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                  <Icon className="h-7 w-7 text-cyan-200" />
                  <h3 className="mt-5 text-base font-bold text-white">{signal.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Built to connect strategy, data, and day-to-day execution.
                  </p>
                </div>
              );
            })}
          </div>
        </MotionReveal>
      </div>
    </Section>
  );
}

export function ServicesSection() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Automation services for the workflows that decide your customer experience."
      description="From lead intake to reporting, each workflow is documented, tested, and optimized around measurable business outcomes."
      className="bg-slate-950"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <MotionReveal key={service.title} delay={index * 0.035}>
              <article className="group h-full rounded-3xl border border-white/10 bg-[#08111f]/80 p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:shadow-[0_0_35px_rgba(103,232,249,0.12)]">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-cyan-100 transition group-hover:bg-cyan-200 group-hover:text-slate-950">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{service.copy}</p>
              </article>
            </MotionReveal>
          );
        })}
      </div>
    </Section>
  );
}

export function MetricsSection() {
  return (
    <Section id="results" className="bg-[#020617] py-16 sm:py-20">
      <div className="grid gap-4 lg:grid-cols-3">
        {metrics.map((metric, index) => (
          <MotionReveal key={metric.label} delay={index * 0.05}>
            <div className="rounded-3xl border border-cyan-200/15 bg-cyan-200/[0.055] p-7 text-center shadow-[0_0_50px_rgba(103,232,249,0.1)]">
              <div className="text-5xl font-black tracking-tight text-cyan-100">{metric.value}</div>
              <h2 className="mt-3 text-xl font-bold text-white">{metric.label}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{metric.detail}</p>
            </div>
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}

export function CaseStudiesSection() {
  return (
    <Section
      id="case-studies"
      eyebrow="Case studies"
      title="Realistic automation plays for teams with too much manual work."
      description="Each engagement starts with the process, then moves into the automation architecture."
      className="bg-slate-950"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <MotionReveal key={study.company} delay={index * 0.05}>
            <article className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-extrabold text-white">{study.company}</h3>
                <TrendingUp className="h-6 w-6 shrink-0 text-cyan-200" />
              </div>
              <CaseStudyRow label="Problem" text={study.problem} />
              <CaseStudyRow label="Solution" text={study.solution} />
              <CaseStudyRow label="Result" text={study.result} accent />
            </article>
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}

function CaseStudyRow({ label, text, accent }: { label: string; text: string; accent?: boolean }) {
  return (
    <div className="mt-5 border-t border-white/10 pt-5">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">{label}</p>
      <p className={accent ? "mt-2 text-sm font-semibold leading-7 text-white" : "mt-2 text-sm leading-7 text-slate-400"}>
        {text}
      </p>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <Section
      eyebrow="Client feedback"
      title="Built for operators who need automation to pay for itself."
      className="bg-[#020617]"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <MotionReveal key={testimonial.name} delay={index * 0.05}>
            <figure className="h-full rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-lg shadow-black/20">
              <blockquote className="text-base leading-8 text-slate-200">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-5">
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="mt-1 text-sm text-slate-400">
                  {testimonial.role}, {testimonial.company}
                </div>
              </figcaption>
            </figure>
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}

export function ProcessSection() {
  return (
    <Section
      id="process"
      eyebrow="Process"
      title="A clean path from messy workflow to monitored automation."
      description="You get a structured build process with strategy upfront and optimization after launch."
      className="bg-slate-950"
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <MotionReveal key={step.step} delay={index * 0.05}>
            <article className="relative h-full rounded-3xl border border-white/10 bg-white/[0.035] p-6">
              <span className="text-5xl font-black text-cyan-200/20">{step.step}</span>
              <h3 className="mt-5 text-xl font-extrabold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{step.copy}</p>
            </article>
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}

export function BenefitsSection() {
  return (
    <Section
      eyebrow="Why it converts"
      title="Automation that improves speed, consistency, and buyer confidence."
      className="bg-[#020617]"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
        <MotionReveal>
          <div className="grid gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                <span className="text-base font-semibold text-slate-100">{benefit}</span>
              </div>
            ))}
          </div>
        </MotionReveal>
        <MotionReveal delay={0.08}>
          <div className="rounded-3xl border border-cyan-200/15 bg-cyan-200/[0.055] p-8">
            <Gauge className="h-10 w-10 text-cyan-200" />
            <h3 className="mt-6 text-2xl font-extrabold text-white">Prioritize your highest-ROI workflow first.</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              RentalXgogo identifies the workflow where automation creates the fastest measurable lift, then builds from that proof point.
            </p>
            <Button href="#contact" className="mt-7">
              Find My Best Automation
            </Button>
          </div>
        </MotionReveal>
      </div>
    </Section>
  );
}

export function FaqSection() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Questions before you automate?"
      className="bg-slate-950"
    >
      <div className="mx-auto grid max-w-4xl gap-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 open:border-cyan-200/25">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-white">
              {faq.question}
              <ArrowRight className="h-4 w-4 shrink-0 text-cyan-200 transition group-open:rotate-90" />
            </summary>
            <p className="mt-4 text-sm leading-7 text-slate-400">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

export function FinalCtaSection() {
  return (
    <Section className="bg-[#020617]">
      <div className="relative overflow-hidden rounded-[2rem] border border-cyan-200/20 bg-[radial-gradient(circle_at_50%_0%,rgba(103,232,249,0.18),transparent_34%),rgba(255,255,255,0.035)] p-6 text-center shadow-[0_0_80px_rgba(103,232,249,0.12)] sm:p-10 lg:p-14">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">Limited build capacity this month</p>
          <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-white sm:text-5xl">
            Your next lead should not wait for someone to copy and paste.
          </h2>
          <p className="mt-5 text-pretty text-base leading-8 text-slate-300">
            Start with one high-impact workflow. Prove the ROI. Then expand automation across the business with confidence.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="#contact">Get Started</Button>
            <Button href="#contact" variant="secondary">
              Book Free Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function ContactSection() {
  return (
    <Section
      eyebrow="Free strategy call"
      title="Tell us the workflow slowing your team down."
      description="We will identify what should be automated first, what systems need to connect, and how to measure the result."
      className="bg-slate-950"
    >
      <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <MotionReveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7">
            <ShieldCheck className="h-10 w-10 text-cyan-200" />
            <h3 className="mt-5 text-2xl font-extrabold text-white">What you get on the call</h3>
            <div className="mt-6 grid gap-4">
              {[
                "A plain-English workflow opportunity map",
                "Recommended n8n and AI automation approach",
                "Integration and timeline considerations",
                "A first-step automation with measurable ROI",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-medium text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
        <MotionReveal delay={0.08}>
          <ContactForm />
        </MotionReveal>
      </div>
    </Section>
  );
}

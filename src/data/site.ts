import {
  BellRing,
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Clock3,
  DatabaseZap,
  MailCheck,
  MessageSquareText,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export const trustBadges = [
  "n8n-first automation architecture",
  "CRM-ready workflows",
  "AI-assisted lead handling",
  "Built for measurable ROI",
];

export const painPoints = [
  {
    title: "Manual repetitive tasks",
    copy: "Teams lose hours copying data, sending status updates, and checking the same systems every day.",
    icon: Clock3,
  },
  {
    title: "Missed leads",
    copy: "Hot prospects slip through when forms, inboxes, and sales tools are disconnected.",
    icon: BellRing,
  },
  {
    title: "Slow response times",
    copy: "Buyers expect replies in minutes. Manual routing makes even good teams look slow.",
    icon: Zap,
  },
  {
    title: "CRM errors",
    copy: "Duplicate records, stale fields, and missing notes make revenue reporting unreliable.",
    icon: DatabaseZap,
  },
  {
    title: "Inefficient workflows",
    copy: "Processes that worked at ten customers become fragile when volume doubles.",
    icon: Network,
  },
];

export const services = [
  {
    title: "Lead Capture Automation",
    copy: "Route form, chat, and ad leads into the right pipeline with enrichment, scoring, and instant owner assignment.",
    icon: Sparkles,
  },
  {
    title: "CRM Sync Automation",
    copy: "Keep HubSpot, Pipedrive, Salesforce, Airtable, and internal databases aligned without manual updates.",
    icon: DatabaseZap,
  },
  {
    title: "AI Email Follow-ups",
    copy: "Trigger personalized, context-aware replies and follow-up sequences based on lead behavior.",
    icon: MailCheck,
  },
  {
    title: "Internal Workflow Automation",
    copy: "Automate approvals, operations handoffs, task creation, reminders, and reporting across teams.",
    icon: Workflow,
  },
  {
    title: "AI Chat Integrations",
    copy: "Connect AI assistants to forms, CRMs, docs, calendars, and internal knowledge bases.",
    icon: MessageSquareText,
  },
  {
    title: "Reporting & Alerts",
    copy: "Send Slack, email, and dashboard alerts when KPIs move, deals stall, or workflows need attention.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Custom n8n Workflows",
    copy: "Design resilient n8n systems with retries, logging, branching logic, and clean documentation.",
    icon: Bot,
  },
  {
    title: "Business Process Automation",
    copy: "Map the hidden friction in your operations and replace busywork with repeatable automation systems.",
    icon: BrainCircuit,
  },
];

export const metrics = [
  { value: "20+", label: "hours saved weekly", detail: "per team after automating repetitive admin" },
  { value: "3x", label: "faster lead response", detail: "with instant routing and AI-assisted follow-up" },
  { value: "80%", label: "less manual work", detail: "across capture, CRM updates, and reporting" },
];

export const caseStudies = [
  {
    company: "B2B consulting firm",
    problem: "New inbound leads were buried in inboxes and spreadsheets, causing two-day response delays.",
    solution: "RentalXgogo built an n8n workflow that captured website leads, enriched company data, scored urgency, and triggered AI-personalized outreach.",
    result: "Response time dropped from 38 hours to under 6 minutes, increasing qualified bookings by 41%.",
  },
  {
    company: "Regional property operator",
    problem: "Operations managers manually copied maintenance requests between forms, email, and task boards.",
    solution: "A centralized automation routed requests by property, created task records, notified vendors, and escalated overdue jobs.",
    result: "The team reclaimed 24 weekly hours and reduced missed handoffs by 76%.",
  },
  {
    company: "Online services marketplace",
    problem: "Sales reps had inconsistent CRM notes and no reliable alerts when high-value prospects went quiet.",
    solution: "RentalXgogo synced CRM events, generated follow-up prompts, and sent deal-risk alerts to Slack.",
    result: "Pipeline hygiene improved within two weeks and stalled opportunities fell by 32%.",
  },
];

export const testimonials = [
  {
    quote: "RentalXgogo turned our messy lead process into a system that feels instant. Our sales team finally trusts the CRM again.",
    name: "Maya Patel",
    role: "Founder",
    company: "Growth advisory studio",
  },
  {
    quote: "The ROI was obvious in the first month. We stopped chasing updates and started acting on clean, timely data.",
    name: "Daniel Brooks",
    role: "Operations Director",
    company: "Property services company",
  },
  {
    quote: "They understood the business process before touching the automation. That made the final workflows simple and durable.",
    name: "Sofia Ramirez",
    role: "Revenue Lead",
    company: "B2B SaaS team",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    copy: "Clarify goals, bottlenecks, tools, stakeholders, and the revenue impact of the workflows worth automating first.",
  },
  {
    step: "02",
    title: "Workflow Audit",
    copy: "Map triggers, decisions, data flows, edge cases, and integration requirements before a single workflow is built.",
  },
  {
    step: "03",
    title: "Automation Build",
    copy: "Design n8n workflows with AI steps, testing paths, error handling, logs, and clear operational ownership.",
  },
  {
    step: "04",
    title: "Deployment & Optimization",
    copy: "Launch safely, monitor performance, improve prompts and routing, then expand into the next automation opportunities.",
  },
];

export const benefits = [
  "Save time across sales, ops, admin, and reporting",
  "Scale operations without adding repetitive headcount",
  "Reduce human error in CRM and customer handoffs",
  "Improve conversions with faster, smarter follow-up",
  "Automate repetitive work while keeping humans in control",
];

export const faqs = [
  {
    question: "What is n8n automation?",
    answer: "n8n is a flexible workflow automation platform that connects apps, APIs, databases, and AI models. RentalXgogo uses it to build custom automations that match how your business actually operates.",
  },
  {
    question: "How long does setup take?",
    answer: "Most first workflows are scoped and launched in 1 to 3 weeks depending on integrations, approvals, and data complexity. Larger automation systems are delivered in phased releases.",
  },
  {
    question: "Which tools can you integrate?",
    answer: "We can connect CRMs, email platforms, forms, spreadsheets, Slack, Airtable, Notion, databases, webhooks, AI models, and most tools with an API.",
  },
  {
    question: "How does pricing work?",
    answer: "Pricing depends on workflow complexity, number of integrations, AI requirements, and support needs. The free strategy call identifies the highest-ROI automation path before a proposal.",
  },
  {
    question: "Do you provide support after launch?",
    answer: "Yes. We support monitoring, fixes, documentation, optimization, and iteration so your automations keep working as your process evolves.",
  },
  {
    question: "Can workflows be customized?",
    answer: "Yes. Every workflow is custom-designed around your existing tools, handoffs, approval rules, data structure, and customer journey.",
  },
];

export const partnerLogos = ["NOVA CRM", "FlowDesk", "SignalOps", "Vertex AI", "ScaleWorks"];

export const integrationStack = [
  "n8n",
  "HubSpot",
  "Salesforce",
  "Slack",
  "Airtable",
  "Gmail",
  "OpenAI",
  "Webhooks",
];

export const authoritySignals = [
  { label: "Automation-first audits", icon: ShieldCheck },
  { label: "AI workflow design", icon: BrainCircuit },
  { label: "Revenue operations focus", icon: ChartNoAxesCombined },
];

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Bot,
  Boxes,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Cpu,
  Database,
  FileText,
  Gauge,
  Globe2,
  Layers3,
  Lock,
  Menu,
  MessageSquareText,
  Network,
  PackageCheck,
  Rocket,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  UsersRound,
  Warehouse,
  X,
  Zap,
} from "lucide-react";

export default function AetherAIWebsite() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeService, setActiveService] = useState("AI Automation");

  const services = useMemo(
    () => [
      {
        icon: <Bot className="h-6 w-6" />,
        title: "AI Automation",
        desc: "Automate approvals, reconciliations, notifications, document processing, reporting, and cross-system data movement.",
        points: ["Workflow bots", "Smart document processing", "ERP, CRM & POS automation"],
      },
      {
        icon: <Brain className="h-6 w-6" />,
        title: "AI Agents",
        desc: "Build supervised role-based agents that research, reason, use business tools, and hand off work with audit trails.",
        points: ["Sales & service agents", "Finance copilots", "Operations agents"],
      },
      {
        icon: <Database className="h-6 w-6" />,
        title: "RAG Platforms",
        desc: "Create secure knowledge assistants over policies, SOPs, tickets, product data, ERP records, and internal documents.",
        points: ["Vector search", "Cited answers", "Permission-aware retrieval"],
      },
      {
        icon: <Cloud className="h-6 w-6" />,
        title: "Cloud & ERP Systems",
        desc: "Build production APIs, dashboards, integrations, ERP extensions, and cloud architecture for daily business operations.",
        points: ["FastAPI backends", "ERP extensions", "Monitoring & security"],
      },
    ],
    []
  );

  const industries = ["Retail", "E-commerce", "ERP", "Finance", "Healthcare", "SaaS", "Distribution", "Manufacturing"];
  const businessOutcomes = [
    ["30-60%", "Less manual effort", "Automate data entry, approvals, reporting, and repetitive checks."],
    ["2-5x", "Faster decisions", "Surface operational signals from ERP, POS, CRM, and support data."],
    ["24/7", "Customer response", "Deploy agents that answer, triage, escalate, and update business systems."],
    ["100%", "Audit-ready flows", "Keep logs, roles, permissions, citations, and approval history visible."],
  ];
  const erpModules = [
    { icon: <ShoppingCart className="h-5 w-5" />, title: "Sales & CRM", items: ["Leads", "Quotes", "Orders", "Customer 360"] },
    { icon: <PackageCheck className="h-5 w-5" />, title: "Purchase", items: ["Vendors", "PO approvals", "GRN", "Landed cost"] },
    { icon: <Warehouse className="h-5 w-5" />, title: "Inventory", items: ["Stock sync", "Transfers", "Replenishment", "Cycle counts"] },
    { icon: <BarChart3 className="h-5 w-5" />, title: "Finance", items: ["Invoices", "Payments", "Reconciliation", "Cash flow"] },
    { icon: <Boxes className="h-5 w-5" />, title: "Retail & POS", items: ["Stores", "POS", "Promotions", "Loyalty"] },
    { icon: <Settings2 className="h-5 w-5" />, title: "Operations", items: ["Approvals", "SOPs", "Tasks", "Exceptions"] },
    { icon: <UsersRound className="h-5 w-5" />, title: "HR & Admin", items: ["Onboarding", "Policies", "Requests", "Helpdesk"] },
    { icon: <FileText className="h-5 w-5" />, title: "Documents", items: ["OCR", "Contracts", "KYC", "Compliance"] },
  ];
  const clientStack = [
    {
      title: "Customer Experience",
      items: ["Website chat", "WhatsApp support", "Email triage", "Ticket routing", "Customer history", "Escalation handoff"],
    },
    {
      title: "Business Automation",
      items: ["Approvals", "Reminders", "Follow-ups", "Document reading", "Data entry", "Exception alerts"],
    },
    {
      title: "Knowledge & Decisions",
      items: ["Policy answers", "SOP guidance", "Product lookup", "Report summaries", "Cited responses", "Manager insights"],
    },
    {
      title: "ERP Operations",
      items: ["Sales orders", "Purchase orders", "Inventory sync", "Invoice matching", "Store operations", "Finance visibility"],
    },
    {
      title: "Connected Systems",
      items: ["ERP", "CRM", "POS", "E-commerce", "Payments", "Spreadsheets", "Databases", "Internal portals"],
    },
    {
      title: "Control & Governance",
      items: ["User roles", "Approvals", "Audit logs", "Data permissions", "Quality checks", "Human review"],
    },
    {
      title: "Growth & Reporting",
      items: ["KPI dashboards", "Sales signals", "Stock alerts", "Service trends", "Cost tracking", "ROI reports"],
    },
  ];
  const active = services.find((item) => item.title === activeService) || services[0];

  return (
    <div className="min-h-screen overflow-hidden bg-[#050509] text-white selection:bg-white selection:text-black">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.35),transparent_34%),radial-gradient(circle_at_10%_35%,rgba(20,184,166,0.22),transparent_32%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.2),transparent_32%)]" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3" aria-label="Æther AI home">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg shadow-indigo-500/10">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-2xl font-semibold tracking-wide">Æther AI</span>
              <span className="-mt-1 block text-xs text-white/45">Business Intelligence Evolved</span>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm text-white/70 lg:flex">
            {[
              ["Services", "services"],
              ["ERP", "erp"],
              ["Solutions", "solutions"],
              ["Process", "process"],
              ["Capabilities", "tech"],
              ["Contact", "contact"],
            ].map(([label, href]) => (
              <a key={label} href={`#${href}`} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:bg-white/85 md:inline-flex">
            Book Strategy Call <ArrowRight className="h-4 w-4" />
          </a>

          <button className="rounded-xl bg-white/10 p-2 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-black/80 px-6 pb-5 lg:hidden">
            {[
              ["Services", "services"],
              ["ERP", "erp"],
              ["Solutions", "solutions"],
              ["Process", "process"],
              ["Capabilities", "tech"],
              ["Contact", "contact"],
            ].map(([label, href]) => (
              <a key={label} href={`#${href}`} className="block py-3 text-white/75" onClick={() => setMobileOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="relative z-10">
        <section id="home" className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-24 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/75">
              <Zap className="h-4 w-4" /> AI Stack • ERP Modules • Business Automation
            </div>
            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">AI systems that make business operations faster, clearer, and easier to scale.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">
              Æther AI builds practical automation, AI agents, RAG platforms, ERP extensions, and cloud integrations for teams that need measurable operational impact.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-black transition hover:bg-white/85">
                Discuss Your Project <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#services" className="rounded-2xl border border-white/20 bg-white/5 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10">
                View Capabilities
              </a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {[
                ["ERP", "Native workflows"],
                ["AI", "Full-stack delivery"],
                ["ROI", "Outcome focused"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-2xl border border-white/10 bg-white/[0.08] p-4">
                  <p className="text-2xl font-bold">{value}</p>
                  <p className="mt-1 text-sm text-white/50">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-white/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/45">Live Business Console</p>
                  <h3 className="text-2xl font-semibold">Automation Health</h3>
                </div>
                <div className="rounded-full border border-emerald-300/20 bg-emerald-400/15 px-3 py-1 text-sm text-emerald-200">Online</div>
              </div>

              <div className="space-y-4">
                {[
                  ["Customer service agent", "1,284 tickets triaged", "92%"],
                  ["Invoice & purchase workflow", "486 documents processed", "88%"],
                  ["ERP, POS & inventory sync", "12 stores connected", "96%"],
                ].map(([title, subtitle, value]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-black/35 p-5">
                    <div className="flex justify-between gap-4">
                      <div>
                        <p className="font-semibold">{title}</p>
                        <p className="mt-1 text-sm text-white/45">{subtitle}</p>
                      </div>
                      <p className="font-semibold">{value}</p>
                    </div>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div initial={{ width: 0 }} animate={{ width: value }} transition={{ duration: 1.2, delay: 0.3 }} className="h-full rounded-full bg-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/45">Services</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">Business AI, built for execution.</h2>
            </div>
            <p className="max-w-md leading-relaxed text-white/55">From strategy to deployment, we design AI systems that connect with your tools, data, teams, and workflows.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-3">
              {services.map((service) => (
                <button
                  key={service.title}
                  onClick={() => setActiveService(service.title)}
                  className={`flex w-full items-center justify-between rounded-2xl border p-5 text-left transition ${
                    activeService === service.title ? "border-white bg-white text-black" : "border-white/10 bg-white/[0.07] hover:bg-white/[0.12]"
                  }`}
                >
                  <span className="font-semibold">{service.title}</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
              ))}
            </div>

            <div className="rounded-[2rem] border border-white/12 bg-white/10 p-8">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10">{active.icon}</div>
              <h3 className="text-3xl font-bold">{active.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-white/60">{active.desc}</p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {active.points.map((point) => (
                  <div key={point} className="flex gap-3 rounded-2xl border border-white/10 bg-black/30 p-5">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span className="text-white/75">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="mx-auto max-w-7xl px-6 py-24">
          <div className="rounded-[2rem] bg-white p-8 text-black md:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-black/45">Solutions</p>
                <h2 className="mt-4 text-4xl font-bold md:text-5xl">For teams that need speed, clarity, and scale.</h2>
                <p className="mt-5 text-lg leading-relaxed text-black/60">
                  We focus on workflows that touch revenue, service quality, stock accuracy, finance visibility, and management control.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {industries.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-black/10 bg-black/[0.03] p-5">
                    <Building2 className="h-5 w-5" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="erp" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/45">ERP Modules</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">AI connected to the modules your teams already run.</h2>
            </div>
            <p className="leading-relaxed text-white/55">
              From Dynamics 365 Business Central and LS Central to custom ERP, POS, CRM, and finance systems, we connect AI to real business records with roles, approvals, and auditability.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {erpModules.map((module) => (
              <div key={module.title} className="rounded-3xl border border-white/12 bg-white/[0.08] p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10">{module.icon}</div>
                <h3 className="text-xl font-semibold">{module.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {module.items.map((item) => (
                    <span key={item} className="rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm text-white/65">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-5 md:grid-cols-4">
            {businessOutcomes.map(([value, title, desc]) => (
              <div key={title} className="rounded-3xl border border-white/12 bg-white p-6 text-black">
                <p className="text-3xl font-bold">{value}</p>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-relaxed text-black/60">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/45">Process</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">From idea to production.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {[
              ["01", "Discover", "Map goals, bottlenecks, ERP modules, data ownership, and business impact."],
              ["02", "Design", "Create workflows, architecture, prompts, permissions, and approval rules."],
              ["03", "Build", "Develop agents, APIs, dashboards, RAG pipelines, and ERP integrations."],
              ["04", "Scale", "Deploy, monitor, train users, optimize costs, and continuously improve."],
            ].map(([num, title, desc]) => (
              <div key={num} className="rounded-3xl border border-white/12 bg-white/[0.08] p-6">
                <p className="text-sm text-white/35">{num}</p>
                <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-relaxed text-white/55">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tech" className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/45">Capabilities</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">Complete AI stack. Enterprise mindset.</h2>
              <p className="mt-5 leading-relaxed text-white/55">
                We cover every layer a business needs: customer conversations, daily operations, ERP data, knowledge support, approvals, reporting, and secure rollout.
              </p>
              <div className="mt-8 grid gap-3">
                {[
                  [<Cpu className="h-5 w-5" />, "Smarter assistants that answer, summarize, recommend, and take action"],
                  [<Network className="h-5 w-5" />, "Connected workflows across ERP, CRM, POS, e-commerce, finance, and support"],
                  [<ShieldCheck className="h-5 w-5" />, "Business control with permissions, approvals, audit history, and quality checks"],
                ].map(([icon, text]) => (
                  <div key={text} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-white/70">
                    {icon}
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {clientStack.map((category) => (
                <div key={category.title} className="rounded-3xl border border-white/12 bg-white/[0.08] p-6">
                  <h3 className="mb-4 text-xl font-semibold">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span key={item} className="rounded-xl border border-white/10 bg-white/[0.08] px-4 py-2 text-sm text-white/70">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [<ShieldCheck className="h-7 w-7" />, "Secure by design", "Role-based access, auditability, validation, and protected data flows."],
              [<Gauge className="h-7 w-7" />, "Built for ROI", "Every system is mapped to time saved, cost reduced, revenue unlocked, or risk avoided."],
              [<Layers3 className="h-7 w-7" />, "Integration-first", "Connect AI with ERP, CRM, POS, databases, websites, spreadsheets, and internal tools."],
            ].map(([icon, title, desc]) => (
              <div key={title} className="rounded-3xl border border-white/12 bg-white/[0.08] p-7">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10">{icon}</div>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-relaxed text-white/55">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-center gap-10 rounded-[2rem] border border-white/12 bg-white/10 p-8 md:p-14 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/45">Client Result</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">“Æther AI turned scattered operations into one intelligent flow.”</h2>
            </div>
            <div className="space-y-5">
              {[
                [<Globe2 className="h-5 w-5" />, "Multi-system automation across web, ERP, POS, CRM, and customer operations."],
                [<Lock className="h-5 w-5" />, "Secure AI assistant for internal knowledge, SOPs, policies, and support teams."],
                [<Rocket className="h-5 w-5" />, "Faster delivery with scalable architecture, measurable KPIs, and clean deployment."],
              ].map(([icon, text]) => (
                <div key={text} className="flex gap-3 rounded-2xl border border-white/10 bg-black/30 p-5 text-white/75">
                  {icon}
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-28">
          <div className="grid gap-10 rounded-[2rem] bg-white p-8 text-black md:p-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-black/45">Contact</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">Ready to build your AI advantage?</h2>
              <p className="mt-5 text-lg leading-relaxed text-black/60">Share your business challenge. We’ll help you turn it into a practical AI system with measurable impact.</p>
              <div className="mt-8 space-y-3 text-black/70">
                <p className="flex items-center gap-3">
                  <MessageSquareText className="h-5 w-5" /> Strategy, architecture, and implementation
                </p>
                <p className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5" /> AI stack, agents, RAG, ERP modules, integrations
                </p>
              </div>
            </div>

            <form className="space-y-4 rounded-3xl border border-black/10 bg-black/[0.04] p-6">
              <input className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none" placeholder="Your name" aria-label="Your name" />
              <input className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none" placeholder="Business email" aria-label="Business email" />
              <select className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none" aria-label="Project type">
                <option>What do you want to build?</option>
                <option>AI Automation</option>
                <option>AI Agent</option>
                <option>RAG Knowledge Assistant</option>
                <option>ERP Module Automation</option>
                <option>Business Central / LS Central Integration</option>
                <option>POS, Inventory, Finance, or Retail Workflow</option>
                <option>Enterprise Integration</option>
              </select>
              <textarea className="min-h-32 w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none" placeholder="Tell us about your project" aria-label="Project details" />
              <button type="button" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-7 py-4 font-semibold text-white transition hover:bg-black/85">
                Send Inquiry <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-white/45">© 2026 Æther AI. Beyond Intelligence. Beyond Limits.</footer>
    </div>
  );
}

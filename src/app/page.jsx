'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import useReveal from "@/hooks/useReveal";

const monumentPoster = "/assets/monument-valley-aurora.jpg";

const FOCUS_VERTICALS = [
  {
    title: "STARTUPS",
    problem: "You have limited headcount and runway. Shipping and ops can't wait for hiring.",
    solution: "Automations and tools that compress execution, reduce errors, and keep you moving fast.",
    colorClass: "text-brand-lavender",
    barClass: "bg-brand-lavender",
  },
  {
    title: "CONSUMER BRANDS",
    problem: "How much did it cost to produce that flopped post? Content needs are limitless, your budget is not.",
    solution: "Make your website and brand kit AI-readable, then build a Content Engine to produce volume without burning the whole budget.",
    colorClass: "text-brand-pink",
    barClass: "bg-brand-pink",
  },
  {
    title: "ADVERTISERS",
    problem: "AI raised the bar on client expectations for cost, volume, speed, and performance.",
    solution: "Integrate systems that automate production and iteration, so you can double down on what clients pay for: creative vision.",
    colorClass: "text-brand-peach",
    barClass: "bg-brand-peach",
  },
];

const PILLARS = [
  {
    title: "Strategy",
    kicker: "Clarity before complexity.",
    copy: "Poorly scoped AI pilots usually fail. Successful systems need clear definitions of where AI actually matters, guardrails that prevent drift, and roadmaps tied to measurable wins.",
  },
  {
    title: "Content Engines",
    kicker: "Content at the speed the platforms require.",
    copy: "Throughput is your bottleneck. Beating the algorithm requires content systems that scale output without drifting off-brand. Test, assess, then invest.",
  },
  {
    title: "Workflow Automation",
    kicker: "Speed without fragility.",
    copy: "Most AI failures come from task mismatch. Use AI to absorb the repetitive, error-prone work so your team can focus on judgment, creativity, and growth.",
  },
  {
    title: "Custom Tools",
    kicker: "Built for your reality.",
    copy: "If you could hire a $1 computer, what would you hand it? You don't need another enterprise tool, you need assistants designed around your data, stack, and teams.",
  },
];

const PROCESS_STEPS = [
  {
    step: "Assess",
    tagline: "Fix the foundation before automating it.",
    copy:
      "Automation amplifies existing inefficiency. Diagnose workflows and team readiness first, then apply AI where it actually helps.",
  },
  {
    step: "Design",
    tagline: "Order matters. Compound deliberately.",
    copy:
      "Overhauls stall. Focus on sequencing wins that strengthen throughput incrementally instead of betting on a full reset.",
  },
  {
    step: "Build",
    tagline: "Integrate where throughput happens.",
    copy:
      "Bolt-on projects usually fail. Systems must fit your team, stack, and current operations, and adapt as the technology changes.",
  },
  {
    step: "Guide",
    tagline: "Enable your people to use these systems well.",
    copy:
      "Systems need fluent operators. Upskilling provides the vocabulary and frameworks teams need to use AI effectively.",
  },
];

function FocusCard({ title, problem, solution, colorClass, barClass, idx, reduceMotion }) {
  const { ref, isVisible, transitionStyle } = useReveal({ delayMs: idx * 100, reduceMotion });

  return (
    <div
      ref={ref}
      className={`brand-card brand-card-home h-full space-y-2 card-enter ${isVisible ? "is-visible" : ""}`}
      style={transitionStyle}
    >
      <h2 className={`text-xl font-semibold ${colorClass}`}>{title}</h2>
      <div className={`h-[3px] ${barClass}`} aria-hidden="true" />
      <div className="space-y-4 text-sm">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">Problem</p>
          <p className="text-white/80">{problem}</p>
        </div>
        <div className="space-y-1">
          <p className={`text-xs font-semibold uppercase tracking-[0.12em] ${colorClass}`}>Solution</p>
          <p className="text-white">{solution}</p>
        </div>
      </div>
    </div>
  );
}

function PillarCard({ title, kicker, copy, idx, reduceMotion }) {
  const { ref, isVisible, transitionStyle } = useReveal({ delayMs: idx * 120, reduceMotion });

  return (
    <div
      ref={ref}
      className={`brand-card brand-card-home h-full card-enter ${isVisible ? "is-visible" : ""}`}
      style={transitionStyle}
    >
      <div className="h-0.5 bg-gradient-to-r from-brand-lavender via-brand-pink to-brand-peach" aria-hidden="true" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm font-semibold text-white/80">{kicker}</p>
      <p className="text-white/80">{copy}</p>
    </div>
  );
}

function ProcessCard({ step, tagline, copy, idx, reduceMotion }) {
  const { ref, isVisible, transitionStyle } = useReveal({ delayMs: idx * 100, reduceMotion });

  return (
    <div
      ref={ref}
      className={`brand-card brand-card-home h-full card-enter ${isVisible ? "is-visible" : ""}`}
      style={transitionStyle}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-semibold">
          {idx + 1}
        </span>
        <h3 className="text-lg font-semibold">{step}</h3>
      </div>
      <p className="text-sm font-semibold text-white/80">{tagline}</p>
      <p className="text-white/80">{copy}</p>
    </div>
  );
}

function Section({ children, className = "", innerClassName = "", labelledBy }) {
  return (
    <section
      className={`relative z-10 mt-4 md:mt-6 ${className}`.trim()}
      aria-labelledby={labelledBy}
    >
      <div className={`max-w-6xl mx-auto px-6 pt-2 pb-10 space-y-10 ${innerClassName}`.trim()}>{children}</div>
    </section>
  );
}

function Hero({ reduceMotion, heroVisible }) {
  return (
    <section className="relative min-h-[65svh] md:min-h-[55svh]">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {reduceMotion ? (
          <div className="relative w-full h-full">
            <Image
              src={monumentPoster}
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className="object-cover object-top"
              priority
            />
          </div>
        ) : (
          <video
            src="/videos/monument-valley-aurora.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={monumentPoster}
            className="w-full h-full object-cover object-top"
            aria-hidden="true"
          />
        )}
        <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
      </div>

      <div className="relative z-10 grid min-h-[65svh] md:min-h-[55svh] items-start justify-items-center px-4 pt-20 md:pt-20 pb-2">
        <div
          className={[
            "bg-black/40 backdrop-blur-xl p-8 md:p-10 rounded-3xl max-w-6xl w-full space-y-4 border border-white/10",
            "mt-4 md:mt-6",
            "transition-all duration-700",
            "motion-reduce:transition-none",
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          ].join(" ")}
        >
          <p className="brand-section-kicker text-brand-lavender">AI decisions, made correctly.</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Tool-agnostic AI consulting.
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            We show you where AI belongs, where it doesn&apos;t, and integrate it into the systems that run the business.
          </p>
          <p className="brand-hero-chip text-brand-lavender text-base md:text-lg">
            Organizational Strategy • Content engines • Workflow automation • Custom tools
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-3 justify-center">
            <a
              href="/contact"
              className="brand-cta bg-brand-lavender hover:bg-brand-lavender-dark text-black uppercase tracking-[0.08em] transition-transform duration-200 hover:scale-105"
            >
              <span className="inline-flex items-center gap-2">
                Request Assessment
                <span aria-hidden="true">→</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FocusGrid({ reduceMotion }) {
  return (
    <Section className="mt-2 md:-mt-24" innerClassName="pt-4 md:pt-6" labelledBy="what-we-do">
      <div className="grid gap-10">
        <div className="space-y-4">
          <p className="brand-section-kicker text-brand-lavender" id="what-we-do">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">We audit, architect, build, and train systems that last.</h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {FOCUS_VERTICALS.map((item, idx) => (
          <FocusCard key={item.title} idx={idx} reduceMotion={reduceMotion} {...item} />
        ))}
      </div>
    </Section>
  );
}

function Deliverables({ reduceMotion }) {
  return (
    <Section labelledBy="what-we-deliver">
      <div className="space-y-6">
        <div className="flex items-baseline justify-between flex-wrap gap-3">
          <div className="space-y-4">
            <p className="brand-section-kicker text-brand-lavender" id="what-we-deliver">What we deliver</p>
            <h2 className="text-3xl font-bold">AI that carries its weight across teams, workflows, and risk.</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {PILLARS.map((item, idx) => (
            <PillarCard key={item.title} idx={idx} reduceMotion={reduceMotion} {...item} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function Process({ reduceMotion }) {
  return (
    <Section labelledBy="how-we-work">
      <div className="space-y-6">
        <div className="flex items-baseline justify-between flex-wrap gap-3">
          <div className="space-y-4">
            <p className="brand-section-kicker text-brand-lavender" id="how-we-work">How we work</p>
            <h2 className="text-3xl font-bold">Disciplined upgrades across systems and teams.</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {PROCESS_STEPS.map((item, idx) => (
            <ProcessCard key={item.step} idx={idx} reduceMotion={reduceMotion} {...item} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <Section labelledBy="cta">
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 text-center space-y-4">
        <h2 className="text-3xl font-bold" id="cta">Ready to get this right?</h2>
        <p className="text-white/80">
          Put practical systems in place so you can focus on growing the business instead of running it.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href="/contact"
            className="brand-cta bg-brand-lavender hover:bg-brand-lavender-dark text-black uppercase tracking-[0.08em] transition-transform duration-200 hover:scale-105"
          >
            <span className="inline-flex items-center gap-2">
              Request Assessment
              <span aria-hidden="true">→</span>
            </span>
          </a>
        </div>
      </div>
    </Section>
  );
}

export default function Home() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);

    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setHeroVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <main className="bg-black">
      <Hero reduceMotion={reduceMotion} heroVisible={heroVisible} />
      <FocusGrid reduceMotion={reduceMotion} />
      <Deliverables reduceMotion={reduceMotion} />
      <Process reduceMotion={reduceMotion} />
      <FinalCTA />
    </main>
  );
}

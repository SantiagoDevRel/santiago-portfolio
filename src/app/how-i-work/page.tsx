"use client";

import { motion } from "framer-motion";
import StoryTimeline from "@/components/StoryTimeline";
import {
  CheckSquare,
  Globe,
  BarChart2,
  FileText,
  Briefcase,
  Activity,
  Users,
  Star,
  RefreshCw,
  Search,
  BookOpen,
  Code,
  TrendingUp,
} from "lucide-react";


// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const thinkCards = [
  {
    icon: Globe,
    title: "Show up. Be real. Earn trust.",
    desc: "The best DevRel comes from being in the room, not posting about it. I go to the places, observe what developers actually feel, and write what others leave unsaid.",
    proof: "20+ countries, 7-country Africa tour, viral campaigns that shaped Lisk\u2019s narrative",
  },
  {
    icon: BarChart2,
    title: "Every program needs a number",
    desc: "Community size, devs onboarded, budget per outcome, retention rate. If I cannot measure it, I do not know if it is working.",
    proof: "57 builders, 28 projects, $70K bounty, 0 to 2K community",
  },
  {
    icon: Briefcase,
    title: "Budget efficiency is a skill",
    desc: "I managed $100K+ across Africa and LATAM and treated every dollar like it was mine. Doing more with less is a competitive edge most teams overlook.",
    proof: "$100K+ managed across 2 regions, 7 countries",
  },
  {
    icon: FileText,
    title: "Ship, then improve",
    desc: "I built a DCA agent, an AI map app, and this portfolio while working full time. Iteration in public is faster than perfection in private.",
    proof: "3 side projects deployed and live in 2026",
  },
];

const timelineItems = [
  {
    icon: Activity,
    title: "Awareness to activation",
    desc: "Get developers to discover the product through content, events, and IRL presence. Then give them a reason to try it the same week.",
    sub: "Discovery events, conference talks, social content, Africa + LATAM tours",
  },
  {
    icon: Users,
    title: "Hackathon to retained builder",
    desc: "A hackathon prize is not a community. I build the funnel that takes a weekend hacker to a developer who ships to production and stays.",
    sub: "Workshops, office hours, ambassador programs, buildathons",
  },
  {
    icon: Star,
    title: "Retained builder to founder",
    desc: "The best developers become founders. I have connected builders cross-continent, helped them find co-founders, and supported go-to-market in markets I know well.",
    sub: "Founder residencies, cross-continent intros, GTM support",
  },
  {
    icon: RefreshCw,
    title: "Feedback loops back to product",
    desc: "What I hear in the field goes back to the team. Developer surveys, GitHub issues, Discord sentiment. DevRel that does not feed product is just marketing.",
    sub: "Surveys, structured feedback, changelog input, DX improvements",
  },
];

type Strength = "full" | "half" | "empty";

const journeyRows: {
  stage: string;
  icon: typeof Search;
  variant: "filled" | "faded" | "gray";
  question: string;
  bring: string;
  dots: Strength[];
}[] = [
  {
    stage: "Discover",
    icon: Search,
    variant: "filled",
    question: "Is this relevant to me?",
    bring: "IRL events, storytelling, conference talks, Africa + LATAM tours, social content",
    dots: ["full", "full", "full", "full", "full"],
  },
  {
    stage: "Evaluate",
    icon: CheckSquare,
    variant: "filled",
    question: "Will it meet my needs?",
    bring: "Docs, tutorials, use cases, partnerships, AMAs, code samples",
    dots: ["full", "full", "full", "full", "full"],
  },
  {
    stage: "Learn",
    icon: BookOpen,
    variant: "filled",
    question: "How does it work?",
    bring: "Workshops, office hours, video series, hackathons, bootcamps, residencies",
    dots: ["full", "full", "full", "full", "full"],
  },
  {
    stage: "Build",
    icon: Code,
    variant: "faded",
    question: "Can I ship something real?",
    bring: "Technical support, demo days, buildathons, ambassador programs",
    dots: ["full", "full", "full", "full", "empty"],
  },
  {
    stage: "Scale",
    icon: TrendingUp,
    variant: "gray",
    question: "Can I build to production?",
    bring: "Founder programs, go-to-market support, partner intros, incubation pipelines",
    dots: ["full", "full", "full", "empty", "empty"],
  },
];

// ---------------------------------------------------------------------------
// Small reusable pieces
// ---------------------------------------------------------------------------

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="text-xs font-semibold tracking-widest uppercase text-[#FF6B35]">
      {children}
    </span>
  );
}

function Dot({ type }: { type: Strength }) {
  if (type === "full")
    return <span className="inline-block w-[9px] h-[9px] rounded-full bg-[#FF6B35]" />;
  if (type === "half")
    return (
      <span
        className="inline-block w-[9px] h-[9px] rounded-full"
        style={{
          background: "linear-gradient(90deg, #FF6B35 50%, rgba(255,255,255,0.15) 50%)",
        }}
      />
    );
  return (
    <span className="inline-block w-[9px] h-[9px] rounded-full bg-white/[0.15]" />
  );
}

function StagePill({
  label,
  icon: Icon,
  variant,
}: {
  label: string;
  icon: typeof Search;
  variant: "filled" | "faded" | "gray";
}) {
  const bg =
    variant === "filled"
      ? "bg-[#FF6B35] text-white"
      : variant === "faded"
        ? "bg-[#FF6B35]/30 text-[#FF6B35]"
        : "bg-white/10 text-white/50";

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${bg}`}
    >
      <Icon size={12} />
      {label}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Animation wrapper (matches existing AnimateIn pattern)
// ---------------------------------------------------------------------------

function Animate({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function HowIWorkPage() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-5xl mx-auto space-y-24">
      {/* ---- Header ---- */}
      <Animate>
        <SectionLabel>HOW I WORK</SectionLabel>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">How I Work</h1>
        <p className="text-foreground/60 text-lg mt-3 max-w-2xl">
          A Colombian world citizen, building for Africa, LATAM and Europe
        </p>
      </Animate>

      {/* ---- About paragraph ---- */}
      <Animate delay={0.1}>
        <p className="text-foreground/70 leading-relaxed text-base max-w-3xl">
          3+ years of DevRel across Web3 (and learning AI actively). I have run
          founder residencies in Ethiopia, Argentina, toured 15+ European and
          African countries for developer adoption, and I am never scared to show
          up IRL, step out of my comfort zone, or learn whatever needs to be
          learned. Lifelong learner. AI lover.
        </p>
      </Animate>

      {/* ---- The Journey (Story Timeline) ---- */}
      <StoryTimeline />

      {/* ---- Developer Journey Coverage ---- */}
      <section>
        <Animate>
          <SectionLabel>DEVELOPER JOURNEY COVERAGE</SectionLabel>
          <p className="text-foreground/50 text-sm mt-2 max-w-2xl">
            Where I operate across the developer journey and how strong my
            coverage is at each stage.
          </p>
        </Animate>

        <Animate delay={0.1}>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm" style={{ minWidth: 500 }}>
              <thead>
                <tr className="text-foreground/40 text-xs uppercase tracking-wider">
                  <th className="py-3 pr-4 font-medium">Stage</th>
                  <th className="py-3 pr-4 font-medium">Developer question</th>
                  <th className="py-3 pr-4 font-medium">What I bring</th>
                  <th className="py-3 font-medium">Strength</th>
                </tr>
              </thead>
              <tbody>
                {journeyRows.map((row) => (
                  <tr
                    key={row.stage}
                    className="border-t"
                    style={{ borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    <td className="py-3 pr-4">
                      <StagePill
                        label={row.stage}
                        icon={row.icon}
                        variant={row.variant}
                      />
                    </td>
                    <td className="py-3 pr-4 text-foreground/50 text-xs italic">
                      {row.question}
                    </td>
                    <td className="py-3 pr-4 text-foreground/60 text-xs">
                      {row.bring}
                    </td>
                    <td className="py-3">
                      <span className="inline-flex gap-[3px]">
                        {row.dots.map((d, j) => (
                          <Dot key={j} type={d} />
                        ))}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Animate>
      </section>

      {/* ---- How I Approach DevRel (Timeline) ---- */}
      <section>
        <Animate>
          <SectionLabel>HOW I APPROACH DEVREL</SectionLabel>
        </Animate>

        <div className="mt-8 flex flex-col">
          {timelineItems.map((item, i) => {
            const Icon = item.icon;
            const isLast = i === timelineItems.length - 1;
            return (
              <Animate key={item.title} delay={i * 0.1}>
                <div className="flex gap-5">
                  {/* Node + line */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(255,107,53,0.12)",
                        border: "1.5px solid rgba(255,107,53,0.35)",
                      }}
                    >
                      <Icon size={16} className="text-[#FF6B35]" />
                    </div>
                    {!isLast && (
                      <div
                        className="flex-1 w-[1.5px] my-1"
                        style={{ background: "rgba(255,107,53,0.2)" }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`pb-8 ${isLast ? "pb-0" : ""}`}>
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-xs text-foreground/50 leading-relaxed mt-1 max-w-lg">
                      {item.desc}
                    </p>
                    <p className="text-[11px] text-foreground/35 mt-1">
                      {item.sub}
                    </p>
                  </div>
                </div>
              </Animate>
            );
          })}
        </div>
      </section>

      {/* ---- How I Think ---- */}
      <section>
        <Animate>
          <SectionLabel>HOW I THINK</SectionLabel>
        </Animate>

        <div className="grid grid-cols-2 gap-4 mt-6">
          {thinkCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Animate key={card.title} delay={i * 0.08}>
                <div
                  className="group rounded-xl p-5 h-full transition-transform duration-200 hover:-translate-y-[2px]"
                  style={{
                    background: "var(--color-background-secondary, #111)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderLeft: "2px solid transparent",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderLeftColor = "#FF6B35")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderLeftColor = "transparent")
                  }
                >
                  <div
                    className="w-[30px] h-[30px] flex items-center justify-center rounded-lg mb-3"
                    style={{ background: "rgba(255,107,53,0.12)" }}
                  >
                    <Icon size={14} className="text-[#FF6B35]" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-foreground/50 leading-relaxed">
                    {card.desc}
                  </p>
                  <p
                    className="mt-2 text-[11px] font-medium"
                    style={{ color: "#FF6B35" }}
                  >
                    {card.proof}
                  </p>
                </div>
              </Animate>
            );
          })}
        </div>
      </section>

    </div>
  );
}

// Homepage career timeline — horizontal track with plain circle nodes per year.
// Clicking a year expands detail cards with company logos for all roles active that year.
// Data sourced from /data/career.ts.
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { career, CareerEntry } from "@/data/career";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FlagImage } from "@/components/FlagImage";

const companyLogos: Record<string, { logo: string; flagCode: string }> = {
  "Crimson Education": { logo: "/images/events/crimson_logo.jpg", flagCode: "us" },
  "Libertum Project": { logo: "/images/events/libertum_logo.jpg", flagCode: "ae" },
  "Swisstronik": { logo: "/images/events/swisstronik_logo.jpg", flagCode: "ch" },
  "ChainSafe – Web3.js": { logo: "/images/events/chainsafe_logo.jpg", flagCode: "ca" },
  "Lisk / Onchain Foundation": { logo: "/images/events/lisk_logo.jpg", flagCode: "ch" },
};

function parseYear(s: string): number {
  if (s === "Present") return new Date().getFullYear();
  const match = s.match(/\d{4}/);
  return match ? parseInt(match[0]) : 0;
}

function getSpanYears(entry: CareerEntry): number[] {
  const start = parseYear(entry.period.start);
  const end = parseYear(entry.period.end);
  const years: number[] = [];
  for (let y = start; y <= end; y++) years.push(y);
  return years;
}

const allYears = Array.from(
  new Set(career.flatMap(getSpanYears))
).sort();

const categoryColors: Record<string, string> = {
  Education: "#ff88cc",
  "Solidity Developer": "#FF6B35",
  DevRel: "#00aaff",
  Founder: "#ff6600",
  Current: "#FF6B35",
};

export default function CareerTimeline() {
  const [activeYear, setActiveYear] = useState<number | null>(2026);

  const entriesForYear = activeYear
    ? career
        .filter((e) => getSpanYears(e).includes(activeYear))
        // Crimson only shows in 2021-2022
        .filter((e) => !(e.id === "crimson-education-2021" && activeYear >= 2023))
        // Sort: non-part-time first, then by start year descending
        .sort((a, b) => {
          if (a.isPartTime && !b.isPartTime) return 1;
          if (!a.isPartTime && b.isPartTime) return -1;
          return parseYear(b.period.start) - parseYear(a.period.start);
        })
    : [];

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 tracking-tight">
        Career Timeline
      </h2>

      {/* Timeline track */}
      <div className="relative w-full">
        <div className="absolute top-[22px] left-0 right-0 h-px bg-white/15" />

        <div className="relative flex w-full justify-between">
          {allYears.map((year) => {
            const isActive = activeYear === year;

            return (
              <button
                key={year}
                onClick={() => setActiveYear(isActive ? null : year)}
                className="flex flex-col items-center gap-3 group relative z-10"
              >
                <div
                  className={`w-11 h-11 rounded-full bg-[#1a1a1a] transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "border-2 border-[#FF6B35] shadow-[0_0_12px_rgba(255,107,53,0.3)] scale-110"
                      : "border border-white/[0.08] group-hover:border-white/20 group-hover:scale-105 group-hover:shadow-[0_0_8px_rgba(255,255,255,0.05)]"
                  }`}
                />
                <span
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-[#FF6B35] to-[#C8400A] bg-clip-text text-transparent"
                      : "text-foreground/40 group-hover:text-foreground/70"
                  }`}
                >
                  {year}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail cards */}
      <AnimatePresence mode="wait">
        {activeYear && entriesForYear.length > 0 && (
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-10 space-y-4 overflow-hidden"
          >
            {entriesForYear.map((entry) => (
              <CareerDetailCard key={entry.id} entry={entry} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const workSlugs: Record<string, string> = {
  "crimson-education-2021": "crimson",
  libertum: "libertum",
  swisstronik: "swisstronik",
  "chainsafe-web3js": "chainsafe",
  lisk: "lisk",
};

function CareerDetailCard({ entry }: { entry: CareerEntry }) {
  const color = categoryColors[entry.category] ?? "#FF6B35";
  const logoInfo = companyLogos[entry.company] ?? null;
  const workHref = `/work/${workSlugs[entry.id] ?? entry.id}`;

  return (
    <div
      onMouseEnter={() => window.dispatchEvent(new Event("spotlight:hide"))}
      onMouseLeave={() => window.dispatchEvent(new Event("spotlight:show"))}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 hover:border-orange-500/20">
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          {logoInfo && (
            <div className="w-12 h-12 rounded-[10px] bg-[#1a1a1a] border border-white/[0.08] p-0.5 overflow-hidden flex-shrink-0">
              <Image
                src={logoInfo.logo}
                alt={entry.company}
                width={48}
                height={48}
                className="object-cover object-center rounded-[8px] w-full h-full"
              />
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold tracking-tight flex items-center gap-1.5">
              {entry.company}
              {logoInfo && <FlagImage code={logoInfo.flagCode} size={14} />}

            </h3>
            <p className="text-sm text-foreground/45 mt-1">
              {entry.role} · {entry.period.start} – {entry.period.end}
            </p>
          </div>
        </div>
        <span
          className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
          style={{
            backgroundColor: color + "15",
            color: color,
          }}
        >
          {entry.category}
        </span>
      </div>

      <p className="text-sm text-foreground/55 mt-4 leading-relaxed">
        {entry.description}
      </p>

      {entry.metrics.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-5">
          {entry.metrics.map((m) => (
            <span
              key={m.label}
              className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-foreground/50"
            >
              {m.label}:{" "}
              <span className="text-foreground font-medium">{m.value}</span>
            </span>
          ))}
        </div>
      )}

      {entry.links.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-4">
          {entry.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[13px] font-medium text-[#FF6B35]/85 hover:text-[#FF6B35] hover:underline transition-opacity duration-150"
            >
              {link.label}
              <ExternalLink size={12} />
            </a>
          ))}
        </div>
      )}

      <div className="mt-5 pt-4 border-t border-white/[0.06]">
        <Link
          href={workHref}
          className="text-xs font-medium text-[#FF6B35]/80 hover:text-[#FF6B35] transition-colors duration-200"
        >
          See full work →
        </Link>
      </div>
    </div>
  );
}

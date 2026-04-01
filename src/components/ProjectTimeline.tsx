// Detailed vertical timeline for the /projects page — newest entry at the top.
// Left column shows period, center has a vertical spine with dots, right column shows the project card.
// Data sourced from /data/career.ts.
"use client";

import { career, CareerEntry } from "@/data/career";

const categoryColors: Record<string, string> = {
  Education: "#ff88cc",
  "Solidity Developer": "#FFD700",
  DevRel: "#00aaff",
  Founder: "#ff6600",
  Current: "#FFD700",
};

// Group entries by year range label, newest first
function getYearLabel(entry: CareerEntry): string {
  if (entry.period.end === "Present") return "2024 – Present";
  const startYear = entry.period.start.split(" ")[1];
  const endYear = entry.period.end.split(" ")[1];
  return startYear === endYear ? startYear : `${startYear} – ${endYear}`;
}

export default function ProjectTimeline() {
  // Sort newest first
  const sorted = [...career].sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return 0;
  });

  // Group by year label
  const groups: { label: string; entries: CareerEntry[] }[] = [];
  for (const entry of sorted) {
    const label = getYearLabel(entry);
    const existing = groups.find((g) => g.label === label);
    if (existing) {
      existing.entries.push(entry);
    } else {
      groups.push({ label, entries: [entry] });
    }
  }

  return (
    <div className="relative">
      {groups.map((group) => (
        <div key={group.label} className="mb-12">
          {/* Year section label */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-bold text-[#FFD700] tracking-wide uppercase">
              {group.label}
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Entries */}
          <div className="space-y-8">
            {group.entries.map((entry) => (
              <TimelineEntry key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function TimelineEntry({ entry }: { entry: CareerEntry }) {
  const isCurrent = entry.category === "Current";
  const color = categoryColors[entry.category] ?? "#FFD700";

  return (
    <div className="flex gap-6">
      {/* Left column: period + spine */}
      <div className="flex flex-col items-center w-28 shrink-0">
        <span className="text-xs text-foreground/40 text-right w-full mb-2">
          {entry.period.start}
          <br />
          {entry.period.end}
        </span>
        <div className="relative flex flex-col items-center flex-1">
          {/* Dot */}
          <div
            className={`w-3 h-3 rounded-full border-2 shrink-0 ${
              isCurrent
                ? "bg-[#FFD700] border-[#FFD700]"
                : "bg-transparent border-white/30"
            }`}
          />
          {/* Vertical spine */}
          <div className="w-px flex-1 bg-white/10 mt-1" />
        </div>
      </div>

      {/* Right column: card */}
      <div className="border border-white/10 rounded-xl p-6 flex-1 hover:border-[#FFD700]/30 transition-colors">
        <div className="flex items-start justify-between flex-wrap gap-2">
          <div>
            <h3 className="text-lg font-bold">{entry.company}</h3>
            <p className="text-sm text-foreground/50 mt-1">
              {entry.role} · {entry.period.start} – {entry.period.end}
            </p>
          </div>
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: color + "20",
              color: color,
            }}
          >
            {entry.category}
          </span>
        </div>

        <p className="text-sm text-foreground/60 mt-4 leading-relaxed">
          {entry.description}
        </p>

        {/* Metric pills */}
        {entry.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {entry.metrics.map((m) => (
              <span
                key={m.label}
                className="text-xs px-2 py-1 rounded-full bg-[#FFD700]/10 text-[#FFD700]"
              >
                {m.label}: {m.value}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        {entry.links.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {entry.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1 rounded-full border border-white/10 text-foreground/50 hover:text-[#FFD700] hover:border-[#FFD700]/30 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

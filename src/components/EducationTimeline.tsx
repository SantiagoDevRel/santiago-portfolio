// EducationTimeline — vertical timeline for the /education page with category filter bar.
// Styled after ProjectTimeline.tsx — year sections, spine with dots, and detail cards.
"use client";

import { useState } from "react";
import { education, EducationEntry, EducationCategory } from "@/data/education";

const categoryColors: Record<EducationCategory, string> = {
  Video: "#ff4444",
  Challenge: "#ffcc00",
  Documentation: "#aa88ff",
  Research: "#aa88ff",
};

const allCategories = Object.keys(categoryColors) as EducationCategory[];

export default function EducationTimeline() {
  const [activeCategories, setActiveCategories] = useState<Set<EducationCategory>>(
    new Set(allCategories)
  );

  const toggleCategory = (category: EducationCategory) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        if (next.size === 1) return prev; // keep at least one
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const filtered = education.filter((e) => activeCategories.has(e.category));

  // Group entries by date (year extracted from date string)
  const groups: { label: string; entries: EducationEntry[] }[] = [];
  for (const entry of filtered) {
    const yearMatch = entry.date.match(/\d{4}/);
    const label = yearMatch ? yearMatch[0] : entry.date;
    const existing = groups.find((g) => g.label === label);
    if (existing) {
      existing.entries.push(entry);
    } else {
      groups.push({ label, entries: [entry] });
    }
  }

  // Sort groups newest first
  groups.sort((a, b) => Number(b.label) - Number(a.label));

  return (
    <div>
      {/* Category filter bar */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {allCategories.map((category) => {
          const isActive = activeCategories.has(category);
          const color = categoryColors[category];
          return (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                isActive
                  ? "border-white/15 text-foreground/70"
                  : "border-white/[0.06] text-foreground/25"
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full transition-opacity duration-200"
                style={{
                  backgroundColor: color,
                  opacity: isActive ? 1 : 0.25,
                }}
              />
              {category}
            </button>
          );
        })}
      </div>

      {/* Timeline */}
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

        {filtered.length === 0 && (
          <p className="text-center text-foreground/30 py-12">
            No entries match the selected categories.
          </p>
        )}
      </div>
    </div>
  );
}

function TimelineEntry({ entry }: { entry: EducationEntry }) {
  const color = categoryColors[entry.category];

  return (
    <div className="flex gap-6">
      {/* Left column: date + spine */}
      <div className="flex flex-col items-center w-28 shrink-0">
        <span className="text-xs text-foreground/40 text-right w-full mb-2">
          {entry.date}
        </span>
        <div className="relative flex flex-col items-center flex-1">
          {/* Dot */}
          <div
            className="w-3 h-3 rounded-full border-2 shrink-0"
            style={{ borderColor: color, backgroundColor: color + "30" }}
          />
          {/* Vertical spine */}
          <div className="w-px flex-1 bg-white/10 mt-1" />
        </div>
      </div>

      {/* Right column: card */}
      <div className="border border-white/10 rounded-xl p-6 flex-1 hover:border-[#FFD700]/30 transition-colors">
        <div className="flex items-start justify-between flex-wrap gap-2">
          <div>
            <h3 className="text-lg font-bold">{entry.title}</h3>
            <p className="text-sm text-foreground/50 mt-1">
              {entry.company} &middot; {entry.platform}
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

        {/* Link pills */}
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

// EducationCard — displays education entry with cover image or category placeholder,
// title, company/platform, date, description, link pills, and category badge.
"use client";

import { useState } from "react";
import Image from "next/image";
import { EducationEntry, EducationCategory } from "@/data/education";
import SurveyChart from "./SurveyChart";
import EducationModal from "./EducationModal";

const categoryColors: Record<EducationCategory, string> = {
  Video: "#ff4444",
  Challenge: "#ffcc00",
  Documentation: "#aa88ff",
  Research: "#aa88ff",
};

interface EducationCardProps {
  entry: EducationEntry;
}

export default function EducationCard({ entry }: EducationCardProps) {
  const [showModal, setShowModal] = useState(false);
  const color = categoryColors[entry.category];

  return (
    <>
    <div
      onMouseEnter={() => window.dispatchEvent(new Event("spotlight:hide"))}
      onMouseLeave={() => window.dispatchEvent(new Event("spotlight:show"))}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 hover:border-orange-500/20 group flex flex-col h-full">
      {/* Cover: survey chart, image, or category placeholder */}
      {entry.id === "swisstronik-dev-survey-2023" ? (
        <div className="h-[160px] shrink-0 overflow-hidden">
          <SurveyChart />
        </div>
      ) : entry.imageUrl ? (
        <div className="relative w-full h-[160px] shrink-0 overflow-hidden">
          <Image
            src={entry.imageUrl}
            alt={entry.title}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            style={entry.imagePosition ? { objectPosition: entry.imagePosition } : undefined}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          <span
            className="absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm"
            style={{
              backgroundColor: color + "25",
              color: color,
            }}
          >
            {entry.category}
          </span>
        </div>
      ) : (
        <div
          className="w-full h-[160px] shrink-0 flex items-center justify-center"
          style={{ backgroundColor: color + "08" }}
        >
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: color + "60" }}
          >
            {entry.category}
          </span>
        </div>
      )}

      <div className="p-5 flex-1 flex flex-col">
        {/* Category badge when no image */}
        <div className="flex items-center justify-between mb-2">
          {!entry.imageUrl && (
            <span
              className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: color + "15",
                color: color,
              }}
            >
              {entry.category}
            </span>
          )}
          <span className="text-xs text-foreground/35 ml-auto">{entry.date}</span>
        </div>

        <h3 className="text-lg font-bold tracking-tight line-clamp-2">{entry.title}</h3>
        <p className="text-sm text-foreground/45 mt-1">
          {entry.company} &middot; {entry.platform}
        </p>
        <p className="text-sm text-foreground/55 mt-3 leading-relaxed line-clamp-2">
          {entry.description}
        </p>

        {/* Link pills + See more */}
        <div className="flex flex-wrap items-center gap-3 mt-auto pt-3 border-t border-white/[0.06]">
          {entry.links.slice(0, 2).map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-foreground/35 hover:text-[#FF6B35] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setShowModal(true)}
            className="text-xs text-[#FF6B35]/70 hover:text-[#FF6B35] transition-colors duration-200 ml-auto"
          >
            See more →
          </button>
        </div>
      </div>
    </div>

    {showModal && (
      <EducationModal entry={entry} onClose={() => setShowModal(false)} />
    )}
    </>
  );
}

// EducationModal — full detail modal for education entries, opened from EducationCard "See more →"
"use client";

import { useEffect } from "react";
import Image from "next/image";
import { EducationEntry, EducationCategory } from "@/data/education";
import SurveyChart from "./SurveyChart";

const categoryColors: Record<EducationCategory, string> = {
  Video: "#ff4444",
  Challenge: "#ffcc00",
  Documentation: "#aa88ff",
  Research: "#aa88ff",
};

interface EducationModalProps {
  entry: EducationEntry;
  onClose: () => void;
}

export default function EducationModal({ entry, onClose }: EducationModalProps) {
  const color = categoryColors[entry.category];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-xl border border-white/10 bg-background"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:text-[#FFD700] hover:bg-white/20 transition-colors"
        >
          ×
        </button>

        {/* Header image/chart */}
        {entry.id === "swisstronik-dev-survey-2023" ? (
          <SurveyChart />
        ) : entry.imageUrl ? (
          <div className="relative w-full h-[220px]">
            <Image
              src={entry.imageUrl}
              alt={entry.title}
              fill
              className="object-cover"
              style={entry.imagePosition ? { objectPosition: entry.imagePosition } : undefined}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>
        ) : (
          <div
            className="w-full h-[120px] flex items-center justify-center"
            style={{ backgroundColor: color + "08" }}
          >
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: color + "50" }}
            >
              {entry.category}
            </span>
          </div>
        )}

        <div className="p-6">
          <span
            className="inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3"
            style={{ backgroundColor: color + "15", color }}
          >
            {entry.category}
          </span>

          <h2 className="text-xl font-bold tracking-tight">{entry.title}</h2>
          <p className="text-sm text-foreground/45 mt-1">
            {entry.company} &middot; {entry.platform}
          </p>
          <p className="text-xs text-foreground/35 mt-1">{entry.date}</p>

          <p className="text-sm text-foreground/55 mt-4 leading-relaxed">
            {entry.description}
          </p>

          {/* Links */}
          {entry.links.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-5 pt-4 border-t border-white/[0.06]">
              {entry.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-foreground/35 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

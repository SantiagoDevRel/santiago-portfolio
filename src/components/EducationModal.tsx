// EducationModal — full detail modal for education entries
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { EducationEntry, EducationCategory } from "@/data/education";
import { ModalPortal } from "@/components/ui/ModalPortal";
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
    <ModalPortal>
    <motion.div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center sm:p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

      <motion.div
        className="relative w-full sm:max-w-[680px] max-h-[95vh] sm:max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-white/[0.08] bg-[#141414]"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 100, scale: 1 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header image/chart */}
        {entry.id === "swisstronik-dev-survey-2023" ? (
          <SurveyChart />
        ) : entry.imageUrl ? (
          <div className="relative w-full h-[260px]">
            <Image
              src={entry.imageUrl}
              alt={entry.title}
              fill
              className="object-cover rounded-t-2xl"
              style={entry.imagePosition ? { objectPosition: entry.imagePosition } : undefined}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />
          </div>
        ) : (
          <div
            className="w-full h-[120px] flex items-center justify-center rounded-t-2xl"
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

          <p className="text-sm text-foreground/55 mt-4 leading-[1.7]">
            {entry.description}
          </p>

          {entry.links.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-5 pt-4 border-t border-white/[0.06]">
              {entry.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-foreground/35 hover:text-[#FF6B35] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
    </ModalPortal>
  );
}

// EventModal — full event detail modal with optional image gallery
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { MapEvent, EventCategory } from "@/data/events";
import { ModalPortal } from "@/components/ui/ModalPortal";
import SurveyChart from "./SurveyChart";

const categoryColors: Record<EventCategory, string> = {
  Workshop: "#FF6B35",
  Conference: "#00aaff",
  Residency: "#ff6600",
  "Field Trip": "#ff00aa",
  Hackathon: "#ffcc00",
};

interface EventModalProps {
  event: MapEvent;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
  const color = categoryColors[event.category];
  const gallery = event.imageGallery;
  const [galleryIndex, setGalleryIndex] = useState(0);
  const mainImage = gallery && gallery.length > 0 ? gallery[galleryIndex] : (event.imageUrl ?? null);

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

        {/* Main image */}
        {event.id === "swisstronik-dev-survey-2023" ? (
          <SurveyChart />
        ) : mainImage ? (
          <div className="relative w-full h-[260px]">
            <Image
              src={mainImage}
              alt={event.title}
              fill
              className="object-cover rounded-t-2xl"
              style={event.imagePosition ? { objectPosition: event.imagePosition } : undefined}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />
            {gallery && gallery.length > 1 && (
              <>
                <button
                  onClick={() => setGalleryIndex((i) => (i - 1 + gallery.length) % gallery.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white/80 hover:bg-black/70 transition-colors"
                >
                  ‹
                </button>
                <button
                  onClick={() => setGalleryIndex((i) => (i + 1) % gallery.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white/80 hover:bg-black/70 transition-colors"
                >
                  ›
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-white/50 bg-black/40 px-2 py-0.5 rounded-full">
                  {galleryIndex + 1} / {gallery.length}
                </div>
              </>
            )}
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
              {event.category}
            </span>
          </div>
        )}

        <div className="p-6">
          <span
            className="inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3"
            style={{ backgroundColor: color + "15", color }}
          >
            {event.category}
          </span>

          <h2 className="text-xl font-bold tracking-tight">{event.title}</h2>
          {event.role && (
            <p className="text-sm text-foreground/45 mt-1">{event.role}</p>
          )}
          {event.city && event.country && (
            <p className="text-xs text-foreground/35 mt-1">
              {event.city}, {event.country}
            </p>
          )}

          <p className="text-sm text-foreground/55 mt-4 leading-[1.7]">
            {event.description}
          </p>

          {event.metrics && event.metrics.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-5">
              {event.metrics.map((m) => (
                <span
                  key={m.label}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-foreground/50"
                >
                  {m.label}:{" "}
                  <span className="text-foreground font-medium">{m.value}</span>
                </span>
              ))}
            </div>
          )}

          {event.highlights && event.highlights.length > 0 && (
            <ul className="mt-5 space-y-2">
              {event.highlights.map((h, i) => (
                <li key={i} className="text-xs text-foreground/45 flex gap-2">
                  <span className="text-[#FF6B35]/60 shrink-0">-</span>
                  {h}
                </li>
              ))}
            </ul>
          )}

          {event.links && (
            <div className="flex flex-wrap gap-3 mt-5 pt-4 border-t border-white/[0.06]">
              {Object.entries(event.links).map(([key, url]) => {
                if (!url) return null;
                const label = key === "live" ? "Website" : key.charAt(0).toUpperCase() + key.slice(1);
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-foreground/35 hover:text-[#FF6B35] transition-colors"
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
    </ModalPortal>
  );
}

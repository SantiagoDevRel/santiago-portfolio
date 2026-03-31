// EventCard — displays event with cover image, name, role, location, metrics, links, and "See more" modal
"use client";

import { useState } from "react";
import Image from "next/image";
import { MapEvent, EventCategory } from "@/data/events";

import EventModal from "./EventModal";

const categoryColors: Record<EventCategory, string> = {
  Workshop: "#00ff88",
  Conference: "#00aaff",
  Residency: "#ff6600",
  "Field Trip": "#ff00aa",
  Hackathon: "#ffcc00",
};

interface EventCardProps {
  event: MapEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const [showModal, setShowModal] = useState(false);
  const color = categoryColors[event.category];
  const hasDetails = event.highlights && event.highlights.length > 0;

  return (
    <>
      <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-accent/20 transition-all duration-300 group flex flex-col min-h-[420px]">
        {/* Cover: image or category placeholder */}
        {event.imageUrl ? (
          <div className="relative w-full h-[160px] shrink-0 overflow-hidden">
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              style={event.imagePosition ? { objectPosition: event.imagePosition } : undefined}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <span
              className="absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm"
              style={{
                backgroundColor: color + "25",
                color: color,
              }}
            >
              {event.category}
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
              {event.category}
            </span>
          </div>
        )}

        <div className="p-5 flex-1 flex flex-col">
          {/* Category badge when no image */}
          <div className="flex items-center justify-between mb-2">
            {!event.imageUrl && (
              <span
                className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                style={{
                  backgroundColor: color + "15",
                  color: color,
                }}
              >
                {event.category}
              </span>
            )}
            {event.date && (
              <span className="text-xs text-foreground/35 ml-auto">{event.date}</span>
            )}
            {!event.date && event.period && (
              <span className="text-xs text-foreground/35 ml-auto">
                {event.period.start} – {event.period.end}
              </span>
            )}
          </div>

          <h3 className="text-lg font-bold tracking-tight line-clamp-2">{event.title}</h3>
          {event.role && (
            <p className="text-sm text-foreground/45 mt-1">{event.role}</p>
          )}
          {event.city && event.country && (
            <p className="text-xs text-foreground/35 mt-1">
              {event.city}, {event.country}
            </p>
          )}
          <p className="text-sm text-foreground/55 mt-3 leading-relaxed line-clamp-2">
            {event.description}
          </p>

          {/* Metrics */}
          {event.metrics && event.metrics.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
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

          {!event.metrics && event.attendees && (
            <p className="text-xs text-foreground/35 mt-3">
              {event.attendees.toLocaleString()} attendees
            </p>
          )}

          {/* Links + See more */}
          <div className="flex flex-wrap items-center gap-3 mt-auto pt-3 border-t border-white/[0.06]">
            {event.links && Object.entries(event.links).filter(([, url]) => url).slice(0, 2).map(([key, url]) => {
              const label = key === "live" ? "Website" : key.charAt(0).toUpperCase() + key.slice(1);
              return (
                <a
                  key={key}
                  href={url ?? undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-foreground/35 hover:text-accent transition-colors duration-200"
                >
                  {label}
                </a>
              );
            })}
            {hasDetails && (
              <button
                onClick={() => setShowModal(true)}
                className="text-xs text-accent/70 hover:text-accent transition-colors duration-200 ml-auto"
              >
                See more →
              </button>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <EventModal event={event} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

// Events page — IRL conferences, workshops, hackathons with category and year filters
"use client";

import { useState } from "react";
import EventCard from "@/components/EventCard";
import FilterBar from "@/components/FilterBar";
import { events } from "@/data/events";

const categoryColors: Record<string, string> = {
  Workshop: "#00ff88",
  Conference: "#00aaff",
  Hackathon: "#ffcc00",
  Residency: "#ff6600",
  "Field Trip": "#ff00aa",
};

// Build categories from actual data
const categoryCounts: Record<string, number> = {};
for (const e of events) {
  categoryCounts[e.category] = (categoryCounts[e.category] ?? 0) + 1;
}
const categories = Object.keys(categoryCounts);

// Years sorted newest first
const allYears = Array.from(new Set(events.map((e) => e.year))).sort((a, b) => b - a);

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeYear, setActiveYear] = useState<number | null>(null);

  const filtered = events.filter((e) => {
    if (activeFilter !== "All" && e.category !== activeFilter) return false;
    if (activeYear !== null && e.year !== activeYear) return false;
    return true;
  });

  return (
    <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">
        Events
      </h1>
      <p className="text-foreground/40 mb-8">
        Workshops, talks, and conferences I&apos;ve participated in.
      </p>

      <FilterBar
        categories={categories}
        counts={categoryCounts}
        categoryColors={categoryColors}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        totalCount={events.length}
      />

      {/* Year filter */}
      <div className="flex justify-center gap-2 -mt-8 mb-12 flex-wrap">
        <button
          onClick={() => setActiveYear(null)}
          className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
            activeYear === null
              ? "border-accent/40 text-accent"
              : "border-white/[0.06] text-foreground/25"
          }`}
        >
          All years
        </button>
        {allYears.map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(activeYear === year ? null : year)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
              activeYear === year
                ? "border-accent/40 text-accent"
                : "border-white/[0.06] text-foreground/25"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      <div
        key={activeFilter + (activeYear ?? "all")}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-[fadeIn_100ms_ease-in]"
      >
        {filtered.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-foreground/30 py-12">
          No events match the selected filters.
        </p>
      )}
    </div>
  );
}

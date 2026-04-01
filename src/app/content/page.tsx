// Content page — videos, tutorials, docs, challenges from education.ts
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import EducationCard from "@/components/EducationCard";
import FilterBar from "@/components/FilterBar";
import { education } from "@/data/education";

const categoryColors: Record<string, string> = {
  Video: "#ff4444",
  Challenge: "#ffcc00",
  Documentation: "#aa88ff",
  Research: "#aa88ff",
};

const categoryCounts: Record<string, number> = {};
for (const e of education) {
  categoryCounts[e.category] = (categoryCounts[e.category] ?? 0) + 1;
}
const categories = Object.keys(categoryCounts);

export default function ContentPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = education.filter(
    (e) => activeFilter === "All" || e.category === activeFilter
  );

  return (
    <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">Content</h1>
      <p className="text-foreground/40 mb-8">
        Videos, tutorials, docs, and challenges I have created.
      </p>

      <FilterBar
        categories={categories}
        counts={categoryCounts}
        categoryColors={categoryColors}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        totalCount={education.length}
      />

      <div
        key={activeFilter}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-[fadeIn_100ms_ease-in]"
      >
        {filtered.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          >
            <EducationCard entry={entry} />
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-foreground/30 py-12">
          No content matches the selected filter.
        </p>
      )}
    </div>
  );
}

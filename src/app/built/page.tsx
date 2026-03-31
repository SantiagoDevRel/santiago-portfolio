// Built page — apps, contracts, and tools from projects.ts
"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import FilterBar from "@/components/FilterBar";
import { projects } from "@/data/projects";

const categoryColors: Record<string, string> = {
  "Smart Contract": "#00ff88",
  Hackathon: "#ffcc00",
};

const categoryCounts: Record<string, number> = {};
for (const p of projects) {
  categoryCounts[p.category] = (categoryCounts[p.category] ?? 0) + 1;
}
const categories = Object.keys(categoryCounts);

export default function BuiltPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">Built</h1>
      <p className="text-foreground/40 mb-8">
        Apps, contracts, and tools I have shipped.
      </p>

      <FilterBar
        categories={categories}
        counts={categoryCounts}
        categoryColors={categoryColors}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        totalCount={projects.length}
      />

      <div
        key={activeFilter}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-[fadeIn_100ms_ease-in]"
      >
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-foreground/30 py-12">
          No projects match the selected filter.
        </p>
      )}
    </div>
  );
}

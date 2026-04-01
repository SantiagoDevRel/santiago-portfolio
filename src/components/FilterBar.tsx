// FilterBar — shared filter bar used across events, education, and projects pages.
// Renders a horizontal row of pill buttons with "All" default, category counts,
// colored dots per category, and green accent for active state.
"use client";

interface FilterBarProps {
  categories: string[];
  counts: Record<string, number>;
  categoryColors?: Record<string, string>;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  totalCount: number;
}

export default function FilterBar({
  categories,
  counts,
  categoryColors,
  activeFilter,
  onFilterChange,
  totalCount,
}: FilterBarProps) {
  return (
    <div className="flex justify-center gap-2 mb-12 flex-wrap">
      <button
        onClick={() => onFilterChange("All")}
        className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
          activeFilter === "All"
            ? "bg-gradient-to-r from-[#FFD700] via-[#FF6B35] to-[#00C853] text-background border-transparent font-semibold"
            : "border-white/[0.08] text-foreground/40 hover:text-foreground/60 hover:border-white/15"
        }`}
      >
        All ({totalCount})
      </button>
      {categories.map((category) => {
        const isActive = activeFilter === category;
        const color = categoryColors?.[category];
        return (
          <button
            key={category}
            onClick={() => onFilterChange(category)}
            className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
              isActive
                ? "bg-gradient-to-r from-[#FFD700] via-[#FF6B35] to-[#00C853] text-background border-transparent font-semibold"
                : "border-white/[0.08] text-foreground/40 hover:text-foreground/60 hover:border-white/15"
            }`}
          >
            {color && (
              <span
                className="w-2 h-2 rounded-full transition-opacity duration-200"
                style={{
                  backgroundColor: color,
                  opacity: isActive ? 0 : 0.7,
                }}
              />
            )}
            {category} ({counts[category] ?? 0})
          </button>
        );
      })}
    </div>
  );
}

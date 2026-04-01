// TimelineSlider — horizontal year filter below the map
"use client";

const years = [2023, 2024, 2025, 2026];

interface TimelineSliderProps {
  selectedYear: number | null;
  onYearChange: (year: number | null) => void;
}

export default function TimelineSlider({
  selectedYear,
  onYearChange,
}: TimelineSliderProps) {
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <button
        onClick={() => onYearChange(null)}
        className={`text-sm px-3 py-1 rounded-full transition-colors ${
          selectedYear === null
            ? "bg-[#FF6B35] text-background"
            : "text-foreground/50 hover:text-foreground"
        }`}
      >
        All
      </button>
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onYearChange(year)}
          className={`text-sm px-3 py-1 rounded-full transition-colors ${
            selectedYear === year
              ? "bg-[#FF6B35] text-background"
              : "text-foreground/50 hover:text-foreground"
          }`}
        >
          {year}
        </button>
      ))}
    </div>
  );
}

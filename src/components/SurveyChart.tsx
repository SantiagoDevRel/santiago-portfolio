// SurveyChart — horizontal bar chart for Swisstronik developer survey results
// Pure CSS bars, no Chart.js needed. Used as image replacement in the survey event card.

const bars = [
  { label: "Learning resources", score: "92%", width: "92%", color: "#FF6B35" },
  { label: "Career growth", score: "88%", width: "88%", color: "#378ADD" },
  { label: "Recognition", score: "70%", width: "70%", color: "#5DCAA5" },
  { label: "Monetary rewards", score: "64%", width: "64%", color: "#555555" },
];

export default function SurveyChart() {
  return (
    <div className="w-full h-[200px] bg-background rounded-t-xl px-5 py-4 flex flex-col justify-between">
      <div className="space-y-3">
        {bars.map((bar) => (
          <div key={bar.label}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] text-foreground/50">{bar.label}</span>
              <span className="text-[11px] font-medium" style={{ color: bar.color }}>
                {bar.score}
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#1a1a1a]">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: bar.width, backgroundColor: bar.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-3">
        <span className="text-[11px] font-semibold text-[#FF6B35] px-2 py-0.5 rounded-full bg-[#FF6B35]/10">
          Learning beats money by 31%
        </span>
        <span className="text-[10px] text-foreground/30">
          shaped the $10K community budget
        </span>
      </div>
    </div>
  );
}

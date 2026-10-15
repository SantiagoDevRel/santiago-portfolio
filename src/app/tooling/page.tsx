// Tooling page — developer tools I shipped at Arkiv, each with its metrics, screenshots and walkthrough videos
import type { Metadata } from "next";
import { Info } from "lucide-react";
import ToolSection from "@/components/ToolSection";
import { SNAPSHOT_DATE } from "@/data/media";
import { tools } from "@/data/tooling";

export const metadata: Metadata = {
  title: "Tooling | Santiago DevRel",
  description:
    "Developer tools Santiago Trujillo shipped at Arkiv: the Arkiv MCP, Agent Skills and plugin, the Ideathon MCP and npm packages, with their usage metrics.",
};

export default function ToolingPage() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">Tooling</h1>
      <p className="text-foreground/40 mb-6">
        Developer tools I built and shipped at Arkiv, with the numbers behind them.
      </p>

      <p className="flex gap-2 text-xs text-foreground/50 leading-relaxed rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 mb-4">
        <Info size={14} className="shrink-0 mt-0.5 text-[#FF6B35]/70" aria-hidden />
        <span>
          Screenshots come from the private telemetry dashboard I built for these tools and from GitHub traffic, captured{" "}
          {SNAPSHOT_DATE}. Counts are calls, not people, and include our own testing unless a number says otherwise.
        </span>
      </p>

      <nav aria-label="Tools on this page" className="flex flex-wrap gap-2 mb-4">
        {tools.map((tool) => (
          <a
            key={tool.id}
            href={`#${tool.id}`}
            className="text-xs px-3 py-1.5 rounded-full border border-white/[0.08] text-foreground/60 hover:text-[#FF6B35] hover:border-[#FF6B35]/40 transition-colors"
          >
            {tool.title}
          </a>
        ))}
      </nav>

      {tools.map((tool) => (
        <ToolSection key={tool.id} tool={tool} />
      ))}
    </div>
  );
}

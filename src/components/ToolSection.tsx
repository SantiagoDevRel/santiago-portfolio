// ToolSection — one developer tool on /tooling: what it is, its numbers, then videos and screenshots
import { ExternalLink } from "lucide-react";
import { Tool } from "@/data/tooling";
import AnimateIn from "@/components/AnimateIn";
import MediaGallery from "@/components/MediaGallery";
import StatGrid from "@/components/StatGrid";

export default function ToolSection({ tool }: { tool: Tool }) {
  return (
    <section id={tool.id} className="scroll-mt-24 py-12 border-t border-white/[0.06]">
      <AnimateIn>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FF6B35]/70">{tool.eyebrow}</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-2">{tool.title}</h2>
            <p className="text-sm text-foreground/60 leading-relaxed mt-4">{tool.summary}</p>

            <ul className="mt-6 space-y-3">
              {tool.points.map((p) => (
                <li key={p} className="text-sm text-foreground/55 leading-relaxed pl-4 border-l-2 border-[#FF6B35]/40">
                  {p}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-6">
              {tool.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[13px] font-medium text-[#FF6B35]/85 hover:text-[#FF6B35] hover:underline"
                >
                  {link.label}
                  <ExternalLink size={12} />
                </a>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <StatGrid stats={tool.stats} />
          </div>
        </div>
      </AnimateIn>

      {tool.media.length > 0 ? (
        <AnimateIn className="mt-10">
          <MediaGallery media={tool.media} />
        </AnimateIn>
      ) : null}
    </section>
  );
}

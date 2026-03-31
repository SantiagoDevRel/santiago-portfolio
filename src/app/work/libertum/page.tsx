// Work page — Libertum Project
import CompanyHero from "@/components/CompanyHero";
import HorizontalScroll from "@/components/HorizontalScroll";
import ProjectCard from "@/components/ProjectCard";
import { career } from "@/data/career";
import { projects } from "@/data/projects";

const entry = career.find((e) => e.id === "libertum")!;
const companyProjects = projects.filter((p) => p.company === "Libertum Project");

export default function LibertumPage() {
  return (
    <>
      <CompanyHero
        logoUrl="/images/events/libertum_logo.jpg"
        companyName="Libertum Project"
        flagCode="ae"
        role={entry.role}
        period={`${entry.period.start} – ${entry.period.end}`}
        description={entry.description}
        metrics={entry.metrics}
        websiteUrl={entry.companyUrl}
      />

      {entry.highlights && entry.highlights.length > 0 && (
        <section className="py-12 px-6 max-w-4xl mx-auto border-t border-white/[0.06]">
          <h2 className="text-xl font-bold tracking-tight mb-6">Highlights</h2>
          <ul className="space-y-3">
            {entry.highlights.map((h, i) => (
              <li key={i} className="text-sm text-foreground/45 flex gap-3">
                <span className="text-accent/60 shrink-0">—</span>
                {h}
              </li>
            ))}
          </ul>
        </section>
      )}

      {companyProjects.length > 0 && (
        <HorizontalScroll title="Projects and Code">
          {companyProjects.map((p) => (
            <div key={p.id} className="min-w-[320px] max-w-[320px] shrink-0">
              <ProjectCard project={p} />
            </div>
          ))}
        </HorizontalScroll>
      )}
    </>
  );
}

// Work page — Lisk / Onchain Foundation
import CompanyHero from "@/components/CompanyHero";
import HorizontalScroll from "@/components/HorizontalScroll";
import EventCard from "@/components/EventCard";
import EducationCard from "@/components/EducationCard";
import ProjectCard from "@/components/ProjectCard";
import { career } from "@/data/career";
import { events } from "@/data/events";
import { education } from "@/data/education";
import { projects } from "@/data/projects";

const entry = career.find((e) => e.id === "lisk")!;
const companyEvents = events.filter((e) => e.company === "Lisk");
const companyEducation = education.filter((e) => e.company === "Lisk");
const companyProjects = projects.filter((p) => p.company === "Lisk");

export default function LiskPage() {
  return (
    <>
      <CompanyHero
        logoUrl="/images/events/lisk_logo.jpg"
        companyName="Lisk / Onchain Foundation"
        flagCode="ch"
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

      {companyEvents.length > 0 && (
        <HorizontalScroll title="Events and Trips">
          {companyEvents.map((e) => (
            <div key={e.id} className="min-w-[320px] max-w-[320px] shrink-0">
              <EventCard event={e} />
            </div>
          ))}
        </HorizontalScroll>
      )}

      {companyEducation.length > 0 && (
        <HorizontalScroll title="Content and Education">
          {companyEducation.map((e) => (
            <div key={e.id} className="min-w-[320px] max-w-[320px] shrink-0">
              <EducationCard entry={e} />
            </div>
          ))}
        </HorizontalScroll>
      )}

      {companyProjects.length > 0 && (
        <section className="py-12 px-6 max-w-4xl mx-auto border-t border-white/[0.06]">
          <h2 className="text-xl font-bold tracking-tight mb-6">Projects</h2>
          <div className="space-y-6">
            {companyProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

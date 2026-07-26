// Work page — Arkiv (Golem Factory)
import CompanyPageLayout from "@/components/CompanyPageLayout";
import HorizontalScroll from "@/components/HorizontalScroll";
import EventCard from "@/components/EventCard";
import ProjectCard from "@/components/ProjectCard";
import { career } from "@/data/career";
import { events } from "@/data/events";
import { projects } from "@/data/projects";

const entry = career.find((e) => e.id === "golem-arkiv")!;
const companyEvents = events.filter((e) => e.company === "Arkiv (Golem Factory)");
const companyProjects = projects.filter(
  (p) => p.company === "Arkiv (Golem Factory)" || p.id === "surex-ethglobal-2026"
);

export default function ArkivPage() {
  return (
    <CompanyPageLayout entry={entry}>
      {companyProjects.length > 0 && (
        <section className="border-t border-white/[0.06] pt-12 mb-12">
          <HorizontalScroll title="Built at Arkiv">
            {companyProjects.map((p) => (
              <div key={p.id} className="min-w-[320px] max-w-[320px] shrink-0">
                <ProjectCard project={p} />
              </div>
            ))}
          </HorizontalScroll>
        </section>
      )}
      {companyEvents.length > 0 && (
        <section className="border-t border-white/[0.06] pt-12">
          <HorizontalScroll title="Events">
            {companyEvents.map((e) => (
              <div key={e.id} className="min-w-[320px] max-w-[320px] shrink-0">
                <EventCard event={e} />
              </div>
            ))}
          </HorizontalScroll>
        </section>
      )}
    </CompanyPageLayout>
  );
}

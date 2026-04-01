// Work page — Libertum Project
import CompanyPageLayout from "@/components/CompanyPageLayout";
import HorizontalScroll from "@/components/HorizontalScroll";
import ProjectCard from "@/components/ProjectCard";
import { career } from "@/data/career";
import { projects } from "@/data/projects";

const entry = career.find((e) => e.id === "libertum")!;
const companyProjects = projects.filter((p) => p.company === "Libertum Project");

export default function LibertumPage() {
  return (
    <CompanyPageLayout entry={entry}>
      {companyProjects.length > 0 && (
        <section className="border-t border-white/[0.06] pt-12">
          <HorizontalScroll title="Projects and Code">
            {companyProjects.map((p) => (
              <div key={p.id} className="min-w-[320px] max-w-[320px] shrink-0">
                <ProjectCard project={p} />
              </div>
            ))}
          </HorizontalScroll>
        </section>
      )}
    </CompanyPageLayout>
  );
}

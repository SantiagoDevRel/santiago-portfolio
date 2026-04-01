// Work page — Crimson Education
import CompanyPageLayout from "@/components/CompanyPageLayout";
import { career } from "@/data/career";

const entry = career.find((e) => e.id === "crimson-education-2021")!;

export default function CrimsonPage() {
  return (
    <CompanyPageLayout entry={entry}>
      {/* Guinness World Record special card */}
      <section className="mb-12 border-t border-white/[0.06] pt-12">
        <div
          onMouseEnter={() => window.dispatchEvent(new Event("spotlight:hide"))}
          onMouseLeave={() => window.dispatchEvent(new Event("spotlight:show"))}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md p-6">
          <h3 className="text-lg font-bold">Guinness World Record</h3>
          <p className="text-sm text-foreground/55 mt-2">
            65,959 sandwiches in one hour. Co-produced with student Joseph Yoffee (now at Brown University). 1,000+ volunteers, donated to low-income communities in South Africa. September 23, 2022.
          </p>
          <a
            href="https://www.guinnessworldrecords.com/world-records/most-sandwiches-made-in-one-hour"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-xs text-[#FF6B35]/70 hover:text-[#FF6B35] transition-colors"
          >
            Verified Guinness World Record →
          </a>
        </div>
      </section>

      <p className="text-sm text-foreground/30 italic text-center">
        This role predates my Web3 career but shaped how I think about community, education, and showing up for people.
      </p>
    </CompanyPageLayout>
  );
}

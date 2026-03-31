// Work page — Crimson Education
import CompanyHero from "@/components/CompanyHero";
import { career } from "@/data/career";

const entry = career.find((e) => e.id === "crimson-education-2021")!;

export default function CrimsonPage() {
  return (
    <>
      <CompanyHero
        logoUrl="/images/events/crimson_logo.jpg"
        companyName="Crimson Education"
        flagCode="us"
        role={entry.role}
        period={`${entry.period.start} – ${entry.period.end}`}
        description={entry.description}
        metrics={entry.metrics}
        websiteUrl={entry.companyUrl}
      />

      {/* Highlights */}
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

      {/* Guinness World Record */}
      <section className="py-12 px-6 max-w-4xl mx-auto border-t border-white/[0.06]">
        <h2 className="text-xl font-bold tracking-tight mb-6">Guinness World Record</h2>
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="text-lg font-bold">65,959 sandwiches in one hour</h3>
          <p className="text-sm text-foreground/55 mt-2">
            Co-produced with student Joseph Yoffee (now at Brown University). 1,000+ volunteers making sandwiches donated to low-income communities in South Africa. September 23, 2022.
          </p>
          <a
            href="https://www.guinnessworldrecords.com/world-records/most-sandwiches-made-in-one-hour"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-xs text-accent/70 hover:text-accent transition-colors"
          >
            Verified Guinness World Record →
          </a>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <p className="text-sm text-foreground/30 italic text-center">
          This role predates my Web3 career but shaped how I think about community, education, and showing up for people.
        </p>
      </section>
    </>
  );
}

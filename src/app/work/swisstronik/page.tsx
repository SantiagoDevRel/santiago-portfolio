// Work page — Swisstronik
import CompanyPageLayout from "@/components/CompanyPageLayout";
import HorizontalScroll from "@/components/HorizontalScroll";
import EventCard from "@/components/EventCard";
import EducationCard from "@/components/EducationCard";
import { career } from "@/data/career";
import { events } from "@/data/events";
import { education } from "@/data/education";

const entry = career.find((e) => e.id === "swisstronik")!;
const companyEvents = events.filter((e) => e.company === "Swisstronik");
const companyEducation = education.filter((e) => e.company === "Swisstronik");

export default function SwisstronikPage() {
  return (
    <CompanyPageLayout entry={entry}>
      {companyEvents.length > 0 && (
        <section className="border-t border-white/[0.06] pt-12 mb-12">
          <HorizontalScroll title="Events and Trips">
            {companyEvents.map((e) => (
              <div key={e.id} className="min-w-[320px] max-w-[320px] shrink-0">
                <EventCard event={e} />
              </div>
            ))}
          </HorizontalScroll>
        </section>
      )}
      {companyEducation.length > 0 && (
        <section className="border-t border-white/[0.06] pt-12">
          <HorizontalScroll title="Content and Education">
            {companyEducation.map((e) => (
              <div key={e.id} className="min-w-[320px] max-w-[320px] shrink-0">
                <EducationCard entry={e} />
              </div>
            ))}
          </HorizontalScroll>
        </section>
      )}
    </CompanyPageLayout>
  );
}

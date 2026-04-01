// Work page — Lisk / Onchain Foundation
import CompanyPageLayout from "@/components/CompanyPageLayout";
import HorizontalScroll from "@/components/HorizontalScroll";
import EventCard from "@/components/EventCard";
import { career } from "@/data/career";
import { events } from "@/data/events";

const entry = career.find((e) => e.id === "lisk")!;
const companyEvents = events.filter((e) => e.company === "Lisk");

export default function LiskPage() {
  return (
    <CompanyPageLayout entry={entry}>
      {companyEvents.length > 0 && (
        <section className="border-t border-white/[0.06] pt-12">
          <HorizontalScroll title="Events and Trips">
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

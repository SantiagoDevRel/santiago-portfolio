// Hackathons page — Arkiv hackathons I ran (featured with media), then earlier hackathons as event cards
import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import EventCard from "@/components/EventCard";
import HackathonFeature from "@/components/HackathonFeature";
import { events, MapEvent } from "@/data/events";
import { moreHackathonIds, ranHackathons } from "@/data/hackathons";

export const metadata: Metadata = {
  title: "Hackathons | Santiago DevRel",
  description:
    "Hackathons Santiago Trujillo designed, ran and judged at Arkiv, the Ideathon, ETHRome and the Devfolio Global Tour Stop, plus the ones he won.",
};

const eventsById = new Map(events.map((e) => [e.id, e]));

const ran = ranHackathons.flatMap((featured) => {
  const event = eventsById.get(featured.eventId);
  return event ? [{ event, featured }] : [];
});

const more = moreHackathonIds
  .map((id) => eventsById.get(id))
  .filter((e): e is MapEvent => Boolean(e));

export default function HackathonsPage() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">Hackathons</h1>
      <p className="text-foreground/40 mb-12">
        Hackathons I designed, ran and judged, and the ones I hacked.
      </p>

      <section>
        <AnimateIn>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Hackathons I ran</h2>
          <p className="text-sm text-foreground/40 mt-1 mb-8">
            Arkiv builder programs in 2026: rules, agent tooling, judging and the feedback loop to engineering.
          </p>
        </AnimateIn>
        <div className="flex flex-col gap-8">
          {ran.map(({ event, featured }) => (
            <AnimateIn key={event.id}>
              <HackathonFeature event={event} featured={featured} />
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="mt-16 pt-12 border-t border-white/[0.06]">
        <AnimateIn>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">More hackathons</h2>
          <p className="text-sm text-foreground/40 mt-1 mb-8">
            Hackathons I won, built at, or ran before Arkiv.
          </p>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {more.map((event, index) => (
            <AnimateIn key={event.id} delay={index * 0.1}>
              <EventCard event={event} />
            </AnimateIn>
          ))}
        </div>
      </section>
    </div>
  );
}

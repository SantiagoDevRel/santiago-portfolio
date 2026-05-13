// Leadership page — flagship programs, residencies, tours and conferences led end-to-end
"use client";

import { motion } from "framer-motion";
import EventCard from "@/components/EventCard";
import { events } from "@/data/events";

const leadershipIds = [
  "ethiopia-builders-residency-2025",
  "lisk-edge-city-patagonia-2025",
  "web3js-africa-tour-2024",
  "lisk-aleph-founders-track-2025",
  "lisk-africa-pitch-day-2025",
  "ayahq-lisk-roadshow-2025",
  "ebc-barcelona-2023",
];

const leadershipEvents = leadershipIds
  .map((id) => events.find((e) => e.id === id))
  .filter(Boolean) as typeof events;

export default function LeadershipPage() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">
        Leadership
      </h1>
      <p className="text-foreground/40 mb-12">
        Programs, residencies, tours, and conferences I&apos;ve led end to end.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {leadershipEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          >
            <EventCard event={event} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

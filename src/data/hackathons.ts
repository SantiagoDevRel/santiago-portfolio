// Hackathons page data — the Arkiv hackathons I ran (by event id, with media and dates) and earlier ones.
// Facts, metrics and links stay in events.ts; this file only adds what /hackathons shows on top.

import { Media, videos } from "@/data/media";

export interface FeaturedHackathon {
  eventId: string;
  // UTC timestamps that drive the Live / Judging / Closed badge on the client.
  window: { start: string; end: string; results?: string };
  media: Media[];
  // Section id on /tooling with the metrics of the tool built for this event.
  toolingId: string;
}

export const ranHackathons: FeaturedHackathon[] = [
  {
    eventId: "arkiv-devfolio-global-tour-stop-2026",
    window: {
      start: "2026-10-09T11:00:00Z",
      end: "2026-10-18T22:59:00Z",
      results: "2026-10-23T17:00:00Z",
    },
    media: [
      { kind: "photo", src: "/images/events/arkiv_devfolio_2026.jpg", alt: "Arkiv: Global Tour Stop on Devfolio, Oct 9 to 18, 2026, $5,000 USDC and 5 Devcon 8 tickets" },
      videos.devfolioConnect,
    ],
    toolingId: "arkiv-plugin",
  },
  {
    eventId: "ethrome-2026",
    window: { start: "2026-09-10T22:00:00Z", end: "2026-09-13T21:59:00Z" },
    media: [
      { kind: "photo", src: "/images/events/ethrome_2026_1.jpg", alt: "Arkiv team at the ETHRome 2026 booth", position: "center 22%" },
      { kind: "photo", src: "/images/events/ethrome_2026_2.jpg", alt: "At the Arkiv booth, ETHRome 2026", position: "center 30%" },
      { kind: "photo", src: "/images/events/ethrome_2026_3.jpg", alt: "Giving the Postgres to Arkiv workshop at ETHRome 2026", position: "center 40%" },
    ],
    toolingId: "arkiv-mcp",
  },
  {
    eventId: "arkiv-ideathon-2026",
    window: { start: "2026-08-03T00:00:00Z", end: "2026-08-31T23:59:00Z" },
    media: [videos.ideathonMcp],
    toolingId: "ideathon-mcp",
  },
];

// Hackathons I won, built at, or ran before Arkiv, shown as event cards.
export const moreHackathonIds = [
  "ethglobal-lisbon-2026",
  "lisk-aleph-founders-track-2025",
  "eth-tallinn-2024",
  "medellin-astar-hackathon-2023",
];

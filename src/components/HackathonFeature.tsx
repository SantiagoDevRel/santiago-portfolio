// HackathonFeature — one hackathon I ran: status, story, metrics, highlights, links and media side by side
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { MapEvent, linkLabel } from "@/data/events";
import { FeaturedHackathon } from "@/data/hackathons";
import HackathonStatus from "@/components/HackathonStatus";
import MediaGallery from "@/components/MediaGallery";
import StatGrid from "@/components/StatGrid";

interface HackathonFeatureProps {
  event: MapEvent;
  featured: FeaturedHackathon;
}

export default function HackathonFeature({ event, featured }: HackathonFeatureProps) {
  const links = Object.entries(event.links ?? {}).filter((entry): entry is [string, string] => Boolean(entry[1]));
  const place = event.city === "Online" ? "Online" : `${event.city}, ${event.country}`;

  return (
    <article
      id={event.id}
      className="scroll-mt-24 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md p-6 md:p-8 grid gap-8 lg:grid-cols-2 lg:gap-10"
    >
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <HackathonStatus {...featured.window} />
          <span className="text-xs text-foreground/45">
            {event.date} · {place}
          </span>
        </div>

        <h3 className="text-2xl font-bold tracking-tight mt-3">{event.title}</h3>
        <p className="text-sm text-foreground/45 mt-1">
          {event.role}
          {event.subtitle ? ` · ${event.subtitle}` : ""}
        </p>

        <p className="text-sm text-foreground/60 leading-relaxed mt-4">{event.description}</p>

        {event.metrics && event.metrics.length > 0 ? (
          <div className="mt-6">
            <StatGrid stats={event.metrics} />
          </div>
        ) : null}

        {event.highlights && event.highlights.length > 0 ? (
          <ul className="mt-6 space-y-3">
            {event.highlights.map((h) => (
              <li key={h} className="text-sm text-foreground/55 leading-relaxed pl-4 border-l-2 border-[#FF6B35]/40">
                {h}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6 pt-4 border-t border-white/[0.06]">
          {links.map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[13px] font-medium text-[#FF6B35]/85 hover:text-[#FF6B35] hover:underline"
            >
              {linkLabel(key)}
              <ExternalLink size={12} />
            </a>
          ))}
          <Link
            href={`/tooling#${featured.toolingId}`}
            className="text-[13px] font-medium text-[#FF6B35]/85 hover:text-[#FF6B35] hover:underline sm:ml-auto"
          >
            Tool metrics →
          </Link>
        </div>
      </div>

      <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
        <MediaGallery media={featured.media} />
      </div>
    </article>
  );
}

// Home page — Hero, Map, Stats, CareerTimeline, Content, Events, Built
import Hero from "@/components/Hero";
import CareerTimeline from "@/components/CareerTimeline";
import WorldMap from "@/components/WorldMap";
import EducationCard from "@/components/EducationCard";
import EventCard from "@/components/EventCard";
import ProjectCard from "@/components/ProjectCard";
import HomeCarousel from "@/components/HomeCarousel";
import { education } from "@/data/education";
import { events } from "@/data/events";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Home() {
  const featuredEducation = education.filter((e) => e.featured).slice(0, 6);

  return (
    <>
      <Hero />

      {/* Stats bar */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="flex justify-center gap-8 md:gap-16 flex-wrap">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF6B35] to-[#00C853] bg-clip-text text-transparent">20+</div>
            <div className="text-xs text-foreground/40 mt-1">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF6B35] to-[#00C853] bg-clip-text text-transparent">30+</div>
            <div className="text-xs text-foreground/40 mt-1">Web3 Events</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF6B35] to-[#00C853] bg-clip-text text-transparent">1,000+</div>
            <div className="text-xs text-foreground/40 mt-1">Developers</div>
          </div>
        </div>
      </section>

      <WorldMap />
      <CareerTimeline />

      {/* Content preview */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Content
            </h2>
            <p className="text-sm text-foreground/40 mt-1">
              Videos, tutorials, and developer resources
            </p>
          </div>
          <Link
            href="/content"
            className="text-sm text-foreground/40 hover:text-accent transition-colors duration-200"
          >
            See all →
          </Link>
        </div>
        <HomeCarousel>
          {featuredEducation.map((entry) => (
            <div key={entry.id} className="min-w-[300px] max-w-[300px] shrink-0">
              <EducationCard entry={entry} />
            </div>
          ))}
        </HomeCarousel>
      </section>

      {/* Events preview */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Events
            </h2>
            <p className="text-sm text-foreground/40 mt-1">
              Workshops, talks, and conferences
            </p>
          </div>
          <Link
            href="/on-the-ground"
            className="text-sm text-foreground/40 hover:text-accent transition-colors duration-200"
          >
            See all →
          </Link>
        </div>
        <HomeCarousel>
          {events.slice(0, 8).map((event) => (
            <div key={event.id} className="min-w-[300px] max-w-[300px] shrink-0">
              <EventCard event={event} />
            </div>
          ))}
        </HomeCarousel>
      </section>

      {/* Built preview */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Built
            </h2>
            <p className="text-sm text-foreground/40 mt-1">
              Apps, contracts, and tools
            </p>
          </div>
          <Link
            href="/built"
            className="text-sm text-foreground/40 hover:text-accent transition-colors duration-200"
          >
            See all →
          </Link>
        </div>
        <HomeCarousel>
          {projects.slice(0, 6).map((project) => (
            <div key={project.id} className="min-w-[300px] max-w-[300px] shrink-0">
              <ProjectCard project={project} />
            </div>
          ))}
        </HomeCarousel>
      </section>
    </>
  );
}

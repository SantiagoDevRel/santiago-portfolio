// Home page — Hero → CareerTimeline → Map → Education preview → Events preview → Projects preview
import Hero from "@/components/Hero";
import CareerTimeline from "@/components/CareerTimeline";
import WorldMap from "@/components/WorldMap";
import EducationCard from "@/components/EducationCard";
import EventCard from "@/components/EventCard";
import ProjectCard from "@/components/ProjectCard";
import { education } from "@/data/education";
import { events } from "@/data/events";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Home() {
  const featuredEducation = education.filter((e) => e.featured).slice(0, 3);

  return (
    <>
      <Hero />
      <CareerTimeline />
      <WorldMap />

      {/* Education preview */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredEducation.map((entry) => (
            <EducationCard key={entry.id} entry={entry} />
          ))}
        </div>
      </section>

      {/* Events preview */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Projects preview */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}

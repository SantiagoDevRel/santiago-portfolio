// Home page — Hero, Map, Stats, CareerTimeline, Content, Events, Built
import Hero from "@/components/Hero";
import CareerTimeline from "@/components/CareerTimeline";
import WorldMap from "@/components/WorldMap";
import EducationCard from "@/components/EducationCard";
import EventCard from "@/components/EventCard";
import ProjectCard from "@/components/ProjectCard";
import HomeCarousel from "@/components/HomeCarousel";
import AnimateIn from "@/components/AnimateIn";
import StatCounter from "@/components/StatCounter";
import { education } from "@/data/education";
import { events } from "@/data/events";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Home() {
  // Manual content order for homepage
  const contentIds = [
    "web3js-video-series-2024",
    "swisstronik-deploy-erc20-video",
    "chainsafe-hackathon-track-2024",
    "dezentralized-voices-interview-2024",
    "swisstronik-dev-survey-2023",
    "ech-ecosystem-demo-2024",
  ];
  const featuredEducation = contentIds
    .map((id) => education.find((e) => e.id === id))
    .filter(Boolean) as typeof education;

  // Manual event order for homepage
  const eventIds = [
    "lisk-edge-city-patagonia-2025",
    "lisk-africa-tour-2025",
    "ethiopia-builders-residency-2025",
    "ayahq-lisk-roadshow-2025",
    "empower-devcon-buenos-aires-2025",
    "lisk-aleph-founders-track-2025",
  ];
  const recentEvents = eventIds
    .map((id) => events.find((e) => e.id === id))
    .filter(Boolean) as typeof events;

  const recentProjects = [...projects].reverse().slice(0, 6);

  return (
    <>
      <Hero />

      {/* Stats bar */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="flex justify-center gap-8 md:gap-16 flex-wrap">
          <StatCounter value={20} label="Countries" delay={0} />
          <StatCounter value={30} label="Events" delay={0.15} />
          <StatCounter value={1000} label="Developers" delay={0.3} useComma />
        </div>
      </section>

      <AnimateIn>
        <WorldMap />
      </AnimateIn>

      <AnimateIn>
        <CareerTimeline />
      </AnimateIn>

      {/* Content preview */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
        <AnimateIn>
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
              className="text-sm text-foreground/40 hover:text-[#FF6B35] transition-colors duration-200"
            >
              See all →
            </Link>
          </div>
        </AnimateIn>
        <HomeCarousel>
          {featuredEducation.map((entry, index) => (
            <AnimateIn key={entry.id} delay={index * 0.1} className="min-w-[300px] max-w-[300px] shrink-0">
              <EducationCard entry={entry} />
            </AnimateIn>
          ))}
        </HomeCarousel>
      </section>

      {/* Events preview */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
        <AnimateIn>
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
              className="text-sm text-foreground/40 hover:text-[#FF6B35] transition-colors duration-200"
            >
              See all →
            </Link>
          </div>
        </AnimateIn>
        <HomeCarousel>
          {recentEvents.map((event, index) => (
            <AnimateIn key={event.id} delay={index * 0.1} className="min-w-[300px] max-w-[300px] shrink-0">
              <EventCard event={event} />
            </AnimateIn>
          ))}
        </HomeCarousel>
      </section>

      {/* Built preview */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
        <AnimateIn>
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
              className="text-sm text-foreground/40 hover:text-[#FF6B35] transition-colors duration-200"
            >
              See all →
            </Link>
          </div>
        </AnimateIn>
        <HomeCarousel>
          {recentProjects.map((project, index) => (
            <AnimateIn key={project.id} delay={index * 0.1} className="min-w-[300px] max-w-[300px] shrink-0">
              <ProjectCard project={project} />
            </AnimateIn>
          ))}
        </HomeCarousel>
      </section>
    </>
  );
}

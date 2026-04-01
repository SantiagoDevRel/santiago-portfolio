"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const items = [
  {
    year: "2019",
    tagline: "8 months volunteering in Africa, then a one-way ticket to Europe",
    desc: "Left Colombia with no plan, just hunger. Spent months on the ground in Africa, then landed in Europe with nothing but energy and ambition.",
    tag: "Life pivot",
    tagColor: "orange" as const,
    photo: "/images/story/2019.jpg",
    future: false,
  },
  {
    year: "2020",
    tagline: "Tuktuk driver. House cleaner. Dishwasher. All of the above.",
    desc: "Drove a tuktuk in Portugal to survive, cleaned houses, washed dishes in the Netherlands. No ego. Just adaptation and gratitude for every euro earned.",
    tag: "Survival mode",
    tagColor: "orange" as const,
    photo: "/images/story/2020.jpg",
    future: false,
  },
  {
    year: "2021",
    tagline: "$5K loan. One idea. Built a drone business from scratch and sold it.",
    desc: "Founded MyFPVWorld with a $5K loan. Learned to build and fly drones, ran branding, logistics, and sales solo. Grew to top 5 FPV stores in Europe, 12K+ community, $20K/month. Still alive today.",
    tag: "First company",
    tagColor: "blue" as const,
    photo: "/images/story/2021.jpg",
    future: false,
  },
  {
    year: "2022",
    tagline: "Waiter by day. Self-taught developer by night.",
    desc: "Locked in. Learned HTML, CSS, JavaScript, and Solidity while working tables. No bootcamp, no shortcuts. Just screen time and stubbornness.",
    tag: "Self-taught",
    tagColor: "green" as const,
    photo: "/images/story/2022.jpg",
    future: false,
  },
  {
    year: "2023",
    tagline: "First business trips. First developer communities. Web3 DevRel begins.",
    desc: "Joined Swisstronik as first DevRel hire. Traveled to 10 conferences, built a community from 0 to 2K+, launched a $70K bug bounty. The career officially started.",
    tag: "DevRel begins",
    tagColor: "blue" as const,
    photo: "/images/story/2023.jpg",
    future: false,
  },
  {
    year: "2024",
    tagline: "Most chaotic year. First talks in English. First time truly out of my comfort zone.",
    desc: "Traveled relentlessly. Gave first technical talks on stage in English, ran workshops across 4 African countries. Uncomfortable every week. Grew the most in my life.",
    tag: "Breakthrough year",
    tagColor: "blue" as const,
    photo: "/images/story/2024.jpg",
    future: false,
  },
  {
    year: "2025",
    tagline: "Dream year. Africa, LATAM, Europe. Doing exactly what I was built for.",
    desc: "Led 2 founder residencies, 7-country Africa tour, EFDevcon Buenos Aires. Every day: supporting developers and founders with advice, intros, technical help, and genuine presence.",
    tag: "Peak DevRel",
    tagColor: "blue" as const,
    photo: "/images/story/2025.jpg",
    future: false,
  },
  {
    year: "2026",
    tagline: "Dream year #2. Now with AI in the toolkit.",
    desc: "Same mission, sharper tools. Building at the intersection of Web3 and AI, learning fast, and writing the next chapter in real time.",
    tag: "In progress",
    tagColor: "green" as const,
    photo: "/images/story/2026.jpg",
    future: true,
  },
];

// ---------------------------------------------------------------------------
// Tag pill colors
// ---------------------------------------------------------------------------

const tagStyles = {
  orange: {
    background: "rgba(255,107,53,0.1)",
    color: "#FF6B35",
    border: "0.5px solid rgba(255,107,53,0.25)",
  },
  blue: {
    background: "rgba(59,130,246,0.1)",
    color: "#60a5fa",
    border: "0.5px solid rgba(59,130,246,0.2)",
  },
  green: {
    background: "rgba(16,185,129,0.1)",
    color: "#34d399",
    border: "0.5px solid rgba(16,185,129,0.2)",
  },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function StoryTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    dragState.current = { startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const el = scrollRef.current;
      if (!el) return;
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = dragState.current.scrollLeft - (x - dragState.current.startX);
    },
    [isDragging],
  );

  const onMouseUp = useCallback(() => setIsDragging(false), []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#FF6B35]">
          THE JOURNEY
        </span>
        <span className="hidden sm:flex items-center gap-1 text-[12px] text-foreground/40">
          Drag or swipe to scroll
          <ChevronRight size={14} className="text-foreground/30" />
        </span>
      </div>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: isDragging ? "grabbing" : "grab",
          WebkitOverflowScrolling: "touch",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {/* Hide scrollbar for Webkit */}
        <style>{`
          .story-scroll::-webkit-scrollbar { display: none; }
        `}</style>

        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          const ts = tagStyles[item.tagColor];

          return (
            <div
              key={item.year}
              className="story-scroll flex-shrink-0 flex flex-col"
              style={{
                flex: "0 0 280px",
                scrollSnapAlign: "start",
                userSelect: isDragging ? "none" : "auto",
              }}
            >
              {/* Connector row: dot + line */}
              <div className="flex items-center mb-3">
                <span
                  className="inline-block w-3 h-3 rounded-full flex-shrink-0"
                  style={
                    item.future
                      ? {
                          background: "transparent",
                          border: "2px solid #FF6B35",
                        }
                      : { background: "#FF6B35" }
                  }
                />
                {!isLast && (
                  <span
                    className="flex-1 h-[1.5px] ml-1"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(255,107,53,0.5), rgba(255,107,53,0.15))",
                    }}
                  />
                )}
              </div>

              {/* Year */}
              <span
                className="text-[22px] font-medium mb-2"
                style={{ color: item.future ? "rgba(255,107,53,0.45)" : "#FF6B35" }}
              >
                {item.year}
              </span>

              {/* Photo */}
              <div
                className="relative w-full h-[160px] rounded-[10px] overflow-hidden mb-3"
                style={
                  item.future
                    ? {
                        opacity: 0.5,
                        border: "1.5px dashed rgba(255,107,53,0.35)",
                      }
                    : undefined
                }
              >
                <Image
                  src={item.photo}
                  alt={`${item.year} — ${item.tagline}`}
                  fill
                  className="object-cover"
                  sizes="280px"
                  draggable={false}
                  style={{
                    ...(item.year === "2022" ? { objectPosition: "center top" } : {}),
                    ...(item.year === "2026" ? { transform: "scale(1.2)" } : {}),
                  }}
                />
              </div>

              {/* Tagline */}
              <p className="text-[13px] font-medium text-foreground leading-[1.35] mb-1.5">
                {item.tagline}
              </p>

              {/* Description */}
              <p className="text-[12px] text-foreground/50 leading-[1.55] mb-3">
                {item.desc}
              </p>

              {/* Tag pill */}
              <span
                className="inline-block self-start rounded-full px-2.5 py-[3px] text-[10px] font-medium"
                style={ts}
              >
                {item.tag}
              </span>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}

// CompanyPageLayout — reusable layout for /work/[company] pages
// Section order: Hero, Metrics carousel, Bullets, Partners, Children (events/education/projects), Photos
"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { CareerEntry } from "@/data/career";
import { FlagImage } from "@/components/FlagImage";

const companyFlags: Record<string, string> = {
  "Crimson Education": "us",
  "Libertum Project": "ae",
  Swisstronik: "ch",
  "ChainSafe – Web3.js": "ca",
  "Lisk / Onchain Foundation": "ch",
};

const companyLogos: Record<string, string> = {
  "Crimson Education": "/images/events/crimson_logo.jpg",
  "Libertum Project": "/images/events/libertum_logo.jpg",
  Swisstronik: "/images/events/swisstronik_logo.jpg",
  "ChainSafe – Web3.js": "/images/events/chainsafe_logo.jpg",
  "Lisk / Onchain Foundation": "/images/events/lisk_logo.jpg",
};

interface CompanyPageLayoutProps {
  entry: CareerEntry;
  children?: React.ReactNode;
}

export default function CompanyPageLayout({
  entry,
  children,
}: CompanyPageLayoutProps) {
  const flagCode = companyFlags[entry.company] ?? "";
  const logoUrl = companyLogos[entry.company] ?? "";

  return (
    <div className="pt-28 pb-20 px-6 max-w-4xl mx-auto">
      {/* 1. Hero */}
      <div className="flex items-center gap-5 mb-8">
        {logoUrl && (
          <div className="w-24 h-24 rounded-[12px] bg-[#1a1a1a] border border-white/[0.08] p-0.5 overflow-hidden shrink-0">
            <Image
              src={logoUrl}
              alt={entry.company}
              width={96}
              height={96}
              className="object-cover object-center rounded-[10px] w-full h-full"
            />
          </div>
        )}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-3">
            {entry.company}
            {flagCode && <FlagImage code={flagCode} size={28} />}
          </h1>
          <p className="text-foreground/45 mt-1">
            {entry.role} · {entry.period.start} – {entry.period.end}
          </p>
        </div>
      </div>

      <p className="text-sm text-foreground/55 leading-relaxed mb-4">
        {entry.description}
      </p>

      <a
        href={entry.companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-foreground/35 hover:text-accent transition-colors duration-200 mb-12 inline-block"
      >
        Visit website →
      </a>

      {/* 2. Metrics carousel */}
      {entry.metrics.length > 0 && <MetricsCarousel metrics={entry.metrics} />}

      {/* 3. Bullets */}
      {entry.bullets && entry.bullets.length > 0 && (
        <section className="mb-12">
          <h2 className="text-[11px] font-semibold uppercase tracking-widest text-[#FFD700]/70 mb-5">
            Responsibilities & Impact
          </h2>
          <ul className="space-y-3">
            {entry.bullets.map((b, i) => (
              <li
                key={i}
                className="text-sm text-foreground/55 leading-relaxed pl-4 border-l-2 border-[#FFD700]/40"
              >
                {b}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 4. Partners */}
      {entry.partners && entry.partners.length > 0 && (
        <section className="mb-12">
          <h2 className="text-[11px] font-semibold uppercase tracking-widest text-[#FFD700]/70 mb-4">
            Ecosystem Partners
          </h2>
          <div className="flex flex-wrap gap-2">
            {entry.partners.map((p) => (
              <span
                key={p}
                className="text-xs px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-[#FFD700]/30 text-[#FFD700]"
              >
                {p}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* 5. Children (events, education, projects horizontal scrolls) */}
      {children}

      {/* 6. Photos (always last) */}
      {entry.photos && entry.photos.length > 0 && (
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {entry.photos.slice(0, 3).map((photo) => (
              <PhotoCard key={photo.filename} photo={photo} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function MetricsCarousel({
  metrics,
}: {
  metrics: { label: string; value: string }[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", containScroll: "trimSnaps", dragFree: true },
    [WheelGesturesPlugin()]
  );

  const scrollPrev = useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi]
  );

  return (
    <section className="mb-12 relative group">
      {/* Left arrow */}
      <button
        onClick={scrollPrev}
        className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00ff88"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-3">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="shrink-0 rounded-xl bg-[#111] border border-accent/20 px-5 py-4 min-w-[160px]"
            >
              <div className="text-xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF6B35] to-[#00C853] bg-clip-text text-transparent">{m.value}</div>
              <div className="text-xs text-foreground/40 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right arrow */}
      <button
        onClick={scrollNext}
        className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00ff88"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </section>
  );
}

function PhotoCard({
  photo,
}: {
  photo: { filename: string; alt: string; date?: string };
}) {
  const [error, setError] = useState(false);
  const src = `/images/companies/${photo.filename}`;

  if (error) {
    return (
      <div className="rounded-xl bg-[#111] border border-white/[0.06] flex flex-col items-center justify-center h-[200px]">
        <svg
          className="w-8 h-8 text-[#444]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
          />
        </svg>
        <span className="text-xs text-[#555] mt-2">Photo coming soon</span>
      </div>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.06]">
      <div className="relative h-[200px]">
        <Image
          src={src}
          alt={photo.alt}
          fill
          className="object-cover"
          onError={() => setError(true)}
        />
      </div>
    </div>
  );
}

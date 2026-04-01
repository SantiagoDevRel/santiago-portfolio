// HomeCarousel — Embla carousel wrapper for homepage preview sections
"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

interface HomeCarouselProps {
  children: React.ReactNode;
}

export default function HomeCarousel({ children }: HomeCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", containScroll: "trimSnaps", dragFree: true },
    [WheelGesturesPlugin()]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative group">
      {/* Left arrow */}
      <button
        onClick={scrollPrev}
        className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-5 items-stretch">
          {children}
        </div>
      </div>

      {/* Right arrow */}
      <button
        onClick={scrollNext}
        className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}

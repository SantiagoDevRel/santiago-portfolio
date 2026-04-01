// HorizontalScroll — reusable Embla carousel row for cards with arrow navigation and trackpad swipe
"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

interface HorizontalScrollProps {
  title: string;
  children: React.ReactNode;
}

export default function HorizontalScroll({ title, children }: HorizontalScrollProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", containScroll: "trimSnaps", dragFree: true },
    [WheelGesturesPlugin()]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold tracking-tight">{title}</h2>
        <div className="hidden md:flex gap-2">
          <button
            onClick={scrollPrev}
            className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center hover:border-white/20 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center hover:border-white/20 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-5">
          {children}
        </div>
      </div>
    </section>
  );
}

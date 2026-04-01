"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { testimonials, Testimonial } from "@/data/testimonials";
import { ModalPortal } from "@/components/ui/ModalPortal";
import { useModalLock } from "@/hooks/useModalLock";

function Avatar({ t, size = 40 }: { t: Testimonial; size?: number }) {
  const [imgError, setImgError] = useState(false);
  const initials = t.name.split(" ").map((w) => w[0]).join("").slice(0, 2);

  if (imgError) {
    return (
      <div
        className="rounded-full bg-[#1a1a1a] border border-white/[0.08] flex items-center justify-center shrink-0"
        style={{ width: size, height: size }}
      >
        <span className="text-sm font-bold text-[#FF6B35]">{initials}</span>
      </div>
    );
  }

  return (
    <Image
      src={t.photo}
      alt={t.name}
      width={size}
      height={size}
      className="rounded-full object-cover shrink-0"
      style={{ width: size, height: size }}
      onError={() => setImgError(true)}
    />
  );
}

function TestimonialCard({
  t,
  index,
  onSeeMore,
}: {
  t: Testimonial;
  index: number;
  onSeeMore: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="flex-[0_0_85%] min-w-0 md:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(33.333%-14px)] overflow-hidden"
    >
      <div
        onMouseEnter={() => window.dispatchEvent(new Event("spotlight:hide"))}
        onMouseLeave={() => window.dispatchEvent(new Event("spotlight:show"))}
        className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md p-6 h-full flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 hover:border-orange-500/20 overflow-hidden"
      >
        <span className="text-[48px] leading-none text-[#FF6B35] font-serif select-none">&ldquo;</span>

        <p className="text-[15px] leading-[1.7] text-foreground/90 italic mt-1 mb-2 line-clamp-4">
          {t.text}
        </p>
        <button
          onClick={onSeeMore}
          className="text-xs text-[#FF6B35]/70 hover:text-[#FF6B35] transition-colors mb-4 self-start"
        >
          See more
        </button>

        <div className="border-t border-white/[0.08] pt-4 mt-auto">
          <div className="flex items-start gap-3">
            <Avatar t={t} />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-foreground/40 mt-0.5">
                    {t.title}, {t.company}
                  </p>
                </div>
                <span className="text-[11px] text-foreground/25 shrink-0 mt-0.5">
                  {t.date}
                </span>
              </div>
              <p className="text-[11px] text-foreground/25 mt-0.5">
                {t.relationship}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TestimonialModal({
  t,
  onClose,
}: {
  t: Testimonial;
  onClose: () => void;
}) {
  useModalLock(onClose);

  return (
    <ModalPortal>
    <motion.div
      className="fixed top-0 left-0 right-0 bottom-0 z-[9999] flex items-end sm:items-center justify-center sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/85 backdrop-blur-sm" />
      <motion.div
        className="relative max-w-[560px] w-full rounded-t-2xl sm:rounded-2xl border border-white/[0.08] bg-[#141414] p-8 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
        style={{ WebkitOverflowScrolling: "touch" }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:text-[#FF6B35] hover:bg-white/20 transition-colors"
        >
          <X size={18} />
        </button>

        <span className="text-[48px] leading-none text-[#FF6B35] font-serif select-none">&ldquo;</span>
        <p className="text-[15px] leading-[1.7] text-foreground/90 italic mt-1 mb-6">
          {t.text}
        </p>

        <div className="border-t border-white/[0.08] pt-4">
          <div className="flex items-start gap-3">
            <Avatar t={t} />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-foreground/40 mt-0.5">
                    {t.title}, {t.company}
                  </p>
                </div>
                <span className="text-[11px] text-foreground/25 shrink-0 mt-0.5">
                  {t.date}
                </span>
              </div>
              <p className="text-[11px] text-foreground/25 mt-0.5">
                {t.relationship}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
    </ModalPortal>
  );
}

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", containScroll: "trimSnaps", dragFree: true },
    [WheelGesturesPlugin()]
  );
  const [modalTestimonial, setModalTestimonial] = useState<Testimonial | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-10"
      >
        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FF6B35]/70 mb-2">
          What Others Say
        </p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Testimonials
        </h2>
      </motion.div>

      <div className="relative group">
        <button
          onClick={scrollPrev}
          className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
          <div className="flex gap-5">
            {testimonials.map((t, index) => (
              <TestimonialCard
                key={t.id}
                t={t}
                index={index}
                onSeeMore={() => setModalTestimonial(t)}
              />
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext}
          className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="https://www.linkedin.com/in/santiagodevrel/details/recommendations"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-[#FF6B35]/70 hover:text-[#FF6B35] transition-colors"
        >
          View all recommendations
          <ExternalLink size={14} />
        </a>
      </div>

      <AnimatePresence>
        {modalTestimonial && (
          <TestimonialModal
            t={modalTestimonial}
            onClose={() => setModalTestimonial(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

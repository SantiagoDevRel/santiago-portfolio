"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
  useComma?: boolean;
}

export default function StatCounter({ value, suffix = "+", label, delay = 0, useComma = false }: StatCounterProps) {
  const numRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showSuffix, setShowSuffix] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const obj = { val: 0 };
          gsap.to(obj, {
            val: value,
            duration: 1.2,
            delay,
            ease: "power2.out",
            onUpdate: () => {
              if (numRef.current) {
                const rounded = Math.round(obj.val);
                numRef.current.textContent = useComma
                  ? rounded.toLocaleString()
                  : String(rounded);
              }
            },
            onComplete: () => {
              setShowSuffix(true);
            },
          });

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, delay, hasAnimated, useComma]);

  return (
    <div ref={containerRef} className="text-center">
      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#C8400A] bg-clip-text text-transparent">
        <span ref={numRef}>0</span>
        <span className={`inline-block transition-none ${showSuffix ? "animate-[bounceIn_0.4s_ease-out]" : "invisible"}`}>{suffix}</span>
      </div>
      <div className="text-xs text-foreground/40 mt-1">{label}</div>
    </div>
  );
}

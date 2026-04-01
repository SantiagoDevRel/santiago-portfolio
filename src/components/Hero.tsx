// Hero — landing section with name and subtitle, compact to show map without scrolling
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-24 pb-2 flex flex-col items-center text-center px-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-[126px] h-[126px] md:w-[166px] md:h-[166px]"
        >
          <span className="absolute inset-0 rounded-full animate-[pulse-subtle_2s_ease-in-out_infinite]" style={{ background: "rgba(255, 107, 53, 0.2)", filter: "blur(40px)" }} />
          <span className="absolute -inset-2 rounded-full animate-[spin-slow_3s_linear_infinite]" style={{ border: "2px solid transparent", borderTopColor: "rgba(255, 107, 53, 0.6)", borderRightColor: "rgba(255, 107, 53, 0.3)" }} />
          <Image
            src="/images/profile/linkedin_photo.jpg"
            alt="Santiago Trujillo"
            width={160}
            height={160}
            className="relative w-full h-full rounded-full object-cover"
            style={{ border: "4px solid rgba(255, 107, 53, 0.4)", boxShadow: "0 0 30px rgba(255, 107, 53, 0.25)" }}
            priority
          />
        </motion.div>

        <div>
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-gradient-to-r from-[#FF6B35] to-[#C8400A] bg-clip-text text-transparent pb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            SantiagoDevRel
          </motion.h1>

          <motion.p
            className="mt-3 text-base md:text-lg text-foreground/70 max-w-lg tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Web3 + AI Developer Advocate in Emerging Markets
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 0.8 }, y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/20">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}

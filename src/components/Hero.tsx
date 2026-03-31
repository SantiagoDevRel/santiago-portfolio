// Hero — landing section with name and subtitle, compact to show map without scrolling
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-24 pb-2 flex flex-col items-center text-center px-6">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        SantiagoDevRel
      </motion.h1>

      <motion.p
        className="mt-3 text-base md:text-lg text-foreground/45 max-w-lg tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Developer Advocate · Web3 + AI · Emerging Markets
      </motion.p>
    </section>
  );
}

// Navbar — Companies (dropdown) | On The Ground | Content | Built | About
// Mobile: hamburger menu with full-screen drawer
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FlagImage } from "@/components/FlagImage";

const navLinks = [
  { href: "/on-the-ground", label: "On The Ground" },
  { href: "/content", label: "Content" },
  { href: "/built", label: "Built" },
  { href: "/about", label: "About" },
];

const workDropdown = [
  { href: "/work/crimson", label: "Crimson Education", flagCode: "us", logo: "/images/events/crimson_logo.jpg" },
  { href: "/work/libertum", label: "Libertum Project", flagCode: "ae", logo: "/images/events/libertum_logo.jpg" },
  { href: "/work/swisstronik", label: "Swisstronik", flagCode: "ch", logo: "/images/events/swisstronik_logo.jpg" },
  { href: "/work/chainsafe", label: "ChainSafe Systems", flagCode: "ca", logo: "/images/events/chainsafe_logo.jpg" },
  { href: "/work/lisk", label: "Lisk / Onchain Foundation", flagCode: "ch", logo: "/images/events/lisk_logo.jpg" },
];

const socialLinks = [
  { href: "https://linkedin.com/in/santiagotrujillozuluaga", label: "LinkedIn", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { href: "https://github.com/SantiagoDevRel", label: "GitHub", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> },
  { href: "https://x.com/SantiagoDevRel", label: "X", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { href: "https://instagram.com/santiagotrujilloz", label: "Instagram", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [workOpen, setWorkOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setWorkOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileWorkOpen(false);
  }, [pathname]);

  const isWorkActive = pathname.startsWith("/work");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-[#FF6B35] font-bold text-lg">
            ST
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex gap-6 items-center">
            {/* Work dropdown */}
            <li
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setWorkOpen(true)}
              onMouseLeave={() => setWorkOpen(false)}
            >
              <button
                onClick={() => setWorkOpen((prev) => !prev)}
                className={`text-sm transition-colors hover:text-[#FF6B35] flex items-center gap-1 ${
                  isWorkActive ? "bg-gradient-to-r from-[#FF6B35] to-[#C8400A] bg-clip-text text-transparent" : "text-foreground/70"
                }`}
              >
                Companies
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${workOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {workOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 min-w-[260px]">
                  <div className="rounded-lg border border-white/10 bg-[#111] p-2 shadow-xl">
                    {workDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors hover:bg-white/5 ${
                          pathname === item.href ? "bg-gradient-to-r from-[#FF6B35] to-[#C8400A] bg-clip-text text-transparent" : "text-foreground/70"
                        }`}
                        onClick={() => setWorkOpen(false)}
                      >
                        <div className="w-7 h-7 rounded-[6px] bg-[#1a1a1a] border border-white/[0.08] p-0.5 flex items-center justify-center overflow-hidden flex-shrink-0">
                          <Image
                            src={item.logo}
                            alt={item.label}
                            width={24}
                            height={24}
                            className="object-cover object-center rounded-[4px]"
                          />
                        </div>
                        <span>{item.label}</span>
                        <FlagImage code={item.flagCode} size={14} />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* Remaining nav links */}
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition-colors hover:text-[#FF6B35] ${
                    pathname === link.href ? "bg-gradient-to-r from-[#FF6B35] to-[#C8400A] bg-clip-text text-transparent" : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop social icons */}
        <div className="hidden md:flex items-center gap-4">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-[#FF6B35] transition-colors">
              {s.icon}
            </a>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-foreground/70 hover:text-[#FF6B35] transition-colors"
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed top-0 left-0 w-screen h-screen z-[9999] md:hidden bg-[#0a0a0a] overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Content */}
            <motion.div
              className="flex flex-col min-h-full px-8 pt-6 pb-10"
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 60, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Close button */}
              <div className="flex justify-between items-center mb-12">
                <Link href="/" className="text-[#FF6B35] font-bold text-lg">
                  ST
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center text-foreground/70 hover:text-[#FF6B35] transition-colors"
                  aria-label="Close menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <div className="flex flex-col gap-2 flex-1">
                {/* Companies accordion */}
                <button
                  onClick={() => setMobileWorkOpen((prev) => !prev)}
                  className={`flex items-center justify-between text-2xl font-semibold py-3 transition-colors ${
                    isWorkActive ? "text-[#FF6B35]" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  Companies
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${mobileWorkOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {mobileWorkOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-1 pl-4 pb-3">
                        {workDropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 py-2.5 text-base transition-colors ${
                              pathname === item.href ? "text-[#FF6B35]" : "text-foreground/60 hover:text-foreground/80"
                            }`}
                          >
                            <div className="w-7 h-7 rounded-[6px] bg-[#1a1a1a] border border-white/[0.08] p-0.5 flex items-center justify-center overflow-hidden flex-shrink-0">
                              <Image
                                src={item.logo}
                                alt={item.label}
                                width={24}
                                height={24}
                                className="object-cover object-center rounded-[4px]"
                              />
                            </div>
                            <span>{item.label}</span>
                            <FlagImage code={item.flagCode} size={14} />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-2xl font-semibold py-3 transition-colors ${
                      pathname === link.href ? "text-[#FF6B35]" : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-[#FF6B35] transition-colors">
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Navbar — Companies (dropdown) | On The Ground | Content | Built | About
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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

export default function Navbar() {
  const pathname = usePathname();
  const [workOpen, setWorkOpen] = useState(false);
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

  const isWorkActive = pathname.startsWith("/work");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-accent font-bold text-lg">
          ST
        </Link>
        <ul className="flex gap-6 items-center">
          {/* Work dropdown */}
          <li
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setWorkOpen(true)}
            onMouseLeave={() => setWorkOpen(false)}
          >
            <button
              onClick={() => setWorkOpen((prev) => !prev)}
              className={`text-sm transition-colors hover:text-accent flex items-center gap-1 ${
                isWorkActive ? "text-accent" : "text-foreground/70"
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
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[260px] rounded-lg border border-white/10 bg-[#111] p-2 shadow-xl">
                {workDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors hover:bg-white/5 ${
                      pathname === item.href ? "text-accent" : "text-foreground/70"
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
            )}
          </li>

          {/* Remaining nav links */}
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors hover:text-accent ${
                  pathname === link.href ? "text-accent" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

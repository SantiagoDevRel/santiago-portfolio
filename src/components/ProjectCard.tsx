// ProjectCard — displays a project with icon, status badge, name, role/period, description, tags, and links
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import { ModalPortal } from "@/components/ui/ModalPortal";
import {
  Building2,
  Ticket,
  GitBranch,
  Zap,
  Bot,
  Globe,
  Star,
  X,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Ticket,
  GitBranch,
  Zap,
  Bot,
  Globe,
  Star,
};

const statusConfig: Record<string, { label: string; color: string }> = {
  live: { label: "Live", color: "#22c55e" },
  "open-source": { label: "Open Source", color: "#888" },
  hackathon: { label: "Hackathon", color: "#a78bfa" },
};

function getYear(period: { start: string; end: string }) {
  const match = period.end.match(/\d{4}/);
  return match ? match[0] : period.end;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showModal, setShowModal] = useState(false);
  const visibleLinks = project.links.slice(0, 2);
  const Icon = project.icon ? iconMap[project.icon] : null;
  const status = project.status ? statusConfig[project.status] : null;

  const cardBorder = project.featured
    ? "border-[rgba(255,107,53,0.25)]"
    : "border-white/[0.08]";
  const cardShadow = project.featured
    ? "shadow-[0_0_20px_rgba(255,107,53,0.08)]"
    : "";

  return (
    <>
      <div
        onMouseEnter={() => window.dispatchEvent(new Event("spotlight:hide"))}
        onMouseLeave={() => window.dispatchEvent(new Event("spotlight:show"))}
        className={`rounded-2xl border ${cardBorder} ${cardShadow} bg-white/[0.03] backdrop-blur-md p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 hover:border-orange-500/20 h-full flex flex-col relative`}
      >
        {status && (
          <span
            className="absolute top-3 right-3 flex items-center gap-1.5 text-[11px] px-2 py-0.5 rounded-full bg-[#1a1a1a]"
            style={{ border: `1px solid ${status.color}4d`, color: status.color }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: status.color }} />
            {status.label}
          </span>
        )}

        {Icon && <Icon size={20} className="text-[#FF6B35] mb-3" />}

        <h3 className="text-xs font-bold tracking-widest uppercase">
          <span className="text-[#FF6B35]/80">{project.title}</span>
          <span className="text-foreground/40 ml-2">{getYear(project.period)}</span>
        </h3>

        <p className="text-sm text-foreground/55 mt-3 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-full bg-[#FF6B35]/8 text-[#FF6B35]/60 border border-[#FF6B35]/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-auto pt-3 border-t border-white/[0.06]">
          {visibleLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-foreground/35 hover:text-[#FF6B35] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setShowModal(true)}
            className="text-xs text-[#FF6B35]/70 hover:text-[#FF6B35] transition-colors duration-200 ml-auto"
          >
            See more →
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <ProjectModal project={project} onClose={() => setShowModal(false)} Icon={Icon} />
        )}
      </AnimatePresence>
    </>
  );
}

function ProjectModal({ project, onClose, Icon }: { project: Project; onClose: () => void; Icon: LucideIcon | null }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <ModalPortal>
    <motion.div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center sm:p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

      <motion.div
        className="relative w-full sm:max-w-[680px] max-h-[95vh] sm:max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-white/[0.08] bg-[#141414] p-6"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 100, scale: 1 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="mb-4 flex items-center gap-3">
          {Icon && <Icon size={20} className="text-[#FF6B35]" />}
          <h2 className="text-xl font-bold pr-10">{project.title}</h2>
          <span className="text-sm text-foreground/40">{getYear(project.period)}</span>
        </div>
        <p className="text-sm text-foreground/65 leading-[1.7] mb-4">
          {project.description}
        </p>

        {project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.metrics.map((m) => (
              <span
                key={m.label}
                className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-foreground/50"
              >
                {m.label}:{" "}
                <span className="text-foreground font-medium">{m.value}</span>
              </span>
            ))}
          </div>
        )}

        {project.highlights.length > 0 && (
          <ul className="space-y-2 mb-4">
            {project.highlights.map((h, i) => (
              <li key={i} className="text-xs text-foreground/45 flex gap-2">
                <span className="text-[#FF6B35]/60 shrink-0">-</span>
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-full bg-[#FF6B35]/8 text-[#FF6B35]/60 border border-[#FF6B35]/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-3 border-t border-white/[0.06]">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#FF6B35]/70 hover:text-[#FF6B35] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
    </ModalPortal>
  );
}

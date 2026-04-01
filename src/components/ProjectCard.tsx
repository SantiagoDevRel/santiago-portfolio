// ProjectCard — displays a project with company header, role/period, description, tags, and links
"use client";

import { useState } from "react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showModal, setShowModal] = useState(false);
  const visibleLinks = project.links.slice(0, 2);

  return (
    <>
      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-accent/20 transition-all duration-300 h-full flex flex-col">
        <h3 className="text-xs font-bold tracking-widest uppercase text-accent/80">
          {project.company}
        </h3>
        <p className="text-sm text-foreground/40 mt-1.5">
          {project.role} · {project.period.start} – {project.period.end}
        </p>

        <p className="text-sm text-foreground/55 mt-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-full bg-accent/8 text-accent/70 border border-accent/10"
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
              className="text-xs text-foreground/35 hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setShowModal(true)}
            className="text-xs text-[#FFD700]/70 hover:text-[#FFD700] transition-colors duration-200 ml-auto"
          >
            See more →
          </button>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl max-w-lg w-full mx-4 p-6 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:text-[#FFD700] hover:bg-white/20 transition-colors"
            >
              ×
            </button>
            <div className="mb-4">
              <h2 className="text-lg font-bold pr-10">{project.title}</h2>
            </div>
            <p className="text-xs font-bold tracking-widest uppercase text-accent/80 mb-1">
              {project.company}
            </p>
            <p className="text-sm text-foreground/45 mb-3">
              {project.role} · {project.period.start} – {project.period.end}
            </p>
            <p className="text-sm text-foreground/65 leading-relaxed mb-4">
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
                    <span className="text-accent/60 shrink-0">—</span>
                    {h}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-0.5 rounded-full bg-accent/8 text-accent/70 border border-accent/10"
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
                  className="text-xs text-accent/70 hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

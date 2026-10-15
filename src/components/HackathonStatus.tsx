// HackathonStatus — Upcoming / Live / Judging / Closed badge from the event dates.
// Computed after mount: the page is static, so a build-time status would go stale.
"use client";

import { useEffect, useState } from "react";

interface HackathonStatusProps {
  start: string;
  end: string;
  results?: string;
}

const styles = {
  Upcoming: "text-[#00aaff] border-[#00aaff]/30 bg-[#00aaff]/10",
  Live: "text-[#22c55e] border-[#22c55e]/30 bg-[#22c55e]/10",
  Judging: "text-[#ffcc00] border-[#ffcc00]/30 bg-[#ffcc00]/10",
  Closed: "text-foreground/50 border-white/[0.1] bg-white/[0.04]",
} as const;

type Status = keyof typeof styles;

function statusAt(now: number, { start, end, results }: HackathonStatusProps): Status {
  if (now < Date.parse(start)) return "Upcoming";
  if (now <= Date.parse(end)) return "Live";
  if (results && now < Date.parse(results)) return "Judging";
  return "Closed";
}

export default function HackathonStatus({ start, end, results }: HackathonStatusProps) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    setStatus(statusAt(Date.now(), { start, end, results }));
  }, [start, end, results]);

  if (!status) return null;
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${styles[status]}`}
    >
      {status === "Live" ? <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" aria-hidden /> : null}
      {status}
    </span>
  );
}

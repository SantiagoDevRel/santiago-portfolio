// StatGrid — static metric tiles (same look as the company metrics carousel), two per row.
// Pass an even number of stats so the last row is never a single orphan tile.
interface StatGridProps {
  stats: { value: string; label: string }[];
}

export default function StatGrid({ stats }: StatGridProps) {
  return (
    <dl className="grid grid-cols-2 gap-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.08] px-4 py-4 flex flex-col-reverse justify-end"
        >
          <dt className="text-xs text-foreground/50 mt-1 leading-snug">{s.label}</dt>
          <dd className="text-xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#C8400A] bg-clip-text text-transparent">
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

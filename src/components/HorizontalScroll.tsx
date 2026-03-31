// HorizontalScroll — reusable horizontal scrollable row for cards
"use client";

interface HorizontalScrollProps {
  title: string;
  children: React.ReactNode;
}

export default function HorizontalScroll({ title, children }: HorizontalScrollProps) {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-xl font-bold tracking-tight mb-6">{title}</h2>
      <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
        {children}
      </div>
    </section>
  );
}

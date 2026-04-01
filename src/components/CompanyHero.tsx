// CompanyHero — reusable hero section for company work pages
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FlagImage } from "@/components/FlagImage";

interface CompanyHeroProps {
  logoUrl: string;
  companyName: string;
  flagCode: string;
  role: string;
  period: string;
  description: string;
  metrics: { label: string; value: string }[];
  websiteUrl: string;
}

export default function CompanyHero({
  logoUrl, companyName, flagCode, role, period, description, metrics, websiteUrl,
}: CompanyHeroProps) {
  return (
    <section className="pt-28 pb-12 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-5 mb-6">
        <div className="w-24 h-24 rounded-[12px] bg-[#1a1a1a] border border-white/[0.08] p-0.5 flex items-center justify-center shrink-0 overflow-hidden">
          <Image src={logoUrl} alt={companyName} width={80} height={80} className="object-cover object-center rounded-[10px]" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-3">
            {companyName} <FlagImage code={flagCode} size={28} />
          </h1>
          <p className="text-foreground/45 mt-1">{role} · {period}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        {metrics.map((m) => (
          <span key={m.label} className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-foreground/50">
            {m.label}: <span className="text-foreground font-medium">{m.value}</span>
          </span>
        ))}
      </div>

      <p className="text-sm text-foreground/55 leading-relaxed mb-6">{description}</p>

      <a
        href={websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-[13px] font-medium text-[#FF6B35]/85 hover:text-[#FF6B35] hover:underline transition-opacity duration-150"
      >
        Visit website
        <ExternalLink size={12} />
      </a>
    </section>
  );
}

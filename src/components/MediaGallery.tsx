// MediaGallery — walkthrough videos, dashboard screenshots and event photos for /hackathons and /tooling.
// Screenshots never grow past their natural size; compact ones share a row; every screenshot opens full size.
import Image from "next/image";
import { ExternalLink, Maximize2 } from "lucide-react";
import type { Media, PhotoMedia, ScreenshotMedia, VideoMedia } from "@/data/media";

type Row =
  | { type: "video"; item: VideoMedia }
  | { type: "wide"; item: ScreenshotMedia }
  | { type: "compact"; items: ScreenshotMedia[] }
  | { type: "photos"; items: PhotoMedia[] };

const WIDE_RATIO = 1.6;

function toRows(media: Media[]): Row[] {
  const rows: Row[] = [];
  for (const item of media) {
    const last = rows[rows.length - 1];
    if (item.kind === "video") rows.push({ type: "video", item });
    else if (item.kind === "photo") {
      if (last?.type === "photos") last.items.push(item);
      else rows.push({ type: "photos", items: [item] });
    } else if (item.width / item.height >= WIDE_RATIO) rows.push({ type: "wide", item });
    else if (last?.type === "compact" && last.items.length < 3) last.items.push(item);
    else rows.push({ type: "compact", items: [item] });
  }
  return rows;
}

const frame =
  "block rounded-xl overflow-hidden border border-white/[0.08] bg-[#111] transition-colors duration-200";

// Captures are 2x, so half the pixel width is the size at which their text reads like the original page.
function Screenshot({ item, sizes, className = "" }: { item: ScreenshotMedia; sizes: string; className?: string }) {
  return (
    <figure className={`w-full mx-auto ${className}`} style={{ maxWidth: item.width / 2 }}>
      <a
        href={item.src}
        target="_blank"
        rel="noopener noreferrer"
        className={`${frame} relative group/shot hover:border-orange-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF6B35]`}
        aria-label={`Open full-size screenshot: ${item.alt}`}
      >
        <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes={sizes} className="w-full h-auto" />
        <span className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/70 group-hover/shot:text-[#FF6B35] transition-colors" aria-hidden>
          <Maximize2 size={13} />
        </span>
      </a>
      <figcaption className="text-xs text-foreground/45 mt-2 leading-relaxed">{item.caption}</figcaption>
    </figure>
  );
}

function Video({ item }: { item: VideoMedia }) {
  return (
    <figure className="w-full max-w-3xl mx-auto">
      <div className={frame}>
        <video
          controls
          preload="none"
          playsInline
          poster={item.poster}
          width={item.width}
          height={item.height}
          aria-label={item.title}
          className="block w-full h-auto"
        >
          <source src={item.src} type="video/mp4" />
        </video>
      </div>
      <figcaption className="mt-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span className="text-xs text-foreground/45 leading-relaxed">
          <span className="text-foreground/75 font-medium">{item.title}</span> · {item.duration}. {item.caption}
        </span>
        <a
          href={item.postUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[13px] font-medium text-[#FF6B35]/85 hover:text-[#FF6B35] hover:underline shrink-0"
        >
          Watch on X
          <ExternalLink size={12} />
        </a>
      </figcaption>
    </figure>
  );
}

function Photos({ items }: { items: PhotoMedia[] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((photo, i) => (
        <div
          key={photo.src}
          className={`relative ${frame} ${i === 0 ? "col-span-2 aspect-video" : "aspect-[4/3]"}`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={i === 0 ? "(min-width: 1024px) 560px, 100vw" : "(min-width: 1024px) 280px, 50vw"}
            className="object-cover"
            style={photo.position ? { objectPosition: photo.position } : undefined}
          />
        </div>
      ))}
    </div>
  );
}

export default function MediaGallery({ media }: { media: Media[] }) {
  if (media.length === 0) return null;
  return (
    <div className="flex flex-col gap-6">
      {toRows(media).map((row, i) => {
        if (row.type === "video") return <Video key={i} item={row.item} />;
        if (row.type === "photos") return <Photos key={i} items={row.items} />;
        if (row.type === "wide")
          return <Screenshot key={i} item={row.item} sizes="(min-width: 1152px) 1104px, 100vw" />;
        return (
          <div key={i} className="flex flex-wrap justify-center items-start gap-6">
            {row.items.map((item) => (
              <Screenshot key={item.src} item={item} sizes="(min-width: 640px) 440px, 100vw" className="flex-1 basis-[300px]" />
            ))}
          </div>
        );
      })}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { WorkItem } from "@/data/types";
import { categoryLabel, cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { HoverVideo } from "./HoverVideo";

export function WorkCard({ item, className, priority }: { item: WorkItem; className?: string; priority?: boolean }) {
  return (
    <article className={cn("group glow-border relative flex flex-col overflow-hidden rounded-3xl glass", className)}>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={item.cover.src}
          alt={item.cover.alt}
          fill
          loading={priority ? "eager" : undefined}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {item.previewVideo && <HoverVideo src={item.previewVideo} />}
        <span className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {categoryLabel(item.category)}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">{item.client}</p>
        <h3 className="mt-2 text-xl font-bold">
          {/* stretched link makes the whole card clickable */}
          <Link href={`/work/${item.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {item.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm text-muted">{item.summary}</p>
        <p aria-hidden="true" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
          View case study
          <Icon name="arrowUpRight" size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </p>
      </div>
    </article>
  );
}

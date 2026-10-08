import Link from "next/link";
import type { ComingSoon } from "@/data/types";
import { cn } from "@/lib/utils";
import { Icon, serviceIcon } from "@/components/ui/Icon";

/** Placeholder card for a service category whose first projects aren't published yet. */
export function ComingSoonCard({ item, className }: { item: ComingSoon; className?: string }) {
  return (
    <article className={cn("group glow-border relative flex flex-col overflow-hidden rounded-3xl glass", className)}>
      <div className="relative grid aspect-[16/10] place-items-center overflow-hidden bg-bg-elevated">
        <div aria-hidden="true" className="glow-orb glow-violet absolute -top-1/2 left-1/2 size-[140%] -translate-x-1/2 rounded-full opacity-40" />
        <span className="relative grid size-16 place-items-center rounded-2xl bg-accent text-[#07070c] transition-transform duration-500 group-hover:scale-110">
          <Icon name={serviceIcon[item.category]} size={28} />
        </span>
        <span className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          Coming soon
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">Coming soon</p>
        <h3 className="mt-2 text-xl font-bold">
          {/* stretched link makes the whole card clickable */}
          <Link href={`/services#${item.category}`} className="after:absolute after:inset-0 after:content-['']">
            {item.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm text-muted">{item.text}</p>
        <p aria-hidden="true" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
          Explore the service
          <Icon name="arrowUpRight" size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </p>
      </div>
    </article>
  );
}

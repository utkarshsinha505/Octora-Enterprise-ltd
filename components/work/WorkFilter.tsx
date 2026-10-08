"use client";

import { LazyMotion, MotionConfig, domAnimation, m } from "framer-motion";
import { useState } from "react";
import { services, work } from "@/data/site";
import type { ServiceId } from "@/data/types";
import { cn, upcoming } from "@/lib/utils";
import { ComingSoonCard } from "./ComingSoonCard";
import { WorkCard } from "./WorkCard";

type Filter = "all" | ServiceId;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  ...services.map((s) => ({ id: s.id, label: s.shortTitle })),
];

export function WorkFilter() {
  const [active, setActive] = useState<Filter>("all");
  const [filtered, setFiltered] = useState(false);
  const items = active === "all" ? work : work.filter((w) => w.category === active);
  const soon = active === "all" ? upcoming : upcoming.filter((c) => c.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter projects by category" className="-mx-5 overflow-x-auto px-5 pb-2 md:mx-0 md:px-0">
        <ul className="flex w-max gap-2">
          {filters.map((f) => (
            <li key={f.id}>
              <button
                type="button"
                aria-pressed={active === f.id}
                onClick={() => {
                  setActive(f.id);
                  setFiltered(true);
                }}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors",
                  active === f.id
                    ? "border-transparent bg-accent text-[#07070c]"
                    : "border-line text-muted hover:border-fg/30 hover:text-fg",
                )}
              >
                {f.label}
                {upcoming.some((c) => c.category === f.id) && (
                  <span
                    className={cn(
                      "ml-2 rounded-full px-2 py-0.5 text-[0.65rem] tracking-wide uppercase",
                      active === f.id ? "bg-black/15" : "bg-surface-strong text-fg",
                    )}
                  >
                    Soon
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <p aria-live="polite" className="mt-6 text-sm text-muted">
        {items.length === 0 && soon.length > 0
          ? "Coming soon"
          : `Showing ${items.length} ${items.length === 1 ? "project" : "projects"}`}
      </p>

      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <m.li
                key={`${active}-${item.slug}`}
                // first render shows cards immediately; filter changes animate them in
                initial={filtered ? { opacity: 0, y: 16 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="flex"
              >
                <WorkCard item={item} className="w-full" priority={active === "all" && i < 3} />
              </m.li>
            ))}
            {soon.map((c, i) => (
              <m.li
                key={`${active}-soon-${c.category}`}
                initial={filtered ? { opacity: 0, y: 16 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: (items.length + i) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="flex"
              >
                <ComingSoonCard item={c} className="w-full" />
              </m.li>
            ))}
          </ul>
        </MotionConfig>
      </LazyMotion>

      {items.length === 0 && soon.length === 0 && (
        <p className="mt-10 rounded-3xl glass p-10 text-center text-muted">New projects in this category are on the way.</p>
      )}
    </div>
  );
}

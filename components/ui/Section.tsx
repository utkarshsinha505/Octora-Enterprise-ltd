import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  action?: ReactNode;
  className?: string;
  children?: ReactNode;
  /** Heading level for the title; defaults to h2 */
  as?: "h1" | "h2";
};

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-muted uppercase", className)}>
      <span aria-hidden="true" className="bg-accent h-px w-8" />
      {children}
    </p>
  );
}

export function Section({ id, eyebrow, title, intro, action, className, children, as: Heading = "h2" }: Props) {
  const headingId = id ? `${id}-title` : undefined;
  return (
    <section id={id} aria-labelledby={title ? headingId : undefined} className={cn("cv-auto relative py-20 md:py-28", className)}>
      <div className="container-x">
        {(title || eyebrow) && (
          <Reveal className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
              {title && (
                <Heading id={headingId} className="text-3xl leading-[1.1] font-bold sm:text-4xl md:text-5xl">
                  {title}
                </Heading>
              )}
              {intro && <p className="mt-5 max-w-2xl text-lg text-muted">{intro}</p>}
            </div>
            {action && <div className="shrink-0">{action}</div>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

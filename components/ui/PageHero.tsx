import type { ReactNode } from "react";
import { Eyebrow } from "./Section";

/** Top-of-page heading block for inner pages (leaves room for the fixed header). */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section aria-labelledby="page-title" className="relative overflow-hidden pt-32 pb-12 md:pt-44 md:pb-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="glow-orb glow-violet absolute -top-80 left-[10%] size-[48rem] rounded-full" style={{ opacity: "calc(var(--glow-opacity) * 0.7)" }} />
        <div className="glow-orb glow-cyan absolute -top-64 -right-32 size-[40rem] rounded-full [animation-delay:-6s]" style={{ opacity: "calc(var(--glow-opacity) * 0.4)" }} />
      </div>
      <div className="materialize container-x relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 id="page-title" className="max-w-4xl text-4xl leading-[1.05] font-extrabold sm:text-5xl md:text-7xl">
          {title}
        </h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

import Link from "next/link";
import { nav } from "@/data/site";
import { cn } from "@/lib/utils";

const links = nav.find((n) => n.children)?.children ?? [];

export function AboutNav({ current }: { current: string }) {
  return (
    <nav aria-label="About sections" className="mt-10">
      <ul className="flex flex-wrap gap-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              aria-current={current === l.href ? "page" : undefined}
              className={cn(
                "inline-block rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors",
                current === l.href
                  ? "border-transparent bg-accent text-[#07070c]"
                  : "border-line text-muted hover:border-fg/30 hover:text-fg",
              )}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

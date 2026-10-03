import type { Faq } from "@/data/types";
import { Icon } from "./Icon";

/** Native <details> accordion: keyboard and screen-reader friendly with zero JavaScript. */
export function Accordion({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-3xl glass">
      {items.map((item) => (
        <details key={item.question} className="group px-6 md:px-8">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-base font-semibold md:text-lg [&::-webkit-details-marker]:hidden">
            {item.question}
            <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line transition-transform duration-300 group-open:rotate-45">
              <Icon name="plus" size={18} />
            </span>
          </summary>
          <p className="max-w-3xl pb-6 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

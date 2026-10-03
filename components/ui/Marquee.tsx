import Image from "next/image";
import type { ClientLogo } from "@/data/types";

/** Infinite CSS logo marquee. The list is rendered twice for a seamless loop; the copy is hidden from assistive tech. */
export function Marquee({ logos }: { logos: ClientLogo[] }) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-14 pr-14 md:gap-20 md:pr-20" aria-hidden={hidden || undefined}>
      {logos.map((logo) => (
        <li key={logo.src} className="shrink-0">
          <Image
            src={logo.src}
            alt={hidden ? "" : logo.alt}
            width={logo.width}
            height={logo.height}
            className="logo-invert h-8 w-auto opacity-60 transition-opacity duration-300 hover:opacity-100 md:h-9"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="group relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className="marquee-track flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

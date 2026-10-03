"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

/** Click-to-load video facade: the heavy YouTube/Vimeo iframe is only fetched when the user presses play. */
export function VideoEmbed({ src, title, poster }: { src: string; title: string; poster: string }) {
  const [active, setActive] = useState(false);
  const url = `${src}${src.includes("?") ? "&" : "?"}autoplay=1`;

  return (
    <div className="relative aspect-video overflow-hidden rounded-3xl border border-line bg-black">
      {active ? (
        <iframe
          src={url}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button type="button" onClick={() => setActive(true)} className="group absolute inset-0 size-full" aria-label={`Play video: ${title}`}>
          <Image src={poster} alt="" fill sizes="(min-width: 1024px) 70vw, 100vw" className="object-cover opacity-80" />
          <span className="absolute top-1/2 left-1/2 grid size-20 -translate-1/2 place-items-center rounded-full bg-accent text-[#07070c] shadow-[0_0_60px_rgba(139,92,246,0.6)] transition-transform group-hover:scale-110">
            <Icon name="play" size={28} />
          </span>
        </button>
      )}
    </div>
  );
}

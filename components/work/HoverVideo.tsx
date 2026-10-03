"use client";

import { useEffect, useRef } from "react";

/** Muted preview clip that plays while the parent card (.group) is hovered or focused. Loads nothing until then. */
export function HoverVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    const card = video?.closest(".group");
    if (!video || !card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const play = () => {
      if (!video.src) video.src = src;
      video.play().catch(() => {});
    };
    const stop = () => video.pause();
    card.addEventListener("pointerenter", play);
    card.addEventListener("pointerleave", stop);
    card.addEventListener("focusin", play);
    card.addEventListener("focusout", stop);
    return () => {
      card.removeEventListener("pointerenter", play);
      card.removeEventListener("pointerleave", stop);
      card.removeEventListener("focusin", play);
      card.removeEventListener("focusout", stop);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    />
  );
}

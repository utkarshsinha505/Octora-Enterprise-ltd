"use client";

import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

const listeners = new Set<() => void>();
const isPaused = () => document.documentElement.dataset.motion === "paused";
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};

function setPaused(paused: boolean) {
  if (paused) document.documentElement.dataset.motion = "paused";
  else delete document.documentElement.dataset.motion;
  try {
    localStorage.setItem("motion", paused ? "paused" : "on");
  } catch {}
  listeners.forEach((cb) => cb());
}

/** Pauses/resumes looping decorative animation site-wide (hero morph, logo marquee, glows). */
export function MotionToggle({ className, compact = false }: { className?: string; compact?: boolean }) {
  const paused = useSyncExternalStore(subscribe, isPaused, () => false);
  const label = paused ? "Play animations" : "Pause animations";
  return (
    <button
      type="button"
      onClick={() => setPaused(!paused)}
      aria-pressed={paused}
      aria-label={compact ? label : undefined}
      title={label}
      className={cn("transition-colors", !compact && "inline-flex items-center gap-2 text-sm hover:text-fg", className)}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        {paused ? <path d="M7 4.5v15l13-7.5z" /> : <path d="M6 4h4v16H6zM14 4h4v16h-4z" />}
      </svg>
      {!compact && label}
    </button>
  );
}

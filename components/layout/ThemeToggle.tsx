"use client";

import { useSyncExternalStore } from "react";
import { Icon } from "@/components/ui/Icon";

type Theme = "dark" | "light";

const listeners = new Set<() => void>();
const getTheme = (): Theme => (document.documentElement.dataset.theme === "light" ? "light" : "dark");
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};

function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {}
  listeners.forEach((cb) => cb());
}

/**
 * Inline script for <head>: applies saved preferences before first paint (no flash).
 * Dark theme is the default; looping motion can be paused with MotionToggle.
 */
export const preferencesScript = `try{var d=document.documentElement;d.dataset.js="";if(localStorage.getItem("theme")==="light")d.dataset.theme="light";if(localStorage.getItem("motion")==="paused")d.dataset.motion="paused"}catch(e){}`;

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "dark" as Theme);
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className={`grid size-10 place-items-center rounded-full border border-line text-fg transition-colors hover:border-fg/30 hover:bg-surface ${className ?? ""}`}
    >
      <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
    </button>
  );
}

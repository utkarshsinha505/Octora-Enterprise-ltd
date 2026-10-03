"use client";

import { inView } from "framer-motion/dom";
import { useEffect, useRef } from "react";

const DURATION = 1800;
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/** Counts up from 0 to `value` the first time it scrolls into view. */
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    // framer-motion/dom's lightweight inView keeps the full animation runtime out of this page
    const stop = inView(
      el,
      () => {
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION, 1);
          el.textContent = `${Math.round(easeOutExpo(t) * value).toLocaleString("en-US")}${suffix}`;
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        stop();
      },
      { margin: "0px 0px -15% 0px" },
    );
    return () => {
      stop();
      cancelAnimationFrame(frame);
    };
  }, [value, suffix]);

  // Server and no-JS render shows the final number, so it's always correct for SEO and screen readers.
  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

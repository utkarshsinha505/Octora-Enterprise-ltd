import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds */
  delay?: number;
  as?: "div" | "li" | "article";
};

/**
 * Fades and lifts content in when it scrolls into view.
 * Server-rendered; a tiny observer script (see app/layout.tsx) adds `data-revealed`.
 * Content is only hidden while JavaScript is running, and never under reduced motion.
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: Props) {
  return (
    <Tag
      data-reveal=""
      className={className}
      style={delay ? ({ "--reveal-delay": `${delay}s` } as CSSProperties) : undefined}
      suppressHydrationWarning
    >
      {children}
    </Tag>
  );
}

/**
 * Inline script: reveals [data-reveal] elements as they enter the viewport.
 * A MutationObserver picks up elements added by client-side navigation.
 */
export const revealScript = `(function(){var d=document.documentElement;if(!("IntersectionObserver" in window)){d.removeAttribute("data-js");return}var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.setAttribute("data-revealed","");io.unobserve(e.target)}})},{rootMargin:"0px 0px -10% 0px"});function scan(r){(r.querySelectorAll?r:document).querySelectorAll("[data-reveal]:not([data-revealed])").forEach(function(el){io.observe(el)})}scan(document);new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(n){if(n.nodeType===1){if(n.matches("[data-reveal]:not([data-revealed])"))io.observe(n);scan(n)}})})}).observe(document.body,{childList:true,subtree:true})})();`;

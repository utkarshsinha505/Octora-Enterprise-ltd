import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-[transform,box-shadow,background-color,border-color] duration-300 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  // dark text on the bright gradient keeps contrast above 4.5:1
  primary:
    "bg-accent text-[#07070c] shadow-[0_0_0_rgba(139,92,246,0)] hover:shadow-[0_8px_40px_-6px_rgba(139,92,246,0.65)] hover:-translate-y-0.5",
  secondary: "glass backdrop-blur-md text-fg hover:border-fg/30 hover:-translate-y-0.5",
  ghost: "text-fg hover:text-cyan light:hover:text-[#0e7490]",
  whatsapp:
    "bg-[#25D366] text-[#07130b] hover:shadow-[0_8px_40px_-6px_rgba(37,211,102,0.6)] hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

type Props = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  external?: boolean;
};

export function ButtonLink({ variant = "primary", size = "md", className, external, children, href, ...rest }: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (external) {
    return (
      <a href={String(href)} target="_blank" rel="noopener noreferrer" className={classes} {...(rest as ComponentProps<"a">)}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

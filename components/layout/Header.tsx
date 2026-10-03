"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { nav } from "@/data/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

type NavItem = (typeof nav)[number];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

function Dropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  // a click right after a mouse hover-open should keep the menu open, not toggle it shut
  const hoverOpened = useRef(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        ref.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onPointerEnter={(e) => {
        if (e.pointerType !== "mouse") return;
        hoverOpened.current = !open;
        setOpen(true);
      }}
      onPointerLeave={(e) => e.pointerType === "mouse" && setOpen(false)}
      onBlur={(e) => !ref.current?.contains(e.relatedTarget as Node) && setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => {
          if (hoverOpened.current) {
            hoverOpened.current = false;
            setOpen(true);
          } else setOpen((o) => !o);
        }}
        className={cn(
          "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-fg",
          isActive(pathname, item.href) ? "text-fg" : "text-muted",
        )}
      >
        {item.label}
        <Icon name="chevronDown" size={16} className={cn("transition-transform duration-300", open && "rotate-180")} />
      </button>
      <div
        id={menuId}
        className={cn(
          "absolute top-full left-1/2 w-80 -translate-x-1/2 pt-3 transition-[opacity,transform] duration-200",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0",
        )}
      >
        <ul className="rounded-2xl border border-line bg-bg-elevated/95 p-2 shadow-2xl backdrop-blur-xl">
          {item.children!.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === child.href ? "page" : undefined}
                className="block rounded-xl px-4 py-3 transition-colors hover:bg-surface-strong aria-[current=page]:bg-surface"
              >
                <span className="block text-sm font-semibold text-fg">{child.label}</span>
                <span className="block text-xs text-muted">{child.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu on navigation
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
      // keep Tab focus inside the open menu
      if (e.key === "Tab" && panelRef.current) {
        const items = [toggleRef.current!, ...panelRef.current.querySelectorAll<HTMLElement>("a, button")];
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || menuOpen
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-x flex h-18 items-center justify-between gap-4 md:h-20">
        <Link href="/" aria-label="UPÉ Synthetic Limited, home" className="shrink-0 text-fg">
          <Logo className="w-24 md:w-28" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <Dropdown item={item} pathname={pathname} />
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-fg aria-[current=page]:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle />
          <div className="hidden sm:block">
            <ButtonLink href="/contact" size="sm">
              Let&apos;s talk
            </ButtonLink>
          </div>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full border border-line lg:hidden"
          >
            <Icon name={menuOpen ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!menuOpen}
        className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-bg lg:hidden"
      >
        <nav aria-label="Mobile" className="container-x flex min-h-full flex-col py-8">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <p className="px-2 pt-4 pb-2 text-xs font-semibold tracking-[0.2em] text-muted uppercase">{item.label}</p>
                    <ul className="flex flex-col">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            aria-current={pathname === child.href ? "page" : undefined}
                            className="block rounded-xl px-2 py-3 font-display text-2xl font-semibold aria-[current=page]:text-gradient"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className="block rounded-xl px-2 py-3 font-display text-2xl font-semibold aria-[current=page]:text-gradient"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <ButtonLink href="/contact" size="lg" className="mt-auto w-full">
            Let&apos;s talk
            <Icon name="arrowRight" size={18} />
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}

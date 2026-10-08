import { comingSoon, services, site, work } from "@/data/site";
import type { ServiceId } from "@/data/types";

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const telHref = `tel:${site.contact.phone.replace(/[^\d+]/g, "")}`;
export const mailHref = `mailto:${site.contact.email}`;
export const whatsappHref = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
  site.contact.whatsappMessage,
)}`;
export const mapHref =
  site.contact.mapUrl ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.contact.address)}`;

export function serviceById(id: ServiceId) {
  return services.find((s) => s.id === id)!;
}

export function categoryLabel(id: ServiceId) {
  return serviceById(id).shortTitle;
}

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

export const featuredWork = work.filter((w) => w.featured).slice(0, 6);

/** "Coming soon" placeholders for categories that don't have a project yet. */
export const upcoming = comingSoon.filter((c) => !work.some((w) => w.category === c.category));

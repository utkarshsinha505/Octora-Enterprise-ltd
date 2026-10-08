import Link from "next/link";
import { nav, services, site } from "@/data/site";
import { mailHref, mapHref, telHref, whatsappHref } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";

const explore = nav.flatMap((item) => (item.children ? item.children.map(({ label, href }) => ({ label, href })) : [item]));

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="cv-auto relative overflow-hidden border-t border-line bg-bg-elevated/40 [contain-intrinsic-size:auto_900px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-64 left-1/2 h-[32rem] w-[80rem] -translate-x-1/2 rounded-full glow-violet opacity-[0.14]"
      />
      <div className="container-x relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="UPÉ Synthetic Limited, home" className="inline-block text-fg">
              <Logo className="w-40" showSubline />
            </Link>
            <p className="mt-5 font-display text-lg font-semibold">{site.tagline}</p>
            <p className="mt-3 max-w-sm text-sm text-muted">
              An AI-first creative studio making AI reels, songs, ad films and stories, and websites that turn attention
              into enquiries.
            </p>
          </div>

          <div className={`grid gap-10 lg:col-span-8 ${site.features.contact ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
            <div>
              <h2 className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Explore</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link href="/" className="hover:text-cyan">Home</Link></li>
                {explore.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href} className="hover:text-cyan">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Services</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link href={`/services#${s.id}`} className="hover:text-cyan">{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {site.features.contact && (
              <div>
                <h2 className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Get in touch</h2>
                <address className="mt-4 space-y-3 text-sm not-italic">
                  <a href={telHref} className="flex items-start gap-3 hover:text-cyan">
                    <Icon name="phone" size={16} className="mt-0.5 shrink-0 text-muted" />
                    {site.contact.phone}
                  </a>
                  <a href={mailHref} className="flex items-start gap-3 break-all hover:text-cyan">
                    <Icon name="mail" size={16} className="mt-0.5 shrink-0 text-muted" />
                    {site.contact.email}
                  </a>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-cyan">
                    <Icon name="whatsapp" size={16} className="mt-0.5 shrink-0 text-muted" />
                    WhatsApp us
                  </a>
                  <a href={mapHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-cyan">
                    <Icon name="pin" size={16} className="mt-0.5 shrink-0 text-muted" />
                    {site.contact.address}
                  </a>
                </address>
              </div>
            )}
          </div>
        </div>

        {site.features.contact && (
          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl glass p-6 sm:flex-row sm:items-center md:p-8">
            <p className="font-display text-xl font-semibold md:text-2xl">
              Got an idea? <span className="text-gradient">Let&apos;s make it real.</span>
            </p>
            <ButtonLink href="/contact">
              Let&apos;s talk <Icon name="arrowRight" size={18} />
            </ButtonLink>
          </div>
        )}

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          {site.social.length > 0 && (
            <ul className="flex flex-wrap items-center gap-5">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}

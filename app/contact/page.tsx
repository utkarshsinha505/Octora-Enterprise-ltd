import { notFound } from "next/navigation";
import { contactPage, site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { mailHref, mapHref, telHref, whatsappHref } from "@/lib/utils";
import { ContactForm } from "@/components/contact/ContactForm";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Start a project with UPÉ. Call, email or WhatsApp our studio, or send us your brief through the form.`,
  path: "/contact",
});

const channels: { icon: IconName; label: string; value: string; href: string; external?: boolean }[] = [
  { icon: "phone", label: "Call us", value: site.contact.phone, href: telHref },
  { icon: "mail", label: "Email", value: site.contact.email, href: mailHref },
  { icon: "whatsapp", label: "WhatsApp", value: "Chat with us now", href: whatsappHref, external: true },
  { icon: "pin", label: "Visit the studio", value: site.contact.address, href: mapHref, external: true },
];

export default function ContactPage() {
  if (!site.features.contact) notFound();
  return (
    <>
      <PageHero eyebrow="Contact" title={contactPage.title} intro={contactPage.intro} />

      <section aria-label="Contact details and form" className="pb-24">
        <div className="container-x grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="space-y-4 lg:col-span-5">
            <h2 className="sr-only">Other ways to reach us</h2>
            <ul className="space-y-4">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="group glow-border relative flex items-start gap-5 rounded-3xl glass p-6 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-accent text-[#07070c]">
                      <Icon name={c.icon} size={22} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold tracking-[0.2em] text-muted uppercase">{c.label}</span>
                      <span className="mt-1 block font-semibold break-words">{c.value}</span>
                      {c.icon === "pin" && (
                        <span className="mt-2 inline-flex items-center gap-1 text-sm text-muted group-hover:text-fg">
                          Open in Google Maps <Icon name="arrowUpRight" size={14} />
                        </span>
                      )}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 rounded-3xl border border-line p-6 text-sm text-muted">
              <Icon name="clock" size={20} />
              <p>
                Studio hours: <span className="text-fg">{contactPage.hours}</span>. We reply to every enquiry within one working day.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

import { serviceFaqs, services } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, serviceIcon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { FinalCta } from "@/components/home/HomeSections";

export const metadata = pageMetadata({
  title: "Services: AI Reels, Songs, Ad Films, Storytelling & Websites",
  description:
    "Explore UPÉ's services: AI reels, original AI songs, AI ad films, AI storytelling and website design & development. See deliverables, turnaround times and FAQs.",
  path: "/services",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: serviceFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Icon name="check" size={18} className="mt-0.5 shrink-0 text-cyan light:text-[#0e7490]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything you need to <span className="text-gradient">create beyond reality.</span>
          </>
        }
        intro="Five services, one studio. Pick one, or combine them into a campaign with a song, a film, reels and the website to send people to."
      >
        <nav aria-label="Jump to a service" className="mt-10">
          <ul className="flex flex-wrap gap-2">
            {services.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-fg/30 hover:text-fg"
                >
                  <Icon name={serviceIcon[s.id]} size={16} />
                  {s.shortTitle}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <div className="container-x space-y-6 pb-8 md:space-y-8">
        {services.map((s, i) => (
          <Reveal key={s.id}>
            <section
              id={s.id}
              aria-labelledby={`${s.id}-title`}
              className="cv-auto scroll-mt-28 overflow-hidden rounded-[2rem] glass [contain-intrinsic-size:auto_700px]"
            >
              <div className="grid gap-10 p-7 md:p-12 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-4">
                    <span className="grid size-14 place-items-center rounded-2xl bg-accent text-[#07070c]">
                      <Icon name={serviceIcon[s.id]} size={26} />
                    </span>
                    <span className="font-display text-sm text-muted">0{i + 1} / 0{services.length}</span>
                  </div>
                  <h2 id={`${s.id}-title`} className="mt-6 text-3xl font-bold md:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted">{s.intro}</p>
                  <dl className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-line px-5 py-3">
                    <dt className="flex items-center gap-3 text-sm text-muted">
                      <Icon name="clock" size={18} />
                      Turnaround
                    </dt>
                    <dd className="text-sm font-semibold">{s.turnaround}</dd>
                  </dl>
                  <div className="mt-8">
                    <ButtonLink href={`/contact?service=${s.id}`}>
                      {s.cta} <Icon name="arrowRight" size={18} />
                    </ButtonLink>
                  </div>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:border-l lg:border-line lg:pl-12">
                  <List title="What you get" items={s.whatYouGet} />
                  <List title="Use cases" items={s.useCases} />
                  <div className="sm:col-span-2">
                    <List title="Deliverables" items={s.deliverables} />
                  </div>
                </div>
              </div>
            </section>
          </Reveal>
        ))}
      </div>

      <Section id="faq" eyebrow="FAQ" title="Questions, answered.">
        <Accordion items={serviceFaqs} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Section>

      <FinalCta />
    </>
  );
}

import { culture, site, values } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { AboutNav } from "@/components/about/AboutNav";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { FinalCta } from "@/components/home/HomeSections";

export const metadata = pageMetadata({
  title: "Values & Culture",
  description:
    "Responsible AI, craft in every frame and partners-not-vendors: the values and culture behind UPÉ Synthetic Limited.",
  path: "/about/values",
});

export default function ValuesPage() {
  return (
    <>
      <PageHero
        eyebrow="Values & culture"
        title={
          <>
            Powered by AI. <span className="text-gradient">Guided by people.</span>
          </>
        }
        intro="Generative tools change every week. Our principles don't. Here's what we stand for and how we work together."
      >
        <AboutNav current="/about/values" />
      </PageHero>

      <Section id="values" eyebrow="Our values" title="Six promises we keep on every project.">
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={(i % 3) * 0.08} className="glow-border relative rounded-3xl glass p-8">
              <span className="font-display text-4xl font-bold text-gradient">0{i + 1}</span>
              <h3 className="mt-6 text-xl font-bold">{v.title}</h3>
              <p className="mt-3 text-muted">{v.description}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section id="culture" eyebrow="Culture" title="How it feels to work at UPÉ." intro={culture.intro}>
        <ul className="grid gap-5 md:grid-cols-2">
          {culture.points.map((p, i) => (
            <Reveal as="li" key={p.title} delay={(i % 2) * 0.08} className="flex gap-5 rounded-3xl glass p-7">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-accent text-[#07070c]">
                <Icon name="sparkle" size={22} />
              </span>
              <div>
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-muted">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        {site.features.contact && (
          <Reveal className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-line p-8 md:flex-row md:items-center md:p-10">
            <div>
              <h3 className="text-2xl font-bold">Want to create with us?</h3>
              <p className="mt-2 text-muted">We&apos;re always happy to meet talented artists, editors, musicians and developers.</p>
            </div>
            <ButtonLink href="/contact" variant="secondary">
              Get in touch <Icon name="arrowRight" size={18} />
            </ButtonLink>
          </Reveal>
        )}
      </Section>

      <FinalCta />
    </>
  );
}

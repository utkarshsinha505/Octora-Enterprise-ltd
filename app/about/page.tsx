import { site, story, timeline, values } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { AboutNav } from "@/components/about/AboutNav";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { FinalCta, StatsBand } from "@/components/home/HomeSections";

export const metadata = pageMetadata({
  title: "Our Story",
  description:
    "The story of UPÉ Synthetic Limited, an AI-first creative studio launched in 2026 for brands, studios, creators and schools.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About UPÉ"
        title={
          <>
            We make the impossible <span className="text-gradient">look easy.</span>
          </>
        }
        intro={story.intro}
      >
        <AboutNav current="/about" />
      </PageHero>

      {/* Story */}
      <section aria-labelledby="story-title" className="py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 id="story-title" className="text-3xl font-bold md:text-4xl">Our story</h2>
            <p className="mt-4 text-muted">
              Est. {site.foundedYear}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-lg text-muted lg:col-span-8">
            {story.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Mission & vision */}
      <section aria-label="Mission and vision" className="py-8">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {[
            { label: "Our mission", text: story.mission },
            { label: "Our vision", text: story.vision },
          ].map((b, i) => (
            <Reveal key={b.label} delay={i * 0.1} className="relative overflow-hidden rounded-[2rem] glass p-8 md:p-12">
              <div aria-hidden="true" className="absolute -top-32 -right-32 size-96 rounded-full glow-violet opacity-40" />
              <h2 className="relative text-xs font-semibold tracking-[0.2em] text-muted uppercase">{b.label}</h2>
              <p className="relative mt-5 font-display text-2xl leading-snug font-semibold md:text-3xl">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <Section id="timeline" eyebrow="Timeline" title="The journey so far.">
        <ol className="relative border-l border-line pl-8 md:ml-4 md:pl-12">
          {timeline.map((t, i) => (
            <Reveal as="li" key={t.title} delay={i * 0.06} className="relative pb-12 last:pb-0">
              <span aria-hidden="true" className="absolute top-1.5 -left-[calc(2rem+7px)] size-3.5 rounded-full bg-accent ring-4 ring-bg md:-left-[calc(3rem+7px)]" />
              <p className="font-display text-sm font-bold text-gradient">{t.year}</p>
              <h3 className="mt-2 text-xl font-bold md:text-2xl">{t.title}</h3>
              <p className="mt-2 max-w-2xl text-muted">{t.description}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <StatsBand />

      {/* Values preview */}
      <Section
        id="values"
        eyebrow="What we stand for"
        title="Values that shape every frame."
        action={
          <ButtonLink href="/about/values" variant="secondary">
            Values &amp; culture <Icon name="arrowRight" size={18} />
          </ButtonLink>
        }
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.slice(0, 3).map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 0.08} className="rounded-3xl glass p-7">
              <h3 className="text-lg font-bold">{v.title}</h3>
              <p className="mt-3 text-sm text-muted">{v.description}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <FinalCta />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import {
  audiences,
  clientLogos,
  cofounders,
  finalCta,
  services,
  site,
  stats,
  steps,
  testimonials,
} from "@/data/site";
import { featuredWork, whatsappHref } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { Icon, serviceIcon } from "@/components/ui/Icon";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { WorkCard } from "@/components/work/WorkCard";

/* 2 ─ Trusted by */
export function TrustedBy() {
  if (clientLogos.length === 0) return null;
  return (
    <section aria-label="Trusted by" className="cv-auto border-y border-line py-10 [contain-intrinsic-size:auto_200px]">
      <p className="mb-8 px-5 text-center text-xs font-semibold tracking-[0.25em] text-muted uppercase">
        Trusted by brands, studios, creators &amp; schools
      </p>
      <Marquee logos={clientLogos} />
    </section>
  );
}

/* 3 ─ Selected work */
export function SelectedWork() {
  return (
    <Section
      id="selected-work"
      eyebrow="Selected work"
      title={
        <>
          Real results from <span className="text-gradient">unreal</span> ideas.
        </>
      }
      action={
        <ButtonLink href="/work" variant="secondary">
          View all work <Icon name="arrowRight" size={18} />
        </ButtonLink>
      }
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredWork.map((item, i) => (
          <Reveal as="li" key={item.slug} delay={(i % 3) * 0.08} className="flex">
            <WorkCard item={item} className="w-full" />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

/* 4 ─ What we do */
export function WhatWeDo() {
  return (
    <Section
      id="what-we-do"
      eyebrow="What we do"
      title="Five ways we make your brand impossible to ignore."
      intro="From a single reel to a full campaign and the website behind it, every service is built around AI speed and human taste."
    >
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {services.map((s, i) => (
          <Reveal
            as="li"
            key={s.id}
            delay={(i % 3) * 0.08}
            className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}
          >
            <Link
              href={`/services#${s.id}`}
              className="group glow-border relative flex h-full flex-col rounded-3xl glass p-7 transition-transform duration-300 hover:-translate-y-1 md:p-8"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-accent text-[#07070c]">
                <Icon name={serviceIcon[s.id]} size={22} />
              </span>
              <h3 className="mt-6 text-xl font-bold md:text-2xl">{s.title}</h3>
              <p className="mt-3 flex-1 text-muted">{s.summary}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                Explore {s.shortTitle}
                <Icon name="arrowRight" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

/* 5 ─ Stats */
export function StatsBand() {
  return (
    <section aria-label="UPÉ in numbers" className="cv-auto relative py-6 [contain-intrinsic-size:auto_400px]">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-line">
          <div aria-hidden="true" className="absolute inset-0 bg-accent opacity-[0.12]" />
          <dl className="relative grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse gap-2 p-8 text-center md:p-10">
                <dt className="text-sm text-muted">{s.label}</dt>
                <dd className="font-display text-4xl font-bold md:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* 6 ─ Who we help */
export function WhoWeHelp() {
  return (
    <Section
      id="who-we-help"
      eyebrow="Who we help"
      title="Built for people with big ideas and real deadlines."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((a, i) => (
          <Reveal as="li" key={a.title} delay={i * 0.08} className="glow-border relative rounded-3xl glass p-7">
            <Icon name={a.icon} size={28} className="text-cyan light:text-[#0e7490]" />
            <h3 className="mt-5 text-lg font-bold">{a.title}</h3>
            <p className="mt-3 text-sm text-muted">{a.pitch}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

/* 7 ─ How we work */
export function HowWeWork() {
  return (
    <Section
      id="how-we-work"
      eyebrow="How we work"
      title="From brief to final cut in four clear steps."
      intro="No black boxes. You'll always know what's happening, what's next and when it lands."
    >
      <div className="relative">
      <div aria-hidden="true" className="absolute top-8 right-[12%] left-[12%] hidden h-px bg-accent opacity-50 lg:block" />
      <ol className="relative grid gap-10 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 0.1} className="relative">
            <span className="relative z-10 grid size-16 place-items-center rounded-full border border-line bg-bg font-display text-lg font-bold">
              <span className="text-gradient">0{i + 1}</span>
            </span>
            <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
            <p className="mt-3 text-muted">{step.description}</p>
          </Reveal>
        ))}
      </ol>
      </div>
    </Section>
  );
}

/* 8 ─ Co-founders spotlight */
export function TeamSpotlight() {
  return (
    <Section
      id="cofounders"
      eyebrow="Meet the co-founders"
      title={
        <>
          The minds behind <span className="text-gradient">UPÉ.</span>
        </>
      }
      intro="Two co-founders, one obsession: making world-class creative production possible for every brand, creator and institution."
      action={
        <ButtonLink href="/about/leadership" variant="secondary">
          Meet the team <Icon name="arrowRight" size={18} />
        </ButtonLink>
      }
    >
      <ul className="grid gap-6 lg:grid-cols-2">
        {cofounders.map((person, i) => {
          const points = person.expertise?.map((e) => e.title) ?? person.highlights;
          return (
            <Reveal as="li" key={person.role} delay={i * 0.1} className="flex lg:row-span-3 lg:grid lg:grid-rows-subgrid">
              {/* grid areas: portrait beside name on phones, beside name + bio from sm up */}
              <article className="group glow-border relative grid w-full grid-cols-[6rem_minmax(0,1fr)] grid-rows-[auto_1fr_auto] gap-x-5 gap-y-5 rounded-[2rem] glass p-6 [grid-template-areas:'photo_head'_'bio_bio'_'list_list'] sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-x-7 sm:[grid-template-areas:'photo_head'_'photo_bio'_'list_list'] md:p-8 lg:row-span-3 lg:grid-cols-[7rem_minmax(0,1fr)] lg:grid-rows-subgrid xl:grid-cols-[10rem_minmax(0,1fr)]">
                <div className="relative aspect-[4/5] self-start overflow-hidden rounded-2xl border border-line [grid-area:photo]">
                  <Image
                    src={person.photo.src}
                    alt={person.photo.alt}
                    fill
                    sizes="(min-width: 1280px) 10rem, (min-width: 1024px) 7rem, (min-width: 640px) 10rem, 6rem"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="self-end [grid-area:head] sm:self-start">
                  <h3 className="text-xl font-bold [overflow-wrap:anywhere] sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">{person.name}</h3>
                  <p className="mt-1 font-semibold text-balance text-gradient">{person.role}</p>
                </div>
                <p className="text-muted [grid-area:bio]">{person.bio}</p>
                {points && (
                  <ul className="grid content-start gap-2.5 border-t border-line pt-5 text-sm [grid-area:list]">
                    {points.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <Icon name="check" size={18} className="mt-0.5 shrink-0 text-cyan light:text-[#0e7490]" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}

/* 9 ─ Testimonials */
export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <Section id="testimonials" eyebrow="Kind words" title="What our clients say.">
      <ul className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal as="li" key={t.role} delay={i * 0.08}>
            <figure className="flex h-full flex-col rounded-3xl glass p-8">
              <Icon name="quote" size={32} className="text-violet" />
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed">
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-8 border-t border-line pt-5">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

/* 10 ─ Final CTA */
export function FinalCta() {
  if (!site.features.contact) return null;
  return (
    <section aria-labelledby="cta-title" className="cv-auto py-20 md:py-28 [contain-intrinsic-size:auto_700px]">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-line px-6 py-16 text-center md:px-16 md:py-24">
          <div aria-hidden="true" className="absolute inset-0 bg-accent opacity-[0.16]" />
          <div aria-hidden="true" className="glow-orb glow-violet absolute -top-56 left-1/2 size-[44rem] -translate-x-1/2 rounded-full opacity-50" />
          <div className="relative">
            <h2 id="cta-title" className="mx-auto max-w-3xl text-4xl font-bold md:text-6xl">
              {finalCta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-fg/80">{finalCta.text}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact" size="lg">
                Let&apos;s talk <Icon name="arrowRight" size={18} />
              </ButtonLink>
              <ButtonLink href={whatsappHref} external variant="whatsapp" size="lg">
                <Icon name="whatsapp" size={20} /> Chat on WhatsApp
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

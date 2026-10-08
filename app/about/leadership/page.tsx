import Image from "next/image";
import { cofounders, leadership, site, team } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { AboutNav } from "@/components/about/AboutNav";
import { ButtonLink, buttonClasses } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = pageMetadata({
  title: "Leadership Team",
  description:
    "Meet the leadership at UPÉ Synthetic Limited: the co-founders and creative team pioneering AI ad films, music videos, voiceovers and synthetic media.",
  path: "/about/leadership",
});

// the co-founder whose email and LinkedIn power the "Work with us" block
const contact =
  cofounders.find((c) => c.email && c.name === leadership.workWithUs.contactName) ?? cofounders.find((c) => c.email);

export default function LeadershipPage() {
  const { creativeTeam, workWithUs } = leadership;
  return (
    <>
      <PageHero
        eyebrow="Leadership team"
        title={
          <>
            Meet the leadership at <span className="text-gradient">UPÉ Synthetic Limited.</span>
          </>
        }
        intro={leadership.intro}
      >
        <AboutNav current="/about/leadership" />
      </PageHero>

      {/* Co-founders */}
      <section aria-labelledby="cofounders-title" className="py-12 md:py-16">
        <div className="container-x">
          <h2 id="cofounders-title" className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Co-founders
          </h2>
          <ul className="mt-10 grid gap-6 lg:grid-cols-2">
            {cofounders.map((person) => (
              // side by side from lg: subgrid rows keep photos, names, content and buttons level across both cards
              <Reveal as="li" key={person.role} className="flex lg:row-span-4 lg:grid lg:grid-rows-subgrid">
                <article className="flex w-full flex-col gap-6 rounded-[2rem] glass p-6 md:p-8 lg:row-span-4 lg:grid lg:grid-rows-subgrid">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line">
                    <Image
                      src={person.photo.src}
                      alt={person.photo.alt}
                      fill
                      sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, 90vw"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-balance text-gradient">{person.role}</p>
                    <h3 className="mt-2 text-2xl font-bold [overflow-wrap:anywhere] md:text-4xl lg:text-3xl xl:text-4xl">
                      {person.name}
                    </h3>
                  </div>

                  <div>
                    {person.profile ? (
                      <div className="space-y-4 text-lg text-muted">
                        {person.profile.map((para) => (
                          <p key={para}>{para}</p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-lg text-muted">{person.bio}</p>
                    )}

                    {person.expertise ? (
                      <>
                        <h4 className="mt-8 font-sans text-xs font-semibold tracking-[0.2em] text-muted uppercase">Core expertise</h4>
                        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                          {person.expertise.map((e) => (
                            <li key={e.title} className="rounded-2xl border border-line p-5">
                              <p className="flex items-start gap-2.5 font-semibold">
                                <Icon name="check" size={18} className="mt-0.5 shrink-0 text-cyan light:text-[#0e7490]" />
                                {e.title}
                              </p>
                              <p className="mt-2 text-sm text-muted">{e.description}</p>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      person.highlights && (
                        <ul className="mt-8 space-y-3">
                          {person.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-3">
                              <Icon name="check" size={18} className="mt-1 shrink-0 text-cyan light:text-[#0e7490]" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )
                    )}
                  </div>

                  {/* always rendered so both cards keep the same row structure */}
                  <div className="lg:self-end">
                    {(person.links || person.email) && (
                      <ul className="flex flex-wrap gap-3">
                        {person.links?.map((l) => (
                          <li key={l.href}>
                            <a href={l.href} target="_blank" rel="noopener noreferrer" className={buttonClasses("secondary", "sm")}>
                              {l.label} <Icon name="arrowUpRight" size={14} />
                              <span className="sr-only">: {person.name} (opens in a new tab)</span>
                            </a>
                          </li>
                        ))}
                        {person.email && (
                          <li>
                            <a href={`mailto:${person.email}`} className={buttonClasses("secondary", "sm")}>
                              <Icon name="mail" size={16} /> Email
                              <span className="sr-only"> {person.name}</span>
                            </a>
                          </li>
                        )}
                      </ul>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Creative team */}
      <section aria-labelledby="creative-team-title" className="cv-auto py-12 md:py-16">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <h2 id="creative-team-title" className="text-3xl font-bold sm:text-4xl md:text-5xl">
              {creativeTeam.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-muted">{creativeTeam.intro}</p>
          </Reveal>
          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {creativeTeam.capabilities.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 0.08} className="glow-border relative rounded-3xl glass p-7">
                <span className="grid size-12 place-items-center rounded-2xl bg-accent text-[#07070c]">
                  <Icon name={c.icon} size={22} />
                </span>
                <h3 className="mt-6 text-xl font-bold">{c.title}</h3>
                <p className="mt-3 text-muted">{c.description}</p>
              </Reveal>
            ))}
          </ul>

          {/* hidden until members are added to `team` in data/site.ts */}
          {team.length > 0 && (
            <>
              <h3 className="mt-16 text-2xl font-bold md:text-3xl">Core team</h3>
              <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {team.map((member, i) => (
                  <Reveal as="li" key={member.name + member.role} delay={(i % 4) * 0.08}>
                    <article className="group glow-border relative flex h-full flex-col overflow-hidden rounded-3xl glass">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <Image
                          src={member.photo.src}
                          alt={member.photo.alt}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1 p-6">
                        <h4 className="text-lg font-bold">{member.name}</h4>
                        <p className="mt-1 text-sm font-semibold text-gradient">{member.role}</p>
                        <p className="mt-3 text-sm text-muted">{member.bio}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      {/* Work with us */}
      {site.features.contact && (
        <section aria-labelledby="work-with-us-title" className="cv-auto py-20 md:py-28 [contain-intrinsic-size:auto_700px]">
          <div className="container-x">
            <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-line px-6 py-16 text-center md:px-16 md:py-24">
              <div aria-hidden="true" className="absolute inset-0 bg-accent opacity-[0.16]" />
              <div aria-hidden="true" className="glow-orb glow-violet absolute -top-56 left-1/2 size-[44rem] -translate-x-1/2 rounded-full opacity-50" />
              <div className="relative">
                <h2 id="work-with-us-title" className="mx-auto max-w-3xl text-4xl font-bold md:text-6xl">
                  {workWithUs.title}
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-fg/80">{workWithUs.text}</p>
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                  {contact?.email && (
                    <a href={`mailto:${contact.email}`} className={buttonClasses("primary", "lg")}>
                      <Icon name="mail" size={18} /> Email {contact.name.split(" ")[0]}
                    </a>
                  )}
                  {contact?.links?.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={buttonClasses("secondary", "lg")}>
                      Connect on {l.label} <Icon name="arrowUpRight" size={16} />
                      <span className="sr-only">: {contact.name} (opens in a new tab)</span>
                    </a>
                  ))}
                  <ButtonLink href="/contact" variant="secondary" size="lg">
                    Send a brief <Icon name="arrowRight" size={18} />
                  </ButtonLink>
                </div>
                {contact?.email && (
                  <p className="mt-6 text-sm text-muted">
                    Or write to{" "}
                    <a
                      href={`mailto:${contact.email}`}
                      className="inline-block font-semibold [overflow-wrap:anywhere] text-fg underline-offset-4 hover:underline"
                    >
                      {contact.email.split("@")[0]}
                      <wbr />@{contact.email.split("@")[1]}
                    </a>
                  </p>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}

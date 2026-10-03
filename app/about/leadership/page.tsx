import Image from "next/image";
import { cofounders, team } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { AboutNav } from "@/components/about/AboutNav";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/home/HomeSections";

export const metadata = pageMetadata({
  title: "Leadership Team",
  description: "Meet the filmmakers, designers, musicians and engineers leading UPÉ Synthetic Limited.",
  path: "/about/leadership",
});

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership team"
        title={
          <>
            The people behind <span className="text-gradient">the pixels.</span>
          </>
        }
        intro="A small senior team of storytellers and technologists. You'll work directly with us, not a chain of account managers."
      >
        <AboutNav current="/about/leadership" />
      </PageHero>

      <section aria-labelledby="cofounders-title" className="py-12 md:py-16">
        <div className="container-x">
          <h2 id="cofounders-title" className="text-3xl font-bold md:text-4xl">
            Co-founders
          </h2>
          <ul className="mt-10 space-y-6">
            {cofounders.map((person, i) => (
              <Reveal
                as="li"
                key={person.role}
                className="grid items-center gap-10 overflow-hidden rounded-[2rem] glass p-6 md:p-10 lg:grid-cols-12"
              >
                {/* photos alternate sides on large screens */}
                <div
                  className={cn(
                    "relative aspect-[4/5] overflow-hidden rounded-3xl border border-line lg:col-span-5",
                    i % 2 === 1 && "lg:order-2",
                  )}
                >
                  <Image src={person.photo.src} alt={person.photo.alt} fill sizes="(min-width: 1024px) 35vw, 90vw" className="object-cover" />
                </div>
                <div className="lg:col-span-7">
                  <p className="text-sm font-semibold text-gradient">{person.role}</p>
                  <h3 className="mt-2 text-3xl font-bold md:text-5xl">{person.name}</h3>
                  <p className="mt-6 text-lg text-muted">{person.bio}</p>
                  {person.highlights && (
                    <ul className="mt-8 space-y-3">
                      {person.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3">
                          <Icon name="check" size={18} className="mt-1 shrink-0 text-cyan light:text-[#0e7490]" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  {person.links && (
                    <ul className="mt-8 flex gap-4">
                      {person.links.map((l) => (
                        <li key={l.href}>
                          <a
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-semibold hover:text-cyan"
                          >
                            {l.label} <Icon name="arrowUpRight" size={14} />
                            <span className="sr-only"> profile (opens in a new tab)</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="team-title" className="py-12 md:py-16">
        <div className="container-x">
          <h2 id="team-title" className="text-3xl font-bold md:text-4xl">Core team</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal as="li" key={member.role} delay={(i % 4) * 0.08}>
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
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-gradient">{member.role}</p>
                    <p className="mt-3 text-sm text-muted">{member.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

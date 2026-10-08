import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { work } from "@/data/site";
import { categoryLabel } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Section";
import { VideoEmbed } from "@/components/work/VideoEmbed";
import { FinalCta } from "@/components/home/HomeSections";

export const dynamicParams = false;

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const item = work.find((w) => w.slug === slug);
  if (!item) return {};
  return pageMetadata({
    title: `${item.title}: ${categoryLabel(item.category)} for ${item.client}`,
    description: item.summary,
    path: `/work/${item.slug}`,
  });
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const index = work.findIndex((w) => w.slug === slug);
  if (index === -1) notFound();
  const item = work[index];
  const next = work[(index + 1) % work.length];

  return (
    <article>
      {/* Hero */}
      <header className="relative overflow-hidden pt-32 pb-10 md:pt-40">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="glow-violet absolute -top-80 left-1/4 size-[48rem] rounded-full" style={{ opacity: "calc(var(--glow-opacity) * 0.6)" }} />
        </div>
        <div className="materialize container-x relative">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/work" className="hover:text-fg">Work</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-fg">{item.title}</li>
            </ol>
          </nav>
          <Eyebrow>{categoryLabel(item.category)} · {item.year}</Eyebrow>
          <h1 className="max-w-4xl text-4xl leading-[1.05] font-extrabold sm:text-5xl md:text-7xl">{item.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">{item.summary}</p>
          {item.liveUrl && (
            <ButtonLink href={item.liveUrl} external className="mt-8">
              {item.liveLabel ?? "Visit live site"} <Icon name="arrowUpRight" size={18} />
              <span className="sr-only"> (opens in a new tab)</span>
            </ButtonLink>
          )}
        </div>
        <div className="container-x relative mt-12">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-line md:aspect-[16/8]">
            <Image src={item.cover.src} alt={item.cover.alt} fill fetchPriority="high" sizes="(min-width: 1280px) 80rem, 100vw" className="object-cover" />
          </div>
        </div>
      </header>

      {/* Overview */}
      <section aria-label="Project overview" className="py-12 md:py-16">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <dl className="grid grid-cols-2 gap-6 rounded-3xl glass p-7 lg:sticky lg:top-28 lg:grid-cols-1">
              <div>
                <dt className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Client</dt>
                <dd className="mt-1 font-semibold">{item.client}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Service</dt>
                <dd className="mt-1 font-semibold">
                  <Link href={`/services#${item.category}`} className="hover:text-cyan">{categoryLabel(item.category)}</Link>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Year</dt>
                <dd className="mt-1 font-semibold">{item.year}</dd>
              </div>
              {item.createdBy && (
                <div className="col-span-2 lg:col-span-1">
                  <dt className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Created by</dt>
                  <dd className="mt-1 font-semibold">{item.createdBy}</dd>
                </div>
              )}
              {item.liveUrl && (
                <div className="col-span-2 lg:col-span-1">
                  <dt className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">{item.videoEmbed ? "Watch" : "Live site"}</dt>
                  <dd className="mt-1 font-semibold">
                    <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 break-all hover:text-cyan">
                      {item.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      <Icon name="arrowUpRight" size={14} className="shrink-0" />
                    </a>
                  </dd>
                </div>
              )}
              <div className="col-span-2 lg:col-span-1">
                <dt className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Tools used</dt>
                <dd className="mt-3">
                  <ul className="flex flex-wrap gap-2">
                    {item.tools.map((t) => (
                      <li key={t} className="rounded-full border border-line px-3 py-1 text-sm">{t}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </aside>

          <div className="space-y-14 lg:col-span-8">
            <Reveal>
              <h2 className="text-2xl font-bold md:text-3xl">The challenge</h2>
              <p className="mt-4 text-lg text-muted">{item.challenge}</p>
            </Reveal>
            <Reveal>
              <h2 className="text-2xl font-bold md:text-3xl">Our approach</h2>
              <ol className="mt-6 space-y-4">
                {item.approach.map((step, i) => (
                  <li key={step} className="flex gap-5 rounded-2xl glass p-5">
                    <span className="font-display text-sm font-bold text-gradient">0{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal>
              <h2 className="text-2xl font-bold md:text-3xl">The result</h2>
              <p className="mt-4 text-lg text-muted">{item.resultSummary}</p>
              {item.results.length > 0 && (
              <dl className="mt-8 grid gap-4 sm:grid-cols-3">
                {item.results.map((r) => (
                  <div key={r.label} className="flex flex-col-reverse rounded-2xl border border-line p-6">
                    <dt className="mt-1 text-sm text-muted">{r.label}</dt>
                    <dd className="font-display text-3xl font-bold text-gradient">{r.value}</dd>
                  </div>
                ))}
              </dl>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it works (optional) */}
      {item.architecture && (
        <section aria-labelledby="architecture-title" className="cv-auto py-12 md:py-16">
          <div className="container-x">
            <h2 id="architecture-title" className="text-2xl font-bold md:text-3xl">
              How it works
            </h2>
            {/* table on larger screens */}
            <div className="mt-8 hidden overflow-hidden rounded-3xl glass md:block">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-line text-xs tracking-[0.18em] text-muted uppercase">
                  <tr>
                    <th scope="col" className="w-[22%] px-6 py-4 font-semibold">Phase</th>
                    <th scope="col" className="px-6 py-4 font-semibold">Methodology</th>
                    <th scope="col" className="px-6 py-4 font-semibold">Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {item.architecture.map((row, i) => (
                    <tr key={row.phase} className="align-top">
                      <th scope="row" className="px-6 py-5 font-semibold">
                        <span className="mr-3 font-display text-xs text-gradient">0{i + 1}</span>
                        {row.phase}
                      </th>
                      <td className="px-6 py-5 text-muted">{row.method}</td>
                      <td className="px-6 py-5 text-muted">{row.advantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* stacked cards on phones */}
            <ol className="mt-8 space-y-4 md:hidden">
              {item.architecture.map((row, i) => (
                <li key={row.phase} className="rounded-2xl glass p-5">
                  <h3 className="font-semibold">
                    <span className="mr-2 font-display text-xs text-gradient">0{i + 1}</span>
                    {row.phase}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{row.method}</p>
                  <p className="mt-2 text-sm">{row.advantage}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Gallery / video */}
      <section aria-labelledby="gallery-title" className="cv-auto py-12 md:py-16">
        <div className="container-x">
          <h2 id="gallery-title" className="text-2xl font-bold md:text-3xl">{item.videos?.length ? "The films" : item.gallery.length ? "Gallery" : item.videoVertical ? "Watch the Short" : "Watch the episode"}</h2>
          {item.videoEmbed && item.videoVertical && (
            <div className="mx-auto mt-8 w-full max-w-sm">
              <VideoEmbed src={item.videoEmbed} title={`${item.title}: ${item.client}`} poster={item.videoPoster ?? item.cover.src} vertical />
            </div>
          )}
          {item.videoEmbed && !item.videoVertical && (
            <div className="mt-8">
              <VideoEmbed src={item.videoEmbed} title={`${item.title}: ${item.client}`} poster={item.videoPoster ?? item.cover.src} />
            </div>
          )}
          {item.videos && item.videos.length > 0 && (
            <ul className="mt-8 grid gap-6 md:grid-cols-2">
              {item.videos.map((v) => (
                <Reveal as="li" key={v.embed}>
                  <VideoEmbed src={v.embed} title={`${item.title}: ${v.title}`} poster={v.poster} />
                  <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-bold">{v.title}</h3>
                    <p className="flex items-center gap-3 text-sm text-muted">
                      {v.duration && <span className="tabular-nums">{v.duration}</span>}
                      {v.link && (
                        <a href={v.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-fg hover:text-cyan">
                          Open <Icon name="arrowUpRight" size={14} />
                          <span className="sr-only"> {v.title} in a new tab</span>
                        </a>
                      )}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          )}
          {item.gallery.length > 0 && (
            <ul className="mt-8 grid gap-6 md:grid-cols-2">
              {item.gallery.map((g) => (
                <Reveal as="li" key={g.src}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-line">
                    <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                  </div>
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Next project */}
      <nav aria-label="Next project" className="cv-auto py-12 [contain-intrinsic-size:auto_400px]">
        <div className="container-x">
          <Link
            href={`/work/${next.slug}`}
            className="group glow-border relative grid items-center gap-6 overflow-hidden rounded-[2rem] glass p-6 md:grid-cols-[1fr_auto] md:p-10"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Next project</p>
              <p className="mt-3 font-display text-3xl font-bold md:text-5xl">{next.title}</p>
              <p className="mt-2 text-muted">{categoryLabel(next.category)} · {next.client}</p>
            </div>
            <span className="grid size-16 place-items-center rounded-full bg-accent text-[#07070c] transition-transform duration-300 group-hover:translate-x-1">
              <Icon name="arrowRight" size={24} />
            </span>
          </Link>
          <div className="mt-8 text-center">
            <ButtonLink href="/work" variant="ghost">
              <Icon name="arrowRight" size={16} className="rotate-180" /> Back to all work
            </ButtonLink>
          </div>
        </div>
      </nav>

      <FinalCta />
    </article>
  );
}

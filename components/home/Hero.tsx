import Image from "next/image";
import { hero, site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { MotionToggle } from "@/components/layout/MotionToggle";

/** "Reality → synthetic" visual: a real frame is swept into its AI-styled twin by a glowing scan line. */
function HeroMorph() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-line shadow-[0_40px_120px_-30px_rgba(139,92,246,0.55)]">
      <Image
        src={hero.realImage.src}
        alt={hero.realImage.alt}
        fill
        fetchPriority="high"
        // small, above-the-fold: decode in the first frame instead of a later one (LCP)
        decoding="sync"
        sizes="(min-width: 1024px) 40vw, 90vw"
        className="object-cover"
      />
      {/* sliding window + counter-sliding content = an in-place wipe, all on the compositor */}
      <div className="morph-window absolute inset-0 overflow-hidden">
        <div className="morph-counter absolute inset-0">
          <Image
            src={hero.syntheticImage.src}
            alt={hero.syntheticImage.alt}
            fill
            loading="eager"
            decoding="sync"
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
      {/* scan line rides the leading edge of the window */}
      <div aria-hidden="true" className="morph-scan pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-[3px] -translate-x-1/2 bg-cyan shadow-[0_0_24px_6px_rgba(34,211,238,0.75)]" />
      </div>
      <MotionToggle
        compact
        className="absolute top-4 right-4 grid size-9 place-items-center rounded-full bg-black/55 text-white/85 backdrop-blur hover:text-white"
      />
      <div aria-hidden="true" className="absolute inset-x-4 bottom-4 flex justify-between text-[0.65rem] font-semibold tracking-[0.25em] uppercase">
        <span className="rounded-full bg-black/55 px-3 py-1.5 text-white/85 backdrop-blur">Reality</span>
        <span className="rounded-full bg-black/55 px-3 py-1.5 text-cyan backdrop-blur">Synthetic</span>
      </div>
    </div>
  );
}

function HeroVideo() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-line">
      <video
        className="absolute inset-0 size-full object-cover"
        src={hero.video}
        poster={hero.videoPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="UPÉ showreel"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* ambient glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="glow-orb glow-violet absolute -top-64 -left-64 size-[52rem] rounded-full" style={{ opacity: "var(--glow-opacity)" }} />
        <div
          className="glow-orb glow-cyan absolute top-1/4 -right-56 size-[44rem] rounded-full [animation-delay:-7s]"
          style={{ opacity: "calc(var(--glow-opacity) * 0.6)" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)] opacity-40" />
      </div>

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="materialize lg:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 backdrop-blur-md text-xs font-semibold tracking-[0.2em] text-muted uppercase">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan opacity-60 [animation-iteration-count:3] motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-cyan" />
            </span>
            {hero.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-[clamp(2.6rem,8vw,6.25rem)] leading-[0.98] font-extrabold tracking-[-0.04em]"
          >
            Create <span className="text-gradient">Beyond</span>{" "}
            <br />
            Reality.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">{hero.subtext}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            {site.features.contact && (
              <ButtonLink href="/contact" size="lg">
                Let&apos;s talk <Icon name="arrowRight" size={18} className="transition-transform group-hover:translate-x-1" />
              </ButtonLink>
            )}
            <ButtonLink href="/work" variant="secondary" size="lg">
              <Icon name="play" size={14} /> See our work
            </ButtonLink>
          </div>
          <ul aria-label="What we make" className="mt-10 flex flex-wrap gap-2">
            {hero.chips.map((chip) => (
              <li key={chip} className="rounded-full border border-line px-4 py-1.5 text-sm text-muted">
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          {hero.video ? <HeroVideo /> : <HeroMorph />}
        </div>
      </div>
    </section>
  );
}

import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden px-5 pt-24 text-center">
      <div aria-hidden="true" className="glow-orb glow-violet absolute top-0 left-1/2 size-[44rem] -translate-x-1/2 rounded-full opacity-40" />
      <div className="relative">
        <p className="font-display text-8xl font-extrabold text-gradient md:text-9xl">404</p>
        <h1 className="mt-6 text-3xl font-bold md:text-4xl">This page went beyond reality.</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">
            Back home <Icon name="arrowRight" size={18} />
          </ButtonLink>
          <ButtonLink href="/work" variant="secondary">
            See our work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

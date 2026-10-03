import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { WorkFilter } from "@/components/work/WorkFilter";
import { FinalCta } from "@/components/home/HomeSections";

export const metadata = pageMetadata({
  title: "Work: AI Reels, Songs, Ad Films, Stories & Websites",
  description:
    "Case studies from UPÉ: AI ad films, AI reels, original AI songs, AI storytelling and websites for brands, studios, creators and schools.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Stories we&apos;ve taken <span className="text-gradient">beyond reality.</span>
          </>
        }
        intro="A selection of campaigns, songs, films and websites we've made with brands, studios, creators and schools."
      />
      <section aria-label="Projects" className="pb-8">
        <div className="container-x">
          <WorkFilter />
        </div>
      </section>
      <FinalCta />
    </>
  );
}

import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import {
  FinalCta,
  HowWeWork,
  SelectedWork,
  StatsBand,
  TeamSpotlight,
  Testimonials,
  TrustedBy,
  WhatWeDo,
  WhoWeHelp,
} from "@/components/home/HomeSections";

export const metadata = pageMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <SelectedWork />
      <WhatWeDo />
      <StatsBand />
      <WhoWeHelp />
      <HowWeWork />
      <TeamSpotlight />
      <Testimonials />
      <FinalCta />
    </>
  );
}

// Shapes for everything in data/site.ts. You normally won't need to edit this file.

export type Media = {
  src: string;
  alt: string;
};

export type ServiceId =
  | "ai-reels"
  | "ai-songs"
  | "ai-ad-films"
  | "ai-storytelling"
  | "websites";

export type Service = {
  id: ServiceId;
  /** Full name, used on cards and service blocks */
  title: string;
  /** Short name, used on filter tabs and chips */
  shortTitle: string;
  /** One or two lines for the home page card */
  summary: string;
  /** Longer intro shown on /services */
  intro: string;
  whatYouGet: string[];
  useCases: string[];
  deliverables: string[];
  turnaround: string;
  cta: string;
};

export type WorkItem = {
  slug: string;
  title: string;
  client: string;
  category: ServiceId;
  year: string;
  /** Shows on the home page "Selected Work" grid (first 6 featured items) */
  featured: boolean;
  summary: string;
  cover: Media;
  /** Optional short muted .mp4 that plays when a card is hovered */
  previewVideo?: string;
  challenge: string;
  approach: string[];
  tools: string[];
  results: { value: string; label: string }[];
  resultSummary: string;
  gallery: Media[];
  /** Optional link to the live product/site, shown as a "Visit live site" button */
  liveUrl?: string;
  /** Optional "how it works" table shown on the case-study page */
  architecture?: { phase: string; method: string; advantage: string }[];
  /** Optional YouTube/Vimeo embed URL, e.g. https://www.youtube-nocookie.com/embed/VIDEO_ID */
  videoEmbed?: string;
};

export type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

export type Audience = {
  title: string;
  pitch: string;
  icon: "briefcase" | "clapper" | "sparkle" | "school";
};

export type Step = {
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  /** Optional longer profile (paragraphs) shown on the Leadership page instead of `bio` */
  profile?: string[];
  photo: Media;
  /** Short points shown on cards (used when `expertise` is not set) */
  highlights?: string[];
  /** Detailed expertise: titles appear on the home page card, full entries on the Leadership page */
  expertise?: { title: string; description: string }[];
  /** Public contact email, shown on the Leadership page */
  email?: string;
  links?: { label: string; href: string }[];
};

export type Capability = {
  title: string;
  description: string;
  icon: "music" | "mic" | "bolt";
};

export type Faq = {
  question: string;
  answer: string;
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

export type Value = {
  title: string;
  description: string;
};

export type ClientLogo = Media & {
  width: number;
  height: number;
};

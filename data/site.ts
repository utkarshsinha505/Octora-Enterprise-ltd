/**
 * ─────────────────────────────────────────────────────────────
 *  UPÉ Synthetic Limited — all editable website content
 * ─────────────────────────────────────────────────────────────
 *  Edit text, services, work, stats, testimonials and team here.
 *  Components read from this file, so you never need to touch them
 *  for a content change.
 *
 *  Anything in [SQUARE BRACKETS] and every item marked PLACEHOLDER
 *  must be replaced with real details before launch.
 *
 *  Media lives in /public/media. Drop a new file there and point the
 *  matching `src` at it (e.g. "/media/work/my-project/cover.jpg").
 */
import type {
  Audience,
  Capability,
  ClientLogo,
  ComingSoon,
  Faq,
  Service,
  Stat,
  Step,
  TeamMember,
  Testimonial,
  TimelineEntry,
  Value,
  WorkItem,
} from "./types";

/* ───────────────────────── Company ───────────────────────── */

export const site = {
  name: "UPÉ Synthetic Limited",
  shortName: "UPÉ",
  tagline: "Create Beyond Reality",
  description:
    "UPÉ is an AI-first creative studio making AI reels, AI songs, AI ad films and AI storytelling, plus websites that convert, for brands, studios, creators and schools.",
  /** Production URL. Set NEXT_PUBLIC_SITE_URL in Vercel, or edit the fallback. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://upe-synthetic.vercel.app",
  city: "[City]",
  country: "[Country]",
  foundedYear: 2026,
  contact: {
    // PLACEHOLDER contact details: replace all four.
    phone: "+00 00000 00000",
    email: "hello@yourdomain.com",
    /** Digits only, with country code, no "+" or spaces. Used for wa.me links. */
    whatsapp: "000000000000",
    whatsappMessage: "Hi UPÉ! I'd like to talk about a project.",
    address: "[Street address], [City], [Country]",
    /** Leave empty to auto-generate a Google Maps search link from the address. */
    mapUrl: "",
  },
  /**
   * Feature switches. `contact: false` temporarily hides every contact touchpoint:
   * the Contact page and form, "Let's talk" buttons, footer "Get in touch", WhatsApp button and contact CTAs.
   * Set it back to `true` to restore them all.
   */
  features: {
    contact: false,
  },
  /**
   * Social profiles, shown in the footer and added to the site's structured data.
   * Empty for now; add real profile URLs, e.g. { label: "Instagram", href: "https://instagram.com/yourhandle" }.
   */
  social: [] as { label: string; href: string }[],
};

/* ──────────────────────── Navigation ─────────────────────── */

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about", description: "How UPÉ started and where it's going" },
      { label: "Leadership Team", href: "/about/leadership", description: "The people behind the pixels" },
      { label: "Values & Culture", href: "/about/values", description: "What we stand for, and how we work" },
    ],
  },
  ...(site.features.contact ? [{ label: "Contact", href: "/contact" }] : []),
];

/* ─────────────────────────── Home ────────────────────────── */

export const hero = {
  eyebrow: "AI Creative Studio · Launched 2026",
  headline: "Create Beyond Reality.",
  subtext:
    "We turn ideas into AI reels, original AI songs, ad films and stories that feel impossible, and build the websites that bring them home.",
  chips: ["AI Reels/Shorts", "AI Songs", "AI Ad Films", "AI Storytelling", "Websites"],
  /**
   * Hero media. If `video` is set, a looping muted showreel plays.
   * Otherwise the "reality → synthetic" morph animates between the two images.
   */
  video: "" as string, // e.g. "/media/hero/showreel.mp4"
  videoPoster: "/media/hero/synthetic.webp",
  realImage: { src: "/media/hero/real.webp", alt: "A person in profile against a hazy sky, shot as a real photograph" },
  syntheticImage: {
    src: "/media/hero/synthetic.webp",
    alt: "The same portrait re-imagined by AI as a glowing neon figure over a digital horizon",
  },
};

// Client logos for the "Trusted by" marquee. The section stays hidden while this is empty.
// Add real clients here (with permission), e.g.
// { src: "/media/logos/your-client.svg", alt: "Client name", width: 260, height: 48 },
export const clientLogos: ClientLogo[] = [];

// Honest launch-stage numbers. Update as UPÉ grows (avoid years: values are formatted with commas).
export const stats: Stat[] = [
  { value: 5, label: "Creative services" },
  { value: 2, label: "Live projects" },
  { value: 2, label: "Languages in Truth Lens" },
  { value: 2, label: "Co-founders" },
];

export const audiences: Audience[] = [
  {
    title: "Brands & Businesses",
    pitch:
      "Scroll-stopping campaigns at a fraction of a traditional shoot's cost and time. Launch faster, test more ideas, and own a look nobody else has.",
    icon: "briefcase",
  },
  {
    title: "Studios & Production Houses",
    pitch:
      "Plug us into your pipeline for AI previs, impossible VFX shots, pitch films and de-ageing, so your crew can say yes to bigger ideas.",
    icon: "clapper",
  },
  {
    title: "Creators & Artists",
    pitch:
      "Music videos, visualisers, album art and original AI-assisted tracks that match your sound. Your vision, amplified, not replaced.",
    icon: "sparkle",
  },
  {
    title: "Schools & Institutes",
    pitch:
      "Admission films, school anthems, annual-day visuals and modern websites that make parents and students proud to belong.",
    icon: "school",
  },
];

export const steps: Step[] = [
  {
    title: "Brief",
    description:
      "A 30-minute call to understand your goal, audience, platforms and budget. You leave with a clear scope and timeline.",
  },
  {
    title: "Concept & Script",
    description:
      "We pitch 2–3 creative directions with moodboards, a script or lyrics, and a shot list, then lock the one you love.",
  },
  {
    title: "AI Production",
    description:
      "Our artists direct image, video, voice and music models, then composite, grade and edit every frame by hand.",
  },
  {
    title: "Review & Delivery",
    description:
      "Two structured revision rounds, then final masters in every format you need, ready to post, broadcast or ship.",
  },
];

// Client testimonials. The home "Kind words" section stays hidden while this is empty.
// Add only real, attributable quotes, e.g. { quote: "…", name: "Full Name", role: "Title, Company" }.
export const testimonials: Testimonial[] = [];

export const finalCta = {
  title: "Have a project in mind?",
  text: "We're newly launched and taking on our first projects. Tell us what you're imagining and we'll reply within one working day with ideas, a timeline and a clear quote.",
};

/* ───────────────────────── Services ──────────────────────── */

export const services: Service[] = [
  {
    id: "ai-reels",
    title: "AI Reels/Shorts",
    shortTitle: "AI Reels/Shorts",
    summary: "Vertical, scroll-stopping reels for Instagram, YouTube Shorts and TikTok, made in days, not weeks.",
    intro:
      "Short-form is where attention lives. We create AI-powered reels that hook in the first second, carry your brand look, and come in batches so you can post consistently and test what works.",
    whatYouGet: [
      "Hook-first concepts written for your audience",
      "AI visuals, motion and voiceover matched to your brand",
      "Captions, music and sound design included",
      "Platform-ready cuts in 9:16, 1:1 and 4:5",
    ],
    useCases: ["Product launches", "Festive and seasonal campaigns", "Creator collaborations", "Monthly content calendars"],
    deliverables: ["3, 6 or 12 reels per pack", "Thumbnails and cover frames", "Caption copy and hashtags", "Raw project files on request"],
    turnaround: "3–7 working days per pack",
    cta: "Plan my reels",
  },
  {
    id: "ai-songs",
    title: "AI Songs",
    shortTitle: "AI Songs",
    summary: "Original jingles, anthems and full tracks, written with you and produced with AI and human musicians.",
    intro:
      "A memorable sound is the fastest route to recall. We write lyrics, compose and produce original songs using AI music tools, refined by our in-house producers so every track is mixed, mastered and cleared for use.",
    whatYouGet: [
      "Original lyrics in the language(s) you need",
      "AI-assisted composition with human production",
      "Mixed and mastered audio, ready for release",
      "Optional lyric video or full music video",
    ],
    useCases: ["Brand jingles and sonic logos", "School and company anthems", "Artist singles and demos", "Event and campaign theme songs"],
    deliverables: ["Full track (WAV + MP3)", "30s and 15s ad cut-downs", "Instrumental and stems", "Lyric sheet and usage licence"],
    turnaround: "7–14 working days",
    cta: "Create my song",
  },
  {
    id: "ai-ad-films",
    title: "AI Ad Films",
    shortTitle: "AI Ad Films",
    summary: "Cinematic commercials without the location, crew or weather risk, from 15-second spots to hero films.",
    intro:
      "We produce broadcast-quality ad films with generative AI, from script and storyboard to final grade. Imagine any location, any era, any product shot, delivered on a timeline and budget traditional shoots can't match.",
    whatYouGet: [
      "Script, storyboard and visual treatment",
      "AI-generated scenes, characters and product shots",
      "Professional edit, colour grade and sound mix",
      "Voiceover in multiple languages",
    ],
    useCases: ["TV and OTT commercials", "Digital and YouTube pre-roll", "Product and app launches", "Brand films and manifestos"],
    deliverables: ["Hero film (30–90s)", "15s and 6s cut-downs", "Vertical and square versions", "Key visuals for print and social"],
    turnaround: "2–4 weeks",
    cta: "Brief an ad film",
  },
  {
    id: "ai-storytelling",
    title: "AI Storytelling",
    shortTitle: "AI Storytelling",
    summary: "Short films, brand stories, explainers and series where imagination is the only limit.",
    intro:
      "Every brand, founder and institution has a story worth telling. We turn yours into narrative films, animated explainers and episodic content, with consistent characters and worlds built with AI.",
    whatYouGet: [
      "Story development and screenplay",
      "Consistent AI characters and world design",
      "Narration, score and sound design",
      "Episodic formats for long-running series",
    ],
    useCases: ["Founder and origin stories", "Short films and festival entries", "Animated explainers", "Children's stories and education"],
    deliverables: ["Short film or episode (1–10 min)", "Trailer and teaser cuts", "Character and world sheets", "Subtitles in required languages"],
    turnaround: "3–6 weeks",
    cta: "Tell my story",
  },
  {
    id: "websites",
    title: "Website Design & Development",
    shortTitle: "Websites",
    summary: "Fast, beautiful websites that showcase your work and turn visitors into enquiries.",
    intro:
      "Your website is your always-on showroom. We design and build modern, mobile-first sites that load fast, rank well and are easy for you to update, with AI visuals that make them unmistakably yours.",
    whatYouGet: [
      "UX strategy, sitemap and copy guidance",
      "Custom design, no generic templates",
      "Next.js build optimised for speed and SEO",
      "Contact forms, WhatsApp and analytics set up",
    ],
    useCases: ["Business and brand sites", "School and institute websites", "Portfolio sites for creators", "Landing pages for campaigns"],
    deliverables: ["Responsive website (5–15 pages)", "Domain, hosting and SSL setup", "Basic on-page SEO", "Handover call and editing guide"],
    turnaround: "2–5 weeks",
    cta: "Start my website",
  },
];

export const serviceFaqs: Faq[] = [
  {
    question: "Is AI-generated content safe to use commercially?",
    answer:
      "Yes. We use commercially licensed AI tools, never imitate real people or artists without consent, and deliver every project with a usage licence. Where needed, we can also provide a breakdown of the tools used.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "It depends on length, complexity and turnaround. Reel packs start small enough for local businesses, while ad films and websites are quoted per scope. Share your budget range on the contact form and we'll suggest the best option within it.",
  },
  {
    question: "Will it look 'obviously AI'?",
    answer:
      "Not unless you want it to. Every frame is directed, curated and finished by human editors and colourists. AI is our camera, not our creative director.",
  },
  {
    question: "Can you use our product, logo or people in the visuals?",
    answer:
      "Absolutely. Send us product photos, brand assets and, with consent, reference images of people. We'll integrate them accurately and keep your brand guidelines intact.",
  },
  {
    question: "How many revisions do I get?",
    answer:
      "Two structured revision rounds are included in every project. Extra rounds are available if your scope changes.",
  },
  {
    question: "Do you work with clients in other cities or countries?",
    answer:
      "Yes. We work remotely over video calls and WhatsApp, so we can collaborate with clients anywhere.",
  },
];

/* ─────────────────────────── Work ────────────────────────── */
// PLACEHOLDER case studies: replace with real projects. The first 6 with
// `featured: true` appear on the home page.

export const work: WorkItem[] = [
  {
    slug: "sapno-ka-bharat-2047",
    title: "Sapno ka Bharat 2047: Yuva Samvad",
    client: "BJP NRI Cell",
    category: "ai-ad-films",
    year: "2026",
    featured: true,
    createdBy: "Utkarsh Sinha, Co-founder & CEO",
    summary:
      "Four AI ad films for BJP NRI Cell's youth event Sapno ka Bharat 2047 – Yuva Samvad, conceived, created and edited single-handedly by our CEO, Utkarsh Sinha.",
    cover: {
      src: "/media/work/sapno-ka-bharat-2047/cover.webp",
      alt: "The Sapno ka Bharat 2047 stage, with the line 'Yuva ki baat, Yuva ke saath' on the screens",
    },
    challenge:
      "BJP NRI Cell needed a set of films for Sapno ka Bharat 2047 – Yuva Samvad, a dialogue with India's youth. The films had to bring the event's idea, \"Yuva ki baat, Yuva ke saath\", to life and show a confident, developed India of 2047 that young people could see themselves in. Utkarsh Sinha, UPÉ's co-founder and CEO, took the project on personally and saw it through on his own, from the first idea to the final cut.",
    approach: [
      "One story in four parts: Utkarsh shaped the series around a single idea, India's youth building the country of their dreams, and gave each film its own chapter of it.",
      "Film 1, Youth and enterprise: young professionals in a modern Indian city, startup teams at work, and a crowd forming the tricolour and the Ashoka Chakra.",
      "Film 2, Innovation and opportunity: students and mentors, designers, coders, engineers and farmers using drones, ending on a skyline of the future.",
      "Film 3, the event: the Sapno ka Bharat 2047 stage and its audience, intercut with science, the national flag and a rocket launch.",
      "Film 4, A developed Bharat: modern highways, robotics labs, manufacturing and smart farming, closing on the words \"Sapno ka Bharat\".",
      "Single-handed production: Utkarsh directed and generated every shot with AI himself, then edited, paced and finished all four Full HD films, 42 seconds to just over a minute each.",
    ],
    tools: ["AI video generation", "AI-generated visuals", "Video editing"],
    results: [
      { value: "4", label: "AI ad films for one event" },
      { value: "1", label: "creator, start to finish" },
      { value: "1080p", label: "Full HD at 60 fps" },
    ],
    resultSummary:
      "One person, four films. Utkarsh delivered all four AI ad films for Sapno ka Bharat 2047 – Yuva Samvad on his own, each telling a different part of the same story: India's youth building the country of their dreams. It's what UPÉ is built on: using AI so a small team can make work that once needed a full production crew.",
    videos: [
      {
        title: "Film 1 · Youth and enterprise",
        duration: "0:42",
        embed: "https://drive.google.com/file/d/1ROV__zia3OLDSFhOYO2C_wSdtNr7lpkL/preview",
        link: "https://drive.google.com/file/d/1ROV__zia3OLDSFhOYO2C_wSdtNr7lpkL/view",
        poster: "/media/work/sapno-ka-bharat-2047/film-1.webp",
      },
      {
        title: "Film 2 · Innovation and opportunity",
        duration: "1:02",
        embed: "https://drive.google.com/file/d/1PBCLJ21SwprDqABEA71O87HvnTzV1hzo/preview",
        link: "https://drive.google.com/file/d/1PBCLJ21SwprDqABEA71O87HvnTzV1hzo/view",
        poster: "/media/work/sapno-ka-bharat-2047/film-2.webp",
      },
      {
        title: "Film 3 · Yuva ki baat, Yuva ke saath",
        duration: "0:56",
        embed: "https://drive.google.com/file/d/1HkXfhEn-WtbZAxwGAB9-ePdcCzI_YE7C/preview",
        link: "https://drive.google.com/file/d/1HkXfhEn-WtbZAxwGAB9-ePdcCzI_YE7C/view",
        poster: "/media/work/sapno-ka-bharat-2047/film-3.webp",
      },
      {
        title: "Film 4 · A developed Bharat",
        duration: "0:56",
        embed: "https://drive.google.com/file/d/1jasMfgumYxaB7CKLw9iKBMrnwUBx4fUf/preview",
        link: "https://drive.google.com/file/d/1jasMfgumYxaB7CKLw9iKBMrnwUBx4fUf/view",
        poster: "/media/work/sapno-ka-bharat-2047/film-4.webp",
      },
    ],
    gallery: [],
  },
  {
    slug: "saturn-short",
    title: "Saturn Is Way More Insane Than You Think",
    client: "UPÉ FactVerse · YouTube Shorts",
    category: "ai-reels",
    year: "2026",
    featured: true,
    summary:
      "A 51-second AI-powered YouTube Short on Saturn's rings and its mysterious moon Titan, made for our science channel, UPÉ FactVerse.",
    cover: {
      src: "/media/work/saturn-short/cover.webp",
      alt: "A vertical frame from the Short: Saturn and its rings above Earth in deep space",
    },
    challenge:
      "Space facts are fascinating, but no camera can film Saturn up close. The challenge was to turn real astronomy into a vertical Short that stops the scroll in the first second, using AI to show what cameras can't, while being clear with viewers that the visuals are illustrative.",
    approach: [
      "Opened on a hook built for the feed: \"Did you know Saturn's rings aren't actually solid?\"",
      "Packed the facts into under a minute: what the rings are made of (countless pieces of ice, rock and dust), Saturn's day and incredibly fast rotation, and Titan, with the possibility of an ocean beneath its icy surface.",
      "Visualised every idea with AI-generated imagery and creative effects, framed for 9:16 vertical viewing.",
      "Published with a clear AI disclosure: the visuals are illustrative, not actual footage of Saturn or Titan.",
      "Closed on a question to the audience, \"Which Saturn fact surprised you the most?\", to start a conversation in the comments.",
    ],
    tools: ["AI-generated visuals", "Scriptwriting", "Video editing", "YouTube Shorts"],
    results: [
      { value: "0:51", label: "runtime" },
      { value: "9:16", label: "vertical, built for Shorts and Reels" },
    ],
    resultSummary:
      "The Short is live on UPÉ FactVerse, our channel of mind-blowing facts about space, science, technology and the universe, made for education and entertainment.",
    liveUrl: "https://youtube.com/shorts/3BA9QcaXymQ",
    liveLabel: "Watch on YouTube",
    videoEmbed: "https://www.youtube-nocookie.com/embed/3BA9QcaXymQ",
    videoPoster: "/media/work/saturn-short/poster.webp",
    videoVertical: true,
    gallery: [],
  },
  {
    slug: "the-rise-of-the-undertaker",
    title: "The Rise of The Undertaker",
    client: "UPÉ Biography · YouTube series",
    category: "ai-storytelling",
    year: "2026",
    featured: true,
    summary:
      "Episode 1 of our AI-powered biography series: the story of Mark Calaway before he became WWE's Deadman.",
    cover: {
      src: "/media/work/the-rise-of-the-undertaker/cover.webp",
      alt: "Artwork for The Undertaker, Episode 1: The Rise: a hooded figure in a graveyard under purple lightning",
    },
    challenge:
      "Biographies of legendary personalities usually need archive footage, location shoots and a production crew. We set out to tell The Undertaker's story as a cinematic, episodic series built with AI, starting from the man behind the character: Mark Calaway.",
    approach: [
      "Researched and scripted Episode 1, \"The Rise\", tracing Mark Calaway's early life and beginnings to the path that led him towards becoming The Undertaker.",
      "Created the series' dark, cinematic look with AI-generated visuals: graveyards, storms and the hooded Deadman.",
      "Edited the story into a tight four-minute episode built to keep viewers watching to the end.",
      "Launched it as the first chapter of a multi-episode biography series on the UPÉ Biography YouTube channel.",
    ],
    tools: ["AI-generated visuals", "Scriptwriting", "Video editing", "YouTube"],
    results: [
      { value: "Episode 1", label: "of the biography series, now streaming" },
      { value: "4:05", label: "runtime" },
    ],
    resultSummary:
      "Episode 1 is live on the UPÉ Biography YouTube channel and opens the series. The next chapters continue The Undertaker's journey of ambition, challenges, transformation and legacy.",
    liveUrl: "https://youtu.be/RL-dMasuX3M",
    liveLabel: "Watch on YouTube",
    videoEmbed: "https://www.youtube-nocookie.com/embed/RL-dMasuX3M",
    videoPoster: "/media/work/the-rise-of-the-undertaker/poster.webp",
    gallery: [],
  },
  {
    slug: "truth-lens",
    title: "Truth Lens",
    client: "UPÉ Synthetic · In-house product",
    category: "websites",
    year: "In-house",
    liveUrl: "https://truthlensai-five.vercel.app/",
    featured: true,
    summary:
      "A multi-model news verification engine that dissects a story segment by segment, natively in English and Hindi, and shows exactly why.",
    cover: {
      src: "/media/work/truth-lens/cover.webp",
      alt: "The Truth Lens app asking 'Is this news story fake or real?', with options to check a link, paste a story or upload a picture",
    },
    challenge:
      "Most fact-checking tools hand back a single black-box verdict for a whole article, get distracted by menus and ads, and translate Hindi stories into English first, losing the journalist's exact wording. We set out to build a verifier that is granular, transparent and native-language.",
    approach: [
      "Clean extraction: ingest the target URL and isolate the primary story text, discarding menus, advertisements and user comments.",
      "Native Hindi processing: evaluate Hindi stories with models trained on native Hindi news articles, with no intermediate English translation.",
      "Ensemble verification: convert the text into word-frequency features across 20,000 distinct words and run it through five independent models.",
      "Micro-segment analysis: re-evaluate the story in chunks of about thirty words to pinpoint which parts look fabricated.",
      "Transparent wording checks: flag slanted language (angry verbs, name-calling, unverified \"sources say\" claims) using visible English and Hindi word lists.",
    ],
    tools: ["Vercel edge hosting", "Five-model ensemble", "Native Hindi models", "20,000-word feature space", "Open English & Hindi word lists"],
    results: [
      { value: "44,000", label: "labelled news stories in the training set" },
      { value: "5", label: "independent models averaged per verdict" },
      { value: "~30 words", label: "segment size for pinpointing fabrication" },
    ],
    resultSummary:
      "Truth Lens goes beyond basic fact-checking: readers see which segments look made up and which words were flagged, in English or Hindi, and can read every match for themselves.",
    architecture: [
      {
        phase: "Clean Extraction",
        method: "Ingests target URLs and isolates the primary story text.",
        advantage: "Discards menus, advertisements and user comments so the models evaluate only the core journalism.",
      },
      {
        phase: "Native Hindi Processing",
        method: "Evaluates Hindi stories using models trained specifically on native Hindi news articles.",
        advantage:
          "Bypasses intermediate English translation completely, so vocabulary is weighed exactly as the journalist wrote it.",
      },
      {
        phase: "Ensemble Verification",
        method:
          "Converts text into numbers based on how often 20,000 distinct words appear, then processes it through five independent models.",
        advantage:
          "Mitigates individual model bias by averaging results from a training set of about 23,000 fabricated and 21,000 real news agency stories.",
      },
      {
        phase: "Micro-Segment Analysis",
        method: "Re-evaluates the story in precise chunks of about thirty words.",
        advantage:
          "Pinpoints localised fabricated segments, showing which parts look made up instead of a single broad verdict for the entire article.",
      },
      {
        phase: "Transparent Wording Checks",
        method:
          "Flags slanted language (angry verbs, name-calling, unverified \"sources say\" claims) using hard-coded word lists.",
        advantage:
          "Relies on separate, visible word lists for English and Hindi idioms rather than black-box AI, so users can read every match.",
      },
    ],
    gallery: [
      { src: "/media/work/truth-lens/still-1.webp", alt: "Truth Lens segment map: an article split into thirty-word segments, scored from verified to suspect" },
      { src: "/media/work/truth-lens/still-2.webp", alt: "Truth Lens ensemble: five independent model scores converging into one averaged verdict" },
    ],
  },

  {
    slug: "lotus-avio",
    title: "Lotus Avio Official Website",
    client: "Lotus Avio",
    category: "websites",
    year: "Ongoing",
    featured: true,
    liveUrl: "https://www.lotusavio.com/",
    summary:
      "The primary digital hub and storefront for a Patna-based audio and visual production studio, kept secure and up to date by UPÉ.",
    cover: {
      src: "/media/work/lotus-avio/cover-v2.webp",
      alt: "The Lotus Avio homepage: 'Sound and visuals that get your message heard', beside a photo of the recording studio",
    },
    challenge:
      "Lotus Avio needed one place to showcase a diverse range of capabilities, from voice-overs and audio engineering to comprehensive production work and AI voice datasets, with an experience that reflects the brand's creative vision and technical expertise, and that keeps pace with the company's growth.",
    approach: [
      "Strategic build: architected from the ground up by Utkarsh Sinha, blending technical execution with intimate brand knowledge.",
      "Expert direction: developed under the guidance and strategic mentorship of Saket Sinha, shaping the site's structure, user interface and overall digital strategy.",
      "Brand alignment: a custom digital environment tailored to highlight professional media and production portfolios.",
      "Sustainable management: long-term technical upkeep, security and content updates handled exclusively by UPÉ Synthetic Limited.",
    ],
    tools: ["Custom-built website", "Light & dark themes", "Security & maintenance", "Content updates by UPÉ"],
    results: [],
    resultSummary:
      "The site reliably reflects Lotus Avio's latest media projects, service offerings and milestones, with UPÉ keeping it dynamic, secure and up to date without interruption.",
    gallery: [
      { src: "/media/work/lotus-avio/still-1.webp", alt: "Lotus Avio homepage hero with the studio photo and service highlights" },
      { src: "/media/work/lotus-avio/still-2.webp", alt: "Lotus Avio 'Selected work' section showcasing recent campaigns" },
    ],
  },
  {
    slug: "sonal-sinha-portfolio",
    title: "Sonal Sinha Portfolio Website",
    client: "Sonal Sinha · Linguist, IIT Jodhpur",
    category: "websites",
    year: "2026",
    featured: false,
    liveUrl: "https://sonal-sinha.vercel.app/",
    summary:
      "A clean, multi-page academic portfolio for linguist and IIT Jodhpur PhD scholar Sonal Sinha, built with Next.js and live on Vercel for everyone to see.",
    cover: {
      src: "/media/work/sonal-sinha-portfolio/cover.webp",
      alt: "The Sonal Sinha portfolio homepage: her name, PhD in Linguistics at IIT Jodhpur, research interests and a portrait",
    },
    challenge:
      "Sonal's work spans formal syntax, annotated speech corpora, treebanks and field-data tools, alongside publications, conference talks and reviewing. She needed one professional home on the web where academics and collaborators could see all of it at a glance, dig into the details and download her résumé.",
    approach: [
      "Designed an editorial, academic look: serif headings, monospace labels and generous white space that let the research speak for itself.",
      "Built a homepage that sums up the record at a glance: research interests, highlights (GATE 2022 AIR 24, 4 publications, 7 conference talks, 3× ComputEL reviewer) and her latest talks and publication.",
      "Gave each part of the record its own page: Education, Experience, Research, Service, Skills and Contact.",
      "Added a \"Work by interest\" filter, so visitors can pick a research area and see the matching papers, talks and projects.",
      "Built it with Next.js and deployed it on Vercel, with a one-click résumé download, email, LinkedIn and GitHub links, and a layout that works on any phone.",
    ],
    tools: ["Next.js", "Vercel", "Responsive design"],
    results: [
      { value: "6", label: "section pages, plus the homepage" },
      { value: "Live", label: "on Vercel, open to everyone" },
    ],
    resultSummary:
      "The portfolio is live at sonal-sinha.vercel.app, giving Sonal a single professional link to share with universities, conferences and collaborators.",
    gallery: [
      {
        src: "/media/work/sonal-sinha-portfolio/still-1.webp",
        alt: "Portfolio highlights (GATE 2022 AIR 24, 4 publications, 7 conference talks) and the 'Around the site' section cards",
      },
      {
        src: "/media/work/sonal-sinha-portfolio/still-2.webp",
        alt: "Recent conference talks and the latest publication on the portfolio homepage",
      },
    ],
  },

];

// Categories with no published projects yet. Each shows a "Coming soon" card on the home page
// and on the Work page; the card disappears automatically once a project in that category is added.
export const comingSoon: ComingSoon[] = [
  {
    category: "ai-songs",
    title: "AI Songs",
    text: "Original songs, jingles and anthems made with AI and real musicians. Our first releases are coming soon.",
  },
];

/* ─────────────────────── About / Team ────────────────────── */

export const story = {
  intro:
    "UPÉ is a newly launched startup, founded in 2026 around a simple question: what if a small team could create visuals and sound that once needed a film crew, a recording studio and a six-figure budget?",
  paragraphs: [
    "Generative AI has reached the point where a single idea can become a film, a song or a story in days. Utkarsh Sinha and Pratham Srivastava started UPÉ Synthetic Limited in 2026 to put that power in the hands of brands, studios, creators and schools, with real craft and judgement behind every frame.",
    "We're at the beginning, and we're building in the open. Our first in-house product, Truth Lens, verifies news in English and Hindi, and our first client website, for Lotus Avio, is live and looked after by us. Alongside them, we offer AI reels, AI songs, AI ad films, AI storytelling and website design and development.",
    "The name says it all. UPÉ is about lifting ideas up and beyond what's practical to shoot. Our ambition is to become the studio people think of first when an idea feels impossible, so our clients can create beyond reality.",
  ],
  mission:
    "To make world-class creative production accessible to every brand, creator and institution, using AI responsibly to tell stories that move people.",
  vision: "A world where budget and logistics never stand between a great idea and the screen.",
};

export const timeline: TimelineEntry[] = [
  { year: "2026", title: "UPÉ is founded", description: "Utkarsh Sinha and Pratham Srivastava launch UPÉ Synthetic Limited as an AI-first creative studio." },
  { year: "2026", title: "Truth Lens goes live", description: "Our first in-house product: a news verifier that checks stories segment by segment, natively in English and Hindi." },
  { year: "2026", title: "First client website", description: "We take on the Lotus Avio official website, handling its maintenance, security and content updates." },
  { year: "Next", title: "Beyond reality", description: "We plan to grow our portfolio of AI reels, songs, ad films and stories, and build more products of our own." },
];

export const values: Value[] = [
  { title: "Imagination first", description: "Technology serves the idea, never the other way round. We start with the story and choose the tools after." },
  { title: "Responsible AI", description: "Licensed tools, consent for every likeness, and no imitation of real artists. Our clients can publish with confidence." },
  { title: "Craft in every frame", description: "Every output is directed, curated and finished by humans who care about colour, rhythm and detail." },
  { title: "Speed with clarity", description: "Fast turnarounds, clear quotes and honest timelines. No surprises, no jargon." },
  { title: "Always learning", description: "AI moves weekly, and so do we. We test new models constantly so clients get today's best, not last year's." },
  { title: "Partners, not vendors", description: "We celebrate your wins and treat your brand like our own, long after the final file is delivered." },
];

export const culture = {
  intro:
    "We're a young startup, launched in 2026, and a small, curious team at heart. We work remotely and in studio, ship fast, and share everything we learn as we grow.",
  points: [
    { title: "Friday playtime", description: "Every Friday afternoon is for experiments: new models, wild ideas, no client brief." },
    { title: "Credit where it's due", description: "Everyone who touches a project is named on it. Great work has many authors." },
    { title: "Learn out loud", description: "Weekly show-and-tell sessions where we teach each other the latest tools and techniques." },
    { title: "Balanced pace", description: "We move quickly, but we protect evenings and weekends. Rested minds make better art." },
  ],
};

// Co-founders: featured on the home page and at the top of /about/leadership.
export const cofounders: TeamMember[] = [
  {
    name: "Utkarsh Sinha",
    role: "Co-founder & CEO",
    bio: "Co-founder and CEO of UPÉ Synthetic Limited, leading the company's vision, AI-driven product development, creative technology and synthetic media initiatives. He works at the intersection of artificial intelligence, storytelling, visual media and digital experiences.",
    profile: [
      "Utkarsh Sinha is the co-founder and Chief Executive Officer of UPÉ Synthetic Limited, a synthetic media and AI-driven creative technology company focused on transforming ideas into engaging digital experiences.",
      "He leads the company's vision, product direction, creative strategy, technology initiatives and overall business development. His work focuses on combining artificial intelligence, storytelling, visual media and technology to create next-generation content and digital products.",
      "At UPÉ Synthetic Limited, he works across AI-generated reels, original AI music, advertising films, digital storytelling, creative technology and web experiences, bridging creativity with emerging AI capabilities.",
      "With a background in AI, machine learning, Python, software development and digital product creation, Utkarsh brings together technical thinking and creative execution to help shape the company's products, brand and long-term direction.",
    ],
    photo: { src: "/media/team/utkarsh-sinha-v2.webp", alt: "Portrait of Utkarsh Sinha, co-founder and CEO of UPÉ Synthetic Limited" },
    highlights: [
      "Leads vision, product direction and business development",
      "Drives AI-driven products and creative technology",
      "Background in AI, machine learning and software development",
    ],
    email: "utkarshsinha505@gmail.com",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/sinhautkarsh505/" }],
  },
  {
    name: "Pratham Srivastava",
    role: "Co-founder & Head of AI Media Generation",
    bio: "As the co-founder of UPÉ Synthetic Limited, Pratham Srivastava leads the company's creative and technical vision. With a specialized focus on commercial ad films and high-fidelity audio production, he bridges the gap between traditional filmmaking and cutting-edge synthetic media.",
    photo: {
      src: "/media/team/pratham-srivastava.webp",
      alt: "Portrait of Pratham Srivastava, co-founder of UPÉ Synthetic Limited",
    },
    expertise: [
      {
        title: "Advanced AI Generation",
        description:
          "Directing the creation of photorealistic visuals and dynamic media assets using state-of-the-art AI models.",
      },
      {
        title: "A/V Synchronization",
        description:
          "Pioneering seamless, frame-perfect synchronization of generated audio and video to ensure natural, broadcast-ready output.",
      },
      {
        title: "Commercial Ad Films",
        description: "Crafting compelling, AI-enhanced advertising campaigns tailored for modern brands.",
      },
      {
        title: "Specialized Audio Engineering",
        description: "Overseeing the production of crisp, high-impact audio tracks that elevate visual narratives.",
      },
    ],
    email: "pratham.srivastava2918@gmail.com",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/pratham-srivastava-80a145369" }],
  },
];

// Leadership page (/about/leadership) copy. The page also shows `cofounders` and the core `team`.
export const leadership = {
  intro:
    "At UPÉ Synthetic Limited, we are pioneering the next frontier of digital media. By merging human creativity with advanced artificial intelligence, our leadership team drives innovation in synthetic media generation, delivering hyper-realistic audio, video and advertising solutions for a rapidly evolving digital landscape.",
  creativeTeam: {
    title: "The UPÉ Synthetic Creative Team",
    intro:
      "Under Pratham's leadership, our specialized team of AI technicians, prompt engineers and media producers executes complex synthetic media projects from concept to final render.",
    capabilities: [
      {
        title: "AI Music Video Production",
        description:
          "We generate entirely synthetic, visually stunning music videos, matching complex auditory beats with dynamic, AI-rendered visual storytelling.",
        icon: "music",
      },
      {
        title: "Custom AI Voiceovers",
        description:
          "Our team produces studio-quality, highly emotive AI voiceovers across multiple languages and tonal styles, ideal for commercials, narration and localized dubbing.",
        icon: "mic",
      },
      {
        title: "Rapid Prototyping & Scaling",
        description:
          "Leveraging AI workflows to deliver high-volume, premium media assets faster than traditional production pipelines.",
        icon: "bolt",
      },
    ] satisfies Capability[],
  },
  workWithUs: {
    title: "Work with us",
    text: "Ready to redefine how your brand creates media? Reach out to discuss custom AI generation and production partnerships.",
    /** Co-founder whose email and LinkedIn the buttons use (must match a name in `cofounders`) */
    contactName: "Pratham Srivastava",
  },
};

// Core team: shown on /about/leadership under the co-founders. The "Core team" section stays hidden while this list is empty.
// To add someone, copy this example inside the brackets and fill it in (photo: a 4:5 portrait in public/media/team/):
//   {
//     name: "Full Name",
//     role: "Role / Title",
//     bio: "One or two sentences about what they do at UPÉ.",
//     photo: { src: "/media/team/full-name.webp", alt: "Portrait of Full Name, Role at UPÉ Synthetic Limited" },
//   },
export const team: TeamMember[] = [
  {
    name: "Shashwat Sinha",
    role: "Senior Advisor · Music",
    // short role description; replace with Shashwat's own bio when available
    bio: "Senior Advisor to UPÉ Synthetic Limited, bringing his expertise in music to guide the studio's AI songs, soundtracks and sound.",
    photo: { src: "/media/team/shashwat-sinha-v2.webp", alt: "Portrait of Shashwat Sinha, Senior Advisor (Music) at UPÉ Synthetic Limited" },
  },
  {
    name: "Aditya Bharadwaj",
    role: "Content & Cinematic Writer",
    // short role description; replace with Aditya's own bio when available
    bio: "Writes the scripts, stories and screenplays behind UPÉ's AI films, reels and ad campaigns, giving every project a strong narrative and a cinematic voice.",
    photo: { src: "/media/team/aditya-bharadwaj.webp", alt: "Portrait of Aditya Bharadwaj, Content & Cinematic Writer at UPÉ Synthetic Limited" },
  },
];

/* ───────────────────────── Contact ───────────────────────── */

export const contactPage = {
  title: "Let's create something beyond reality.",
  intro:
    "Tell us about your project: a reel, a song, a film, a story or a website. We reply within one working day.",
  budgetRanges: ["Under $1,000", "$1,000 – $3,000", "$3,000 – $7,500", "$7,500 – $15,000", "$15,000+", "Not sure yet"],
  hours: "Mon – Sat, 10:00 – 19:00",
};

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
  foundedYear: 2023,
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
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
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
  { label: "Contact", href: "/contact" },
];

/* ─────────────────────────── Home ────────────────────────── */

export const hero = {
  eyebrow: `${site.city} · AI Creative Studio`,
  headline: "Create Beyond Reality.",
  subtext:
    "We turn ideas into AI reels, original AI songs, ad films and stories that feel impossible, and build the websites that bring them home.",
  chips: ["AI Reels", "AI Songs", "AI Ad Films", "AI Storytelling", "Websites"],
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

// PLACEHOLDER client logos: swap for real clients with permission.
export const clientLogos: ClientLogo[] = [
  { src: "/media/logos/northbound.svg", alt: "Northbound Pictures", width: 260, height: 48 },
  { src: "/media/logos/kora.svg", alt: "Kora Studio", width: 260, height: 48 },
  { src: "/media/logos/voltra.svg", alt: "Voltra Motors", width: 260, height: 48 },
  { src: "/media/logos/saffron-leaf.svg", alt: "Saffron Leaf Tea", width: 260, height: 48 },
  { src: "/media/logos/lumen-labs.svg", alt: "Lumen Labs", width: 260, height: 48 },
  { src: "/media/logos/atlas.svg", alt: "Atlas & Co", width: 260, height: 48 },
];

// PLACEHOLDER numbers: update with real figures.
export const stats: Stat[] = [
  { value: 120, suffix: "+", label: "Projects delivered" },
  { value: 450, suffix: "+", label: "AI reels produced" },
  { value: 35, suffix: "+", label: "Websites launched" },
  { value: 60, suffix: "+", label: "Brands served" },
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

// PLACEHOLDER testimonials: replace with real, attributable client quotes before launch.
export const testimonials: Testimonial[] = [
  {
    quote:
      "We briefed UPÉ on a Monday and had a 30-second festive film that looked like a full outdoor shoot by Friday. It became our best-performing ad of the year.",
    name: "[Client Name]",
    role: "Marketing Head, Saffron Leaf Tea",
  },
  {
    quote:
      "They wrote, produced and visualised our school anthem. Students sang it at annual day, and parents still share the video. Genuinely moving work.",
    name: "[Client Name]",
    role: "Principal, Sunrise Public School",
  },
  {
    quote:
      "UPÉ understands both the tech and the craft. Our pitch film got the green light, and the AI previs saved us weeks in pre-production.",
    name: "[Client Name]",
    role: "Producer, Northbound Pictures",
  },
];

export const finalCta = {
  title: "Have a project in mind?",
  text: "Tell us what you're imagining. We'll reply within one working day with ideas, a timeline and a clear quote.",
};

/* ───────────────────────── Services ──────────────────────── */

export const services: Service[] = [
  {
    id: "ai-reels",
    title: "AI Reels",
    shortTitle: "AI Reels",
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
    question: "Do you work with clients outside our city?",
    answer:
      "Yes. Most of our work happens remotely over video calls and WhatsApp, so we work with clients anywhere.",
  },
];

/* ─────────────────────────── Work ────────────────────────── */
// PLACEHOLDER case studies: replace with real projects. The first 6 with
// `featured: true` appear on the home page.

export const work: WorkItem[] = [
  {
    slug: "monsoon-reverie",
    title: "Monsoon Reverie",
    client: "Saffron Leaf Tea",
    category: "ai-ad-films",
    year: "2025",
    featured: true,
    summary: "A rain-soaked festive ad film created entirely with AI, without a single location shoot.",
    cover: { src: "/media/work/monsoon-reverie/cover.webp", alt: "Emerald and amber light rippling like monsoon rain over a tea estate" },
    challenge:
      "Saffron Leaf wanted a monsoon campaign film with sweeping tea-estate visuals, but the season, budget and three-week deadline ruled out a traditional shoot.",
    approach: [
      "Wrote a 45-second script around the ritual of the first cup on a rainy evening.",
      "Generated tea-estate landscapes, rain textures and a recurring family of characters with consistent faces across shots.",
      "Composited real product packshots into AI scenes and graded the film for warm, nostalgic tones.",
      "Delivered a 45s hero film plus 15s and 6s cut-downs for digital.",
    ],
    tools: ["Runway", "Midjourney", "ElevenLabs", "DaVinci Resolve", "After Effects"],
    results: [
      { value: "3.2M", label: "views in 3 weeks" },
      { value: "68%", label: "lower cost than a live shoot" },
      { value: "12 days", label: "brief to final master" },
    ],
    resultSummary:
      "The film became the brand's best-performing ad of the season and was later adapted for regional TV.",
    gallery: [
      { src: "/media/work/monsoon-reverie/still-1.webp", alt: "Still from Monsoon Reverie: rain ribbons over a green valley" },
      { src: "/media/work/monsoon-reverie/still-2.webp", alt: "Still from Monsoon Reverie: amber light through monsoon clouds" },
    ],
  },
  {
    slug: "neon-bazaar",
    title: "Neon Bazaar",
    client: "Kora Studio",
    category: "ai-reels",
    year: "2025",
    featured: true,
    summary: "A 12-reel series placing a streetwear drop inside a surreal, neon-lit night market.",
    cover: { src: "/media/work/neon-bazaar/cover.webp", alt: "Glowing pink and cyan orbs floating above a dark street market" },
    challenge:
      "Kora's new collection needed a month of daily-feeling content on a single campaign budget, with a look that would stand out in crowded fashion feeds.",
    approach: [
      "Built a reusable 'Neon Bazaar' world with signature colours, props and lighting.",
      "Placed real product photos onto AI models walking through the market.",
      "Cut 12 vertical reels with hook-first edits and trending audio structures.",
    ],
    tools: ["Kling", "Midjourney", "Photoshop", "CapCut", "Premiere Pro"],
    results: [
      { value: "+41%", label: "follower growth" },
      { value: "5.6%", label: "average engagement rate" },
      { value: "2x", label: "drop sell-through vs. last season" },
    ],
    resultSummary: "The drop sold out in nine days, and the Neon Bazaar world became Kora's seasonal visual identity.",
    gallery: [
      { src: "/media/work/neon-bazaar/still-1.webp", alt: "Still from Neon Bazaar: magenta lanterns in a night market" },
      { src: "/media/work/neon-bazaar/still-2.webp", alt: "Still from Neon Bazaar: cyan reflections on wet pavement" },
    ],
  },
  {
    slug: "echoes-of-tomorrow",
    title: "Echoes of Tomorrow",
    client: "Mira Vale",
    category: "ai-songs",
    year: "2025",
    featured: true,
    summary: "An original synth-pop single and visualiser for an independent artist's debut EP.",
    cover: { src: "/media/work/echoes-of-tomorrow/cover.webp", alt: "Violet and cyan audio waveform bars pulsing on a dark background" },
    challenge:
      "Mira had lyrics and a melody on a voice note, but no budget for a full studio production or a music video.",
    approach: [
      "Developed the arrangement with AI music tools, then refined it with a session producer.",
      "Recorded Mira's real vocals and mixed them over the AI-assisted instrumental.",
      "Created a looping audio-reactive visualiser for streaming and social.",
    ],
    tools: ["Suno", "Ableton Live", "iZotope Ozone", "TouchDesigner"],
    results: [
      { value: "250K", label: "streams in first month" },
      { value: "3", label: "editorial playlist adds" },
      { value: "10 days", label: "voice note to release" },
    ],
    resultSummary: "The single launched Mira's EP campaign and led to two more tracks produced with UPÉ.",
    gallery: [
      { src: "/media/work/echoes-of-tomorrow/still-1.webp", alt: "Visualiser frame from Echoes of Tomorrow" },
      { src: "/media/work/echoes-of-tomorrow/still-2.webp", alt: "Mirrored waveform frame from Echoes of Tomorrow" },
    ],
  },
  {
    slug: "the-last-lighthouse",
    title: "The Last Lighthouse",
    client: "Northbound Pictures",
    category: "ai-storytelling",
    year: "2024",
    featured: true,
    summary: "A six-minute AI short film used to pitch and green-light a feature-length project.",
    cover: { src: "/media/work/the-last-lighthouse/cover.webp", alt: "A lone lighthouse sweeping its beam across a midnight sea" },
    challenge:
      "Northbound needed investors to feel the tone of a period drama set on a remote coast before any production money was spent.",
    approach: [
      "Adapted three key scenes from the feature script into a six-minute narrative short.",
      "Designed consistent characters, costumes and a storm-battered coastline.",
      "Scored the film with an AI-assisted orchestral theme and professional narration.",
    ],
    tools: ["Runway", "Flux", "ElevenLabs", "AIVA", "DaVinci Resolve"],
    results: [
      { value: "Green-lit", label: "feature funding secured" },
      { value: "6 weeks", label: "of previs time saved" },
      { value: "2", label: "festival selections" },
    ],
    resultSummary: "The short secured funding for the feature and now doubles as its official teaser.",
    gallery: [
      { src: "/media/work/the-last-lighthouse/still-1.webp", alt: "Still from The Last Lighthouse: the tower against a stormy sky" },
      { src: "/media/work/the-last-lighthouse/still-2.webp", alt: "Still from The Last Lighthouse: the beam over the coastline" },
    ],
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
    featured: false,
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
    slug: "voltra-launch",
    title: "Voltra: Ride the Future",
    client: "Voltra Motors",
    category: "ai-ad-films",
    year: "2024",
    featured: true,
    summary: "A launch film for an electric scooter, set on a synthwave highway that doesn't exist.",
    cover: { src: "/media/work/voltra-launch/cover.webp", alt: "A violet electric vehicle racing down a glowing synthwave highway" },
    challenge:
      "Voltra's prototype wasn't road-ready in time for its launch event, yet the brand needed a high-energy hero film.",
    approach: [
      "Built a precise 3D-referenced model of the scooter so AI shots stayed product-accurate.",
      "Generated a synthwave cityscape and highway sequence with dynamic camera moves.",
      "Delivered a 60s launch film, event-screen loop and vertical teasers.",
    ],
    tools: ["Blender", "Runway", "Kling", "After Effects", "DaVinci Resolve"],
    results: [
      { value: "1,800", label: "pre-orders in launch week" },
      { value: "4.1M", label: "impressions across platforms" },
      { value: "0", label: "physical shoots needed" },
    ],
    resultSummary: "The launch film drove Voltra's strongest pre-order week and set the tone for its brand identity.",
    gallery: [
      { src: "/media/work/voltra-launch/still-1.webp", alt: "Still from Voltra: the highway vanishing into a neon horizon" },
      { src: "/media/work/voltra-launch/still-2.webp", alt: "Still from Voltra: the vehicle in profile under violet light" },
    ],
  },

  {
    slug: "sunrise-anthem",
    title: "Sunrise School Anthem",
    client: "Sunrise Public School",
    category: "ai-songs",
    year: "2024",
    featured: false,
    summary: "An original school anthem and music video, performed live at annual day.",
    cover: { src: "/media/work/sunrise-anthem/cover.webp", alt: "Stage lights in pink and gold over a cheering crowd" },
    challenge:
      "The school wanted an anthem students would actually love singing, and a video to premiere at its 25th annual day.",
    approach: [
      "Ran a lyric workshop with students and teachers to capture the school's spirit.",
      "Composed and produced the anthem, then recorded the school choir over the final track.",
      "Created an AI music video blending real campus photos with dreamlike visuals.",
    ],
    tools: ["Suno", "Logic Pro", "Runway", "Premiere Pro"],
    results: [
      { value: "1,200", label: "students singing live" },
      { value: "90K", label: "video views by parents" },
      { value: "3 weeks", label: "workshop to premiere" },
    ],
    resultSummary: "The anthem is now sung at every school assembly and was adopted as the official school song.",
    gallery: [
      { src: "/media/work/sunrise-anthem/still-1.webp", alt: "Still from the Sunrise anthem video: spotlights on stage" },
      { src: "/media/work/sunrise-anthem/still-2.webp", alt: "Still from the Sunrise anthem video: golden confetti" },
    ],
  },
];

/* ─────────────────────── About / Team ────────────────────── */

export const story = {
  intro:
    "UPÉ began with a simple question: what if a small team could create visuals that once needed a film crew, a recording studio and a six-figure budget?",
  paragraphs: [
    "We started in 2023 as a handful of filmmakers, designers and developers who couldn't stop experimenting with generative AI. What began as late-night tests quickly turned into client work: first reels for local brands, then ad films, songs and full websites.",
    "Today UPÉ Synthetic Limited is an AI-first creative studio. We combine the speed of AI with the judgement of experienced storytellers, so every project feels crafted, not generated.",
    "The name says it all. UPÉ is about lifting ideas up and beyond what's practical to shoot. We create beyond reality, so our clients can imagine without limits.",
  ],
  mission:
    "To make world-class creative production accessible to every brand, creator and institution, using AI responsibly to tell stories that move people.",
  vision: "A world where budget and logistics never stand between a great idea and the screen.",
};

export const timeline: TimelineEntry[] = [
  { year: "2023", title: "The experiment", description: "Founded as a small collective testing AI for film and music. First client reel goes viral locally." },
  { year: "2024", title: "Studio mode", description: "Incorporated as UPÉ Synthetic Limited. Launched AI ad films, AI songs and website services." },
  { year: "2025", title: "Scaling up", description: "Crossed 100 projects, partnered with production houses and schools, and grew the core team." },
  { year: "Next", title: "Beyond reality", description: "Building original IP, AI series and tools that let every client co-create in real time." },
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
    "We're a small, curious team of filmmakers, musicians, designers and engineers. We work remotely and in studio, ship fast, and share everything we learn.",
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

// PLACEHOLDER core team: replace names, bios and photos with your real team.
export const team: TeamMember[] = [
  {
    name: "[Team Member Name]",
    role: "Head of Design",
    bio: "Shapes the visual language of every campaign and website, from moodboards to the final colour grade.",
    photo: { src: "/media/team/creative-director.webp", alt: "Portrait of UPÉ's head of design" },
  },
  {
    name: "[Team Member Name]",
    role: "Head of Production",
    bio: "Keeps every project on time and on brief, managing AI pipelines, editors and delivery across formats.",
    photo: { src: "/media/team/head-of-production.webp", alt: "Portrait of UPÉ's head of production" },
  },
  {
    name: "[Team Member Name]",
    role: "Music & Sound Lead",
    bio: "A producer and songwriter who blends AI composition with real instruments and vocals for every UPÉ track.",
    photo: { src: "/media/team/music-lead.webp", alt: "Portrait of UPÉ's music and sound lead" },
  },
  {
    name: "[Team Member Name]",
    role: "Technology Lead",
    bio: "Builds UPÉ's websites and internal AI tooling, making sure everything we ship is fast, secure and easy to update.",
    photo: { src: "/media/team/tech-lead.webp", alt: "Portrait of UPÉ's technology lead" },
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

/**
 * ============================================================
 * SITE CONTENT — edit everything below, nothing else
 * ============================================================
 * This is the one file that holds every bit of copy on the
 * site. Change the strings here and the pages update — no
 * need to touch any component or page file.
 */

export const siteMeta = {
  // Shown in the nav bar and browser tab.
  name: "Harshali Desai",
  tagline: "Product strategy. Enterprise scale. Learning in public.",
  // Used for <meta> tags / social previews.
  description:
    "Notes from a Principal Product Manager building enterprise products at scale while learning to code in public. Based in Krakow.",
  // Update once the site has a real domain, used for canonical URLs / OG tags.
  url: "https://example.com",
};

export const aboutContent = {
  eyebrow: "About",
  heading: "Hi, I'm Harshali and I love building products customers actually want to use",
  // --- PLACEHOLDER COPY BELOW — replace with your real bio ---
  paragraphs: [
    "I'm a Principal Product Manager with 12+ years in enterprise software. In my career, I've started products when they were just cool prototypes and turned them into offerings core to my organization's business - with over 1,000 businesses now using them. I've also shipped products that sounded promising but didn't perform in the market. Right now, I'm working on a journey management product at the start of its growth stage, and I'm loving every bit of it. My days involve shipping features, working cross-functionally with R&D and UX, and obsessing over the gap between what we build and what customers actually need.",
    "Separately, I'm teaching myself to code in public — building end-to-end projects and shipping them. I want to explore how ideas translate into code, where the real friction lives, and what constraints actually shape the experience we design for. This site is where I'm documenting that: what worked, what broke, what I got wrong on the first try, and how it's reshaping how I think about product work.",
    "I'm writing about it in public because the gap between strategy and implementation fascinates me, and I want to show what that journey actually looks like. If you're working through the same shift—or you have thoughts on product execution, enterprise building, or learning in public—reach out. harshalidesaiatwork@gmail.com or find me on LinkedIn.",
  ],
  // Optional list of quick facts / links — leave empty array to hide the section entirely.
  facts: [] as { label: string; value: string }[],
  // --- END PLACEHOLDER COPY ---
};

export const writingContent = {
  eyebrow: "Writing",
  heading: "Notes on building in public",
  intro:
    "This page will pull posts in automatically from my newsletter. Until that's wired up, here's what's coming.",
  comingSoon: {
    heading: "First posts are on the way",
    body: "I'm writing about the process of learning to build software with AI tools as a product manager — the workflow, the mistakes, the moments it clicked. Posts will show up here as soon as the newsletter feed is connected.",
  },
  // Drop future posts into this array — the list below renders automatically,
  // no layout changes needed. Leave it empty until the feed is connected.
  posts: [] as {
    title: string;
    date: string; // ISO format, e.g. "2026-08-01"
    summary: string;
    href: string;
  }[],
};


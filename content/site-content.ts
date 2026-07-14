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
  name: "Your Name",
  tagline: "building in public",
  // Used for <meta> tags / social previews.
  description:
    "Notes from a Principal PM learning to build software with AI tools, in public.",
  // Update once the site has a real domain, used for canonical URLs / OG tags.
  url: "https://example.com",
};

export const aboutContent = {
  eyebrow: "About",
  heading: "Hi, I'm [Your Name] — REPLACE THIS COPY",
  // --- PLACEHOLDER COPY BELOW — replace with your real bio ---
  paragraphs: [
    "I'm a Principal Product Manager, [X years] into building software for [industry / kind of product]. [One sentence about the shape of your day job — team size, what you ship, who you ship it for.]",
    "Right now I'm teaching myself to actually build things — not just spec them — using AI coding tools. This site is where I'm documenting that: what worked, what broke, what I got wrong on the first try, and what it's changing about how I think about product work.",
    "I'm writing about it in public because [your real reason — e.g. accountability, wanting a peer group figuring out the same shift, wanting a record you can point back to]. If any of this is useful to you, or you're working through the same thing, [how you want people to reach you — email, a specific platform, etc.].",
  ],
  // Optional list of quick facts / links — leave empty array to hide the section entirely.
  facts: [
    { label: "Role", value: "Principal PM, [Company]" },
    { label: "Building", value: "[current project / product]" },
    { label: "Elsewhere", value: "[Twitter/X, LinkedIn, etc. — or remove]" },
  ],
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

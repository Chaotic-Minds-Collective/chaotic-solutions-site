// Portfolio data. Projects cleared by Danielle 2026-10-31.
// Keep blurbs honest: describe the work, don't inflate. Links are
// intentionally absent - these are internal/early projects, not public URLs.

export type PortfolioItem = {
  name: string;
  kind: string;
  blurb: string;
  tags: string[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    name: "FQ SNRG MMA",
    kind: "Business website",
    blurb:
      "Full website for a mixed martial arts training business - clear structure, fast pages, and information new students actually need.",
    tags: ["Build", "Design", "SEO"],
  },
  {
    name: "The Diagnostic Bay",
    kind: "Product platform",
    blurb:
      "An automotive diagnostic resource platform with AI-assisted troubleshooting - built from the ground up as a commercial product, not just a website.",
    tags: ["Build", "AI integration", "Product"],
  },
  {
    name: "Chaotic Command",
    kind: "Operations system",
    blurb:
      "A central operations and automation hub coordinating multiple businesses - project tracking, dashboards, and workflow automation across tools.",
    tags: ["Automation", "Integrations", "Systems"],
  },
];

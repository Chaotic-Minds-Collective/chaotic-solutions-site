// Single source of truth for service copy and pricing.
// Mirrors the v1 draft on the Notion page "Solutions - Pricing & Service Scope".
// Update here first, then the page picks it up automatically.

export type PriceTier = {
  name: string;
  price: string;
  blurb: string;
  points: string[];
  highlight?: boolean;
};

export const buildTiers: PriceTier[] = [
  {
    name: "Build - Starter",
    price: "$750",
    blurb: "A clean, functional site to get you online properly.",
    points: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form",
      "Launch walkthrough",
    ],
  },
  {
    name: "Build - Standard",
    price: "$1,500",
    blurb: "For businesses that need more structure under the hood.",
    points: [
      "Up to 10 pages",
      "Custom design direction",
      "Blog or news section",
      "Analytics + SEO setup",
      "30 days post-launch support",
    ],
    highlight: true,
  },
];

export const maintainTiers: PriceTier[] = [
  {
    name: "Maintain - Lite",
    price: "$50/mo",
    blurb: "Keep the lights on and the site healthy.",
    points: [
      "Software + plugin updates",
      "Monthly health check",
      "Uptime monitoring",
      "Email support",
    ],
  },
  {
    name: "Maintain - Standard",
    price: "$100/mo",
    blurb: "Regular care with content changes included.",
    points: [
      "Everything in Lite",
      "Content updates (up to 2 hrs/mo)",
      "Monthly backup verification",
      "Priority email support",
    ],
    highlight: true,
  },
  {
    name: "Maintain - Active",
    price: "$175/mo",
    blurb: "Hands-on upkeep for busier sites.",
    points: [
      "Everything in Standard",
      "Content updates (up to 5 hrs/mo)",
      "Quarterly security review",
      "Same-day priority support",
    ],
  },
];

export const fixTiers: PriceTier[] = [
  {
    name: "Fix - Hourly",
    price: "$65/hr",
    blurb: "Something broke. We track it down and fix it.",
    points: [
      "Billed in 30-min increments",
      "Clear write-up of what was wrong",
      "Fix verified before handoff",
    ],
  },
  {
    name: "Security Audit",
    price: "$300",
    blurb: "A full look at your site's locks and hinges.",
    points: [
      "Vulnerability review",
      "Configuration + permissions check",
      "Plain-English report",
      "Prioritized fix list",
    ],
  },
];

export const quotedServices: { name: string; blurb: string }[] = [
  {
    name: "Full Package",
    blurb: "Build + Maintain + Fix as one ongoing engagement. Quoted per project based on scope.",
  },
  {
    name: "Rescue Job",
    blurb: "Site in critical condition? Full recovery and stabilization. Quoted per project after assessment.",
  },
];

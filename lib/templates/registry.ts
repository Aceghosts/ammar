export interface TemplateMetadata {
  id: string;
  name: string;
  profession: string[];
  category: "creative" | "corporate";
  description: string;
}

export const TEMPLATE_REGISTRY: Record<string, TemplateMetadata> = {
  "minimal-editorial": {
    id: "minimal-editorial",
    name: "Minimal Editorial",
    profession: ["designer", "photographer", "illustrator", "artist", "writer"],
    category: "creative",
    description:
      "Clean whitespace-driven layout with editorial typography. Perfect for creatives who let the work speak.",
  },
  "bold-brutalist": {
    id: "bold-brutalist",
    name: "Bold Brutalist",
    profession: ["designer", "developer", "artist", "creative-director"],
    category: "creative",
    description:
      "Raw, high-contrast aesthetic with oversized type and stark geometry. For those who make a statement.",
  },
  "warm-cinematic": {
    id: "warm-cinematic",
    name: "Warm Cinematic",
    profession: ["filmmaker", "photographer", "artist", "writer", "musician"],
    category: "creative",
    description:
      "Rich, film-inspired visuals with warm tones and storytelling-first layout.",
  },
  "dark-premium": {
    id: "dark-premium",
    name: "Dark Premium",
    profession: ["executive", "consultant", "lawyer", "finance", "marketer"],
    category: "corporate",
    description:
      "Sophisticated dark theme with premium typography. Commands authority and trust.",
  },
  "cinematic-authority": {
    id: "cinematic-authority",
    name: "Cinematic Authority",
    profession: ["executive", "speaker", "consultant", "marketer", "coach"],
    category: "corporate",
    description:
      "Full-bleed imagery with bold overlays. Built for leaders who own the room.",
  },
  "clean-executive": {
    id: "clean-executive",
    name: "Clean Executive",
    profession: ["executive", "consultant", "manager", "engineer", "analyst"],
    category: "corporate",
    description:
      "Crisp, professional layout with structured sections. Clarity and credibility first.",
  },
};

export function getTemplateForProfession(profession: string): TemplateMetadata {
  const matches = Object.values(TEMPLATE_REGISTRY).filter((t) =>
    t.profession.includes(profession.toLowerCase())
  );
  return matches[0] ?? TEMPLATE_REGISTRY["clean-executive"];
}

export interface CleanExecutiveData {
  // ── Meta ────────────────────────────────────────────────
  slug: string;
  siteName: string;         // e.g. "saad.cdo"
  siteNameAccent: string;   // part after the dot, e.g. "cdo"

  // ── Hero ────────────────────────────────────────────────
  name: string;
  role: string;             // "Chief Digital Officer"
  company: string;          // "Convex Interactive"
  heroLines: string[];      // ["Drive Growth.", "Build Brands.", "Lead Digital."]
  heroSubtitle: string;
  location: string;
  yearsExperience: string;  // "10+"
  profileImage: string;     // path under /public

  // ── Contact ─────────────────────────────────────────────
  email: string;
  phone: string;
  linkedIn: string;

  // ── Stats bar ───────────────────────────────────────────
  stats: Array<{ value: string; label: string }>;
  clients: string[];

  // ── About ───────────────────────────────────────────────
  aboutParagraphs: string[];
  aboutQuote: string;
  miniStats: Array<{ val: string; label: string }>;

  // ── Experience ──────────────────────────────────────────
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    location: string;
    current: boolean;
    bullets: string[];
  }>;

  // ── Skills ──────────────────────────────────────────────
  skills: string[];
  certifications: Array<{ title: string; issuer: string }>;

  // ── Awards ──────────────────────────────────────────────
  awards: Array<{ title: string; event: string; year: string }>;

  // ── Education ───────────────────────────────────────────
  education: Array<{
    degree: string;
    institution: string;
    year: string;
    detail: string;
  }>;

  // ── Contact section ─────────────────────────────────────
  contactHeading: string[];   // ["Let's Build", "Something", "Meaningful."]
  contactSubtext: string;
}

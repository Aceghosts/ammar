import Anthropic from "@anthropic-ai/sdk";
import type { CleanExecutiveData } from "@/lib/types/clean-executive";

const client = new Anthropic();

export async function extractProfileFromText(
  resumeText: string,
  slug: string
): Promise<CleanExecutiveData> {
  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    messages: [
      {
        role: "user",
        content: `You are an expert at reading resumes and building personal branding websites.

Read the resume below and extract all information into a JSON object that exactly matches the structure shown.
Be creative — write punchy heroLines, a compelling heroSubtitle, and a strong aboutQuote.
For siteName, use format: "firstname.role" (e.g. "saad.cdo"). siteNameAccent is the part after the dot.
For contactHeading, use 3 short lines ending with something powerful (e.g. ["Let's Build", "Something", "Meaningful."]).
If any info is missing, use a sensible placeholder or empty array.

RESUME TEXT:
${resumeText}

Return ONLY valid JSON (no markdown, no explanation) matching this exact structure:
{
  "slug": "${slug}",
  "siteName": "string (e.g. john.dev)",
  "siteNameAccent": "string (the part after the dot, e.g. dev)",
  "name": "string",
  "role": "string (current job title)",
  "company": "string (current company)",
  "heroLines": ["string", "string", "string"],
  "heroSubtitle": "string (one sentence about what they do)",
  "location": "string",
  "yearsExperience": "string (e.g. 8+)",
  "profileImage": "/clients/${slug}/profile.png",
  "email": "string",
  "phone": "string",
  "linkedIn": "string (full URL)",
  "stats": [
    { "value": "string", "label": "string" },
    { "value": "string", "label": "string" },
    { "value": "string", "label": "string" },
    { "value": "string", "label": "string" }
  ],
  "clients": ["string", "string"],
  "aboutParagraphs": ["string", "string"],
  "aboutQuote": "string",
  "miniStats": [
    { "val": "string", "label": "string" },
    { "val": "string", "label": "string" },
    { "val": "string", "label": "string" }
  ],
  "experience": [
    {
      "title": "string",
      "company": "string",
      "duration": "string",
      "location": "string",
      "current": true,
      "bullets": ["string", "string"]
    }
  ],
  "skills": ["string"],
  "certifications": [
    { "title": "string", "issuer": "string" }
  ],
  "awards": [
    { "title": "string", "event": "string", "year": "string" }
  ],
  "education": [
    {
      "degree": "string",
      "institution": "string",
      "year": "string",
      "detail": "string"
    }
  ],
  "contactHeading": ["string", "string", "string"],
  "contactSubtext": "string"
}`,
      },
    ],
  });

  const content = message.content[0];
  if (content.type !== "text") throw new Error("Unexpected response type");

  return JSON.parse(content.text) as CleanExecutiveData;
}

export async function parsePdfBuffer(buffer: Buffer): Promise<string> {
  const { extractText } = await import("unpdf");
  const { text } = await extractText(new Uint8Array(buffer));
  return Array.isArray(text) ? text.join("\n") : String(text);
}

import { NextRequest, NextResponse } from "next/server";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";
import { parsePdfBuffer, extractProfileFromText } from "@/lib/ai/engine";

export const runtime = "nodejs";

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("pdf") as File | null;

    if (!file || file.type !== "application/pdf") {
      return NextResponse.json({ error: "Invalid PDF file" }, { status: 400 });
    }

    // 1. Extract text from PDF
    const buffer = Buffer.from(await file.arrayBuffer());
    const text = await parsePdfBuffer(buffer);

    if (!text.trim()) {
      return NextResponse.json({ error: "Could not extract text from PDF" }, { status: 400 });
    }

    // 2. Generate a temp slug, then extract profile
    const tempSlug = `client-${Date.now()}`;
    const profile = await extractProfileFromText(text, tempSlug);

    // 3. Use the real name to build the final slug
    const slug = toSlug(profile.name) || tempSlug;
    profile.slug = slug;
    profile.profileImage = `/clients/${slug}/profile.png`;

    // 4. Save JSON to data/clients/
    const dataDir = path.join(process.cwd(), "data", "clients");
    mkdirSync(dataDir, { recursive: true });
    writeFileSync(path.join(dataDir, `${slug}.json`), JSON.stringify(profile, null, 2));

    // 5. Create public folder for profile photo
    mkdirSync(path.join(process.cwd(), "public", "clients", slug), { recursive: true });

    return NextResponse.json({ slug });
  } catch (err) {
    console.error("[generate]", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal error" },
      { status: 500 }
    );
  }
}

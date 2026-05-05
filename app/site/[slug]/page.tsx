import { notFound } from "next/navigation";
import { existsSync, readFileSync } from "fs";
import path from "path";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import CleanExecutive from "@/components/templates/corporate/CleanExecutive";
import type { CleanExecutiveData } from "@/lib/types/clean-executive";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

interface SitePageProps {
  params: { slug: string };
}

function loadClientData(slug: string): CleanExecutiveData | null {
  const dataPath = path.join(process.cwd(), "data", "clients", `${slug}.json`);
  if (!existsSync(dataPath)) return null;
  return JSON.parse(readFileSync(dataPath, "utf-8")) as CleanExecutiveData;
}

export async function generateMetadata({ params }: SitePageProps): Promise<Metadata> {
  const data = loadClientData(params.slug);
  if (!data) return { title: "Not Found" };
  return {
    title: `${data.name} — ${data.role}`,
    description: data.heroSubtitle,
  };
}

export default function SitePage({ params }: SitePageProps) {
  const data = loadClientData(params.slug);
  if (!data) notFound();

  return (
    <div className={`${bricolage.variable} ${inter.variable}`}>
      <CleanExecutive data={data} />
    </div>
  );
}

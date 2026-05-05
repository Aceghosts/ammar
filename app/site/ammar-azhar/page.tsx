import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import CleanExecutive from "@/components/templates/corporate/CleanExecutive";
import type { CleanExecutiveData } from "@/lib/types/clean-executive";
import clientData from "@/data/clients/ammar-azhar.json";

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

const data = clientData as CleanExecutiveData;

export const metadata: Metadata = {
  title: `${data.name} — ${data.role}`,
  description: data.heroSubtitle,
};

export default function AmmarAzharPage() {
  return (
    <div className={`${bricolage.variable} ${inter.variable}`}>
      <CleanExecutive data={data} />
    </div>
  );
}

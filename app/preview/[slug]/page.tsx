import { notFound } from "next/navigation";
import { existsSync } from "fs";
import path from "path";

interface PreviewPageProps {
  params: { slug: string };
}

export default function PreviewPage({ params }: PreviewPageProps) {
  const dataPath = path.join(process.cwd(), "data", "clients", `${params.slug}.json`);
  if (!existsSync(dataPath)) notFound();

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center gap-4">
      <p className="text-white/50 text-sm uppercase tracking-widest">Preview Mode</p>
      <h1 className="text-3xl font-bold">{params.slug}</h1>
      <p className="text-white/40">Template rendering coming soon.</p>
      <a href="/dashboard" className="text-violet-400 text-sm hover:underline mt-4">
        ← Back to Dashboard
      </a>
    </div>
  );
}

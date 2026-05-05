"use client";

import { useState, useRef } from "react";
import { Upload, Loader2, User, ExternalLink } from "lucide-react";

export default function DashboardPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const clients: { name: string; slug: string; title: string }[] = [];

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped?.type === "application/pdf") {
      setFile(dropped);
      setError(null);
    } else {
      setError("Please upload a PDF file.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected?.type === "application/pdf") {
      setFile(selected);
      setError(null);
    } else if (selected) {
      setError("Please upload a PDF file.");
    }
  };

  const handleGenerate = async () => {
    if (!file) return;
    setIsGenerating(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("pdf", file);

      const res = await fetch("/api/generate", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Generation failed");
      }

      const { slug } = await res.json();
      window.location.href = `/site/${slug}`;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-8 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-2xl font-bold tracking-tight">
            pres<span className="text-violet-400">ona</span>
          </span>
          <nav className="flex items-center gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Docs</a>
            <a href="#" className="hover:text-white transition-colors">Settings</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-16 space-y-20">
        {/* Generate Card */}
        <section className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight">Generate a Website</h1>
            <p className="text-white/50 text-lg max-w-md">
              Upload a resume PDF and AI will build a stunning personal site in seconds.
            </p>
          </div>

          <div className="w-full max-w-lg space-y-4">
            {/* Drop Zone */}
            <div
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              className={`
                relative border-2 border-dashed rounded-2xl p-10 cursor-pointer
                transition-all duration-200 select-none
                ${isDragging
                  ? "border-violet-400 bg-violet-400/5"
                  : file
                  ? "border-violet-400/60 bg-violet-400/5"
                  : "border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/[0.07]"
                }
              `}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={handleFileChange}
              />
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Upload className="w-5 h-5 text-white/60" />
                </div>
                {file ? (
                  <div>
                    <p className="font-medium text-violet-300">{file.name}</p>
                    <p className="text-sm text-white/40 mt-1">
                      {(file.size / 1024).toFixed(0)} KB · Click to change
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="font-medium text-white/80">Drop your resume PDF here</p>
                    <p className="text-sm text-white/40 mt-1">or click to browse</p>
                  </div>
                )}
              </div>
            </div>

            {error && (
              <p className="text-sm text-red-400 text-left px-1">{error}</p>
            )}

            <button
              onClick={handleGenerate}
              disabled={!file || isGenerating}
              className={`
                w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200
                flex items-center justify-center gap-2
                ${file && !isGenerating
                  ? "bg-violet-500 hover:bg-violet-400 text-white shadow-lg shadow-violet-500/20"
                  : "bg-white/10 text-white/30 cursor-not-allowed"
                }
              `}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating your site…
                </>
              ) : (
                "Generate Website"
              )}
            </button>
          </div>
        </section>

        {/* Clients Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Your Clients</h2>
            <span className="text-sm text-white/30">{clients.length} sites</span>
          </div>

          {clients.length === 0 ? (
            <div className="border border-white/10 rounded-2xl p-16 flex flex-col items-center gap-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <User className="w-7 h-7 text-white/20" />
              </div>
              <div>
                <p className="text-white/40 font-medium">No clients yet</p>
                <p className="text-sm text-white/25 mt-1">
                  Upload a resume above to generate your first site
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {clients.map((client) => (
                <div
                  key={client.slug}
                  className="border border-white/10 rounded-2xl p-5 flex items-center justify-between hover:border-white/20 transition-colors bg-white/[0.02]"
                >
                  <div>
                    <p className="font-medium">{client.name}</p>
                    <p className="text-sm text-white/40">{client.title}</p>
                  </div>
                  <a
                    href={`/preview/${client.slug}`}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-white/40" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

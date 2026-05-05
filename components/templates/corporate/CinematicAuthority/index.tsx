import { ProfileData } from "@/lib/types/profile";

export default function CinematicAuthority({ profile }: { profile: ProfileData }) {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <main className="max-w-6xl mx-auto px-8 py-32">
        <p className="text-sm text-white/40 uppercase tracking-[0.3em] mb-6">{profile.title}</p>
        <h1 className="text-7xl font-bold leading-tight">{profile.name}</h1>
        <p className="mt-8 text-xl text-white/50 max-w-2xl italic">"{profile.tagline}"</p>
        <p className="mt-10 text-lg text-white/60 max-w-3xl leading-relaxed">{profile.about}</p>
      </main>
    </div>
  );
}

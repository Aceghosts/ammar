import { ProfileData } from "@/lib/types/profile";

export default function DarkPremium({ profile }: { profile: ProfileData }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <main className="max-w-5xl mx-auto px-8 py-24">
        <div className="border-l-2 border-violet-500 pl-8">
          <h1 className="text-5xl font-bold tracking-tight">{profile.name}</h1>
          <p className="mt-2 text-violet-400 text-lg">{profile.title}</p>
        </div>
        <p className="mt-12 text-lg text-white/60 leading-relaxed max-w-3xl">{profile.about}</p>
      </main>
    </div>
  );
}

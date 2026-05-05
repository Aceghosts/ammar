import { ProfileData } from "@/lib/types/profile";

export default function BoldBrutalist({ profile }: { profile: ProfileData }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-8xl font-black uppercase leading-none tracking-tighter">
          {profile.name}
        </h1>
        <p className="mt-4 text-2xl font-bold text-yellow-400 uppercase">{profile.title}</p>
        <p className="mt-8 text-lg text-white/70 max-w-2xl">{profile.about}</p>
      </main>
    </div>
  );
}

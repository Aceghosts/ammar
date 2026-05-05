import { ProfileData } from "@/lib/types/profile";

export default function WarmCinematic({ profile }: { profile: ProfileData }) {
  return (
    <div className="min-h-screen bg-stone-950 text-amber-50">
      <main className="max-w-4xl mx-auto px-8 py-24">
        <h1 className="text-5xl font-serif font-light italic">{profile.name}</h1>
        <p className="mt-3 text-amber-400 tracking-widest text-sm uppercase">{profile.title}</p>
        <p className="mt-10 text-lg leading-loose text-amber-50/70">{profile.about}</p>
      </main>
    </div>
  );
}

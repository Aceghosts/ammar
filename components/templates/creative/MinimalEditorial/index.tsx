import { ProfileData } from "@/lib/types/profile";

export default function MinimalEditorial({ profile }: { profile: ProfileData }) {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-6xl font-light tracking-tight">{profile.name}</h1>
        <p className="mt-2 text-xl text-gray-500">{profile.title}</p>
        <p className="mt-8 text-lg leading-relaxed">{profile.about}</p>
      </main>
    </div>
  );
}

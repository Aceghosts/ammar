"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface HeroProps {
  name: string;
  role: string;
  company: string;
  heroLines: string[];
  heroSubtitle: string;
  location: string;
  yearsExperience: string;
  profileImage: string;
  linkedIn: string;
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// Derive initials from name
function getInitials(name: string) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

export default function Hero({
  name,
  role,
  company,
  heroLines,
  heroSubtitle,
  location,
  yearsExperience,
  profileImage,
  linkedIn,
}: HeroProps) {
  const [imgError, setImgError] = useState(false);
  const initials = getInitials(name);

  return (
    <section className="relative min-h-screen bg-[#F2EFE9] overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-6 min-h-screen flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-10 lg:gap-16 pt-24 pb-16 lg:py-0">

        {/* ── MOBILE: Image first, small & contained ─────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex lg:hidden justify-center"
        >
          <div className="relative w-48 h-48 rounded-3xl overflow-hidden border border-black/[0.08] shadow-lg bg-[#E8E4DE]">
            {!imgError ? (
              <Image
                src={profileImage}
                alt={name}
                fill
                className="object-cover object-top"
                onError={() => setImgError(true)}
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-heading font-black text-5xl text-black/10">{initials}</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* ── LEFT: Text content ─────────────────────────────────── */}
        <div className="space-y-7 lg:space-y-8">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                       bg-white border border-black/[0.08] text-[#111]/50 text-xs font-body shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            {role} · {company}
          </motion.div>

          {/* Heading */}
          <div className="space-y-0.5">
            {heroLines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="font-heading font-extrabold text-[#111111] leading-[1.08]"
                  style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.72 }}
            className="text-[#111]/45 font-body text-base leading-relaxed max-w-sm"
          >
            {heroSubtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full bg-[#111111] text-white font-heading font-semibold text-sm
                         hover:bg-[#2563EB] transition-all duration-300 shadow-sm"
            >
              Book a Call
            </a>
            <a
              href="#experience"
              className="flex items-center gap-2 text-[#111]/45 hover:text-[#111] font-body text-sm transition-colors"
            >
              View experience
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap items-center gap-4 pt-3 border-t border-black/[0.06]"
          >
            <a
              href={linkedIn}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#111]/35 hover:text-[#2563EB] text-xs font-body transition-colors"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <span className="text-[#111]/15">|</span>
            <span className="text-[#111]/35 text-xs font-body">{yearsExperience} Years Experience</span>
            <span className="text-[#111]/15">|</span>
            <span className="text-[#111]/35 text-xs font-body">{location}</span>
          </motion.div>
        </div>

        {/* ── RIGHT: Desktop image in contained frame ────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:flex justify-center items-center"
        >
          <div className="relative w-full max-w-[440px] aspect-[3/4] rounded-3xl overflow-hidden
                          border border-black/[0.08] shadow-xl bg-[#E8E4DE]">
            {!imgError ? (
              <Image
                src={profileImage}
                alt={name}
                fill
                className="object-cover object-top"
                onError={() => setImgError(true)}
                priority
              />
            ) : (
              <div className="w-full h-full flex items-end justify-center pb-16">
                <span className="font-heading font-black text-[10rem] text-black/5">{initials}</span>
              </div>
            )}

            {/* Subtle bottom fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
              style={{ background: "linear-gradient(to top, #E8E4DE80, transparent)" }}
            />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md
                         rounded-2xl px-4 py-3 border border-black/[0.06] shadow-sm"
            >
              <p className="font-heading font-bold text-[#111] text-sm">{name}</p>
              <p className="text-[#111]/40 font-body text-xs mt-0.5">{role} · {company}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-6 flex items-center gap-2 text-[#111]/25 text-xs font-body"
      >
        <motion.span animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          ↓
        </motion.span>
        Scroll to explore
      </motion.div>
    </section>
  );
}

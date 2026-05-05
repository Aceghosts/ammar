"use client";
import { motion } from "framer-motion";

interface AboutProps {
  aboutParagraphs: string[];
  aboutQuote: string;
  miniStats: Array<{ val: string; label: string }>;
  linkedIn: string;
}

export default function About({ aboutParagraphs, aboutQuote, miniStats, linkedIn }: AboutProps) {
  return (
    <section id="about" className="bg-[#F2EFE9] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">

          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-[#2563EB] font-body text-sm font-medium uppercase tracking-[0.2em] mb-5">About Me</p>
            <h2 className="font-heading font-extrabold text-[#111111] leading-[1.05]"
              style={{ fontSize: "clamp(36px, 5vw, 62px)" }}>
              The Story<br />Behind The<br />Numbers
            </h2>
            <div className="mt-8 flex items-center gap-4">
              <a href="#contact"
                className="px-6 py-3 rounded-full bg-[#2563EB] text-white font-heading font-semibold text-sm
                           hover:bg-[#1d4ed8] transition-all duration-200 shadow-md shadow-blue-500/20">
                Work with me
              </a>
              <a href={linkedIn} target="_blank" rel="noopener noreferrer"
                className="text-[#111]/40 hover:text-[#2563EB] text-sm font-body transition-colors">
                LinkedIn →
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6 lg:pt-2">

            {aboutParagraphs.map((para, i) => (
              <p key={i} className="text-[#111]/60 font-body text-lg leading-relaxed">
                {para}
              </p>
            ))}

            {/* Quote */}
            <div className="pl-5 border-l-2 border-[#2563EB] py-1">
              <p className="text-[#111111] font-heading font-semibold text-lg leading-snug italic">
                &ldquo;{aboutQuote}&rdquo;
              </p>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {miniStats.map((s, i) => (
                <motion.div key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white rounded-2xl p-4 border border-black/[0.06]">
                  <p className="font-heading font-extrabold text-2xl text-[#111]">{s.val}</p>
                  <p className="text-[#111]/40 font-body text-xs mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

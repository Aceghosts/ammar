"use client";
import { motion } from "framer-motion";

interface AwardsProps {
  awards: Array<{ title: string; event: string; year: string }>;
}

export default function Awards({ awards }: AwardsProps) {
  return (
    <section id="awards" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-[#2563EB] font-body text-sm font-medium uppercase tracking-[0.2em] mb-4">
          Recognition
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading font-extrabold text-[#111111] mb-16"
          style={{ fontSize: "clamp(36px, 5vw, 62px)" }}>
          Awards &amp; Honours
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((a, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden p-6 rounded-2xl border border-black/[0.07]
                         bg-[#F9F8F6] hover:border-[#2563EB]/25 hover:bg-[#EFF6FF]/40
                         transition-all duration-300 group">
              <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-[#2563EB]/30 group-hover:bg-[#2563EB] transition-colors rounded-full" />
              <div className="pl-4">
                <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] border border-blue-100 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18M3 9h18v3a9 9 0 01-18 0V9zM12 9v13M9 22h6" />
                  </svg>
                </div>
                <p className="text-[#111]/80 font-heading font-semibold text-sm leading-snug">{a.title}</p>
                <p className="text-[#111]/35 font-body text-xs mt-1.5">{a.event}</p>
                <span className="inline-block mt-4 px-2.5 py-0.5 rounded-full bg-[#EFF6FF] text-[#2563EB] font-body text-xs border border-blue-100">
                  {a.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

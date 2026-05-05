"use client";
import { motion } from "framer-motion";

interface SkillsProps {
  skills: string[];
  certifications: Array<{ title: string; issuer: string }>;
}

export default function Skills({ skills, certifications }: SkillsProps) {
  return (
    <section id="skills" className="py-28 bg-[#F2EFE9]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-[#2563EB] font-body text-sm font-medium uppercase tracking-[0.2em] mb-4">
          Expertise
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading font-extrabold text-[#111111] mb-14"
          style={{ fontSize: "clamp(36px, 5vw, 62px)" }}>
          Skills &amp; Certifications
        </motion.h2>

        <div className="flex flex-wrap gap-3 mb-16">
          {skills.map((s, i) => (
            <motion.span key={s}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ scale: 1.04 }}
              className="px-5 py-2.5 rounded-full border border-black/10 bg-white
                         text-[#111]/60 text-sm font-body cursor-default
                         hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white
                         transition-all duration-200 shadow-sm">
              {s}
            </motion.span>
          ))}
        </div>

        <div className="border-t border-black/[0.07] pt-12">
          <motion.h3 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-heading font-bold text-[#111111] text-xl mb-8">
            Certifications
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((c, i) => (
              <motion.div key={c.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-black/[0.07]
                           bg-white hover:border-[#2563EB]/30 hover:shadow-sm
                           transition-all duration-200 group">
                <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] border border-blue-100
                                flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#111]/80 text-sm font-body font-medium leading-snug">{c.title}</p>
                  <p className="text-[#111]/35 text-xs font-body mt-1">{c.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

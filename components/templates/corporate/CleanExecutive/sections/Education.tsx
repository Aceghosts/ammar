"use client";
import { motion } from "framer-motion";

interface EducationProps {
  education: Array<{
    degree: string;
    institution: string;
    year: string;
    detail: string;
  }>;
}

export default function Education({ education }: EducationProps) {
  return (
    <section id="education" className="py-28 bg-[#F2EFE9]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-[#2563EB] font-body text-sm font-medium uppercase tracking-[0.2em] mb-4">
          Academic
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading font-extrabold text-[#111111] mb-16"
          style={{ fontSize: "clamp(36px, 5vw, 62px)" }}>
          Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((d, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="flex gap-6 p-8 rounded-2xl border border-black/[0.07] bg-white
                         hover:border-[#2563EB]/20 hover:shadow-md hover:shadow-blue-50
                         transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] border border-blue-100
                              flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.63 48.63 0 0112 20.904a48.63 48.63 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-[#111111]">{d.degree}</h3>
                <p className="text-[#2563EB] font-heading font-semibold text-sm mt-1">{d.institution}</p>
                <p className="text-[#111]/30 font-body text-xs mt-1 leading-relaxed">{d.detail}</p>
                <span className="inline-block mt-4 px-3 py-1 rounded-full border border-blue-100 bg-[#EFF6FF] text-[#2563EB] font-body text-xs">
                  {d.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

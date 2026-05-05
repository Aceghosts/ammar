"use client";
import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  current: boolean;
  bullets: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-[#2563EB] font-body text-sm font-medium uppercase tracking-[0.2em] mb-4">
          Career
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading font-extrabold text-[#111111] mb-16"
          style={{ fontSize: "clamp(36px, 5vw, 62px)" }}>
          Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[10px] top-2 bottom-0 w-px bg-black/[0.07]" />
          <div className="space-y-5">
            {experience.map((role, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.04 * i }}
                className="relative pl-10">
                <div className={`absolute left-0 top-5 w-5 h-5 rounded-full border-2 flex items-center justify-center
                  ${role.current ? "border-[#2563EB] bg-[#EFF6FF]" : "border-black/15 bg-white"}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${role.current ? "bg-[#2563EB]" : "bg-black/20"}`} />
                </div>

                <div className={`rounded-2xl border p-6 transition-all duration-200
                  ${role.current
                    ? "border-[#2563EB]/20 bg-[#EFF6FF]/50 shadow-sm shadow-blue-100"
                    : "border-black/[0.06] bg-[#F9F8F6] hover:bg-[#F2EFE9] hover:border-black/10"}`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-heading font-bold text-[#111111] text-lg">{role.title}</h3>
                        {role.current && (
                          <span className="px-2.5 py-0.5 rounded-full bg-[#2563EB] text-white text-xs font-heading font-semibold">
                            Present
                          </span>
                        )}
                      </div>
                      <p className={`font-body text-sm mt-1 ${role.current ? "text-[#2563EB]" : "text-[#111]/40"}`}>{role.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#111]/35 font-body text-sm">{role.duration}</p>
                      <p className="text-[#111]/25 font-body text-xs mt-0.5">{role.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {role.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-[#111]/50 font-body">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#2563EB]/50 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

interface StatsProps {
  stats: Array<{ value: string; label: string }>;
  clients: string[];
}

export default function Stats({ stats, clients }: StatsProps) {
  return (
    <section className="bg-white border-y border-black/[0.06]">
      {/* Stats row */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-black/[0.06]">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="px-8 py-4 text-center"
            >
              <p className="font-heading font-extrabold text-[#111111] text-4xl">{s.value}</p>
              <p className="text-[#111]/40 font-body text-xs mt-1.5 leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Client marquee */}
      <div className="border-t border-black/[0.06] py-5 overflow-hidden bg-[#F2EFE9]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...clients, ...clients].map((c, i) => (
            <span key={i} className="text-[#111]/25 font-heading font-semibold text-sm uppercase tracking-widest flex-shrink-0">
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

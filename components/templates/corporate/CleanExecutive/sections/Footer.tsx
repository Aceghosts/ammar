"use client";
import { motion } from "framer-motion";

interface FooterProps {
  siteName: string;
  siteNameAccent: string;
  name: string;
  linkedIn: string;
  email: string;
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer({ siteName, siteNameAccent, name, linkedIn, email }: FooterProps) {
  const year = new Date().getFullYear();
  const links = ["About", "Experience", "Skills", "Awards", "Contact"];

  const accentIndex = siteName.lastIndexOf(siteNameAccent);
  const namePrefix = accentIndex >= 0 ? siteName.slice(0, accentIndex) : siteName;

  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#" className="font-heading font-bold text-white text-xl tracking-tight">
              {namePrefix}<span className="text-[#2563EB]">{siteNameAccent}</span>
            </a>
            <p className="text-white/30 font-body text-xs mt-2 max-w-[200px] leading-relaxed">
              Growth &amp; Performance Marketing Leader
            </p>
          </motion.div>

          {/* Nav */}
          <div className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-white/30 hover:text-white font-body text-sm transition-colors duration-200"
              >
                {l}
              </a>
            ))}
          </div>

          {/* Social + CTA */}
          <div className="flex items-center gap-3">
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center
                         text-white/30 hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white transition-all duration-200"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${email}`}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center
                         text-white/30 hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
            <a
              href="#contact"
              className="ml-2 px-5 py-2.5 rounded-full bg-[#2563EB] text-white text-sm
                         font-heading font-semibold hover:bg-[#1d4ed8] transition-all duration-200"
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-12 pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/20 font-body text-xs">
            © {year} {name}. All rights reserved.
          </p>
          <p className="text-white/20 font-body text-xs">
            Built with <span className="text-[#2563EB]/60">Presona</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

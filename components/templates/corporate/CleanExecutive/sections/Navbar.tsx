"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  siteName: string;
  siteNameAccent: string;
}

export default function Navbar({ siteName, siteNameAccent }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["About", "Experience", "Skills", "Awards", "Contact"];

  // Build display: everything before the accent, then accent
  const accentIndex = siteName.lastIndexOf(siteNameAccent);
  const namePrefix = accentIndex >= 0 ? siteName.slice(0, accentIndex) : siteName;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#F2EFE9]/90 backdrop-blur-lg border-b border-black/[0.06]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-heading font-bold text-[#111111] text-base tracking-tight">
            {namePrefix}<span className="text-[#2563EB]">{siteNameAccent}</span>
          </a>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase()}`}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i + 0.2 }}
                className="text-[#111111]/50 hover:text-[#111111] text-sm font-body transition-colors duration-200"
              >
                {l}
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hidden md:flex items-center gap-1.5 px-5 py-2.5 rounded-full
                       bg-[#2563EB] text-white text-sm font-heading font-semibold
                       hover:bg-[#1d4ed8] transition-all duration-200 shadow-md shadow-blue-500/20"
          >
            Get in touch
          </motion.a>

          <button className="md:hidden text-[#111]/60" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#F2EFE9] border-b border-black/[0.06] md:hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                  className="text-[#111]/50 hover:text-[#111] text-sm font-body">
                  {l}
                </a>
              ))}
              <a href="#contact" className="px-5 py-2.5 rounded-full bg-[#2563EB] text-white text-sm font-heading font-semibold text-center mt-1">
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

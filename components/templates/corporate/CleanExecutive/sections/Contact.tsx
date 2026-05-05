"use client";
import { motion } from "framer-motion";

interface ContactProps {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  contactHeading: string[];
  contactSubtext: string;
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// Derive LinkedIn display text from URL
function linkedInDisplay(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "");
}

export default function Contact({
  name: _name,
  email,
  phone,
  location,
  linkedIn,
  contactHeading,
  contactSubtext,
}: ContactProps) {
  const contactItems = [
    {
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: phone,
      href: `tel:${phone.replace(/\s+/g, "")}`,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      label: "Location",
      value: location,
      href: null,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: linkedInDisplay(linkedIn),
      href: linkedIn,
      icon: <LinkedInIcon className="w-5 h-5" />,
    },
  ];

  // Build heading: last word gets blue accent
  const headingLines = contactHeading.slice(0, -1);
  const lastLine = contactHeading[contactHeading.length - 1];

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-[#2563EB] font-body text-sm font-medium uppercase tracking-[0.2em] mb-4"
            >
              Get In Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading font-extrabold text-[#111111] leading-[1.05] mb-6"
              style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
            >
              {headingLines.map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
              <span className="text-[#2563EB]">{lastLine}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#111]/50 font-body text-base leading-relaxed max-w-sm mb-8"
            >
              {contactSubtext}
            </motion.p>
            <motion.a
              href={`mailto:${email}`}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#111111]
                         text-white font-heading font-semibold text-sm
                         hover:bg-[#2563EB] transition-all duration-300 shadow-sm"
            >
              Send Me a Message
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </motion.a>
          </div>

          {/* Right — Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pt-16">
            {contactItems.map(({ icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-black/[0.07]
                           bg-[#F9F8F6] hover:border-[#2563EB]/25 hover:bg-[#EFF6FF]/50
                           hover:shadow-sm transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-blue-100
                                flex items-center justify-center flex-shrink-0 text-[#2563EB]
                                group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-200">
                  {icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[#111]/30 text-xs uppercase tracking-wider font-body">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-[#111]/70 text-sm font-body hover:text-[#2563EB] transition-colors truncate block mt-0.5"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-[#111]/70 text-sm font-body truncate mt-0.5">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

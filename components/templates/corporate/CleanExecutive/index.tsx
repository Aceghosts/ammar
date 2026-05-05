import type { CleanExecutiveData } from "@/lib/types/clean-executive";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Awards from "./sections/Awards";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

interface CleanExecutiveProps {
  data: CleanExecutiveData;
}

export default function CleanExecutive({ data }: CleanExecutiveProps) {
  return (
    <div className="min-h-screen" style={{ background: "#F2EFE9", color: "#111111" }}>
      <Navbar
        siteName={data.siteName}
        siteNameAccent={data.siteNameAccent}
      />
      <Hero
        name={data.name}
        role={data.role}
        company={data.company}
        heroLines={data.heroLines}
        heroSubtitle={data.heroSubtitle}
        location={data.location}
        yearsExperience={data.yearsExperience}
        profileImage={data.profileImage}
        linkedIn={data.linkedIn}
      />
      <Stats
        stats={data.stats}
        clients={data.clients}
      />
      <About
        aboutParagraphs={data.aboutParagraphs}
        aboutQuote={data.aboutQuote}
        miniStats={data.miniStats}
        linkedIn={data.linkedIn}
      />
      <Experience
        experience={data.experience}
      />
      <Skills
        skills={data.skills}
        certifications={data.certifications}
      />
      <Awards
        awards={data.awards}
      />
      <Education
        education={data.education}
      />
      <Contact
        name={data.name}
        email={data.email}
        phone={data.phone}
        location={data.location}
        linkedIn={data.linkedIn}
        contactHeading={data.contactHeading}
        contactSubtext={data.contactSubtext}
      />
      <Footer
        siteName={data.siteName}
        siteNameAccent={data.siteNameAccent}
        name={data.name}
        linkedIn={data.linkedIn}
        email={data.email}
      />
    </div>
  );
}

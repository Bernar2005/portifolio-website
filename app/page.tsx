"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import ResumeModal from "@/components/ResumeModal";
import FullscreenToggle from "@/components/FullscreenToggle";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-[#f8fafc]">
      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>

      {/* Full CV Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Bottom Right Fullscreen Toggle */}
      <FullscreenToggle />
    </div>
  );
}

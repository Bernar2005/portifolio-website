"use client";

import { useState } from "react";
import { Menu, X, FileText, Code2, MapPin, Mail } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenResume: () => void;
}

export default function Navbar({ activeSection, setActiveSection, onOpenResume }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "services", href: "#services" },
  ];

  const handleNavClick = (href: string, name: string) => {
    setActiveSection(name.toLowerCase());
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0b0f19]/85 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick("#home", "Home")}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0ea5e9] to-[#38bdf8] p-0.5 flex items-center justify-center shadow-lg shadow-[#0ea5e9]/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center text-sm font-black text-[#38bdf8]">
              KB
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-[#38bdf8] transition-colors leading-tight">
              KWIZERA Bernard
            </span>
            <span className="text-[11px] font-semibold text-[#38bdf8] flex items-center gap-1">
              <MapPin size={10} /> Kigali, Rwanda
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href, item.name);
              }}
              className={`text-sm font-medium transition-all relative py-1 ${
                activeSection === item.name.toLowerCase()
                  ? "text-[#38bdf8] font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {item.name}
              {activeSection === item.name.toLowerCase() && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#38bdf8] rounded-full shadow-[0_0_8px_#38bdf8]" />
              )}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenResume}
            className="btn-secondary-glass px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer"
          >
            <FileText size={15} className="text-[#38bdf8]" />
            <span>View CV</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b0f19] border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href, item.name);
              }}
              className="text-base font-semibold text-slate-200 py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>{item.name}</span>
              <span className="text-[#38bdf8]">→</span>
            </a>
          ))}
          <button
            onClick={() => {
              onOpenResume();
              setMobileMenuOpen(false);
            }}
            className="btn-primary-cyan w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 mt-2"
          >
            <FileText size={16} />
            <span>View Full CV</span>
          </button>
        </div>
      )}
    </header>
  );
}

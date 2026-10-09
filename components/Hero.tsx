"use client";

import Image from "next/image";
import {
  ArrowRight,
  Download,
  Terminal,
  MapPin,
  Mail,
  Sparkles,
  CheckCircle2,
  Code,
} from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const techStack = [
    { name: "JavaScript", color: "from-yellow-400 to-amber-500" },
    { name: "Node.js", color: "from-emerald-400 to-green-600" },
    { name: "MySQL", color: "from-sky-400 to-blue-600" },
    { name: "Git & GitHub", color: "from-orange-400 to-red-500" },
    { name: "IoT & Java", color: "from-purple-400 to-indigo-600" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center py-12 lg:py-24 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="cyan-glow-bg top-10 left-10" />
      <div className="purple-glow-bg bottom-10 right-10" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column Text */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131c2e] border border-[#38bdf8]/30 shadow-sm text-xs font-semibold text-[#38bdf8]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>IPRC Kigali • Seeking Internship Opportunities</span>
          </div>

          {/* Main Titles */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
              KWIZERA <br />
              <span className="text-gradient-cyan">Bernard</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-300 flex items-center gap-2 pt-1">
              <Code className="text-[#38bdf8]" size={24} />
              <span>Full-Stack Web Developer & ICT Specialist</span>
            </h2>
          </div>

          {/* CV Summary Paragraph */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
            Motivated and dedicated Information Technology student at{" "}
            <strong className="text-white font-semibold">IPRC Kigali</strong>.
            Skilled in frontend & backend web development using{" "}
            <strong className="text-[#38bdf8] font-semibold">JavaScript</strong>
            , <strong className="text-[#38bdf8] font-semibold">Node.js</strong>,
            and <strong className="text-[#38bdf8] font-semibold">MySQL</strong>{" "}
            databases, with experience in version control via Git & GitHub and
            IoT solutions.
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#162136] text-slate-200 border border-white/10 hover:border-[#38bdf8]/40 transition-colors"
              >
                {tech.name}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="btn-primary-cyan px-7 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </a>

            <button
              onClick={onOpenResume}
              className="btn-secondary-glass px-6 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 cursor-pointer"
            >
              <Download size={17} className="text-[#38bdf8]" />
              <span>View Full CV</span>
            </button>
          </div>

          {/* Direct Email Badge */}
          <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Mail size={14} className="text-[#38bdf8]" />
            <span>kwizerabernard207@gmail.com</span>
            <span>•</span>
            <MapPin size={14} className="text-[#38bdf8]" />
            <span>Kigali, Rwanda</span>
          </div>
        </div>

        {/* Right Column: Photo & Code Card */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end z-10">
          {/* Main Photo Card */}
          <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
            {/* Glowing Border Background */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#0ea5e9] via-[#38bdf8] to-[#8b5cf6] opacity-40 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

            <div className="relative glass-card rounded-2xl overflow-hidden border border-white/15 p-3 shadow-2xl">
              {/* Photo */}
              <div className="relative w-full h-[320px] sm:h-[360px] rounded-xl overflow-hidden bg-[#162136]">
                <Image
                  src="/Bernard.jpeg"
                  alt="KWIZERA Bernard - IT Specialist"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80" />

                {/* Name Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0b0f19]/90 backdrop-blur-md rounded-xl border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-extrabold text-white">
                        KWIZERA Bernard
                      </p>
                      <p className="text-[11px] font-semibold text-[#38bdf8]">
                        IPRC Kigali • ICT Dept
                      </p>
                    </div>
                    <span className="text-xs bg-[#10b981]/20 text-[#10b981] px-2 py-1 rounded-md font-bold border border-[#10b981]/30">
                      Rwandan 🇷🇼
                    </span>
                  </div>
                </div>
              </div>

              {/* Mini Terminal Code Snippet Widget below photo */}
              <div className="mt-3 p-3 bg-[#080b12] rounded-xl border border-white/10 font-mono text-[11px]">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-slate-400 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <span className="text-[10px] text-slate-500">
                    developer_config.js
                  </span>
                </div>
                <p className="text-purple-400">
                  <span className="text-blue-400">const</span> developer =
                  &#123;
                </p>
                <p className="pl-3 text-slate-300">
                  name:{" "}
                  <span className="text-emerald-400">
                    &apos;KWIZERA Bernard&apos;
                  </span>
                  ,
                </p>
                <p className="pl-3 text-slate-300">
                  stack: [
                  <span className="text-amber-300">&apos;JavaScript&apos;</span>
                  , <span className="text-sky-400">&apos;Node.js&apos;</span>,{" "}
                  <span className="text-sky-400">&apos;MySQL&apos;</span>],
                </p>
                <p className="pl-3 text-slate-300">
                  seeking:{" "}
                  <span className="text-cyan-300">
                    &apos;Internship & Projects&apos;
                  </span>
                </p>
                <p className="text-purple-400">&#125;;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { User, GraduationCap, MapPin, Globe, CheckCircle2, Award, Brain, Users, Zap, MessageSquare } from "lucide-react";

export default function About() {
  const personalInfo = [
    { label: "Full Name", value: "KWIZERA Bernard" },
    { label: "Location", value: "Kigali, Rwanda 🇷🇼" },
    { label: "Institution", value: "IPRC Kigali" },
    { label: "Program", value: "Information Technology (IT)" },
    { label: "Department", value: "ICT" },
    { label: "Email", value: "kwizerabernard207@gmail.com" },
  ];

  const personalSkills = [
    { name: "Problem Solving", desc: "Logical approach to debugging code & system issues", icon: Brain },
    { name: "Analytical Thinking", desc: "Structured database & software architecture planning", icon: Zap },
    { name: "Teamwork & Collaboration", desc: "Effective Git/GitHub team workflow experience", icon: Users },
    { name: "Communication Skills", desc: "Clear reporting, documentation, and client dialogue", icon: MessageSquare },
    { name: "Fast Learner", desc: "Quickly mastering new web & AI technologies", icon: Award },
    { name: "Adaptability", desc: "Thriving across frontend, backend, and hardware IoT tasks", icon: Globe },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#0b0f19] border-t border-white/10">
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131c2e] border border-[#38bdf8]/30 text-xs font-bold uppercase tracking-wider text-[#38bdf8] mb-3">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Motivated IT Developer & Tech Innovator
          </h2>
        </div>

        {/* Top Grid: Bio & Personal Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Professional Profile */}
          <div className="lg:col-span-7 glass-card p-8 rounded-2xl border border-white/10 space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <GraduationCap className="text-[#38bdf8]" size={26} />
              <span>Professional Profile</span>
            </h3>
            
            <p className="text-slate-300 text-base leading-relaxed font-normal">
              Motivated and dedicated Information Technology student at <strong className="text-white">IPRC Kigali</strong> with a strong interest in software development, web technologies, and modern ICT solutions.
            </p>
            <p className="text-slate-300 text-base leading-relaxed font-normal">
              Skilled in both frontend and backend development with hands-on experience in <strong className="text-[#38bdf8]">JavaScript</strong>, <strong className="text-[#38bdf8]">Node.js</strong>, and <strong className="text-[#38bdf8]">MySQL databases</strong>. Familiar with version control using Git and GitHub. Seeking an internship opportunity to gain practical experience, enhance my programming skills, and contribute to innovative technology projects.
            </p>

            <div className="p-4 rounded-xl bg-[#162136] border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#38bdf8]/20 text-[#38bdf8] flex items-center justify-center font-bold text-xl">
                🎓
              </div>
              <div>
                <p className="text-sm font-extrabold text-white">IPRC Kigali - Information Technology</p>
                <p className="text-xs text-slate-400">ICT Department • Specializing in Web & Software Systems</p>
              </div>
            </div>
          </div>

          {/* Personal Info Card */}
          <div className="lg:col-span-5 glass-card p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
              Personal Details
            </h3>
            <div className="space-y-4">
              {personalInfo.map((info) => (
                <div key={info.label} className="flex items-center justify-between border-b border-white/5 pb-2 text-sm">
                  <span className="text-slate-400 font-semibold">{info.label}</span>
                  <span className="text-slate-200 font-bold text-right">{info.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Personal Skills Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <CheckCircle2 size={24} className="text-[#38bdf8]" />
            <span>Personal & Soft Skills</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="glass-card glass-card-hover p-6 rounded-xl border border-white/10 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-[#38bdf8]/15 text-[#38bdf8]">
                      <Icon size={22} />
                    </div>
                    <h4 className="text-lg font-bold text-white">{skill.name}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{skill.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import {
  Code2,
  Database,
  Wrench,
  Cpu,
  Monitor,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Web & Full-Stack Development",
      icon: Code2,
      color: "from-sky-500 to-blue-600",
      skills: [
        {
          name: "JavaScript (JS)",
          level: "Intermediate",
          detail: "Frontend interactivity & Backend Node.js logic",
        },
        {
          name: "Node.js",
          level: "Intermediate",
          detail: "RESTful APIs, server routing, and backend services",
        },
        {
          name: "HTML5",
          level: "Intermediate",
          detail: "Semantic, accessible web structure",
        },
        {
          name: "CSS3",
          level: "Intermediate",
          detail: "Responsive layouts, Flexbox, Grid, custom styling",
        },
      ],
    },
    {
      title: "Database & Data Management",
      icon: Database,
      color: "from-emerald-500 to-teal-600",
      skills: [
        {
          name: "MySQL",
          level: "Intermediate",
          detail: "Relational database design, SQL queries & data integrity",
        },
        {
          name: "Database Architecture",
          level: "Intermediate",
          detail: "Table schema design, primary/foreign keys, joins",
        },
      ],
    },
    {
      title: "Programming Languages",
      icon: Cpu,
      color: "from-purple-500 to-indigo-600",
      skills: [
        {
          name: "JavaScript",
          level: "Intermediate",
          detail: "Core language mastery for modern web apps",
        },
        {
          name: "Python",
          level: "Intermediate",
          detail: "Scripting and algorithmic problem solving",
        },
        {
          name: "Java",
          level: "Intermediate",
          detail: "Object-oriented programming for IoT applications",
        },
      ],
    },
    {
      title: "IoT & Embedded Systems",
      icon: Cpu,
      color: "from-pink-500 to-rose-600",
      skills: [
        {
          name: "Arduino",
          level: "Intermediate",
          detail: "Microcontroller programming and hardware interfacing",
        },
        {
          name: "Raspberry Pi",
          level: "Intermediate",
          detail: "Single-board computing and IoT prototyping",
        },
        {
          name: "Sensor Integration",
          level: "Intermediate",
          detail: "Connecting and reading data from various sensors",
        },
        {
          name: "IoT Communication Protocols",
          level: "Intermediate",
          detail: "MQTT, Serial communication, Wireless protocols",
        },
        {
          name: "Embedded Programming",
          level: "Intermediate",
          detail: "Low-level hardware control and optimization",
        },
      ],
    },
    {
      title: "Development Tools & Emerging Tech",
      icon: Wrench,
      color: "from-amber-500 to-orange-600",
      skills: [
        {
          name: "Git",
          level: "Intermediate",
          detail: "Branching, committing, code history tracking",
        },
        {
          name: "GitHub",
          level: "Intermediate",
          detail: "Repository management and project collaboration",
        },
        {
          name: "AI Tools & Usage",
          level: "Intermediate",
          detail: "AI-assisted coding, research, and debugging",
        },
        {
          name: "Internet of Things (IoT)",
          level: "Intermediate",
          detail: "IoT hardware integration and sensor concepts",
        },
        {
          name: "PC Maintenance",
          level: "Intermediate",
          detail: "Computer troubleshooting and maintenance",
        },
      ],
    },
    {
      title: "Microsoft Office & Systems",
      icon: Monitor,
      color: "from-blue-500 to-indigo-600",
      skills: [
        {
          name: "Microsoft Word",
          level: "Intermediate",
          detail: "Documentation and report writing",
        },
        {
          name: "Microsoft Excel",
          level: "Intermediate",
          detail: "Data calculation and spreadsheet analysis",
        },
        {
          name: "Microsoft PowerPoint",
          level: "Intermediate",
          detail: "Technical presentations and slides",
        },
        {
          name: "Microsoft Publisher",
          level: "Intermediate",
          detail: "Document layouts and publications",
        },
        {
          name: "Microsoft Access",
          level: "Intermediate",
          detail: "Relational desktop database management",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 lg:py-28 relative bg-[#0b0f19] border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131c2e] border border-[#38bdf8]/30 text-xs font-bold uppercase tracking-wider text-[#38bdf8] mb-3">
            <Sparkles size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical Skills & Tools
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="glass-card glass-card-hover p-8 rounded-2xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3.5 rounded-xl bg-[#131c2e]/80 border border-white/5 flex items-center justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <CheckCircle size={15} className="text-[#38bdf8]" />
                            <span className="text-sm font-bold text-white">
                              {skill.name}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 pl-5 pt-0.5">
                            {skill.detail}
                          </p>
                        </div>
                        <span className="text-[11px] font-semibold text-[#38bdf8] bg-[#38bdf8]/10 px-2.5 py-1 rounded-md border border-[#38bdf8]/20 shrink-0">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, FolderGit2, Code, Database, Cpu } from "lucide-react";
import ProjectModal, { Project } from "./ProjectModal";

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const projects: Project[] = [
    {
      id: "fullstack-web-platform",
      title: "Responsive Full-Stack Web Application",
      subtitle: "Dynamic web pages crafted using modern HTML, CSS, JavaScript, and responsive design patterns.",
      category: "Web Development",
      image: "/bernard_project1.png",
      year: "2024",
      client: "IPRC Kigali Practical Project",
      description: "Full-stack client web portal featuring interactive user forms, dynamic DOM manipulation, and responsive mobile-first styling.",
      challenge: "Creating an accessible, fast-loading user interface capable of scaling across desktop, tablet, and mobile devices smoothly.",
      solution: "Implemented CSS Flexbox & Grid layouts, clean modular JavaScript functions, and streamlined asset optimization.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"],
      metrics: [
        { label: "Lighthouse Performance", value: "98/100" },
        { label: "Cross-Device Support", value: "100%" },
        { label: "Code Coverage", value: "Clean JS" },
      ],
    },
    {
      id: "nodejs-mysql-api",
      title: "Node.js REST API & MySQL Database System",
      subtitle: "Robust backend server environment built with Node.js and structured relational MySQL databases.",
      category: "Backend & Database",
      image: "/bernard_project2.png",
      year: "2024",
      client: "Database & Web Systems Course",
      description: "Backend architecture managing user data CRUD operations, relational database queries, and secure API endpoints.",
      challenge: "Designing an efficient relational database schema to minimize data redundancy and execute fast SQL query joins.",
      solution: "Structured normalized MySQL tables with foreign key constraints and integrated Node.js database drivers for asynchronous queries.",
      tags: ["Node.js", "MySQL", "Express API", "Database Design", "SQL Queries"],
      metrics: [
        { label: "Query Execution Speed", value: "< 20ms" },
        { label: "Database Normalization", value: "3NF" },
        { label: "API Endpoints", value: "RESTful" },
      ],
    },
    {
      id: "iot-java-monitoring",
      title: "IoT Smart Monitoring & Java Hardware Integration",
      subtitle: "Internet of Things concept project utilizing Java for sensor data acquisition and automated system reporting.",
      category: "IoT & Hardware",
      image: "/project3.png",
      year: "2024",
      client: "IoT Technology Exploration",
      description: "Embedded system prototype capturing environmental telemetry data and alerting systems via Java microcontrollers.",
      challenge: "Establishing reliable data transmission between hardware sensor modules and local monitoring displays.",
      solution: "Programmed Java event handlers and hardware sensor protocols to capture real-time readings and log status metrics.",
      tags: ["Java", "IoT Concepts", "Sensors", "Hardware Integration", "Automation"],
      metrics: [
        { label: "Sensor Refresh Rate", value: "1 Sec" },
        { label: "System Uptime", value: "99.9%" },
        { label: "Telemetry Metrics", value: "Real-time" },
      ],
    },
  ];

  const filterCategories = ["All", "Web Development", "Backend & Database", "IoT & Hardware"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#0b0f19] border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131c2e] border border-[#38bdf8]/30 text-xs font-bold uppercase tracking-wider text-[#38bdf8] mb-3">
              <FolderGit2 size={14} />
              <span>Practical Experience</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Projects & Code Showcase
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#38bdf8] text-[#0b0f19] shadow-lg shadow-[#38bdf8]/20 font-bold"
                    : "bg-[#131c2e] text-slate-300 border border-white/10 hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group glass-card glass-card-hover rounded-2xl overflow-hidden border border-white/10 shadow-lg cursor-pointer flex flex-col justify-between"
            >
              {/* Card Image */}
              <div className="relative w-full h-[220px] bg-[#131c2e] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#0b0f19]/90 text-[#38bdf8] p-2 rounded-full opacity-90 group-hover:scale-110 border border-white/10 transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#38bdf8]">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-white group-hover:text-[#38bdf8] transition-colors mt-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {project.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">{project.client}</span>
                  <span className="text-xs font-bold text-[#38bdf8] group-hover:underline">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

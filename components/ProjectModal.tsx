"use client";

import Image from "next/image";
import { X, ExternalLink, ArrowRight, CheckCircle2, Code2, Terminal } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  year: string;
  client: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0b0f19]/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-10 text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-[#38bdf8] hover:text-[#0b0f19] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 text-xs font-bold text-[#38bdf8] mb-2 uppercase tracking-wider">
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.client}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
            {project.title}
          </h2>
          <p className="text-base text-slate-300 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[240px] sm:h-[360px] rounded-xl overflow-hidden border border-white/10 mb-8 bg-[#131c2e]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 bg-[#131c2e] p-6 rounded-xl border border-white/10">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-[#38bdf8]">{m.value}</span>
              <span className="text-xs font-semibold text-slate-300">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Detailed Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-slate-300">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Terminal size={18} className="text-[#38bdf8]" />
              <span>Project Objective & Challenge</span>
            </h3>
            <p className="text-sm leading-relaxed">{project.challenge}</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Code2 size={18} className="text-[#38bdf8]" />
              <span>Technical Solution & Architecture</span>
            </h3>
            <p className="text-sm leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-[#38bdf8]/15 text-[#38bdf8] border border-[#38bdf8]/30 text-xs font-semibold rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { X, Download, Briefcase, GraduationCap, Award, CheckCircle2, Phone, Mail, MapPin, Code2, Database, Wrench, FileText, User } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    // Simple window print / download trigger
    window.print();
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0b0f19]/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-10 text-white">
        
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-6 mb-6 gap-4">
          <div>
            <h2 className="text-3xl font-black text-white tracking-tight">KWIZERA Bernard</h2>
            <p className="text-sm font-semibold text-[#38bdf8] flex items-center gap-2 mt-1">
              <MapPin size={14} /> Kigali, Rwanda • Email: kwizerabernard207@gmail.com
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="btn-primary-cyan px-4 py-2 text-xs font-bold rounded-xl flex items-center gap-2 cursor-pointer"
            >
              {downloaded ? (
                <>
                  <CheckCircle2 size={16} />
                  <span>Preparing PDF...</span>
                </>
              ) : (
                <>
                  <Download size={16} />
                  <span>Download / Print CV</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-[#38bdf8] hover:text-[#0b0f19] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* CV Sections */}
        <div className="space-y-8 text-slate-200 text-sm">
          
          {/* Professional Profile */}
          <div className="bg-[#131c2e] p-6 rounded-xl border border-white/10 space-y-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 uppercase tracking-wider text-[#38bdf8]">
              <FileText size={18} />
              <span>Professional Profile</span>
            </h3>
            <p className="leading-relaxed text-slate-300">
              Motivated and dedicated Information Technology student at IPRC Kigali with strong interest in software development, web technologies, and modern ICT solutions. Skilled in both frontend and backend development with experience in JavaScript, Node.js, and MySQL databases. Familiar with version control using Git and GitHub. Seeking an internship opportunity to gain practical experience, enhance my programming skills, and contribute to innovative technology projects.
            </p>
          </div>

          {/* Personal Information & Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#131c2e] p-6 rounded-xl border border-white/10">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider text-[#38bdf8]">
                <User size={18} />
                <span>Personal Information</span>
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li><strong className="text-white">Full Name:</strong> KWIZERA Bernard</li>
                <li><strong className="text-white">Nationality:</strong> Rwandan</li>
                <li><strong className="text-white">Location:</strong> Kigali, Rwanda</li>
                <li><strong className="text-white">Email:</strong> kwizerabernard207@gmail.com</li>
              </ul>
            </div>

            <div className="bg-[#131c2e] p-6 rounded-xl border border-white/10">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider text-[#38bdf8]">
                <GraduationCap size={18} />
                <span>Education</span>
              </h3>
              <div className="space-y-1">
                <p className="text-base font-bold text-white">IPRC Kigali</p>
                <p><strong className="text-white">Program:</strong> Information Technology</p>
                <p><strong className="text-white">Department:</strong> ICT</p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="bg-[#131c2e] p-6 rounded-xl border border-white/10 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2 uppercase tracking-wider text-[#38bdf8]">
              <Code2 size={18} />
              <span>Technical Skills</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold text-white mb-1">Programming Languages:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
                  <li>JavaScript (Frontend and Backend)</li>
                  <li>Python (Basic)</li>
                  <li>Java (Basic – IoT Based Applications)</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-white mb-1">Web Development:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Node.js (Backend Development)</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-white mb-1">Database:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
                  <li>MySQL (Database Design, Queries, and Data Management)</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-white mb-1">Development Tools:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
                  <li>Git (Version Control)</li>
                  <li>GitHub (Code Collaboration and Project Management)</li>
                </ul>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold text-white mb-1">Other Technologies:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
                  <li>Basic Artificial Intelligence tools and usage</li>
                  <li>Internet of Things (IoT) concepts and applications</li>
                  <li>Computer troubleshooting and maintenance</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-white mb-1">Microsoft Windows Skills:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
                  <li>Microsoft Word & Excel</li>
                  <li>Microsoft PowerPoint & Publisher</li>
                  <li>Microsoft Server Access</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Personal Skills & Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#131c2e] p-6 rounded-xl border border-white/10">
              <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2 uppercase tracking-wider text-[#38bdf8]">
                <CheckCircle2 size={18} />
                <span>Personal Skills</span>
              </h3>
              <ul className="grid grid-cols-2 gap-2 text-slate-300">
                <li>• Problem Solving</li>
                <li>• Analytical Thinking</li>
                <li>• Teamwork & Collaboration</li>
                <li>• Communication Skills</li>
                <li>• Fast Learner</li>
                <li>• Adaptability</li>
              </ul>
            </div>

            <div className="bg-[#131c2e] p-6 rounded-xl border border-white/10">
              <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2 uppercase tracking-wider text-[#38bdf8]">
                <Briefcase size={18} />
                <span>Projects / Practical Experience</span>
              </h3>
              <ul className="space-y-1.5 text-slate-300 text-xs">
                <li>• Developed responsive web pages using HTML, CSS, and JavaScript</li>
                <li>• Built simple backend applications using Node.js</li>
                <li>• Designed and managed databases using MySQL</li>
                <li>• Used Git and GitHub for version control and project collaboration</li>
                <li>• Explored IoT-based programming using Java</li>
                <li>• Used AI tools to assist in development and research</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

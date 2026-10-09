"use client";

import { useState } from "react";
import { Copy, Check, Send, Mail, MapPin, GraduationCap } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const email = "kwizerabernard207@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#0b0f19] border-t border-white/10 relative"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131c2e] border border-[#38bdf8]/30 text-xs font-bold uppercase tracking-wider text-[#38bdf8] mb-3">
                <Mail size={14} />
                <span>Contact & Opportunities</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Let&apos;s connect and build innovative technology.
              </h2>
            </div>

            <p className="text-base text-slate-300 font-normal leading-relaxed">
              Seeking software development internships, full-stack web projects,
              or technical collaboration in Kigali, Rwanda & remotely. Feel free
              to reach out!
            </p>

            {/* Email Copy Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
                  Direct Email
                </span>
                <p className="text-lg font-bold text-white mt-0.5">{email}</p>
              </div>
              <button
                onClick={handleCopyEmail}
                className="btn-primary-cyan px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shrink-0"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-semibold text-slate-300">
              <div className="p-4 rounded-xl bg-[#131c2e] border border-white/10 flex items-center gap-3">
                <MapPin size={20} className="text-[#38bdf8]" />
                <div>
                  <p className="text-white font-bold">Location</p>
                  <p className="text-slate-400">Kigali, Rwanda 🇷🇼</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#131c2e] border border-white/10 flex items-center gap-3">
                <GraduationCap size={20} className="text-[#38bdf8]" />
                <div>
                  <p className="text-white font-bold">Education</p>
                  <p className="text-slate-400">IPRC Kigali (IT / ICT)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 glass-card p-8 rounded-2xl border border-white/15 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 bg-[#38bdf8]/20 text-[#38bdf8] rounded-full flex items-center justify-center mx-auto text-2xl font-bold border border-[#38bdf8]/40">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-sm text-slate-300">
                  Thank you for getting in touch. Bernard will respond to your
                  message promptly. Check your email for a confirmation!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2">
                  Send a Message
                </h3>

                {error && (
                  <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold uppercase text-slate-300 mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Jean Paul"
                    className="w-full px-4 py-3 bg-[#080b12] border border-white/10 rounded-xl text-white font-medium focus:outline-none focus:border-[#38bdf8]"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase text-slate-300 mb-1.5"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="e.g. jeanpaul@company.com"
                    className="w-full px-4 py-3 bg-[#080b12] border border-white/10 rounded-xl text-white font-medium focus:outline-none focus:border-[#38bdf8]"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase text-slate-300 mb-1.5"
                  >
                    Message / Internship Details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Share project requirements, internship opportunities, or inquiries..."
                    className="w-full px-4 py-3 bg-[#080b12] border border-white/10 rounded-xl text-white font-medium focus:outline-none focus:border-[#38bdf8] resize-none"
                    disabled={loading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`btn-primary-cyan w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 ${loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <Send size={16} />
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
          <p>
            © {new Date().getFullYear()} KWIZERA Bernard. All Rights Reserved •
            Kigali, Rwanda.
          </p>
          <div className="flex gap-6 items-center">
            <span>JavaScript</span>
            <span>•</span>
            <span>Node.js</span>
            <span>•</span>
            <span>MySQL</span>
            <span>•</span>
            <span>Git & GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
}

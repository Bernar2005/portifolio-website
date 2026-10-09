"use client";

import { useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";

export default function FullscreenToggle() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  return (
    <button
      onClick={toggleFullscreen}
      className="fixed bottom-6 right-6 z-40 p-3 bg-[#111625] text-white rounded-xl shadow-xl hover:bg-[#1c243c] hover:scale-105 active:scale-95 transition-all flex items-center justify-center border border-white/10 group"
      title="Toggle Fullscreen"
      aria-label="Toggle Fullscreen"
    >
      {isFullscreen ? (
        <Minimize2 size={20} className="group-hover:rotate-90 transition-transform duration-300" />
      ) : (
        <Maximize2 size={20} className="group-hover:rotate-90 transition-transform duration-300" />
      )}
    </button>
  );
}

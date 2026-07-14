"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

export default function PlayVideoButton({ src }: { src: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Play video"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-white text-navy-deep shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-transform hover:scale-110"
      >
        <Play size={22} className="ml-1" fill="currentColor" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-navy-deep/90 backdrop-blur-sm px-6"
          onClick={() => setOpen(false)}
        >
          <button
            aria-label="Close video"
            className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setOpen(false)}
          >
            <X size={22} />
          </button>
          <video
            src={src}
            controls
            autoPlay
            className="max-h-[80vh] w-full max-w-4xl rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

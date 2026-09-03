"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "https://www.marvelfountains.com/images/mf5.jpg", alt: "Grand entrance fountain installation" },
  { src: "https://www.marvelfountains.com/img/wf5.jpg", alt: "Wall-mounted water feature installation" },
  { src: "https://www.marvelfountains.com/img/st13.jpg", alt: "Garden fountain installation" },
  { src: "https://www.marvelfountains.com/img/ff5.jpg", alt: "Pool fountain installation" },
  { src: "https://www.marvelfountains.com/images/mf6.jpg", alt: "Commercial fountain installation" },
  { src: "https://www.marvelfountains.com/img/wf6.jpg", alt: "LED wall fountain installation" },
  { src: "https://www.marvelfountains.com/img/st14.jpg", alt: "Courtyard fountain installation" },
  { src: "https://www.marvelfountains.com/img/ff6.jpg", alt: "Rooftop fountain installation" },
];

export default function PortfolioSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-[8%] py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((img) => (
          <div
            key={img.src}
            className="relative h-[420px] w-[78%] sm:w-[60%] lg:w-[46%] shrink-0 snap-center overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(13,21,38,0.2)]"
          >
            <Image src={img.src} alt={img.alt} fill sizes="60vw" className="object-cover" />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll(-1)}
        aria-label="Previous"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy-deep shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-transform hover:scale-110"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => scroll(1)}
        aria-label="Next"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy-deep shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-transform hover:scale-110"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}

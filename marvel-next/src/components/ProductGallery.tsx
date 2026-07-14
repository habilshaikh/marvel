"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ name, thumbs }: { name: string; thumbs: string[] }) {
  const [active, setActive] = useState(thumbs[0]);

  return (
    <div>
      <div className="w-full h-[460px] relative bg-sand">
        <Image src={active} alt={name} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" priority />
      </div>
      <div className="grid grid-cols-4 gap-2.5 mt-2.5">
        {thumbs.map((t, i) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`relative h-20 w-full cursor-pointer transition-all ${
              active === t ? "opacity-100 -translate-y-0.5" : "opacity-65 hover:opacity-100 hover:-translate-y-0.5"
            }`}
            aria-label={`Thumbnail ${i + 1}`}
          >
            <Image src={t} alt={`Thumbnail ${i + 1}`} fill sizes="150px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

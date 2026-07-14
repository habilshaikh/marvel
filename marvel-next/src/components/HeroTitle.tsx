"use client";

import { motion } from "framer-motion";
import { Fragment } from "react";

type Word = string | { word: string; em?: boolean };

const words: Word[] = [
  "Designing",
  "Timeless",
  { word: "Water", em: true },
  { word: "Fountains", em: true },
  "for",
  "Elegant",
  "Living",
  "Spaces",
];

export default function HeroTitle({ className = "" }: { className?: string }) {
  return (
    <h1 className={className}>
      {words.map((w, i) => {
        const isEm = typeof w !== "string" && w.em;
        const text = typeof w === "string" ? w : w.word;
        return (
          <Fragment key={i}>
            <span className="inline-block overflow-hidden align-top">
              <motion.span
                className={`inline-block ${isEm ? "text-gold italic" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {text}
              </motion.span>
            </span>
            {i < words.length - 1 ? " " : ""}
          </Fragment>
        );
      })}
    </h1>
  );
}

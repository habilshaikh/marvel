"use client";

import Link from "next/link";
import { MouseEvent } from "react";

type RippleLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function RippleLink({ href, className = "", children }: RippleLinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const span = document.createElement("span");
    const size = Math.max(rect.width, rect.height);
    span.className = "ripple-span";
    span.style.width = span.style.height = `${size}px`;
    span.style.left = `${e.clientX - rect.left - size / 2}px`;
    span.style.top = `${e.clientY - rect.top - size / 2}px`;
    target.appendChild(span);
    setTimeout(() => span.remove(), 600);
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
    </Link>
  );
}

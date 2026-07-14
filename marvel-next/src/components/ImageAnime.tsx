import Image from "next/image";

export default function ImageAnime({
  src,
  alt,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-0 w-[200%] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/30 transition-all duration-[600ms] ease-linear group-hover:h-[250%] group-hover:bg-white/0"
      />
    </div>
  );
}

import { Droplets, Waves } from "lucide-react";
import Reveal from "./Reveal";
import ImageAnime from "./ImageAnime";
import PlayVideoButton from "./PlayVideoButton";
import Link from "next/link";

const bodyItems = [
  {
    Icon: Droplets,
    title: "Fountain Design Experts",
    desc: "Creative indoor and outdoor fountain solutions.",
  },
  {
    Icon: Waves,
    title: "Complete Water Solutions",
    desc: "From tabletop fountains to grand installations, we handle it all.",
  },
];

export default function AboutSection({ eyebrow = "About Us" }: { eyebrow?: string }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-x-14 gap-y-10">
      {/* LEFT: stacked images */}
      <Reveal variant="fade-left" className="relative h-[440px] sm:h-[520px]">
        <div className="absolute top-0 left-0 h-[72%] w-[72%] before:content-[''] before:absolute before:inset-0 before:border before:border-gold before:translate-x-4 before:translate-y-4 before:-z-10">
          <ImageAnime
            src="https://images.pexels.com/photos/19621560/pexels-photo-19621560.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Luxurious contemporary indoor fountain installation"
            className="h-full bg-gradient-to-br from-[#e9e6df] to-[#d8d4ca] rounded-2xl"
          />
        </div>
        <div className="absolute bottom-0 right-0 h-[55%] w-[55%] shadow-[0_20px_50px_rgba(13,21,38,0.25)]">
          <ImageAnime
            src="https://images.pexels.com/photos/32039197/pexels-photo-32039197.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Elegant tiered garden fountain"
            className="h-full bg-navy rounded-2xl border-4 border-paper"
          />
        </div>
      </Reveal>

      {/* RIGHT: content */}
      <div>
        <Reveal variant="fade-right">
          <div className="flex items-center gap-3.5 mb-4.5 text-gold text-xs font-semibold tracking-[3px] uppercase before:content-[''] before:w-8.5 before:h-px before:bg-gold">
            {eyebrow}
          </div>
          <h3 className="text-[30px] text-ink mb-5 font-bold font-serif">
            15+ Years of Fountain Craftsmanship
          </h3>
        </Reveal>

        <Reveal variant="fade-right" delay={0.2}>
          <p className="text-muted mb-3.5 font-light">
            Marvel Fountains has been transforming homes, hotels, offices and gardens with beautifully engineered
            water features. Every product is built using high-grade materials, weatherproof finishes, and precision
            pumps for silent, reliable performance.
          </p>
          <p className="text-muted mb-6.5 font-light">
            From compact tabletop fountains to grand outdoor centerpieces, our team handles design, manufacturing,
            delivery and installation end-to-end.
          </p>
        </Reveal>

        <Reveal variant="fade-right" delay={0.4} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8.5">
          {bodyItems.map(({ Icon, title, desc }) => (
            <div key={title} className="flex gap-4 items-start">
              <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-deep text-navy-deep shadow-[0_6px_16px_rgba(212,175,55,0.3)]">
                <Icon size={18} strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="text-ink text-[15px] font-bold font-serif mb-1">{title}</h4>
                <p className="text-muted text-[13px] font-light">{desc}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal variant="fade-right" delay={0.6} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-7 pt-7.5 border-t border-line">
          <div className="flex-1">
            <ul className="flex flex-col gap-2.5 mb-5">
              {["Indoor & Outdoor Fountains", "Custom Wall Features", "Garden & Pool Fountains"].map((item) => (
                <li key={item} className="relative pl-5 text-sm text-ink before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-1.5 before:w-1.5 before:bg-gold">
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex rounded-full bg-gradient-to-r from-gold to-gold-deep text-navy-deep px-7 py-3 text-xs font-bold tracking-widest uppercase shadow-[0_8px_20px_rgba(212,175,55,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(212,175,55,0.4)]"
            >
              Know More
            </Link>
          </div>
          <div className="relative w-full sm:w-[180px] h-[130px] shrink-0 overflow-hidden rounded-2xl">
            <ImageAnime
              src="https://www.marvelfountains.com/images/mf6.jpg"
              alt="Marvel Fountains video"
              className="h-full"
              sizes="180px"
            />
            <PlayVideoButton src="/videos/hero-fountain.mp4" />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

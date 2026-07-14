import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.908 8.96934C15.4978 8.96934 13.3011 6.68213 13.3011 4.17043V3.14062H11.3238V4.17043C11.3238 5.99731 12.093 7.71091 13.3001 8.96934L1.10156 8.96934L1.10156 11.029L13.3001 11.029C12.093 12.2874 11.3238 14.001 11.3238 15.8279V16.8577H13.3011V15.8279C13.3011 13.3162 15.4978 11.029 17.908 11.029H18.8966V8.96934H17.908Z"
        fill="currentColor"
      />
    </svg>
  );
}

const services = [
  {
    num: "01.",
    title: "Indoor Fountain Design",
    desc: "Elegant tabletop and wall fountains designed to enhance interiors with soothing water aesthetics.",
    image: "https://www.marvelfountains.com/img/st5.jpg",
    href: "/products/tabletop-zen-fountain",
  },
  {
    num: "02.",
    title: "Outdoor Garden Fountains",
    desc: "Custom multi-tier fountains for gardens, lawns and courtyards, built weatherproof and UV-resistant.",
    image: "https://www.marvelfountains.com/img/st1.jpg",
    href: "/products/classic-garden-fountain",
  },
  {
    num: "03.",
    title: "Wall & LED Water Features",
    desc: "Modern slate-panel wall fountains with ambient LED lighting for lobbies and living rooms.",
    image: "https://www.marvelfountains.com/img/wf1.jpg",
    href: "/products/wall-mounted-water-feature",
  },
  {
    num: "04.",
    title: "Installation & Maintenance",
    desc: "End-to-end setup, testing and ongoing servicing — with a 2-year warranty on pumps & motors.",
    image: "https://www.marvelfountains.com/images/mf1.jpg",
    href: "/products/grand-entrance-fountain",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-sand py-30 px-7">
      <div className="max-w-[1240px] mx-auto">
        <Reveal className="max-w-[640px] mx-auto mb-15 text-center">
          <div className="flex items-center justify-center gap-3.5 mb-4.5 text-gold text-xs font-semibold tracking-[3px] uppercase before:content-[''] before:w-8.5 before:h-px before:bg-gold">
            02 — Our Services
          </div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-ink font-serif">
            Premium Water Feature Solutions
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.15}>
              <Link href={s.href} className="group flex h-full flex-col gap-6 rounded-2xl bg-paper p-4 shadow-[0_2px_10px_rgba(13,21,38,0.05)] transition-all duration-400 ease-in-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(13,21,38,0.25)]">
                <div className="p-3">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-[19px] font-bold font-serif text-ink leading-tight transition-colors duration-300 group-hover:text-gold-deep">{s.title}</h3>
                    <span className="text-[19px] font-bold font-serif text-gold shrink-0">{s.num}</span>
                  </div>
                  <div className="mt-4 border-t border-line pt-4">
                    <p className="text-muted text-sm font-light">{s.desc}</p>
                  </div>
                </div>

                <div className="relative aspect-[1/0.81] overflow-hidden rounded-xl">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-600 ease-in-out group-hover:scale-[1.08]"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/2 h-0 w-[200%] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/30 transition-all duration-[600ms] ease-linear group-hover:h-[250%] group-hover:bg-white/0"
                  />
                  <span className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 scale-0 items-center justify-center rounded-full bg-gold opacity-0 transition-all duration-400 ease-in-out group-hover:scale-100 group-hover:opacity-100">
                    <ArrowIcon className="-rotate-45 text-navy-deep transition-transform duration-400 ease-in-out group-hover:rotate-0" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

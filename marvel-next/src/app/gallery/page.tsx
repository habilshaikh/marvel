import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/CtaSection";
import Breadcrumb from "@/components/Breadcrumb";
import PortfolioSlider from "@/components/PortfolioSlider";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Gallery | Marvel Fountains" };

const galleryImages = [
  { src: "https://www.marvelfountains.com/images/mf5.jpg", alt: "Installation 1" },
  { src: "https://www.marvelfountains.com/img/wf5.jpg", alt: "Installation 2" },
  { src: "https://www.marvelfountains.com/img/st13.jpg", alt: "Installation 3" },
  { src: "https://www.marvelfountains.com/img/ff5.jpg", alt: "Installation 4" },
  { src: "https://www.marvelfountains.com/images/mf6.jpg", alt: "Installation 5" },
  { src: "https://www.marvelfountains.com/img/wf6.jpg", alt: "Installation 6" },
  { src: "https://www.marvelfountains.com/img/st14.jpg", alt: "Installation 7" },
  { src: "https://www.marvelfountains.com/img/ff6.jpg", alt: "Installation 8" },
  { src: "https://www.marvelfountains.com/images/mf7.jpg", alt: "Installation 9" },
];

export default function GalleryPage() {
  return (
    <>
      <Header solid />

      <div className="relative overflow-hidden bg-paper">
        <div className="pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-cyan/20 blur-[110px]" />
        <div className="pointer-events-none absolute top-40 -right-32 h-[380px] w-[380px] rounded-full bg-gold/15 blur-[110px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-[1]">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Gallery" }]} />
        </div>

      <section className="relative z-[1] px-7 pb-30">
        <div className="max-w-[1240px] mx-auto">
          <Reveal className="max-w-[640px] mx-auto mb-15 text-center">
            <div className="flex items-center justify-center gap-3.5 mb-4.5 text-gold text-xs font-semibold tracking-[3px] uppercase before:content-[''] before:w-8.5 before:h-px before:bg-gold">
              Gallery
            </div>
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-ink mb-4 font-serif">A Glimpse of Our Work</h2>
            <p className="text-muted text-[15.5px] font-light">
              Some of our finished installations across homes & businesses.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <Reveal
                key={img.alt}
                variant="zoom-in"
                delay={(i % 6) * 0.08}
                className={`h-[190px] rounded-xl bg-sand border relative overflow-hidden transition-all duration-350 hover:scale-[1.03] hover:z-[2] group ${
                  i % 2 === 0
                    ? "border-cyan/20 hover:border-cyan/60 hover:shadow-[0_20px_45px_rgba(63,197,240,0.25)]"
                    : "border-gold/20 hover:border-gold/60 hover:shadow-[0_20px_45px_rgba(240,194,75,0.25)]"
                }`}
              >
                <Image src={img.src} alt={img.alt} fill sizes="33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute bottom-3 left-3.5 text-[11px] tracking-widest uppercase text-white font-semibold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {img.alt}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      </div>

      <section className="relative overflow-hidden bg-sand py-30">
        <div className="pointer-events-none absolute top-0 right-0 h-[360px] w-[360px] rounded-full bg-gold/12 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-cyan/12 blur-[120px]" />
        <Reveal className="relative z-[1] max-w-[640px] mx-auto mb-15 text-center px-7">
          <div className="flex items-center justify-center gap-3.5 mb-4.5 text-gold text-xs font-semibold tracking-[3px] uppercase before:content-[''] before:w-8.5 before:h-px before:bg-gold">
            Portfolio
          </div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-ink font-serif">Browse Our Installations</h2>
        </Reveal>
        <div className="relative z-[1]">
          <PortfolioSlider />
        </div>
      </section>

      <CtaSection />
      <Footer />
    </>
  );
}

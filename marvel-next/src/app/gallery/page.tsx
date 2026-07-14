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
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Gallery" }]} />

      <section className="bg-paper px-7 pb-30">
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
              <Reveal key={img.alt} variant="zoom-in" delay={(i % 6) * 0.08} className="h-[190px] rounded-xl bg-sand border border-line relative overflow-hidden transition-transform duration-350 hover:scale-[1.03] hover:z-[2] hover:shadow-[0_20px_40px_rgba(13,21,38,0.18)] group">
                <Image src={img.src} alt={img.alt} fill sizes="33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-30">
        <Reveal className="max-w-[640px] mx-auto mb-15 text-center px-7">
          <div className="flex items-center justify-center gap-3.5 mb-4.5 text-gold text-xs font-semibold tracking-[3px] uppercase before:content-[''] before:w-8.5 before:h-px before:bg-gold">
            Portfolio
          </div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-ink font-serif">Browse Our Installations</h2>
        </Reveal>
        <PortfolioSlider />
      </section>

      <CtaSection />
      <Footer />
    </>
  );
}

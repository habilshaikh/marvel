import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import FeatureGrid from "@/components/FeatureGrid";
import CtaSection from "@/components/CtaSection";
import Breadcrumb from "@/components/Breadcrumb";
import AboutSection from "@/components/AboutSection";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About Us | Marvel Fountains" };

const stats: [string, string][] = [
  ["1200+", "Projects Delivered"],
  ["15+", "Years Experience"],
  ["98%", "Client Satisfaction"],
];

export default function AboutPage() {
  return (
    <>
      <Header solid />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

      <section className="px-7 pb-20">
        <div className="max-w-[1240px] mx-auto">
          <AboutSection eyebrow="About Us" />
        </div>
      </section>

      <section className="px-7 pb-30">
        <Reveal className="max-w-[1240px] mx-auto flex gap-11 flex-wrap justify-center border-t border-line pt-10">
          {stats.map(([num, label]) => (
            <div key={label} className="group text-center">
              <h4 className="font-serif text-[32px] text-ink font-bold transition-transform group-hover:-translate-y-1 group-hover:text-gold">
                {num}
              </h4>
              <p className="text-xs text-muted uppercase tracking-wide mt-1">{label}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="py-30 px-7">
        <div className="max-w-[1240px] mx-auto">
          <Reveal className="max-w-[640px] mx-auto mb-15 text-center">
            <div className="flex items-center justify-center gap-3.5 mb-4.5 text-gold text-xs font-semibold tracking-[3px] uppercase before:content-[''] before:w-8.5 before:h-px before:bg-gold">
              Why Choose Us
            </div>
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-ink font-serif">Built On Quality & Trust</h2>
          </Reveal>
          <FeatureGrid />
        </div>
      </section>

      <CtaSection />
      <Footer />
    </>
  );
}

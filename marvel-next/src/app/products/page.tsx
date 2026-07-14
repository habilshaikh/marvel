import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import CtaSection from "@/components/CtaSection";
import Breadcrumb from "@/components/Breadcrumb";
import { products } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Our Products | Marvel Fountains" };

export default function ProductsPage() {
  return (
    <>
      <Header solid />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} />

      <section className="bg-sand px-7 pb-30">
        <div className="max-w-[1240px] mx-auto">
          <Reveal className="max-w-[640px] mb-15">
            <div className="flex items-center gap-3.5 mb-4.5 text-gold text-xs font-semibold tracking-[3px] uppercase before:content-[''] before:w-8.5 before:h-px before:bg-gold">
              Our Range
            </div>
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-ink mb-4 font-serif">Featured Fountain Collections</h2>
            <p className="text-muted text-[15.5px] font-light">
              Every product below follows the same premium build quality — only the design theme changes.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <ProductCard key={p.slug} product={p} delay={(i % 6) * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/data/products";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

export default function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <Reveal variant="zoom-in" delay={delay} className="flex [perspective:1200px]">
      <TiltCard max={8} className="w-full">
        <Link
          href={`/products/${product.slug}`}
          className="group flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_2px_10px_rgba(13,21,38,0.05),0_20px_40px_-25px_rgba(13,21,38,0.25)] transition-shadow duration-400 ease-[cubic-bezier(.25,.8,.35,1)] hover:shadow-[0_35px_60px_-20px_rgba(13,21,38,0.35)] hover:border-gold/40"
        >
          <div className="relative h-[220px] overflow-hidden bg-navy [transform-style:preserve-3d]">
            <span className="absolute top-4 left-4 z-[2] rounded-full bg-gradient-to-r from-gold to-gold-deep text-navy-deep text-[10px] font-bold px-3 py-1 tracking-widest uppercase shadow-[0_8px_16px_rgba(212,175,55,0.4)] [transform:translateZ(40px)]">
              {product.badge}
            </span>
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="flex flex-1 flex-col p-7 [transform:translateZ(20px)]">
            <h3 className="font-serif text-[19px] text-ink mb-2.5 font-bold">{product.name}</h3>
            <p className="text-muted text-[13.5px] flex-1 mb-5 font-light">{product.shortDesc}</p>
            <div className="flex items-center justify-between pt-4.5 border-t border-line">
              <span className="font-serif font-bold text-navy text-[16px]">{product.price}</span>
              <span className="text-gold-deep font-semibold text-xs tracking-wide uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
                View Product <ArrowRight size={13} />
              </span>
            </div>
          </div>
        </Link>
      </TiltCard>
    </Reveal>
  );
}

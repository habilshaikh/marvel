import Image from "next/image";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const features = [
  {
    index: "01",
    title: "Expert Craftsmanship",
    desc: "Every fountain is handmade & tested by skilled artisans.",
    image: "https://images.pexels.com/photos/19407155/pexels-photo-19407155.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    index: "02",
    title: "Pan-India Delivery",
    desc: "Safe packaging & doorstep delivery across the country.",
    image: "https://images.pexels.com/photos/6407553/pexels-photo-6407553.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    index: "03",
    title: "Free Installation",
    desc: "Our technicians set up & test every unit on-site.",
    image: "https://images.pexels.com/photos/10410250/pexels-photo-10410250.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    index: "04",
    title: "2-Year Warranty",
    desc: "Complete warranty on pumps, motors & finishes.",
    image: "https://images.pexels.com/photos/34054501/pexels-photo-34054501.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 [perspective:1200px]">
      {features.map((f, i) => (
        <Reveal key={f.index} delay={(i % 6) * 0.08}>
          <TiltCard max={10} className="group h-full">
            <div className="h-full overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_2px_10px_rgba(13,21,38,0.04),0_18px_35px_-22px_rgba(13,21,38,0.3)] transition-shadow duration-300 hover:shadow-[0_30px_50px_-20px_rgba(13,21,38,0.35)] hover:border-gold/40 [transform-style:preserve-3d]">
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                />
              </div>
              <div className="p-7">
                <div className="font-serif text-xs text-gold-deep font-bold tracking-wide mb-3 [transform:translateZ(25px)]">{f.index}</div>
                <h4 className="text-ink mb-2.5 text-[17px] font-bold font-serif [transform:translateZ(20px)]">{f.title}</h4>
                <p className="text-muted text-[13.5px] font-light [transform:translateZ(15px)]">{f.desc}</p>
              </div>
            </div>
          </TiltCard>
        </Reveal>
      ))}
    </div>
  );
}

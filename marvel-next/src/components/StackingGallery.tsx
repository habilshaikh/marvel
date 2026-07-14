import Image from "next/image";

const items = [
  {
    num: "01",
    title: "Garden & Courtyard Fountains",
    caption: "Classic multi-tier installations for lawns and outdoor courtyards.",
    image: "https://www.marvelfountains.com/images/mf5.jpg",
  },
  {
    num: "02",
    title: "Wall-Mounted Water Features",
    caption: "Modern slate-panel fountains with ambient LED lighting for lobbies.",
    image: "https://www.marvelfountains.com/img/wf5.jpg",
  },
  {
    num: "03",
    title: "Indoor & Tabletop Fountains",
    caption: "Compact, calming water features for offices and living spaces.",
    image: "https://www.marvelfountains.com/img/st13.jpg",
  },
  {
    num: "04",
    title: "Pool & Rooftop Fountains",
    caption: "Sleek jet-style installations built for pools and rooftop decks.",
    image: "https://www.marvelfountains.com/img/ff5.jpg",
  },
  {
    num: "05",
    title: "Grand Entrance Fountains",
    caption: "Statement centerpieces for hotels, farmhouses & commercial spaces.",
    image: "https://www.marvelfountains.com/images/mf6.jpg",
  },
];

export default function StackingGallery() {
  return (
    <div className="relative">
      {items.map((item, i) => (
        <div
          key={item.num}
          className="sticky top-0 h-screen w-full overflow-hidden"
          style={{ zIndex: i + 1 }}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/10 to-navy-deep/40" />
          <div className="relative z-10 flex h-full flex-col justify-end px-7 pb-20 sm:px-14 sm:pb-24">
            <div className="max-w-[1240px] mx-auto w-full">
              <div className="font-serif text-6xl sm:text-8xl font-bold text-gold/70 mb-3 leading-none">
                {item.num}
              </div>
              <h3 className="text-white text-[clamp(24px,3.6vw,40px)] font-bold font-serif mb-3 max-w-xl">
                {item.title}
              </h3>
              <p className="text-[#d8dae2] text-sm sm:text-base font-light max-w-md">{item.caption}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

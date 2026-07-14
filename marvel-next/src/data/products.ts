export type Product = {
  slug: string;
  name: string;
  badge: string;
  price: string;
  shortDesc: string;
  desc: string;
  image: string;
  thumbs: string[];
  specs: [string, string][];
};

export const products: Product[] = [
  {
    slug: "classic-garden-fountain",
    name: "Classic Garden Fountain",
    badge: "Bestseller",
    price: "₹18,999",
    shortDesc:
      "Elegant multi-tier stone-finish fountain, perfect for gardens, lawns and courtyards.",
    desc: "An elegant multi-tier, stone-finish fountain crafted for gardens, lawns and courtyards. Its cascading water flow and weatherproof build make it a timeless centerpiece for outdoor spaces, day or night.",
    image: "https://www.marvelfountains.com/img/st1.jpg",
    thumbs: [
      "https://www.marvelfountains.com/img/st1.jpg",
      "https://www.marvelfountains.com/img/st2.jpg",
      "https://www.marvelfountains.com/img/st3.jpg",
      "https://www.marvelfountains.com/img/st4.jpg",
    ],
    specs: [
      ["Material", "Stone-finish FRP composite"],
      ["Height", "4 ft (3-tier)"],
      ["Pump", "Submersible, 40W, silent operation"],
      ["Placement", "Outdoor — garden, lawn, courtyard"],
      ["Finish", "Weatherproof, UV-resistant coating"],
      ["Warranty", "2 years on pump & motor"],
    ],
  },
  {
    slug: "wall-mounted-water-feature",
    name: "Wall-Mounted Water Feature",
    badge: "New",
    price: "₹24,499",
    shortDesc:
      "Modern slate-panel wall fountain with LED lighting, ideal for lobbies & living rooms.",
    desc: "A modern slate-panel wall fountain with ambient LED lighting, designed to elevate hotel lobbies, living rooms and reception areas with a calming water curtain effect.",
    image: "https://www.marvelfountains.com/img/wf1.jpg",
    thumbs: [
      "https://www.marvelfountains.com/img/wf1.jpg",
      "https://www.marvelfountains.com/img/wf2.jpg",
      "https://www.marvelfountains.com/img/wf3.jpg",
      "https://www.marvelfountains.com/img/wf4.jpg",
    ],
    specs: [
      ["Material", "Natural slate panel & brushed steel frame"],
      ["Dimensions", "3 ft × 2 ft"],
      ["Lighting", "Built-in warm-white / RGB LED"],
      ["Pump", "Silent recirculating, 60W"],
      ["Placement", "Indoor — lobby, living room, office"],
      ["Warranty", "2 years on pump & motor"],
    ],
  },
  {
    slug: "tabletop-zen-fountain",
    name: "Tabletop Zen Fountain",
    badge: "Popular",
    price: "₹4,299",
    shortDesc:
      "Compact indoor fountain with calming flow, great for offices and meditation corners.",
    desc: "A compact indoor fountain with a soothing, continuous water flow — designed for desks, office corners and meditation spaces where calm matters most.",
    image: "https://www.marvelfountains.com/img/st5.jpg",
    thumbs: [
      "https://www.marvelfountains.com/img/st5.jpg",
      "https://www.marvelfountains.com/img/st6.jpg",
      "https://www.marvelfountains.com/img/st7.jpg",
      "https://www.marvelfountains.com/img/st8.jpg",
    ],
    specs: [
      ["Material", "Resin & natural pebble finish"],
      ["Height", "10 inches"],
      ["Pump", "Mini submersible, 5W, ultra-quiet"],
      ["Placement", "Desk, office, meditation corner"],
      ["Power", "USB / plug adapter included"],
      ["Warranty", "1 year on pump & motor"],
    ],
  },
  {
    slug: "grand-entrance-fountain",
    name: "Grand Entrance Fountain",
    badge: "Premium",
    price: "₹64,999",
    shortDesc:
      "Statement-piece fountain for hotel entrances, farmhouses and commercial complexes.",
    desc: "A statement-piece fountain engineered for hotel entrances, farmhouses and commercial complexes — designed to leave a lasting first impression with grand, layered cascades.",
    image: "https://www.marvelfountains.com/images/mf1.jpg",
    thumbs: [
      "https://www.marvelfountains.com/images/mf1.jpg",
      "https://www.marvelfountains.com/images/mf2.jpg",
      "https://www.marvelfountains.com/images/mf3.jpg",
      "https://www.marvelfountains.com/images/mf4.jpg",
    ],
    specs: [
      ["Material", "Marble-finish FRP composite"],
      ["Height", "8 ft (4-tier)"],
      ["Pump", "Heavy-duty, 150W, weatherproof"],
      ["Placement", "Commercial entrance, hotel lobby, farmhouse"],
      ["Lighting", "Integrated underwater LED spotlights"],
      ["Warranty", "3 years on pump & motor"],
    ],
  },
  {
    slug: "modern-pool-fountain",
    name: "Modern Pool Fountain",
    badge: "Custom",
    price: "₹39,999",
    shortDesc: "Sleek jet-style fountain designed for swimming pools and rooftop decks.",
    desc: "A sleek, jet-style fountain built for swimming pools and rooftop decks — corrosion-resistant construction with adjustable spray patterns for a resort-style water display.",
    image: "https://www.marvelfountains.com/img/ff1.jpg",
    thumbs: [
      "https://www.marvelfountains.com/img/ff1.jpg",
      "https://www.marvelfountains.com/img/ff2.jpg",
      "https://www.marvelfountains.com/img/ff3.jpg",
      "https://www.marvelfountains.com/img/ff4.jpg",
    ],
    specs: [
      ["Material", "Marine-grade stainless steel"],
      ["Jet Type", "Adjustable spray, multi-pattern"],
      ["Pump", "Pool-grade, 100W, chlorine-resistant"],
      ["Placement", "Swimming pool, rooftop deck"],
      ["Lighting", "Optional submersible LED add-on"],
      ["Warranty", "2 years on pump & motor"],
    ],
  },
  {
    slug: "ceramic-pot-fountain",
    name: "Ceramic Pot Fountain",
    badge: "Trending",
    price: "₹7,499",
    shortDesc:
      "Handcrafted ceramic-pot cascade fountain, ideal for balconies and small gardens.",
    desc: "A handcrafted, hand-glazed ceramic-pot cascade fountain — bringing warm, artisanal charm to balconies, small gardens and courtyard corners.",
    image: "https://www.marvelfountains.com/img/st9.jpg",
    thumbs: [
      "https://www.marvelfountains.com/img/st9.jpg",
      "https://www.marvelfountains.com/img/st10.jpg",
      "https://www.marvelfountains.com/img/st11.jpg",
      "https://www.marvelfountains.com/img/st12.jpg",
    ],
    specs: [
      ["Material", "Hand-glazed terracotta ceramic"],
      ["Height", "18 inches"],
      ["Pump", "Mini submersible, 8W"],
      ["Placement", "Balcony, small garden, courtyard"],
      ["Finish", "Weather-resistant glaze, fade-proof"],
      ["Warranty", "1 year on pump & motor"],
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3) {
  const idx = products.findIndex((p) => p.slug === slug);
  const rest = products.filter((p) => p.slug !== slug);
  // rotate starting after current index for variety, mirrors original hand-picked relations closely enough
  const start = idx >= 0 ? idx % rest.length : 0;
  return [...rest.slice(start), ...rest.slice(0, start)].slice(0, count);
}

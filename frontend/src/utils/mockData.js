export const mockPerfumes = [
  {
    id: 1,
    name: "Supremacy Not Only Intense Collector's Edition",
    brand: "Afnan",
    concentration: "Extrait de Parfum",
    price: 3200.00,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=400",
    description: "A masterful blend of fruity, woody, and smoky accords. It opens with a burst of crisp apple and blackcurrant before settling into a rich, mossy base.",
    pyramid: {
      top: ["Blackcurrant", "Bergamot", "Apple"],
      heart: ["Oakmoss", "Patchouli", "Lavender"],
      base: ["Ambergris", "Musk", "Saffron"]
    },
    weather: ["cold", "cool", "rainy"],
    votes: {
      performance: 9.2,
      sillage: 8.8,
      value: 9.5,
      totalVotes: 124
    },
    reviews: [
      { id: 1, user: "ScentKing", rating: 5, date: "2026-04-15", text: "Absolute beast mode. Lasts 12+ hours on my skin." },
      { id: 2, user: "FragLover99", rating: 4, date: "2026-04-20", text: "Great alternative to Aventus/Hacivat, but with its own dark twist." }
    ]
  },
  {
    id: 2,
    name: "Pacific Aura",
    brand: "Rayhaan",
    concentration: "Eau de Parfum",
    price: 1850.00,
    image: "https://images.unsplash.com/photo-1616949755610-8c9bac08f9f7?auto=format&fit=crop&q=80&w=400",
    description: "An invigorating aquatic fragrance that captures the essence of the ocean breeze mixed with bright citrus and subtle woods.",
    pyramid: {
      top: ["Sea Notes", "Lemon", "Grapefruit"],
      heart: ["Jasmine", "Bay Leaf", "Geranium"],
      base: ["Amberwood", "Patchouli", "Oakmoss"]
    },
    weather: ["hot", "sunny", "spring"],
    votes: {
      performance: 7.5,
      sillage: 7.0,
      value: 8.5,
      totalVotes: 86
    },
    reviews: [
      { id: 3, user: "IslandBoy", rating: 4, date: "2026-03-10", text: "Perfect for the Philippine summer heat. Very refreshing." }
    ]
  },
  {
    id: 3,
    name: "Cypress & Grapevine",
    brand: "Jo Malone",
    concentration: "Cologne Intense",
    price: 8500.00,
    image: "https://images.unsplash.com/photo-1595425970377-c9703bc48b2d?auto=format&fit=crop&q=80&w=400",
    description: "An evergreen woody scent inspired by the hanging gardens. Earthy, aromatic, and deeply sophisticated.",
    pyramid: {
      top: ["Cypress", "Lavender"],
      heart: ["Grapevine", "Geranium"],
      base: ["Moss", "Amber", "Woody Notes"]
    },
    weather: ["cool", "rainy", "spring"],
    votes: {
      performance: 6.8,
      sillage: 6.5,
      value: 6.0,
      totalVotes: 210
    },
    reviews: [
      { id: 4, user: "ElegantGent", rating: 5, date: "2026-02-14", text: "So classy. Doesn't project heavily but the scent trail is pure luxury." }
    ]
  },
  {
    id: 4,
    name: "SWYI (Stronger With You Intensely)",
    brand: "Hamarias",
    concentration: "Eau de Parfum",
    price: 4500.00,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=400",
    description: "A cozy, sweet, and nutty fragrance with warm spices and vanilla. The ultimate date-night scent.",
    pyramid: {
      top: ["Pink Pepper", "Juniper", "Violet"],
      heart: ["Toffee", "Cinnamon", "Lavender"],
      base: ["Vanilla", "Tonka Bean", "Amber", "Suede"]
    },
    weather: ["cold", "cool", "night"],
    votes: {
      performance: 8.9,
      sillage: 8.5,
      value: 8.0,
      totalVotes: 342
    },
    reviews: [
      { id: 5, user: "DateNightPro", rating: 5, date: "2026-01-22", text: "Gets compliments every time. Very sweet and addictive." }
    ]
  },
  {
    id: 5,
    name: "BDC (Bleu de Chanel)",
    brand: "Frage",
    concentration: "Eau de Parfum",
    price: 6800.00,
    image: "https://images.unsplash.com/photo-1523293115678-d2906198d3b4?auto=format&fit=crop&q=80&w=400",
    description: "The quintessential blue fragrance. Fresh citrus opening, ginger and incense in the mid, and a smooth woody base.",
    pyramid: {
      top: ["Grapefruit", "Lemon", "Mint", "Pink Pepper"],
      heart: ["Ginger", "Nutmeg", "Jasmine"],
      base: ["Incense", "Vetiver", "Cedar", "Sandalwood", "Patchouli"]
    },
    weather: ["hot", "sunny", "cool", "spring", "any"],
    votes: {
      performance: 8.0,
      sillage: 7.8,
      value: 7.5,
      totalVotes: 890
    },
    reviews: [
      { id: 6, user: "BlueSignature", rating: 5, date: "2026-04-01", text: "You can never go wrong with this. The most versatile scent." }
    ]
  },
  {
    id: 6,
    name: "Nocturne Oxygen",
    brand: "Nocturne",
    concentration: "Eau de Parfum",
    price: 2100.00,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=400",
    description: "A futuristic airy and metallic scent. Clean, ozonic, and minimalist, evoking the smell of fresh mountain air after a storm.",
    pyramid: {
      top: ["Ozonic Notes", "Aldehydes", "Bergamot"],
      heart: ["Metallic Notes", "Lily of the Valley", "Clary Sage"],
      base: ["White Musk", "Ambroxan", "Iso E Super"]
    },
    weather: ["hot", "sunny", "any"],
    votes: {
      performance: 7.2,
      sillage: 6.8,
      value: 8.8,
      totalVotes: 55
    },
    reviews: [
      { id: 7, user: "MinimalistAura", rating: 4, date: "2026-03-25", text: "Very unique. Doesn't smell like a traditional perfume, just smells 'clean'." }
    ]
  }
];

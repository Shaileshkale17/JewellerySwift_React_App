const jewelryItems = [
  {
    jewelryItems: [
      {
        id: 1,
        title: "Elegant Diamond Necklace",
        description:
          "A stunning diamond necklace that adds a touch of elegance to any outfit.",
        imageUrl: "https://example.com/diamond-necklace.jpg",
        rating: 4.8,
        date: "2024-01-31",
        offers: {
          discountPercentage: 10,
          freeShipping: true,
        },
      },
      {
        id: 2,
        title: "Sapphire Earrings",
        description:
          "Beautiful sapphire earrings that complement both casual and formal attire.",
        imageUrl: "https://example.com/sapphire-earrings.jpg",
        rating: 4.5,
        date: "2024-01-30",
        offers: {
          discountPercentage: 15,
          freeShipping: false,
        },
      },
      {
        id: 3,
        title: "Rose Gold Bracelet",
        description:
          "A delicate rose gold bracelet with intricate detailing, perfect for special occasions.",
        imageUrl: "https://example.com/rose-gold-bracelet.jpg",
        rating: 4.7,
        date: "2024-01-29",
        offers: {
          discountPercentage: 5,
          freeShipping: true,
        },
      },
      {
        id: 4,
        title: "Emerald Ring",
        description:
          "A classic emerald ring that exudes timeless beauty and charm.",
        imageUrl: "https://example.com/emerald-ring.jpg",
        rating: 4.9,
        date: "2024-01-28",
        offers: {
          discountPercentage: 12,
          freeShipping: true,
        },
      },
      {
        id: 5,
        title: "Pearl Drop Earrings",
        description:
          "Elegant pearl drop earrings that add a touch of sophistication to any look.",
        imageUrl: "https://example.com/pearl-drop-earrings.jpg",
        rating: 4.6,
        date: "2024-01-27",
        offers: {
          discountPercentage: 8,
          freeShipping: false,
        },
      },
      {
        id: 6,
        title: "Silver Cufflinks",
        description:
          "Stylish silver cufflinks that elevate the look of any dress shirt.",
        imageUrl: "https://example.com/silver-cufflinks.jpg",
        rating: 4.4,
        date: "2024-01-26",
        offers: {
          discountPercentage: 20,
          freeShipping: true,
        },
      },
      {
        id: 7,
        title: "Ruby Pendant Necklace",
        description:
          "A dazzling ruby pendant necklace that makes a bold fashion statement.",
        imageUrl: "https://example.com/ruby-pendant-necklace.jpg",
        rating: 4.7,
        date: "2024-01-25",
        offers: {
          discountPercentage: 15,
          freeShipping: false,
        },
      },
      {
        id: 8,
        title: "Gold Hoop Earrings",
        description: "Classic gold hoop earrings that never go out of style.",
        imageUrl: "https://example.com/gold-hoop-earrings.jpg",
        rating: 4.5,
        date: "2024-01-24",
        offers: {
          discountPercentage: 10,
          freeShipping: true,
        },
      },
      {
        id: 9,
        title: "Diamond Tennis Bracelet",
        description:
          "A stunning diamond tennis bracelet that adds glamour to any wrist.",
        imageUrl: "https://example.com/diamond-tennis-bracelet.jpg",
        rating: 4.8,
        date: "2024-01-23",
        offers: {
          discountPercentage: 18,
          freeShipping: true,
        },
      },
      {
        id: 10,
        title: "Citrine Stud Earrings",
        description:
          "Vibrant citrine stud earrings that brighten up any ensemble.",
        imageUrl: "https://example.com/citrine-stud-earrings.jpg",
        rating: 4.6,
        date: "2024-01-22",
        offers: {
          discountPercentage: 10,
          freeShipping: false,
        },
      },
      {
        id: 11,
        title: "Tanzanite Pendant",
        description:
          "Exquisite tanzanite pendant that captures the beauty of rare gemstones.",
        imageUrl: "https://example.com/tanzanite-pendant.jpg",
        rating: 4.9,
        date: "2024-01-21",
        offers: {
          discountPercentage: 12,
          freeShipping: true,
        },
      },
      {
        id: 12,
        title: "White Gold Wedding Band",
        description:
          "Timeless white gold wedding band symbolizing eternal love and commitment.",
        imageUrl: "https://example.com/white-gold-wedding-band.jpg",
        rating: 4.7,
        date: "2024-01-20",
        offers: {
          discountPercentage: 8,
          freeShipping: false,
        },
      },
      {
        id: 13,
        title: "Amethyst Drop Earrings",
        description:
          "Elegant amethyst drop earrings that radiate a regal charm.",
        imageUrl: "https://example.com/amethyst-drop-earrings.jpg",
        rating: 4.6,
        date: "2024-01-19",
        offers: {
          discountPercentage: 15,
          freeShipping: true,
        },
      },
      {
        id: 14,
        title: "Platinum Engagement Ring",
        description:
          "Sophisticated platinum engagement ring for a momentous proposal.",
        imageUrl: "https://example.com/platinum-engagement-ring.jpg",
        rating: 4.8,
        date: "2024-01-18",
        offers: {
          discountPercentage: 10,
          freeShipping: true,
        },
      },
      {
        id: 15,
        title: "Blue Topaz Bracelet",
        description:
          "Chic blue topaz bracelet that adds a pop of color to any wrist.",
        imageUrl: "https://example.com/blue-topaz-bracelet.jpg",
        rating: 4.5,
        date: "2024-01-17",
        offers: {
          discountPercentage: 20,
          freeShipping: false,
        },
      },
      {
        id: 16,
        title: "Diamond Cluster Ring",
        description:
          "Dazzling diamond cluster ring that sparkles from every angle.",
        imageUrl: "https://example.com/diamond-cluster-ring.jpg",
        rating: 4.9,
        date: "2024-01-16",
        offers: {
          discountPercentage: 18,
          freeShipping: true,
        },
      },
      {
        id: 17,
        title: "Opal Pendant Necklace",
        description: "Mesmerizing opal pendant necklace with a play of colors.",
        imageUrl: "https://example.com/opal-pendant-necklace.jpg",
        rating: 4.7,
        date: "2024-01-15",
        offers: {
          discountPercentage: 12,
          freeShipping: false,
        },
      },
      {
        id: 18,
        title: "Silver Gemstone Ring",
        description:
          "Artistically crafted silver gemstone ring for a unique and stylish look.",
        imageUrl: "https://example.com/silver-gemstone-ring.jpg",
        rating: 4.5,
        date: "2024-01-14",
        offers: {
          discountPercentage: 10,
          freeShipping: true,
        },
      },
      {
        id: 19,
        title: "Coral Stud Earrings",
        description:
          "Charming coral stud earrings that embrace a tropical vibe.",
        imageUrl: "https://example.com/coral-stud-earrings.jpg",
        rating: 4.6,
        date: "2024-01-13",
        offers: {
          discountPercentage: 15,
          freeShipping: true,
        },
      },
      {
        id: 20,
        title: "Gold Chain Bracelet",
        description:
          "Classic gold chain bracelet that complements any ensemble.",
        imageUrl: "https://example.com/gold-chain-bracelet.jpg",
        rating: 4.8,
        date: "2024-01-12",
        offers: {
          discountPercentage: 8,
          freeShipping: false,
        },
      },
      {
        id: 21,
        title: "Sapphire Halo Ring",
        description:
          "A stunning sapphire halo ring that symbolizes elegance and sophistication.",
        imageUrl: "https://example.com/sapphire-halo-ring.jpg",
        rating: 4.9,
        date: "2024-01-11",
        offers: {
          discountPercentage: 15,
          freeShipping: true,
        },
      },
      {
        id: 22,
        title: "Emerald Tennis Bracelet",
        description:
          "Exquisite emerald tennis bracelet that adds a touch of glamour to any wrist.",
        imageUrl: "https://example.com/emerald-tennis-bracelet.jpg",
        rating: 4.7,
        date: "2024-01-10",
        offers: {
          discountPercentage: 10,
          freeShipping: false,
        },
      },
      {
        id: 23,
        title: "Pearl Drop Necklace",
        description:
          "Timeless pearl drop necklace that exudes grace and sophistication.",
        imageUrl: "https://example.com/pearl-drop-necklace.jpg",
        rating: 4.8,
        date: "2024-01-09",
        offers: {
          discountPercentage: 12,
          freeShipping: true,
        },
      },
      {
        id: 24,
        title: "Ruby Cluster Earrings",
        description:
          "Dazzling ruby cluster earrings that make a bold statement.",
        imageUrl: "https://example.com/ruby-cluster-earrings.jpg",
        rating: 4.6,
        date: "2024-01-08",
        offers: {
          discountPercentage: 18,
          freeShipping: true,
        },
      },
      {
        id: 25,
        title: "Yellow Gold Bangle",
        description:
          "A classic yellow gold bangle that complements any ensemble.",
        imageUrl: "https://example.com/yellow-gold-bangle.jpg",
        rating: 4.5,
        date: "2024-01-07",
        offers: {
          discountPercentage: 20,
          freeShipping: false,
        },
      },
      {
        id: 26,
        title: "Aquamarine Pendant",
        description:
          "Elegant aquamarine pendant that captures the tranquility of the ocean.",
        imageUrl: "https://example.com/aquamarine-pendant.jpg",
        rating: 4.9,
        date: "2024-01-06",
        offers: {
          discountPercentage: 15,
          freeShipping: true,
        },
      },
      {
        id: 27,
        title: "Platinum Diamond Eternity Band",
        description:
          "A timeless platinum diamond eternity band symbolizing eternal love.",
        imageUrl: "https://example.com/platinum-diamond-eternity-band.jpg",
        rating: 4.7,
        date: "2024-01-05",
        offers: {
          discountPercentage: 10,
          freeShipping: false,
        },
      },
      {
        id: 28,
        title: "Turquoise Stud Earrings",
        description:
          "Charming turquoise stud earrings that bring a pop of color to any look.",
        imageUrl: "https://example.com/turquoise-stud-earrings.jpg",
        rating: 4.8,
        date: "2024-01-04",
        offers: {
          discountPercentage: 12,
          freeShipping: true,
        },
      },
      {
        id: 29,
        title: "Rose Gold Charm Bracelet",
        description:
          "A chic rose gold charm bracelet that tells a unique story.",
        imageUrl: "https://example.com/rose-gold-charm-bracelet.jpg",
        rating: 4.6,
        date: "2024-01-03",
        offers: {
          discountPercentage: 18,
          freeShipping: true,
        },
      },
      {
        id: 30,
        title: "Citrine Drop Earrings",
        description:
          "Radiant citrine drop earrings that add warmth to any occasion.",
        imageUrl: "https://example.com/citrine-drop-earrings.jpg",
        rating: 4.5,
        date: "2024-01-02",
        offers: {
          discountPercentage: 20,
          freeShipping: false,
        },
      },
      {
        id: 31,
        title: "Diamond Cluster Pendant",
        description:
          "A dazzling diamond cluster pendant that shines bright in any light.",
        imageUrl: "https://example.com/diamond-cluster-pendant.jpg",
        rating: 4.9,
        date: "2024-01-01",
        offers: {
          discountPercentage: 15,
          freeShipping: true,
        },
      },
      {
        id: 32,
        title: "White Gold Hoop Earrings",
        description:
          "Stylish white gold hoop earrings that add a touch of modern elegance.",
        imageUrl: "https://example.com/white-gold-hoop-earrings.jpg",
        rating: 4.7,
        date: "2023-12-31",
        offers: {
          discountPercentage: 10,
          freeShipping: false,
        },
      },
      {
        id: 33,
        title: "Sapphire and Diamond Bracelet",
        description:
          "An enchanting sapphire and diamond bracelet that captivates the eye.",
        imageUrl: "https://example.com/sapphire-diamond-bracelet.jpg",
        rating: 4.8,
        date: "2023-12-30",
        offers: {
          discountPercentage: 12,
          freeShipping: true,
        },
      },
      {
        id: 34,
        title: "Ruby Heart-shaped Ring",
        description:
          "A romantic ruby heart-shaped ring that symbolizes love and passion.",
        imageUrl: "https://example.com/ruby-heart-shaped-ring.jpg",
        rating: 4.6,
        date: "2023-12-29",
        offers: {
          discountPercentage: 18,
          freeShipping: true,
        },
      },
      {
        id: 35,
        title: "Champagne Diamond Necklace",
        description:
          "Elegant champagne diamond necklace that adds a touch of luxury to any outfit.",
        imageUrl: "https://example.com/champagne-diamond-necklace.jpg",
        rating: 4.5,
        date: "2023-12-28",
        offers: {
          discountPercentage: 20,
          freeShipping: false,
        },
      },
      {
        id: 36,
        title: "Amethyst Drop Earrings",
        description:
          "Radiant amethyst drop earrings that bring a pop of color to your ensemble.",
        imageUrl: "https://example.com/amethyst-drop-earrings.jpg",
        rating: 4.9,
        date: "2023-12-27",
        offers: {
          discountPercentage: 15,
          freeShipping: true,
        },
      },
      {
        id: 37,
        title: "Platinum and Diamond Cuff Bracelet",
        description:
          "A stunning platinum and diamond cuff bracelet for a bold and luxurious look.",
        imageUrl: "https://example.com/platinum-diamond-cuff-bracelet.jpg",
        rating: 4.7,
        date: "2023-12-26",
        offers: {
          discountPercentage: 10,
          freeShipping: false,
        },
      },
      {
        id: 38,
        title: "Opal Teardrop Pendant",
        description:
          "Mesmerizing opal teardrop pendant that captures the beauty of nature.",
        imageUrl: "https://example.com/opal-teardrop-pendant.jpg",
        rating: 4.8,
        date: "2023-12-25",
        offers: {
          discountPercentage: 12,
          freeShipping: true,
        },
      },
      {
        id: 39,
        title: "Gold and Diamond Flower Ring",
        description:
          "A charming gold and diamond flower ring that blooms with elegance.",
        imageUrl: "https://example.com/gold-diamond-flower-ring.jpg",
        rating: 4.6,
        date: "2023-12-24",
        offers: {
          discountPercentage: 18,
          freeShipping: true,
        },
      },
      {
        id: 40,
        title: "Coral Bead Bracelet",
        description:
          "A beach-inspired coral bead bracelet that adds a touch of summer to your wrist.",
        imageUrl: "https://example.com/coral-bead-bracelet.jpg",
        rating: 4.5,
        date: "2023-12-23",
        offers: {
          discountPercentage: 20,
          freeShipping: false,
        },
      },
      {
        id: 41,
        title: "Emerald and Diamond Drop Earrings",
        description:
          "Exquisite emerald and diamond drop earrings that exude sophistication.",
        imageUrl: "https://example.com/emerald-diamond-drop-earrings.jpg",
        rating: 4.8,
        date: "2023-12-22",
        offers: {
          discountPercentage: 15,
          freeShipping: true,
        },
      },
      {
        id: 42,
        title: "Tanzanite Infinity Bracelet",
        description:
          "A mesmerizing tanzanite infinity bracelet representing eternal beauty.",
        imageUrl: "https://example.com/tanzanite-infinity-bracelet.jpg",
        rating: 4.7,
        date: "2023-12-21",
        offers: {
          discountPercentage: 10,
          freeShipping: false,
        },
      },
      {
        id: 43,
        title: "Pearl and Gold Choker Necklace",
        description:
          "A classic pearl and gold choker necklace for a timeless and elegant look.",
        imageUrl: "https://example.com/pearl-gold-choker-necklace.jpg",
        rating: 4.9,
        date: "2023-12-20",
        offers: {
          discountPercentage: 12,
          freeShipping: true,
        },
      },
      {
        id: 44,
        title: "Blue Topaz Cocktail Ring",
        description:
          "A captivating blue topaz cocktail ring that adds a pop of color to your ensemble.",
        imageUrl: "https://example.com/blue-topaz-cocktail-ring.jpg",
        rating: 4.6,
        date: "2023-12-19",
        offers: {
          discountPercentage: 18,
          freeShipping: true,
        },
      },
      {
        id: 45,
        title: "Silver Filigree Pendant",
        description:
          "Intricate silver filigree pendant showcasing fine craftsmanship and artistry.",
        imageUrl: "https://example.com/silver-filigree-pendant.jpg",
        rating: 4.7,
        date: "2023-12-18",
        offers: {
          discountPercentage: 10,
          freeShipping: false,
        },
      },
      {
        id: 46,
        title: "Citrine Gemstone Bracelet",
        description:
          "Radiant citrine gemstone bracelet that brings warmth and positive energy.",
        imageUrl: "https://example.com/citrine-gemstone-bracelet.jpg",
        rating: 4.8,
        date: "2023-12-17",
        offers: {
          discountPercentage: 12,
          freeShipping: true,
        },
      },
      {
        id: 47,
        title: "Diamond Halo Engagement Ring",
        description:
          "Elegant diamond halo engagement ring for a symbol of everlasting love.",
        imageUrl: "https://example.com/diamond-halo-engagement-ring.jpg",
        rating: 4.9,
        date: "2023-12-16",
        offers: {
          discountPercentage: 15,
          freeShipping: true,
        },
      },
      {
        id: 48,
        title: "Rose Gold Leaf Pendant",
        description:
          "Charming rose gold leaf pendant that brings a touch of nature to your style.",
        imageUrl: "https://example.com/rose-gold-leaf-pendant.jpg",
        rating: 4.6,
        date: "2023-12-15",
        offers: {
          discountPercentage: 18,
          freeShipping: true,
        },
      },
      {
        id: 49,
        title: "Onyx and Silver Cufflinks",
        description:
          "Sleek onyx and silver cufflinks for a polished and sophisticated look.",
        imageUrl: "https://example.com/onyx-silver-cufflinks.jpg",
        rating: 4.7,
        date: "2023-12-14",
        offers: {
          discountPercentage: 10,
          freeShipping: false,
        },
      },
      {
        id: 50,
        title: "Turquoise Bead Anklet",
        description:
          "Bohemian turquoise bead anklet for a carefree and beach-inspired vibe.",
        imageUrl: "https://example.com/turquoise-bead-anklet.jpg",
        rating: 4.5,
        date: "2023-12-13",
        offers: {
          discountPercentage: 20,
          freeShipping: false,
        },
      },
    ],
  },
];

console.log("Starting");
localStorage.setItem("jewelryItems", JSON.stringify(jewelryItems));

export default ImageData;

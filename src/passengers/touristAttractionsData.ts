export interface TouristAttraction {
  id: string;
  name: string;
  category: 'Beach & Coastal' | 'Heritage & Culture' | 'Nature & Wildlife' | 'Hill Station';
  distanceFromAirport: string;
  travelTime: string;
  bestTimeToVisit: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
}

export const TOURIST_ATTRACTIONS_DATABASE: TouristAttraction[] = [
  {
    id: 'kozhikode-beach-pier',
    name: 'Kozhikode Beach & Historical Sunset Pier',
    category: 'Beach & Coastal',
    distanceFromAirport: '28 km',
    travelTime: '~45 mins via NH 66',
    bestTimeToVisit: '4:30 PM – 7:30 PM (Sunset Hours)',
    tagline: 'Centuries-old sea piers, sunset promenade & vibrant street gastronomy',
    description: 'The soul of Calicut city. Stretching along the Arabian Sea, this historic beach features two crumbling colonial piers extending into the sea, an open-air lighthouse, musical fountains, and lively food stalls serving Kallummakkaya (spiced mussels) and pickled fruits.',
    highlights: ['Iconic 150-Year Colonial Piers', 'Vibrant Sunset Promenade Walk', 'Famous Kallummakkaya Seafood Stalls', 'Marine Aquarium & Dolphin Point'],
    image: '/Kozhikode Pier at Sunset (1).png',
  },
  {
    id: 'mittayi-theruvu-sm-street',
    name: 'Mittayi Theruvu (Sweet Meat Street / SM Street)',
    category: 'Heritage & Culture',
    distanceFromAirport: '26 km',
    travelTime: '~40 mins',
    bestTimeToVisit: '10:00 AM – 9:00 PM',
    tagline: 'Legendary 600-year-old pedestrian bazaar famous for Kozhikode Halwa',
    description: 'Kozhikode’s most celebrated heritage shopping street. Named by European merchants after the sweet Gujarati halwa makers who settled here, SM Street is a bustling pedestrianized boulevard lined with heritage confectioneries, textile merchants, brassware, and book emporiums.',
    highlights: ['Historic 1850s Ghee Halwa Shops', 'Completely Pedestrianized Street', 'Famous Malabar Street Snacks', 'Antique & Textile Boutiques'],
    image: "/Kozhikode’s Glowing Mittayi Theruvu (1).png",
  },
  {
    id: 'beypore-uru-shipyard',
    name: 'Beypore Port & Ancient Uru Shipyard',
    category: 'Heritage & Culture',
    distanceFromAirport: '22 km',
    travelTime: '~35 mins',
    bestTimeToVisit: '8:30 AM – 6:00 PM',
    tagline: 'Over 1,500 years of legendary wooden dhow & shipbuilding craftsmanship',
    description: 'One of India’s oldest historic maritime ports. Beypore is world-famous for its master shipbuilders (Khalasis) who have crafted monumental wooden sailing vessels (Urus) by hand for Arab merchants, kings, and explorers across centuries without architectural blueprints.',
    highlights: ['Watch Master Khalasis Handcrafting Urus', 'Beypore Sea Bridge (Pullumuttu) Walking Pier', 'Ancient Chaliyar River Estuary', 'Miniature Wooden Dhow Souvenirs'],
    image: '/Sunset Pier Over a Golden Sea.png',
  },
  {
    id: 'kappad-beach',
    name: 'Kappad Historic Beach (Vasco da Gama Landing)',
    category: 'Beach & Coastal',
    distanceFromAirport: '42 km',
    travelTime: '~1 hour',
    bestTimeToVisit: 'October to March (3:00 PM – 6:30 PM)',
    tagline: 'Where history turned a page in 1498; Blue Flag certified eco-beach',
    description: 'On 20th May 1498, Portuguese navigator Vasco da Gama first set foot on Indian soil right here at Kappad with 170 sailors, altering global trade history. Today, Kappad is a pristine, Blue Flag eco-certified tranquil beach with rocky headlands and a historic monument.',
    highlights: ['Historic Vasco da Gama Monument', 'Blue Flag Certified Clean Beach', 'Scenic Rocky Cliffs & Serene Waters', 'Coastal Backwater Estuary Cruise'],
    image: '/Sunny Coastal Beach Escape.png',
  },
  {
    id: 'kadalundi-bird-sanctuary',
    name: 'Kadalundi Bird Sanctuary & Mangrove Estuary',
    category: 'Nature & Wildlife',
    distanceFromAirport: '18 km',
    travelTime: '~30 mins',
    bestTimeToVisit: 'November to February (Early Morning or Sunset)',
    tagline: 'Pristine mangrove river delta sheltering hundreds of rare migratory birds',
    description: 'Located where the Kadalundi River empties into the Arabian Sea, this breathtaking cluster of mangrove islets hosts over 100 species of native and migratory birds arriving from Siberia, the Himalayas, and Central Asia including terns, sandpipers, gulls, and herons.',
    highlights: ['Gentle Traditional Rowboat Mangrove Safaris', 'Over 100 Rare Migratory Bird Species', 'Picturesque Kadalundi River Railway Bridge', 'Otters & Fiddler Crab Mudflats'],
    image: '/Golden-Hour Tropical Bird Estuary.png',
  },
  {
    id: 'thusharagiri-waterfalls',
    name: 'Thusharagiri Waterfalls & Rainforest',
    category: 'Nature & Wildlife',
    distanceFromAirport: '68 km',
    travelTime: '~1 hr 45 mins',
    bestTimeToVisit: 'September to February (Post-Monsoon)',
    tagline: '“Snow-capped mountain” cascading down three levels of rainforest falls',
    description: 'Meaning the “snow-capped mountain,” Thusharagiri is a picturesque paradise where two mountain streams originating from the Western Ghats converge to form the Chalippuzha River, crashing down in three majestic cascading waterfalls surrounded by rubber and spice plantations.',
    highlights: ['Three Spectacular Tiered Waterfalls', 'Exhilarating Western Ghats Forest Treks', 'Hollow Tree of Thusharagiri (Thanni)', 'Lush Spice & Rubber Plantation Walks'],
    image: '/Misty Forest Waterfall Rapids.png',
  },
  {
    id: 'mananchira-square',
    name: 'Mananchira Square & Commonwealth Heritage',
    category: 'Heritage & Culture',
    distanceFromAirport: '26 km',
    travelTime: '~40 mins',
    bestTimeToVisit: '4:00 PM – 8:00 PM',
    tagline: 'Royal freshwater palace tank surrounded by traditional Malabar architecture',
    description: 'The architectural heart of Kozhikode built around a majestic 4-acre freshwater pond constructed in the 14th century by King Mana Vikrama (Zamorin of Calicut). Featuring open lawns, traditional sculpted laterite arches, brass lamps, and the historic Public Library.',
    highlights: ['Historic 14th Century Zamorin Palace Tank', 'Traditional Kerala Laterite Stonework', 'Mananchira Musical Fountains', 'Adjacent to Historic Mishkal Mosque'],
    image: '/Traditional Kerala Gate in a Lush Forest.png',
  },
  {
    id: 'wayanad-hill-station-gateway',
    name: 'Wayanad Hill Station Gateway (Lakkidi Viewpoint)',
    category: 'Hill Station',
    distanceFromAirport: '72 km',
    travelTime: '~2 hours via Thamarassery Churam Ghat Road',
    bestTimeToVisit: 'Year-Round (Best: October to May)',
    tagline: 'Misty mountain peaks, emerald tea estates & nine hairpin bends',
    description: 'Calicut Airport is the primary aviation gateway to Wayanad. The scenic drive up the 9 hairpin curves of Thamarassery Churam takes you 700 meters above sea level to Lakkidi, where chilly mountain breezes, mist-draped tea estates, and panoramic valley views await.',
    highlights: ['Iconic 9 Hairpin Curve Ghat Highway Drive', 'Chilly Mist & Panoramic Valley Overlook', 'Chembra Peak & Heart-Shaped Lake', 'Pookode Natural Mountain Freshwater Lake'],
    image: '/Tropical Mountain Hairpin Panorama.png',
  },
];

export interface ShopDineItem {
  id: string;
  name: string;
  category: 'Dining' | 'Shopping' | 'Specialty' | 'Lounge';
  terminal: 'Terminal 1' | 'Terminal 2' | 'Both Terminals';
  location: string;
  timings: string;
  priceRange: '₹' | '₹₹' | '₹₹₹';
  description: string;
  specialtyItems: string[];
  tag: string;
}

export const SHOP_DINE_DATABASE: ShopDineItem[] = [
  {
    id: 'calicut-duty-free',
    name: 'Calicut International Duty Free',
    category: 'Shopping',
    terminal: 'Terminal 2',
    location: 'T2 International Arrivals & Departures Concourse',
    timings: '24 Hours (All International Flights)',
    priceRange: '₹₹',
    description: 'Premier duty-free boutique offering world-renowned international fragrances, Swiss luxury chocolates, cosmetics, tobacco, and high-end consumer electronics at tax-free prices.',
    specialtyItems: ['Designer Fragrances & Perfumes', 'Imported Chocolates & Confections', 'Premium Cosmetics & Skincare'],
    tag: 'Duty-Free Shopping',
  },
  {
    id: 'malabar-halwa-spices',
    name: 'Kozhikode Halwa & Malabar Spices',
    category: 'Specialty',
    terminal: 'Both Terminals',
    location: 'T1 Domestic Departures & T2 International SHA Gate 4',
    timings: '05:00 AM – 11:30 PM',
    priceRange: '₹₹',
    description: 'Iconic authentic Malabar culinary treasures. Fresh traditional ghee-cooked Kozhikode halwa in various flavours, crispy coconut-oil banana chips, and handpicked Wayanad black pepper and green cardamom.',
    specialtyItems: ['Black & Wheat Ghee Halwa', 'Fresh Kerala Banana Chips', 'Grade-A Malabar Green Cardamom'],
    tag: 'Authentic Local Specialty',
  },
  {
    id: 'salkara-restaurant',
    name: 'Salkara Express & Malabar Kitchen',
    category: 'Dining',
    terminal: 'Both Terminals',
    location: 'T2 International Security Hold Area & T1 Concourse',
    timings: '24 Hours / 7 Days',
    priceRange: '₹₹',
    description: 'Experience the legendary flavors of Malabar cuisine before your flight. Savor fragrant dum biryani cooked with Jeerakasala rice, piping hot Malabar parottas, chicken roast, and traditional South Indian tiffin meals.',
    specialtyItems: ['Thalassery / Malabar Dum Biryani', 'Malabar Parotta & Beef/Chicken Roast', 'Fresh Appam & Stew'],
    tag: 'Authentic Dining',
  },
  {
    id: 'cafe-coffee-day',
    name: 'Café Coffee Day Express',
    category: 'Dining',
    terminal: 'Both Terminals',
    location: 'T1 Departure Gate 2 & T2 International Arrival Lobby',
    timings: '24 Hours / 7 Days',
    priceRange: '₹₹',
    description: 'Freshly ground South Indian filter coffees, espresso beverages, iced lattes, toasted sandwiches, fresh croissants, and quick grab-and-go sweet treats.',
    specialtyItems: ['South Indian Filter Kaapi', 'Crunchy Chicken Wrap', 'Hazelnut Cappuccino'],
    tag: 'Café & Quick Bites',
  },
  {
    id: 'chai-point-snack-bar',
    name: 'Chai Point & Malabar Tea Bar',
    category: 'Dining',
    terminal: 'Both Terminals',
    location: 'Departure Check-In Concourse',
    timings: '04:30 AM – 12:00 AM',
    priceRange: '₹',
    description: 'Authentic freshly brewed ginger, masala, and Sulaimani teas served hot with traditional Kerala snacks like Pazham Pori (banana fritters), Unnakaya, and crispy samosas.',
    specialtyItems: ['Authentic Malabar Sulaimani Tea', 'Hot Pazham Pori (Banana Fritters)', 'Masala Chai in Clay Kullad'],
    tag: 'Tea & Snacks',
  },
  {
    id: 'bird-executive-lounge',
    name: 'Bird CIP Executive Lounge',
    category: 'Lounge',
    terminal: 'Terminal 2',
    location: 'First Floor, International Security Hold Area (Near Gate 6)',
    timings: '24 Hours / 7 Days',
    priceRange: '₹₹₹',
    description: 'An exclusive oasis of comfort away from the bustling terminal. Featuring luxurious recliner seating, complimentary hot & cold gourmet buffet dining, high-speed Wi-Fi, flight display screens, and showers.',
    specialtyItems: ['All-Day Multi-Cuisine Buffet', 'Quiet Resting Workstations', 'Priority Pass & LoungeKey Access'],
    tag: 'Executive Lounge',
  },
  {
    id: 'kerala-handicrafts-beypore',
    name: 'Malabar Crafts & Beypore Dhow Models',
    category: 'Specialty',
    terminal: 'Terminal 2',
    location: 'International Departures SHA, Near Gate 7',
    timings: '06:00 AM – 11:00 PM',
    priceRange: '₹₹',
    description: 'Artisanal hand-crafted souvenirs celebrating Malabar’s maritime heritage. Authentic miniature handcrafted wooden Beypore Uru (dhows), brass Nettoor petti boxes, and traditional Kerala bell metal lamps (Nilavilakku).',
    specialtyItems: ['Handcrafted Teak Beypore Uru Boats', 'Kerala Aranmula Metal Mirror', 'Traditional Handloom Sarees & Shawls'],
    tag: 'Cultural Souvenirs',
  },
  {
    id: 'whsmith-travel-retail',
    name: 'WHSmith Travel Essentials & Books',
    category: 'Shopping',
    terminal: 'Both Terminals',
    location: 'T1 & T2 Departure Boarding Area',
    timings: '24 Hours / 7 Days',
    priceRange: '₹₹',
    description: 'One-stop convenience store stocking international bestsellers, regional Malayalam literature, travel comfort pillows, electronics, noise-cancelling headphones, adaptors, and premium confectionery.',
    specialtyItems: ['Bestseller Paperbacks & Magazines', 'Travel Neck Pillows & Eye Masks', 'Universal Travel Power Adapters'],
    tag: 'Travel Essentials',
  },
  {
    id: 'ayurvedic-wellness-spa',
    name: 'AyurVeda Express Reflexology & Spa',
    category: 'Lounge',
    terminal: 'Terminal 2',
    location: 'T2 International Departures, Mezzanine Level',
    timings: '08:00 AM – 10:30 PM',
    priceRange: '₹₹₹',
    description: 'Rejuvenate your senses before long-haul flights with authentic Kerala herbal head, shoulder, and foot reflexology massage treatments administered by certified Ayurvedic wellness therapists.',
    specialtyItems: ['15-Min Quick De-Stress Neck Massage', '30-Min Herbal Foot Reflexology', 'Authentic Herbal Oils & Balms'],
    tag: 'Wellness & Spa',
  },
];

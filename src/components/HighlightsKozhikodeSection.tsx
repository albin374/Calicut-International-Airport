import React, { useState, useRef, useEffect, useCallback } from 'react';

export interface DestinationHighlight {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  description: string;
  distance?: string;
  bestTime?: string;
  highlights?: string[];
}

export const HIGHLIGHTS_DATA: DestinationHighlight[] = [
  {
    id: 'arippara',
    title: 'Arippara\nWaterfalls',
    subtitle: 'Thiruvambady, Kozhikode',
    image: '/Suspension Bridge Over Forest Falls.png',
    description: 'A beautiful picnic spot by the iruvanji River near Thiruvambady,these falls attract many visitors.The terrain being rocky and steep many cascades are formed along the course of the river',
    distance: '~46 km from CCJ Airport (1h 15m)',
    bestTime: 'September to February',
    highlights: ['Lush rainforest trails', 'Suspension bridge walks', 'Scenic cascade pools']
  },
  {
    id: 'beypore',
    title: 'Beypore\nPort',
    subtitle: 'Chaliyar River Estuary',
    image: '/Sunset Pier Over a Golden Sea.png',
    description: 'Located at the mouth of the Chaliyar River,Beypore was one of the prominent ports and maritme trading centres of ancient Kerala.',
    distance: '~22 km from CCJ Airport (35m)',
    bestTime: 'October to March (Sunset hours)',
    highlights: ['Historic 2km sea bridge', 'Ancient Uru boatbuilding yards', 'Golden sunset views']
  },
  {
    id: 'iringal',
    title: 'Iringal',
    subtitle: 'Sargalaya Crafts Village',
    image: '/Kerala Temple Amid Lush Gardens.png',
    description: 'Birthplace of Kunjali Marakkar,the legendary admiral of the Zamorins. Iringal in Vadakara is today named for a crafts village set up near Moorad river.Around 32 huts houses artists who make exhibit and market their creations to tourists.',
    distance: '~58 km from CCJ Airport (1h 30m)',
    bestTime: 'Year-round (Craft workshops open daily)',
    highlights: ['32 artisan craft huts', 'Moorad river boating', 'Kunjali Marakkar memorial']
  },
  {
    id: 'kadalundi',
    title: 'Kadalundi\nBird Sanctuary',
    subtitle: 'Kadalundi River Estuary',
    image: '/Golden-Hour Tropical Bird Estuary.png',
    description: 'Consisting of 25 acres of mudflats at the kadalundi river estuary,this is a wetland habitat for migratory and terrestrial birds.The mangrove vegetation provides shelter to otters and jackals too.',
    distance: '~18 km from CCJ Airport (30m)',
    bestTime: 'November to April (Peak migratory season)',
    highlights: ['25-acre estuarine mudflats', 'Over 100 bird species', 'Mangrove canoe rides']
  },
  {
    id: 'kappad',
    title: 'Kappad\nBeach',
    subtitle: 'Historic Landing Coast',
    image: '/Aerial View of a Vibrant Coastal Harbor.png',
    description: "An unassuming monument celebrates Vasco da Gama's landing at this historic beach on May 27, 1498 .En-route to Kappad is the Korapuzha estuary at Elathur.",
    distance: '~38 km from CCJ Airport (55m)',
    bestTime: 'October to May',
    highlights: ['Vasco da Gama monument', 'Rock-strewn coastline', 'Korapuzha estuary nearby']
  },
  {
    id: 'pazhassiraja',
    title: 'Pazhassiraja Museum\n& Art Gallery',
    subtitle: 'East Hill, Kozhikode',
    image: '/Tropical Riverside Resort Under Stormy Skies.png',
    description: 'The judge\'s bungalow built in 1812 was later renamed after pazhassiraja and converted into a museum.On display here are copies of ancient murals.antique bronzes,old coins, excavated earthenware,models of temples,megalithic ,monuments like dolmenoid cists umbrella stones etc.',
    distance: '~27 km from CCJ Airport (45m)',
    bestTime: 'Tuesday to Sunday (10 AM - 5 PM)',
    highlights: ['Megalithic dolmenoid cists', 'Historic 1812 bungalow', 'Ancient murals & bronzes']
  }
];

// Tripled dataset for seamless infinite looping (6 items * 3 = 18 items)
const EXTENDED_HIGHLIGHTS = [...HIGHLIGHTS_DATA, ...HIGHLIGHTS_DATA, ...HIGHLIGHTS_DATA];
const BASE_COUNT = HIGHLIGHTS_DATA.length; // 6
const INITIAL_INDEX = BASE_COUNT; // Index 6 is the start of the middle set

export const HighlightsKozhikodeSection: React.FC = () => {
  const [selectedHighlight, setSelectedHighlight] = useState<DestinationHighlight | null>(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [dimensions, setDimensions] = useState({ cardWidth: 290, gap: 24 });

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Dynamically calculate precise card width for 4 visible cards on desktop
  const updateDimensions = useCallback(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    if (!containerWidth) return;

    const w = window.innerWidth;
    let visible = 4;
    let gap = 24;

    if (w < 640) {
      gap = 16;
      const cardWidth = Math.round(containerWidth * 0.84);
      setDimensions({ cardWidth, gap });
      return;
    } else if (w < 1024) {
      visible = 2;
      gap = 20;
    } else {
      visible = 4;
      gap = 24;
    }

    const cardWidth = Math.round((containerWidth - (visible - 1) * gap) / visible);
    setDimensions({ cardWidth, gap });
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    const timer = setTimeout(updateDimensions, 100);
    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearTimeout(timer);
    };
  }, [updateDimensions]);

  // Handle seamless teleport on transition end
  const handleTransitionEnd = (e: React.TransitionEvent) => {
    // Only react to track's own transform transition
    if (e.target !== trackRef.current || e.propertyName !== 'transform') return;

    if (currentIndex >= BASE_COUNT * 2) {
      // Reached third set -> teleport silently back to middle set
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - BASE_COUNT);
    } else if (currentIndex < BASE_COUNT) {
      // Reached first set -> teleport silently back to middle set
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + BASE_COUNT);
    }
  };

  // Re-enable smooth transition after silent teleport
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Autoplay carousel: moves left-to-right continuously
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3600);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Active indicator dot index (0 to 5)
  const activeDotIndex = ((currentIndex % BASE_COUNT) + BASE_COUNT) % BASE_COUNT;

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF7F2] text-[#141414] py-16 sm:py-24 lg:py-28 select-none border-t border-stone-200/50">
      
      {/* Background Scenic Right Image for Heading: Misty Golden Hour Coastal Escape */}
      <div className="absolute top-0 right-0 w-full sm:w-[580px] md:w-[720px] lg:w-[880px] xl:w-[1000px] h-[380px] sm:h-[420px] lg:h-[460px] pointer-events-none select-none z-0 overflow-hidden">
        <img 
          src="/Misty Golden Hour Coastal Escape.png" 
          alt="Misty Golden Hour Coastal Escape"
          className="w-full h-full object-cover object-center lg:object-right-top"
        />
        {/* Left side gradient to cleanly preserve heading text legibility while keeping the rest of the image rich & vibrant */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/60 via-30% to-transparent" />
        
        {/* Subtle bottom edge blend into the carousel */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#FAF7F2] to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 sm:mb-20 lg:mb-24">
          <div className="max-w-3xl">
            {/* Eyebrow with Terracotta Accent Bar */}
            <div className="flex items-center gap-3 text-xs sm:text-[13px] tracking-[0.24em] font-semibold text-[#666666] uppercase mb-4">
              <span>HIGHLIGHTS OF KOZHIKODE</span>
              <span className="w-9 h-[2px] bg-[#A2552B]" />
            </div>

            {/* Modern Professional Headline */}
            <h2 className="font-sans text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#141414] leading-[1.12]">
              Timeless places,<br />
              <span className="text-[#A2552B]">unforgettable experiences.</span>
            </h2>

            {/* Subtitle Copy */}
            <p className="mt-5 text-[#4A4A4A] text-sm sm:text-base font-normal leading-relaxed max-w-2xl">
              From serene beaches and historic ports to lush waterfalls and rich heritage, Kozhikode offers a blend of natural beauty and cultural charm.
            </p>
          </div>

          {/* Navigation Controls: Circular Arrows & Dot Indicators */}
          <div className="flex flex-col items-start md:items-end gap-3 self-start md:self-end pt-2 md:pt-0">
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous destination"
                className="w-12 h-12 rounded-full border border-stone-300/80 bg-white text-stone-800 shadow-sm flex items-center justify-center hover:bg-stone-50 hover:scale-105 active:scale-95 cursor-pointer transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                aria-label="Next destination"
                className="w-12 h-12 rounded-full bg-[#A2552B] text-white shadow-md flex items-center justify-center hover:bg-[#8B4420] hover:scale-105 active:scale-95 cursor-pointer transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

            {/* Carousel Loop Indicators */}
            <div className="flex items-center gap-1.5 mt-1">
              {HIGHLIGHTS_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentIndex(BASE_COUNT + i);
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeDotIndex === i 
                      ? 'w-6 bg-[#A2552B]' 
                      : 'w-2 bg-stone-300 hover:bg-stone-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 4 In A Row Infinite Looping Carousel Track */}
        <div 
          ref={containerRef}
          className="relative w-full overflow-hidden pb-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${currentIndex * (dimensions.cardWidth + dimensions.gap)}px)`,
              transition: isTransitioning ? 'transform 600ms cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
              gap: `${dimensions.gap}px`
            }}
            className="flex will-change-transform"
          >
            {EXTENDED_HIGHLIGHTS.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                onClick={() => setSelectedHighlight(item)}
                style={{ width: `${dimensions.cardWidth}px` }}
                className="group relative flex-none h-[460px] sm:h-[490px] lg:h-[515px] rounded-[26px] sm:rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-end cursor-pointer border border-stone-800/20"
              >
                {/* Full-bleed Background Image with Ken Burns Zoom */}
                <img
                  src={item.image}
                  alt={item.title.replace('\n', ' ')}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />

                {/* Soft Gradient Shade Behind Text (Pure shade overlay, no solid box) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 via-50% to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-95" />

                {/* Subtle top edge vignette for contrast and depth */}
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />

                {/* Text Content Overlay at Bottom (Arrow removed per request) */}
                <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-end">
                  {/* Title without arrow */}
                  <div>
                    <h3 className="font-sans text-2xl sm:text-[25px] font-bold text-white leading-snug tracking-tight whitespace-pre-line group-hover:text-[#F3D7B7] transition-colors drop-shadow-sm">
                      {item.title}
                    </h3>
                  </div>

                  {/* Terracotta Underline Accent */}
                  <div className="w-7 h-[2px] bg-[#A2552B] mt-2.5 mb-3 group-hover:w-12 transition-all duration-300" />

                  {/* Description Paragraph */}
                  <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed font-normal line-clamp-4 drop-shadow-xs">
                    {item.description}
                  </p>

                  {/* Subtitle / Location Footer */}
                  {item.subtitle && (
                    <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-medium text-[#E8C59A] tracking-wider uppercase">
                      <span>{item.subtitle}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Reader / Detail View Modal */}
      {selectedHighlight && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedHighlight(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative w-full h-64 sm:h-80 bg-stone-900">
              <img 
                src={selectedHighlight.image} 
                alt={selectedHighlight.title.replace('\n', ' ')}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedHighlight(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
              >
                ✕
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#E8C59A] uppercase mb-1 block">
                  HIGHLIGHTS OF KOZHIKODE
                </span>
                <h3 className="font-sans text-3xl sm:text-4xl font-bold leading-tight">
                  {selectedHighlight.title.replace('\n', ' ')}
                </h3>
                {selectedHighlight.subtitle && (
                  <p className="text-white/80 text-xs sm:text-sm mt-1">{selectedHighlight.subtitle}</p>
                )}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {selectedHighlight.description}
              </p>

              {/* Quick Facts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200/60 mb-6">
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-stone-500 uppercase block">Distance from Airport</span>
                  <span className="text-sm font-semibold text-stone-800">{selectedHighlight.distance}</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-stone-500 uppercase block">Best Time to Visit</span>
                  <span className="text-sm font-semibold text-stone-800">{selectedHighlight.bestTime}</span>
                </div>
              </div>

              {selectedHighlight.highlights && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2.5">Key Highlights</h4>
                  <ul className="flex flex-wrap gap-2">
                    {selectedHighlight.highlights.map((h, i) => (
                      <li key={i} className="text-xs bg-stone-100 text-stone-700 px-3 py-1.5 rounded-full font-medium">
                        ✦ {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedHighlight(null)}
                  className="px-6 py-2.5 rounded-full bg-[#A2552B] text-white font-medium text-sm hover:bg-[#8B4420] transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

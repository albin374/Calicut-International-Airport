import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, X } from 'lucide-react';

export interface StoryChapter {
  id: string;
  number: string;
  tagline: string;
  subtitle: string;
  description: string;
  image: string;
  era: string;
  deepDive: {
    overview: string;
    keyFacts: string[];
    significance: string;
  };
}

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: 'chapter-1',
    number: '01',
    tagline: 'The Beginning',
    subtitle: 'How Calicut rose to power',
    description: 'Calicut emerged as a major port city around the 13th century, laying the foundation for a thriving maritime centre.',
    image: '/Tropical Dhow Harbor Spice Market01.png',
    era: '13th Century',
    deepDive: {
      overview: 'Originally known as Nediyiruppu Swaroopam, the Eradi rulers shifted towards the coastal strip of Kozhikode seeking maritime access. By granting religious tolerance, equitable trade tariffs, and absolute security to foreign merchants, the Zamorins (Samoothiris) transformed a modest coastal clearing into the premier international entrepôt of the Arabian Sea.',
      keyFacts: [
        'Founded following the dissolution of the Second Chera (Kulashekhara) Kingdom.',
        'Zamorins implemented the "Right of the Sea" granting unhindered anchorage and fair tariffs to all international merchant ships.',
        'Established thriving foreign merchant quarters including Arab, Persian, Chinese, and Gujarati trade guilds.'
      ],
      significance: 'Laid the foundational legal and cultural framework of communal harmony and free enterprise that defines Kozhikode to this day.'
    }
  },
  {
    id: 'chapter-2',
    number: '02',
    tagline: 'A World of Trade',
    subtitle: 'A meeting place of nations',
    description: 'Spice markets, merchant ships, and connections with Arabia and China established Calicut as the world\'s spice capital.',
    image: '/Golden Sunset Spice Harbor02.png',
    era: '14th Century',
    deepDive: {
      overview: 'Calicut’s shores evolved into a bustling cosmopolitan melting pot where traders from Venice, Cairo, Persia, and China converged. The waterfront spice bazaars were alive with multilingual bargaining, exchanging black pepper, ginger, cloves, and fine woven Calico textiles.',
      keyFacts: [
        'Visited seven times by Chinese Admiral Zheng He during the great Ming maritime expeditions.',
        'Arab merchants known as the Pardesis and Marakkars established major trade headquarters along the shore.',
        'Calico cloth, named directly after Calicut, became one of the most widely exported textiles in world history.'
      ],
      significance: 'Transformed Kozhikode into the global epicenter of spice commerce and intercontinental diplomacy.'
    }
  },
  {
    id: 'chapter-3',
    number: '03',
    tagline: 'The People Behind the Port',
    subtitle: 'Ships, sailors and skilled navigators',
    description: 'The merchants, sailors, and Marikkar naval leaders who shaped Calicut’s maritime history and mastered oceanic winds.',
    image: '/Golden Harbor at Sunse03.png',
    era: '14th – 15th Century',
    deepDive: {
      overview: 'Calicut’s maritime dominance was driven by fearless seamen, seasoned cartographers, and the legendary Kunjali Marakkars — hereditary naval admirals of the Zamorins. Harnessing the annual predictability of the Southwest and Northeast monsoon winds, native navigators steered massive wooden vessels (Urus) across boundless oceans.',
      keyFacts: [
        'Beypore shipbuilding yards crafted legendary wooden Urus revered for unparalleled strength in open water.',
        'The Marakkar admirals organized one of Asia’s first organized standing naval forces.',
        'Pioneered celestial navigation, astrolabe charts, and tactical hit-and-run naval maneuvers.'
      ],
      significance: 'Secured Calicut’s trade dominance against hostile foreign navies for over two centuries.'
    }
  },
  {
    id: 'chapter-4',
    number: '04',
    tagline: 'The Maritime Tradition',
    subtitle: 'Trade winds and ocean charts',
    description: 'Nautical charts and seasonal monsoons guided merchant dhows across the Indian Ocean to Calicut\'s welcoming shores.',
    image: '/Dhow Fleet from the Navigator’s Deck04.png',
    era: '15th Century',
    deepDive: {
      overview: 'Nautical cartography flourished as navigators charted seasonal monsoon currents across the Arabian Sea. Detailed sea charts and navigational quadrants enabled year-round trade connections connecting Calicut with Malacca, Hormuz, and Aden.',
      keyFacts: [
        'Calicut served as the western terminus for Southeast Asian junks and eastern terminus for Arab dhows.',
        'Monsoon navigation tables (Rahmani) cataloged stellar positions, wave rhythms, and harbor depths.',
        'Pepper warehouses along the Chaliyar estuary stored immense reserves of "Black Gold" for global export.'
      ],
      significance: 'Bound continents together through maritime science and trade centuries before modern shipping lanes existed.'
    }
  },
  {
    id: 'chapter-5',
    number: '05',
    tagline: 'A Turning Point',
    subtitle: 'Vasco da Gama arrives, 1498',
    description: 'The Portuguese arrival and the beginning of a new era of global trade, European rivalry, and naval conflict.',
    image: '/Crusader Fleet at Sunset05.png',
    era: 'May 1498',
    deepDive: {
      overview: 'On May 20, 1498, Portuguese navigator Vasco da Gama dropped anchor off the shores of Kappad, near Calicut, having rounded the Cape of Good Hope. His arrival opened the direct ocean sea route from Europe to Asia, fundamentally altering world history and inaugurating an era of intense maritime diplomacy, rivalry, and armed conflicts.',
      keyFacts: [
        'First direct maritime passage linking Western Europe to India without traversing Ottoman trade routes.',
        'The Zamorin granted Gama audience at his royal palace, welcoming European merchants alongside existing Arab traders.',
        'Tensions flared when Portuguese attempts to establish an armed trade monopoly were resisted by local rulers.'
      ],
      significance: 'Heralded the Age of Discovery and transformed the Indian Ocean into an arena of global geopolitical contest.'
    }
  },
  {
    id: 'chapter-6',
    number: '06',
    tagline: 'The Long Decline',
    subtitle: 'A kingdom reaches its end',
    description: 'Maritime resistance, political change, and the twilight of the Zamorin’s storied rule across the Malabar coast.',
    image: '/Sunset Fortress Over a Bustling Harbor06.png',
    era: '16th – 18th Century',
    deepDive: {
      overview: 'Over subsequent centuries, the Zamorins and their naval leaders mounted fierce resistance against European fortresses and naval blockades. Despite heroic defenses led by successive Kunjali Marakkars, shifting regional coalitions, the rise of Travancore, and Mysore invasions eventually brought the sovereignty of the Zamorins to an end by the late 18th century.',
      keyFacts: [
        'Heroic defense of Chaliyam Fort (1571), where Zamorin’s joint forces expelled the Portuguese garrison.',
        'Centuries of tactical naval warfare along the jagged coves of the Malabar shoreline.',
        'In 1792, through the Treaty of Seringapatam, Malabar transitioned under British administrative governance.'
      ],
      significance: 'Though the dynasty waned, Calicut’s spirit of communal amity, mercantile openness, and cultural pride remains immortal.'
    }
  },
  {
    id: 'chapter-7',
    number: '07',
    tagline: 'Guardian of the Coast',
    subtitle: 'Kozhikode Lighthouse, 1847',
    description: 'First constructed in 1847 as a 33-meter coastal beacon, the historic lighthouse guided generations of mariners.',
    image: '/Coastal Lighthouse Among Tropical Greenery07.png',
    era: '1847 – Present',
    deepDive: {
      overview: 'The Kozhikode Lighthouse stands as a revered beacon on the Malabar shoreline. First erected in 1847 to safeguard merchant dhows, steamships, and coastal fleets navigating into Calicut harbor, the station underwent continuous engineering evolutions—progressing from coconut oil wick lamps and British occulting optics to acetylene gas flashers and modern solar-powered LED automation.',
      keyFacts: [
        '1847 — The original 33-meter (108 ft) stone tower was erected with lime mortar, utilizing a fixed coconut-oil wick lamp and polished metal reflector.',
        '1881 — Optical upgrade with a fourth-order fixed optic transferred from the Armagon lighthouse.',
        '1903 — Following recommendations by PWD engineer Ashpitel to improve light beam efficiency, a new 15-meter (49 ft) white tower was built with an occulting mechanism imported from England.',
        '1924 & 2008 — Upgraded to an acetylene gas flasher in 1924, and transitioned to an automated solar-powered LED flashing apparatus in 2008.'
      ],
      significance: 'A historic sentinel standing at the crossroads of ancient maritime commerce and modern navigation, illuminating Kozhikode\'s legendary coast.'
    }
  }
];

const BASE_COUNT = STORY_CHAPTERS.length;
const EXTENDED_CHAPTERS = [...STORY_CHAPTERS, ...STORY_CHAPTERS, ...STORY_CHAPTERS];
const INITIAL_INDEX = BASE_COUNT; // Index 7 is the start of the middle set

export const CalicutStorySection: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<StoryChapter | null>(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [dimensions, setDimensions] = useState({ cardWidth: 320, gap: 24 });

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  // Calculate dynamic card dimensions for row layout
  const updateDimensions = useCallback(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    if (!containerWidth) return;

    const w = window.innerWidth;
    let visible = 4;
    let gap = 24;

    if (w < 640) {
      gap = 16;
      const cardWidth = Math.round(containerWidth * 0.82);
      setDimensions({ cardWidth, gap });
      return;
    } else if (w < 1024) {
      visible = 2;
      gap = 20;
    } else if (w < 1280) {
      visible = 3;
      gap = 24;
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

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Autoplay carousel movement (continuous loop)
  useEffect(() => {
    if (isPaused || selectedChapter !== null) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, selectedChapter]);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartXRef.current = null;
    setIsPaused(false);
  };

  // Active indicator dot index (0 to 6)
  const activeDotIndex = ((currentIndex % BASE_COUNT) + BASE_COUNT) % BASE_COUNT;

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedChapter(null);
      }
    };
    if (selectedChapter) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedChapter]);

  return (
    <section 
      id="calicut-story-section"
      className="relative w-full bg-[#FAF7F2] text-[#141414] py-14 sm:py-20 lg:py-24 overflow-hidden select-none border-t border-stone-200/50"
    >
      {/* Background Scenic Image for Heading: Kerala Festival Arts Panorama */}
      <div className="absolute top-0 right-0 w-full sm:w-[600px] md:w-[760px] lg:w-[940px] xl:w-[1100px] h-[340px] sm:h-[380px] lg:h-[420px] pointer-events-none select-none z-0 overflow-hidden">
        <img 
          src="/Kerala Festival Arts Panorama.png" 
          alt="Kerala Festival Arts Panorama"
          className="w-full h-full object-cover object-center lg:object-right-top opacity-100"
          loading="lazy"
        />
        {/* Slightly reduced left side gradient shade to let more of the artwork shine through */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/50 via-20% sm:via-28% to-transparent" />
        
        {/* Subtle bottom edge blend */}
        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#FAF7F2]/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* ======================================================== */}
        {/* SECTION HEADER ROW WITH NAVIGATION CONTROLS */}
        {/* ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            {/* Eyebrow Accent Bar & Category Tag */}
            <div className="flex items-center gap-3 mb-3.5">
              <span className="w-8 h-[2px] bg-[#A2552B] rounded-full inline-block shrink-0" />
              <span className="text-xs sm:text-[13px] font-semibold tracking-[0.25em] text-[#A2552B] uppercase">
                CHRONICLES OF CALICUT
              </span>
            </div>

            {/* Display Modern Professional Headline */}
            <h2 className="font-sans text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#121212] tracking-tight leading-[1.08] mb-3.5">
              The Story of Calicut
            </h2>

            {/* Professional Subtitle */}
            <p className="text-sm sm:text-base lg:text-[17px] text-[#4A4A4A] font-sans leading-relaxed max-w-2xl">
              From the rise of the Zamorins and bustling spice markets to fearless navigators and the historic arrival of Vasco da Gama — trace the legendary maritime heritage that shaped Kozhikode into the City of Spices.
            </p>
          </div>

          {/* Navigation Controls: Circular Arrows & Dot Indicators */}
          <div className="flex flex-col items-start md:items-end gap-3 self-start md:self-end pt-2 md:pt-0">
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous story card"
                className="w-12 h-12 rounded-full border border-stone-300/80 bg-white text-stone-800 shadow-sm flex items-center justify-center hover:bg-stone-50 hover:scale-105 active:scale-95 cursor-pointer transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                aria-label="Next story card"
                className="w-12 h-12 rounded-full bg-[#A2552B] text-white shadow-md flex items-center justify-center hover:bg-[#8B4420] hover:scale-105 active:scale-95 cursor-pointer transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex items-center gap-1.5 mt-1">
              {STORY_CHAPTERS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentIndex(BASE_COUNT + i);
                  }}
                  aria-label={`Go to chapter ${i + 1}`}
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

        {/* ======================================================== */}
        {/* CARDS IN A ROW CAROUSEL TRACK */}
        {/* Styled exactly like the mockup image with infinite loop */}
        {/* ======================================================== */}
        <div 
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full overflow-hidden pb-4"
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
            {EXTENDED_CHAPTERS.map((chapter, index) => (
              <article
                key={`${chapter.id}-${index}`}
                id={`${chapter.id}-${index}`}
                onClick={() => setSelectedChapter(chapter)}
                style={{ width: `${dimensions.cardWidth}px` }}
                className="group relative flex-none h-[500px] sm:h-[530px] lg:h-[555px] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-end cursor-pointer border border-stone-800/15 bg-stone-900"
              >
                {/* 1. Underlying Cinematic Full-Bleed Artwork */}
                <img
                  src={chapter.image}
                  alt={`${chapter.tagline} - ${chapter.subtitle}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />

                {/* 2. Dark Vignette Gradient on Bottom Behind Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 via-48% to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-95" />

                {/* Subtle top edge vignette for contrast and depth */}
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />

                {/* 3. Text Content Overlay at Bottom (Matches Mockup) */}
                <div className="relative z-10 p-5 sm:p-6 lg:p-7 flex flex-col justify-end">
                  
                  {/* Eyebrow: 01 — */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="font-bold text-sm sm:text-base text-[#D4824C] tracking-wider font-sans">
                      {chapter.number}
                    </span>
                    <span className="w-8 h-[2px] bg-[#D4824C]/80 rounded-full inline-block" />
                  </div>

                  {/* Main Title: The Beginning */}
                  <h3 className="font-serif text-2xl sm:text-[27px] text-white font-normal leading-snug tracking-tight mb-1 drop-shadow-sm">
                    {chapter.tagline}
                  </h3>

                  {/* Subtitle: How Calicut rose to power */}
                  <h4 className="text-stone-300 font-sans text-sm sm:text-[15px] font-normal leading-normal mb-2.5 drop-shadow-xs">
                    {chapter.subtitle}
                  </h4>

                  {/* Description Paragraph */}
                  <p className="text-stone-300/85 text-xs sm:text-[13px] leading-relaxed font-sans line-clamp-3 mb-3.5 max-w-[280px]">
                    {chapter.description}
                  </p>

                  {/* Bottom Row: Era & Circular Terracotta Arrow Button */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] font-medium text-stone-400 tracking-wider uppercase font-sans">
                      {chapter.era}
                    </span>

                    {/* Terracotta Circular Arrow Button (Matches Mockup) */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedChapter(chapter);
                      }}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#B86230] hover:bg-[#A05020] text-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(184,98,48,0.5)] cursor-pointer shrink-0"
                      aria-label={`Explore ${chapter.tagline}`}
                    >
                      <ArrowRight className="w-5 h-5 stroke-[2.2]" />
                    </button>
                  </div>

                </div>

              </article>
            ))}
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* HISTORICAL STORY DEEP DIVE MODAL */}
      {/* ======================================================== */}
      {selectedChapter && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedChapter(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-2xl shadow-2xl overflow-hidden border border-amber-950/15 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Artwork Banner */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-stone-900">
              <img 
                src={selectedChapter.image} 
                alt={selectedChapter.tagline}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-black/40 to-black/20" />
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedChapter(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close chronicle"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title Overlay in Banner */}
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#A2552B] uppercase bg-white/90 px-2.5 py-1 rounded-md">
                  {selectedChapter.number} · {selectedChapter.era}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 mt-2 font-medium">
                  {selectedChapter.tagline} — <span className="text-[#A2552B] font-sans font-semibold text-xl sm:text-2xl">{selectedChapter.subtitle}</span>
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-semibold tracking-[0.2em] text-stone-500 uppercase mb-2">Historical Overview</h4>
                <p className="font-sans text-stone-700 text-base leading-relaxed">
                  {selectedChapter.deepDive.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold tracking-[0.2em] text-stone-500 uppercase mb-3">Key Historical Records</h4>
                <ul className="space-y-2.5">
                  {selectedChapter.deepDive.keyFacts.map((fact, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A2552B] mt-2 shrink-0" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-900/10">
                <h4 className="text-xs font-semibold tracking-wider text-[#A2552B] uppercase mb-1">Enduring Significance</h4>
                <p className="text-stone-700 text-sm font-normal">
                  "{selectedChapter.deepDive.significance}"
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 sm:px-8 py-4 bg-stone-100/60 border-t border-stone-200/60 flex items-center justify-between">
              <span className="text-xs text-stone-500 font-sans">
                Chronicles of Calicut International Airport Heritage
              </span>
              <button
                type="button"
                onClick={() => setSelectedChapter(null)}
                className="px-5 py-2 rounded-full bg-[#A2552B] text-white text-xs font-medium tracking-wide hover:bg-[#884420] transition-colors cursor-pointer shadow-xs"
              >
                Close Chronicle
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

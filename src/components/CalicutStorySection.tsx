import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, ChevronRight, X } from 'lucide-react';

export interface StoryChapter {
  id: string;
  tagline: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  image: string;
  textSide: 'left' | 'right';
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
    tagline: 'THE BEGINNING',
    titleLine1: 'How Calicut',
    titleLine2: 'rose to power',
    description: 'Calicut emerged as a major port city around the 13th century. After the decline of the Kulashekhara Empire, the Eradis of Nediyiruppu gained control of the region and established the Zamorins, who made Calicut a prominent trading centre.',
    image: '/Golden Sunset Harbor Marketplace1.png',
    textSide: 'left',
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
    tagline: 'A WORLD OF TRADE',
    titleLine1: 'A meeting place',
    titleLine2: 'of nations',
    description: 'Spice markets, merchant ships, and connections with Arabia and China.',
    image: '/Golden Sunset Spice Harbor.png',
    textSide: 'right',
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
    tagline: 'THE PEOPLE BEHIND THE PORT',
    titleLine1: 'Ships, sailors and',
    titleLine2: 'skilled navigators',
    description: 'The merchants, sailors, and Marikkar naval leaders who shaped Calicut’s maritime history.',
    image: '/Golden Harbor at Sunset2.png',
    textSide: 'left',
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
    tagline: 'THE MARITIME TRADITION',
    titleLine1: 'Trade winds and',
    titleLine2: 'ocean charts',
    description: 'Nautical charts and seasonal monsoons guided merchant dhows across the Indian Ocean to Calicut\'s welcoming shores, trading black pepper, cardamom, and precious silks.',
    image: '/Golden Hour Dhow Harbor3.png',
    textSide: 'right',
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
    tagline: 'A TURNING POINT',
    titleLine1: 'Vasco da Gama',
    titleLine2: 'arrives, 1498',
    description: 'The Portuguese arrival and the beginning of a new era of trade and conflict.',
    image: '/Golden Fleet Arrives at Sunset4.png',
    textSide: 'left',
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
    tagline: 'THE LONG DECLINE',
    titleLine1: 'A kingdom',
    titleLine2: 'reaches its end',
    description: 'Maritime resistance, political change, and the end of the Zamorin’s rule.',
    image: '/Golden Harbor Fortress at Sunset5.png',
    textSide: 'right',
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
    tagline: 'GUARDIAN OF THE COAST',
    titleLine1: 'Kozhikode Lighthouse,',
    titleLine2: 'guiding the shores',
    description: 'First constructed in 1847 at a height of 33 meters, the historic Kozhikode Lighthouse has guided generations of mariners through Malabar\'s waters. The iconic white coastal tower stands as a timeless sentinel of Calicut\'s maritime legacy.',
    image: '/Golden Lighthouse Over Tropical Sunset.png',
    textSide: 'left',
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

// Base count of original cards
const BASE_COUNT = STORY_CHAPTERS.length; // 7

// Triple clone to create seamless infinite loop in both directions
const CLONED_CHAPTERS = [...STORY_CHAPTERS, ...STORY_CHAPTERS, ...STORY_CHAPTERS];
const INITIAL_INDEX = BASE_COUNT; // Index 7 (middle set)

export const CalicutStorySection: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<StoryChapter | null>(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const trackRef = useRef<HTMLDivElement>(null);

  // Active index (0 to 6)
  const activeIndex = ((currentIndex % BASE_COUNT) + BASE_COUNT) % BASE_COUNT;

  // Handle seamless silent teleport on transition end
  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.target !== trackRef.current || e.propertyName !== 'transform') return;

    if (currentIndex >= BASE_COUNT * 2) {
      // Reached third set -> silent teleport back to middle set
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - BASE_COUNT);
    } else if (currentIndex < BASE_COUNT) {
      // Reached first set -> silent teleport back to middle set
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

  // Autoplay slider (5 seconds per slide, paused on hover or when modal is open)
  useEffect(() => {
    if (isPaused || selectedChapter) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, selectedChapter]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;
    if (diff > 50) {
      handleNext();
      setTouchStart(null);
    } else if (diff < -50) {
      handlePrev();
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

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
        {/* SECTION HEADER WITH SLIDER CONTROLS                      */}
        {/* ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-10">
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

          {/* Navigation Controls: Counter & Circular Arrow Buttons */}
          <div className="flex items-center gap-4 self-start md:self-end shrink-0">
            {/* Slide Counter */}
            <div className="text-xs sm:text-sm font-semibold tracking-widest text-stone-500 font-sans">
              <span className="text-[#A2552B] text-base font-bold">0{activeIndex + 1}</span>
              <span className="mx-1 text-stone-300">/</span>
              <span>0{BASE_COUNT}</span>
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous story card"
                className="w-11 h-11 rounded-full border border-stone-300 bg-white/90 text-stone-700 hover:text-white hover:bg-[#A2552B] hover:border-[#A2552B] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
              >
                <ArrowLeft className="w-4 h-4 stroke-[2.2]" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next story card"
                className="w-11 h-11 rounded-full border border-stone-300 bg-white/90 text-stone-700 hover:text-white hover:bg-[#A2552B] hover:border-[#A2552B] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
              >
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </button>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* SINGLE-ROW INFINITE LOOPING SLIDER (1 CARD AT A TIME)    */}
        {/* ======================================================== */}
        <div 
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-amber-950/10 bg-[#FAF7F2]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Sliding Track (All cards placed in 1 continuous row) */}
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            className="flex flex-row w-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
            }}
          >
            {CLONED_CHAPTERS.map((chapter, index) => {
              const isTextLeft = chapter.textSide === 'left';

              return (
                <article
                  key={`${chapter.id}-${index}`}
                  className="w-full shrink-0 flex-none relative overflow-hidden min-h-[380px] sm:min-h-[420px] lg:min-h-[450px] flex items-center"
                >
                  {/* -------------------------------------------------- */}
                  {/* 1. Underlying Cinematic Background Artwork         */}
                  {/* -------------------------------------------------- */}
                  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
                    <img
                      src={chapter.image}
                      alt={`${chapter.titleLine1} ${chapter.titleLine2} - Calicut History`}
                      className={`w-full h-full object-cover ${
                        isTextLeft ? 'object-right' : 'object-left'
                      }`}
                      loading="lazy"
                    />

                    {/* Desktop Smooth Editorial Feather Gradient */}
                    {isTextLeft ? (
                      <div 
                        className="hidden md:block absolute inset-0 pointer-events-none"
                        style={{
                          background: 'linear-gradient(to right, #FAF7F2 0%, #FAF7F2 36%, rgba(250, 247, 242, 0.94) 46%, rgba(250, 247, 242, 0.6) 56%, rgba(250, 247, 242, 0.15) 68%, transparent 78%)'
                        }}
                      />
                    ) : (
                      <div 
                        className="hidden md:block absolute inset-0 pointer-events-none"
                        style={{
                          background: 'linear-gradient(to left, #FAF7F2 0%, #FAF7F2 36%, rgba(250, 247, 242, 0.94) 46%, rgba(250, 247, 242, 0.6) 56%, rgba(250, 247, 242, 0.15) 68%, transparent 78%)'
                        }}
                      />
                    )}

                    {/* Mobile View Gradient */}
                    <div 
                      className="md:hidden absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(to bottom, #FAF7F2 0%, #FAF7F2 52%, rgba(250, 247, 242, 0.92) 68%, rgba(250, 247, 242, 0.4) 84%, transparent 100%)'
                      }}
                    />
                  </div>

                  {/* -------------------------------------------------- */}
                  {/* 2. Editorial Typography & Content Container        */}
                  {/* -------------------------------------------------- */}
                  <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 py-8 sm:py-10 lg:py-12 flex items-center">
                    <div 
                      className={`w-full md:w-[56%] lg:w-[50%] xl:w-[46%] ${
                        !isTextLeft ? 'md:ml-auto' : ''
                      }`}
                    >
                      
                      {/* Eyebrow Accent Line & Category Tag */}
                      <div className="flex items-center gap-3 mb-2.5 sm:mb-3.5">
                        <span className="w-6 sm:w-7 h-[2px] bg-[#A2552B] rounded-full inline-block shrink-0" />
                        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#A2552B] uppercase font-sans">
                          {chapter.tagline}
                        </span>
                      </div>

                      {/* Modern Professional Headline */}
                      <h3 className="font-sans text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold text-[#121212] leading-[1.14] tracking-tight mb-3 sm:mb-4">
                        {chapter.titleLine1} <br />
                        <span className="text-[#A2552B] block mt-0.5 font-semibold">
                          {chapter.titleLine2}
                        </span>
                      </h3>

                      {/* Professional Description Text */}
                      <p className="font-sans text-[#3E3E3E] text-sm sm:text-[15px] lg:text-[16px] leading-[1.68] font-normal mb-5 sm:mb-6 max-w-xl">
                        {chapter.description}
                      </p>

                      {/* Explore Chronicle Button */}
                      <div>
                        <button
                          type="button"
                          onClick={() => setSelectedChapter(chapter)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wide text-[#A2552B] bg-[#A2552B]/10 hover:bg-[#A2552B] hover:text-white border border-[#A2552B]/25 transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-xs active:scale-95 group/btn"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Explore Chronicle</span>
                          <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                        </button>
                      </div>

                    </div>
                  </div>

                </article>
              );
            })}
          </div>

          {/* Floating On-Card Side Arrows for Quick Navigation */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-[#A2552B] text-stone-700 hover:text-white items-center justify-center transition-all duration-200 shadow-md cursor-pointer backdrop-blur-xs"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.2]" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-[#A2552B] text-stone-700 hover:text-white items-center justify-center transition-all duration-200 shadow-md cursor-pointer backdrop-blur-xs"
          >
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </button>
        </div>

      </div>

      {/* ======================================================== */}
      {/* HISTORICAL STORY DEEP DIVE MODAL                         */}
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
                alt={selectedChapter.titleLine1}
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
                  {selectedChapter.tagline} · {selectedChapter.era}
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl text-stone-900 mt-2 font-bold">
                  {selectedChapter.titleLine1} <span className="text-[#A2552B] font-semibold">{selectedChapter.titleLine2}</span>
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

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  PlaneLanding, 
  PlaneTakeoff, 
  Calendar, 
  Search, 
  ChevronRight, 
  X,
  ChevronDown,
  Menu,
  Phone,
  Mail,
  Building
} from 'lucide-react';
import { MOCK_FLIGHTS, Flight } from '../data/mockFlights';

export interface CarouselSlide {
  id: string;
  image: string;
  headline: React.ReactNode;
  description: React.ReactNode;
}

export const DEFAULT_SLIDES: CarouselSlide[] = [
  {
    id: 'terminal',
    image: '/Calicut International Airport Terminal.png',
    headline: (
      <>
        Calicut<br />
        <span className="italic font-serif text-[#E8A57A]">International</span> Airport
      </>
    ),
    description: (
      <>
        Connecting people, places and possibilities across India and the world.<br className="hidden sm:inline" />
        Your journey begins here.
      </>
    )
  },
  {
    id: 'golden-jet',
    image: '/Golden Jet Above Sunset Clouds.png',
    headline: (
      <>
        Every Journey Begins<br />
        <span className="italic font-serif text-[#E8A57A]">With a</span> Flight
      </>
    ),
    description: "Connecting Calicut to the world, bringing people closer to the places and moments that matter."
  },
  {
    id: 'beach-pier',
    image: '/Kozhikode Pier at Sunset (1).png',
    headline: (
      <>
        From the Skies to the<br />
        <span className="italic font-serif text-[#E8A57A]">Shores of</span> Calicut
      </>
    ),
    description: "Land in Kozhikode and discover breathtaking sunsets, beautiful coastlines, and the timeless charm of the Malabar coast."
  },
  {
    id: 'mittayi-theruvu',
    image: "/Kozhikode’s Glowing Mittayi Theruvu (1).png",
    headline: (
      <>
        From Runways to<br />
        <span className="italic font-serif text-[#E8A57A]">Rich</span> Traditions
      </>
    ),
    description: "Experience the culture, shopping, and legendary sweets of Mittayi Theruvu."
  }
];

export interface NavMenu {
  id: string;
  label: string;
  target?: string;
}

export const NAV_MENUS: NavMenu[] = [
  { id: 'before-you-fly', label: 'BEFORE YOU FLY' },
  { id: 'passengers', label: 'PASSENGERS', target: '#essentials-section' },
  { id: 'corporate', label: 'CORPORATE', target: '#news-section' },
  { id: 'business', label: 'BUSINESS', target: '#essentials-section' },
  { id: 'contact', label: 'CONTACT' }
];

export interface AirportBannerProps {
  onSearchFlights?: (query: string, type: 'arrival' | 'departure', date: string) => void;
  slides?: CarouselSlide[];
  autoPlayInterval?: number;
}

export const AirportBanner: React.FC<AirportBannerProps> = ({
  onSearchFlights,
  slides = DEFAULT_SLIDES,
  autoPlayInterval = 5500,
}) => {
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Navigation Bar State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  // Flight Search State
  const [activeTab, setActiveTab] = useState<'arrival' | 'departure'>('arrival');
  const [selectedDate, setSelectedDate] = useState<'Today' | 'Tomorrow' | 'Yesterday'>('Today');
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const datePickerRef = useRef<HTMLDivElement>(null);

  // Next Slide Handler
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  // Auto-play timer
  useEffect(() => {
    if (isFocused || showSuggestions || showDatePicker || isMobileMenuOpen) return;
    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isFocused, showSuggestions, showDatePicker, isMobileMenuOpen, autoPlayInterval, nextSlide]);

  // Close popovers on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setShowDatePicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter flight suggestions
  const suggestions = MOCK_FLIGHTS.filter((flight) => {
    const matchesType = flight.type === activeTab;
    if (!searchQuery.trim()) return matchesType;
    const q = searchQuery.toLowerCase().trim();
    return (
      matchesType &&
      (flight.flightNumber.toLowerCase().includes(q) ||
        flight.airline.toLowerCase().includes(q) ||
        (flight.origin && flight.origin.toLowerCase().includes(q)) ||
        (flight.destination && flight.destination.toLowerCase().includes(q)))
    );
  }).slice(0, 4);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setShowSuggestions(false);
    if (onSearchFlights) {
      onSearchFlights(searchQuery, activeTab, selectedDate);
    }
  };

  const handleSelectSuggestion = (flight: Flight) => {
    setSearchQuery(flight.flightNumber);
    setShowSuggestions(false);
    if (onSearchFlights) {
      onSearchFlights(flight.flightNumber, activeTab, selectedDate);
    }
  };

  const handleMenuClick = (menu: NavMenu) => {
    setIsMobileMenuOpen(false);
    if (menu.id === 'contact') {
      setIsContactModalOpen(true);
      return;
    }
    if (menu.target) {
      const el = document.querySelector(menu.target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (menu.id === 'before-you-fly') {
      if (searchContainerRef.current) {
        searchContainerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const currentSlideData = slides[currentSlide] || slides[0];

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden select-none">
      
      {/* ======================================================== */}
      {/* CAROUSEL BACKGROUND SLIDES (Full Screen Cross-Fade)      */}
      {/* ======================================================== */}
      <div className="absolute inset-0 z-0 bg-slate-900 overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 bg-cover bg-center sm:bg-[center_right] transition-all duration-1000 ease-in-out ${
                isActive 
                  ? 'opacity-100 scale-100 z-10' 
                  : 'opacity-0 scale-105 z-0 pointer-events-none'
              }`}
              style={{
                backgroundImage: `url("${slide.image}")`,
                backgroundColor: '#b8d2eb'
              }}
            />
          );
        })}

        {/* Light atmospheric gradient on the left side to keep white typography clear without darkening the background image */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/50 via-black/25 to-transparent sm:from-black/45 sm:via-black/15 sm:to-transparent pointer-events-none" />
      </div>

      {/* ======================================================== */}
      {/* TOP NAVIGATION BAR WITH ENLARGED LOGO & CENTERED MENUS   */}
      {/* ======================================================== */}
      <header className="absolute top-0 inset-x-0 z-50 w-full bg-gradient-to-b from-black/45 via-black/15 to-transparent pt-3 sm:pt-4 pb-8">
        <div className="relative w-full px-4 sm:px-8 lg:px-12 xl:px-14 flex items-center justify-between">
          
          {/* Logo on Far Left Corner */}
          <a href="#" className="flex items-center group focus:outline-none shrink-0 z-20">
            <img 
              src="/Airports Authority of India Logo.png" 
              alt="Airports Authority of India Logo" 
              className="h-11 sm:h-12 md:h-14 lg:h-16 xl:h-[72px] max-h-11 sm:max-h-12 md:max-h-14 lg:max-h-16 xl:max-h-[72px] w-auto max-w-[160px] sm:max-w-[220px] md:max-w-none object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
            />
          </a>

          {/* Centered Navigation Menus on Desktop (Refined Sizing, White, Bold) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 -translate-x-1/2 z-20">
            {NAV_MENUS.map((menu) => (
              <button
                key={menu.id}
                type="button"
                onClick={() => handleMenuClick(menu)}
                className="text-white hover:text-[#F3D7B7] text-[11px] sm:text-xs lg:text-[13px] font-bold uppercase tracking-[0.16em] transition-colors duration-200 cursor-pointer select-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] group relative py-1 whitespace-nowrap"
              >
                <span>{menu.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#A2552B] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right Spacer & Mobile Menu Hamburger Toggle Button */}
          <div className="flex items-center z-20">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden w-11 h-11 rounded-full border border-white/30 bg-black/30 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/50 transition-colors shadow-sm cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden flex justify-end bg-black/60 backdrop-blur-xs animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="w-full max-w-sm bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-stone-200">
                <img 
                  src="/Airports Authority of India Logo.png" 
                  alt="Airports Authority of India" 
                  className="h-10 sm:h-12 max-h-12 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-stone-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Menu List (Uppercase & Bold) */}
              <div className="py-6 space-y-2">
                {NAV_MENUS.map((menu) => (
                  <button
                    key={menu.id}
                    type="button"
                    onClick={() => handleMenuClick(menu)}
                    className="w-full flex items-center justify-between py-3 px-3 rounded-xl text-stone-900 font-bold uppercase tracking-wider text-sm hover:bg-[#FAF7F2] hover:text-[#A2552B] transition-colors"
                  >
                    <span>{menu.label}</span>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 text-center text-xs text-stone-400">
              Calicut International Airport (CCJ)
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MAIN HERO CONTENT (Left Aligned, Full-Height Centered)  */}
      {/* ======================================================== */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pt-28 sm:pt-32 lg:pt-36 pb-12 sm:py-20 flex flex-col justify-center">
        
        {/* Eyebrow Accent Bar & Tag (Terracotta Editorial Styling) */}
        <div className="flex items-center gap-3 mb-4 sm:mb-5">
          <span className="w-8 h-[2px] bg-[#E8A57A] rounded-full inline-block shrink-0" />
          <span className="text-xs sm:text-[13px] font-semibold tracking-[0.25em] text-[#E8C59A] uppercase select-none drop-shadow-sm">
            GATEWAY TO GOD'S OWN COUNTRY
          </span>
        </div>

        {/* Dynamic Hero Title & Subtitle based on active carousel slide */}
        <div key={currentSlide} className="transition-all duration-700 ease-out min-h-[190px] sm:min-h-[240px] flex flex-col justify-end">
          {/* Editorial Serif Hero Headline in White */}
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-[76px] font-normal text-white tracking-tight leading-[1.03] mb-3 sm:mb-4 select-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
            {currentSlideData.headline}
          </h1>

          {/* Editorial Serif Subtitle in White */}
          <p className="text-white/90 font-serif text-base sm:text-lg lg:text-[19px] leading-[1.75] font-normal max-w-xl mb-7 sm:mb-8 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
            {currentSlideData.description}
          </p>
        </div>

        {/* ======================================================== */}
        {/* Floating Flight Search Widget Card (Terracotta Accents)   */}
        {/* ======================================================== */}
        <div 
          ref={searchContainerRef}
          className="w-full max-w-[500px] sm:max-w-[540px] bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-2xl shadow-slate-900/20 border border-white/90 relative"
        >
          {/* Top Tab Row: Arrivals, Departures, Today */}
          <div className="flex items-center justify-between sm:justify-start gap-1 sm:gap-2 mb-2.5">
            
            {/* Arrivals Tab */}
            <button
              type="button"
              onClick={() => {
                setActiveTab('arrival');
                setShowSuggestions(false);
              }}
              className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'arrival'
                  ? 'bg-[#A2552B] text-white shadow-md shadow-[#A2552B]/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-[#FAF7F2] font-medium'
              }`}
            >
              <PlaneLanding className="w-4 h-4 shrink-0" />
              <span>Arrivals</span>
            </button>

            {/* Departures Tab */}
            <button
              type="button"
              onClick={() => {
                setActiveTab('departure');
                setShowSuggestions(false);
              }}
              className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'departure'
                  ? 'bg-[#A2552B] text-white shadow-md shadow-[#A2552B]/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-[#FAF7F2] font-medium'
              }`}
            >
              <PlaneTakeoff className="w-4 h-4 shrink-0" />
              <span>Departures</span>
            </button>

            {/* Date Selector / "Today" Tab */}
            <div className="relative ml-auto" ref={datePickerRef}>
              <button
                type="button"
                onClick={() => setShowDatePicker(!showDatePicker)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-[#FAF7F2] transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{selectedDate}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* Date Dropdown Popover */}
              {showDatePicker && (
                <div className="absolute right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl py-1.5 w-36 z-50 text-xs">
                  {(['Today', 'Tomorrow', 'Yesterday'] as const).map((dateOpt) => (
                    <button
                      key={dateOpt}
                      type="button"
                      onClick={() => {
                        setSelectedDate(dateOpt);
                        setShowDatePicker(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 hover:bg-[#FAF7F2] transition-colors cursor-pointer ${
                        selectedDate === dateOpt ? 'font-bold text-[#A2552B]' : 'text-slate-700'
                      }`}
                    >
                      {dateOpt}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Search Input Bar with Submit Button */}
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <div className="absolute left-3.5 text-slate-400 pointer-events-none">
              <Search className="w-4 h-4" />
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => {
                setIsFocused(true);
                setShowSuggestions(true);
              }}
              onBlur={() => setIsFocused(false)}
              placeholder="Search flight number, airline, or city..."
              className="w-full pl-10 pr-24 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#A2552B]/30 focus:border-[#A2552B] transition-all"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-20 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              type="submit"
              className="absolute right-1.5 px-3.5 py-1.5 sm:py-2 bg-[#A2552B] hover:bg-[#8B4420] text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-150 flex items-center gap-1 shadow-sm cursor-pointer"
            >
              <span>Search</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Quick Auto-complete Suggestions Dropdown */}
          {showSuggestions && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-fade-in">
              <div className="px-3.5 py-2 bg-[#FAF7F2] border-b border-slate-200/60 text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex justify-between items-center">
                <span>Suggested {activeTab === 'arrival' ? 'Arrivals' : 'Departures'}</span>
                <span className="text-[10px] text-slate-400">Press enter to view all</span>
              </div>

              {suggestions.length > 0 ? (
                <div className="divide-y divide-slate-100">
                  {suggestions.map((flight) => (
                    <div
                      key={flight.id}
                      onClick={() => handleSelectSuggestion(flight)}
                      className="px-3.5 py-2.5 hover:bg-[#FAF7F2] cursor-pointer flex items-center justify-between transition-colors text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-slate-900 w-16">{flight.flightNumber}</span>
                        <span className="text-slate-600 truncate max-w-[140px] sm:max-w-[180px]">{flight.airline}</span>
                      </div>
                      <div className="flex items-center gap-4 text-right">
                        <span className="text-slate-500 text-[11px] hidden sm:inline">
                          {activeTab === 'arrival' ? flight.origin : flight.destination}
                        </span>
                        <span className="font-semibold text-[#A2552B] w-12">{flight.scheduledTime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-xs text-slate-500">
                  No matching flights found for "{searchQuery}".
                </div>
              )}
            </div>
          )}

        </div>

      </div>

      {/* ======================================================== */}
      {/* CONTACT & HELPDESK MODAL DIALOG                          */}
      {/* ======================================================== */}
      {isContactModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsContactModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <div className="flex items-center gap-3">
                <img 
                  src="/Airports Authority of India Logo.png" 
                  alt="Airports Authority of India Logo" 
                  className="h-9 sm:h-10 max-h-10 w-auto object-contain"
                />
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">Airport Contact</h3>
                  <span className="text-xs text-stone-500">Calicut International Airport (CCJ)</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsContactModalOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-stone-200 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="py-6 space-y-4 text-xs sm:text-sm text-stone-700">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF7F2] border border-stone-200/60">
                <Phone className="w-5 h-5 text-[#A2552B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900">24x7 Airport Control Room / Enquiry</div>
                  <div className="text-stone-600 mt-0.5">+91 483 271 2630 / +91 483 271 9494</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF7F2] border border-stone-200/60">
                <Mail className="w-5 h-5 text-[#A2552B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900">Airport Director Office</div>
                  <div className="text-stone-600 mt-0.5">apd_calicut@aai.aero</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF7F2] border border-stone-200/60">
                <Building className="w-5 h-5 text-[#A2552B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900">Postal Address</div>
                  <div className="text-stone-600 mt-0.5">
                    Airports Authority of India, Calicut International Airport, Karipur, Malappuram Dist., Kerala - 673647
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setIsContactModalOpen(false)}
                className="px-6 py-2 rounded-full bg-[#A2552B] text-white font-medium text-xs sm:text-sm hover:bg-[#8B4420] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

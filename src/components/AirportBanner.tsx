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
  Building,
  ClipboardCheck,
  Navigation,
  Map
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
        <span className="text-[#E8A57A] font-semibold">International</span> Airport
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
        <span className="text-[#E8A57A] font-semibold">With a</span> Flight
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
        <span className="text-[#E8A57A] font-semibold">Shores of</span> Calicut
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
        <span className="text-[#E8A57A] font-semibold">Rich</span> Traditions
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
  { id: 'flights', label: 'FLIGHTS' },
  { id: 'before-you-fly', label: 'BEFORE YOU FLY' },
  { id: 'passengers', label: 'PASSENGERS', target: '#essentials-section' },
  { id: 'corporate', label: 'CORPORATE', target: '#news-section' },
  { id: 'business', label: 'BUSINESS', target: '#essentials-section' },
  { id: 'contact', label: 'CONTACT' }
];

export interface AirportBannerProps {
  onSearchFlights?: (query: string, type: 'arrival' | 'departure', date: string) => void;
  onNavigateToProcedures?: () => void;
  onNavigateToHowToReach?: () => void;
  onNavigateToAirportMap?: (tab?: 'overview' | 'T1' | 'T2' | 'parking') => void;
  onNavigateToFlights?: (tab?: 'arrival' | 'departure' | 'schedules' | 'upcoming') => void;
  onOpenAirlineDetails?: () => void;
  slides?: CarouselSlide[];
  autoPlayInterval?: number;
}

export const AirportBanner: React.FC<AirportBannerProps> = ({
  onSearchFlights,
  onNavigateToProcedures,
  onNavigateToHowToReach,
  onNavigateToAirportMap,
  onNavigateToFlights,
  onOpenAirlineDetails,
  slides = DEFAULT_SLIDES,
  autoPlayInterval = 5500,
}) => {
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Navigation Bar State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  // Flights Dropdown States
  const [isFlightsOpen, setIsFlightsOpen] = useState<boolean>(false);
  const [isMobileFlightsOpen, setIsMobileFlightsOpen] = useState<boolean>(false);
  const flightsRef = useRef<HTMLDivElement>(null);

  // Before You Fly Dropdown States
  const [isBeforeYouFlyOpen, setIsBeforeYouFlyOpen] = useState<boolean>(false);
  const [isMobileBeforeYouFlyOpen, setIsMobileBeforeYouFlyOpen] = useState<boolean>(false);
  const [openSubmenu, setOpenSubmenu] = useState<'procedures' | 'how-to-reach' | 'airport-map' | null>(null);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState<'procedures' | 'how-to-reach' | 'airport-map' | null>(null);

  // Airport Map Modal State
  const [isMapModalOpen, setIsMapModalOpen] = useState<boolean>(false);
  const [selectedMapTab, setSelectedMapTab] = useState<'overview' | 'T1' | 'T2' | 'parking'>('overview');

  const beforeYouFlyRef = useRef<HTMLDivElement>(null);

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
      if (beforeYouFlyRef.current && !beforeYouFlyRef.current.contains(event.target as Node)) {
        setIsBeforeYouFlyOpen(false);
      }
      if (flightsRef.current && !flightsRef.current.contains(event.target as Node)) {
        setIsFlightsOpen(false);
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

  const handleOpenProcedures = () => {
    setIsBeforeYouFlyOpen(false);
    setIsMobileMenuOpen(false);
    if (onNavigateToProcedures) {
      onNavigateToProcedures();
    } else {
      window.location.hash = '#procedures';
    }
  };

  const handleOpenHowToReach = () => {
    setIsBeforeYouFlyOpen(false);
    setIsMobileMenuOpen(false);
    if (onNavigateToHowToReach) {
      onNavigateToHowToReach();
    } else {
      window.location.hash = '#how-to-reach';
    }
  };

  const handleOpenAirportMap = (tab: 'overview' | 'T1' | 'T2' | 'parking' = 'overview') => {
    setIsBeforeYouFlyOpen(false);
    setIsMobileMenuOpen(false);
    if (onNavigateToAirportMap) {
      onNavigateToAirportMap(tab);
    } else {
      window.location.hash = '#airport-map';
    }
  };

  const handleFlightsItemClick = (item: 'arrival' | 'departure' | 'schedules' | 'upcoming' | 'airline-details') => {
    setIsFlightsOpen(false);
    setIsMobileMenuOpen(false);
    if (item === 'arrival' || item === 'departure' || item === 'schedules' || item === 'upcoming') {
      if (onNavigateToFlights) {
        onNavigateToFlights(item);
      } else {
        window.location.hash = `#flights-${item}`;
      }
    } else if (item === 'airline-details') {
      if (onOpenAirlineDetails) onOpenAirlineDetails();
    }
  };

  const handleMenuClick = (menu: NavMenu) => {
    setIsMobileMenuOpen(false);
    if (menu.id === 'contact') {
      setIsContactModalOpen(true);
      return;
    }
    if (menu.id === 'flights') {
      setIsFlightsOpen((prev) => !prev);
      return;
    }
    if (menu.id === 'before-you-fly') {
      setIsBeforeYouFlyOpen((prev) => !prev);
      return;
    }
    if (menu.target) {
      const el = document.querySelector(menu.target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
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
            {NAV_MENUS.map((menu) => {
              if (menu.id === 'flights') {
                return (
                  <div
                    key={menu.id}
                    ref={flightsRef}
                    className="relative group py-2"
                    onMouseEnter={() => setIsFlightsOpen(true)}
                    onMouseLeave={() => setIsFlightsOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setIsFlightsOpen((prev) => !prev)}
                      className="text-white hover:text-[#F3D7B7] text-[11px] sm:text-xs lg:text-[13px] font-bold uppercase tracking-[0.16em] transition-colors duration-200 cursor-pointer select-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] flex items-center gap-1.5 py-1 whitespace-nowrap"
                      aria-expanded={isFlightsOpen}
                      aria-haspopup="true"
                    >
                      <span>{menu.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isFlightsOpen ? 'rotate-180 text-[#E8A57A]' : 'text-white/70 group-hover:text-white'
                        }`}
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#A2552B] transition-all duration-300 group-hover:w-full" />
                    </button>

                    {/* FLIGHTS: 2-Column Dropdown Panel matching user mockup */}
                    {isFlightsOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[280px] sm:w-[320px] z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="bg-white/95 backdrop-blur-xl border border-stone-200/90 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-4 sm:p-5 text-left">
                          <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
                            {/* Column 1 */}
                            <div className="space-y-3">
                              <button
                                type="button"
                                onClick={() => handleFlightsItemClick('arrival')}
                                className="text-xs sm:text-[13px] font-semibold text-stone-700 hover:text-[#A2552B] transition-colors block text-left cursor-pointer"
                              >
                                Arrival
                              </button>
                              <button
                                type="button"
                                onClick={() => handleFlightsItemClick('schedules')}
                                className="text-xs sm:text-[13px] font-semibold text-stone-700 hover:text-[#A2552B] transition-colors block text-left cursor-pointer"
                              >
                                Schedules
                              </button>
                              <button
                                type="button"
                                onClick={() => handleFlightsItemClick('airline-details')}
                                className="text-xs sm:text-[13px] font-bold text-[#A2552B] hover:text-[#8B4420] transition-colors block text-left cursor-pointer"
                              >
                                Airline Details
                              </button>
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-3">
                              <button
                                type="button"
                                onClick={() => handleFlightsItemClick('departure')}
                                className="text-xs sm:text-[13px] font-semibold text-stone-700 hover:text-[#A2552B] transition-colors block text-left cursor-pointer"
                              >
                                Departure
                              </button>
                              <button
                                type="button"
                                onClick={() => handleFlightsItemClick('upcoming')}
                                className="text-xs sm:text-[13px] font-semibold text-stone-700 hover:text-[#A2552B] transition-colors block text-left cursor-pointer"
                              >
                                Upcoming
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (menu.id === 'before-you-fly') {
                return (
                  <div
                    key={menu.id}
                    ref={beforeYouFlyRef}
                    className="relative group py-2"
                    onMouseEnter={() => setIsBeforeYouFlyOpen(true)}
                    onMouseLeave={() => {
                      setIsBeforeYouFlyOpen(false);
                      setOpenSubmenu(null);
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setIsBeforeYouFlyOpen((prev) => !prev)}
                      className="text-white hover:text-[#F3D7B7] text-[11px] sm:text-xs lg:text-[13px] font-bold uppercase tracking-[0.16em] transition-colors duration-200 cursor-pointer select-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] flex items-center gap-1.5 py-1 whitespace-nowrap"
                      aria-expanded={isBeforeYouFlyOpen}
                      aria-haspopup="true"
                    >
                      <span>{menu.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isBeforeYouFlyOpen ? 'rotate-180 text-[#E8A57A]' : 'text-white/70 group-hover:text-white'
                        }`}
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#A2552B] transition-all duration-300 group-hover:w-full" />
                    </button>

                    {/* BEFORE YOU FLY: 3 Dropdown Menus Panel */}
                    {isBeforeYouFlyOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[360px] sm:w-[400px] z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="bg-[#0B121B]/95 backdrop-blur-xl border border-white/15 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-2.5 overflow-hidden text-left divide-y divide-white/10">
                          
                          {/* 1. PROCEDURES DROPDOWN MENU */}
                          <div className="p-2">
                            <div className="flex items-center justify-between">
                              <button
                                type="button"
                                onClick={handleOpenProcedures}
                                className="flex items-start gap-3 flex-1 text-left group/item rounded-xl p-1.5 hover:bg-white/5 transition-colors cursor-pointer"
                              >
                                <div className="w-8 h-8 rounded-lg bg-[#A2552B]/20 border border-[#A2552B]/40 flex items-center justify-center text-[#E8A57A] shrink-0 mt-0.5 group-hover/item:bg-[#A2552B] group-hover/item:text-white transition-colors">
                                  <ClipboardCheck className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-[13px] font-bold text-white tracking-wide group-hover/item:text-[#E8A57A] transition-colors flex items-center gap-1.5">
                                    <span>Procedures</span>
                                    <span className="text-[10px] uppercase font-semibold px-1.5 py-0.2 bg-white/10 text-[#E8A57A] rounded">Guide</span>
                                  </div>
                                  <div className="text-[11px] text-white/60 font-normal leading-snug mt-0.5">
                                    Check-in, baggage, customs & security rules
                                  </div>
                                </div>
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setOpenSubmenu(openSubmenu === 'procedures' ? null : 'procedures');
                                }}
                                className="p-2 text-white/50 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                                title="Toggle Procedures Submenu"
                              >
                                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openSubmenu === 'procedures' ? 'rotate-180 text-[#E8A57A]' : ''}`} />
                              </button>
                            </div>

                            {/* Submenu Items for Procedures */}
                            {openSubmenu === 'procedures' && (
                              <div className="mt-2 ml-11 pl-2.5 border-l border-white/15 space-y-1.5 py-1">
                                <button
                                  type="button"
                                  onClick={handleOpenProcedures}
                                  className="w-full text-left text-[11px] text-white/80 hover:text-[#E8A57A] hover:translate-x-1 transition-all py-0.5 flex items-center gap-1.5 cursor-pointer"
                                >
                                  <ChevronRight className="w-3 h-3 text-[#A2552B]" />
                                  <span>Check-in & Security Screen</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={handleOpenProcedures}
                                  className="w-full text-left text-[11px] text-white/80 hover:text-[#E8A57A] hover:translate-x-1 transition-all py-0.5 flex items-center gap-1.5 cursor-pointer"
                                >
                                  <ChevronRight className="w-3 h-3 text-[#A2552B]" />
                                  <span>Baggage Rules & Allowances</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={handleOpenProcedures}
                                  className="w-full text-left text-[11px] text-white/80 hover:text-[#E8A57A] hover:translate-x-1 transition-all py-0.5 flex items-center gap-1.5 cursor-pointer"
                                >
                                  <ChevronRight className="w-3 h-3 text-[#A2552B]" />
                                  <span>Customs & Special Assistance</span>
                                </button>
                              </div>
                            )}
                          </div>

                          {/* 2. HOW TO REACH DROPDOWN MENU */}
                          <div className="p-2">
                            <div className="flex items-center justify-between">
                              <button
                                type="button"
                                onClick={handleOpenHowToReach}
                                className="flex items-start gap-3 flex-1 text-left group/item rounded-xl p-1.5 hover:bg-white/5 transition-colors cursor-pointer"
                              >
                                <div className="w-8 h-8 rounded-lg bg-[#A2552B]/20 border border-[#A2552B]/40 flex items-center justify-center text-[#E8A57A] shrink-0 mt-0.5 group-hover/item:bg-[#A2552B] group-hover/item:text-white transition-colors">
                                  <Navigation className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-[13px] font-bold text-white tracking-wide group-hover/item:text-[#E8A57A] transition-colors flex items-center gap-1.5">
                                    <span>How to Reach</span>
                                    <span className="text-[10px] uppercase font-semibold px-1.5 py-0.2 bg-white/10 text-[#E8A57A] rounded">Transit</span>
                                  </div>
                                  <div className="text-[11px] text-white/60 font-normal leading-snug mt-0.5">
                                    Driving routes, prepaid taxis, buses & parking
                                  </div>
                                </div>
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setOpenSubmenu(openSubmenu === 'how-to-reach' ? null : 'how-to-reach');
                                }}
                                className="p-2 text-white/50 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                                title="Toggle How to Reach Submenu"
                              >
                                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openSubmenu === 'how-to-reach' ? 'rotate-180 text-[#E8A57A]' : ''}`} />
                              </button>
                            </div>

                            {/* Submenu Items for How to Reach */}
                            {openSubmenu === 'how-to-reach' && (
                              <div className="mt-2 ml-11 pl-2.5 border-l border-white/15 space-y-1.5 py-1">
                                <button
                                  type="button"
                                  onClick={handleOpenHowToReach}
                                  className="w-full text-left text-[11px] text-white/80 hover:text-[#E8A57A] hover:translate-x-1 transition-all py-0.5 flex items-center gap-1.5 cursor-pointer"
                                >
                                  <ChevronRight className="w-3 h-3 text-[#A2552B]" />
                                  <span>Prepaid Taxi & Cab Services</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={handleOpenHowToReach}
                                  className="w-full text-left text-[11px] text-white/80 hover:text-[#E8A57A] hover:translate-x-1 transition-all py-0.5 flex items-center gap-1.5 cursor-pointer"
                                >
                                  <ChevronRight className="w-3 h-3 text-[#A2552B]" />
                                  <span>KSRTC Public Bus Transit</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={handleOpenHowToReach}
                                  className="w-full text-left text-[11px] text-white/80 hover:text-[#E8A57A] hover:translate-x-1 transition-all py-0.5 flex items-center gap-1.5 cursor-pointer"
                                >
                                  <ChevronRight className="w-3 h-3 text-[#A2552B]" />
                                  <span>Airport Parking & FASTag Lanes</span>
                                </button>
                              </div>
                            )}
                          </div>

                          {/* 3. AIRPORT MAP DROPDOWN MENU */}
                          <div className="p-2">
                            <div className="flex items-center justify-between">
                              <button
                                type="button"
                                onClick={() => handleOpenAirportMap('overview')}
                                className="flex items-start gap-3 flex-1 text-left group/item rounded-xl p-1.5 hover:bg-white/5 transition-colors cursor-pointer"
                              >
                                <div className="w-8 h-8 rounded-lg bg-[#A2552B]/20 border border-[#A2552B]/40 flex items-center justify-center text-[#E8A57A] shrink-0 mt-0.5 group-hover/item:bg-[#A2552B] group-hover/item:text-white transition-colors">
                                  <Map className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-[13px] font-bold text-white tracking-wide group-hover/item:text-[#E8A57A] transition-colors flex items-center gap-1.5">
                                    <span>Airport Map</span>
                                    <span className="text-[10px] uppercase font-semibold px-1.5 py-0.2 bg-white/10 text-[#E8A57A] rounded">Terminals</span>
                                  </div>
                                  <div className="text-[11px] text-white/60 font-normal leading-snug mt-0.5">
                                    Terminal 1 & 2 floor plans, gates & amenities
                                  </div>
                                </div>
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setOpenSubmenu(openSubmenu === 'airport-map' ? null : 'airport-map');
                                }}
                                className="p-2 text-white/50 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                                title="Toggle Airport Map Submenu"
                              >
                                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openSubmenu === 'airport-map' ? 'rotate-180 text-[#E8A57A]' : ''}`} />
                              </button>
                            </div>

                            {/* Submenu Items for Airport Map */}
                            {openSubmenu === 'airport-map' && (
                              <div className="mt-2 ml-11 pl-2.5 border-l border-white/15 space-y-1.5 py-1">
                                <button
                                  type="button"
                                  onClick={() => handleOpenAirportMap('T1')}
                                  className="w-full text-left text-[11px] text-white/80 hover:text-[#E8A57A] hover:translate-x-1 transition-all py-0.5 flex items-center gap-1.5 cursor-pointer"
                                >
                                  <ChevronRight className="w-3 h-3 text-[#A2552B]" />
                                  <span>Terminal 1 (Domestic) Map</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleOpenAirportMap('T2')}
                                  className="w-full text-left text-[11px] text-white/80 hover:text-[#E8A57A] hover:translate-x-1 transition-all py-0.5 flex items-center gap-1.5 cursor-pointer"
                                >
                                  <ChevronRight className="w-3 h-3 text-[#A2552B]" />
                                  <span>Terminal 2 (International) Map</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleOpenAirportMap('parking')}
                                  className="w-full text-left text-[11px] text-white/80 hover:text-[#E8A57A] hover:translate-x-1 transition-all py-0.5 flex items-center gap-1.5 cursor-pointer"
                                >
                                  <ChevronRight className="w-3 h-3 text-[#A2552B]" />
                                  <span>Parking & Concourse Layout</span>
                                </button>
                              </div>
                            )}
                          </div>

                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={menu.id}
                  type="button"
                  onClick={() => handleMenuClick(menu)}
                  className="text-white hover:text-[#F3D7B7] text-[11px] sm:text-xs lg:text-[13px] font-bold uppercase tracking-[0.16em] transition-colors duration-200 cursor-pointer select-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] group relative py-1 whitespace-nowrap"
                >
                  <span>{menu.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#A2552B] transition-all duration-300 group-hover:w-full" />
                </button>
              );
            })}
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
                {NAV_MENUS.map((menu) => {
                  if (menu.id === 'flights') {
                    return (
                      <div key={menu.id} className="rounded-xl overflow-hidden border border-stone-200/80 bg-stone-50/60">
                        <button
                          type="button"
                          onClick={() => setIsMobileFlightsOpen((prev) => !prev)}
                          className="w-full flex items-center justify-between py-3 px-3 text-stone-900 font-bold uppercase tracking-wider text-sm hover:bg-[#FAF7F2] hover:text-[#A2552B] transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <span>{menu.label}</span>
                            <span className="text-[10px] font-semibold text-[#A2552B] bg-[#A2552B]/10 px-2 py-0.5 rounded-full">
                              Schedules & Info
                            </span>
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${
                              isMobileFlightsOpen ? 'rotate-180 text-[#A2552B]' : ''
                            }`}
                          />
                        </button>

                        {isMobileFlightsOpen && (
                          <div className="p-3 bg-white border-t border-stone-200/60 grid grid-cols-2 gap-3 text-xs">
                            <div className="space-y-2.5">
                              <button
                                type="button"
                                onClick={() => handleFlightsItemClick('arrival')}
                                className="block text-left text-stone-700 hover:text-[#A2552B] font-semibold cursor-pointer"
                              >
                                Arrival
                              </button>
                              <button
                                type="button"
                                onClick={() => handleFlightsItemClick('schedules')}
                                className="block text-left text-stone-700 hover:text-[#A2552B] font-semibold cursor-pointer"
                              >
                                Schedules
                              </button>
                              <button
                                type="button"
                                onClick={() => handleFlightsItemClick('airline-details')}
                                className="block text-left text-[#A2552B] hover:text-[#8B4420] font-bold cursor-pointer"
                              >
                                Airline Details
                              </button>
                            </div>
                            <div className="space-y-2.5">
                              <button
                                type="button"
                                onClick={() => handleFlightsItemClick('departure')}
                                className="block text-left text-stone-700 hover:text-[#A2552B] font-semibold cursor-pointer"
                              >
                                Departure
                              </button>
                              <button
                                type="button"
                                onClick={() => handleFlightsItemClick('upcoming')}
                                className="block text-left text-stone-700 hover:text-[#A2552B] font-semibold cursor-pointer"
                              >
                                Upcoming
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }

                  if (menu.id === 'before-you-fly') {
                    return (
                      <div key={menu.id} className="rounded-xl overflow-hidden border border-stone-200/80 bg-stone-50/60">
                        <button
                          type="button"
                          onClick={() => setIsMobileBeforeYouFlyOpen((prev) => !prev)}
                          className="w-full flex items-center justify-between py-3 px-3 text-stone-900 font-bold uppercase tracking-wider text-sm hover:bg-[#FAF7F2] hover:text-[#A2552B] transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <span>{menu.label}</span>
                            <span className="text-[10px] font-semibold text-[#A2552B] bg-[#A2552B]/10 px-2 py-0.5 rounded-full">
                              3 Menus
                            </span>
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${
                              isMobileBeforeYouFlyOpen ? 'rotate-180 text-[#A2552B]' : ''
                            }`}
                          />
                        </button>

                        {/* Mobile 3 Dropdown Menus */}
                        {isMobileBeforeYouFlyOpen && (
                          <div className="p-2 space-y-2 bg-white border-t border-stone-200/60">
                            {/* 1. Procedures */}
                            <div className="rounded-lg p-2.5 bg-[#FAF7F2] border border-stone-200/50">
                              <div className="flex items-center justify-between">
                                <button
                                  type="button"
                                  onClick={handleOpenProcedures}
                                  className="flex items-center gap-2.5 text-left flex-1 cursor-pointer"
                                >
                                  <div className="w-7 h-7 rounded-md bg-[#A2552B]/10 flex items-center justify-center text-[#A2552B] shrink-0">
                                    <ClipboardCheck className="w-3.5 h-3.5" />
                                  </div>
                                  <div>
                                    <span className="text-xs font-bold text-stone-900 block">Procedures</span>
                                    <span className="text-[10px] text-stone-500">Security, baggage & check-in</span>
                                  </div>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setMobileOpenSubmenu(mobileOpenSubmenu === 'procedures' ? null : 'procedures')}
                                  className="p-1.5 text-stone-400 hover:text-stone-700 cursor-pointer"
                                  title="Toggle Procedures details"
                                >
                                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileOpenSubmenu === 'procedures' ? 'rotate-180' : ''}`} />
                                </button>
                              </div>
                              {mobileOpenSubmenu === 'procedures' && (
                                <div className="mt-2.5 pl-3 border-l-2 border-[#A2552B]/40 space-y-1.5 pt-1">
                                  <button onClick={handleOpenProcedures} className="block text-left text-[11px] text-stone-700 hover:text-[#A2552B] cursor-pointer">Check-in & Security Screen</button>
                                  <button onClick={handleOpenProcedures} className="block text-left text-[11px] text-stone-700 hover:text-[#A2552B] cursor-pointer">Baggage Rules & Allowances</button>
                                  <button onClick={handleOpenProcedures} className="block text-left text-[11px] text-stone-700 hover:text-[#A2552B] cursor-pointer">Customs & Special Assistance</button>
                                </div>
                              )}
                            </div>

                            {/* 2. How to Reach */}
                            <div className="rounded-lg p-2.5 bg-[#FAF7F2] border border-stone-200/50">
                              <div className="flex items-center justify-between">
                                <button
                                  type="button"
                                  onClick={handleOpenHowToReach}
                                  className="flex items-center gap-2.5 text-left flex-1 cursor-pointer"
                                >
                                  <div className="w-7 h-7 rounded-md bg-[#A2552B]/10 flex items-center justify-center text-[#A2552B] shrink-0">
                                    <Navigation className="w-3.5 h-3.5" />
                                  </div>
                                  <div>
                                    <span className="text-xs font-bold text-stone-900 block">How to Reach</span>
                                    <span className="text-[10px] text-stone-500">Routes, taxis & bus transit</span>
                                  </div>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setMobileOpenSubmenu(mobileOpenSubmenu === 'how-to-reach' ? null : 'how-to-reach')}
                                  className="p-1.5 text-stone-400 hover:text-stone-700 cursor-pointer"
                                  title="Toggle How to Reach details"
                                >
                                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileOpenSubmenu === 'how-to-reach' ? 'rotate-180' : ''}`} />
                                </button>
                              </div>
                              {mobileOpenSubmenu === 'how-to-reach' && (
                                <div className="mt-2.5 pl-3 border-l-2 border-[#A2552B]/40 space-y-1.5 pt-1">
                                  <button onClick={handleOpenHowToReach} className="block text-left text-[11px] text-stone-700 hover:text-[#A2552B] cursor-pointer">Prepaid Taxi & Cab Services</button>
                                  <button onClick={handleOpenHowToReach} className="block text-left text-[11px] text-stone-700 hover:text-[#A2552B] cursor-pointer">KSRTC Public Bus Transit</button>
                                  <button onClick={handleOpenHowToReach} className="block text-left text-[11px] text-stone-700 hover:text-[#A2552B] cursor-pointer">Airport Parking & FASTag</button>
                                </div>
                              )}
                            </div>

                            {/* 3. Airport Map */}
                            <div className="rounded-lg p-2.5 bg-[#FAF7F2] border border-stone-200/50">
                              <div className="flex items-center justify-between">
                                <button
                                  type="button"
                                  onClick={() => handleOpenAirportMap('overview')}
                                  className="flex items-center gap-2.5 text-left flex-1 cursor-pointer"
                                >
                                  <div className="w-7 h-7 rounded-md bg-[#A2552B]/10 flex items-center justify-center text-[#A2552B] shrink-0">
                                    <Map className="w-3.5 h-3.5" />
                                  </div>
                                  <div>
                                    <span className="text-xs font-bold text-stone-900 block">Airport Map</span>
                                    <span className="text-[10px] text-stone-500">Terminal 1 & 2 floor plans</span>
                                  </div>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setMobileOpenSubmenu(mobileOpenSubmenu === 'airport-map' ? null : 'airport-map')}
                                  className="p-1.5 text-stone-400 hover:text-stone-700 cursor-pointer"
                                  title="Toggle Airport Map details"
                                >
                                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileOpenSubmenu === 'airport-map' ? 'rotate-180' : ''}`} />
                                </button>
                              </div>
                              {mobileOpenSubmenu === 'airport-map' && (
                                <div className="mt-2.5 pl-3 border-l-2 border-[#A2552B]/40 space-y-1.5 pt-1">
                                  <button onClick={() => handleOpenAirportMap('T1')} className="block text-left text-[11px] text-stone-700 hover:text-[#A2552B] cursor-pointer">Terminal 1 (Domestic) Map</button>
                                  <button onClick={() => handleOpenAirportMap('T2')} className="block text-left text-[11px] text-stone-700 hover:text-[#A2552B] cursor-pointer">Terminal 2 (International) Map</button>
                                  <button onClick={() => handleOpenAirportMap('parking')} className="block text-left text-[11px] text-stone-700 hover:text-[#A2552B] cursor-pointer">Parking & Concourse Layout</button>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <button
                      key={menu.id}
                      type="button"
                      onClick={() => handleMenuClick(menu)}
                      className="w-full flex items-center justify-between py-3 px-3 rounded-xl text-stone-900 font-bold uppercase tracking-wider text-sm hover:bg-[#FAF7F2] hover:text-[#A2552B] transition-colors"
                    >
                      <span>{menu.label}</span>
                      <ChevronRight className="w-4 h-4 text-stone-400" />
                    </button>
                  );
                })}
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
          {/* Professional Modern Hero Headline in White */}
          <h1 className="font-sans text-5xl sm:text-7xl lg:text-[76px] font-bold text-white tracking-tight leading-[1.05] mb-3 sm:mb-4 select-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
            {currentSlideData.headline}
          </h1>

          {/* Professional Modern Subtitle in White */}
          <p className="text-white/90 font-sans text-base sm:text-lg lg:text-[18px] leading-[1.65] font-normal max-w-xl mb-7 sm:mb-8 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
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
                  <h3 className="font-sans text-xl font-bold text-stone-900">Airport Contact</h3>
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

      {/* ======================================================== */}
      {/* AIRPORT MAP MODAL DIALOG                                 */}
      {/* ======================================================== */}
      {isMapModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in"
          onClick={() => setIsMapModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#FAF7F2]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#A2552B]/10 flex items-center justify-center text-[#A2552B]">
                  <Map className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-stone-900 leading-tight">
                    Calicut International Airport Map
                  </h3>
                  <p className="text-xs text-stone-500">
                    Terminal Layout & Passenger Guide · CCJ / VOCL
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMapModalOpen(false)}
                className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors cursor-pointer"
                aria-label="Close Airport Map"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Terminal Switcher Tabs */}
            <div className="px-6 py-3 border-b border-stone-200/80 bg-white flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedMapTab('overview')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  selectedMapTab === 'overview'
                    ? 'bg-[#A2552B] text-white shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                All Terminals Overview
              </button>
              <button
                type="button"
                onClick={() => setSelectedMapTab('T1')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  selectedMapTab === 'T1'
                    ? 'bg-[#A2552B] text-white shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                Terminal 1 (Domestic)
              </button>
              <button
                type="button"
                onClick={() => setSelectedMapTab('T2')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  selectedMapTab === 'T2'
                    ? 'bg-[#A2552B] text-white shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                Terminal 2 (International)
              </button>
              <button
                type="button"
                onClick={() => setSelectedMapTab('parking')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  selectedMapTab === 'parking'
                    ? 'bg-[#A2552B] text-white shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                Parking & Ground Transport
              </button>
            </div>

            {/* Modal Body / Map Views */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Terminal Graphic Card */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-900 h-48 sm:h-60">
                <img
                  src="/Calicut International Airport Terminal.png"
                  alt="Calicut International Airport Terminal Aerial"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#E8A57A]">
                    {selectedMapTab === 'overview' && 'Airside & Landside Overview'}
                    {selectedMapTab === 'T1' && 'Terminal 1 · Domestic Wing'}
                    {selectedMapTab === 'T2' && 'Terminal 2 · International Wing'}
                    {selectedMapTab === 'parking' && 'Multi-Level Car Park & Transit Ramps'}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold">
                    {selectedMapTab === 'overview' && 'Calicut International Airport Campus'}
                    {selectedMapTab === 'T1' && 'Terminal 1: Domestic Departures & Arrivals'}
                    {selectedMapTab === 'T2' && 'Terminal 2: International Departures & Arrivals'}
                    {selectedMapTab === 'parking' && 'Ground Transportation, Cabs & FASTag Parking'}
                  </h4>
                </div>
              </div>

              {/* Dynamic Content by Tab */}
              {selectedMapTab === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200/80">
                    <div className="flex items-center gap-2 mb-2 font-bold text-stone-900 text-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                      <span>Terminal 1 (Domestic)</span>
                    </div>
                    <ul className="text-xs text-stone-600 space-y-1.5 pl-4 list-disc">
                      <li>Check-in Counters: Desks 1 to 18 (IndiGo, Air India)</li>
                      <li>Security Check & Frisking Booths on Level 1</li>
                      <li>Boarding Gates 1, 2, 3 (Domestic Departures)</li>
                      <li>Baggage Reclaim Belts 1 & 2 on Ground Level</li>
                      <li>Domestic CIP Lounge & Coffee Kiosks</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200/80">
                    <div className="flex items-center gap-2 mb-2 font-bold text-stone-900 text-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#A2552B]" />
                      <span>Terminal 2 (International)</span>
                    </div>
                    <ul className="text-xs text-stone-600 space-y-1.5 pl-4 list-disc">
                      <li>Check-in Counters: Desks 19 to 48 (Gulf & International Carriers)</li>
                      <li>Bureau of Immigration & Emigration Clearance (Level 1)</li>
                      <li>Boarding Gates 4 to 8 with Aerobridges</li>
                      <li>Baggage Reclaim Belts 3 & 4 with Customs Green/Red Channels</li>
                      <li>International Duty Free & Premium Executive Lounge</li>
                    </ul>
                  </div>
                </div>
              )}

              {selectedMapTab === 'T1' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200/80">
                    <h5 className="font-bold text-stone-900 text-sm mb-3">Terminal 1 Floor Directory</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="bg-white p-3 rounded-xl border border-stone-200/70">
                        <span className="font-semibold text-[#A2552B] block mb-1">Level 1 (Departures)</span>
                        <p className="text-stone-600">Ticketing kiosks, Security Screening, Boarding Gates 1-3, Domestic Executive Lounge, Snack Bars & Bookshops.</p>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-stone-200/70">
                        <span className="font-semibold text-[#A2552B] block mb-1">Ground Floor (Arrivals)</span>
                        <p className="text-stone-600">Baggage Claim Belts 1 & 2, Passenger Meet & Greet concourse, Prepaid Taxi counter, ATM & Restrooms.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedMapTab === 'T2' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200/80">
                    <h5 className="font-bold text-stone-900 text-sm mb-3">Terminal 2 Floor Directory</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="bg-white p-3 rounded-xl border border-stone-200/70">
                        <span className="font-semibold text-[#A2552B] block mb-1">Level 1 (Departures)</span>
                        <p className="text-stone-600">Airline Check-in Desks 19-48, Emigration Desks, Central Security Frisking, Duty Free, Boarding Gates 4-8, Prayer Rooms.</p>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-stone-200/70">
                        <span className="font-semibold text-[#A2552B] block mb-1">Ground Floor (Arrivals)</span>
                        <p className="text-stone-600">Immigration Clearance (16 counters), Baggage Belts 3 & 4, Customs Inspection, Currency Exchange, Lost & Found.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedMapTab === 'parking' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200/80">
                    <h5 className="font-bold text-stone-900 text-sm mb-3">Ground Transportation & Parking Zones</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="bg-white p-3 rounded-xl border border-stone-200/70">
                        <span className="font-semibold text-[#A2552B] block mb-1">FASTag Parking (1,200+ Slots)</span>
                        <p className="text-stone-600">Opposite T1 and T2 entrances. Automated boom barriers with FASTag contactless payment.</p>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-stone-200/70">
                        <span className="font-semibold text-[#A2552B] block mb-1">Prepaid Taxi & Cabs</span>
                        <p className="text-stone-600">24/7 Police-approved prepaid taxi booth located right outside Arrival Gates.</p>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-stone-200/70">
                        <span className="font-semibold text-[#A2552B] block mb-1">KSRTC Bus Bay & EV Charging</span>
                        <p className="text-stone-600">Direct low-floor AC buses to Kozhikode, Malappuram & Manjeri, plus DC Fast EV charging stations.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Facility Badges */}
              <div className="pt-2 border-t border-stone-200">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-2">Key Facilities on Map:</span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 bg-stone-100 rounded-full text-stone-700 font-medium">Free Wi-Fi Zones</span>
                  <span className="px-3 py-1 bg-stone-100 rounded-full text-stone-700 font-medium">Medical Room (24x7)</span>
                  <span className="px-3 py-1 bg-stone-100 rounded-full text-stone-700 font-medium">Currency Exchange (Forex)</span>
                  <span className="px-3 py-1 bg-stone-100 rounded-full text-stone-700 font-medium">Wheelchair & Special Assistance</span>
                  <span className="px-3 py-1 bg-stone-100 rounded-full text-stone-700 font-medium">Lost & Found Office</span>
                  <span className="px-3 py-1 bg-stone-100 rounded-full text-stone-700 font-medium">Child Care & Nursing Room</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
              <span className="text-xs text-stone-500">
                Need on-ground help? Duty Officer: <a href="tel:+914832719491" className="text-[#A2552B] font-semibold hover:underline">+91 483 2719491</a>
              </span>
              <button
                type="button"
                onClick={() => setIsMapModalOpen(false)}
                className="px-5 py-2 rounded-full bg-[#A2552B] hover:bg-[#8B4420] text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Close Map
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

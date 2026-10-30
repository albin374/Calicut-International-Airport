import React, { useState, useMemo } from 'react';
import {
  Search,
  RotateCcw,
  Wifi,
  HeartPulse,
  Landmark,
  Luggage,
  Sparkles,
  Phone,
  Clock,
  MapPin,
  Baby,
  Accessibility,
  Compass,
  Droplets,
  Building2,
  CheckCircle2,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { FooterSection } from '../components/FooterSection';
import { FACILITIES_DATABASE, FacilityItem } from './facilitiesData';

interface FacilitiesServicesPageProps {
  onNavigateHome: () => void;
  onNavigateToProcedures?: () => void;
  onNavigateToHowToReach?: () => void;
  onNavigateToAirportMap?: (tab?: 'overview' | 'T1' | 'T2' | 'parking') => void;
  onNavigateToFlights?: (tab?: 'arrival' | 'departure' | 'schedules' | 'upcoming') => void;
  onOpenAirlineDetails?: () => void;
  onNavigateToFacilities?: () => void;
  onNavigateToShopDine?: () => void;
  onNavigateToTouristAttractions?: () => void;
  onNavigateToCorporate?: () => void;
  onNavigateToContact?: () => void;
}

export const FacilitiesServicesPage: React.FC<FacilitiesServicesPageProps> = ({
  onNavigateHome,
  onNavigateToProcedures,
  onNavigateToHowToReach,
  onNavigateToAirportMap,
  onNavigateToFlights,
  onOpenAirlineDetails,
  onNavigateToFacilities,
  onNavigateToShopDine,
  onNavigateToTouristAttractions,
  onNavigateToCorporate,
  onNavigateToContact,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Connectivity' | 'Banking' | 'Health' | 'Luggage' | 'Comfort'>('All');
  const [selectedTerminal, setSelectedTerminal] = useState<'All' | 'Terminal 1' | 'Terminal 2'>('All');

  const filteredFacilities = useMemo(() => {
    return FACILITIES_DATABASE.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }

      // Terminal filter
      if (selectedTerminal !== 'All') {
        if (item.terminal !== 'Both Terminals' && item.terminal !== selectedTerminal) {
          return false;
        }
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesLoc = item.location.toLowerCase().includes(q);
        const matchesHigh = item.highlights.some((h) => h.toLowerCase().includes(q));

        if (!matchesName && !matchesDesc && !matchesLoc && !matchesHigh) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedTerminal, searchQuery]);

  const counts = useMemo(() => {
    return {
      all: FACILITIES_DATABASE.length,
      connectivity: FACILITIES_DATABASE.filter((f) => f.category === 'Connectivity').length,
      banking: FACILITIES_DATABASE.filter((f) => f.category === 'Banking').length,
      health: FACILITIES_DATABASE.filter((f) => f.category === 'Health').length,
      luggage: FACILITIES_DATABASE.filter((f) => f.category === 'Luggage').length,
      comfort: FACILITIES_DATABASE.filter((f) => f.category === 'Comfort').length,
    };
  }, []);

  const renderIcon = (type: FacilityItem['iconType']) => {
    switch (type) {
      case 'wifi':
        return <Wifi className="w-5 h-5 text-[#A2552B]" />;
      case 'medical':
        return <HeartPulse className="w-5 h-5 text-rose-600" />;
      case 'bank':
      case 'atm':
        return <Landmark className="w-5 h-5 text-emerald-600" />;
      case 'luggage':
        return <Luggage className="w-5 h-5 text-[#A2552B]" />;
      case 'baby':
        return <Baby className="w-5 h-5 text-amber-600" />;
      case 'wheelchair':
        return <Accessibility className="w-5 h-5 text-blue-600" />;
      case 'prayer':
        return <Compass className="w-5 h-5 text-teal-600" />;
      case 'water':
        return <Droplets className="w-5 h-5 text-sky-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#A2552B]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 font-sans selection:bg-[#A2552B] selection:text-white">
      {/* ======================================================== */}
      {/* 1. HERO BANNER (SINGLE-LINE TITLE & COMPACT HEIGHT)       */}
      {/* ======================================================== */}
      <section className="relative z-40 w-full h-[250px] sm:h-[280px] md:h-[300px] bg-stone-900">
        {/* Background Banner Image */}
        <div className="absolute inset-0 overflow-hidden transition-all duration-700">
          <img
            src="/Bright Airport Entry D1 Terminal.png"
            alt="Facilities & Services at Calicut International Airport"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        {/* Global Transparent Navbar at top */}
        <Navbar
          onNavigateHome={onNavigateHome}
          onNavigateToProcedures={onNavigateToProcedures}
          onNavigateToHowToReach={onNavigateToHowToReach}
          onNavigateToAirportMap={onNavigateToAirportMap}
          onNavigateToFlights={onNavigateToFlights}
          onOpenAirlineDetails={onOpenAirlineDetails}
          onNavigateToFacilities={onNavigateToFacilities}
          onNavigateToShopDine={onNavigateToShopDine}
          onNavigateToTouristAttractions={onNavigateToTouristAttractions}
          onNavigateToCorporate={onNavigateToCorporate}
          onNavigateToContact={onNavigateToContact}
          isFacilitiesPage={true}
        />

        {/* Banner Headline Content (Single Line) */}
        <div className="absolute inset-x-0 bottom-6 sm:bottom-8 z-10 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl pointer-events-auto">
              <h1 className="text-3xl sm:text-4xl md:text-[42px] font-black tracking-tight leading-tight text-white drop-shadow-sm">
                <span className="font-bold text-white">Facilities &</span>{' '}
                <span className="text-[#E07A5F] font-black">Passenger Services</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-[15px] text-white/90 font-normal mt-1.5 sm:mt-2 max-w-xl">
                Comprehensive guide to passenger amenities, medical aid, banking, and comfort at Calicut International Airport
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. MAIN DIRECTORY SECTION                                */}
      {/* ======================================================== */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-20">
        
        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200/90 p-4 sm:p-5 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services (Wi-Fi, medical, ATMs, luggage)..."
                className="w-full pl-10 pr-4 py-2.5 bg-stone-50/70 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-800 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#A2552B]/20 focus:border-[#A2552B] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {(
                [
                  { id: 'All', label: `All (${counts.all})` },
                  { id: 'Connectivity', label: `Tech & Wi-Fi (${counts.connectivity})` },
                  { id: 'Banking', label: `Forex & ATMs (${counts.banking})` },
                  { id: 'Health', label: `Medical & Care (${counts.health})` },
                  { id: 'Luggage', label: `Luggage (${counts.luggage})` },
                  { id: 'Comfort', label: `Comfort (${counts.comfort})` },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === tab.id
                      ? 'bg-[#A2552B] text-white shadow-xs'
                      : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Sub-filter */}
          <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between gap-3 text-xs">
            <span className="text-stone-500 font-medium">Filter by Concourse:</span>
            <div className="flex items-center gap-2">
              {(['All', 'Terminal 1', 'Terminal 2'] as const).map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setSelectedTerminal(term)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    selectedTerminal === term
                      ? 'bg-stone-800 text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {term === 'All' ? 'All Terminals' : term}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Counter Header */}
        <div className="flex items-center justify-between mb-6 px-1">
          <div className="text-xs sm:text-sm text-stone-600 font-medium">
            Showing <span className="font-bold text-stone-900">{filteredFacilities.length}</span> passenger facilities & services at Calicut Airport
          </div>
          <div className="text-xs text-stone-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>24/7 Operations</span>
          </div>
        </div>

        {/* Facilities Grid */}
        {filteredFacilities.length === 0 ? (
          <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center max-w-md mx-auto space-y-3">
            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-stone-900 text-base">No matching facilities found</h3>
            <p className="text-xs text-stone-500">
              Try adjusting your search query or selecting "All".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedTerminal('All');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#A2552B] text-white text-xs font-bold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFacilities.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-stone-200/90 hover:border-[#A2552B]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-xs"
              >
                {/* Card Top */}
                <div className="p-5 sm:p-6 pb-4">
                  
                  {/* Top Row: Icon + Terminal Badge */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-stone-200 flex items-center justify-center shrink-0">
                      {renderIcon(item.iconType)}
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0F243E] text-white font-medium text-xs">
                      <Building2 className="w-3 h-3 text-stone-300" />
                      <span>{item.terminal}</span>
                    </span>
                  </div>

                  {/* Title & Category */}
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg tracking-tight mb-1">
                    {item.name}
                  </h3>
                  
                  <div className="text-xs font-medium text-[#A2552B] mb-3">
                    {item.category} Service
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-1.5 pt-3 border-t border-stone-100">
                    {item.highlights.map((high, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A2552B] shrink-0" />
                        <span>{high}</span>
                      </div>
                    ))}
                  </div>

                  {/* Location Info */}
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-start gap-1.5 text-xs text-stone-500">
                    <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                    <span className="font-medium text-stone-700">{item.location}</span>
                  </div>
                </div>

                {/* Card Bottom Bar */}
                <div className="p-4 sm:p-5 pt-3 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-stone-600 font-medium">
                    <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span>{item.timings}</span>
                  </div>

                  {item.phone && (
                    <a
                      href={`tel:${item.phone.replace(/[^0-9+]/g, '')}`}
                      className="inline-flex items-center gap-1 font-bold text-[#A2552B] hover:underline"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Airport Assistance Banner at Bottom */}
        <div className="mt-12 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#A2552B] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#A2552B]" />
              <span>24/7 Information & Passenger Assistance</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-stone-900">
              Airport Terminal Duty Managers & Passenger Service Counters
            </h4>
            <p className="text-xs sm:text-sm text-stone-600">
              Need assistance finding a specific facility, wheelchair aid, or lost baggage? Visit the "May I Help You" help desks located at T1 & T2 concourses.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:04832719491"
              className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#A2552B]" />
              <span>Help Desk: 0483-2719491</span>
            </a>

            {onNavigateToAirportMap && (
              <button
                type="button"
                onClick={() => onNavigateToAirportMap('overview')}
                className="px-4 py-2.5 rounded-xl bg-[#A2552B] hover:bg-[#8B4420] text-white text-xs font-bold transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>View Terminal Maps</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

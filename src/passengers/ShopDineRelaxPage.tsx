import React, { useState, useMemo } from 'react';
import {
  Search,
  RotateCcw,
  UtensilsCrossed,
  ShoppingBag,
  Sparkles,
  Clock,
  MapPin,
  Building2,
  CheckCircle2,
  Coffee,
  Gem,
  ArrowRight
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { FooterSection } from '../components/FooterSection';
import { SHOP_DINE_DATABASE, ShopDineItem } from './shopDineData';

interface ShopDineRelaxPageProps {
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

export const ShopDineRelaxPage: React.FC<ShopDineRelaxPageProps> = ({
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
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Dining' | 'Shopping' | 'Specialty' | 'Lounge'>('All');
  const [selectedTerminal, setSelectedTerminal] = useState<'All' | 'Terminal 1' | 'Terminal 2'>('All');

  const filteredItems = useMemo(() => {
    return SHOP_DINE_DATABASE.filter((item) => {
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
        const matchesTag = item.tag.toLowerCase().includes(q);
        const matchesSpec = item.specialtyItems.some((s) => s.toLowerCase().includes(q));

        if (!matchesName && !matchesDesc && !matchesLoc && !matchesTag && !matchesSpec) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedTerminal, searchQuery]);

  const counts = useMemo(() => {
    return {
      all: SHOP_DINE_DATABASE.length,
      dining: SHOP_DINE_DATABASE.filter((i) => i.category === 'Dining').length,
      shopping: SHOP_DINE_DATABASE.filter((i) => i.category === 'Shopping').length,
      specialty: SHOP_DINE_DATABASE.filter((i) => i.category === 'Specialty').length,
      lounge: SHOP_DINE_DATABASE.filter((i) => i.category === 'Lounge').length,
    };
  }, []);

  const renderCategoryIcon = (category: ShopDineItem['category']) => {
    switch (category) {
      case 'Dining':
        return <UtensilsCrossed className="w-5 h-5 text-amber-600" />;
      case 'Shopping':
        return <ShoppingBag className="w-5 h-5 text-emerald-600" />;
      case 'Specialty':
        return <Sparkles className="w-5 h-5 text-[#A2552B]" />;
      case 'Lounge':
        return <Gem className="w-5 h-5 text-indigo-600" />;
      default:
        return <Coffee className="w-5 h-5 text-[#A2552B]" />;
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
            src="/Cinematic Spiced Rice Feast.png"
            alt="Shop Dine Relax at Calicut International Airport"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
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
          isShopDinePage={true}
        />

        {/* Banner Headline Content (Single Line) */}
        <div className="absolute inset-x-0 bottom-6 sm:bottom-8 z-10 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl pointer-events-auto">
              <h1 className="text-3xl sm:text-4xl md:text-[42px] font-black tracking-tight leading-tight text-white drop-shadow-sm">
                <span className="font-bold text-white">Shop, Dine &</span>{' '}
                <span className="text-[#E07A5F] font-black">Relax</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-[15px] text-white/90 font-normal mt-1.5 sm:mt-2 max-w-xl">
                Explore duty-free retail, authentic Malabar confectionery, multi-cuisine dining, and airport executive lounges
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
                placeholder="Search food, halwa, duty free, cafes, lounges..."
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
                  { id: 'All', label: `All Outlets (${counts.all})` },
                  { id: 'Dining', label: `Dining & Cafes (${counts.dining})` },
                  { id: 'Specialty', label: `Malabar Halwa & Spices (${counts.specialty})` },
                  { id: 'Shopping', label: `Duty Free & Retail (${counts.shopping})` },
                  { id: 'Lounge', label: `Lounges & Spa (${counts.lounge})` },
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

          {/* Terminal Concourse Sub-filter */}
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
            Showing <span className="font-bold text-stone-900">{filteredItems.length}</span> retail, dining & lounge venues
          </div>
          <div className="text-xs text-stone-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Card, UPI & Cash Accepted</span>
          </div>
        </div>

        {/* Outlets Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center max-w-md mx-auto space-y-3">
            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-stone-900 text-base">No matching outlets found</h3>
            <p className="text-xs text-stone-500">
              Try adjusting your search query or selecting "All Outlets".
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
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-stone-200/90 hover:border-[#A2552B]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-xs"
              >
                {/* Card Top */}
                <div className="p-5 sm:p-6 pb-4">
                  
                  {/* Top Row: Icon + Badge + Price Range */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-stone-200 flex items-center justify-center shrink-0">
                      {renderCategoryIcon(item.category)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                        {item.priceRange}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0F243E] text-white font-medium text-xs">
                        <Building2 className="w-3 h-3 text-stone-300" />
                        <span>{item.terminal}</span>
                      </span>
                    </div>
                  </div>

                  {/* Title & Tag */}
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg tracking-tight mb-1">
                    {item.name}
                  </h3>
                  
                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-amber-50 border border-amber-200/70 text-xs font-semibold text-[#A2552B] mb-3">
                    {item.tag}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Specialty / Menu Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-stone-100">
                    <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-1">
                      Featured Offerings
                    </div>
                    {item.specialtyItems.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A2552B] shrink-0" />
                        <span>{spec}</span>
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

                  <span className="font-semibold text-stone-500 bg-white px-2 py-1 rounded border border-stone-200">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Airport Duty Free & Halwa Highlight Box */}
        <div className="mt-12 bg-gradient-to-r from-[#FAF2EC] via-white to-[#FAF2EC] rounded-2xl border border-[#A2552B]/30 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#A2552B] uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#A2552B]" />
              <span>Taste of Malabar & International Duty Free</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-stone-900">
              Don’t leave Kozhikode without authentic Ghee Halwa & Spices!
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Airports Authority of India has partnered with verified Malabar confectionery and artisan spice houses to bring sealed, travel-safe packets ready for cabin and international baggage check-in.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {onNavigateToFlights && (
              <button
                type="button"
                onClick={() => onNavigateToFlights('departure')}
                className="px-5 py-2.5 rounded-xl bg-[#A2552B] hover:bg-[#8B4420] text-white text-xs font-bold transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Check Outbound Departures</span>
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

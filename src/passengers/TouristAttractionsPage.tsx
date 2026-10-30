import React, { useState, useMemo } from 'react';
import {
  Search,
  RotateCcw,
  Clock,
  Compass,
  Sparkles,
  Palmtree,
  Car,
  SunMedium,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { FooterSection } from '../components/FooterSection';
import { TOURIST_ATTRACTIONS_DATABASE } from './touristAttractionsData';

interface TouristAttractionsPageProps {
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

export const TouristAttractionsPage: React.FC<TouristAttractionsPageProps> = ({
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
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Beach & Coastal' | 'Heritage & Culture' | 'Nature & Wildlife' | 'Hill Station'>('All');

  const filteredAttractions = useMemo(() => {
    return TOURIST_ATTRACTIONS_DATABASE.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesTag = item.tagline.toLowerCase().includes(q);
        const matchesHigh = item.highlights.some((h) => h.toLowerCase().includes(q));

        if (!matchesName && !matchesDesc && !matchesTag && !matchesHigh) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  const counts = useMemo(() => {
    return {
      all: TOURIST_ATTRACTIONS_DATABASE.length,
      beaches: TOURIST_ATTRACTIONS_DATABASE.filter((a) => a.category === 'Beach & Coastal').length,
      heritage: TOURIST_ATTRACTIONS_DATABASE.filter((a) => a.category === 'Heritage & Culture').length,
      nature: TOURIST_ATTRACTIONS_DATABASE.filter((a) => a.category === 'Nature & Wildlife').length,
      hill: TOURIST_ATTRACTIONS_DATABASE.filter((a) => a.category === 'Hill Station').length,
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 font-sans selection:bg-[#A2552B] selection:text-white">
      {/* ======================================================== */}
      {/* 1. HERO BANNER (SINGLE-LINE TITLE & COMPACT HEIGHT)       */}
      {/* ======================================================== */}
      <section className="relative z-40 w-full h-[250px] sm:h-[280px] md:h-[300px] bg-stone-900">
        {/* Background Banner Image */}
        <div className="absolute inset-0 overflow-hidden transition-all duration-700">
          <img
            src="/Kozhikode Coastal Culture Panorama.png"
            alt="Tourist Attractions in Kozhikode & Malabar"
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
          isTouristAttractionsPage={true}
        />

        {/* Banner Headline Content (Single Line) */}
        <div className="absolute inset-x-0 bottom-6 sm:bottom-8 z-10 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl pointer-events-auto">
              <h1 className="text-3xl sm:text-4xl md:text-[42px] font-black tracking-tight leading-tight text-white drop-shadow-sm">
                <span className="font-bold text-white">Tourist Attractions &</span>{' '}
                <span className="text-[#E07A5F] font-black">Malabar Heritage</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-[15px] text-white/90 font-normal mt-1.5 sm:mt-2 max-w-xl">
                Discover the historic piers, sweet meat streets, dhow shipyards, waterfalls, and backwaters of Kozhikode
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
                placeholder="Search spots (Kozhikode Beach, SM Street, Beypore, Wayanad)..."
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
                  { id: 'All', label: `All Destinations (${counts.all})` },
                  { id: 'Beach & Coastal', label: `Beaches & Pier (${counts.beaches})` },
                  { id: 'Heritage & Culture', label: `Heritage & SM Street (${counts.heritage})` },
                  { id: 'Nature & Wildlife', label: `Nature & Waterfalls (${counts.nature})` },
                  { id: 'Hill Station', label: `Wayanad Hills (${counts.hill})` },
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
        </div>

        {/* Counter Header */}
        <div className="flex items-center justify-between mb-6 px-1">
          <div className="text-xs sm:text-sm text-stone-600 font-medium">
            Showing <span className="font-bold text-stone-900">{filteredAttractions.length}</span> destinations near Calicut Airport (CCJ)
          </div>
          <div className="text-xs text-stone-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Prepaid Taxis Available 24/7 at Airport</span>
          </div>
        </div>

        {/* Attractions Grid */}
        {filteredAttractions.length === 0 ? (
          <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center max-w-md mx-auto space-y-3">
            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
              <Palmtree className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-stone-900 text-base">No matching tourist spots found</h3>
            <p className="text-xs text-stone-500">
              Try adjusting your search query or selecting "All Destinations".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#A2552B] text-white text-xs font-bold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAttractions.map((spot) => (
              <div
                key={spot.id}
                className="bg-white rounded-2xl border border-stone-200/90 hover:border-[#A2552B]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs group"
              >
                <div>
                  {/* Spot Image Header with Distance Badge */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-900">
                    <img
                      src={spot.image}
                      alt={spot.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Distance Badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold flex items-center gap-1">
                      <Car className="w-3 h-3 text-[#E8A57A]" />
                      <span>{spot.distanceFromAirport}</span>
                    </div>

                    {/* Category Pill */}
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-[#A2552B] text-white text-[11px] font-bold uppercase tracking-wider">
                      {spot.category}
                    </div>
                  </div>

                  {/* Spot Content */}
                  <div className="p-5 sm:p-6 pb-4">
                    <h3 className="font-bold text-stone-900 text-lg tracking-tight mb-1.5 group-hover:text-[#A2552B] transition-colors">
                      {spot.name}
                    </h3>

                    <div className="text-xs font-semibold text-stone-600 mb-3 leading-snug">
                      {spot.tagline}
                    </div>

                    <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed mb-4">
                      {spot.description}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-1.5 pt-3 border-t border-stone-100">
                      <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#A2552B]" />
                        <span>Highlights</span>
                      </div>
                      {spot.highlights.map((high, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#A2552B] shrink-0" />
                          <span>{high}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom Meta Bar */}
                <div className="p-4 sm:p-5 pt-3 bg-stone-50/80 border-t border-stone-100 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-stone-600">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span>{spot.travelTime}</span>
                    </div>
                    <div className="flex items-center gap-1 text-stone-500">
                      <SunMedium className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="truncate max-w-[150px]">{spot.bestTimeToVisit}</span>
                    </div>
                  </div>

                  {onNavigateToHowToReach && (
                    <button
                      type="button"
                      onClick={onNavigateToHowToReach}
                      className="w-full mt-1 py-1.5 px-3 rounded-lg bg-white border border-stone-200 text-stone-800 hover:text-[#A2552B] hover:border-[#A2552B]/40 font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-xs"
                    >
                      <Compass className="w-3.5 h-3.5 text-[#A2552B]" />
                      <span>Airport Transit & Taxi Options</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Explore Malabar Banner at Bottom */}
        <div className="mt-12 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#A2552B] uppercase tracking-wider">
              <Compass className="w-4 h-4 text-[#A2552B]" />
              <span>Planning Your Calicut & Malabar Itinerary?</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-stone-900">
              Prepaid Airport Taxis to Any Destination in Kerala
            </h4>
            <p className="text-xs sm:text-sm text-stone-600">
              Government-regulated prepaid taxis operate 24/7 directly outside the arrivals concourse with fixed tariffs for city tours, beach trips, and Wayanad hill station transfers.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {onNavigateToHowToReach && (
              <button
                type="button"
                onClick={onNavigateToHowToReach}
                className="px-5 py-2.5 rounded-xl bg-[#A2552B] hover:bg-[#8B4420] text-white text-xs font-bold transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>View Transit & Taxi Guide</span>
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

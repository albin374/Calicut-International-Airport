import React, { useState, useMemo } from 'react';
import { 
  Search, 
  RotateCcw, 
  Phone, 
  ExternalLink, 
  Building2, 
  Plane, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Luggage,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { FooterSection } from '../components/FooterSection';
import { AirlineLogo } from '../flights/AirlineLogo';
import { AIRLINE_DETAILS_DATABASE } from './airlineDetailsData';

interface AirlineDetailsPageProps {
  onNavigateHome: () => void;
  onNavigateToProcedures?: () => void;
  onNavigateToHowToReach?: () => void;
  onNavigateToAirportMap?: (tab?: 'overview' | 'T1' | 'T2' | 'parking') => void;
  onNavigateToFlights?: (tab?: 'arrival' | 'departure' | 'schedules' | 'upcoming') => void;
}

export const AirlineDetailsPage: React.FC<AirlineDetailsPageProps> = ({
  onNavigateHome,
  onNavigateToProcedures,
  onNavigateToHowToReach,
  onNavigateToAirportMap,
  onNavigateToFlights,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Domestic' | 'International' | 'Terminal 1' | 'Terminal 2'>('All');
  const [expandedAirlines, setExpandedAirlines] = useState<Record<string, boolean>>({});

  const toggleExpandDestinations = (id: string) => {
    setExpandedAirlines((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredAirlines = useMemo(() => {
    return AIRLINE_DETAILS_DATABASE.filter((airline) => {
      // Filter tab
      if (activeFilter === 'Domestic') {
        if (airline.type !== 'Domestic' && airline.type !== 'Both') return false;
      } else if (activeFilter === 'International') {
        if (airline.type !== 'International' && airline.type !== 'Both') return false;
      } else if (activeFilter === 'Terminal 1') {
        if (airline.terminal !== 'Terminal 1' && airline.terminal !== 'Both Terminals') return false;
      } else if (activeFilter === 'Terminal 2') {
        if (airline.terminal !== 'Terminal 2' && airline.terminal !== 'Both Terminals') return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = airline.name.toLowerCase().includes(q);
        const matchesCode = airline.code.toLowerCase().includes(q);
        const matchesTag = airline.tagline.toLowerCase().includes(q);
        const matchesDest = airline.destinations.some((d) => d.toLowerCase().includes(q));
        const matchesFleet = airline.aircraftFleet.some((f) => f.toLowerCase().includes(q));

        if (!matchesName && !matchesCode && !matchesTag && !matchesDest && !matchesFleet) {
          return false;
        }
      }

      return true;
    });
  }, [activeFilter, searchQuery]);

  const counts = useMemo(() => {
    return {
      all: AIRLINE_DETAILS_DATABASE.length,
      domestic: AIRLINE_DETAILS_DATABASE.filter((a) => a.type === 'Domestic' || a.type === 'Both').length,
      international: AIRLINE_DETAILS_DATABASE.filter((a) => a.type === 'International' || a.type === 'Both').length,
      t1: AIRLINE_DETAILS_DATABASE.filter((a) => a.terminal === 'Terminal 1' || a.terminal === 'Both Terminals').length,
      t2: AIRLINE_DETAILS_DATABASE.filter((a) => a.terminal === 'Terminal 2' || a.terminal === 'Both Terminals').length,
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 font-sans selection:bg-[#A2552B] selection:text-white">
      {/* ======================================================== */}
      {/* 1. HERO BANNER WITH USER SPECIFIED IMAGE & SINGLE-LINE TITLE */}
      {/* ======================================================== */}
      <section className="relative z-40 w-full h-[250px] sm:h-[280px] md:h-[300px] bg-stone-900">
        {/* Background Banner Image */}
        <div className="absolute inset-0 overflow-hidden transition-all duration-700">
          <img
            src="/Modern Airport Apron with Global Airliners.png"
            alt="Operating Airlines at Calicut International Airport"
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
        />

        {/* Banner Headline Content (Single Line) */}
        <div className="absolute inset-x-0 bottom-6 sm:bottom-8 z-10 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl pointer-events-auto">
              <h1 className="text-3xl sm:text-4xl md:text-[42px] font-black tracking-tight leading-tight text-white drop-shadow-sm">
                <span className="font-bold text-white">Airline</span>{' '}
                <span className="text-[#E07A5F] font-black">Details</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-[15px] text-white/90 font-normal mt-1.5 sm:mt-2 max-w-xl">
                Operating commercial carriers connecting Kozhikode (CCJ) to Indian metros and the Middle East
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
                placeholder="Search by airline, destination, or code..."
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

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => setActiveFilter('All')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'All'
                    ? 'bg-[#A2552B] text-white shadow-xs'
                    : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                All Airlines ({counts.all})
              </button>

              <button
                type="button"
                onClick={() => setActiveFilter('Domestic')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'Domestic'
                    ? 'bg-[#A2552B] text-white shadow-xs'
                    : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                Domestic ({counts.domestic})
              </button>

              <button
                type="button"
                onClick={() => setActiveFilter('International')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'International'
                    ? 'bg-[#A2552B] text-white shadow-xs'
                    : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                International ({counts.international})
              </button>

              <button
                type="button"
                onClick={() => setActiveFilter('Terminal 1')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'Terminal 1'
                    ? 'bg-[#A2552B] text-white shadow-xs'
                    : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                Terminal 1 ({counts.t1})
              </button>

              <button
                type="button"
                onClick={() => setActiveFilter('Terminal 2')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'Terminal 2'
                    ? 'bg-[#A2552B] text-white shadow-xs'
                    : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                Terminal 2 ({counts.t2})
              </button>
            </div>
          </div>
        </div>

        {/* Counter & Airport Context Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 px-1">
          <div className="text-xs sm:text-sm text-stone-600 font-medium">
            Showing <span className="font-bold text-stone-900">{filteredAirlines.length}</span> operating airline{filteredAirlines.length !== 1 ? 's' : ''} at Calicut International Airport (CCJ)
          </div>
          <div className="text-xs text-stone-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Official DGCA & AAI Schedule</span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* AIRLINES GRID                                            */}
        {/* ======================================================== */}
        {filteredAirlines.length === 0 ? (
          <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center max-w-md mx-auto space-y-3">
            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
              <Plane className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-stone-900 text-base">No matching airlines found</h3>
            <p className="text-xs text-stone-500">
              Try adjusting your search query or selecting "All Airlines".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('All');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#A2552B] text-white text-xs font-bold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAirlines.map((airline) => {
              const isExpanded = !!expandedAirlines[airline.id];
              const displayedDestinations = isExpanded 
                ? airline.destinations 
                : airline.destinations.slice(0, 5);
              const hasMoreDestinations = airline.destinations.length > 5;

              return (
                <div
                  key={airline.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md ${
                    airline.isTopCarrier 
                      ? 'border-[#A2552B]/40 ring-1 ring-[#A2552B]/20' 
                      : 'border-stone-200/90'
                  }`}
                >
                  {/* Card Header & Brand */}
                  <div className="p-5 sm:p-6 pb-4">
                    
                    {/* Top Row: Logo + IATA Code */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex-1 h-11 sm:h-12 flex items-center">
                        <AirlineLogo airline={airline.name} className="h-11 sm:h-12" />
                      </div>
                      <div className="inline-flex items-center px-2.5 py-1 rounded-lg bg-stone-100 border border-stone-200 text-stone-800 font-mono font-black text-xs tracking-wider shrink-0">
                        {airline.code}
                      </div>
                    </div>

                    {/* Tagline / Route Highlight */}
                    <div className="mb-4">
                      {airline.isTopCarrier ? (
                        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#A2552B]/10 text-[#A2552B] font-bold text-xs">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{airline.tagline}</span>
                        </div>
                      ) : (
                        <div className="text-xs font-semibold text-stone-600 bg-stone-50 border border-stone-200/70 px-2.5 py-1 rounded-md inline-block">
                          {airline.tagline}
                        </div>
                      )}
                    </div>

                    {/* Terminal & Type Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0F243E] text-white font-medium">
                        <Building2 className="w-3 h-3 text-stone-300" />
                        <span>{airline.terminal}</span>
                      </span>

                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 font-medium">
                        <Plane className="w-3 h-3 text-stone-500" />
                        <span>{airline.type}</span>
                      </span>

                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-100 text-stone-600 text-[11px] font-medium">
                        <span>{airline.counters}</span>
                      </span>
                    </div>

                    {/* Destinations List */}
                    <div className="space-y-1.5 pt-3 border-t border-stone-100">
                      <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#A2552B]" />
                        <span>Key Direct Destinations</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {displayedDestinations.map((dest, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-medium px-2 py-0.5 rounded-md bg-amber-50/70 border border-amber-200/60 text-stone-800"
                          >
                            {dest}
                          </span>
                        ))}

                        {hasMoreDestinations && (
                          <button
                            type="button"
                            onClick={() => toggleExpandDestinations(airline.id)}
                            className="text-xs font-bold text-[#A2552B] hover:underline px-1.5 py-0.5 cursor-pointer"
                          >
                            {isExpanded ? 'Show less' : `+${airline.destinations.length - 5} more`}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Aircraft Fleet Information */}
                    <div className="mt-3.5 pt-3 border-t border-stone-100 text-xs">
                      <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-1">
                        Fleet Operated at CCJ
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {airline.aircraftFleet.map((ac, idx) => (
                          <span
                            key={idx}
                            className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700"
                          >
                            {ac}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Baggage Policy Snippet */}
                    <div className="mt-3 text-[11px] text-stone-500 flex items-start gap-1.5">
                      <Luggage className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                      <span>{airline.baggagePolicy}</span>
                    </div>
                  </div>

                  {/* Card Bottom: Phone & Action Buttons */}
                  <div className="p-4 sm:p-5 pt-3 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between gap-2">
                    <a
                      href={`tel:${airline.phone.replace(/[^0-9+]/g, '')}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 hover:text-[#A2552B] transition-colors"
                      title="Call Airline Desk"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#A2552B]" />
                      <span className="truncate max-w-[140px] sm:max-w-none">{airline.phone}</span>
                    </a>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={airline.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-[#A2552B] hover:border-[#A2552B]/40 shadow-2xs transition-colors"
                        title="Open Official Website"
                      >
                        <span>Website</span>
                        <ExternalLink className="w-3 h-3 text-stone-400" />
                      </a>

                      {onNavigateToFlights && (
                        <button
                          type="button"
                          onClick={() => onNavigateToFlights('departure')}
                          className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded-lg bg-[#A2552B] hover:bg-[#8B4420] text-white shadow-2xs transition-colors cursor-pointer"
                          title="View Live Flights"
                        >
                          <span>Flights</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Airport Assistance Banner at Bottom */}
        <div className="mt-12 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#A2552B] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#A2552B]" />
              <span>Need Direct Airport Support?</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-stone-900">
              Airport Terminal Duty Managers & Airline Representatives
            </h4>
            <p className="text-xs sm:text-sm text-stone-600">
              Information desks, May I Help You counters, and Duty Managers are available round-the-clock across Terminal 1 and Terminal 2 concourses.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:04832719491"
              className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#A2552B]" />
              <span>Airport Duty: 0483-2719491</span>
            </a>

            {onNavigateToFlights && (
              <button
                type="button"
                onClick={() => onNavigateToFlights('schedules')}
                className="px-4 py-2.5 rounded-xl bg-[#A2552B] hover:bg-[#8B4420] text-white text-xs font-bold transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <Clock className="w-4 h-4" />
                <span>View Timetables</span>
              </button>
            )}
          </div>
        </div>
      </main>

      {/* ======================================================== */}
      {/* 3. FOOTER SECTION                                        */}
      {/* ======================================================== */}
      <FooterSection />
    </div>
  );
};

export default AirlineDetailsPage;

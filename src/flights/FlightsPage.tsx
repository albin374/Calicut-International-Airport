import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  RotateCcw, 
  Calendar, 
  Clock, 
  Plane, 
  PlaneLanding, 
  PlaneTakeoff, 
  MapPin, 
  ChevronRight, 
  ChevronDown, 
  AlertCircle, 
  CheckCircle2, 
  Info,
  Sparkles,
  Luggage,
  Building2,
  ExternalLink,
  List
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { FooterSection } from '../components/FooterSection';
import { AirlineLogo } from './AirlineLogo';
import { 
  FLIGHTS_DATABASE, 
  AIRLINE_OPTIONS, 
  DESTINATION_OPTIONS 
} from './flightsData';

export type FlightPageTab = 'arrival' | 'departure' | 'schedules' | 'upcoming';

interface FlightsPageProps {
  initialTab?: FlightPageTab;
  onNavigateHome: () => void;
  onNavigateToProcedures?: () => void;
  onNavigateToHowToReach?: () => void;
  onNavigateToAirportMap?: (tab?: 'overview' | 'T1' | 'T2' | 'parking') => void;
  onOpenAirlineDetails?: () => void;
  onNavigateToFacilities?: () => void;
  onNavigateToShopDine?: () => void;
  onNavigateToTouristAttractions?: () => void;
  onNavigateToCorporate?: () => void;
  onNavigateToContact?: () => void;
}

const DAYS_OF_WEEK = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'] as const;

export const FlightsPage: React.FC<FlightsPageProps> = ({
  initialTab = 'arrival',
  onNavigateHome,
  onNavigateToProcedures,
  onNavigateToHowToReach,
  onNavigateToAirportMap,
  onOpenAirlineDetails,
  onNavigateToFacilities,
  onNavigateToShopDine,
  onNavigateToTouristAttractions,
  onNavigateToCorporate,
  onNavigateToContact,
}) => {
  const [activeTab, setActiveTab] = useState<FlightPageTab>(initialTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAirline, setSelectedAirline] = useState('All Airlines');
  const [selectedDestination, setSelectedDestination] = useState('All Destinations');
  const [locationSearch, setLocationSearch] = useState('');
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [expandedFlightId, setExpandedFlightId] = useState<string | null>(null);

  // Sync tab with initialTab prop if it changes
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  // Handle switching tabs and update hash seamlessly
  const handleTabChange = (tab: FlightPageTab) => {
    setActiveTab(tab);
    setExpandedFlightId(null);
    window.location.hash = `#flights-${tab}`;
  };

  // Reset all filters
  const handleReset = () => {
    setSearchQuery('');
    setSelectedAirline('All Airlines');
    setSelectedDestination('All Destinations');
    setLocationSearch('');
    setSelectedDay(null);
  };

  // Banner details based on active tab
  const bannerConfig = useMemo(() => {
    switch (activeTab) {
      case 'arrival':
        return {
          image: '/IndiGo Jet Over Tropical Runway.png',
          titlePrefix: 'Flight',
          titleAccent: 'Arrivals',
          subtitle: 'Real-time information on arriving flights at Calicut International Airport',
        };
      case 'departure':
        return {
          image: '/SpiceJet Landing Over Hills.png',
          titlePrefix: 'Flight',
          titleAccent: 'Departures',
          subtitle: 'Real-time information on departing flights from Calicut International Airport',
        };
      case 'schedules':
        return {
          image: '/Jetliner Approaching the Runway.png',
          titlePrefix: 'Flight',
          titleAccent: 'Schedules',
          subtitle: 'Plan your journey with scheduled flight information',
        };
      case 'upcoming':
        return {
          image: '/Emirates Jet Touchdown on Runway.png',
          titlePrefix: 'Upcoming',
          titleAccent: 'Schedules',
          subtitle: 'Plan your upcoming journeys with seasonal timetable information',
        };
    }
  }, [activeTab]);

  // Filter flights based on active tab and search criteria
  const filteredFlights = useMemo(() => {
    return FLIGHTS_DATABASE.filter((flight) => {
      // 1. Tab match
      if (activeTab === 'arrival') {
        if (flight.type !== 'arrival' || flight.category === 'upcoming') return false;
      } else if (activeTab === 'departure') {
        if (flight.type !== 'departure' || flight.category === 'upcoming') return false;
      } else if (activeTab === 'schedules') {
        // Schedules shows all regular scheduled services
        if (flight.category === 'upcoming') return false;
      } else if (activeTab === 'upcoming') {
        if (flight.category !== 'upcoming') return false;
      }

      // 2. Airline filter
      if (selectedAirline !== 'All Airlines' && flight.airline !== selectedAirline) {
        return false;
      }

      // 3. Destination filter (for schedules / upcoming)
      if (selectedDestination !== 'All Destinations') {
        const destLower = selectedDestination.toLowerCase();
        const matchesDest =
          flight.destination.toLowerCase().includes(destLower) ||
          flight.source.toLowerCase().includes(destLower);
        if (!matchesDest) return false;
      }

      // 4. Day of week filter
      if (selectedDay) {
        if (!flight.effectiveDays.includes(selectedDay as any)) {
          return false;
        }
      }

      // 5. Location Search input
      if (locationSearch.trim()) {
        const locLower = locationSearch.toLowerCase().trim();
        const matchesLoc =
          flight.source.toLowerCase().includes(locLower) ||
          flight.destination.toLowerCase().includes(locLower) ||
          flight.sourceCode.toLowerCase().includes(locLower) ||
          flight.destinationCode.toLowerCase().includes(locLower);
        if (!matchesLoc) return false;
      }

      // 6. General Search Query (flight number, airline, time)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesQuery =
          flight.flightNumber.toLowerCase().includes(q) ||
          flight.airline.toLowerCase().includes(q) ||
          flight.scheduledTime.toLowerCase().includes(q) ||
          flight.estimatedTime.toLowerCase().includes(q) ||
          flight.source.toLowerCase().includes(q) ||
          flight.destination.toLowerCase().includes(q) ||
          flight.flightType.toLowerCase().includes(q);
        if (!matchesQuery) return false;
      }

      return true;
    });
  }, [activeTab, selectedAirline, selectedDestination, selectedDay, locationSearch, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedFlightId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#FAF7F2] text-stone-900 font-sans selection:bg-[#A2552B] selection:text-white">
      {/* ======================================================== */}
      {/* 1. HERO BANNER (COMPACT HEIGHT, NO BADGE, NO UNDERLINE)  */}
      {/* ======================================================== */}
      <section className="relative z-40 w-full max-w-full h-[250px] sm:h-[280px] md:h-[300px] bg-stone-900">
        {/* Background Banner Image - overflow-hidden keeps the image scaling clipped inside the banner */}
        <div className="absolute inset-0 overflow-hidden transition-all duration-700">
          <img
            src={bannerConfig.image}
            alt={bannerConfig.titleAccent}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        {/* Global Transparent Navbar at top */}
        <Navbar
          onNavigateHome={onNavigateHome}
          onNavigateToProcedures={onNavigateToProcedures}
          onNavigateToHowToReach={onNavigateToHowToReach}
          onNavigateToAirportMap={onNavigateToAirportMap}
          onNavigateToFlights={(tab) => handleTabChange(tab || 'arrival')}
          onOpenAirlineDetails={onOpenAirlineDetails}
          onNavigateToFacilities={onNavigateToFacilities}
          onNavigateToShopDine={onNavigateToShopDine}
          onNavigateToTouristAttractions={onNavigateToTouristAttractions}
          onNavigateToCorporate={onNavigateToCorporate}
          onNavigateToContact={onNavigateToContact}
        />

        {/* Banner Headline Content (Matching exact design) */}
        <div className="absolute inset-x-0 bottom-6 sm:bottom-8 z-10 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl pointer-events-auto">
              <h1 className="text-3xl sm:text-4xl md:text-[42px] font-black tracking-tight leading-tight text-white drop-shadow-sm">
                <span className="font-bold text-white">{bannerConfig.titlePrefix}</span>{' '}
                <span className="text-[#E07A5F] font-black">{bannerConfig.titleAccent}</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-[15px] text-white/90 font-normal mt-1.5 sm:mt-2 max-w-xl">
                {bannerConfig.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. MAIN: WITH PROPER SPACING BETWEEN TEXT & PAGE SECTION */}
      {/* ======================================================== */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-20 overflow-x-hidden md:overflow-x-visible">
        
        {/* 4-Tab Bar attached directly to the top edge of Search Card (Scrollable on narrow mobile screens) */}
        <div className="flex items-end gap-1 px-1 overflow-x-auto no-scrollbar sm:flex-wrap max-w-full pb-0.5 sm:pb-0">
          <button
            type="button"
            onClick={() => handleTabChange('arrival')}
            className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-t-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer shrink-0 whitespace-nowrap ${
              activeTab === 'arrival'
                ? 'bg-[#A2552B] text-white shadow-sm relative z-10 -mb-px'
                : 'bg-white/95 hover:bg-white text-stone-700 hover:text-stone-900 border-t border-x border-stone-200/90'
            }`}
          >
            <PlaneLanding className="w-4 h-4 shrink-0" />
            <span>Arrival</span>
          </button>

          <button
            type="button"
            onClick={() => handleTabChange('departure')}
            className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-t-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer shrink-0 whitespace-nowrap ${
              activeTab === 'departure'
                ? 'bg-[#A2552B] text-white shadow-sm relative z-10 -mb-px'
                : 'bg-white/95 hover:bg-white text-stone-700 hover:text-stone-900 border-t border-x border-stone-200/90'
            }`}
          >
            <PlaneTakeoff className="w-4 h-4 shrink-0" />
            <span>Departure</span>
          </button>

          <button
            type="button"
            onClick={() => handleTabChange('schedules')}
            className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-t-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer shrink-0 whitespace-nowrap ${
              activeTab === 'schedules'
                ? 'bg-[#A2552B] text-white shadow-sm relative z-10 -mb-px'
                : 'bg-white/95 hover:bg-white text-stone-700 hover:text-stone-900 border-t border-x border-stone-200/90'
            }`}
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Schedules</span>
          </button>

          <button
            type="button"
            onClick={() => handleTabChange('upcoming')}
            className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-t-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer shrink-0 whitespace-nowrap ${
              activeTab === 'upcoming'
                ? 'bg-[#A2552B] text-white shadow-sm relative z-10 -mb-px'
                : 'bg-white/95 hover:bg-white text-stone-700 hover:text-stone-900 border-t border-x border-stone-200/90'
            }`}
          >
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>Upcoming Schedules</span>
          </button>
        </div>

        {/* Filter Card */}
        <div className="bg-white rounded-b-2xl rounded-tr-2xl shadow-lg border border-stone-200/90 p-3.5 sm:p-6 mb-6 sm:mb-8 w-full max-w-full overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center w-full">
              
              {/* Flight number / Airline Name Search */}
              <div className={`${activeTab === 'schedules' || activeTab === 'upcoming' ? 'md:col-span-3' : 'md:col-span-4'}`}>
                <div className="relative">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      activeTab === 'schedules' || activeTab === 'upcoming'
                        ? 'Flight number or airline'
                        : 'Flight number or Airline name or Time'
                    }
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-lg text-xs sm:text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#A2552B]/20 focus:border-[#A2552B] transition-all"
                  />
                </div>
              </div>

              {/* Airlines Dropdown */}
              <div className={`${activeTab === 'schedules' || activeTab === 'upcoming' ? 'md:col-span-2' : 'md:col-span-3'}`}>
                <div className="relative">
                  <List className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={selectedAirline}
                    onChange={(e) => setSelectedAirline(e.target.value)}
                    className="w-full appearance-none pl-10 pr-8 py-2.5 bg-white border border-stone-200 rounded-lg text-xs sm:text-sm text-stone-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#A2552B]/20 focus:border-[#A2552B] cursor-pointer"
                  >
                    {AIRLINE_OPTIONS.map((airline) => (
                      <option key={airline} value={airline}>
                        {airline}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Destination Dropdown for Schedules / Upcoming */}
              {(activeTab === 'schedules' || activeTab === 'upcoming') && (
                <div className="md:col-span-2">
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={selectedDestination}
                      onChange={(e) => setSelectedDestination(e.target.value)}
                      className="w-full appearance-none pl-10 pr-8 py-2.5 bg-white border border-stone-200 rounded-lg text-xs sm:text-sm text-stone-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#A2552B]/20 focus:border-[#A2552B] cursor-pointer"
                    >
                      {DESTINATION_OPTIONS.map((dest) => (
                        <option key={dest} value={dest}>
                          {dest}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              )}

              {/* Location Search Input */}
              <div className={`${activeTab === 'schedules' || activeTab === 'upcoming' ? 'md:col-span-2' : 'md:col-span-3'}`}>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={locationSearch}
                    onChange={(e) => setLocationSearch(e.target.value)}
                    placeholder="Location Search"
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-lg text-xs sm:text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#A2552B]/20 focus:border-[#A2552B] transition-all"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className={`${activeTab === 'schedules' || activeTab === 'upcoming' ? 'md:col-span-3' : 'md:col-span-2'} flex items-center gap-2`}>
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#A2552B] hover:bg-[#8B4420] text-white rounded-lg text-xs sm:text-sm font-bold shadow-xs transition-all duration-200 cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Search Flight</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  title="Reset Filters"
                  className="px-3.5 py-2.5 bg-white border border-stone-200 hover:bg-stone-50 text-stone-700 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 shadow-2xs"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-stone-500" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              </div>
            </div>

            {/* Day of Week Selector Pills (Shown in Schedules & Upcoming mode) */}
            {(activeTab === 'schedules' || activeTab === 'upcoming') && (
              <div className="mt-4 pt-3.5 border-t border-stone-200/70 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-wider shrink-0">
                    Filter by Operating Day:
                  </span>
                  <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 max-w-full">
                    {DAYS_OF_WEEK.map((day) => {
                      const isSelected = selectedDay === day;
                      return (
                        <button
                          key={day}
                          type="button"
                          onClick={() => setSelectedDay(isSelected ? null : day)}
                          className={`w-8 h-8 rounded-lg text-xs font-bold transition-all duration-150 cursor-pointer shrink-0 ${
                            isSelected
                              ? 'bg-[#A2552B] text-white shadow-sm scale-105'
                              : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100 hover:border-stone-300'
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {selectedDay && (
                  <button
                    type="button"
                    onClick={() => setSelectedDay(null)}
                    className="text-xs text-[#A2552B] hover:underline font-semibold cursor-pointer"
                  >
                    Clear Day Filter
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Results Counter and Active Indicator */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 px-1">
            <div className="text-xs sm:text-sm text-stone-600 font-medium">
              Showing <span className="font-bold text-stone-900">{filteredFlights.length}</span> flight{filteredFlights.length !== 1 ? 's' : ''}
              {selectedAirline !== 'All Airlines' && ` · Airline: ${selectedAirline}`}
              {selectedDay && ` · Operating Day: ${selectedDay}`}
            </div>

            <div className="flex items-center gap-2 text-xs text-stone-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live System CCJ</span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* A. MOBILE FLIGHT CARDS LIST (MOBILE VIEW ONLY: < md)     */}
          {/* ======================================================== */}
          <div className="block md:hidden space-y-3 mb-6">
            {filteredFlights.length === 0 ? (
              <div className="bg-white rounded-2xl border border-stone-200 p-8 text-center max-w-sm mx-auto space-y-3 shadow-xs">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
                  <Plane className="w-6 h-6" />
                </div>
                <p className="font-semibold text-stone-800 text-base">
                  No matching flights found
                </p>
                <p className="text-xs text-stone-500">
                  Try adjusting your search criteria, clearing day filters, or selecting "All Airlines".
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              </div>
            ) : (
              filteredFlights.map((flight) => {
                const isExpanded = expandedFlightId === flight.id;
                return (
                  <div
                    key={`mobile-${flight.id}`}
                    onClick={() => toggleExpand(flight.id)}
                    className={`bg-white rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden shadow-xs hover:shadow-md ${
                      isExpanded
                        ? 'border-[#A2552B] ring-1 ring-[#A2552B]/30'
                        : 'border-stone-200/90'
                    }`}
                  >
                    <div className="p-4">
                      {/* Top Row: Airline Logo + Flight Number Badge + Status Badge */}
                      <div className="flex items-center justify-between gap-2 pb-3 border-b border-stone-100">
                        <div className="flex items-center gap-2 min-w-0">
                          <AirlineLogo airline={flight.airline} className="h-6 max-w-[110px]" />
                          <span className="font-bold text-xs text-stone-900 bg-stone-100 px-2 py-0.5 rounded-md font-mono shrink-0">
                            {flight.flightNumber}
                          </span>
                        </div>

                        {/* Status Badge */}
                        <div className="shrink-0">
                          {flight.status === 'Arrived' ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#EAF8EE] text-[#1B8036] border border-[#C6ECCF]">
                              <PlaneLanding className="w-3 h-3 text-[#1B8036]" />
                              <span>Arrived</span>
                            </span>
                          ) : flight.status === 'Scheduled' ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FEF6E8] text-[#C05621] border border-[#FEE3B8]">
                              <Clock className="w-3 h-3 text-[#C05621]" />
                              <span>Scheduled</span>
                            </span>
                          ) : flight.status === 'Boarding' ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                              <CheckCircle2 className="w-3 h-3 text-blue-600" />
                              <span>Boarding</span>
                            </span>
                          ) : flight.status === 'On Time' ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-50 text-teal-700 border border-teal-200">
                              <CheckCircle2 className="w-3 h-3 text-teal-600" />
                              <span>On Time</span>
                            </span>
                          ) : flight.status === 'Delayed' ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-orange-50 text-[#A2552B] border border-[#A2552B]/30">
                              <AlertCircle className="w-3 h-3 text-[#A2552B]" />
                              <span>Delayed</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-stone-100 text-stone-700 border border-stone-200">
                              <span>{flight.status}</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Middle Row: Route (From / To) & Scheduled Time */}
                      <div className="py-3 grid grid-cols-2 gap-3 items-center">
                        <div>
                          <div className="text-[10px] uppercase font-bold text-stone-400">
                            {activeTab === 'arrival'
                              ? 'From'
                              : activeTab === 'departure'
                              ? 'Destination'
                              : 'Route'}
                          </div>
                          <div className="text-sm font-extrabold text-stone-900 truncate">
                            {activeTab === 'arrival'
                              ? flight.source
                              : activeTab === 'departure'
                              ? flight.destination
                              : `${flight.source} → ${flight.destination}`}
                          </div>
                          <div className="text-[11px] text-stone-500 font-medium">
                            {flight.date}
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-[10px] uppercase font-bold text-stone-400">
                            {activeTab === 'departure' ? 'STD' : 'STA'}
                          </div>
                          <div className="text-base font-black text-[#A2552B] font-mono">
                            {flight.scheduledTime}
                          </div>
                          {flight.estimatedTime && (
                            <div className="text-[11px] font-mono text-stone-500">
                              {activeTab === 'departure' ? 'ETD' : 'ETA'}: {flight.estimatedTime}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Bottom Info Pill Row */}
                      <div className="flex items-center justify-between pt-2.5 border-t border-stone-100 text-[11px]">
                        <div className="flex items-center gap-1.5 text-stone-600">
                          <Plane className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                          <span className="font-medium truncate max-w-[140px]">
                            {flight.aircraft || flight.flightType}
                          </span>
                          <span className="text-stone-300">•</span>
                          <span className="font-medium">{flight.terminal}</span>
                        </div>

                        <div className="flex items-center gap-1 text-[#A2552B] font-bold text-xs shrink-0">
                          <span>{isExpanded ? 'Hide' : 'Details'}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Expandable Mobile Drawer */}
                    {isExpanded && (
                      <div className="bg-stone-50/90 border-t border-stone-200 p-4 space-y-3 text-xs animate-in fade-in duration-200">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2.5 bg-white rounded-lg border border-stone-200/80">
                            <div className="text-[10px] font-bold text-stone-400 uppercase">
                              Terminal
                            </div>
                            <div className="font-bold text-stone-900 mt-0.5">
                              {flight.terminal}
                            </div>
                            <div className="text-[10px] text-stone-500">
                              {flight.flightType} Concourse
                            </div>
                          </div>

                          <div className="p-2.5 bg-white rounded-lg border border-stone-200/80">
                            <div className="text-[10px] font-bold text-stone-400 uppercase">
                              Gate
                            </div>
                            <div className="font-bold text-stone-900 mt-0.5">
                              {flight.gate}
                            </div>
                            <div className="text-[10px] text-stone-500">
                              Boarding / Arrival Gate
                            </div>
                          </div>

                          <div className="p-2.5 bg-white rounded-lg border border-stone-200/80">
                            <div className="text-[10px] font-bold text-stone-400 uppercase">
                              Baggage Belt
                            </div>
                            <div className="font-bold text-stone-900 mt-0.5">
                              {flight.belt || 'Assigned on arrival'}
                            </div>
                            <div className="text-[10px] text-stone-500">
                              Arrival Concourse Hall
                            </div>
                          </div>

                          <div className="p-2.5 bg-white rounded-lg border border-stone-200/80">
                            <div className="text-[10px] font-bold text-stone-400 uppercase">
                              Aircraft
                            </div>
                            <div className="font-bold text-stone-900 mt-0.5">
                              {flight.aircraft}
                            </div>
                            <div className="text-[10px] text-stone-500">
                              Commercial Fleet
                            </div>
                          </div>
                        </div>

                        {/* Effective Days mini row for schedules & upcoming */}
                        {(activeTab === 'schedules' || activeTab === 'upcoming') && flight.effectiveDays && (
                          <div className="p-2.5 bg-white rounded-lg border border-stone-200/80">
                            <div className="text-[10px] font-bold text-stone-400 uppercase mb-1.5">
                              Effective Operating Days
                            </div>
                            <div className="flex items-center gap-1 flex-wrap">
                              {DAYS_OF_WEEK.map((day) => {
                                const isActive = flight.effectiveDays.includes(day as any);
                                return (
                                  <span
                                    key={day}
                                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                      isActive
                                        ? 'bg-[#0F243E] text-white'
                                        : 'bg-stone-100 text-stone-400'
                                    }`}
                                  >
                                    {day}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {flight.effectivePeriod && (
                          <div className="p-2 bg-amber-50 border border-amber-200/70 rounded-lg text-amber-900 text-[11px] flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#A2552B] shrink-0" />
                            <span>
                              <strong>Operating Period:</strong> {flight.effectivePeriod}
                            </span>
                          </div>
                        )}

                        {onOpenAirlineDetails && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenAirlineDetails();
                            }}
                            className="w-full py-2 px-3 rounded-lg bg-white border border-stone-200 hover:bg-[#A2552B] hover:text-white text-[#A2552B] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                          >
                            <span>View {flight.airline} Directory</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* ======================================================== */}
          {/* B. FLIGHT DATA TABLE WITH NAVY HEADER (DESKTOP VIEW: md+) */}
          {/* ======================================================== */}
          <div className="hidden md:block overflow-x-auto rounded-2xl border border-stone-200/90 shadow-md bg-white">
            <table className="w-full text-left border-collapse">
              {/* Dark Navy Table Header (#0E233E) */}
              <thead>
                <tr className="bg-[#0E233E] text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase select-none">
                  <th className="py-4 px-4 sm:px-6">
                    <div className="flex items-center gap-2">
                      <Plane className="w-3.5 h-3.5 text-stone-300" />
                      <span>Airline</span>
                    </div>
                  </th>

                  {/* Date column (realtime) */}
                  {(activeTab === 'arrival' || activeTab === 'departure') && (
                    <th className="py-4 px-3 sm:px-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-stone-400" />
                        <span>Date</span>
                      </div>
                    </th>
                  )}

                  <th className="py-4 px-3 sm:px-4">
                    <div className="flex items-center gap-1">
                      <span>#</span>
                      <span>Flight No.</span>
                    </div>
                  </th>

                  {/* From or Source column */}
                  <th className="py-4 px-3 sm:px-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      <span>
                        {activeTab === 'arrival'
                          ? 'From'
                          : activeTab === 'departure'
                          ? 'To'
                          : 'Source'}
                      </span>
                    </div>
                  </th>

                  {/* Destination column for Schedules / Upcoming */}
                  {(activeTab === 'schedules' || activeTab === 'upcoming') && (
                    <th className="py-4 px-3 sm:px-4">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-stone-400" />
                        <span>Destination</span>
                      </div>
                    </th>
                  )}

                  {/* Scheduled Times */}
                  <th className="py-4 px-3 sm:px-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      <span>{activeTab === 'departure' ? 'STD' : 'STA'}</span>
                    </div>
                  </th>

                  {/* Estimated Times / Schedules Times */}
                  <th className="py-4 px-3 sm:px-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      <span>
                        {activeTab === 'arrival'
                          ? 'ETA'
                          : activeTab === 'departure'
                          ? 'ETD'
                          : 'STA'}
                      </span>
                    </div>
                  </th>

                  {/* Flight Type or Aircraft */}
                  <th className="py-4 px-3 sm:px-4">
                    <div className="flex items-center gap-1.5">
                      <Plane className="w-3.5 h-3.5 text-stone-400" />
                      <span>
                        {activeTab === 'schedules' || activeTab === 'upcoming'
                          ? 'Aircraft'
                          : 'Flight Type'}
                      </span>
                    </div>
                  </th>

                  {/* Effective Days (Schedules / Upcoming) */}
                  {(activeTab === 'schedules' || activeTab === 'upcoming') && (
                    <th className="py-4 px-4 sm:px-5">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-stone-400" />
                        <span>Effective Days</span>
                      </div>
                    </th>
                  )}

                  {/* Status column */}
                  <th className="py-4 px-4 sm:px-5">
                    <div className="flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-stone-400" />
                      <span>Status</span>
                    </div>
                  </th>

                  <th className="py-4 px-3 sm:px-4 text-right">
                    <span className="sr-only">Details</span>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-stone-100 bg-white text-xs sm:text-sm">
                {filteredFlights.length === 0 ? (
                  <tr>
                    <td
                      colSpan={activeTab === 'schedules' || activeTab === 'upcoming' ? 9 : 9}
                      className="py-12 px-4 text-center text-stone-500"
                    >
                      <div className="max-w-sm mx-auto space-y-3">
                        <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
                          <Plane className="w-6 h-6" />
                        </div>
                        <p className="font-semibold text-stone-800 text-base">
                          No matching flights found
                        </p>
                        <p className="text-xs text-stone-500">
                          Try adjusting your search criteria, clearing day filters, or selecting "All Airlines".
                        </p>
                        <button
                          type="button"
                          onClick={handleReset}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-all cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Reset Filters</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredFlights.map((flight) => {
                    const isExpanded = expandedFlightId === flight.id;

                    return (
                      <React.Fragment key={flight.id}>
                        <tr
                          onClick={() => toggleExpand(flight.id)}
                          className={`group transition-colors duration-150 cursor-pointer ${
                            isExpanded ? 'bg-amber-50/40' : 'hover:bg-stone-50/80'
                          }`}
                        >
                          {/* Airline Name & Logo */}
                          <td className="py-4 px-4 sm:px-6">
                            <AirlineLogo airline={flight.airline} />
                          </td>

                          {/* Date (for arrival & departure) */}
                          {(activeTab === 'arrival' || activeTab === 'departure') && (
                            <td className="py-4 px-3 sm:px-4 font-medium text-stone-600 whitespace-nowrap">
                              {flight.date}
                            </td>
                          )}

                          {/* Flight No */}
                          <td className="py-4 px-3 sm:px-4 font-bold text-stone-900 whitespace-nowrap">
                            {flight.flightNumber}
                          </td>

                          {/* Source / From */}
                          <td className="py-4 px-3 sm:px-4 font-semibold text-stone-800 whitespace-nowrap">
                            {activeTab === 'arrival'
                              ? flight.source
                              : activeTab === 'departure'
                              ? flight.destination
                              : flight.source}
                          </td>

                          {/* Destination (for Schedules / Upcoming) */}
                          {(activeTab === 'schedules' || activeTab === 'upcoming') && (
                            <td className="py-4 px-3 sm:px-4 font-semibold text-stone-800 whitespace-nowrap">
                              {flight.destination}
                            </td>
                          )}

                          {/* STD or STA */}
                          <td className="py-4 px-3 sm:px-4 font-mono font-medium text-stone-700 whitespace-nowrap">
                            {flight.scheduledTime}
                          </td>

                          {/* ETA or ETD or STA */}
                          <td className="py-4 px-3 sm:px-4 font-mono font-medium text-stone-700 whitespace-nowrap">
                            {flight.estimatedTime}
                          </td>

                          {/* Flight Type or Aircraft */}
                          <td className="py-4 px-3 sm:px-4 whitespace-nowrap">
                            {activeTab === 'schedules' || activeTab === 'upcoming' ? (
                              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200">
                                {flight.aircraft}
                              </span>
                            ) : (
                              <span className="font-medium text-stone-600">
                                {flight.flightType}
                              </span>
                            )}
                          </td>

                          {/* Effective Days mini pills (Schedules & Upcoming) */}
                          {(activeTab === 'schedules' || activeTab === 'upcoming') && (
                            <td className="py-4 px-4 sm:px-5 whitespace-nowrap">
                              <div className="flex items-center gap-1">
                                {DAYS_OF_WEEK.map((day) => {
                                  const isActive = flight.effectiveDays.includes(day as any);
                                  return (
                                    <span
                                      key={day}
                                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                        isActive
                                          ? 'bg-[#0F243E] text-white'
                                          : 'bg-stone-100 text-stone-400'
                                      }`}
                                    >
                                      {day}
                                    </span>
                                  );
                                })}
                              </div>
                            </td>
                          )}

                          {/* Status Badge */}
                          <td className="py-4 px-4 sm:px-5 whitespace-nowrap">
                            {flight.status === 'Arrived' ? (
                              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#EAF8EE] text-[#1B8036] border border-[#C6ECCF]">
                                <PlaneLanding className="w-3.5 h-3.5 text-[#1B8036]" />
                                <span>Arrived</span>
                              </span>
                            ) : flight.status === 'Scheduled' ? (
                              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#FEF6E8] text-[#C05621] border border-[#FEE3B8]">
                                <Clock className="w-3.5 h-3.5 text-[#C05621]" />
                                <span>Scheduled</span>
                              </span>
                            ) : flight.status === 'Boarding' ? (
                              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                                <span>Boarding</span>
                              </span>
                            ) : flight.status === 'On Time' ? (
                              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200">
                                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                                <span>On Time</span>
                              </span>
                            ) : flight.status === 'Delayed' ? (
                              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-orange-50 text-[#A2552B] border border-[#A2552B]/30">
                                <AlertCircle className="w-3.5 h-3.5 text-[#A2552B]" />
                                <span>Delayed</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200">
                                <span>{flight.status}</span>
                              </span>
                            )}
                          </td>

                          {/* Chevron Expand Indicator */}
                          <td className="py-4 px-3 sm:px-4 text-right">
                            <ChevronRight
                              className={`w-4 h-4 text-stone-400 group-hover:text-stone-700 transition-transform duration-200 inline-block ${
                                isExpanded ? 'rotate-90 text-[#A2552B]' : ''
                              }`}
                            />
                          </td>
                        </tr>

                        {/* Expanded Drawer Details */}
                        {isExpanded && (
                          <tr className="bg-stone-50/70 border-b border-stone-200/80">
                            <td
                              colSpan={activeTab === 'schedules' || activeTab === 'upcoming' ? 9 : 9}
                              className="p-4 sm:p-6"
                            >
                              <div className="bg-white rounded-xl border border-stone-200 p-4 sm:p-5 shadow-xs">
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                                  <div className="p-3 bg-stone-50 rounded-lg">
                                    <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                                      <Building2 className="w-3.5 h-3.5 text-stone-500" />
                                      Terminal
                                    </div>
                                    <div className="text-sm font-bold text-stone-900">
                                      {flight.terminal}
                                    </div>
                                    <div className="text-[11px] text-stone-500">
                                      {flight.flightType} Concourse
                                    </div>
                                  </div>

                                  <div className="p-3 bg-stone-50 rounded-lg">
                                    <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                                      <MapPin className="w-3.5 h-3.5 text-stone-500" />
                                      Gate
                                    </div>
                                    <div className="text-sm font-bold text-stone-900">
                                      {flight.gate}
                                    </div>
                                    <div className="text-[11px] text-stone-500">
                                      Boarding / Arrival Gate
                                    </div>
                                  </div>

                                  <div className="p-3 bg-stone-50 rounded-lg">
                                    <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                                      <Luggage className="w-3.5 h-3.5 text-stone-500" />
                                      Baggage Carousel
                                    </div>
                                    <div className="text-sm font-bold text-stone-900">
                                      {flight.belt || 'Assigned on arrival'}
                                    </div>
                                    <div className="text-[11px] text-stone-500">
                                      Arrival Concourse Hall
                                    </div>
                                  </div>

                                  <div className="p-3 bg-stone-50 rounded-lg">
                                    <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                                      <Plane className="w-3.5 h-3.5 text-stone-500" />
                                      Aircraft Type
                                    </div>
                                    <div className="text-sm font-bold text-stone-900">
                                      {flight.aircraft}
                                    </div>
                                    <div className="text-[11px] text-stone-500">
                                      Certified Commercial
                                    </div>
                                  </div>
                                </div>

                                {flight.effectivePeriod && (
                                  <div className="mb-4 p-3 bg-amber-50/70 border border-amber-200/70 rounded-lg text-xs text-amber-900 flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-[#A2552B] shrink-0" />
                                    <span>
                                      <strong>Operating Period:</strong> {flight.effectivePeriod}
                                    </span>
                                  </div>
                                )}

                                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-100">
                                  <div className="text-xs text-stone-500 flex items-center gap-1.5">
                                    <Info className="w-3.5 h-3.5 text-stone-400" />
                                    Flight operational times may vary depending on air traffic control and weather conditions.
                                  </div>

                                  {onOpenAirlineDetails && (
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        onOpenAirlineDetails();
                                      }}
                                      className="inline-flex items-center gap-1 text-xs font-bold text-[#A2552B] hover:text-[#8B4420] transition-colors cursor-pointer"
                                    >
                                      <span>View {flight.airline} Contact & Directory</span>
                                      <ExternalLink className="w-3.5 h-3.5" />
                                    </button>
                                  )}
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Table Bottom Help Note */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[11px] sm:text-xs text-stone-500 pt-3 border-t border-stone-200">
            <div className="max-w-2xl leading-relaxed break-words">
              * STA: Scheduled Time of Arrival · ETA: Estimated Time of Arrival · STD: Scheduled Time of Departure · ETD: Estimated Time of Departure
            </div>
            <div className="shrink-0">
              Source: Calicut International Airport Flight Information Display System (FIDS)
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
export default FlightsPage;

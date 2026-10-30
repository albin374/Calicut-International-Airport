import React, { useState, useMemo } from 'react';
import {
  ChevronRight,
  Clock,
  Plane,
  Compass,
  Search,
  Luggage,
  Coffee,
  Car,
  Info,
  Layers,
  CheckCircle2,
  X
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { FooterSection } from '../components/FooterSection';
import {
  TERMINALS_DATA,
  TerminalData,
  AIRPORT_CAMPUS_SPECS,
  AIRPORT_FACILITIES,
  PASSENGER_FLOW_STEPS,
  FacilityItem
} from './airportMapData';

export interface AirportMapPageProps {
  onNavigateHome: () => void;
  onNavigateToProcedures: () => void;
  onNavigateToHowToReach: () => void;
  onOpenFlightStatus?: (type?: 'arrival' | 'departure') => void;
  onOpenAirlineDetails?: () => void;
  onNavigateToFacilities?: () => void;
  onNavigateToShopDine?: () => void;
  onNavigateToTouristAttractions?: () => void;
  onNavigateToCorporate?: () => void;
  onNavigateToContact?: () => void;
  initialTab?: 'overview' | 'T1' | 'T2' | 'parking';
}

export const AirportMapPage: React.FC<AirportMapPageProps> = ({
  onNavigateHome,
  onNavigateToProcedures,
  onNavigateToHowToReach,
  onOpenFlightStatus,
  onOpenAirlineDetails,
  onNavigateToFacilities,
  onNavigateToShopDine,
  onNavigateToTouristAttractions,
  onNavigateToCorporate,
  onNavigateToContact,
  initialTab = 'overview',
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'T1' | 'T2' | 'parking'>(initialTab);
  const [flowTab, setFlowTab] = useState<'domesticDeparture' | 'internationalDeparture' | 'arrivalFlow'>('internationalDeparture');
  const [facilitySearch, setFacilitySearch] = useState('');
  const [facilityCategory, setFacilityCategory] = useState<'all' | 'checkin' | 'gates' | 'lounges' | 'baggage' | 'services' | 'transit'>('all');

  const currentTerminal: TerminalData = TERMINALS_DATA[activeTab];

  // Filter facilities based on search query and category pill
  const filteredFacilities = useMemo(() => {
    return AIRPORT_FACILITIES.filter((f) => {
      const matchesCategory = facilityCategory === 'all' || f.category === facilityCategory;
      const q = facilitySearch.toLowerCase().trim();
      const matchesSearch =
        !q ||
        f.name.toLowerCase().includes(q) ||
        f.terminal.toLowerCase().includes(q) ||
        f.level.toLowerCase().includes(q) ||
        f.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [facilitySearch, facilityCategory]);

  // Helper for facility category icon
  const renderCategoryIcon = (category: FacilityItem['category']) => {
    switch (category) {
      case 'checkin':
        return <CheckCircle2 className="w-4 h-4 text-[#A2552B]" />;
      case 'gates':
        return <Plane className="w-4 h-4 text-[#A2552B]" />;
      case 'lounges':
        return <Coffee className="w-4 h-4 text-[#A2552B]" />;
      case 'baggage':
        return <Luggage className="w-4 h-4 text-[#A2552B]" />;
      case 'transit':
        return <Car className="w-4 h-4 text-[#A2552B]" />;
      case 'services':
      default:
        return <Info className="w-4 h-4 text-[#A2552B]" />;
    }
  };

  return (
    <div className="w-full min-h-screen m-0 p-0 font-sans selection:bg-[#A2552B] selection:text-white bg-[#FAF7F2] text-stone-800 flex flex-col justify-between">
      
      {/* Top Navbar with highest z-index so dropdowns stay on top */}
      <div className="relative z-50">
        <Navbar 
          onNavigateHome={onNavigateHome}
          onNavigateToProcedures={onNavigateToProcedures}
          onNavigateToHowToReach={onNavigateToHowToReach}
          onNavigateToAirportMap={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onOpenFlightStatus={onOpenFlightStatus}
          onOpenAirlineDetails={onOpenAirlineDetails}
          onNavigateToFacilities={onNavigateToFacilities}
          onNavigateToShopDine={onNavigateToShopDine}
          onNavigateToTouristAttractions={onNavigateToTouristAttractions}
          onNavigateToCorporate={onNavigateToCorporate}
          onNavigateToContact={onNavigateToContact}
          isAirportMapPage={true}
        />
      </div>

      {/* ======================================================== */}
      {/* 1. TOP HERO BANNER: Aerial Terminal Campus Image         */}
      {/* ======================================================== */}
      <section className="relative z-10 w-full min-h-[360px] sm:min-h-[400px] lg:min-h-[440px] flex flex-col justify-between bg-slate-900 select-none pb-14 sm:pb-16">
        
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/Calicut International Airport Terminal.png"
            alt="Calicut International Airport Aerial Terminal Campus"
            className="w-full h-full object-cover object-center filter brightness-95"
          />
          {/* Subtle gradient overlay to make typography pop */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 via-[45%] to-transparent pointer-events-none" />
        </div>

        {/* HERO TITLE & BREADCRUMB */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-14">
          
          {/* Breadcrumb: Home > Plan Your Journey > Airport Map */}
          <div className="flex items-center gap-2 text-xs sm:text-[13px] font-medium text-white/80 mb-3 sm:mb-4">
            <button 
              type="button"
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-white/60" />
            <span className="text-white/80">Plan Your Journey</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/60" />
            <span className="text-[#E8A57A] font-semibold">Airport Map</span>
          </div>

          {/* Headline: Airport Map */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-white mb-3 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Airport <span className="text-[#E8A57A]">Map</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-2xl font-normal leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            Interactive terminal layouts, departure gates, check-in desks, lounges, and ground transit at Calicut International Airport (CCJ / VOCL).
          </p>

        </div>

      </section>

      {/* ======================================================== */}
      {/* 2. SECTION AFTER BANNER: CURVED WHITE CONTAINER          */}
      {/* Curved top edge overlapping banner (-mt-10 sm:-mt-14)    */}
      {/* Set to z-20 so white container sits cleanly OVER banner  */}
      {/* ======================================================== */}
      <section className="relative z-20 -mt-10 sm:-mt-14 rounded-t-[36px] sm:rounded-t-[44px] bg-white border-t border-white/60 shadow-[0_-12px_30px_rgba(0,0,0,0.08)] pt-8 sm:pt-10 pb-16 flex-1">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* ==================================================== */}
          {/* CAMPUS SPECS QUICK RIBBON                            */}
          {/* ==================================================== */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-stone-200/90 text-xs shadow-2xs">
            <div className="space-y-0.5">
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">IATA / ICAO</span>
              <span className="text-sm font-bold text-stone-900">{AIRPORT_CAMPUS_SPECS.iata} / {AIRPORT_CAMPUS_SPECS.icao}</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">Elevation</span>
              <span className="text-sm font-bold text-stone-900">{AIRPORT_CAMPUS_SPECS.elevation}</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">Runway</span>
              <span className="text-sm font-bold text-stone-900">10/28 (2,860 m)</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">Capacity</span>
              <span className="text-sm font-bold text-stone-900">1500 Passengers</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">Aerobridges</span>
              <span className="text-sm font-bold text-stone-900">3 Glass PBBs</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">Operator</span>
              <span className="text-sm font-bold text-[#A2552B]">AAI (Govt. of India)</span>
            </div>
          </div>

          {/* ==================================================== */}
          {/* TERMINAL SWITCHER NAVIGATION TABS                    */}
          {/* ==================================================== */}
          <div className="flex flex-wrap items-center gap-2.5 border-b border-stone-200 pb-4">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'overview'
                  ? 'bg-[#A2552B] text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Campus Overview</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('T1')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'T1'
                  ? 'bg-[#A2552B] text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <Plane className="w-4 h-4" />
              <span>Terminal 1 (Domestic)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('T2')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'T2'
                  ? 'bg-[#A2552B] text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <Plane className="w-4 h-4" />
              <span>Terminal 2 (International)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('parking')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'parking'
                  ? 'bg-[#A2552B] text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>Parking & Cabs</span>
            </button>
          </div>

          {/* ==================================================== */}
          {/* TERMINAL HEADER & KEY SPECIFICATIONS                 */}
          {/* ==================================================== */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A2552B]">
                  {currentTerminal.tag}
                </span>
                <span className="w-8 h-[2px] bg-[#E8A57A] rounded-full inline-block" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
                {currentTerminal.headline}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {currentTerminal.description}
              </p>
            </div>

            {/* Quick Stats Pill Grid */}
            <div className="grid grid-cols-2 gap-3 shrink-0 w-full lg:w-auto">
              {currentTerminal.stats.map((st, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#FAF7F2] border border-stone-200/80 text-left min-w-[130px]">
                  <span className="text-[10px] uppercase font-semibold text-stone-500 block">{st.label}</span>
                  <span className="text-xs sm:text-sm font-bold text-stone-900">{st.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ==================================================== */}
          {/* TERMINAL VISUAL SHOWCASE (CLEAN IMAGE - NO PINS)     */}
          {/* ==================================================== */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/90 shadow-md bg-stone-900 select-none">
            
            {/* Background Terminal Visual (Reduced Height) */}
            <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[330px] overflow-hidden">
              <img
                key={currentTerminal.image}
                src={currentTerminal.image}
                alt={currentTerminal.imageCaption}
                className="w-full h-full object-cover filter brightness-95 saturate-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-3.5 left-4 right-4 sm:bottom-5 sm:left-6 flex flex-wrap items-center justify-between gap-3 text-white pointer-events-none">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#E8A57A] block">
                    {currentTerminal.badge}
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-bold drop-shadow">
                    {currentTerminal.imageCaption}
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* ==================================================== */}
          {/* LEVEL DIRECTORY / FLOOR PLAN BREAKDOWN               */}
          {/* ==================================================== */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Layers className="w-5 h-5 text-[#A2552B]" />
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Level Directory & Terminal Wings
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentTerminal.levels.map((lvl, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-[#FAF7F2] border border-stone-200/90 shadow-2xs space-y-4 hover:border-[#E8CEBE] transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#A2552B] block">
                        Floor Plan Section
                      </span>
                      <h4 className="text-lg font-bold text-stone-900">
                        {lvl.levelName}
                      </h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-xs font-bold text-[#A2552B] shrink-0 shadow-2xs">
                      {idx + 1}
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 font-medium">
                    {lvl.purpose}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-stone-200/70 text-xs text-stone-700">
                    {lvl.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A2552B] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ==================================================== */}
          {/* STEP-BY-STEP PASSENGER FLOW JOURNEY                  */}
          {/* ==================================================== */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-stone-200/90 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-200/80 pb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#A2552B] block">
                  Passenger Guide
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                  Step-by-Step Passenger Flow
                </h3>
              </div>

              {/* Flow Selector Switcher */}
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setFlowTab('internationalDeparture')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    flowTab === 'internationalDeparture'
                      ? 'bg-[#A2552B] text-white shadow-2xs'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  International Departure
                </button>
                <button
                  type="button"
                  onClick={() => setFlowTab('domesticDeparture')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    flowTab === 'domesticDeparture'
                      ? 'bg-[#A2552B] text-white shadow-2xs'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  Domestic Departure
                </button>
                <button
                  type="button"
                  onClick={() => setFlowTab('arrivalFlow')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    flowTab === 'arrivalFlow'
                      ? 'bg-[#A2552B] text-white shadow-2xs'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  Arrival Journey
                </button>
              </div>
            </div>

            {/* 4 Step Timeline Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PASSENGER_FLOW_STEPS[flowTab].map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs space-y-2 relative"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold font-mono text-[#A2552B]">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider">
                      {step.subtitle}
                    </span>
                  </div>
                  <h5 className="font-bold text-stone-900 text-sm">
                    {step.title}
                  </h5>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ==================================================== */}
          {/* SEARCHABLE & FILTERABLE FACILITY DIRECTORY           */}
          {/* ==================================================== */}
          <div className="space-y-6 pt-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#A2552B] block">
                  Find on Map
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                  Airport Facilities & Amenities Directory
                </h3>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={facilitySearch}
                  onChange={(e) => setFacilitySearch(e.target.value)}
                  placeholder="Search gates, ATMs, food, lounges..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-full border border-stone-200 bg-white text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#A2552B] focus:ring-1 focus:ring-[#A2552B] shadow-2xs"
                />
                {facilitySearch && (
                  <button
                    type="button"
                    onClick={() => setFacilitySearch('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Facilities' },
                { id: 'gates', label: 'Boarding Gates' },
                { id: 'checkin', label: 'Check-in & Security' },
                { id: 'lounges', label: 'Lounges & Duty Free' },
                { id: 'baggage', label: 'Baggage & Customs' },
                { id: 'transit', label: 'Parking & Taxis' },
                { id: 'services', label: 'Services & Help' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFacilityCategory(cat.id as any)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    facilityCategory === cat.id
                      ? 'bg-[#A2552B] text-white shadow-2xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Facilities Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredFacilities.map((fac) => (
                <div
                  key={fac.id}
                  className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between gap-3 group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-[#FAF2EC] border border-[#E8CEBE] text-[#A2552B] flex items-center justify-center shrink-0">
                        {renderCategoryIcon(fac.category)}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600">
                        {fac.terminal}
                      </span>
                    </div>

                    <h4 className="font-bold text-stone-900 text-sm sm:text-[15px] leading-tight group-hover:text-[#A2552B] transition-colors">
                      {fac.name}
                    </h4>

                    <span className="text-[11px] font-semibold text-[#8B4420] block">
                      {fac.level}
                    </span>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {fac.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-stone-400" />
                      <span>{fac.hours}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filteredFacilities.length === 0 && (
              <div className="text-center py-12 bg-[#FAF7F2] rounded-2xl border border-stone-200 text-stone-500 text-xs sm:text-sm">
                No facilities matching "{facilitySearch}". Try a different search term or category.
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* FOOTER SECTION                                           */}
      {/* ======================================================== */}
      <FooterSection />

    </div>
  );
};

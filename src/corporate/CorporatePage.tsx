import React from 'react';
import {
  Shield,
  FileText,
CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
  HardHat,
  Users,
  Leaf,
  PlaneTakeoff,
  Mountain,
  Clock,
  Plane,
  Building2,
  Radio,
  Boxes,
  Map
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { FooterSection } from '../components/FooterSection';
import { AirlineLogo } from '../flights/AirlineLogo';
import {
  SECURITY_PILLARS,
  CARRIER_PARTNERS,
  LEADERSHIP_CONTACTS
} from './corporateData';

interface CorporatePageProps {
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

export const CorporatePage: React.FC<CorporatePageProps> = ({
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
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 font-sans selection:bg-[#A2552B] selection:text-white">
      {/* ======================================================== */}
      {/* 1. HERO BANNER (SINGLE-LINE TITLE & COMPACT HEIGHT)       */}
      {/* ======================================================== */}
      <section className="relative z-40 w-full h-[260px] sm:h-[290px] md:h-[320px] bg-stone-900">
        {/* Background Banner Image */}
        <div className="absolute inset-0 overflow-hidden transition-all duration-700">
          <img
            src="/Golden Hour Airport Panorama.png"
            alt="Calicut International Airport Corporate Administration"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
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
        />

        {/* Banner Headline Content (Single Line) */}
        <div className="absolute inset-x-0 bottom-6 sm:bottom-8 z-10 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl pointer-events-auto">
              <h1 className="text-3xl sm:text-4xl md:text-[42px] font-black tracking-tight leading-tight text-white drop-shadow-sm whitespace-normal sm:whitespace-nowrap">
                <span className="font-bold text-white">Corporate Governance &</span>{' '}
                <span className="text-[#E07A5F] font-black">Airport Overview</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-[15px] text-white/90 font-normal mt-1.5 sm:mt-2 max-w-2xl">
                Official institutional profile, infrastructure metrics, security regulatory frameworks, and air carriers network of Calicut International Airport (CCJ / VOCL)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. SECTION 01 / INSTITUTIONAL PROFILE                     */}
      {/* Placed directly on the page background (No separate card) */}
      {/* ======================================================== */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 sm:pb-12">
        {/* Top Split: Text & Heading on Left, Terminal Exterior Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-8 h-[2px] bg-[#A2552B] inline-block" />
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#A2552B]">
                01 / INSTITUTIONAL PROFILE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-stone-900 tracking-tight leading-[1.15] mb-5">
              About Calicut International Airport
            </h2>

            <p className="text-stone-600 text-sm sm:text-[15px] leading-relaxed">
              Calicut International Airport (IATA: <strong>CCJ</strong>, ICAO: <strong>VOCL</strong>), located in Karipur, Malappuram district, serves as the primary international gateway to the Malabar region of Kerala. Governed and operated by the <strong>Airports Authority of India (AAI)</strong> under the Ministry of Civil Aviation, Government of India, the airport was inaugurated on <strong>13 April 1988</strong> and granted international status on <strong>2 February 2006</strong>.
            </p>
          </div>

          {/* Right Column: Exterior Terminal Banner Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-stone-200/60 aspect-[16/9] w-full bg-stone-900">
              <img
                src="/Calicut International Airport Exterior.png"
                alt="Calicut International Airport Exterior"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Middle 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mt-8 sm:mt-10">
          {/* Card 1: Malabar Diaspora Lifeline */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/80 shadow-xs flex items-center gap-4 hover:border-[#A2552B]/40 hover:shadow-sm transition-all group">
            <div className="w-[120px] sm:w-[130px] h-[120px] sm:h-[130px] rounded-xl overflow-hidden shrink-0 border border-stone-100 bg-stone-100">
              <img
                src="/Golden-Hour Jet at the Gate.png"
                alt="Malabar Diaspora Lifeline"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#A2552B]/20 flex items-center justify-center text-[#A2552B] mb-2">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-[15px] font-bold text-stone-900 leading-snug">
                Malabar Diaspora Lifeline
              </h3>
              <p className="text-[11px] sm:text-[11.5px] text-stone-500 leading-relaxed mt-1 line-clamp-3">
                Connects over 2.5 million non-resident Keralites directly to major GCC aviation hubs including Dubai, Abu Dhabi, Doha, Jeddah, Riyadh, Muscat, and Kuwait.
              </p>
              <button
                type="button"
                onClick={() => scrollToSection('carriers')}
                className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-bold text-[#A2552B] hover:text-[#7A3E1E] transition-colors cursor-pointer group/link"
              >
                <span>Learn More</span>
                <span className="text-xs group-hover/link:translate-x-0.5 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Card 2: AAI Quality & Safety */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/80 shadow-xs flex items-center gap-4 hover:border-[#A2552B]/40 hover:shadow-sm transition-all group">
            <div className="w-[120px] sm:w-[130px] h-[120px] sm:h-[130px] rounded-xl overflow-hidden shrink-0 border border-stone-100 bg-stone-100">
              <img
                src="/Modern Airport Tower and Landing Jet.png"
                alt="AAI Quality & Safety"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#A2552B]/20 flex items-center justify-center text-[#A2552B] mb-2">
                <Shield className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-[15px] font-bold text-stone-900 leading-snug">
                AAI Quality & Safety
              </h3>
              <p className="text-[11px] sm:text-[11.5px] text-stone-500 leading-relaxed mt-1 line-clamp-3">
                ISO 9001:2015 certified for Quality Management Systems and ISO 14001:2015 compliant for Environmental Standards adhering to ICAO Annex 14 certifications.
              </p>
              <button
                type="button"
                onClick={() => scrollToSection('security')}
                className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-bold text-[#A2552B] hover:text-[#7A3E1E] transition-colors cursor-pointer group/link"
              >
                <span>Learn More</span>
                <span className="text-xs group-hover/link:translate-x-0.5 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Card 3: Green Energy & Solar */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/80 shadow-xs flex items-center gap-4 hover:border-[#A2552B]/40 hover:shadow-sm transition-all group">
            <div className="w-[120px] sm:w-[130px] h-[120px] sm:h-[130px] rounded-xl overflow-hidden shrink-0 border border-stone-100 bg-stone-100">
              <img
                src="/Solar Panels Beneath a Golden Sunset.png"
                alt="Green Energy & Solar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#A2552B]/20 flex items-center justify-center text-[#A2552B] mb-2">
                <Leaf className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-[15px] font-bold text-stone-900 leading-snug">
                Green Energy & Solar
              </h3>
              <p className="text-[11px] sm:text-[11.5px] text-stone-500 leading-relaxed mt-1 line-clamp-3">
                Powered by a captive 1.5 MW solar photovoltaic ground power plant, comprehensive rainwater harvesting reservoirs, and energy-efficient LED airfield systems.
              </p>
              <button
                type="button"
                onClick={() => scrollToSection('infrastructure')}
                className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-bold text-[#A2552B] hover:text-[#7A3E1E] transition-colors cursor-pointer group/link"
              >
                <span>Learn More</span>
                <span className="text-xs group-hover/link:translate-x-0.5 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Stats / Specifications Card */}
        <div className="bg-white rounded-2xl border border-stone-200/80 p-4 sm:p-5 shadow-xs mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
          <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-3 first:pt-0 first:px-0">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#A2552B]/20 flex items-center justify-center text-[#A2552B] shrink-0">
              <PlaneTakeoff className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-400 block">
                AIRPORT CATEGORY
              </span>
              <span className="text-sm sm:text-[15px] font-bold text-stone-900 block">
                International Major
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#A2552B]/20 flex items-center justify-center text-[#A2552B] shrink-0">
              <Mountain className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-400 block">
                AERODROME ELEVATION
              </span>
              <span className="text-sm sm:text-[15px] font-bold text-stone-900 block">
                342 ft (104 m) AMSL
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#A2552B]/20 flex items-center justify-center text-[#A2552B] shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-400 block">
                OPERATING HOURS
              </span>
              <span className="text-sm sm:text-[15px] font-bold text-stone-900 block">
                24 Hours / 7 Days
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#A2552B]/20 flex items-center justify-center text-[#A2552B] shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-400 block">
                TOTAL AIRPORT CAMPUS
              </span>
              <span className="text-sm sm:text-[15px] font-bold text-stone-900 block">
                375+ Acres
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. SECTION 02 / TECHNICAL CAPABILITIES                    */}
      {/* Placed directly on the page background (No separate card) */}
      {/* ======================================================== */}
      <section id="infrastructure" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 scroll-mt-20">
        {/* Top Split: Text on Left, Terminal Exterior Banner on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-8 h-[2px] bg-[#A2552B] inline-block" />
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#A2552B]">
                02 / TECHNICAL CAPABILITIES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-stone-900 tracking-tight leading-[1.15] mb-4">
              Airport Infrastructure & Technical Facilities
            </h2>

            <p className="text-stone-600 text-sm sm:text-[15px] leading-relaxed">
              From the elevated tabletop runway to integrated international concourses and automated radar installations, discover the aeronautical and landside infrastructure powering Calicut International Airport.
            </p>
          </div>

          {/* Right Column: Terminal Under Blue Skies Banner Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-stone-200/60 aspect-[16/9] w-full bg-stone-900">
              <img
                src="/Modern Airport Terminal Under Blue Skies.png"
                alt="Calicut International Airport Terminal Infrastructure"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* 2x2 Infrastructure Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 sm:mt-10">
          {/* Card 1: Runway 10/28 & Airfield Specifications */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs flex flex-col sm:flex-row items-start gap-5 hover:border-[#A2552B]/40 hover:shadow-sm transition-all group">
            <div className="w-full sm:w-[150px] md:w-[165px] h-[150px] sm:h-full min-h-[160px] rounded-xl overflow-hidden shrink-0 border border-stone-100 bg-stone-100">
              <img
                src="/Jetliner Approaching the Runway.png"
                alt="Runway 10/28 & Airfield Specifications"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-md bg-[#FAF7F2] border border-[#A2552B]/20 flex items-center justify-center text-[#A2552B]">
                    <Plane className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#A2552B]/10 text-[#A2552B] tracking-wider">
                    AIRSIDE
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-stone-500">
                  2,860 m × 45 m (9,383 ft)
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-1.5">
                Runway 10/28 & Airfield Specifications
              </h3>

              <p className="text-xs text-stone-600 leading-relaxed mb-3.5">
                Constructed as an elevated tabletop runway on Karipur hill, Runway 10/28 features comprehensive safety overrun zones (RESA) at both ends meeting international ICAO Annex 14 criteria.
              </p>

              <div className="space-y-1.5">
                <div className="flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A2552B] shrink-0 mt-0.5" />
                  <span>Category-I Instrument Landing System (ILS) for Runway 28 & 10</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A2552B] shrink-0 mt-0.5" />
                  <span>Advanced DVOR/DME ground navigation and Doppler radar aids</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A2552B] shrink-0 mt-0.5" />
                  <span>High-intensity runway edge, threshold, and touchdown zone lighting (PAPI)</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A2552B] shrink-0 mt-0.5" />
                  <span>Runway End Safety Areas (RESA) measuring 240 m × 90 m on both thresholds</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Passenger Terminal Complexes (T1 & T2) */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs flex flex-col sm:flex-row items-start gap-5 hover:border-[#A2552B]/40 hover:shadow-sm transition-all group">
            <div className="w-full sm:w-[150px] md:w-[165px] h-[150px] sm:h-full min-h-[160px] rounded-xl overflow-hidden shrink-0 border border-stone-100 bg-stone-100">
              <img
                src="/Golden Hour Airport Lounge.png"
                alt="Passenger Terminal Complexes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-md bg-[#FAF7F2] border border-[#A2552B]/20 flex items-center justify-center text-[#A2552B]">
                    <Building2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#A2552B]/10 text-[#A2552B] tracking-wider">
                    TERMINAL
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-stone-500">
                  42,000+ sq. metres combined
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-1.5">
                Passenger Terminal Complexes (T1 & T2)
              </h3>

              <p className="text-xs text-stone-600 leading-relaxed mb-3.5">
                Separate dedicated terminals for domestic and international passenger operations equipped with centralized climate control, energy-efficient LED systems, and spacious concourses.
              </p>

              <div className="space-y-1.5">
                <div className="flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A2552B] shrink-0 mt-0.5" />
                  <span>Terminal 1 (Domestic Departures & Arrivals): 12,000 sq m ~800 peak passengers</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A2552B] shrink-0 mt-0.5" />
                  <span>Terminal 2 (International Departures & Arrivals): 30,000 sq m ~2,200 peak passengers</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A2552B] shrink-0 mt-0.5" />
                  <span>48 Multi-airline Check-in Counters with Common Use Terminal Equipment (CUTE)</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A2552B] shrink-0 mt-0.5" />
                  <span>7 Boarding gates with 3 passenger boarding aerobridges and remote bus gates</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: CNS / Air Traffic Management (ATM) */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs flex flex-col sm:flex-row items-start gap-5 hover:border-[#A2552B]/40 hover:shadow-sm transition-all group">
            <div className="w-full sm:w-[150px] md:w-[165px] h-[150px] sm:h-full min-h-[160px] rounded-xl overflow-hidden shrink-0 border border-stone-100 bg-stone-100">
              <img
                src="/Modern Airport Tower and Landing Jet.png"
                alt="Air Traffic Management"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-md bg-[#FAF7F2] border border-[#A2552B]/20 flex items-center justify-center text-[#A2552B]">
                    <Radio className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#A2552B]/10 text-[#A2552B] tracking-wider">
                    CNS/ATM
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-stone-500">
                  24/7 Approach & Tower Control
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-1.5">
                CNS / Air Traffic Management (ATM)
              </h3>

              <p className="text-xs text-stone-600 leading-relaxed mb-3.5">
                Airports Authority of India air traffic controllers manage the Kozhikode Terminal Control Area (TMA) using state-of-the-art Communications, Navigation, and Surveillance systems.
              </p>

              <div className="space-y-1.5">
                <div className="flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A2552B] shrink-0 mt-0.5" />
                  <span>Monopulse Secondary Surveillance Radar (MSSR) with integrated ADS-B</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A2552B] shrink-0 mt-0.5" />
                  <span>Automated Weather Observing System (AWOS) with digital RVR sensors</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A2552B] shrink-0 mt-0.5" />
                  <span>Dedicated VHF Air-to-Ground multi-channel redundant communication towers</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A2552B] shrink-0 mt-0.5" />
                  <span>Advanced Surface Movement Guidance and Control System (A-SMGCS)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Integrated Air Cargo Logistics Terminal */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs flex flex-col sm:flex-row items-start gap-5 hover:border-[#A2552B]/40 hover:shadow-sm transition-all group">
            <div className="w-full sm:w-[150px] md:w-[165px] h-[150px] sm:h-full min-h-[160px] rounded-xl overflow-hidden shrink-0 border border-stone-100 bg-stone-100">
              <img
                src="/Modern Airport Apron with Global Airliners.png"
                alt="Air Cargo Logistics Terminal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-md bg-[#FAF7F2] border border-[#A2552B]/20 flex items-center justify-center text-[#A2552B]">
                    <Boxes className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#A2552B]/10 text-[#A2552B] tracking-wider">
                    CARGO
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-stone-500">
                  18,500 MT / annum capacity
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-1.5">
                Integrated Air Cargo Logistics Terminal
              </h3>

              <p className="text-xs text-stone-600 leading-relaxed mb-3.5">
                Key export gateway for Northern Kerala and Malabar producers, handling perishables, high-grade spices, seafood, confectionery, and industrial machinery destined for Middle Eastern markets.
              </p>

              <div className="space-y-1.5">
                <div className="flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A2552B] shrink-0 mt-0.5" />
                  <span>State-of-the-art temperature-controlled cold rooms (+2°C to +8°C & sub-zero)</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A2552B] shrink-0 mt-0.5" />
                  <span>Dedicated Plant Quarantine and Animal Quarantine inspection stations</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A2552B] shrink-0 mt-0.5" />
                  <span>Bonded export cargo holding concourses with automated weighing systems</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A2552B] shrink-0 mt-0.5" />
                  <span>Direct landside truck loading docks with 24/7 dedicated customs appraisal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Terminal Maps Banner */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#A2552B]/20 flex items-center justify-center text-[#A2552B] shrink-0">
              <Map className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-stone-900">
                Explore Interactive Terminal Maps
              </div>
              <div className="text-xs text-stone-500 mt-0.5">
                View floor layouts, gate positions, parking lanes, and check-in zones for Terminal 1 & 2.
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigateToAirportMap?.('overview')}
            className="px-5 py-2.5 bg-[#A2552B] hover:bg-[#8B4420] text-white font-bold text-xs rounded-xl transition-colors shrink-0 inline-flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>View Terminal 1 & 2 Map</span>
            <span>→</span>
          </button>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. SECTION 03 / REGULATORY FRAMEWORK (SECURITY & SAFETY)  */}
      {/* Placed directly on the page background (No separate card) */}
      {/* ======================================================== */}
      <section id="security" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 scroll-mt-20">
        <div className="flex items-center gap-2.5 mb-3.5">
          <span className="w-8 h-[2px] bg-[#A2552B] inline-block" />
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#A2552B]">
            03 / REGULATORY FRAMEWORK
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-stone-900 tracking-tight leading-[1.15] mb-3">
          Aviation Security & Passenger Safety Ecosystem
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mb-8 max-w-3xl leading-relaxed">
          Calicut International Airport maintains stringent multi-tier security standards under the Bureau of Civil Aviation Security (BCAS) and the Central Industrial Security Force (CISF), ensuring uncompromising safety for millions of air travelers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SECURITY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-stone-200/80 p-6 bg-white hover:border-[#A2552B]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#A2552B]/10 text-[#A2552B] tracking-wider">
                    {pillar.badge}
                  </span>
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-wide">
                    {pillar.role}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  {pillar.agency}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 space-y-2">
                {pillar.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2 text-xs text-stone-700">
                    <Shield className="w-3.5 h-3.5 text-[#A2552B] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Security Standards Callout Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#E07A5F] shrink-0">
              <HardHat className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-white">BCAS Certified Aerodrome Security Programme (ASP)</div>
              <div className="text-xs text-stone-300 mt-0.5">
                Automated Explosive Detection (EDS Level-4) & In-line Baggage Screening systems deployed 24/7.
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigateToProcedures?.()}
            className="px-5 py-2.5 bg-[#A2552B] hover:bg-[#8B4420] text-white font-bold text-xs rounded-xl transition-colors shrink-0 cursor-pointer shadow-md"
          >
            Passenger Security Rules
          </button>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. SECTION 04 / COMMERCIAL AVIATION (AIRLINES & CARRIERS) */}
      {/* Placed directly on the page background (No separate card) */}
      {/* ======================================================== */}
      <section id="carriers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 scroll-mt-20">
        <div className="flex items-center gap-2.5 mb-3.5">
          <span className="w-8 h-[2px] bg-[#A2552B] inline-block" />
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#A2552B]">
            04 / COMMERCIAL AVIATION
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-stone-900 tracking-tight leading-[1.15] mb-3">
          Scheduled Air Carriers & Global Alliances
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mb-8 max-w-3xl leading-relaxed">
          Calicut International Airport hosts 12 premier scheduled domestic and international airlines connecting the Malabar diaspora across key aviation hubs in the Middle East and major Indian metropolitan cities.
        </p>

        {/* 12 Carriers Grid with ONLY Logos (No redundant text name) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CARRIER_PARTNERS.map((carrier, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-stone-200/80 hover:border-[#A2552B]/40 bg-white shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Official Airline Logo & IATA Code Badge (NO text name) */}
                <div className="flex items-center justify-between gap-3 min-h-[46px] mb-3">
                  <div className="h-10 flex items-center">
                    <AirlineLogo airline={carrier.name} className="h-8 sm:h-9 w-auto max-w-[160px]" />
                  </div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200/60 shrink-0">
                    {carrier.code}
                  </span>
                </div>

                <div className="text-[11px] font-bold text-[#A2552B] mb-2 uppercase tracking-wide">
                  {carrier.type}
                </div>

                <div className="text-xs text-stone-600 space-y-1.5">
                  <div>
                    <span className="font-semibold text-stone-500">Hub: </span>
                    <span className="text-stone-800">{carrier.hub}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-stone-500">Key Routes: </span>
                    <span className="text-stone-700">{carrier.destinations}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-400 font-medium text-[11px]">Scheduled Carrier</span>
                <button
                  type="button"
                  onClick={() => onOpenAirlineDetails?.()}
                  className="text-[#A2552B] hover:text-[#8B4420] font-bold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Flight Counters</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Ground Handling & Cargo Infrastructure Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-white border border-stone-200/80 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-base font-bold text-stone-900 mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A2552B]" />
              <span>Ground Handling & Ramp Operations</span>
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Ground handling services are managed by Air India Airport Services Ltd (AIASL) and Bird Worldwide Flight Services (BWFS), offering comprehensive passenger assistance, baggage makeup, aircraft pushback, and marshalling.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-stone-900 mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A2552B]" />
              <span>Aviation Refuelling Infrastructure</span>
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Dedicated Aviation Turbine Fuel (ATF) hydrants and refuelling bowsers are operated 24/7 by Indian Oil Corporation (IOCL) and Bharat Petroleum (BPCL) with extensive on-site storage tanks and quality certification laboratories.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. SECTION 05 / STATUTORY DISCLOSURES (GOVERNANCE & RTI)  */}
      {/* Placed directly on the page background (No separate card) */}
      {/* ======================================================== */}
      <section id="governance" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 scroll-mt-20">
        <div className="flex items-center gap-2.5 mb-3.5">
          <span className="w-8 h-[2px] bg-[#A2552B] inline-block" />
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#A2552B]">
            05 / STATUTORY DISCLOSURES
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-stone-900 tracking-tight leading-[1.15] mb-3">
          Corporate Administration & RTI Governance
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mb-8 max-w-3xl leading-relaxed">
          As a premier public-sector installation under the Ministry of Civil Aviation, Calicut International Airport adheres to stringent corporate accountability, transparency, and statutory citizen-right protocols under the Right to Information Act, 2005.
        </p>

        {/* RTI Act Callout Card */}
        <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#A2552B] text-white flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-stone-900">Right to Information Act, 2005</div>
              <div className="text-xs text-stone-600 mt-1 max-w-xl">
                Citizens may submit RTI inquiries or appeals to the designated Public Information Officer (PIO) and First Appellate Authority (FAA) for all official aerodrome matters.
              </div>
            </div>
          </div>
          <a
            href="https://rtionline.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl transition-colors shrink-0 inline-flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <span>RTI Online Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Executive Leadership & Statutory Officers Directory */}
        <h3 className="text-lg font-bold text-stone-900 mb-4">
          Key Departmental Leadership & Public Information Officers
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {LEADERSHIP_CONTACTS.map((officer, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-stone-200/80 bg-white hover:border-[#A2552B]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#A2552B] mb-1">
                  {officer.department}
                </div>
                <h4 className="text-base font-black text-stone-900 mb-2">
                  {officer.designation}
                </h4>
                <div className="text-xs text-stone-500 mb-3 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span>{officer.office}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <a
                  href={`mailto:${officer.email}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-stone-700 hover:text-[#A2552B] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#A2552B]" />
                  <span>{officer.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Grievance Redressal Banner */}
        <div className="mt-8 p-5 rounded-2xl border border-stone-200/80 bg-white shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-stone-900">Passenger Grievance Redressal & AirSewa</div>
            <div className="text-xs text-stone-500">Submit operational feedback, airline complaints, or facilities queries via the Ministry of Civil Aviation AirSewa portal</div>
          </div>
          <a
            href="https://airsewa.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-stone-300 hover:border-[#A2552B] text-stone-700 hover:text-[#A2552B] font-bold text-xs rounded-xl transition-colors shrink-0 inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>AirSewa Portal</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </section>

      {/* Global Footer */}
      <FooterSection />
    </div>
  );
};

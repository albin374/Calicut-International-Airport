import React, { useState } from 'react';
import { 
  Bus, 
  Train, 
  Car, 
  ChevronRight, 
  Clock, 
  MapPin, 
  DollarSign, 
  ShieldCheck, 
  ExternalLink, 
  X, 
  Phone
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { FooterSection } from '../components/FooterSection';
import { TRANSPORT_MODES, TransportMode, CAR_CITY_ROUTES } from './howToReachData';

export interface HowToReachPageProps {
  onNavigateHome: () => void;
  onNavigateToProcedures: () => void;
  onNavigateToAirportMap?: (tab?: 'overview' | 'T1' | 'T2' | 'parking') => void;
  onOpenFlightStatus?: (type?: 'arrival' | 'departure') => void;
  onOpenAirlineDetails?: () => void;
  onNavigateToFacilities?: () => void;
  onNavigateToShopDine?: () => void;
  onNavigateToTouristAttractions?: () => void;
  onNavigateToCorporate?: () => void;
  onNavigateToContact?: () => void;
}

export const HowToReachPage: React.FC<HowToReachPageProps> = ({
  onNavigateHome,
  onNavigateToProcedures,
  onNavigateToAirportMap,
  onOpenFlightStatus,
  onOpenAirlineDetails,
  onNavigateToFacilities,
  onNavigateToShopDine,
  onNavigateToTouristAttractions,
  onNavigateToCorporate,
  onNavigateToContact,
}) => {
  const [activeTab, setActiveTab] = useState<'bus' | 'train' | 'car'>('bus');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const currentMode: TransportMode = TRANSPORT_MODES[activeTab];

  return (
    <div className="w-full min-h-screen m-0 p-0 font-sans selection:bg-[#A2552B] selection:text-white bg-white text-stone-800 flex flex-col justify-between">
      
      {/* Top Navbar with highest z-index so dropdowns stay on top */}
      <div className="relative z-50">
        <Navbar 
          onNavigateHome={onNavigateHome}
          onNavigateToProcedures={onNavigateToProcedures}
          onNavigateToHowToReach={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onNavigateToAirportMap={onNavigateToAirportMap}
          onOpenFlightStatus={onOpenFlightStatus}
          onOpenAirlineDetails={onOpenAirlineDetails}
          onNavigateToFacilities={onNavigateToFacilities}
          onNavigateToShopDine={onNavigateToShopDine}
          onNavigateToTouristAttractions={onNavigateToTouristAttractions}
          onNavigateToCorporate={onNavigateToCorporate}
          onNavigateToContact={onNavigateToContact}
          isHowToReachPage={true}
        />
      </div>

      {/* ======================================================== */}
      {/* 1. TOP HERO BANNER: Under Blue Skies Terminal Image      */}
      {/* ======================================================== */}
      <section className="relative z-10 w-full min-h-[360px] sm:min-h-[400px] lg:min-h-[440px] flex flex-col justify-between bg-slate-900 select-none pb-14 sm:pb-16">
        
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/Modern Airport Terminal Under Blue Skies.png"
            alt="Calicut International Airport Terminal Under Blue Skies"
            className="w-full h-full object-cover object-center filter brightness-95"
          />
          {/* Subtle gradient overlay to make typography and top navigation pop */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/55 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 via-[45%] to-transparent pointer-events-none" />
        </div>

        {/* HERO TITLE & BREADCRUMB */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-14">
          
          {/* Breadcrumb: Home > Plan Your Journey > How to Reach */}
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
            <span className="text-[#E8A57A] font-semibold">How to Reach</span>
          </div>

          {/* Headline: How to Reach */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-white mb-3 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            How to <span className="text-[#E8A57A]">Reach</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-2xl font-normal leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            Explore the best and most convenient ways to reach Calicut International Airport.
          </p>

        </div>

      </section>

      {/* ======================================================== */}
      {/* 2. SECTION AFTER BANNER: CURVED WHITE CONTAINER          */}
      {/* Curved top edge overlapping banner (-mt-10 sm:-mt-14)    */}
      {/* Set to z-20 so white container sits cleanly OVER banner  */}
      {/* ======================================================== */}
      <section className="relative z-20 -mt-10 sm:-mt-14 rounded-t-[36px] sm:rounded-t-[44px] bg-white border-t border-white/60 shadow-[0_-12px_30px_rgba(0,0,0,0.08)] pt-10 sm:pt-14 pb-16 flex-1">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
            
            {/* ==================================================== */}
            {/* LEFT SIDE IMAGE SECTION: Bus / Train / Car           */}
            {/* Same consistent height across all modes (no stretch) */}
            {/* ==================================================== */}
            <div className="relative w-full lg:w-[320px] xl:w-[350px] shrink-0 h-[540px] sm:h-[620px] lg:h-[700px] lg:sticky lg:top-24 rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg border border-stone-200/90 flex flex-col justify-between pt-10 sm:pt-14 pb-10 px-5 sm:px-6 bg-slate-900">
              
              {/* Dynamic Image */}
              <img
                key={currentMode.image}
                src={currentMode.image}
                alt={currentMode.imageCaption}
                className={`absolute inset-0 w-full h-full object-cover filter brightness-95 transition-all duration-500 ${
                  activeTab === 'bus' ? 'object-bottom' : 'object-center'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 pointer-events-none" />

              {/* FLOATING 3-BUTTON SIDEBAR MENU */}
              <div className="relative z-20 w-full max-w-[250px] mx-auto rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.35)] border border-white/80 bg-white">
                
                {/* 1. BUS TAB */}
                <button
                  type="button"
                  onClick={() => setActiveTab('bus')}
                  className={`w-full flex items-center justify-between px-5 py-3.5 transition-colors cursor-pointer select-none ${
                    activeTab === 'bus'
                      ? 'bg-[#A2552B] text-white font-bold'
                      : 'bg-white text-stone-800 hover:bg-[#FAF7F2] font-semibold'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Bus className={`w-5 h-5 shrink-0 ${activeTab === 'bus' ? 'text-white' : 'text-[#A2552B]'}`} />
                    <span className="text-sm tracking-wide">Bus</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 ${activeTab === 'bus' ? 'text-white' : 'text-stone-400'}`} />
                </button>

                {/* 2. TRAIN TAB */}
                <button
                  type="button"
                  onClick={() => setActiveTab('train')}
                  className={`w-full flex items-center justify-between px-5 py-3.5 transition-colors cursor-pointer select-none border-t border-stone-100 ${
                    activeTab === 'train'
                      ? 'bg-[#A2552B] text-white font-bold'
                      : 'bg-white text-stone-800 hover:bg-[#FAF7F2] font-semibold'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Train className={`w-5 h-5 shrink-0 ${activeTab === 'train' ? 'text-white' : 'text-[#A2552B]'}`} />
                    <span className="text-sm tracking-wide">Train</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 ${activeTab === 'train' ? 'text-white' : 'text-stone-400'}`} />
                </button>

                {/* 3. CAR TAB */}
                <button
                  type="button"
                  onClick={() => setActiveTab('car')}
                  className={`w-full flex items-center justify-between px-5 py-3.5 transition-colors cursor-pointer select-none border-t border-stone-100 ${
                    activeTab === 'car'
                      ? 'bg-[#A2552B] text-white font-bold'
                      : 'bg-white text-stone-800 hover:bg-[#FAF7F2] font-semibold'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Car className={`w-5 h-5 shrink-0 ${activeTab === 'car' ? 'text-white' : 'text-[#A2552B]'}`} />
                    <span className="text-sm tracking-wide">Car</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 ${activeTab === 'car' ? 'text-white' : 'text-stone-400'}`} />
                </button>

              </div>

              {/* Bottom spacer so vehicle/platform in the image is clear */}
              <div className="relative z-10 h-32 sm:h-44 pointer-events-none" />

            </div>

            {/* ==================================================== */}
            {/* RIGHT SIDE: Content, Features, Google Map & Banner   */}
            {/* ==================================================== */}
            <div className="flex-1 w-full space-y-8">
              
              {/* Mode Header Title Section */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A2552B]">
                    {currentMode.tag}
                  </span>
                  <span className="w-8 h-[2px] bg-[#E8A57A] rounded-full inline-block" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-sans font-bold text-stone-900 tracking-tight mb-2.5">
                  {currentMode.headline}
                </h2>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-3xl">
                  {currentMode.overview}
                </p>
              </div>

              {/* Routes Area: City Cards for Car, Single Route + Features for Bus/Train */}
              {activeTab === 'car' ? (
                <div className="space-y-4 sm:space-y-5">
                  {CAR_CITY_ROUTES.map((route, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col md:flex-row items-stretch"
                    >
                      {/* Left: Info & View Route button */}
                      <div className="p-5 sm:p-6 md:w-[320px] lg:w-[350px] shrink-0 flex flex-col justify-between gap-4">
                        <div className="flex items-start gap-3.5">
                          {/* Circular Car Badge */}
                          <div className="w-11 h-11 rounded-full bg-[#FAF2EC] border border-[#E8CEBE] text-[#A2552B] flex items-center justify-center shrink-0 shadow-2xs">
                            <Car className="w-5 h-5" />
                          </div>

                          {/* Title & Stats */}
                          <div className="space-y-2">
                            <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-tight">
                              {route.title}
                            </h3>
                            <div className="space-y-1.5 text-xs sm:text-[13px] text-stone-700">
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-[#A2552B] shrink-0" />
                                <span>
                                  <strong className="font-semibold text-stone-800">Distance :</strong> {route.distance}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[#A2552B] shrink-0" />
                                <span>
                                  <strong className="font-semibold text-stone-800">Travel time :</strong> {route.duration}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* View Route Button */}
                        <div className="pt-1">
                          <a
                            href={route.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#A2552B] hover:bg-[#8B4420] text-white text-xs sm:text-[13px] font-bold shadow-xs hover:shadow-sm transition-all duration-150 cursor-pointer"
                          >
                            <span>View Route</span>
                            <span className="text-sm font-bold">→</span>
                          </a>
                        </div>
                      </div>

                      {/* Right: Interactive Route Map Embed */}
                      <div className="flex-1 min-h-[190px] sm:min-h-[210px] md:min-h-[190px] bg-stone-100 border-t md:border-t-0 md:border-l border-stone-200/90 relative overflow-hidden">
                        <iframe
                          src={route.embedMapUrl}
                          title={`Route from ${route.city} to Calicut International Airport`}
                          className="w-full h-full min-h-[190px] border-0 select-none"
                          loading="lazy"
                          allowFullScreen
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Grid: 3 Features & Route Map for Bus and Train */
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                  
                  {/* 3 Features */}
                  <div className="xl:col-span-5 space-y-6">
                    {currentMode.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-4 group">
                        
                        <div className="w-11 h-11 rounded-full bg-[#FAF2EC] border border-[#E8CEBE] text-[#A2552B] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#A2552B] group-hover:text-white transition-colors duration-200">
                          {feat.icon === 'clock' && <Clock className="w-5 h-5" />}
                          {feat.icon === 'map-pin' && <MapPin className="w-5 h-5" />}
                          {feat.icon === 'dollar' && <DollarSign className="w-5 h-5" />}
                          {feat.icon === 'shield' && <ShieldCheck className="w-5 h-5" />}
                        </div>

                        <div>
                          <h4 className="font-bold text-stone-900 text-sm sm:text-[15px] mb-1">
                            {feat.title}
                          </h4>
                          <p className="text-xs text-stone-600 leading-relaxed">
                            {feat.description}
                          </p>
                        </div>

                      </div>
                    ))}
                  </div>

                  {/* Embedded Real Google Maps Route */}
                  <div className="xl:col-span-7 bg-[#FAF7F2] rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden flex flex-col">
                    
                    {/* Map Header Bar */}
                    <div className="px-5 py-3.5 bg-white border-b border-stone-200 flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs sm:text-[13px] font-bold text-stone-900">
                        Route from {currentMode.routeInfo.origin} to {currentMode.routeInfo.destination}
                      </span>
                      <a
                        href={currentMode.routeInfo.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#A2552B] hover:text-[#8B4420] inline-flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        <span>View on Google Maps</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Route Origin & Destination Bar */}
                    <div className="px-5 py-3 bg-[#FAF7F2]/90 border-b border-stone-200/70 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-stone-800 font-semibold">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#A2552B]" />
                          <span>{currentMode.routeInfo.origin}</span>
                        </div>
                        <div className="flex items-center gap-2 text-stone-600">
                          <span className="w-2.5 h-2.5 rounded-full bg-stone-400" />
                          <span>{currentMode.routeInfo.destination}</span>
                        </div>
                      </div>

                      {/* Duration & Distance Pill */}
                      <div className="px-3.5 py-1.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs flex items-center gap-2">
                        {activeTab === 'bus' ? (
                          <Bus className="w-4 h-4 text-[#A2552B]" />
                        ) : activeTab === 'train' ? (
                          <Train className="w-4 h-4 text-[#A2552B]" />
                        ) : (
                          <Car className="w-4 h-4 text-[#A2552B]" />
                        )}
                        <div>
                          <span className="font-bold text-stone-900 text-xs block leading-tight">
                            {currentMode.routeInfo.duration}
                          </span>
                          <span className="text-[10px] text-stone-500">
                            {currentMode.routeInfo.distance}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Real Interactive Google Maps Embed (Directions Route) */}
                    <div className="relative w-full h-[320px] sm:h-[370px] bg-stone-100 overflow-hidden">
                      <iframe
                        key={activeTab}
                        src={currentMode.routeInfo.embedMapUrl}
                        title={`Google Maps Directions from ${currentMode.routeInfo.origin} to ${currentMode.routeInfo.destination}`}
                        className="w-full h-full border-0 select-none"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>

                  </div>

                </div>
              )}

              {/* Bottom Callout / Action Banner */}
              <div className="rounded-2xl bg-gradient-to-r from-[#FBF4EE] via-[#F8ECE3] to-[#F4DFD1] p-4 sm:p-5 border border-[#EACFBE] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
                
                {/* Left: Icon & Description */}
                <div className="flex items-center gap-3.5 text-left w-full sm:w-auto">
                  <div className="w-11 h-11 rounded-full bg-[#A2552B] text-white flex items-center justify-center shadow-xs shrink-0">
                    {activeTab === 'bus' ? (
                      <Bus className="w-5 h-5" />
                    ) : activeTab === 'train' ? (
                      <Train className="w-5 h-5" />
                    ) : (
                      <Car className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-sans text-sm sm:text-base font-bold text-stone-900 leading-tight">
                      {currentMode.bottomBanner.title}
                    </h4>
                    <p className="text-xs text-stone-600 mt-0.5 max-w-xl">
                      {currentMode.bottomBanner.description}
                    </p>
                  </div>
                </div>

                {/* Right: Terracotta Action Button */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#A2552B] hover:bg-[#8B4420] text-white text-xs sm:text-[13px] font-bold tracking-wide flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer hover:shadow-md shrink-0"
                >
                  <span>{currentMode.bottomBanner.buttonText}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* TIMETABLE & FARES INTERACTIVE MODAL                      */}
      {/* ======================================================== */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-5 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#A2552B] flex items-center justify-center text-white">
                  {activeTab === 'bus' ? <Bus className="w-5 h-5" /> : activeTab === 'train' ? <Train className="w-5 h-5" /> : <Car className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">
                    {currentMode.bottomBanner.title}
                  </h3>
                  <p className="text-xs text-white/70">
                    Schedules, routes and ticketing information
                  </p>
                </div>
              </div>
              <button 
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-stone-700">
              {activeTab === 'bus' && (
                <div className="space-y-4">
                  <h4 className="font-bold text-stone-900 text-base">KSRTC Airport Feeder Bus Schedule</h4>
                  <div className="border border-stone-200 rounded-xl overflow-hidden">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-stone-50 border-b border-stone-200 font-bold text-stone-800">
                        <tr>
                          <th className="p-3">Route / From</th>
                          <th className="p-3">Frequency</th>
                          <th className="p-3">First Bus</th>
                          <th className="p-3">Last Bus</th>
                          <th className="p-3">Fare</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        <tr>
                          <td className="p-3 font-semibold">Mofussil Stand (Kozhikode)</td>
                          <td className="p-3">Every 30 mins</td>
                          <td className="p-3">05:30 AM</td>
                          <td className="p-3">11:00 PM</td>
                          <td className="p-3 font-bold text-[#A2552B]">₹55</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Kondotty Bus Stand</td>
                          <td className="p-3">Every 15 mins</td>
                          <td className="p-3">05:00 AM</td>
                          <td className="p-3">11:45 PM</td>
                          <td className="p-3 font-bold text-[#A2552B]">₹20</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Manjeri KSRTC Depot</td>
                          <td className="p-3">Every 45 mins</td>
                          <td className="p-3">06:00 AM</td>
                          <td className="p-3">10:30 PM</td>
                          <td className="p-3 font-bold text-[#A2552B]">₹40</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-stone-500 italic">
                    * Fares and timings are subject to change. For live tracking, visit the official KSRTC portal.
                  </p>
                </div>
              )}

              {activeTab === 'train' && (
                <div className="space-y-4">
                  <h4 className="font-bold text-stone-900 text-base">Key Southern Railway Junctions Near Airport</h4>
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-stone-900">Kozhikode Main (CLT)</div>
                        <div className="text-xs text-stone-500">Distance: 26 km • Connects All Major Indian Metros</div>
                      </div>
                      <span className="text-xs font-bold text-[#A2552B] bg-[#FAF2EC] px-3 py-1.5 rounded-full">
                        ~45 min taxi
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-stone-900">Feroke Railway Station (FK)</div>
                        <div className="text-xs text-stone-500">Distance: 18 km • Local & Express Trains</div>
                      </div>
                      <span className="text-xs font-bold text-[#A2552B] bg-[#FAF2EC] px-3 py-1.5 rounded-full">
                        ~30 min taxi
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-stone-900">Parappanangadi (PGI)</div>
                        <div className="text-xs text-stone-500">Distance: 16 km • Coastal Rail Hub</div>
                      </div>
                      <span className="text-xs font-bold text-[#A2552B] bg-[#FAF2EC] px-3 py-1.5 rounded-full">
                        ~25 min taxi
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'car' && (
                <div className="space-y-4">
                  <h4 className="font-bold text-stone-900 text-base">Official Airport Prepaid Taxi Fare Chart</h4>
                  <div className="border border-stone-200 rounded-xl overflow-hidden">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-stone-50 border-b border-stone-200 font-bold text-stone-800">
                        <tr>
                          <th className="p-3">Destination</th>
                          <th className="p-3">Distance</th>
                          <th className="p-3">Non-AC Sedan</th>
                          <th className="p-3">AC Sedan / SUV</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        <tr>
                          <td className="p-3 font-semibold">Kozhikode City (Mananchira)</td>
                          <td className="p-3">28 km</td>
                          <td className="p-3">₹750</td>
                          <td className="p-3 font-bold text-[#A2552B]">₹900</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Kozhikode Railway Station</td>
                          <td className="p-3">26 km</td>
                          <td className="p-3">₹700</td>
                          <td className="p-3 font-bold text-[#A2552B]">₹850</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Malappuram Town</td>
                          <td className="p-3">25 km</td>
                          <td className="p-3">₹650</td>
                          <td className="p-3 font-bold text-[#A2552B]">₹800</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF7F2] border border-stone-200 text-xs flex items-center gap-2 text-stone-700">
                    <Phone className="w-4 h-4 text-[#A2552B] shrink-0" />
                    <span>24x7 Airport Police Prepaid Taxi Booth Helpdesk: <strong>+91 495 271 2345</strong></span>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex justify-end">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* FOOTER SECTION                                           */}
      {/* ======================================================== */}
      <FooterSection />

    </div>
  );
};

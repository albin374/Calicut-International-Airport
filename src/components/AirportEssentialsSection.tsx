import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, X, Phone, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export interface EssentialCard {
  id: string;
  title: string;
  description: string;
  image: string;
  codeBadge: string;
  statusBadge: string;
  categoryTag: string;
  details: {
    location: string;
    timings: string;
    contact?: string;
    features: string[];
  };
}

export const ESSENTIAL_CARDS: EssentialCard[] = [
  {
    id: 'money-exchange',
    title: 'Money Exchange',
    description: 'Quick and reliable currency exchange services.',
    image: '/Modern Airport Money Exchange Counter.png',
    codeBadge: 'CCJ · FOREX',
    statusBadge: 'AAI CERTIFIED',
    categoryTag: 'FINANCIAL SERVICES',
    details: {
      location: 'Terminal 1 & Terminal 2 — Arrival & Departure Halls',
      timings: '24 Hours / 7 Days a week',
      contact: '+91 483 2712630 (Ext. 204)',
      features: [
        'Major currencies supported: AED, SAR, USD, EUR, GBP, QAR, OMR',
        'Official authorized RBI / FEMA exchange rates',
        'International debit & credit card cash advances',
        'Multi-currency travel forex card reloading available'
      ]
    }
  },
  {
    id: 'baggage-services',
    title: 'Baggage Services',
    description: 'Baggage wrapping and porter assistance for a worry-free journey.',
    image: '/Baggage Carousel in Airport Terminal.png',
    codeBadge: 'CCJ · CARE',
    statusBadge: 'LOST & FOUND',
    categoryTag: 'PASSENGER ASSISTANCE',
    details: {
      location: 'T1 & T2 Check-in Concourse & Arrival Baggage Belts',
      timings: 'Operational with all scheduled flights',
      contact: 'Terminal Duty Officer: +91 483 2719491',
      features: [
        'Secure high-tensile plastic luggage wrapping counters',
        'Senior citizen & special assistance dedicated porters',
        '24/7 Lost & Found property tracking office',
        'Baggage weighing scale check stations before security'
      ]
    }
  },
  {
    id: 'parking-info',
    title: 'Parking Info',
    description: 'Convenient and secure parking for short and long stays.',
    image: '/Golden Hour Airport Departure Drive.png',
    codeBadge: 'CCJ · TERMINALS 1 & 2',
    statusBadge: 'FASTAG ACTIVE · 1,200+ SLOTS',
    categoryTag: 'GROUND TRANSPORTATION',
    details: {
      location: 'Opposite Domestic T1 & International T2 Gates',
      timings: 'Open 24/7 with automated FASTag entry lanes',
      contact: 'Parking Management Control: +91 483 2711005',
      features: [
        'Multi-level parking accommodating over 1,200 vehicles',
        'Automated FASTag contactless toll & ticketless payment',
        'Dedicated EV charging points (Fast DC & AC Type-2)',
        'Free 10-minute passenger pick-up / drop-off grace period'
      ]
    }
  },
  {
    id: 'medical-facilities',
    title: 'Medical Facilities',
    description: 'On-site medical assistance for your safety and well-being.',
    image: '/Airport Medical Assistance Sign.png',
    codeBadge: 'CCJ · HEALTH',
    statusBadge: '24/7 EMERGENCY',
    categoryTag: 'SAFETY & WELL-BEING',
    details: {
      location: 'T2 Ground Level & T1 Domestic Departures Area',
      timings: '24/7 Round-the-clock emergency care',
      contact: 'Airport Emergency Medical Hotline: +91 483 2712211',
      features: [
        'Fully equipped emergency medical inspection room',
        'Resident qualified doctors and paramedic nurses on duty',
        'Advanced life-support ambulance stationed on airside & landside',
        'Wheelchair assistance and automated external defibrillators (AED)'
      ]
    }
  },
  {
    id: 'wifi-connectivity',
    title: 'Wi-Fi Connectivity',
    description: 'Stay connected with high-speed Wi-Fi throughout the terminal.',
    image: '/Golden Hour Airport Lounge.png',
    codeBadge: 'CCJ · DIGITAL',
    statusBadge: 'FREE 45 MINS',
    categoryTag: 'AIRPORT AMENITIES',
    details: {
      location: 'All Domestic & International Gates, Lounges & Food Courts',
      timings: '24/7 Continuous uninterrupted access',
      contact: 'IT Helpdesk: CCJ-WiFi@aai.aero',
      features: [
        'Complimentary 45 minutes of ultra high-speed fiber internet',
        'Easy 2-step OTP verification for domestic & international SIMs',
        'Wi-Fi kiosks for passengers without mobile roaming SIMs',
        'High-capacity coverage across all boarding gates & seating zones'
      ]
    }
  }
];

export interface AirportEssentialsSectionProps {
  onServiceSelect?: (card: EssentialCard) => void;
}

export const AirportEssentialsSection: React.FC<AirportEssentialsSectionProps> = ({
  onServiceSelect,
}) => {
  const [selectedService, setSelectedService] = useState<EssentialCard | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (card: EssentialCard) => {
    setSelectedService(card);
    if (onServiceSelect) {
      onServiceSelect(card);
    }
  };

  const moneyCard = ESSENTIAL_CARDS[0];
  const baggageCard = ESSENTIAL_CARDS[1];
  const parkingCard = ESSENTIAL_CARDS[2];
  const medicalCard = ESSENTIAL_CARDS[3];
  const wifiCard = ESSENTIAL_CARDS[4];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#FAF7F2] text-[#141414] py-16 sm:py-24 lg:py-28 select-none"
    >
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* ======================================================== */}
        {/* SECTION HEADER (Clean without side image)                */}
        {/* ======================================================== */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          
          <div className="max-w-4xl lg:max-w-5xl">
            {/* Index / Category Eyebrow: 03 / AIRPORT ESSENTIALS */}
            <div className="flex items-center gap-2.5 text-xs sm:text-[13px] tracking-[0.25em] font-medium text-[#555555] uppercase mb-4 select-none">
              <span className="font-bold text-[#A2552B]">03</span>
              <span className="text-stone-400">/</span>
              <span>AIRPORT ESSENTIALS</span>
            </div>

            {/* Main Headline: Exactly 2 lines */}
            <h2 className="font-sans text-3xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-bold text-[#121212] tracking-tight leading-[1.08] mb-4 select-none">
              <span className="block sm:whitespace-nowrap">The Little Things That Make</span>
              <span className="block text-[#A2552B]">Travel Easier</span>
            </h2>

            {/* Descriptive Subtitle */}
            <p className="text-[#4A4A4A] text-xs sm:text-sm lg:text-[15px] font-normal leading-relaxed max-w-xl">
              Essential services designed to make your journey through Calicut International Airport smoother, more comfortable and hassle-free.
            </p>
          </div>

          {/* Right Sub-text / Facility Badge */}
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A2552B] uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>24/7 Passenger Care Active</span>
          </div>

        </div>

        {/* ======================================================== */}
        {/* ENLARGED BENTO CARDS GRID (Matching Laptop Layout)       */}
        {/* 3 Columns: Left (2 cards), Center (tall parking card),   */}
        {/* Right (2 cards)                                          */}
        {/* ======================================================== */}
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 items-stretch">
          
          {/* ------------------------------------------------------ */}
          {/* LEFT COLUMN: Money Exchange & Baggage Services        */}
          {/* ------------------------------------------------------ */}
          <div className="w-full lg:w-[28.5%] flex flex-col gap-5 sm:gap-6 justify-between">
            
            {/* Card 1: Money Exchange */}
            <div 
              onClick={() => handleCardClick(moneyCard)}
              className={`group relative rounded-[26px] sm:rounded-[30px] overflow-hidden h-[290px] sm:h-[320px] lg:h-[330px] cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#A2552B]/15 hover:-translate-y-2 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              {/* Background Image with Zoom on Hover */}
              <img 
                src={moneyCard.image} 
                alt={moneyCard.title} 
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              {/* Dark Vignette Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 via-[48%] to-black/25 pointer-events-none" />
              
              {/* Diagonal Light Sheen Sweep on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform ease-out pointer-events-none z-20" />

              {/* Bottom Content Area */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 z-10">
                <div className="flex items-end justify-between gap-3">
                  <div className="flex-1 pr-1">
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#E0A985] uppercase block mb-1">
                      {moneyCard.categoryTag}
                    </span>
                    <h3 className="font-sans text-2xl sm:text-[26px] text-white font-semibold tracking-tight leading-snug mb-1.5 drop-shadow-sm">
                      {moneyCard.title}
                    </h3>
                    <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed font-sans max-w-[260px]">
                      {moneyCard.description}
                    </p>
                  </div>
                  {/* Terracotta Action Button */}
                  <button 
                    type="button"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#A2552B] group-hover:bg-[#8A411B] flex items-center justify-center text-white shrink-0 shadow-xl transition-all duration-300 group-hover:scale-115 group-hover:rotate-[-45deg] group-hover:shadow-[0_0_20px_rgba(162,85,43,0.6)] cursor-pointer"
                    aria-label={`View ${moneyCard.title}`}
                  >
                    <ArrowRight className="w-5 h-5 stroke-[2.2]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Baggage Services */}
            <div 
              onClick={() => handleCardClick(baggageCard)}
              className={`group relative rounded-[26px] sm:rounded-[30px] overflow-hidden h-[290px] sm:h-[320px] lg:h-[330px] cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#A2552B]/15 hover:-translate-y-2 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {/* Background Image with Zoom on Hover */}
              <img 
                src={baggageCard.image} 
                alt={baggageCard.title} 
                className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 via-[48%] to-black/25 pointer-events-none" />
              
              {/* Diagonal Light Sheen Sweep on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform ease-out pointer-events-none z-20" />

              {/* Bottom Content Area */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 z-10">
                <div className="flex items-end justify-between gap-3">
                  <div className="flex-1 pr-1">
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#E0A985] uppercase block mb-1">
                      {baggageCard.categoryTag}
                    </span>
                    <h3 className="font-sans text-2xl sm:text-[26px] text-white font-semibold tracking-tight leading-snug mb-1.5 drop-shadow-sm">
                      {baggageCard.title}
                    </h3>
                    <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed font-sans max-w-[260px]">
                      {baggageCard.description}
                    </p>
                  </div>
                  {/* Terracotta Action Button */}
                  <button 
                    type="button"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#A2552B] group-hover:bg-[#8A411B] flex items-center justify-center text-white shrink-0 shadow-xl transition-all duration-300 group-hover:scale-115 group-hover:rotate-[-45deg] group-hover:shadow-[0_0_20px_rgba(162,85,43,0.6)] cursor-pointer"
                    aria-label={`View ${baggageCard.title}`}
                  >
                    <ArrowRight className="w-5 h-5 stroke-[2.2]" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* ------------------------------------------------------ */}
          {/* CENTER COLUMN: Parking Info (Tall Featured Centerpiece)*/}
          {/* ------------------------------------------------------ */}
          <div className="w-full lg:w-[43%] flex flex-col">
            <div 
              onClick={() => handleCardClick(parkingCard)}
              className={`group relative rounded-[28px] sm:rounded-[34px] overflow-hidden h-[440px] sm:h-[520px] lg:h-[684px] cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-[#A2552B]/20 hover:-translate-y-2 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              {/* Background Image with Zoom on Hover */}
              <img 
                src={parkingCard.image} 
                alt={parkingCard.title} 
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-[44%] to-black/20 pointer-events-none" />
              
              {/* Diagonal Light Sheen Sweep on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform ease-out pointer-events-none z-20" />

              {/* Bottom Content Area */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-9 z-10">
                <div className="flex items-end justify-between gap-4">
                  <div className="flex-1 pr-2">
                    <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#E0A985] uppercase block mb-1.5">
                      {parkingCard.categoryTag}
                    </span>
                    <h3 className="font-sans text-3xl sm:text-4xl lg:text-[44px] text-white font-bold tracking-tight leading-tight mb-2 drop-shadow-md">
                      {parkingCard.title}
                    </h3>
                    <p className="text-white/85 text-xs sm:text-sm lg:text-[15px] leading-relaxed max-w-md font-sans">
                      {parkingCard.description}
                    </p>
                  </div>
                  {/* Terracotta Action Button */}
                  <button 
                    type="button"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#A2552B] group-hover:bg-[#8A411B] flex items-center justify-center text-white shrink-0 shadow-2xl transition-all duration-300 group-hover:scale-115 group-hover:rotate-[-45deg] group-hover:shadow-[0_0_25px_rgba(162,85,43,0.7)] cursor-pointer"
                    aria-label={`View ${parkingCard.title}`}
                  >
                    <ArrowRight className="w-6 h-6 stroke-[2.2]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------ */}
          {/* RIGHT COLUMN: Medical Facilities & Wi-Fi Connectivity   */}
          {/* ------------------------------------------------------ */}
          <div className="w-full lg:w-[28.5%] flex flex-col gap-5 sm:gap-6 justify-between">
            
            {/* Card 4: Medical Facilities */}
            <div 
              onClick={() => handleCardClick(medicalCard)}
              className={`group relative rounded-[26px] sm:rounded-[30px] overflow-hidden h-[290px] sm:h-[320px] lg:h-[330px] cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#A2552B]/15 hover:-translate-y-2 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              {/* Background Image with Zoom on Hover */}
              <img 
                src={medicalCard.image} 
                alt={medicalCard.title} 
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 via-[48%] to-black/25 pointer-events-none" />
              
              {/* Diagonal Light Sheen Sweep on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform ease-out pointer-events-none z-20" />

              {/* Bottom Content Area */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 z-10">
                <div className="flex items-end justify-between gap-3">
                  <div className="flex-1 pr-1">
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#E0A985] uppercase block mb-1">
                      {medicalCard.categoryTag}
                    </span>
                    <h3 className="font-sans text-2xl sm:text-[26px] text-white font-semibold tracking-tight leading-snug mb-1.5 drop-shadow-sm">
                      {medicalCard.title}
                    </h3>
                    <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed font-sans max-w-[260px]">
                      {medicalCard.description}
                    </p>
                  </div>
                  {/* Terracotta Action Button */}
                  <button 
                    type="button"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#A2552B] group-hover:bg-[#8A411B] flex items-center justify-center text-white shrink-0 shadow-xl transition-all duration-300 group-hover:scale-115 group-hover:rotate-[-45deg] group-hover:shadow-[0_0_20px_rgba(162,85,43,0.6)] cursor-pointer"
                    aria-label={`View ${medicalCard.title}`}
                  >
                    <ArrowRight className="w-5 h-5 stroke-[2.2]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 5: Wi-Fi Connectivity */}
            <div 
              onClick={() => handleCardClick(wifiCard)}
              className={`group relative rounded-[26px] sm:rounded-[30px] overflow-hidden h-[290px] sm:h-[320px] lg:h-[330px] cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#A2552B]/15 hover:-translate-y-2 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              {/* Background Image with Zoom on Hover */}
              <img 
                src={wifiCard.image} 
                alt={wifiCard.title} 
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 via-[48%] to-black/25 pointer-events-none" />
              
              {/* Diagonal Light Sheen Sweep on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform ease-out pointer-events-none z-20" />

              {/* Bottom Content Area */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 z-10">
                <div className="flex items-end justify-between gap-3">
                  <div className="flex-1 pr-1">
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#E0A985] uppercase block mb-1">
                      {wifiCard.categoryTag}
                    </span>
                    <h3 className="font-sans text-2xl sm:text-[26px] text-white font-semibold tracking-tight leading-snug mb-1.5 drop-shadow-sm">
                      {wifiCard.title}
                    </h3>
                    <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed font-sans max-w-[260px]">
                      {wifiCard.description}
                    </p>
                  </div>
                  {/* Terracotta Action Button */}
                  <button 
                    type="button"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#A2552B] group-hover:bg-[#8A411B] flex items-center justify-center text-white shrink-0 shadow-xl transition-all duration-300 group-hover:scale-115 group-hover:rotate-[-45deg] group-hover:shadow-[0_0_20px_rgba(162,85,43,0.6)] cursor-pointer"
                    aria-label={`View ${wifiCard.title}`}
                  >
                    <ArrowRight className="w-5 h-5 stroke-[2.2]" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ======================================================== */}
      {/* SERVICE DETAIL MODAL                                     */}
      {/* ======================================================== */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-stone-200 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-44 sm:h-52 w-full overflow-hidden">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              {/* Close Button */}
              <button 
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title on image */}
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] uppercase font-semibold tracking-wider text-[#FAF7F2] bg-[#A2552B] px-2 py-0.5 rounded-full inline-block mb-1.5">
                  {selectedService.categoryTag}
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold leading-tight">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-4">
              <p className="text-stone-600 text-sm leading-relaxed">
                {selectedService.description}
              </p>

              {/* Quick Info Grid */}
              <div className="space-y-2.5 pt-2 border-t border-stone-100 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#A2552B] shrink-0 mt-0.5" />
                  <span>{selectedService.details.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#A2552B] shrink-0" />
                  <span>{selectedService.details.timings}</span>
                </div>
                {selectedService.details.contact && (
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#A2552B] shrink-0" />
                    <span className="font-medium text-stone-900">{selectedService.details.contact}</span>
                  </div>
                )}
              </div>

              {/* Features List */}
              <div className="pt-2 border-t border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2.5">
                  Key Services & Amenities
                </h4>
                <div className="space-y-2">
                  {selectedService.details.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-[#A2552B] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="w-full py-2.5 rounded-xl bg-[#A2552B] hover:bg-[#8A411B] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm cursor-pointer"
                >
                  Close & Return
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

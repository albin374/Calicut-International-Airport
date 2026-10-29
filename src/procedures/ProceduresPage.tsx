import React, { useState } from 'react';
import { 
  ChevronRight, 
  FileText, 
  Luggage, 
  Car, 
  Globe, 
  User, 
  Users, 
  ShieldCheck, 
  Ban, 
  Clock, 
  Headphones, 
  Phone, 
  Mail, 
  MessageSquare
} from 'lucide-react';
import { 
  PROCEDURE_STEPS, 
  ProcedureItem, 
  ASSISTANCE_CONTACTS 
} from './proceduresData';
import { ProcedureDetailModal } from './ProcedureDetailModal';
import { FooterSection } from '../components/FooterSection';
import { Navbar } from '../components/Navbar';

export interface ProceduresPageProps {
  onNavigateHome: () => void;
  onNavigateToHowToReach?: () => void;
  onNavigateToAirportMap?: (tab?: 'overview' | 'T1' | 'T2' | 'parking') => void;
  onOpenFlightStatus?: (type?: 'arrival' | 'departure') => void;
  onOpenAirlineDetails?: () => void;
}

export const ProceduresPage: React.FC<ProceduresPageProps> = ({
  onNavigateHome,
  onNavigateToHowToReach,
  onNavigateToAirportMap,
  onOpenFlightStatus,
  onOpenAirlineDetails,
}) => {
  const [selectedItem, setSelectedItem] = useState<ProcedureItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleItemClick = (item: ProcedureItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleOpenPassengerGuide = () => {
    // Open comprehensive first step or checklist
    if (PROCEDURE_STEPS[0]?.items?.[0]) {
      setSelectedItem(PROCEDURE_STEPS[0].items[0]);
      setIsModalOpen(true);
    }
  };

  // Helper icon renderer
  const renderItemIcon = (iconName: ProcedureItem['iconName']) => {
    switch (iconName) {
      case 'file-text':
      case 'file-check':
        return <FileText className="w-4 h-4 text-[#C26733]" />;
      case 'luggage':
        return <Luggage className="w-4 h-4 text-[#C26733]" />;
      case 'car':
        return <Car className="w-4 h-4 text-[#C26733]" />;
      case 'globe':
        return <Globe className="w-4 h-4 text-[#C26733]" />;
      case 'user':
        return <User className="w-4 h-4 text-[#C26733]" />;
      case 'users':
        return <Users className="w-4 h-4 text-[#C26733]" />;
      case 'shield-check':
        return <ShieldCheck className="w-4 h-4 text-[#C26733]" />;
      case 'ban':
        return <Ban className="w-4 h-4 text-[#C26733]" />;
      default:
        return <FileText className="w-4 h-4 text-[#C26733]" />;
    }
  };

  return (
    <div className="w-full min-h-screen m-0 p-0 font-sans selection:bg-[#A2552B] selection:text-white bg-[#FAF7F2] text-stone-800">
      
      {/* ======================================================== */}
      {/* HERO BANNER SECTION WITH CINEMATIC SUNSET TERMINAL IMAGE */}
      {/* ======================================================== */}
      <section className="relative w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] flex flex-col justify-between overflow-hidden bg-slate-900 select-none">
        
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Sunset Departures at the Airport.png"
            alt="Calicut International Airport Sunset Departures View"
            className="w-full h-full object-cover object-center filter brightness-95"
          />
          {/* Subtle gradient overlay to make typography and top navigation pop */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent pointer-events-none" />
        </div>

        {/* TOP NAVIGATION BAR (Exact same navbar as home page) */}
        <Navbar 
          onNavigateHome={onNavigateHome}
          onNavigateToProcedures={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onNavigateToHowToReach={onNavigateToHowToReach}
          onNavigateToAirportMap={onNavigateToAirportMap}
          onOpenFlightStatus={onOpenFlightStatus}
          onOpenAirlineDetails={onOpenAirlineDetails}
          isProceduresPage={true}
        />

        {/* HERO TITLE & BREADCRUMB */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-16">
          
          {/* Breadcrumb: Home > Before You Fly */}
          <div className="flex items-center gap-2 text-xs sm:text-[13px] font-medium text-white/80 mb-3 sm:mb-4">
            <button 
              type="button"
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-white/60" />
            <span className="text-white font-semibold">Before You Fly</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/60" />
            <span className="text-[#E8A57A] font-semibold">Procedures</span>
          </div>

          {/* Headline: Before You Fly */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-white mb-3 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Before <span className="text-[#E8A57A]">You Fly</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-2xl font-normal leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            Everything you need to know for a smooth and comfortable journey from Calicut International Airport.
          </p>

        </div>

      </section>

      {/* ======================================================== */}
      {/* MAIN CONTENT SECTION: CURVED CARD CONTAINER             */}
      {/* ======================================================== */}
      <main className="relative z-30 -mt-10 sm:-mt-14 rounded-t-[36px] sm:rounded-t-[44px] bg-[#FAF7F2] border-t border-white/60 shadow-[0_-12px_30px_rgba(0,0,0,0.08)] pt-8 sm:pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* ====================================================== */}
          {/* ROW 1: 3 CARDS (Step 01, Step 02, Step 03)             */}
          {/* ====================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            
            {/* Card 1: Step 01 - Pre Check In */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between">
              
              {/* Header with Title and Blended Suitcase Image */}
              <div className="relative p-5 pb-3 overflow-hidden min-h-[145px] flex items-start justify-between">
                <div className="relative z-10 max-w-[190px]">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FDF3EB] text-[#C26733] mb-2">
                    Step 01
                  </span>
                  <h3 className="font-sans text-xl font-bold text-stone-900 tracking-tight leading-snug">
                    Pre Check In
                  </h3>
                  <p className="text-xs text-stone-500 font-normal mt-1 leading-relaxed">
                    Prepare your travel documents and essential information.
                  </p>
                </div>

                {/* Blended Photographic Image */}
                <div className="absolute right-0 top-0 bottom-0 w-44 sm:w-48 overflow-hidden pointer-events-none">
                  <img
                    src="/Sunset Airport Reflections with Suitcase.png"
                    alt="Luggage and Suitcase at Calicut Airport Terminal"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Smooth Feathered Gradient Mask into White Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Action Rows */}
              <div className="border-t border-stone-150 divide-y divide-stone-100 mt-2">
                {PROCEDURE_STEPS[0].items?.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleItemClick(item)}
                    className="w-full flex items-center justify-between px-5 py-3 hover:bg-[#FAF7F2] transition-colors group cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      {renderItemIcon(item.iconName)}
                      <span className="text-xs sm:text-[13px] font-medium text-stone-700 group-hover:text-[#A2552B] transition-colors">
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-[#A2552B] group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>

            </div>

            {/* Card 2: Step 02 - Check In */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between">
              
              {/* Header with Title and Blended Check-In Hall Image */}
              <div className="relative p-5 pb-3 overflow-hidden min-h-[145px] flex items-start justify-between">
                <div className="relative z-10 max-w-[190px]">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FDF3EB] text-[#C26733] mb-2">
                    Step 02
                  </span>
                  <h3 className="font-sans text-xl font-bold text-stone-900 tracking-tight leading-snug">
                    Check In
                  </h3>
                  <p className="text-xs text-stone-500 font-normal mt-1 leading-relaxed">
                    Complete your check-in process with ease.
                  </p>
                </div>

                {/* Blended Photographic Image */}
                <div className="absolute right-0 top-0 bottom-0 w-44 sm:w-48 overflow-hidden pointer-events-none">
                  <img
                    src="/Golden Hour Airport Check-In Hall.png"
                    alt="Airport Check-In Counters at Golden Hour"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Smooth Feathered Gradient Mask into White Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Action Rows */}
              <div className="border-t border-stone-150 divide-y divide-stone-100 mt-2">
                {PROCEDURE_STEPS[1].items?.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleItemClick(item)}
                    className="w-full flex items-center justify-between px-5 py-3 hover:bg-[#FAF7F2] transition-colors group cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      {renderItemIcon(item.iconName)}
                      <span className="text-xs sm:text-[13px] font-medium text-stone-700 group-hover:text-[#A2552B] transition-colors">
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-[#A2552B] group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>

            </div>

            {/* Card 3: Step 03 - Security Check */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between">
              
              {/* Header with Title and Blended Security Checkpoint Image */}
              <div className="relative p-5 pb-3 overflow-hidden min-h-[145px] flex items-start justify-between">
                <div className="relative z-10 max-w-[190px]">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FDF3EB] text-[#C26733] mb-2">
                    Step 03
                  </span>
                  <h3 className="font-sans text-xl font-bold text-stone-900 tracking-tight leading-snug">
                    Security Check
                  </h3>
                  <p className="text-xs text-stone-500 font-normal mt-1 leading-relaxed">
                    Ensure a safe and hassle-free security screening.
                  </p>
                </div>

                {/* Blended Photographic Image */}
                <div className="absolute right-0 top-0 bottom-0 w-44 sm:w-48 overflow-hidden pointer-events-none">
                  <img
                    src="/Golden Hour Airport Security Checkpoint.png"
                    alt="Airport Security Baggage Screening Checkpoint"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Smooth Feathered Gradient Mask into White Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Action Rows */}
              <div className="border-t border-stone-150 divide-y divide-stone-100 mt-2">
                {PROCEDURE_STEPS[2].items?.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleItemClick(item)}
                    className="w-full flex items-center justify-between px-5 py-3 hover:bg-[#FAF7F2] transition-colors group cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      {renderItemIcon(item.iconName)}
                      <span className="text-xs sm:text-[13px] font-medium text-stone-700 group-hover:text-[#A2552B] transition-colors">
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-[#A2552B] group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>

            </div>

          </div>

          {/* ====================================================== */}
          {/* ROW 2: 2 WIDER CARDS (Step 04, Step 05)                */}
          {/* ====================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            
            {/* Card 4: Step 04 - Immigration and Customs */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between">
              
              {/* Header with Title and Blended Passport Control Image */}
              <div className="relative p-5 sm:p-6 pb-4 overflow-hidden min-h-[155px] flex items-start justify-between">
                <div className="relative z-10 max-w-[280px]">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FDF3EB] text-[#C26733] mb-2">
                    Step 04
                  </span>
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-stone-900 tracking-tight leading-snug">
                    Immigration and Customs
                  </h3>
                  <p className="text-xs sm:text-[13px] text-stone-500 font-normal mt-1 leading-relaxed">
                    Information for international passengers.
                  </p>
                </div>

                {/* Blended Photographic Image */}
                <div className="absolute right-0 top-0 bottom-0 w-52 sm:w-64 overflow-hidden pointer-events-none">
                  <img
                    src="/Passport at Immigration Control.png"
                    alt="Passport at Immigration Control Verification"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Smooth Feathered Gradient Mask */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Action Rows */}
              <div className="border-t border-stone-150 divide-y divide-stone-100">
                {PROCEDURE_STEPS[3].items?.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleItemClick(item)}
                    className="w-full flex items-center justify-between px-5 sm:px-6 py-3.5 hover:bg-[#FAF7F2] transition-colors group cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      {renderItemIcon(item.iconName)}
                      <span className="text-xs sm:text-[13px] font-medium text-stone-700 group-hover:text-[#A2552B] transition-colors">
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-[#A2552B] group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>

            </div>

            {/* Card 5: Step 05 - Boarding */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between">
              
              {/* Header with Title and Blended Boarding Gate Image */}
              <div className="relative p-5 sm:p-6 pb-2 overflow-hidden min-h-[140px] flex items-start justify-between">
                <div className="relative z-10 max-w-[280px]">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FDF3EB] text-[#C26733] mb-2">
                    Step 05
                  </span>
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-stone-900 tracking-tight leading-snug">
                    Boarding
                  </h3>
                  <p className="text-xs sm:text-[13px] text-stone-500 font-normal mt-1 leading-relaxed">
                    Arrive on time and proceed to your gate.
                  </p>
                </div>

                {/* Blended Photographic Image */}
                <div className="absolute right-0 top-0 bottom-0 w-52 sm:w-64 overflow-hidden pointer-events-none">
                  <img
                    src="/Golden Sunset at the Airport Gate.png"
                    alt="Airliner at Airport Boarding Gate at Golden Sunset"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Smooth Feathered Gradient Mask */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Callout Notice Box Exactly Matching Reference Image */}
              <div className="p-5 sm:p-6 pt-2">
                <div 
                  onClick={() => PROCEDURE_STEPS[4].items?.[0] && handleItemClick(PROCEDURE_STEPS[4].items[0])}
                  className="bg-[#FDF3EB]/90 hover:bg-[#FDF3EB] border border-[#F5D5C0] rounded-xl p-3.5 sm:p-4 flex items-start gap-3 transition-colors cursor-pointer group"
                >
                  <Clock className="w-5 h-5 text-[#C26733] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div className="flex-1">
                    <p className="text-xs sm:text-[13px] text-stone-700 font-medium leading-relaxed">
                      Arrive at the boarding gate 30–40 minutes before boarding and proceed to the boarding area.
                    </p>
                    <span className="text-[11px] text-[#C26733] font-semibold mt-1 inline-flex items-center gap-1 group-hover:translate-x-1 transition-all">
                      View Boarding Gates & Aerobridges <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* ====================================================== */}
          {/* BOTTOM ASSISTANCE BANNER ("Need Assistance?")         */}
          {/* ====================================================== */}
          <div className="rounded-2xl bg-gradient-to-r from-[#FBF4EE] via-[#F8ECE3] to-[#F4DFD1] p-5 sm:p-6 border border-[#EACFBE] shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left: Customer Support Icon & Label */}
            <div className="flex items-center gap-4 text-left w-full lg:w-auto">
              <div className="w-12 h-12 rounded-full bg-white shadow-xs border border-stone-200/60 flex items-center justify-center text-[#A2552B] shrink-0">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-sans text-base sm:text-lg font-bold text-stone-900 leading-tight">
                  Need Assistance?
                </h4>
                <p className="text-xs text-stone-600 mt-0.5">
                  We're here to help you with your journey.
                </p>
              </div>
            </div>

            {/* Center: Contact Channels (Phone, Email, Live Chat) */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 w-full lg:w-auto justify-start lg:justify-center">
              
              {/* Phone Information */}
              <a 
                href={`tel:${ASSISTANCE_CONTACTS.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-full bg-[#A2552B] text-white flex items-center justify-center group-hover:bg-[#8B4420] transition-colors shadow-xs shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-stone-900 text-xs sm:text-[13px] group-hover:text-[#A2552B] transition-colors">
                    {ASSISTANCE_CONTACTS.phone}
                  </div>
                  <div className="text-[10px] text-stone-500">
                    {ASSISTANCE_CONTACTS.phoneLabel}
                  </div>
                </div>
              </a>

              {/* Email Support */}
              <a 
                href={`mailto:${ASSISTANCE_CONTACTS.email}`}
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-full bg-[#A2552B] text-white flex items-center justify-center group-hover:bg-[#8B4420] transition-colors shadow-xs shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-stone-900 text-xs sm:text-[13px] group-hover:text-[#A2552B] transition-colors">
                    {ASSISTANCE_CONTACTS.email}
                  </div>
                  <div className="text-[10px] text-stone-500">
                    {ASSISTANCE_CONTACTS.emailLabel}
                  </div>
                </div>
              </a>

              {/* Live Chat */}
              <div 
                onClick={handleOpenPassengerGuide}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="w-9 h-9 rounded-full bg-[#A2552B] text-white flex items-center justify-center group-hover:bg-[#8B4420] transition-colors shadow-xs shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-stone-900 text-xs sm:text-[13px] group-hover:text-[#A2552B] transition-colors">
                    {ASSISTANCE_CONTACTS.chatLabel}
                  </div>
                  <div className="text-[10px] text-stone-500">
                    {ASSISTANCE_CONTACTS.chatSub}
                  </div>
                </div>
              </div>

            </div>

            {/* Right: View Passenger Guide Action Button */}
            <div className="w-full lg:w-auto flex justify-start lg:justify-end">
              <button
                type="button"
                onClick={handleOpenPassengerGuide}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#A2552B] hover:bg-[#8B4420] text-white text-xs sm:text-[13px] font-bold tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer hover:shadow-md"
              >
                <span>View Passenger Guide</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </main>

      {/* ======================================================== */}
      {/* GLOBAL FOOTER SECTION                                    */}
      {/* ======================================================== */}
      <FooterSection />

      {/* ======================================================== */}
      {/* INTERACTIVE DETAIL MODAL FOR PROCEDURE ACTIONS           */}
      {/* ======================================================== */}
      <ProcedureDetailModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
};

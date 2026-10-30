import React, { useState, useMemo } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  HeartPulse,
  Building2,
  ExternalLink,
  Send,
  CheckCircle2,
  Search,
  ChevronDown,
  ChevronRight,
  Navigation,
  FileText,
  RotateCcw,
  Compass
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { FooterSection } from '../components/FooterSection';
import {
  EMERGENCY_CONTACTS,
  DEPARTMENT_CONTACTS,
  DISTANCE_METRICS,
  FAQ_CATEGORIES,
  FAQ_ITEMS
} from './contactData';

interface ContactPageProps {
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

export const ContactPage: React.FC<ContactPageProps> = ({
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
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    flightNumber: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  // FAQ State
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('all');
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-1');

  // Handle Form Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all mandatory fields (Name, Email, Subject, and Message).');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedTicket = `CCJ-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedTicket(generatedTicket);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'general',
        flightNumber: '',
        subject: '',
        message: ''
      });
    }, 800);
  };

  // Filter FAQs
  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory = activeFaqCategory === 'all' || item.category === activeFaqCategory;
      const q = faqSearchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeFaqCategory, faqSearchQuery]);

  const toggleFaq = (id: string) => {
    setExpandedFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 font-sans selection:bg-[#A2552B] selection:text-white flex flex-col justify-between">
      {/* Top Navbar with highest z-index so dropdowns stay on top */}
      <div className="relative z-50">
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
          isContactPage={true}
        />
      </div>

      {/* ======================================================== */}
      {/* 1. TOP HERO BANNER: Terminal Concourse Image             */}
      {/* ======================================================== */}
      <section className="relative z-10 w-full min-h-[360px] sm:min-h-[400px] lg:min-h-[440px] flex flex-col justify-between bg-stone-900 select-none pb-14 sm:pb-16">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/Modern Airport Terminal Concourse.png"
            alt="Calicut International Airport Terminal Concourse"
            className="w-full h-full object-cover object-center filter brightness-95"
          />
          {/* Subtle gradient overlay to make typography pop */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/65 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 via-[45%] to-transparent pointer-events-none" />
        </div>

        {/* HERO TITLE & BREADCRUMB */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-14">
          <div className="max-w-4xl">
            {/* Breadcrumb: Home > Support > Contact Us */}
            <div className="flex items-center gap-2 text-xs sm:text-[13px] font-medium text-white/80 mb-3 sm:mb-4">
              <button
                type="button"
                onClick={onNavigateHome}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-white/60" />
              <span className="text-white/80">Support</span>
              <ChevronRight className="w-3.5 h-3.5 text-white/60" />
              <span className="text-[#E8A57A] font-semibold">Contact Us</span>
            </div>

            {/* Headline: Contact Us */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-white mb-3 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Contact <span className="text-[#E8A57A]">Us</span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-2xl font-normal leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
              24/7 passenger assistance, direct department hotlines, grievance resolution, interactive Google location maps & FAQs for Calicut International Airport (CCJ / VOCL).
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. SECTION AFTER BANNER: CURVED WHITE CONTAINER          */}
      {/* Curved top edge overlapping banner (-mt-10 sm:-mt-14)    */}
      {/* Set to z-20 so white container sits cleanly OVER banner  */}
      {/* ======================================================== */}
      <section className="relative z-20 -mt-10 sm:-mt-14 rounded-t-[36px] sm:rounded-t-[44px] bg-white border-t border-white/60 shadow-[0_-12px_30px_rgba(0,0,0,0.08)] pt-10 sm:pt-14 pb-16 flex-1">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* ==================================================== */}
          {/* 24/7 EMERGENCY & OPERATIONAL HOTLINES                */}
          {/* ==================================================== */}
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-7 h-[2px] bg-[#A2552B] inline-block" />
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#A2552B]">
                24/7 EMERGENCY & DUTY DESKS
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight mb-6">
              Immediate Operational Helplines
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {EMERGENCY_CONTACTS.map((item, idx) => {
                const Icon =
                  item.iconType === 'terminal'
                    ? Building2
                    : item.iconType === 'security'
                    ? Shield
                    : item.iconType === 'medical'
                    ? HeartPulse
                    : Compass;

                return (
                  <div
                    key={idx}
                    className="bg-[#FAF7F2] rounded-2xl p-5 border border-stone-200/80 shadow-xs hover:border-[#A2552B]/40 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#A2552B]/10 text-[#A2552B] tracking-wider">
                          {item.badge}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-white border border-[#A2552B]/20 flex items-center justify-center text-[#A2552B]">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-sm font-bold text-stone-900 mb-1">
                        {item.title}
                      </h3>

                      <p className="text-[11px] text-stone-500 leading-relaxed mb-3 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-200/70 space-y-1">
                      <a
                        href={`tel:${item.phone.replace(/[^0-9+]/g, '')}`}
                        className="flex items-center gap-2 text-xs font-bold text-[#A2552B] hover:text-[#883d16] transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 shrink-0" />
                        <span>{item.phone}</span>
                      </a>
                      {item.altPhone && (
                        <div className="text-[10.5px] text-stone-500 flex items-center gap-2 pl-5.5">
                          <span>Alt: {item.altPhone}</span>
                        </div>
                      )}
                      {item.email && (
                        <a
                          href={`mailto:${item.email}`}
                          className="flex items-center gap-2 text-[11px] text-stone-600 hover:text-stone-900 transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5 shrink-0 text-stone-400" />
                          <span className="truncate">{item.email}</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ==================================================== */}
          {/* CORE SECTION: PASSENGER FORM & INTERACTIVE MAP       */}
          {/* ==================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
            
            {/* Left Column (7 cols): Passenger Support Inquiry Form */}
            <div className="lg:col-span-7 bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="w-7 h-[2px] bg-[#A2552B] inline-block" />
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#A2552B]">
                  PASSENGER ASSISTANCE
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mb-2">
                Send an Inquiry or Feedback
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
                Have questions regarding flight procedures, lost baggage, parking, or terminal services? Submit your query and our airport duty staff will respond promptly.
              </p>

              {submittedTicket ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-emerald-900">
                        Inquiry Received Successfully!
                      </h3>
                      <p className="text-xs text-emerald-700">
                        Your reference tracking ticket has been generated.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-emerald-200/80 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                      REFERENCE TRACKING NUMBER
                    </span>
                    <span className="text-xl font-mono font-black text-[#A2552B]">
                      {submittedTicket}
                    </span>
                    <p className="text-xs text-stone-600 mt-1">
                      An automated confirmation has been dispatched. Our terminal facilitation desk reviews inquiries round the clock.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmittedTicket(null)}
                    className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Full Name <span className="text-[#A2552B]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your Name as per ID proof"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#A2552B]/30 focus:border-[#A2552B] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Email Address <span className="text-[#A2552B]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="valid email address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#A2552B]/30 focus:border-[#A2552B] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="phone number with country code"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#A2552B]/30 focus:border-[#A2552B] transition-all"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Inquiry Category <span className="text-[#A2552B]">*</span>
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#A2552B]/30 focus:border-[#A2552B] transition-all"
                      >
                        <option value="general">General Information</option>
                        <option value="baggage">Lost & Found / Baggage</option>
                        <option value="flight">Flight Schedules & Gates</option>
                        <option value="prm">Wheelchair / PRM Special Care</option>
                        <option value="parking">Parking & Ground Transport</option>
                        <option value="grievance">Feedback & Complaint</option>
                      </select>
                    </div>

                    {/* Flight Number */}
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Flight No. (Optional)
                      </label>
                      <input
                        type="text"
                        name="flightNumber"
                        placeholder="e.g. IX 344 / 6E 1891"
                        value={formData.flightNumber}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#A2552B]/30 focus:border-[#A2552B] transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Subject <span className="text-[#A2552B]">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="Brief description of your query"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#A2552B]/30 focus:border-[#A2552B] transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Message / Query Details <span className="text-[#A2552B]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Provide detailed description to help us assist you faster..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#A2552B]/30 focus:border-[#A2552B] transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3 bg-[#A2552B] hover:bg-[#8B4420] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-sm hover:shadow inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry to Help Desk</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Column (5 cols): Google Maps & Location Specifications */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Google Map Container */}
              <div className="bg-[#FAF7F2] rounded-3xl p-5 border border-stone-200/80 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-white border border-[#A2552B]/20 flex items-center justify-center text-[#A2552B]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-stone-900 leading-none">
                        Airport Location
                      </h3>
                      <span className="text-[11px] text-stone-500">
                        Karipur, Malappuram, Kerala
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Calicut+International+Airport+Karipur+Kerala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#A2552B] hover:text-[#883d16] transition-colors"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Embedded Interactive Google Map */}
                <div className="w-full h-[260px] sm:h-[300px] rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 relative shadow-2xs">
                  <iframe
                    title="Calicut International Airport Google Map"
                    src="https://maps.google.com/maps?q=Calicut+International+Airport+Karipur+Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                  />
                </div>

                {/* Direct GPS & Physical Address Details */}
                <div className="mt-4 pt-3 border-t border-stone-200/70 space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-stone-700">
                    <Navigation className="w-3.5 h-3.5 text-[#A2552B] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-stone-900">Physical Address: </span>
                      <span className="text-stone-600">
                        Airports Authority of India, Calicut International Airport, Karipur, Malappuram District, Kerala - 673647
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 text-[11px]">
                    <div className="p-2 rounded-lg bg-white border border-stone-200/60">
                      <span className="text-stone-400 block font-bold uppercase text-[9.5px]">IATA / ICAO</span>
                      <span className="font-mono font-bold text-stone-900 text-xs">CCJ / VOCL</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-stone-200/60">
                      <span className="text-stone-400 block font-bold uppercase text-[9.5px]">GPS COORDINATES</span>
                      <span className="font-mono font-bold text-stone-900 text-xs">11.1369° N, 75.9553° E</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Travel Distances & Highway Access Card */}
              <div className="bg-[#FAF7F2] rounded-3xl p-5 border border-stone-200/80 shadow-xs">
                <h3 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A2552B]" />
                  <span>Road Transit Distances to Major Towns</span>
                </h3>

                <div className="space-y-2.5">
                  {DISTANCE_METRICS.map((d, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-stone-200/60 flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="font-bold text-stone-900">{d.city}</div>
                        <div className="text-[11px] text-stone-500 mt-0.5">{d.via}</div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-black text-[#A2552B]">{d.distance}</div>
                        <div className="text-[10px] text-stone-500">{d.duration}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 pt-3 border-t border-stone-200/70 flex items-center justify-between text-xs">
                  <span className="text-stone-500 text-[11px]">Bus, rail & cab transit options</span>
                  <button
                    type="button"
                    onClick={() => onNavigateToHowToReach?.()}
                    className="text-[#A2552B] hover:text-[#883d16] font-bold inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>How to Reach Page</span>
                    <span>→</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* ==================================================== */}
          {/* INTERACTIVE FREQUENTLY ASKED QUESTIONS (FAQ)         */}
          {/* ==================================================== */}
          <div className="pt-4 border-t border-stone-200/80">
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="w-7 h-[2px] bg-[#A2552B] inline-block" />
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#A2552B]">
                  HELP CENTER & ANSWERS
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight mb-3">
                Frequently Asked Questions
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Quick solutions to the most common queries regarding baggage rules, reporting times, parking tariffs, wheelchair PRM support, and customs declarations at CCJ.
              </p>
            </div>

            {/* Search Bar & Category Filter Pills */}
            <div className="space-y-4 mb-8">
              {/* Search Bar */}
              <div className="relative max-w-xl">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by keywords (e.g., wheelchair, parking, baggage, Wi-Fi, halwa)..."
                  value={faqSearchQuery}
                  onChange={(e) => setFaqSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#A2552B]/30 focus:border-[#A2552B] transition-all shadow-xs"
                />
                {faqSearchQuery && (
                  <button
                    type="button"
                    onClick={() => setFaqSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs font-bold"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                {FAQ_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveFaqCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                      activeFaqCategory === cat.id
                        ? 'bg-[#A2552B] text-white shadow-xs'
                        : 'bg-[#FAF7F2] text-stone-600 hover:text-stone-900 border border-stone-200/80 hover:bg-stone-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Accordion List */}
            <div className="space-y-3">
              {filteredFaqs.length === 0 ? (
                <div className="p-8 bg-[#FAF7F2] rounded-2xl border border-stone-200 text-center text-stone-500 text-xs sm:text-sm">
                  No frequently asked questions match your query &quot;{faqSearchQuery}&quot;. Please submit your question using the inquiry form above.
                </div>
              ) : (
                filteredFaqs.map((item) => {
                  const isExpanded = expandedFaqId === item.id;

                  return (
                    <div
                      key={item.id}
                      className={`bg-[#FAF7F2] rounded-2xl border transition-all duration-200 overflow-hidden ${
                        isExpanded
                          ? 'border-[#A2552B]/40 shadow-xs'
                          : 'border-stone-200/80 hover:border-stone-300'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(item.id)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                      >
                        <span className="text-sm sm:text-[15px] font-bold text-stone-900 leading-snug">
                          {item.question}
                        </span>
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                            isExpanded
                              ? 'bg-[#A2552B] text-white rotate-180'
                              : 'bg-white text-stone-500'
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 bg-white">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* ==================================================== */}
          {/* DEPARTMENTAL DIRECTORY & KEY OFFICES                 */}
          {/* ==================================================== */}
          <div className="pt-4 border-t border-stone-200/80">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-7 h-[2px] bg-[#A2552B] inline-block" />
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#A2552B]">
                AERODROME DIRECTORY
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mb-2">
              Departmental Helplines & Offices
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 mb-8 max-w-2xl leading-relaxed">
              Direct communication channels for Customs, Immigration, Lost Property Cell, Cargo Operations, and Ground Transportation union at Calicut Airport.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {DEPARTMENT_CONTACTS.map((dept, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF7F2] rounded-2xl p-5 border border-stone-200/80 shadow-xs hover:border-[#A2552B]/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10.5px] font-bold uppercase tracking-wider text-[#A2552B] mb-1">
                      {dept.department}
                    </div>
                    <h3 className="text-sm font-black text-stone-900 mb-2">
                      {dept.name}
                    </h3>
                    <div className="text-xs text-stone-500 mb-4 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span>{dept.location}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-200/70 space-y-1.5 text-xs">
                    <a
                      href={`tel:${dept.phone.replace(/[^0-9+]/g, '')}`}
                      className="flex items-center gap-2 font-bold text-stone-800 hover:text-[#A2552B] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#A2552B]" />
                      <span>{dept.phone}</span>
                    </a>
                    <a
                      href={`mailto:${dept.email}`}
                      className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-stone-400" />
                      <span className="truncate">{dept.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* AirSewa & Ministry of Civil Aviation Redressal Callout */}
            <div className="mt-8 p-6 rounded-2xl bg-[#FAF7F2] border border-stone-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#A2552B]/20 flex items-center justify-center text-[#A2552B] shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-stone-900">
                    Statutory Passenger Grievance Redressal (AirSewa & CPGRAMS)
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">
                    Official Ministry of Civil Aviation portal for time-bound complaint tracking and airline facilitation.
                  </div>
                </div>
              </div>

              <a
                href="https://airsewa.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl transition-colors shrink-0 inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>AirSewa Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Global Footer */}
      <FooterSection />
    </div>
  );
};

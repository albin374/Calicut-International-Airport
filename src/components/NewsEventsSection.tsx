import React, { useState } from 'react';
import { Calendar, ArrowUpRight, X, Clock, Share2, Check } from 'lucide-react';

export interface NewsItem {
  id: string;
  category: string;
  title: string;
  timestamp?: string;
  description: string;
  fullContent: string[];
  image: string;
  date: string;
  source: string;
  type: 'news' | 'event';
}

export const MOCK_NEWS_ITEMS: NewsItem[] = [
  {
    id: 'emirates-calicut-approval',
    category: 'AIRLINES',
    title: 'Indian regulator gives Emirates airline approval to operate Calicut flights',
    description: "Emirates airline hasn't indicated when it will start flights from Dubai to the Kerala airport.",
    fullContent: [
      "The Directorate General of Civil Aviation (DGCA) has granted formal regulatory clearance to Emirates for resuming wide-body operations at Calicut International Airport (CCJ), Karipur.",
      "Following extensive safety assessments, runway inspections, and infrastructure enhancements on Runway 10/28, aviation authorities have verified compliance with international wide-body criteria for Boeing 777 aircraft operations.",
      "The approval marks a pivotal milestone for the large expatriate population across the Malabar region traveling frequently between Northern Kerala and the United Arab Emirates. Emirates officials welcomed the regulatory decision and noted that route scheduling details and aircraft deployment timelines will be announced in due course.",
      "Airport Director confirmed that passenger amenities, ground handling capabilities, and customs processing counters at Terminal 2 are fully equipped to welcome the return of Emirates wide-body services."
    ],
    image: '/Emirates 777 at Golden Hour.png',
    date: 'APR 12, 2026',
    source: 'Civil Aviation Bureau & AAI Press Release',
    type: 'news'
  },
  {
    id: 'spicejet-jeddah-flights',
    category: 'AIRLINES',
    title: "India's SpiceJet plans to launch Jeddah flights from Calicut",
    description: "India's SpiceJet is planning to launch direct flights to Jeddah from Calicut, enhancing connectivity for passengers.",
    fullContent: [
      "SpiceJet has announced plans to inaugurate direct non-stop air connectivity between Calicut International Airport and King Abdulaziz International Airport in Jeddah, Saudi Arabia.",
      "The strategic expansion aims to cater to the heavy influx of Umrah pilgrims from Malappuram, Kozhikode, Wayanad, and Palakkad districts, as well as thousands of skilled professionals stationed in the Western Province of Saudi Arabia.",
      "The proposed route will operate four times weekly utilizing Boeing 737 MAX aircraft featuring comfortable seating configurations and dedicated baggage allowances tailored for international religious travelers.",
      "Bookings and special inaugural promotional fares are anticipated to open following slot allocation approvals from Saudi civil aviation authorities (GACA)."
    ],
    image: '/SpiceJet Jet Lifting Off the Runway.png',
    date: 'MAR 20, 2026',
    source: 'SpiceJet Commercial Fleet Operations',
    type: 'news'
  },
  {
    id: 'indigo-uae-expansion',
    category: 'AIRLINES',
    title: 'IndiGo Plans UAE Expansion',
    timestamp: 'Posted 04/08/2026 12:19',
    description: 'Ras Al Khaimah is set to become the fourth emirate to be served by the Indian LCC.',
    fullContent: [
      "IndiGo, India's largest carrier by market share, is expanding its Middle Eastern footprint with planned direct flight services linking Calicut with Ras Al Khaimah (RKT).",
      "Ras Al Khaimah becomes the fourth United Arab Emirates destination directly accessible from Calicut Airport on IndiGo's network, joining established daily services to Dubai (DXB), Abu Dhabi (AUH), and Sharjah (SHJ).",
      "The expansion delivers enhanced point-to-point convenience for Northern Emirates residents and supports booming bilateral trade, tourism, and seamless connections to Indian domestic metro networks via Karipur.",
      "The flights will be serviced by state-of-the-art Airbus A320neo and A321neo aircraft, known for industry-leading fuel efficiency and passenger cabin comfort."
    ],
    image: '/IndiGo Airliner Landing Above Runway.png',
    date: 'AUG 04, 2026',
    source: 'IndiGo Global Network Expansion',
    type: 'news'
  },
  {
    id: 'aucc-modernization-review',
    category: 'GOVERNANCE & PLANNING',
    title: 'Airport Users Consultative Committee (AUCC)',
    description: 'The airport director chaired a fresh AUCC meeting in September 2026 to review modernization milestones and passenger amenity rollouts for the new terminal.',
    fullContent: [
      "The Airport Director convened and chaired a comprehensive session of the Airport Users Consultative Committee (AUCC) at Calicut International Airport in September 2026.",
      "The meeting brought together key aviation stakeholders, airline representatives, trade bodies, and travel association delegates to review critical progress across ongoing modernization milestones.",
      "Key topics addressed included the phased operational rollout of the new terminal expansion, streamlined immigration counters, upgraded aerobridges, and the expansion of passenger amenities to meet rising regional demand.",
      "Committee members expressed appreciation for recent facility enhancements while recommending additional ground transportation integration and seasonal flight schedule augmentations."
    ],
    image: '/Airport Executive Meeting Room.png',
    date: 'SEP 2026',
    source: 'AAI CCJ Directorate & AUCC Council',
    type: 'event'
  },
  {
    id: 'infrastructure-water-treatment',
    category: 'INFRASTRUCTURE & SUSTAINABILITY',
    title: 'Infrastructure & Water Treatment',
    description: 'Sunrise Aqua Solutions completed and commissioned an 8,000 LPH water treatment/infrastructure project at the airport in September 2026.',
    fullContent: [
      "In a significant environmental and operational milestone, Sunrise Aqua Solutions has successfully completed and commissioned a modern 8,000 Litres Per Hour (LPH) industrial water treatment and purification plant at Calicut International Airport in September 2026.",
      "The state-of-the-art infrastructure installation incorporates multi-stage filtration, reverse osmosis, and automated water-quality monitoring systems to serve both domestic and international terminals.",
      "This green infrastructure project substantially enhances water self-sufficiency, ensuring uninterrupted, safe potable water supply for thousands of daily travelers and airport staff while meeting rigorous sustainability and conservation standards."
    ],
    image: '/Modern Water Treatment Plant Installation.png',
    date: 'SEP 2026',
    source: 'AAI Engineering & Sunrise Aqua Solutions',
    type: 'event'
  },
  {
    id: 'yatri-seva-abhiyan-2026',
    category: 'PASSENGER EXPERIENCE',
    title: 'Yatri Seva Abhiyan 2026 Campaign',
    description: 'The airport actively rolled out passenger-centric upgrades under the national Yatri Seva Abhiyan 2026 initiative, which included setting up dedicated "Listen and Resolve" desks, improved Flight Information Display Systems (FIDS), board-timing accuracy, and enhanced nursing rooms, kids\' play areas, and washrooms.',
    fullContent: [
      "Calicut International Airport has rolled out an extensive suite of passenger-centric infrastructure and service upgrades under the prestigious national 'Yatri Seva Abhiyan 2026' campaign.",
      "Central to the initiative is the launch of prominent 'Listen and Resolve' on-spot service desks across Terminal 1 and Terminal 2, empowering travelers with immediate assistance and query resolution by senior duty managers.",
      "The program also introduced next-generation Flight Information Display Systems (FIDS) with enhanced board-timing accuracy and real-time gate notifications.",
      "Family travelers benefit from completely revamped nursing rooms equipped with baby-care amenities, vibrant children's play lounges, and modernized washrooms adhering to world-class hygiene and accessibility benchmarks."
    ],
    image: '/Modern Airport Nursing and Play Lounge.png',
    date: 'SEP 2026',
    source: 'Ministry of Civil Aviation & AAI Karipur',
    type: 'event'
  }
];

export interface NewsEventsSectionProps {
  onItemClick?: (item: NewsItem) => void;
}

export const NewsEventsSection: React.FC<NewsEventsSectionProps> = ({
  onItemClick,
}) => {
  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const displayedItems = MOCK_NEWS_ITEMS.filter((item) => {
    if (activeTab === 'news') return item.type === 'news';
    return item.type === 'event';
  });

  const handleCardClick = (item: NewsItem) => {
    setSelectedArticle(item);
    if (onItemClick) {
      onItemClick(item);
    }
  };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF7F2] text-[#141414] py-16 sm:py-24 lg:py-28 select-none border-t border-stone-200/50">
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* ======================================================== */}
        {/* SECTION HEADER ROW (Matching Above Section Text Placing) */}
        {/* ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
          
          <div className="max-w-4xl lg:max-w-5xl">
            {/* Index / Category Eyebrow: 05 / NEWS & EVENTS */}
            <div className="flex items-center gap-2.5 text-xs sm:text-[13px] tracking-[0.25em] font-medium text-[#555555] uppercase mb-4 select-none">
              
            </div>

            {/* Main Headline */}
            <h2 className="font-sans text-3xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-bold text-[#121212] tracking-tight leading-[1.06] mb-4 select-none">
              News & Events
            </h2>

            {/* Descriptive Subtitle */}
            <p className="text-[#4A4A4A] text-xs sm:text-sm lg:text-[15px] font-normal leading-relaxed max-w-xl">
              Stay updated with the latest happenings at Calicut International Airport.
            </p>
          </div>

          {/* Toggle Switcher: Events | News */}
          <div className="inline-flex items-center bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-stone-200/90 shadow-sm shrink-0 self-start md:self-end">
            <button
              type="button"
              onClick={() => setActiveTab('events')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'events'
                  ? 'bg-[#1B2533] text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900 font-medium'
              }`}
            >
              Events
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('news')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'news'
                  ? 'bg-[#1B2533] text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900 font-medium'
              }`}
            >
              News
            </button>
          </div>

        </div>

        {/* ======================================================== */}
        {/* 3-COLUMN NEWS & EVENTS CARDS GRID                        */}
        {/* Same Spacing & Rounded Border As Section Above           */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {displayedItems.map((item) => (
            <article
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="group bg-white rounded-[26px] sm:rounded-[30px] overflow-hidden border border-stone-200/80 shadow-lg hover:shadow-2xl hover:shadow-[#A2552B]/15 hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col justify-between cursor-pointer"
            >
              {/* Card Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  {/* Category Label */}
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#A2552B] uppercase mb-2 block">
                    {item.category}
                  </span>

                  {/* Headline */}
                  <h3 className="font-sans text-xl sm:text-[22px] lg:text-[23px] text-[#121212] font-semibold leading-[1.3] tracking-tight mb-2.5 group-hover:text-[#A2552B] transition-colors">
                    {item.title}
                  </h3>

                  {/* Timestamp if present (like IndiGo card) */}
                  {item.timestamp && (
                    <p className="text-[11px] text-stone-400 font-sans mb-2.5">
                      {item.timestamp}
                    </p>
                  )}

                  {/* Excerpt */}
                  <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed font-sans line-clamp-3 mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Footer: Date + Read more ↗ */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <div className="flex items-center gap-1.5 font-medium text-stone-500">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>{item.date}</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs sm:text-[13px] font-semibold text-[#141414] group-hover:text-[#A2552B] transition-colors">
                    <span>Read more</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* ======================================================== */}
      {/* FULL ARTICLE MODAL                                       */}
      {/* ======================================================== */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-stone-200 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Banner Image */}
            <div className="relative h-56 sm:h-64 w-full overflow-hidden shrink-0">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Tag & Date on Banner */}
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-white bg-[#A2552B] px-2.5 py-0.5 rounded-full inline-block mb-2">
                  {selectedArticle.category}
                </span>
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.source}</span>
                </div>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <h3 className="font-sans text-2xl sm:text-3xl text-stone-900 font-bold leading-tight">
                {selectedArticle.title}
              </h3>

              {selectedArticle.timestamp && (
                <div className="flex items-center gap-1.5 text-xs text-stone-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{selectedArticle.timestamp}</span>
                </div>
              )}

              <div className="space-y-3.5 pt-3 border-t border-stone-100 text-stone-700 text-sm sm:text-[15px] leading-relaxed">
                {selectedArticle.fullContent.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Bottom Share & Action Bar */}
              <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share Article</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 rounded-lg bg-[#A2552B] hover:bg-[#8A411B] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-sm"
                >
                  Done
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};


import React, { useState } from 'react';
import { X, Search, Phone, ExternalLink, Building2 } from 'lucide-react';

export interface AirlineInfo {
  id: string;
  name: string;
  code: string;
  terminal: 'Terminal 1' | 'Terminal 2';
  type: 'Domestic' | 'International' | 'Both';
  phone: string;
  website: string;
  destinations: string[];
}

export const AIRLINES_LIST: AirlineInfo[] = [
  {
    id: 'air-india-express',
    name: 'Air India Express',
    code: 'IX',
    terminal: 'Terminal 2',
    type: 'International',
    phone: '+91 483 271 2211',
    website: 'https://www.airindiaexpress.com',
    destinations: ['Dubai', 'Sharjah', 'Abu Dhabi', 'Doha', 'Muscat', 'Bahrain', 'Kuwait', 'Salalah', 'Ras Al Khaimah'],
  },
  {
    id: 'indigo',
    name: 'IndiGo Airlines',
    code: '6E',
    terminal: 'Terminal 1',
    type: 'Both',
    phone: '0124 617 3838',
    website: 'https://www.goindigo.in',
    destinations: ['Mumbai', 'Delhi', 'Bengaluru', 'Chennai', 'Hyderabad', 'Dubai', 'Jeddah'],
  },
  {
    id: 'air-india',
    name: 'Air India',
    code: 'AI',
    terminal: 'Terminal 1',
    type: 'Both',
    phone: '1860 233 1407',
    website: 'https://www.airindia.com',
    destinations: ['Mumbai', 'Delhi', 'Hajj Pilgrim Charters'],
  },
  {
    id: 'emirates',
    name: 'Emirates',
    code: 'EK',
    terminal: 'Terminal 2',
    type: 'International',
    phone: '+91 483 271 2345',
    website: 'https://www.emirates.com',
    destinations: ['Dubai (DXB)', 'Global Hub Connections'],
  },
  {
    id: 'saudia',
    name: 'Saudia (Saudi Arabian Airlines)',
    code: 'SV',
    terminal: 'Terminal 2',
    type: 'International',
    phone: '+91 483 271 4567',
    website: 'https://www.saudia.com',
    destinations: ['Jeddah (JED)', 'Riyadh (RUH)'],
  },
  {
    id: 'qatar-airways',
    name: 'Qatar Airways',
    code: 'QR',
    terminal: 'Terminal 2',
    type: 'International',
    phone: '+91 483 271 8900',
    website: 'https://www.qatarairways.com',
    destinations: ['Doha (Hamad International DOH)'],
  },
  {
    id: 'flydubai',
    name: 'Flydubai',
    code: 'FZ',
    terminal: 'Terminal 2',
    type: 'International',
    phone: '+91 483 271 5566',
    website: 'https://www.flydubai.com',
    destinations: ['Dubai Terminal 2 (DXB)'],
  },
  {
    id: 'etihad',
    name: 'Etihad Airways',
    code: 'EY',
    terminal: 'Terminal 2',
    type: 'International',
    phone: '+91 483 271 6677',
    website: 'https://www.etihad.com',
    destinations: ['Abu Dhabi (Zayed International AUH)'],
  },
  {
    id: 'oman-air',
    name: 'Oman Air',
    code: 'WY',
    terminal: 'Terminal 2',
    type: 'International',
    phone: '+91 483 271 3344',
    website: 'https://www.omanair.com',
    destinations: ['Muscat (MCT)'],
  },
  {
    id: 'gulf-air',
    name: 'Gulf Air',
    code: 'GF',
    terminal: 'Terminal 2',
    type: 'International',
    phone: '+91 483 271 7788',
    website: 'https://www.gulfair.com',
    destinations: ['Bahrain (BAH)'],
  },
  {
    id: 'salam-air',
    name: 'SalamAir',
    code: 'OV',
    terminal: 'Terminal 2',
    type: 'International',
    phone: '+91 483 271 9900',
    website: 'https://www.salamair.com',
    destinations: ['Muscat (MCT)', 'Salalah (SLL)'],
  },
  {
    id: 'akasa-air',
    name: 'Akasa Air',
    code: 'QP',
    terminal: 'Terminal 1',
    type: 'Domestic',
    phone: '+91 9606 112 131',
    website: 'https://www.akasaair.com',
    destinations: ['Bengaluru', 'Mumbai', 'Goa'],
  },
];

export interface AirlineDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AirlineDetailsModal: React.FC<AirlineDetailsModalProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');
  const [filterTerminal, setFilterTerminal] = useState<'All' | 'Terminal 1' | 'Terminal 2'>('All');

  if (!isOpen) return null;

  const filteredAirlines = AIRLINES_LIST.filter((airline) => {
    const matchesTerminal = filterTerminal === 'All' || airline.terminal === filterTerminal;
    const q = search.toLowerCase().trim();
    const matchesSearch =
      !q ||
      airline.name.toLowerCase().includes(q) ||
      airline.code.toLowerCase().includes(q) ||
      airline.destinations.some((d) => d.toLowerCase().includes(q));
    return matchesTerminal && matchesSearch;
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200 bg-[#FAF7F2]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#A2552B] flex items-center justify-center text-white shadow-2xs">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-sans text-lg sm:text-xl font-bold text-stone-900 leading-tight">
                Airlines Operating at Calicut Airport
              </h3>
              <p className="text-xs text-stone-500">
                Direct contacts, terminal allocations, and destinations • CCJ / VOCL
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors cursor-pointer"
            aria-label="Close Airlines Directory"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="px-6 py-3.5 border-b border-stone-200/80 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Terminal Tabs */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {(['All', 'Terminal 1', 'Terminal 2'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setFilterTerminal(t)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  filterTerminal === t
                    ? 'bg-[#A2552B] text-white shadow-2xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {t === 'Terminal 1' ? 'T1 (Domestic)' : t === 'Terminal 2' ? 'T2 (International)' : 'All Airlines'}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search airline or city..."
              className="w-full pl-9 pr-3 py-1.5 rounded-full border border-stone-200 bg-stone-50 text-xs text-stone-900 focus:outline-none focus:border-[#A2552B] focus:bg-white"
            />
          </div>
        </div>

        {/* Airline Cards Grid */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredAirlines.map((airline) => (
              <div
                key={airline.id}
                className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-stone-200/80 hover:border-[#E8CEBE] shadow-2xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between gap-3"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-lg bg-[#FAF2EC] border border-[#E8CEBE] text-[#A2552B] flex items-center justify-center font-bold text-xs">
                        {airline.code}
                      </span>
                      <div>
                        <h4 className="font-bold text-stone-900 text-sm sm:text-base leading-tight">
                          {airline.name}
                        </h4>
                        <span className="text-[11px] font-semibold text-stone-500">
                          {airline.type} Flights
                        </span>
                      </div>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white border border-stone-200 text-[#A2552B]">
                      {airline.terminal}
                    </span>
                  </div>

                  {/* Direct Destinations */}
                  <div className="pt-1">
                    <span className="text-[10px] font-semibold uppercase text-stone-500 block mb-1">
                      Direct Destinations:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {airline.destinations.map((city, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-white border border-stone-200/80 text-[11px] text-stone-700"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with Contact and Web Link */}
                <div className="pt-2 border-t border-stone-200/70 flex items-center justify-between text-xs">
                  <a
                    href={`tel:${airline.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-1.5 text-stone-700 hover:text-[#A2552B] font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#A2552B]" />
                    <span>{airline.phone}</span>
                  </a>

                  <a
                    href={airline.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#A2552B] hover:text-[#8B4420] font-semibold hover:underline"
                  >
                    <span>Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredAirlines.length === 0 && (
            <div className="text-center py-12 text-stone-500 text-xs sm:text-sm">
              No airlines found matching "{search}".
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
          <span className="text-xs text-stone-500">
            For flight ticket bookings, visit the airline's official portal.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#A2552B] hover:bg-[#8B4420] text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Close Directory
          </button>
        </div>
      </div>
    </div>
  );
};

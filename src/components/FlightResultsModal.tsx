import React, { useState } from 'react';
import { X, PlaneLanding, PlaneTakeoff, Clock, MapPin, Building2, Luggage, Search, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';
import { Flight, MOCK_FLIGHTS } from '../data/mockFlights';

interface FlightResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType: 'arrival' | 'departure';
  searchQuery: string;
}

export const FlightResultsModal: React.FC<FlightResultsModalProps> = ({
  isOpen,
  onClose,
  initialType,
  searchQuery: initialSearchQuery,
}) => {
  const [activeTab, setActiveTab] = useState<'arrival' | 'departure'>(initialType);
  const [search, setSearch] = useState(initialSearchQuery);
  const [terminalFilter, setTerminalFilter] = useState<'all' | 'T1' | 'T2'>('all');

  if (!isOpen) return null;

  const filteredFlights = MOCK_FLIGHTS.filter((f) => {
    const matchesType = f.type === activeTab;
    const q = search.toLowerCase().trim();
    const matchesSearch =
      !q ||
      f.flightNumber.toLowerCase().includes(q) ||
      f.airline.toLowerCase().includes(q) ||
      (f.origin && f.origin.toLowerCase().includes(q)) ||
      (f.destination && f.destination.toLowerCase().includes(q));
    const matchesTerminal =
      terminalFilter === 'all' ||
      (terminalFilter === 'T1' && f.terminal.includes('T1')) ||
      (terminalFilter === 'T2' && f.terminal.includes('T2'));

    return matchesType && matchesSearch && matchesTerminal;
  });

  const getStatusBadge = (status: Flight['status']) => {
    switch (status) {
      case 'Landed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Landed
          </span>
        );
      case 'Boarding':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
            Boarding
          </span>
        );
      case 'On Time':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
            On Time
          </span>
        );
      case 'Delayed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            Delayed
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            {status}
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#A2552B]/10 flex items-center justify-center text-[#A2552B] font-bold">
              CCJ
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                Calicut International Airport • Live Flight Status
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#A2552B]/10 text-[#A2552B]">
                  Live
                </span>
              </h3>
              <p className="text-xs text-slate-500">
                Karipur (CCJ) • Today's Real-time Operations Schedule
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters and Search Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          {/* Arrivals / Departures Switch */}
          <div className="flex bg-slate-200/80 p-1 rounded-xl w-fit">
            <button
              onClick={() => setActiveTab('arrival')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'arrival'
                  ? 'bg-[#A2552B] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <PlaneLanding className="w-4 h-4" />
              Arrivals
            </button>
            <button
              onClick={() => setActiveTab('departure')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'departure'
                  ? 'bg-[#A2552B] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <PlaneTakeoff className="w-4 h-4" />
              Departures
            </button>
          </div>

          {/* Quick Terminal Filter */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span>Terminal:</span>
            <button
              onClick={() => setTerminalFilter('all')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                terminalFilter === 'all'
                  ? 'bg-[#A2552B]/15 text-[#A2552B] font-bold'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setTerminalFilter('T2')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                terminalFilter === 'T2'
                  ? 'bg-[#A2552B]/15 text-[#A2552B] font-bold'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              T2 International
            </button>
            <button
              onClick={() => setTerminalFilter('T1')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                terminalFilter === 'T1'
                  ? 'bg-[#A2552B]/15 text-[#A2552B] font-bold'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              T1 Domestic
            </button>
          </div>

          {/* Search Input */}
          <div className="relative flex-1 max-w-xs">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search flight or destination..."
              className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#A2552B] focus:ring-2 focus:ring-[#A2552B]/20"
            />
          </div>
        </div>

        {/* Flight Table / List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          {filteredFlights.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <p className="text-base font-semibold">No flights found matching your query</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for "Dubai", "IndiGo", or flight numbers like "IX 343"</p>
            </div>
          ) : (
            filteredFlights.map((flight) => (
              <div
                key={flight.id}
                className="bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                {/* Airline & Flight Number */}
                <div className="flex items-center gap-3.5 min-w-[200px]">
                  <div className={`w-10 h-10 rounded-xl ${flight.airlineLogoColor} text-white font-black text-sm flex items-center justify-center shadow-sm`}>
                    {flight.airlineCode}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-slate-900 text-base tracking-tight">
                        {flight.flightNumber}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium px-2 py-0.5 rounded bg-slate-100">
                        {flight.airline}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-500" />
                      <span className="font-medium text-slate-700">
                        {flight.type === 'departure' ? `To ${flight.destination}` : `From ${flight.origin}`}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                      Scheduled
                    </div>
                    <div className="font-bold text-slate-800 text-base">
                      {flight.scheduledTime}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                      Estimated
                    </div>
                    <div className={`font-bold text-base ${flight.status === 'Delayed' ? 'text-rose-600' : 'text-slate-800'}`}>
                      {flight.estimatedTime}
                    </div>
                  </div>
                </div>

                {/* Terminal & Gate / Belt */}
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 border border-slate-200/60 px-2.5 py-1.5 rounded-lg">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{flight.terminal}</span>
                  </div>
                  {flight.belt && (
                    <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 border border-slate-200/60 px-2.5 py-1.5 rounded-lg">
                      <Luggage className="w-3.5 h-3.5 text-slate-400" />
                      <span>{flight.belt}</span>
                    </div>
                  )}
                  {flight.gate && (
                    <div className="font-medium text-slate-700 bg-slate-100 px-2.5 py-1.5 rounded-lg">
                      {flight.gate}
                    </div>
                  )}
                </div>

                {/* Status Badge */}
                <div className="sm:text-right shrink-0">
                  {getStatusBadge(flight.status)}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Information updated every 60 seconds directly from Karipur ATC.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 font-semibold text-slate-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};


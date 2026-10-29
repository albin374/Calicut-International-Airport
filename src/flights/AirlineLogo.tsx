import React from 'react';

interface AirlineLogoProps {
  airline: string;
  className?: string;
}

export const AirlineLogo: React.FC<AirlineLogoProps> = ({ airline, className = '' }) => {
  switch (airline) {
    case 'IndiGo':
      return (
        <div className={`flex items-center gap-1.5 select-none ${className}`}>
          <div className="flex items-center font-black tracking-tight text-[#0F2F7F] text-base leading-none">
            <span>IndiGo</span>
            <span className="inline-flex ml-1 items-center">
              <svg className="w-3.5 h-3.5 text-[#194098]" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="6" cy="12" r="2.5" />
                <circle cx="13" cy="8" r="2.2" />
                <circle cx="18" cy="4" r="1.8" />
                <circle cx="12" cy="16" r="2.2" />
                <circle cx="17" cy="20" r="1.8" />
              </svg>
            </span>
          </div>
        </div>
      );

    case 'Air India Express':
      return (
        <div className={`flex flex-col select-none leading-none ${className}`}>
          <div className="font-extrabold uppercase tracking-tight text-[#A2552B] text-xs">
            AIR INDIA
          </div>
          <div className="font-black italic tracking-wide text-[#E07A5F] text-sm -mt-0.5">
            express
          </div>
        </div>
      );

    case 'Air India':
      return (
        <div className={`flex items-center gap-1.5 select-none ${className}`}>
          <div className="flex items-center font-extrabold tracking-tight text-[#A2552B] text-base leading-none">
            <span>AIR INDIA</span>
            <span className="w-2 h-2 rounded-full bg-[#E07A5F] inline-block ml-1 animate-pulse" />
          </div>
        </div>
      );

    case 'Emirates':
      return (
        <div className={`flex items-center select-none ${className}`}>
          <div className="font-serif font-black tracking-widest text-[#A2552B] text-base uppercase">
            Emirates
          </div>
        </div>
      );

    case 'Qatar Airways':
      return (
        <div className={`flex flex-col select-none leading-none ${className}`}>
          <div className="font-bold tracking-tight text-[#5C1A2E] text-sm uppercase">
            QATAR
          </div>
          <div className="font-medium text-[10px] tracking-widest text-stone-600 uppercase">
            AIRWAYS
          </div>
        </div>
      );

    case 'Flydubai':
      return (
        <div className={`flex items-center font-bold text-base select-none ${className}`}>
          <span className="text-[#0055A5]">fly</span>
          <span className="text-[#F58220] font-black">dubai</span>
        </div>
      );

    case 'Saudia':
      return (
        <div className={`flex items-center gap-1 select-none ${className}`}>
          <div className="font-black tracking-wider text-[#006C35] text-sm uppercase">
            SAUDIA
          </div>
        </div>
      );

    case 'Oman Air':
      return (
        <div className={`flex items-center gap-1 select-none ${className}`}>
          <div className="font-bold tracking-wide text-[#004B6E] text-sm uppercase">
            OMAN AIR
          </div>
        </div>
      );

    default:
      return (
        <div className={`font-bold text-stone-800 text-sm ${className}`}>
          {airline}
        </div>
      );
  }
};


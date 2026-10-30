import React, { useState } from 'react';

export const AIRLINE_IMAGE_MAP: Record<string, string> = {
  'Air India Express': '/flights logo/Air India Express.png',
  'IndiGo': '/flights logo/IndiGo.png',
  'IndiGo Airlines': '/flights logo/IndiGo.png',
  'Akasa Air': '/flights logo/Akasa Air.png',
  'Saudia': '/flights logo/Saudia Airline .png',
  'Saudia (Saudi Arabian Airlines)': '/flights logo/Saudia Airline .png',
  'Saudia Airline': '/flights logo/Saudia Airline .png',
  'SpiceJet': '/flights logo/SpiceJet .png',
  'SalamAir': '/flights logo/SalamAir.png',
  'Salam Air': '/flights logo/SalamAir.png',
  'Air Arabia': '/flights logo/AirArabia .png',
  'Air Arabia Abu Dhabi': '/flights logo/AirArabia .png',
  'AirArabia': '/flights logo/AirArabia .png',
  'Etihad Airways': '/flights logo/Etihad Airways.png',
  'Etihad': '/flights logo/Etihad Airways.png',
  'flydubai': '/flights logo/Flydubai .png',
  'Flydubai': '/flights logo/Flydubai .png',
  'Oman Air': '/flights logo/Oman Air .png',
  'Qatar Airways': '/flights logo/Qatar Airways .png',
  'Flynas': '/flights logo/Flynas.png',
  'flynas': '/flights logo/Flynas.png',
};

export const getAirlineLogoUrl = (name: string): string | undefined => {
  if (!name) return undefined;
  if (AIRLINE_IMAGE_MAP[name]) return AIRLINE_IMAGE_MAP[name];
  const trimmed = name.trim();
  if (AIRLINE_IMAGE_MAP[trimmed]) return AIRLINE_IMAGE_MAP[trimmed];
  const lower = trimmed.toLowerCase();
  for (const [key, url] of Object.entries(AIRLINE_IMAGE_MAP)) {
    if (key.toLowerCase() === lower) return url;
  }
  if (lower.includes('air india express')) return '/flights logo/Air India Express.png';
  if (lower.includes('indigo')) return '/flights logo/IndiGo.png';
  if (lower.includes('akasa')) return '/flights logo/Akasa Air.png';
  if (lower.includes('saudia')) return '/flights logo/Saudia Airline .png';
  if (lower.includes('spicejet')) return '/flights logo/SpiceJet .png';
  if (lower.includes('salam')) return '/flights logo/SalamAir.png';
  if (lower.includes('arabia')) return '/flights logo/AirArabia .png';
  if (lower.includes('etihad')) return '/flights logo/Etihad Airways.png';
  if (lower.includes('flydubai')) return '/flights logo/Flydubai .png';
  if (lower.includes('oman')) return '/flights logo/Oman Air .png';
  if (lower.includes('qatar')) return '/flights logo/Qatar Airways .png';
  if (lower.includes('flynas')) return '/flights logo/Flynas.png';
  return undefined;
};

interface AirlineLogoProps {
  airline: string;
  logoUrl?: string;
  className?: string;
}

export const AirlineLogo: React.FC<AirlineLogoProps> = ({ airline, logoUrl, className = '' }) => {
  const [imageError, setImageError] = useState(false);
  const rawLogoUrl = logoUrl || getAirlineLogoUrl(airline);
  const resolvedLogoUrl = rawLogoUrl ? encodeURI(rawLogoUrl) : undefined;

  if (resolvedLogoUrl && !imageError) {
    return (
      <div className={`flex items-center select-none ${className || 'h-8 sm:h-9 max-h-9'}`}>
        <img
          src={resolvedLogoUrl}
          alt={`${airline} Logo`}
          onError={() => setImageError(true)}
          className="h-full w-auto max-h-full max-w-[200px] object-contain object-left"
          loading="lazy"
        />
      </div>
    );
  }

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

    case 'Akasa Air':
      return (
        <div className={`flex items-center gap-1.5 select-none ${className}`}>
          <div className="flex items-center font-black tracking-tight text-[#E85D04] text-base leading-none">
            <span>akasa</span>
            <span className="text-[#3A0CA3] ml-1 font-extrabold text-sm uppercase">air</span>
            <span className="inline-flex ml-1 w-2.5 h-2.5 rounded-full bg-[#E85D04] animate-pulse" />
          </div>
        </div>
      );

    case 'SpiceJet':
      return (
        <div className={`flex items-center gap-1 select-none ${className}`}>
          <div className="font-black italic tracking-tighter text-[#A2552B] text-base uppercase">
            SpiceJet
          </div>
          <span className="flex gap-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A2552B]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#F39C12]" />
          </span>
        </div>
      );

    case 'SalamAir':
      return (
        <div className={`flex items-center gap-1 select-none ${className}`}>
          <span className="text-[#00A859] font-black text-base tracking-tight">Salam</span>
          <span className="text-[#005B94] font-bold text-base tracking-tight">Air</span>
        </div>
      );

    case 'Air Arabia':
      return (
        <div className={`flex items-center gap-1.5 select-none ${className}`}>
          <span className="w-2.5 h-2.5 rounded-sm bg-[#A2552B] rotate-45 inline-block" />
          <div className="font-black tracking-tight text-[#A2552B] text-sm uppercase">
            air arabia
          </div>
        </div>
      );

    case 'Air Arabia Abu Dhabi':
      return (
        <div className={`flex flex-col select-none leading-none ${className}`}>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-[#A2552B] rotate-45 inline-block" />
            <span className="font-black tracking-tight text-[#A2552B] text-xs uppercase">
              air arabia
            </span>
          </div>
          <div className="text-[10px] font-bold text-stone-500 uppercase tracking-widest pl-3">
            Abu Dhabi
          </div>
        </div>
      );

    case 'Etihad Airways':
    case 'Etihad':
      return (
        <div className={`flex items-center select-none ${className}`}>
          <div className="font-serif font-black tracking-widest text-[#B38038] text-sm uppercase">
            ETIHAD
          </div>
        </div>
      );

    case 'Flynas':
    case 'flynas':
      return (
        <div className={`flex items-center gap-1 select-none ${className}`}>
          <span className="text-[#52B788] font-black text-base tracking-tighter lowercase">fly</span>
          <span className="text-[#1B4332] font-black text-base tracking-tighter uppercase">nas</span>
        </div>
      );

    case 'Gulf Air':
      return (
        <div className={`flex items-center select-none ${className}`}>
          <div className="font-serif font-bold tracking-wider text-[#A3702C] text-sm uppercase">
            GULF AIR
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


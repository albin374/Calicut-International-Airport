import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface HeritageSectionProps {
  onDiscoverClick?: () => void;
  imageUrl?: string;
}

export const HeritageSection: React.FC<HeritageSectionProps> = ({
  onDiscoverClick,
  imageUrl = '/Golden Sunset Over Coastline from Airplane Wing.png',
}) => {
  return (
    <section className="w-full bg-[#FAF7F2] text-[#141414] overflow-hidden">
      
      {/* Editorial Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-16 sm:pt-24 lg:pt-28 pb-14 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Eyebrow + Huge Heritage Headline */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            
            {/* Eyebrow Accent Bar & Tag */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="w-8 h-[2px] bg-[#A2552B] rounded-full inline-block shrink-0" />
              <span className="text-xs sm:text-[13px] font-semibold tracking-[0.25em] text-[#A2552B] uppercase">
                CALICUT INTERNATIONAL AIRPORT
              </span>
            </div>

            {/* Modern Professional Headline */}
            <h2 className="font-sans text-5xl sm:text-7xl lg:text-[84px] font-bold text-[#121212] leading-[1.04] tracking-tight">
              Rooted in<br />
              heritage.<br />
              Connected to<br />
              the <span className="text-[#A2552B]">world.</span>
            </h2>
          </div>

          {/* Right Column: Index Tag + Descriptive Copy + Pill Button */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:pt-14">
            
            {/* Index & Section Tag */}
            <div className="flex items-center gap-2.5 text-xs sm:text-[13px] tracking-[0.2em] font-medium text-[#4A4A4A] uppercase mb-6 sm:mb-8">
              <span className="font-bold text-[#A2552B]">01</span>
              <span className="text-stone-400">/</span>
              <span>THE SPIRIT OF KOZHIKODE</span>
            </div>

            {/* Professional Body Text */}
            <p className="text-[#3A3A3A] font-sans text-base sm:text-lg lg:text-[19px] leading-[1.75] font-normal mb-8 sm:mb-10">
              A gateway to the Malabar coast, where centuries of trade, rich traditions and warm hospitality welcome every traveller. From the vibrant streets of Mittayi Theruvu to the serene shores of Kozhikode, every arrival begins a story.
            </p>

            {/* Pill CTA Button */}
            <div>
              <button
                type="button"
                onClick={onDiscoverClick}
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-[#A2552B] text-[#A2552B] hover:bg-[#A2552B] hover:text-white transition-all duration-300 text-sm font-medium tracking-wide group cursor-pointer shadow-xs hover:shadow-md active:scale-98"
              >
                <span>Discover Kozhikode</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Panoramic Airplane Wing Golden Sunset Image */}
      <div className="w-full relative overflow-hidden bg-stone-900 leading-none">
        <img
          src={imageUrl}
          alt="Golden Sunset Over Coastline from Airplane Wing"
          className="w-full h-auto min-h-[280px] sm:min-h-[420px] lg:min-h-[520px] max-h-[680px] object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
          loading="lazy"
        />
      </div>

    </section>
  );
};


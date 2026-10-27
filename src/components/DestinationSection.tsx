import React from 'react';

export interface DestinationCard {
  id: string;
  title: string;
  image: string;
  alt: string;
}

export interface DestinationSectionProps {
  imageUrl?: string;
  onCardClick?: (card: DestinationCard) => void;
}

export const DEFAULT_CARDS: DestinationCard[] = [
  {
    id: 'coastlines',
    title: 'SERENE COASTLINES',
    image: '/Golden Coastal Sunset with Skyline.png',
    alt: 'Serene Coastlines of Kozhikode Beach at Sunset'
  },
  {
    id: 'heritage',
    title: 'RICH HERITAGE',
    image: '/Twilight Lanterns in the Old Market.png',
    alt: 'Rich Heritage of Historic S.M. Street with Glowing Lanterns'
  },
  {
    id: 'flavours',
    title: 'AUTHENTIC FLAVOURS',
    image: '/Cinematic Spiced Rice Feast.png',
    alt: 'Authentic Malabar Biryani & Culinary Delicacies'
  }
];

export const DestinationSection: React.FC<DestinationSectionProps> = ({
  imageUrl = '/Calicut Airport Entrance at Sunset.png',
  onCardClick,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF7F2] text-[#141414] min-h-[520px] lg:min-h-[580px] flex items-center">
      
      {/* Background Airport Entrance Photo on Right with Soft Feathered Blend */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img 
          src={imageUrl}
          alt="Calicut Airport Entrance at Sunset"
          className="w-full h-full object-cover object-[center_right]"
          loading="lazy"
        />
        {/* Soft feathered gradient mask blending into the solid cream background on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2] via-[40%] sm:via-[42%] lg:via-[44%] to-transparent" />
      </div>

      {/* Main Content Container (Positioned on the Left Half) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20 flex flex-col justify-center">
        <div className="w-full max-w-xl lg:max-w-[540px]">
          
          {/* Index / Section Tag: 02 / BEYOND YOUR JOURNEY */}
          <div className="flex items-center gap-2.5 text-xs sm:text-[13px] tracking-[0.25em] font-medium text-[#555555] uppercase mb-4 select-none">
            <span className="font-bold text-[#A2552B]">02</span>
            <span className="text-stone-400">/</span>
            <span>BEYOND YOUR JOURNEY</span>
          </div>

          {/* Main Headline: A Destination That Stays With You */}
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-[66px] font-normal text-[#121212] tracking-tight leading-[1.04] mb-4 select-none">
            A Destination<br />
            That <span className="italic font-serif text-[#A2552B]">Stays With You</span>
          </h2>

          {/* Descriptive Copy */}
          <p className="text-[#4A4A4A] text-xs sm:text-sm lg:text-[15px] font-normal leading-relaxed max-w-lg mb-8">
            From golden coastlines and historic streets to unforgettable flavours and warm hospitality, Kozhikode leaves a lasting impression long after your journey.
          </p>

          {/* 3 Horizontal Feature Cards */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
            {DEFAULT_CARDS.map((card) => (
              <div 
                key={card.id}
                onClick={() => onCardClick && onCardClick(card)}
                className="group flex flex-col cursor-pointer transition-transform duration-300"
              >
                {/* Thumbnail Image Box */}
                <div className="w-full aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden shadow-xs border border-stone-200/60 bg-stone-100">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                  />
                </div>

                {/* Card Title Label */}
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] text-[#222222] uppercase mt-2.5 transition-colors group-hover:text-[#A2552B]">
                  {card.title}
                </span>

                {/* Terracotta Accent Line Underneath */}
                <span className="w-6 h-[1.5px] bg-[#A2552B] mt-1.5 transition-all duration-300 group-hover:w-10" />
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};


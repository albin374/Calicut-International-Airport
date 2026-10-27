import { useState } from 'react';
import { AirportBanner } from './components/AirportBanner';
import { HeritageSection } from './components/HeritageSection';
import { DestinationSection } from './components/DestinationSection';
import { AirportEssentialsSection } from './components/AirportEssentialsSection';
import { NewsEventsSection } from './components/NewsEventsSection';
import { HighlightsKozhikodeSection } from './components/HighlightsKozhikodeSection';
import { FooterSection } from './components/FooterSection';
import { FlightResultsModal } from './components/FlightResultsModal';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'arrival' | 'departure'>('arrival');
  const [modalSearch, setModalSearch] = useState('');

  const handleSearch = (query: string, type: 'arrival' | 'departure') => {
    setModalType(type);
    setModalSearch(query);
    setIsModalOpen(true);
  };

  const handleDiscover = () => {
    // Smooth scroll down to destination section
    const destEl = document.getElementById('destination-section');
    if (destEl) {
      destEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen m-0 p-0 relative font-sans selection:bg-[#A2552B] selection:text-white bg-[#FAF7F2]">
      {/* 1. Full-Screen Airport Hero Banner Section with Carousel */}
      <AirportBanner 
        onSearchFlights={handleSearch}
      />

      {/* 2. Heritage Section ("01 / THE SPIRIT OF KOZHIKODE: Rooted in heritage. Connected to the world.") */}
      <HeritageSection 
        onDiscoverClick={handleDiscover}
        imageUrl="/Golden Sunset Over Coastline from Airplane Wing.png"
      />

      {/* 3. Destination Section ("02 / BEYOND YOUR JOURNEY: A Destination That Stays With You") */}
      <div id="destination-section">
        <DestinationSection 
          imageUrl="/Calicut Airport Entrance at Sunset.png"
        />
      </div>

      {/* 4. Airport Essentials Section ("03 / AIRPORT ESSENTIALS: The Little Things That Make Travel Easier") */}
      <div id="essentials-section">
        <AirportEssentialsSection />
      </div>

      {/* 5. News & Events Section ("News & Events: Stay updated with the latest happenings at Calicut International Airport.") */}
      <div id="news-section">
        <NewsEventsSection />
      </div>

      {/* 6. Highlights of Kozhikode Section ("HIGHLIGHTS OF KOZHIKODE: Timeless places, unforgettable experiences.") */}
      <div id="highlights-section">
        <HighlightsKozhikodeSection />
      </div>

      {/* 7. Footer Section with Cinematic Sunset Airliner Landing Background */}
      <FooterSection />

      {/* Live Flight Schedule Modal */}
      <FlightResultsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialType={modalType}
        searchQuery={modalSearch}
      />
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { AirportBanner } from './components/AirportBanner';
import { HeritageSection } from './components/HeritageSection';
import { DestinationSection } from './components/DestinationSection';
import { AirportEssentialsSection } from './components/AirportEssentialsSection';
import { CalicutStorySection } from './components/CalicutStorySection';
import { NewsEventsSection } from './components/NewsEventsSection';
import { HighlightsKozhikodeSection } from './components/HighlightsKozhikodeSection';
import { FooterSection } from './components/FooterSection';
import { FlightResultsModal } from './components/FlightResultsModal';
import { AirlineDetailsModal } from './components/AirlineDetailsModal';
import { ProceduresPage } from './procedures';
import { HowToReachPage } from './how-to-reach';
import { AirportMapPage } from './airport-map';
import { FlightsPage, FlightPageTab } from './flights';
import { AirlineDetailsPage } from './airline-details';
import { FacilitiesServicesPage, ShopDineRelaxPage, TouristAttractionsPage } from './passengers';
import { CorporatePage } from './corporate';
import { ContactPage } from './contact';

export type AppPage = 
  | 'home' 
  | 'procedures' 
  | 'how-to-reach' 
  | 'airport-map' 
  | 'flights' 
  | 'airline-details'
  | 'facilities-services'
  | 'shop-dine-relax'
  | 'tourist-attractions'
  | 'corporate'
  | 'contact';

export function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>(() => {
    const hash = window.location.hash;
    if (hash === '#procedures') return 'procedures';
    if (hash === '#how-to-reach') return 'how-to-reach';
    if (hash === '#airport-map') return 'airport-map';
    if (hash === '#airline-details' || hash === '#airlines') return 'airline-details';
    if (hash === '#facilities-services' || hash === '#facilities' || hash === '#services') return 'facilities-services';
    if (hash === '#shop-dine-relax' || hash === '#shop-dine' || hash === '#dining') return 'shop-dine-relax';
    if (hash === '#tourist-attractions' || hash === '#attractions') return 'tourist-attractions';
    if (hash === '#corporate') return 'corporate';
    if (hash === '#contact') return 'contact';
    if (
      hash.startsWith('#flights') ||
      hash === '#arrival' ||
      hash === '#departure' ||
      hash === '#schedules' ||
      hash === '#upcoming'
    ) {
      return 'flights';
    }
    return 'home';
  });

  const [flightTab, setFlightTab] = useState<FlightPageTab>(() => {
    const hash = window.location.hash;
    if (hash === '#flights-departure' || hash === '#departure') return 'departure';
    if (hash === '#flights-schedules' || hash === '#schedules') return 'schedules';
    if (hash === '#flights-upcoming' || hash === '#upcoming') return 'upcoming';
    return 'arrival';
  });

  const [mapTab, setMapTab] = useState<'overview' | 'T1' | 'T2' | 'parking'>('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAirlineModalOpen, setIsAirlineModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'arrival' | 'departure'>('arrival');
  const [modalSearch, setModalSearch] = useState('');

  // Sync hash routing so back/forward browser buttons and direct links work seamlessly
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#procedures') {
        setCurrentPage('procedures');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#how-to-reach') {
        setCurrentPage('how-to-reach');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#airport-map') {
        setCurrentPage('airport-map');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#airline-details' || hash === '#airlines') {
        setCurrentPage('airline-details');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#facilities-services' || hash === '#facilities' || hash === '#services') {
        setCurrentPage('facilities-services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#shop-dine-relax' || hash === '#shop-dine' || hash === '#dining') {
        setCurrentPage('shop-dine-relax');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#tourist-attractions' || hash === '#attractions') {
        setCurrentPage('tourist-attractions');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#corporate') {
        setCurrentPage('corporate');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#contact') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#flights-departure' || hash === '#departure') {
        setFlightTab('departure');
        setCurrentPage('flights');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#flights-schedules' || hash === '#schedules') {
        setFlightTab('schedules');
        setCurrentPage('flights');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#flights-upcoming' || hash === '#upcoming') {
        setFlightTab('upcoming');
        setCurrentPage('flights');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#flights-arrival' || hash === '#arrival' || hash === '#flights') {
        setFlightTab('arrival');
        setCurrentPage('flights');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '' || hash === '#') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (
    page: AppPage,
    tab?: 'overview' | 'T1' | 'T2' | 'parking',
    fTab?: FlightPageTab
  ) => {
    if (tab) {
      setMapTab(tab);
    }
    if (fTab) {
      setFlightTab(fTab);
    }
    setCurrentPage(page);

    if (page === 'procedures') {
      window.location.hash = '#procedures';
    } else if (page === 'how-to-reach') {
      window.location.hash = '#how-to-reach';
    } else if (page === 'airport-map') {
      window.location.hash = '#airport-map';
    } else if (page === 'flights') {
      window.location.hash = `#flights-${fTab || flightTab}`;
    } else if (page === 'airline-details') {
      window.location.hash = '#airline-details';
    } else if (page === 'facilities-services') {
      window.location.hash = '#facilities-services';
    } else if (page === 'shop-dine-relax') {
      window.location.hash = '#shop-dine-relax';
    } else if (page === 'tourist-attractions') {
      window.location.hash = '#tourist-attractions';
    } else if (page === 'corporate') {
      window.location.hash = '#corporate';
    } else if (page === 'contact') {
      window.location.hash = '#contact';
    } else {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToFlights = (tab: FlightPageTab = 'arrival') => {
    setFlightTab(tab);
    setCurrentPage('flights');
    window.location.hash = `#flights-${tab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <div className="w-full max-w-full min-h-screen m-0 p-0 relative font-sans selection:bg-[#A2552B] selection:text-white bg-[#FAF7F2] overflow-x-hidden">
      {currentPage === 'airline-details' ? (
        /* Dedicated Airline Details Directory Page */
        <AirlineDetailsPage
          onNavigateHome={() => navigateTo('home')}
          onNavigateToProcedures={() => navigateTo('procedures')}
          onNavigateToHowToReach={() => navigateTo('how-to-reach')}
          onNavigateToAirportMap={(tab) => navigateTo('airport-map', tab)}
          onNavigateToFlights={navigateToFlights}
          onNavigateToFacilities={() => navigateTo('facilities-services')}
          onNavigateToShopDine={() => navigateTo('shop-dine-relax')}
          onNavigateToTouristAttractions={() => navigateTo('tourist-attractions')}
          onNavigateToCorporate={() => navigateTo('corporate')}
          onNavigateToContact={() => navigateTo('contact')}
        />
      ) : currentPage === 'flights' ? (
        /* Dedicated Flights Operations Page (Arrival, Departure, Schedules, Upcoming) */
        <FlightsPage
          initialTab={flightTab}
          onNavigateHome={() => navigateTo('home')}
          onNavigateToProcedures={() => navigateTo('procedures')}
          onNavigateToHowToReach={() => navigateTo('how-to-reach')}
          onNavigateToAirportMap={(tab) => navigateTo('airport-map', tab)}
          onOpenAirlineDetails={() => navigateTo('airline-details')}
          onNavigateToFacilities={() => navigateTo('facilities-services')}
          onNavigateToShopDine={() => navigateTo('shop-dine-relax')}
          onNavigateToTouristAttractions={() => navigateTo('tourist-attractions')}
          onNavigateToCorporate={() => navigateTo('corporate')}
          onNavigateToContact={() => navigateTo('contact')}
        />
      ) : currentPage === 'procedures' ? (
        /* Procedures Dedicated Page */
        <ProceduresPage 
          onNavigateHome={() => navigateTo('home')}
          onNavigateToHowToReach={() => navigateTo('how-to-reach')}
          onNavigateToAirportMap={(tab) => navigateTo('airport-map', tab)}
          onOpenFlightStatus={(type) => navigateToFlights(type || 'departure')}
          onOpenAirlineDetails={() => navigateTo('airline-details')}
          onNavigateToFacilities={() => navigateTo('facilities-services')}
          onNavigateToShopDine={() => navigateTo('shop-dine-relax')}
          onNavigateToTouristAttractions={() => navigateTo('tourist-attractions')}
          onNavigateToCorporate={() => navigateTo('corporate')}
          onNavigateToContact={() => navigateTo('contact')}
        />
      ) : currentPage === 'how-to-reach' ? (
        /* How to Reach Dedicated Page */
        <HowToReachPage
          onNavigateHome={() => navigateTo('home')}
          onNavigateToProcedures={() => navigateTo('procedures')}
          onNavigateToAirportMap={(tab) => navigateTo('airport-map', tab)}
          onOpenFlightStatus={(type) => navigateToFlights(type || 'arrival')}
          onOpenAirlineDetails={() => navigateTo('airline-details')}
          onNavigateToFacilities={() => navigateTo('facilities-services')}
          onNavigateToShopDine={() => navigateTo('shop-dine-relax')}
          onNavigateToTouristAttractions={() => navigateTo('tourist-attractions')}
          onNavigateToCorporate={() => navigateTo('corporate')}
          onNavigateToContact={() => navigateTo('contact')}
        />
      ) : currentPage === 'facilities-services' ? (
        /* Facilities & Passenger Services Dedicated Page */
        <FacilitiesServicesPage
          onNavigateHome={() => navigateTo('home')}
          onNavigateToProcedures={() => navigateTo('procedures')}
          onNavigateToHowToReach={() => navigateTo('how-to-reach')}
          onNavigateToAirportMap={(tab) => navigateTo('airport-map', tab)}
          onNavigateToFlights={navigateToFlights}
          onOpenAirlineDetails={() => navigateTo('airline-details')}
          onNavigateToFacilities={() => navigateTo('facilities-services')}
          onNavigateToShopDine={() => navigateTo('shop-dine-relax')}
          onNavigateToTouristAttractions={() => navigateTo('tourist-attractions')}
          onNavigateToCorporate={() => navigateTo('corporate')}
          onNavigateToContact={() => navigateTo('contact')}
        />
      ) : currentPage === 'shop-dine-relax' ? (
        /* Shop, Dine & Relax Dedicated Page */
        <ShopDineRelaxPage
          onNavigateHome={() => navigateTo('home')}
          onNavigateToProcedures={() => navigateTo('procedures')}
          onNavigateToHowToReach={() => navigateTo('how-to-reach')}
          onNavigateToAirportMap={(tab) => navigateTo('airport-map', tab)}
          onNavigateToFlights={navigateToFlights}
          onOpenAirlineDetails={() => navigateTo('airline-details')}
          onNavigateToFacilities={() => navigateTo('facilities-services')}
          onNavigateToShopDine={() => navigateTo('shop-dine-relax')}
          onNavigateToTouristAttractions={() => navigateTo('tourist-attractions')}
          onNavigateToCorporate={() => navigateTo('corporate')}
          onNavigateToContact={() => navigateTo('contact')}
        />
      ) : currentPage === 'tourist-attractions' ? (
        /* Tourist Attractions Dedicated Page */
        <TouristAttractionsPage
          onNavigateHome={() => navigateTo('home')}
          onNavigateToProcedures={() => navigateTo('procedures')}
          onNavigateToHowToReach={() => navigateTo('how-to-reach')}
          onNavigateToAirportMap={(tab) => navigateTo('airport-map', tab)}
          onNavigateToFlights={navigateToFlights}
          onOpenAirlineDetails={() => navigateTo('airline-details')}
          onNavigateToFacilities={() => navigateTo('facilities-services')}
          onNavigateToShopDine={() => navigateTo('shop-dine-relax')}
          onNavigateToTouristAttractions={() => navigateTo('tourist-attractions')}
          onNavigateToCorporate={() => navigateTo('corporate')}
          onNavigateToContact={() => navigateTo('contact')}
        />
      ) : currentPage === 'airport-map' ? (
        /* Airport Map Dedicated Page */
        <AirportMapPage
          onNavigateHome={() => navigateTo('home')}
          onNavigateToProcedures={() => navigateTo('procedures')}
          onNavigateToHowToReach={() => navigateTo('how-to-reach')}
          onOpenFlightStatus={(type) => navigateToFlights(type || 'arrival')}
          onOpenAirlineDetails={() => navigateTo('airline-details')}
          onNavigateToFacilities={() => navigateTo('facilities-services')}
          onNavigateToShopDine={() => navigateTo('shop-dine-relax')}
          onNavigateToTouristAttractions={() => navigateTo('tourist-attractions')}
          onNavigateToCorporate={() => navigateTo('corporate')}
          onNavigateToContact={() => navigateTo('contact')}
          initialTab={mapTab}
        />
      ) : currentPage === 'corporate' ? (
        /* Dedicated Corporate & Institutional Page */
        <CorporatePage
          onNavigateHome={() => navigateTo('home')}
          onNavigateToProcedures={() => navigateTo('procedures')}
          onNavigateToHowToReach={() => navigateTo('how-to-reach')}
          onNavigateToAirportMap={(tab) => navigateTo('airport-map', tab)}
          onNavigateToFlights={navigateToFlights}
          onOpenAirlineDetails={() => navigateTo('airline-details')}
          onNavigateToFacilities={() => navigateTo('facilities-services')}
          onNavigateToShopDine={() => navigateTo('shop-dine-relax')}
          onNavigateToTouristAttractions={() => navigateTo('tourist-attractions')}
          onNavigateToCorporate={() => navigateTo('corporate')}
          onNavigateToContact={() => navigateTo('contact')}
        />
      ) : currentPage === 'contact' ? (
        /* Dedicated Contact Us & Passenger Support Page */
        <ContactPage
          onNavigateHome={() => navigateTo('home')}
          onNavigateToProcedures={() => navigateTo('procedures')}
          onNavigateToHowToReach={() => navigateTo('how-to-reach')}
          onNavigateToAirportMap={(tab) => navigateTo('airport-map', tab)}
          onNavigateToFlights={navigateToFlights}
          onOpenAirlineDetails={() => navigateTo('airline-details')}
          onNavigateToFacilities={() => navigateTo('facilities-services')}
          onNavigateToShopDine={() => navigateTo('shop-dine-relax')}
          onNavigateToTouristAttractions={() => navigateTo('tourist-attractions')}
          onNavigateToCorporate={() => navigateTo('corporate')}
          onNavigateToContact={() => navigateTo('contact')}
        />
      ) : (
        /* Home Landing Page */
        <>
          {/* 1. Full-Screen Airport Hero Banner Section with Carousel */}
          <AirportBanner 
            onSearchFlights={handleSearch}
            onNavigateToProcedures={() => navigateTo('procedures')}
            onNavigateToHowToReach={() => navigateTo('how-to-reach')}
            onNavigateToAirportMap={(tab) => navigateTo('airport-map', tab)}
            onNavigateToFlights={navigateToFlights}
            onOpenAirlineDetails={() => navigateTo('airline-details')}
            onNavigateToFacilities={() => navigateTo('facilities-services')}
            onNavigateToShopDine={() => navigateTo('shop-dine-relax')}
            onNavigateToTouristAttractions={() => navigateTo('tourist-attractions')}
            onNavigateToCorporate={() => navigateTo('corporate')}
          onNavigateToContact={() => navigateTo('contact')}
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

          {/* 5. Chronicles of Calicut Section ("04 / CHRONICLES OF CALICUT: The Story of Calicut") */}
          <div id="story-section">
            <CalicutStorySection />
          </div>

          {/* 6. News & Events Section ("05 / NEWS & EVENTS: Stay updated with the latest happenings at Calicut International Airport.") */}
          <div id="news-section">
            <NewsEventsSection />
          </div>

          {/* 6. Highlights of Kozhikode Section ("HIGHLIGHTS OF KOZHIKODE: Timeless places, unforgettable experiences.") */}
          <div id="highlights-section">
            <HighlightsKozhikodeSection />
          </div>

          {/* 7. Footer Section with Cinematic Sunset Airliner Landing Background */}
          <FooterSection />
        </>
      )}

      {/* Live Flight Schedule Modal (Accessible globally) */}
      <FlightResultsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialType={modalType}
        searchQuery={modalSearch}
      />

      {/* Airlines Operating Directory Modal */}
      <AirlineDetailsModal
        isOpen={isAirlineModalOpen}
        onClose={() => setIsAirlineModalOpen(false)}
      />
    </div>
  );
}

export default App;

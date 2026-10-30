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

function parseCurrentRoute(): {
  page: AppPage;
  flightTab: FlightPageTab;
  cleanPath: string;
} {
  // Support pathname first (clean URLs like /procedures), then fallback to hash if present
  let path = window.location.pathname.replace(/^\/+/, '').toLowerCase();
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  
  if (!path && hash) {
    path = hash;
  }

  if (path === 'procedures') return { page: 'procedures', flightTab: 'arrival', cleanPath: '/procedures' };
  if (path === 'how-to-reach') return { page: 'how-to-reach', flightTab: 'arrival', cleanPath: '/how-to-reach' };
  if (path === 'airport-map') return { page: 'airport-map', flightTab: 'arrival', cleanPath: '/airport-map' };
  if (path === 'airline-details' || path === 'airlines') return { page: 'airline-details', flightTab: 'arrival', cleanPath: '/airline-details' };
  if (path === 'facilities-services' || path === 'facilities' || path === 'services') return { page: 'facilities-services', flightTab: 'arrival', cleanPath: '/facilities-services' };
  if (path === 'shop-dine-relax' || path === 'shop-dine' || path === 'dining') return { page: 'shop-dine-relax', flightTab: 'arrival', cleanPath: '/shop-dine-relax' };
  if (path === 'tourist-attractions' || path === 'attractions') return { page: 'tourist-attractions', flightTab: 'arrival', cleanPath: '/tourist-attractions' };
  if (path === 'corporate') return { page: 'corporate', flightTab: 'arrival', cleanPath: '/corporate' };
  if (path === 'contact') return { page: 'contact', flightTab: 'arrival', cleanPath: '/contact' };

  if (path === 'flights-departure' || path === 'departure') return { page: 'flights', flightTab: 'departure', cleanPath: '/flights-departure' };
  if (path === 'flights-schedules' || path === 'schedules') return { page: 'flights', flightTab: 'schedules', cleanPath: '/flights-schedules' };
  if (path === 'flights-upcoming' || path === 'upcoming') return { page: 'flights', flightTab: 'upcoming', cleanPath: '/flights-upcoming' };
  if (path === 'flights-arrival' || path === 'arrival' || path === 'flights') return { page: 'flights', flightTab: 'arrival', cleanPath: '/flights-arrival' };

  return { page: 'home', flightTab: 'arrival', cleanPath: '/' };
}

export function App() {
  const initialRoute = parseCurrentRoute();
  const [currentPage, setCurrentPage] = useState<AppPage>(initialRoute.page);
  const [flightTab, setFlightTab] = useState<FlightPageTab>(initialRoute.flightTab);
  const [mapTab, setMapTab] = useState<'overview' | 'T1' | 'T2' | 'parking'>('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAirlineModalOpen, setIsAirlineModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'arrival' | 'departure'>('arrival');
  const [modalSearch, setModalSearch] = useState('');

  // Sync routing so back/forward browser buttons and direct links work seamlessly with clean paths
  useEffect(() => {
    // If opened with a hash or trailing #, clean it up immediately with replaceState
    if (window.location.hash || (window.location.pathname !== initialRoute.cleanPath && initialRoute.cleanPath !== '/')) {
      window.history.replaceState(null, '', initialRoute.cleanPath);
    }

    const handleLocationChange = () => {
      const route = parseCurrentRoute();
      setCurrentPage(route.page);
      setFlightTab(route.flightTab);
      if (window.location.hash) {
        window.history.replaceState(null, '', route.cleanPath);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
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

    let targetPath = '/';
    if (page === 'procedures') {
      targetPath = '/procedures';
    } else if (page === 'how-to-reach') {
      targetPath = '/how-to-reach';
    } else if (page === 'airport-map') {
      targetPath = '/airport-map';
    } else if (page === 'flights') {
      targetPath = `/flights-${fTab || flightTab}`;
    } else if (page === 'airline-details') {
      targetPath = '/airline-details';
    } else if (page === 'facilities-services') {
      targetPath = '/facilities-services';
    } else if (page === 'shop-dine-relax') {
      targetPath = '/shop-dine-relax';
    } else if (page === 'tourist-attractions') {
      targetPath = '/tourist-attractions';
    } else if (page === 'corporate') {
      targetPath = '/corporate';
    } else if (page === 'contact') {
      targetPath = '/contact';
    } else {
      targetPath = '/';
    }

    if (window.location.pathname !== targetPath || window.location.hash) {
      window.history.pushState(null, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToFlights = (tab: FlightPageTab = 'arrival') => {
    setFlightTab(tab);
    setCurrentPage('flights');
    const targetPath = `/flights-${tab}`;
    if (window.location.pathname !== targetPath || window.location.hash) {
      window.history.pushState(null, '', targetPath);
    }
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

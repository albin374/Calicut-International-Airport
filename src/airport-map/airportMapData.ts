export interface AirportZone {
  id: string;
  name: string;
  terminal: 'T1' | 'T2' | 'parking' | 'campus';
  level: 'Level 1 (Departures)' | 'Ground Level (Arrivals)' | 'All Levels';
  category: 'gate' | 'checkin' | 'security' | 'lounge' | 'baggage' | 'dining' | 'service' | 'transit';
  x: number; // percentage coordinate 0 - 100 on interactive schematic
  y: number; // percentage coordinate 0 - 100 on interactive schematic
  timing: string;
  description: string;
  tips: string;
}

export interface TerminalLevelInfo {
  levelName: string;
  purpose: string;
  highlights: string[];
}

export interface TerminalData {
  id: 'overview' | 'T1' | 'T2' | 'parking';
  title: string;
  badge: string;
  tag: string;
  headline: string;
  subtitle: string;
  description: string;
  image: string;
  imageCaption: string;
  levels: TerminalLevelInfo[];
  stats: { label: string; value: string }[];
  keyAirlines?: string[];
  zones: AirportZone[];
}

export interface FacilityItem {
  id: string;
  name: string;
  terminal: string;
  level: string;
  category: 'checkin' | 'gates' | 'lounges' | 'baggage' | 'services' | 'transit';
  icon: string;
  hours: string;
  description: string;
}

export const AIRPORT_CAMPUS_SPECS = {
  iata: 'CCJ',
  icao: 'VOCL',
  operator: 'Airports Authority of India (AAI)',
  elevation: '104 m / 342 ft',
  runway: 'Tabletop Runway 10/28 (2,860 m / 9,383 ft)',
  coordinates: "11°08'14\"N 75°57'19\"E",
  terminals: '2 Passenger Terminals (Integrated) + 1 Cargo Terminal',
  annualCapacity: '4.5 Million Passengers',
  aerobridges: '3 Passenger Boarding Bridges + 11 Remote Apron Stands',
};

export const TERMINALS_DATA: Record<'overview' | 'T1' | 'T2' | 'parking', TerminalData> = {
  overview: {
    id: 'overview',
    title: 'Campus Master Plan',
    badge: 'Master Layout',
    tag: 'CAMPUS & AIRSIDE',
    headline: 'All Terminals & Airport Campus',
    subtitle: 'Integrated Passenger Terminal 1 (Domestic), Terminal 2 (International), Cargo Terminal & Apron',
    description:
      'Calicut International Airport (Karipur) features an integrated dual-terminal complex set atop a scenic plateau. The campus accommodates both domestic and heavy international widebody operations, complete with modern aerobridges, automated FASTag parking, and direct highway ramps.',
    image: '/Calicut International Airport Terminal.png',
    imageCaption: 'Calicut International Airport Aerial Terminal Campus View',
    levels: [
      {
        levelName: 'Terminal 1 (Domestic Wing)',
        purpose: 'Domestic Departures & Arrivals connecting all Indian Metros',
        highlights: [
          'Check-in Counters 1 to 18 (IndiGo & Air India)',
          'Boarding Gates 1, 2, 3 (Direct ramp and bus boarding)',
          'Baggage Reclaim Belts 1 & 2',
          'Domestic Executive CIP Lounge',
        ],
      },
      {
        levelName: 'Terminal 2 (International Wing)',
        purpose: 'Non-stop flights connecting GCC, Middle East & Global Hubs',
        highlights: [
          'Check-in Desks 19 to 48 with automated baggage screening',
          'Bureau of Immigration (14 Emigration & 16 Immigration counters)',
          'Boarding Gates 4, 5, 6, 7, 8 (3 Glass Aerobridges)',
          'Duty Free Shopping, Prayer Rooms & Premium Lounge',
        ],
      },
      {
        levelName: 'Ground Transport & Parking Zone',
        purpose: 'Seamless road transit, multi-level parking & public feeder buses',
        highlights: [
          'Automated FASTag multi-level car park with 1,200+ covered bays',
          '24/7 Police-approved prepaid taxi counter',
          'Dedicated KSRTC AC low-floor bus terminal',
          'App-based taxi pickup zone (Uber / Ola)',
        ],
      },
    ],
    stats: [
      { label: 'Runway Length', value: '2,860 Meters' },
      { label: 'Apron Stands', value: '14 Aircraft Bays' },
      { label: 'Annual Footfall', value: '3.5M+ Travellers' },
      { label: 'Aerobridges', value: '3 Glass Bridges' },
    ],
    zones: [
      {
        id: 't1-entry',
        name: 'Terminal 1 Domestic Entry',
        terminal: 'T1',
        level: 'Level 1 (Departures)',
        category: 'checkin',
        x: 22,
        y: 46,
        timing: '24 Hours',
        description: 'Passenger entry doors D1 & D2 with DigiYatra biometric e-gates and physical verification booths.',
        tips: 'Keep physical photo ID and boarding pass ready for security.',
      },
      {
        id: 't2-entry',
        name: 'Terminal 2 International Entry',
        terminal: 'T2',
        level: 'Level 1 (Departures)',
        category: 'checkin',
        x: 64,
        y: 46,
        timing: '24 Hours',
        description: 'Main international departure gate for GCC & Middle East outbound passengers.',
        tips: 'Arrive 3 hours prior to departure for international flights.',
      },
      {
        id: 'aerobridge-zone',
        name: 'Passenger Boarding Bridges (PBB)',
        terminal: 'T2',
        level: 'Level 1 (Departures)',
        category: 'gate',
        x: 75,
        y: 22,
        timing: 'Flight Scheduled',
        description: 'Modern climate-controlled glass aerobridges for direct boarding to widebody aircraft.',
        tips: 'Gates 4 and 5 support widebody airliners.',
      },
      {
        id: 'parking-hub',
        name: 'Multi-Level Car Parking & FASTag',
        terminal: 'parking',
        level: 'Ground Level (Arrivals)',
        category: 'transit',
        x: 44,
        y: 84,
        timing: '24 Hours',
        description: 'Multi-level covered parking directly facing terminal entrances with automated FASTag payments.',
        tips: '10-minute free grace period for passenger pick-up & drop-off.',
      },
      {
        id: 'cargo-center',
        name: 'Cargo Terminal & Cold Storage',
        terminal: 'campus',
        level: 'All Levels',
        category: 'service',
        x: 88,
        y: 58,
        timing: '24 Hours',
        description: 'High-capacity perishable goods and general air freight handling facility.',
        tips: 'Dedicated clearance section for Malabar agricultural exports.',
      },
    ],
  },
  T1: {
    id: 'T1',
    title: 'Terminal 1 (Domestic)',
    badge: 'Domestic Wing',
    tag: 'TERMINAL 1 · DOMESTIC',
    headline: 'Domestic Departures & Arrivals',
    subtitle: 'Connecting Kozhikode with Mumbai, Delhi, Bengaluru, Chennai, and Kochi',
    description:
      'Terminal 1 serves all domestic airline operations with high-efficiency security screening, self-service check-in kiosks, priority DigiYatra lanes, comfortable departure hold rooms, and direct baggage carousels.',
    image: '/Bright Airport Entry D1 Terminal.png',
    imageCaption: 'Terminal 1 Domestic Entry Gate D1 Concourse',
    keyAirlines: ['IndiGo Airlines', 'Air India', 'Akasa Air'],
    levels: [
      {
        levelName: 'Level 1 · Domestic Departures & SHA',
        purpose: 'Check-in, Security Screening & Boarding Gates 1-3',
        highlights: [
          'Airline Check-in Desks 1 to 18 (IndiGo & Air India dedicated islands)',
          'CISF Domestic Security Frisking (4 X-ray Baggage Scanning Lines)',
          'Boarding Gates 1, 2, 3 with spacious seating & charging stations',
          'Domestic Executive CIP Lounge with dining and Wi-Fi',
          'Retail Kiosks: Kairali Spices, Coffee Hub & Souvenir Shops',
        ],
      },
      {
        levelName: 'Ground Floor · Domestic Arrivals',
        purpose: 'Baggage Claim, Meet & Greet, and Ground Transit',
        highlights: [
          'Baggage Reclaim Belts 1 & 2 with digital flight monitors',
          'Meet & Greet arrival lobby with visitor seating',
          'Official Airport Police Prepaid Taxi Booking Counter',
          'ATM kiosks (SBI, Canara Bank, Federal Bank)',
          '24/7 First Aid & Medical Assistance Room',
        ],
      },
    ],
    stats: [
      { label: 'Check-in Desks', value: '18 Counters' },
      { label: 'Boarding Gates', value: 'Gates 1 to 3' },
      { label: 'Baggage Belts', value: '2 Carousels' },
      { label: 'Security Lanes', value: '4 Frisking Lines' },
    ],
    zones: [
      {
        id: 't1-checkin',
        name: 'Check-in Counters 1–18',
        terminal: 'T1',
        level: 'Level 1 (Departures)',
        category: 'checkin',
        x: 28,
        y: 48,
        timing: '04:00 AM – 11:30 PM',
        description: 'Airline desks for IndiGo and Air India with self-bag drop and printing kiosks.',
        tips: 'Baggage drop closes 45 minutes prior to scheduled departure.',
      },
      {
        id: 't1-security',
        name: 'CISF Domestic Security Frisking',
        terminal: 'T1',
        level: 'Level 1 (Departures)',
        category: 'security',
        x: 48,
        y: 42,
        timing: '24 Hours',
        description: 'Security screening for domestic passengers with separate male and female frisking booths.',
        tips: 'Remove laptops and metal items into provided trays.',
      },
      {
        id: 't1-gate123',
        name: 'Boarding Gates 1, 2, 3',
        terminal: 'T1',
        level: 'Level 1 (Departures)',
        category: 'gate',
        x: 74,
        y: 35,
        timing: 'Flight Scheduled',
        description: 'Spacious air-conditioned hold room with flight status displays, USB chargers, and boarding lanes.',
        tips: 'Boarding begins 40 minutes prior to departure.',
      },
      {
        id: 't1-lounge',
        name: 'Domestic Executive CIP Lounge',
        terminal: 'T1',
        level: 'Level 1 (Departures)',
        category: 'lounge',
        x: 70,
        y: 65,
        timing: '05:00 AM – 10:30 PM',
        description: 'Comfortable executive lounge offering buffet refreshments, fresh coffee, high-speed Wi-Fi, and newspapers.',
        tips: 'Complimentary access for eligible credit & debit cardholders.',
      },
      {
        id: 't1-baggage',
        name: 'Domestic Baggage Belts 1 & 2',
        terminal: 'T1',
        level: 'Ground Level (Arrivals)',
        category: 'baggage',
        x: 35,
        y: 72,
        timing: 'Flight Scheduled',
        description: 'Automated conveyor belts for domestic passenger luggage delivery.',
        tips: 'Check the overhead LED display for your flight number.',
      },
    ],
  },
  T2: {
    id: 'T2',
    title: 'Terminal 2 (International)',
    badge: 'International Wing',
    tag: 'TERMINAL 2 · INTERNATIONAL',
    headline: 'International Departures & Arrivals',
    subtitle: 'Gateway to the Gulf, Middle East, Southeast Asia and international destinations',
    description:
      'Terminal 2 handles heavy international traffic featuring 30 check-in desks, comprehensive Bureau of Immigration facilities, walkthrough duty free shopping, glass aerobridges, and dual customs channels.',
    image: '/International Departure Gate 2 Security Check.png',
    imageCaption: 'Terminal 2 International Departure Gate 2 & Security Area',
    keyAirlines: [
      'Air India Express',
      'Emirates',
      'Saudia',
      'Qatar Airways',
      'Flydubai',
      'Etihad Airways',
      'Oman Air',
      'Gulf Air',
      'SalamAir',
    ],
    levels: [
      {
        levelName: 'Level 1 · International Departures',
        purpose: 'Check-in, Emigration, Customs Outbound, Duty Free & Gates 4–8',
        highlights: [
          'Airline Check-in Desks 19 to 48 (GCC & International carriers)',
          'Bureau of Immigration: 14 Emigration clearance counters',
          'Central Security Hold Area (SHA) with body scanners',
          'Walkthrough International Duty Free Store (Perfumes, electronics, chocolates)',
          'Boarding Gates 4, 5, 6, 7, 8 with 3 Aerobridges',
          'International Business Lounge & Prayer Rooms (Men & Women)',
        ],
      },
      {
        levelName: 'Ground Floor · International Arrivals',
        purpose: 'Immigration Inbound, Baggage Claim Carousels & Customs Channels',
        highlights: [
          'Bureau of Immigration: 16 Immigration counters + e-Visa desks',
          'International Baggage Belts 3 & 4 with oversized luggage delivery',
          'Customs Green Channel (Nil declaration) & Red Channel (Dutiable goods)',
          'Currency Exchange booths (Thomas Cook & State Bank of India)',
          'Lost & Found baggage office & Prepaid taxi exit',
        ],
      },
    ],
    stats: [
      { label: 'Check-in Counters', value: '30 Desks (19–48)' },
      { label: 'Emigration Desks', value: '14 Counters' },
      { label: 'Immigration Desks', value: '16 Counters' },
      { label: 'Aerobridge Gates', value: 'Gates 4 to 8' },
    ],
    zones: [
      {
        id: 't2-checkin',
        name: 'International Check-in Desks 19–48',
        terminal: 'T2',
        level: 'Level 1 (Departures)',
        category: 'checkin',
        x: 25,
        y: 48,
        timing: '24 Hours',
        description: 'Counters for major Middle East airlines with inline baggage X-ray inspection.',
        tips: 'Desks open 3.5 hours prior to international scheduled departures.',
      },
      {
        id: 't2-emigration',
        name: 'Bureau of Immigration (Emigration)',
        terminal: 'T2',
        level: 'Level 1 (Departures)',
        category: 'security',
        x: 44,
        y: 45,
        timing: '24 Hours',
        description: 'Passport verification, visa check, and emigration clearance desks.',
        tips: 'Keep original passport and international boarding pass ready in hand.',
      },
      {
        id: 't2-dutyfree',
        name: 'International Duty Free Walkthrough',
        terminal: 'T2',
        level: 'Level 1 (Departures)',
        category: 'dining',
        x: 60,
        y: 45,
        timing: '24 Hours',
        description: 'Duty-free store offering luxury fragrances, confectionery, electronics, and Kerala tea/spices.',
        tips: 'Duty-free allowances apply per passenger passport.',
      },
      {
        id: 't2-gates',
        name: 'Aerobridge Gates 4 to 8',
        terminal: 'T2',
        level: 'Level 1 (Departures)',
        category: 'gate',
        x: 82,
        y: 35,
        timing: 'Flight Scheduled',
        description: 'Direct air-conditioned aerobridge boarding gates for Boeing 777, 787, and A321 aircraft.',
        tips: 'Final boarding call sounds 25 minutes prior to takeoff.',
      },
      {
        id: 't2-baggage-customs',
        name: 'Baggage Belts 3 & 4 and Customs',
        terminal: 'T2',
        level: 'Ground Level (Arrivals)',
        category: 'baggage',
        x: 45,
        y: 75,
        timing: '24 Hours',
        description: 'High-speed luggage reclaim carousels followed by Indian Customs Green and Red channels.',
        tips: 'Passengers carrying commercial goods or gold above allowance must declare at Red Channel.',
      },
    ],
  },
  parking: {
    id: 'parking',
    title: 'Parking & Ground Transport',
    badge: 'Ground Transit',
    tag: 'PARKING & CABS',
    headline: 'Ground Transportation & Multi-Level Parking',
    subtitle: 'Seamless connection to prepaid taxis, FASTag parking bays, and direct bus bays',
    description:
      'The airport ground transportation hub is situated directly in front of the arrival concourse, offering 1,200+ covered FASTag parking bays, 24x7 police-approved prepaid taxis, app-based cab pickup points, and regular KSRTC airport feeder buses.',
    image: '/Calicut International Airport Grand Entrance.png',
    imageCaption: 'Calicut International Airport Grand Entrance & Parking Area',
    levels: [
      {
        levelName: 'Multi-Level Covered Parking',
        purpose: '1,200+ vehicle bays with automated FASTag entry/exit',
        highlights: [
          'Contactless FASTag readers for instant entry and exit with zero waiting time',
          'Dedicated short-term and long-term parking areas for two-wheelers and four-wheelers',
          'Free 10-minute passenger pick-up & drop-off grace period in designated lanes',
          '24/7 CCTV surveillance and security patrolling',
        ],
      },
      {
        levelName: 'Forecourt & Taxi Terminal',
        purpose: 'Airport Prepaid Taxis, Uber/Ola & KSRTC Public Buses',
        highlights: [
          'Official 24/7 Police-approved Prepaid Taxi booth at Arrival exit',
          'Designated app cab pickup bay (Uber / Ola) at Lane 2',
          'KSRTC low-floor AC feeder bus stand with regular service to Kozhikode, Malappuram & Manjeri',
          'DC Fast Electric Vehicle (EV) charging stations',
        ],
      },
    ],
    stats: [
      { label: 'Total Parking Bays', value: '1,200+ Slots' },
      { label: 'Grace Period', value: '10 Mins Free' },
      { label: 'Prepaid Taxi', value: '24x7 Available' },
      { label: 'EV Charging', value: 'DC Fast Chargers' },
    ],
    zones: [
      {
        id: 'pk-fastag',
        name: 'FASTag Parking Entrance & Exit',
        terminal: 'parking',
        level: 'Ground Level (Arrivals)',
        category: 'transit',
        x: 30,
        y: 50,
        timing: '24 Hours',
        description: 'Automated boom barriers supporting electronic FASTag payment without cash hassle.',
        tips: 'Ensure sufficient FASTag wallet balance before entry.',
      },
      {
        id: 'pk-prepaid',
        name: 'Police Prepaid Taxi Counter',
        terminal: 'parking',
        level: 'Ground Level (Arrivals)',
        category: 'transit',
        x: 55,
        y: 40,
        timing: '24 Hours',
        description: 'Fixed-fare, police-monitored official prepaid cab counter situated right outside the arrival gates.',
        tips: 'Collect your computerised receipt and hand the driver slip only upon reaching your destination.',
      },
      {
        id: 'pk-bus',
        name: 'KSRTC Airport Bus Stand',
        terminal: 'parking',
        level: 'Ground Level (Arrivals)',
        category: 'transit',
        x: 75,
        y: 55,
        timing: '05:00 AM – 11:30 PM',
        description: 'Direct low-floor AC buses connecting Calicut city (Mofussil Stand), Kondotty, and railway stations.',
        tips: 'Buses depart every 30 to 45 minutes.',
      },
      {
        id: 'pk-ev',
        name: 'EV Fast Charging Station',
        terminal: 'parking',
        level: 'Ground Level (Arrivals)',
        category: 'service',
        x: 45,
        y: 78,
        timing: '24 Hours',
        description: 'Dual-gun DC fast chargers supporting all standard CCS2 electric vehicles.',
        tips: 'Compatible with Tata Power EZ Charge and KSEB apps.',
      },
    ],
  },
};

export const AIRPORT_FACILITIES: FacilityItem[] = [
  {
    id: 'f1',
    name: 'DigiYatra Fast-Track E-Gates',
    terminal: 'T1 & T2',
    level: 'Level 1 (Departures)',
    category: 'checkin',
    icon: 'user-check',
    hours: '24 Hours',
    description: 'Contactless biometric facial recognition entry for paperless passenger processing.',
  },
  {
    id: 'f2',
    name: 'Airline Check-in Desks 1 to 48',
    terminal: 'T1 & T2',
    level: 'Level 1 (Departures)',
    category: 'checkin',
    icon: 'briefcase',
    hours: '24 Hours',
    description: 'Full-service airline check-in counters with inline baggage screening for all domestic & global carriers.',
  },
  {
    id: 'f3',
    name: 'Aerobridge Boarding Gates 4–8',
    terminal: 'T2',
    level: 'Level 1 (Departures)',
    category: 'gates',
    icon: 'plane',
    hours: 'Flight Scheduled',
    description: 'Modern glass-walled aerobridges allowing direct, weather-protected boarding to aircraft.',
  },
  {
    id: 'f4',
    name: 'Domestic Boarding Gates 1–3',
    terminal: 'T1',
    level: 'Level 1 (Departures)',
    category: 'gates',
    icon: 'navigation',
    hours: 'Flight Scheduled',
    description: 'Domestic departure gates with spacious seating, charging bays, and digital flight information.',
  },
  {
    id: 'f5',
    name: 'Executive CIP & Premium Lounges',
    terminal: 'T1 & T2',
    level: 'Level 1 (Departures)',
    category: 'lounges',
    icon: 'coffee',
    hours: '04:30 AM – 11:30 PM',
    description: 'Air-conditioned lounges offering hot buffet meals, refreshments, Wi-Fi, and workstations.',
  },
  {
    id: 'f6',
    name: 'International Duty Free Walkthrough',
    terminal: 'T2',
    level: 'Level 1 (Departures)',
    category: 'lounges',
    icon: 'shopping-bag',
    hours: '24 Hours',
    description: 'Duty-free store with international perfumes, watches, chocolates, and premium souvenirs.',
  },
  {
    id: 'f7',
    name: 'Baggage Reclaim Carousels 1 to 4',
    terminal: 'T1 & T2',
    level: 'Ground Level (Arrivals)',
    category: 'baggage',
    icon: 'luggage',
    hours: '24 Hours',
    description: 'Automated conveyor belts with overhead screens for fast domestic and international baggage delivery.',
  },
  {
    id: 'f8',
    name: 'Indian Customs Green & Red Channels',
    terminal: 'T2',
    level: 'Ground Level (Arrivals)',
    category: 'baggage',
    icon: 'shield',
    hours: '24 Hours',
    description: 'Official clearance area for incoming passengers. Red Channel for dutiable goods and gold declarations.',
  },
  {
    id: 'f9',
    name: 'Foreign Currency Exchange (Forex)',
    terminal: 'T2',
    level: 'Ground & Level 1',
    category: 'services',
    icon: 'dollar-sign',
    hours: '24 Hours',
    description: 'Official exchange counters operated by Thomas Cook and State Bank of India with competitive rates.',
  },
  {
    id: 'f10',
    name: '24x7 Medical Room & First Aid',
    terminal: 'T1 & T2',
    level: 'Ground Level',
    category: 'services',
    icon: 'heart-pulse',
    hours: '24 Hours',
    description: 'Staffed by qualified medical officers with emergency medication, oxygen, and ambulance on standby.',
  },
  {
    id: 'f11',
    name: 'Police Prepaid Taxi Counter',
    terminal: 'Forecourt',
    level: 'Ground Level (Arrivals)',
    category: 'transit',
    icon: 'car',
    hours: '24 Hours',
    description: 'Government-regulated prepaid cab service with transparent fixed rates to all towns in Kerala.',
  },
  {
    id: 'f12',
    name: 'FASTag Multi-Level Car Park',
    terminal: 'Forecourt',
    level: 'Opposite Terminals',
    category: 'transit',
    icon: 'credit-card',
    hours: '24 Hours',
    description: '1,200+ parking slots with automated FASTag barrier entry and 10 minutes free grace period.',
  },
  {
    id: 'f13',
    name: 'Baby Care & Child Nursing Room',
    terminal: 'T1 & T2',
    level: 'Departures & Arrivals',
    category: 'services',
    icon: 'baby',
    hours: '24 Hours',
    description: 'Private, hygienic rooms equipped with changing tables, feeding chairs, and warm water dispensers.',
  },
  {
    id: 'f14',
    name: 'Prayer Rooms (Men & Women)',
    terminal: 'T2',
    level: 'Level 1 (Departures)',
    category: 'services',
    icon: 'compass',
    hours: '24 Hours',
    description: 'Dedicated serene prayer and ablution spaces for outbound international passengers.',
  },
  {
    id: 'f15',
    name: 'KSRTC Feeder Bus Bay',
    terminal: 'Forecourt',
    level: 'Ground Level',
    category: 'transit',
    icon: 'bus',
    hours: '05:00 AM – 11:30 PM',
    description: 'Direct low-floor AC feeder buses connecting to Kozhikode Mofussil Stand, Kondotty, and railway hubs.',
  },
  {
    id: 'f16',
    name: 'Lost & Found Baggage Office',
    terminal: 'T1 & T2',
    level: 'Ground Level (Arrivals)',
    category: 'services',
    icon: 'help-circle',
    hours: '24 Hours',
    description: 'Assistance desk for tracing mishandled luggage and claiming items left behind on airport premises.',
  },
];

export const PASSENGER_FLOW_STEPS = {
  domesticDeparture: [
    {
      step: '01',
      title: 'Terminal Entry',
      subtitle: 'Gates D1 & D2',
      description: 'Show e-ticket or DigiYatra QR code alongside government photo ID to enter.',
    },
    {
      step: '02',
      title: 'Check-in & Bag Drop',
      subtitle: 'Counters 1 to 18',
      description: 'Collect your boarding pass and drop check-in baggage at your airline desk.',
    },
    {
      step: '03',
      title: 'Security Frisking',
      subtitle: 'CISF Central SHA',
      description: 'Place electronic devices in trays; proceed through metal detector arch.',
    },
    {
      step: '04',
      title: 'Boarding Gate',
      subtitle: 'Gates 1, 2, 3',
      description: 'Relax in hold room or lounge; board when your zone is announced.',
    },
  ],
  internationalDeparture: [
    {
      step: '01',
      title: 'Terminal Entry',
      subtitle: 'Gates I1 & I2',
      description: 'Present original passport, visa, and flight booking 3 hours prior.',
    },
    {
      step: '02',
      title: 'Airline Check-in',
      subtitle: 'Desks 19 to 48',
      description: 'Complete passport verification, collect boarding card, and check luggage.',
    },
    {
      step: '03',
      title: 'Emigration & Security',
      subtitle: 'Immigration & CISF SHA',
      description: 'Clear passport exit stamp at Bureau of Immigration followed by security frisking.',
    },
    {
      step: '04',
      title: 'Duty Free & Aerobridge',
      subtitle: 'Gates 4 to 8',
      description: 'Enjoy duty-free shopping and board via climate-controlled aerobridges.',
    },
  ],
  arrivalFlow: [
    {
      step: '01',
      title: 'Disembarkation',
      subtitle: 'Aerobridge / Bus',
      description: 'Follow signs to the Ground Level arrival concourse.',
    },
    {
      step: '02',
      title: 'Immigration Clearance',
      subtitle: 'Desks 1 to 16 (Intl only)',
      description: 'Indian and foreign passport holders proceed through designated desks.',
    },
    {
      step: '03',
      title: 'Baggage Reclaim',
      subtitle: 'Belts 1 to 4',
      description: 'Check overhead digital display for your flight luggage carousel.',
    },
    {
      step: '04',
      title: 'Customs & Ground Transit',
      subtitle: 'Green/Red & Taxi Exit',
      description: 'Exit via Green Channel or declare goods, then book official prepaid taxis.',
    },
  ],
};


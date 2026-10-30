export interface CorporateStat {
  label: string;
  value: string;
  subtext: string;
  badge: string;
}

export interface InfrastructureMetric {
  title: string;
  specification: string;
  category: 'Airside' | 'Terminal' | 'CNS/ATM' | 'Cargo';
  description: string;
  features: string[];
}

export interface SecurityPillar {
  agency: string;
  role: string;
  badge: string;
  description: string;
  capabilities: string[];
}

export interface CarrierPartner {
  name: string;
  code: string;
  type: 'Domestic & International' | 'International (Gulf)' | 'Domestic' | 'Cargo';
  hub: string;
  destinations: string;
}

export interface LeadershipContact {
  designation: string;
  department: string;
  email: string;
  office: string;
}

export const CORPORATE_STATS: CorporateStat[] = [
  {
    label: 'Annual Passenger Traffic',
    value: '3.2M+',
    subtext: 'Domestic & International Travellers',
    badge: 'FY 2025–26'
  },
  {
    label: 'Annual Aircraft Movements',
    value: '22,500+',
    subtext: 'Scheduled Commercial & Charter Flights',
    badge: 'AIRSIDE'
  },
  {
    label: 'Annual Air Cargo Handled',
    value: '18,500 MT',
    subtext: 'Perishables, Spices & General Exports',
    badge: 'LOGISTICS'
  },
  {
    label: 'Runway Dimension',
    value: '2,860 m',
    subtext: 'Tabletop Runway 10/28 with RESA',
    badge: 'CAT-I ILS'
  }
];

export const INFRASTRUCTURE_SPECS: InfrastructureMetric[] = [
  {
    title: 'Runway 10/28 & Airfield Specifications',
    specification: '2,860 m × 45 m (9,383 ft)',
    category: 'Airside',
    description: 'Constructed as an elevated tabletop runway on Karipur hill, Runway 10/28 features comprehensive safety overrun zones (RESA) at both ends meeting international ICAO Annex 14 criteria.',
    features: [
      'Category-I Instrument Landing System (ILS) for Runway 28 & 10',
      'Advanced DVOR/DME ground navigation and Doppler radar aids',
      'High-intensity runway edge, threshold, and touchdown zone lighting (PAPI)',
      'Runway End Safety Areas (RESA) measuring 240 m × 90 m on both thresholds'
    ]
  },
  {
    title: 'Passenger Terminal Complexes (T1 & T2)',
    specification: '42,000+ sq. metres combined',
    category: 'Terminal',
    description: 'Separate dedicated terminals for domestic and international passenger operations equipped with centralized climate control, energy-efficient LED systems, and spacious concourses.',
    features: [
      'Terminal 1 (Domestic Departures & Arrivals): 12,000 sq m handling ~800 peak passengers',
      'Terminal 2 (International Departures & Arrivals): 30,000 sq m handling ~2,200 peak passengers',
      '48 Multi-airline Check-in Counters with Common Use Terminal Equipment (CUTE)',
      '7 Boarding gates with 3 passenger boarding aerobridges and remote bus gates'
    ]
  },
  {
    title: 'CNS / Air Traffic Management (ATM)',
    specification: '24/7 Approach & Tower Control',
    category: 'CNS/ATM',
    description: 'Airports Authority of India air traffic controllers manage the Kozhikode Terminal Control Area (TMA) using state-of-the-art Communications, Navigation, and Surveillance systems.',
    features: [
      'Monopulse Secondary Surveillance Radar (MSSR) with integrated ADS-B receivers',
      'Automated Weather Observing System (AWOS) with digital RVR sensors',
      'Dedicated VHF Air-to-Ground multi-channel redundant communication towers',
      'Advanced Surface Movement Guidance and Control System (A-SMGCS)'
    ]
  },
  {
    title: 'Integrated Air Cargo Logistics Terminal',
    specification: '18,500 MT / annum capacity',
    category: 'Cargo',
    description: 'Key export gateway for Northern Kerala and Malabar producers, handling perishables, high-grade spices, seafood, confectionery, and industrial machinery destined for Middle Eastern markets.',
    features: [
      'State-of-the-art temperature-controlled cold rooms (+2°C to +8°C & sub-zero)',
      'Dedicated Plant Quarantine and Animal Quarantine inspection stations',
      'Bonded export cargo holding concourses with automated weighing systems',
      'Direct landside truck loading docks with 24/7 dedicated customs appraisal'
    ]
  }
];

export const SECURITY_PILLARS: SecurityPillar[] = [
  {
    agency: 'Central Industrial Security Force (CISF)',
    role: 'Airport Security Group (ASG)',
    badge: 'ARMED DEFENSE',
    description: 'The elite CISF unit provides multi-tier anti-terrorist security, physical perimeter guarding, access validation, quick-reaction team (QRT) response, and pre-embarkation passenger screening.',
    capabilities: [
      '24/7 armed perimeter surveillance with Watchtowers & perimeter patrol track',
      'Pre-Embarkation Security Check (PESC) using dual-energy DFMD & handheld detectors',
      'Canine Bomb Detection & Disposal Squad (BDDS) with automated sniffer patrols',
      'CCTV Surveillance Network monitoring terminal airside and landside 24/7'
    ]
  },
  {
    agency: 'Bureau of Civil Aviation Security (BCAS)',
    role: 'Aviation Security Regulatory Body',
    badge: 'POLICY & AUDIT',
    description: 'Formulates and enforces comprehensive aviation security standards adhering strictly to National Civil Aviation Security Program (NCASP) and ICAO Annex 17 conventions.',
    capabilities: [
      'In-Line Baggage Screening System (ILBS) with Level-4 Computed Tomography Explosive Detection',
      'Air Cargo Security Screening Regulations with regulated agent certifications',
      'Biometric Aerodrome Entry Permits (AEP) management with tamper-proof smart chips',
      'Regular simulated emergency security exercises & anti-hijacking drills'
    ]
  },
  {
    agency: 'Customs & Border Protection (CBIC & BOI)',
    role: 'Fiscal & Immigration Control',
    badge: 'BORDER CONTROL',
    description: 'Central Board of Indirect Taxes & Customs (CBIC) and Bureau of Immigration (BOI) manage all international passenger arrivals, departures, anti-smuggling, and visa clearance.',
    capabilities: [
      'Electronic Passport Readers (e-Gates) with biometric facial verification',
      'Red & Green Customs clearance channels with high-throughput baggage scanners',
      'Air Intelligence Unit (AIU) monitoring commercial air routes and currency flows',
      'Fast-track Visa-on-Arrival and tourist e-Visa documentation counters'
    ]
  },
  {
    agency: 'Emergency & Fire Services (ARFF)',
    role: 'Category 9 Fire & Rescue',
    badge: 'CRASH & RESCUE',
    description: 'AAI Fire and Rescue operations maintain ICAO Category 9 emergency status, ensuring rapid emergency crash response anywhere on the aerodrome within 2 minutes.',
    capabilities: [
      'Fleet of high-capacity Rosenbauer Panther 6×6 Airfield Crash Fire Tenders (ACFT)',
      'Rapid Intervention Vehicles (RIV) with structural firefighting and foam cannons',
      '24/7 Resident airfield rescue paramedics and mobile medical trauma units',
      'Comprehensive mutual-aid coordination with Kerala State Fire & Rescue Service'
    ]
  }
];

export const CARRIER_PARTNERS: CarrierPartner[] = [
  {
    name: 'Air India Express',
    code: 'IX',
    type: 'Domestic & International',
    hub: 'Base / Focus City',
    destinations: 'Dubai, Sharjah, Abu Dhabi, Doha, Muscat, Bahrain, Kuwait, Salalah, Jeddah, Riyadh, Dammam, Mumbai, Delhi'
  },
  {
    name: 'IndiGo',
    code: '6E',
    type: 'Domestic & International',
    hub: 'Hub Operations',
    destinations: 'Dubai, Abu Dhabi, Doha, Jeddah, Riyadh, Bengaluru, Mumbai, Delhi, Chennai, Hyderabad'
  },
  {
    name: 'Akasa Air',
    code: 'QP',
    type: 'Domestic',
    hub: 'Domestic Network',
    destinations: 'Bengaluru, Mumbai, Delhi'
  },
  {
    name: 'Saudia',
    code: 'SV',
    type: 'International (Gulf)',
    hub: 'Jeddah / Riyadh',
    destinations: 'Jeddah (JED), Riyadh (RUH)'
  },
  {
    name: 'flydubai',
    code: 'FZ',
    type: 'International (Gulf)',
    hub: 'Dubai International (DXB)',
    destinations: 'Dubai (DXB) with seamless onward Emirates network connections'
  },
  {
    name: 'Qatar Airways',
    code: 'QR',
    type: 'International (Gulf)',
    hub: 'Doha Hamad (DOH)',
    destinations: 'Doha (DOH) with worldwide connections across Europe & Americas'
  },
  {
    name: 'Etihad Airways',
    code: 'EY',
    type: 'International (Gulf)',
    hub: 'Abu Dhabi (AUH)',
    destinations: 'Abu Dhabi (AUH) daily direct services'
  },
  {
    name: 'Oman Air',
    code: 'WY',
    type: 'International (Gulf)',
    hub: 'Muscat International (MCT)',
    destinations: 'Muscat (MCT)'
  },
  {
    name: 'Air Arabia & Air Arabia Abu Dhabi',
    code: 'G9 / 3L',
    type: 'International (Gulf)',
    hub: 'Sharjah (SHJ) & Abu Dhabi (AUH)',
    destinations: 'Sharjah (SHJ), Abu Dhabi (AUH), Ras Al Khaimah'
  },
  {
    name: 'Flynas',
    code: 'XY',
    type: 'International (Gulf)',
    hub: 'Riyadh (RUH) & Dammam (DMM)',
    destinations: 'Riyadh, Dammam, Jeddah'
  },
  {
    name: 'SalamAir',
    code: 'OV',
    type: 'International (Gulf)',
    hub: 'Muscat (MCT)',
    destinations: 'Muscat, Salalah'
  },
  {
    name: 'SpiceJet',
    code: 'SG',
    type: 'Domestic & International',
    hub: 'Domestic Base',
    destinations: 'Dubai, Jeddah, Mumbai, Delhi'
  }
];

export const LEADERSHIP_CONTACTS: LeadershipContact[] = [
  {
    designation: 'Airport Director',
    department: 'Executive Administration',
    email: 'apd_calicut@aai.aero',
    office: 'Airport Director Office, Administrative Complex, Calicut International Airport'
  },
  {
    designation: 'General Manager (ATM)',
    department: 'Air Traffic Management',
    email: 'gm_atm_calicut@aai.aero',
    office: 'ATC Tower Complex, Airside Road'
  },
  {
    designation: 'General Manager (CNS)',
    department: 'Communication, Navigation & Surveillance',
    email: 'gmcns_calicut@aai.aero',
    office: 'CNS Technical Block, Ground Level'
  },
  {
    designation: 'Chief Airport Security Officer (CASO)',
    department: 'CISF Airport Security Group',
    email: 'caso_calicut@cisf.gov.in',
    office: 'CISF ASG Headquarters, Karipur Campus'
  },
  {
    designation: 'Public Information Officer (RTI)',
    department: 'Legal & Right to Information',
    email: 'rti_calicut@aai.aero',
    office: 'Room 204, Administrative Block'
  }
];


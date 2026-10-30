export interface FAQItem {
  id: string;
  category: 'checkin' | 'baggage' | 'parking' | 'prm' | 'customs';
  question: string;
  answer: string;
}

export interface EmergencyContact {
  title: string;
  badge: string;
  phone: string;
  altPhone?: string;
  email?: string;
  hours: string;
  description: string;
  iconType: 'terminal' | 'security' | 'medical' | 'director';
}

export interface DepartmentContact {
  name: string;
  department: string;
  phone: string;
  email: string;
  location: string;
}

export interface DistanceInfo {
  city: string;
  distance: string;
  duration: string;
  via: string;
}

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    title: 'Terminal Manager (24/7 Duty)',
    badge: 'OPERATIONAL 24/7',
    phone: '+91 483 271 2630',
    altPhone: '+91 94477 92630',
    email: 'tmcalicut@aai.aero',
    hours: '24 Hours / 7 Days',
    description: 'Immediate on-ground passenger assistance, flight disruption coordination, and terminal escort services.',
    iconType: 'terminal'
  },
  {
    title: 'CISF Airport Security Control',
    badge: 'ARMED SECURITY & ASG',
    phone: '+91 483 271 1314',
    altPhone: '+91 483 271 9400',
    email: 'caso-calicut@cisf.gov.in',
    hours: '24 Hours / 7 Days',
    description: 'Airside security checks, lost & found verification, and passenger security escort queries.',
    iconType: 'security'
  },
  {
    title: 'Medical Emergency & Trauma Center',
    badge: 'FIRST AID & ICU',
    phone: '+91 483 271 9494',
    altPhone: '108 (National)',
    hours: '24 Hours / 7 Days',
    description: 'Stationed emergency physicians, paramedic trauma care, and dedicated airfield ambulances at T1 and T2.',
    iconType: 'medical'
  },
  {
    title: 'Airport Director Secretariat',
    badge: 'ADMINISTRATION',
    phone: '+91 483 271 2601',
    email: 'apdcalicut@aai.aero',
    hours: '09:30 – 18:00 (Mon–Fri)',
    description: 'Executive aerodrome administration, stakeholder inquiries, and protocol liaison.',
    iconType: 'director'
  }
];

export const DISTANCE_METRICS: DistanceInfo[] = [
  {
    city: 'Kozhikode City (Calicut Station)',
    distance: '28 km',
    duration: '45 mins',
    via: 'NH 66 & Calicut Airport Road'
  },
  {
    city: 'Malappuram District Headquarters',
    distance: '25 km',
    duration: '35 mins',
    via: 'NH 966 (Palakkad–Kozhikode Hwy)'
  },
  {
    city: 'Manjeri Town',
    distance: '18 km',
    duration: '25 mins',
    via: 'Manjeri–Kondotty Road'
  },
  {
    city: 'Kondotty Junction',
    distance: '3.2 km',
    duration: '6 mins',
    via: 'Airport Approach Road'
  }
];

export const DEPARTMENT_CONTACTS: DepartmentContact[] = [
  {
    name: 'CISF Lost & Found Property Cell',
    department: 'Terminal 1 & 2 Security Desk',
    phone: '+91 483 271 2630 Ext. 142',
    email: 'lostfoundccj@aai.aero',
    location: 'Arrival Concourse, Ground Floor'
  },
  {
    name: 'Customs & Border Control (CBIC)',
    department: 'Air Customs Division',
    phone: '+91 483 271 2650',
    email: 'customs-calicut@gov.in',
    location: 'International Arrivals T2, Customs Hall'
  },
  {
    name: 'Bureau of Immigration (BOI)',
    department: 'Foreigners Regional Registration',
    phone: '+91 483 271 1301',
    email: 'boi-calicut@nic.in',
    location: 'International Departures & Arrivals T2'
  },
  {
    name: 'Air Cargo Logistics (AAICLAS)',
    department: 'Cargo Terminal Operations',
    phone: '+91 483 271 0055',
    email: 'cargoccj@aaiclas.aero',
    location: 'Dedicated Air Cargo Complex, Gate 4'
  },
  {
    name: 'Duty Free & Commercial Retail',
    department: 'Commercial Concessions Desk',
    phone: '+91 483 271 2605',
    email: 'commccj@aai.aero',
    location: 'T2 Security Hold Area & Arrival Concourse'
  },
  {
    name: 'Prepaid Taxi & Parking Control',
    department: 'Landside Transportation Union',
    phone: '+91 483 271 2800',
    email: 'transportccj@aai.aero',
    location: 'Arrival Canopy Multi-Level Parking Kiosk'
  }
];

export const FAQ_CATEGORIES = [
  { id: 'all', label: 'All FAQs' },
  { id: 'checkin', label: 'Flight & Check-in' },
  { id: 'baggage', label: 'Baggage & Lost Property' },
  { id: 'parking', label: 'Parking & Transport' },
  { id: 'prm', label: 'PRM & Special Assistance' },
  { id: 'customs', label: 'Customs & Immigration' }
] as const;

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'checkin',
    question: 'How early should I arrive at Calicut Airport before my flight departure?',
    answer: 'For domestic flights (Terminal 1), passengers are advised to report at least 2 hours prior to scheduled departure. For international departures (Terminal 2), check-in counters open 3.5 to 4 hours prior and strictly close 60 minutes before scheduled departure time. DigiYatra biometric e-gates are available at T1 for rapid domestic entry.'
  },
  {
    id: 'faq-2',
    category: 'checkin',
    question: 'Can non-passengers or visitors enter the terminal building to see off family?',
    answer: 'Yes, visitor entry tickets are available at the commercial ticketing kiosk outside T1 and T2 entrance gates for designated public viewing concourses. Visitor admission is subject to BCAS regulatory guidelines and may temporarily be suspended during high-alert security advisories.'
  },
  {
    id: 'faq-3',
    category: 'baggage',
    question: 'What is the procedure if I misplace or lose an item inside the airport terminal?',
    answer: 'Items left behind in the terminal security hold areas, concourses, or immigration halls are deposited with the CISF Lost & Found Property Cell. You can reach the cell 24/7 at +91 483 271 2630 Ext. 142 or email lostfoundccj@aai.aero with your boarding pass, identification, and item description. Items left inside an aircraft must be claimed directly from the respective operating airline.'
  },
  {
    id: 'faq-4',
    category: 'baggage',
    question: 'Can I carry Kozhikode Halwa and Malabar spices in my cabin hand luggage?',
    answer: 'Dry packaged spices and sealed Kozhikode Halwa in dry solid form are permitted in cabin baggage up to normal airline weight allowances. Liquid or paste-form culinary items (such as pickle jars, coconut oils, and syrups) exceeding 100 ml must be packed securely inside registered check-in baggage according to BCAS aviation security regulations.'
  },
  {
    id: 'faq-5',
    category: 'parking',
    question: 'What are the vehicle parking facilities and tariff charges at Calicut Airport?',
    answer: 'Calicut International Airport provides extensive 24/7 shaded multi-lane parking for over 800 four-wheelers and two-wheelers right facing the terminal canopy. Short-stay parking begins at ₹30 for two-wheelers and ₹85 for four-wheelers for the first 2 hours, with dedicated overnight long-term slots available. A 10-minute free pickup/drop-off lane is enforced at the departure ramp.'
  },
  {
    id: 'faq-6',
    category: 'parking',
    question: 'Are prepaid taxis, auto-rickshaws, and app-based cabs (Uber/Ola) available 24/7?',
    answer: 'Yes, the official Calicut Airport Prepaid Taxi Kiosk operates 24/7 right outside the Arrival Canopy with fixed government-notified tariffs. App-based taxi aggregators (Uber and Ola) operate pickup services from the designated Lane 3 parking hub. KSRTC low-floor AC buses also operate scheduled feeder routes connecting Kozhikode and Malappuram.'
  },
  {
    id: 'faq-7',
    category: 'prm',
    question: 'How do I request wheelchair assistance for elderly or disabled passengers?',
    answer: 'Wheelchair and PRM (Persons with Reduced Mobility) services are completely complimentary. While booking your flight ticket with the airline, specify wheelchair requirement (WCHR/WCHS/WCHC). On arrival at CCJ, approach the dedicated PRM Help Desk at Terminal Entry Gate D1 (Domestic) or Gate I-1 (International), where airline ground personnel provide dedicated wheelchair escorts through security and boarding.'
  },
  {
    id: 'faq-8',
    category: 'prm',
    question: 'Are there dedicated baby care rooms and medical first aid centers in the terminals?',
    answer: 'Yes, complimentary Child Care and Nursing Lounges equipped with baby changing tables, feeding chairs, and sanitized washrooms are available in both T1 and T2 Security Hold Areas. Furthermore, 24/7 Medical First Aid Inspection Rooms staffed with qualified medical officers and paramedics operate on both airside and landside.'
  },
  {
    id: 'faq-9',
    category: 'customs',
    question: 'What is the duty-free alcohol and cigarette allowance for international passengers?',
    answer: 'Arriving international adult passengers (aged 18 and above) are permitted to import up to 2 liters of alcoholic beverages or wine, and up to 100 cigarettes (or 25 cigars / 125g tobacco) free of customs duty. Any excess quantities must be declared through the Red Customs Channel at T2.'
  },
  {
    id: 'faq-10',
    category: 'customs',
    question: 'Is free Wi-Fi internet connectivity available at Calicut International Airport?',
    answer: 'Yes, complimentary high-speed Wi-Fi is provided throughout T1 and T2 terminal concourses for 45 minutes. Connect to the "Free_Airport_WiFi" SSID, enter your active mobile phone number to receive a one-time password (OTP) via SMS, and enjoy uninterrupted connectivity. International roaming passengers can collect an access voucher from the May I Help You information counter.'
  },
  {
    id: 'faq-11',
    category: 'customs',
    question: 'Where can I find currency exchange (Forex) counters and ATM cash machines?',
    answer: 'Authorized currency exchange booths (including Thomas Cook and State Bank of India Forex) operate 24/7 in both International Arrivals and Departures halls. ATMs from major nationalized banks (SBI, Canara Bank, Federal Bank) are conveniently located along the Terminal Arrival Canopy walkway.'
  },
  {
    id: 'faq-12',
    category: 'checkin',
    question: 'How can I register an official passenger complaint or grievance?',
    answer: 'Passengers may lodge official feedback or complaints directly with the 24/7 on-duty Terminal Manager at the airport, or file an online grievance through the Ministry of Civil Aviation AirSewa portal (airsewa.gov.in) or the Government of India CPGRAMS system. All grievances receive formal tracking tokens and statutory time-bound redressal.'
  }
];


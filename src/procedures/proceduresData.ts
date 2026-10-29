export interface ProcedureItem {
  id: string;
  label: string;
  iconName: 'file-text' | 'luggage' | 'car' | 'globe' | 'user' | 'users' | 'shield-check' | 'ban' | 'file-check';
  badge?: string;
  summary: string;
  details: {
    headline: string;
    points: string[];
    tips?: string[];
  };
}

export interface ProcedureStep {
  stepNumber: string;
  stepCode: string;
  title: string;
  description: string;
  image: string;
  altText: string;
  items?: ProcedureItem[];
  notice?: {
    iconName: 'clock' | 'info';
    text: string;
  };
}

export const PROCEDURE_STEPS: ProcedureStep[] = [
  {
    stepNumber: 'Step 01',
    stepCode: '01',
    title: 'Pre Check In',
    description: 'Prepare your travel documents and essential information.',
    image: '/Sunset Airport Reflections with Suitcase.png',
    altText: 'Suitcase with luggage reflections at Calicut airport terminal',
    items: [
      {
        id: 'travelers-checklist',
        label: 'Travelers Checklist',
        iconName: 'file-text',
        badge: 'Essential',
        summary: 'Essential checklist before leaving for Calicut Airport',
        details: {
          headline: 'Before You Leave for the Airport Checklist',
          points: [
            'Valid government ID: Original Passport (with min. 6 months validity) for International, or Aadhaar/Voter ID/Driving License for Domestic flights.',
            'Confirmed e-ticket or printed boarding pass.',
            'Valid visa, entry permits, or travel insurance where mandated by destination country.',
            'Mandatory medical/vaccination certificates if required for international travel.',
            'Pack prescription medicines and essential infant items in carry-on luggage.'
          ],
          tips: [
            'Arrive at least 3 hours before International departures and 2 hours before Domestic departures.',
            'Keep your ID and ticket easily accessible at the terminal entry gate.'
          ]
        }
      },
      {
        id: 'luggage-details',
        label: 'Luggage Details',
        iconName: 'luggage',
        badge: 'Weights & Sizes',
        summary: 'Baggage allowances, size dimensions and carry-on rules',
        details: {
          headline: 'Baggage Guidelines & Dimensions',
          points: [
            'Cabin Baggage: Typically 1 piece up to 7 kg + 1 personal item (laptop bag/handbag). Dimensions within 115 cm (L+W+H).',
            'Check-in Baggage: Standard allowance depends on airline and ticket class (Economy usually 15 kg domestic, 20–30 kg international).',
            'Power banks, lithium batteries, and electronic cigarettes MUST be packed strictly in Cabin Luggage, never in checked baggage.',
            'Liquids, Aerosols, and Gels (LAGs) in cabin baggage are restricted to containers of max 100ml each, placed in a transparent resealable bag.'
          ],
          tips: [
            'Fasten sturdy luggage tags with your updated name, flight number, and contact phone number.',
            'Professional plastic stretch wrapping counters are available in Terminal 1 & 2 concourses.'
          ]
        }
      },
      {
        id: 'travel-to-airport',
        label: 'Travel to Airport',
        iconName: 'car',
        badge: 'Directions',
        summary: 'Getting to Calicut Airport by taxi, road, and bus routes',
        details: {
          headline: 'Ground Transportation to Calicut International Airport (Karipur)',
          points: [
            'Location: Situated at Karipur, Malappuram district, approximately 28 km from Kozhikode City center via NH 66.',
            'By Taxi / Cabs: 24/7 app-cabs (Uber, Ola) and regional tourist taxis have direct drop-off ramps at T1 & T2 departures.',
            'KSRTC FlyBus: Dedicated AC and non-AC airport shuttle buses operate frequently connecting Kozhikode KSRTC Bus Stand and Calicut Airport.',
            'By Private Car: Automated FASTag entry lanes at multi-level parking with 10-minute free drop-off grace period.'
          ],
          tips: [
            'Allow extra transit time (45–60 mins) during peak traffic hours (08:00–10:30 and 17:00–20:00).',
            'Prepaid parking slots are available for extended passenger stays.'
          ]
        }
      }
    ]
  },
  {
    stepNumber: 'Step 02',
    stepCode: '02',
    title: 'Check In',
    description: 'Complete your check-in process with ease.',
    image: '/Golden Hour Airport Check-In Hall.png',
    altText: 'Check-in hall counters illuminated by warm sunset light',
    items: [
      {
        id: 'web-check-in',
        label: 'Web Check In',
        iconName: 'globe',
        badge: 'Recommended',
        summary: 'Online check-in 24 to 48 hours prior to flight departure',
        details: {
          headline: 'Airline Web Check-in Guidelines',
          points: [
            'Web check-in opens 48 to 24 hours prior to scheduled departure and closes 60 minutes before departure.',
            'Save time at the airport by selecting your preferred seat and downloading your digital boarding pass to your smartphone.',
            'Passengers with only cabin baggage can proceed directly to security screening with a digital boarding pass.',
            'Supported airlines: Air India Express, IndiGo, Air India, Emirates, Flydubai, Qatar Airways, Oman Air, Gulf Air.'
          ],
          tips: [
            'Ensure you save an offline screenshot or Apple/Google Wallet pass of your boarding barcode.',
            'If you have check-in bags, use dedicated Baggage Drop counters at the terminal.'
          ]
        }
      },
      {
        id: 'self-check-in',
        label: 'Self Check In',
        iconName: 'user',
        badge: 'Kiosks',
        summary: 'Self-service touchscreen kiosks available in departure concourse',
        details: {
          headline: 'Self-Service Touchscreen Kiosks (CUSS)',
          points: [
            'Common Use Self-Service (CUSS) touchscreen kiosks are situated at entry gates of both Terminal 1 and Terminal 2.',
            'Scan your ticket PNR barcode or enter booking reference to print your physical boarding pass in under 60 seconds.',
            'Automated bag tag printing is also available at designated self-tagging kiosks.',
            'Dedicated airport ground assistants are stationed around kiosks to assist elderly and first-time travelers.'
          ],
          tips: [
            'Use self-check-in kiosks to avoid peak-hour queueing at main check-in islands.',
            'Proceed to the Bag Drop counter immediately after printing your luggage tags.'
          ]
        }
      },
      {
        id: 'counter-check-in',
        label: 'Counter Check In',
        iconName: 'users',
        badge: 'Desk',
        summary: 'Traditional airline service counters for baggage and queries',
        details: {
          headline: 'Staffed Airline Check-in Counters',
          points: [
            'Terminal 1 (Domestic): Counters 1 to 18 open 2.5 hours prior to flight departure.',
            'Terminal 2 (International): Counters 19 to 48 open 3.5 to 4 hours prior to flight departure.',
            'Present your valid passport/ID, collect your boarding pass, and hand over your check-in luggage.',
            'Special assistance, unaccompanied minors, excess baggage payment, and wheelchair requests are serviced here.'
          ],
          tips: [
            'International check-in counters strictly close 60 minutes prior to scheduled departure.',
            'Check the overhead flight information display screens (FIDS) to locate your assigned counter number.'
          ]
        }
      }
    ]
  },
  {
    stepNumber: 'Step 03',
    stepCode: '03',
    title: 'Security Check',
    description: 'Ensure a safe and hassle-free security screening.',
    image: '/Golden Hour Airport Security Checkpoint.png',
    altText: 'Airport security checkpoint with modern baggage scanners',
    items: [
      {
        id: 'general-security-check',
        label: 'General Security Check',
        iconName: 'shield-check',
        badge: 'CISF',
        summary: 'Central Industrial Security Force (CISF) screening procedures',
        details: {
          headline: 'CISF Security Frisking & Baggage X-Ray Screening',
          points: [
            'Remove laptops, tablets, chargers, power banks, and liquids from your hand luggage and place them in separate plastic trays.',
            'Remove heavy jackets, metallic belts, watches, and empty all coins and keys from your pockets into the tray.',
            'Keep your physical or digital boarding pass and passport/ID ready for CISF stamping / digital barcode verification.',
            'Separate frisking queues are operational for male and female passengers.'
          ],
          tips: [
            'Keep your footwear easy to remove if requested for secondary metal-detector scanning.',
            'Listen carefully to CISF personnel instructions for quick throughput.'
          ]
        }
      },
      {
        id: 'prohibited-items',
        label: 'Prohibited Items',
        iconName: 'ban',
        badge: 'Strict Rules',
        summary: 'Items strictly restricted or barred from cabin and checked baggage',
        details: {
          headline: 'Strictly Barred & Hazardous Items Guide',
          points: [
            'Prohibited in Cabin Bags: Sharp objects (scissors, pocket knives, nail clippers), tools, toy guns, liquids over 100ml, matchboxes/lighters.',
            'Prohibited in Check-in Bags: Power banks, loose lithium batteries, e-cigarettes, firecrackers, compressed gas cylinders, flammable liquids.',
            'Dry coconuts (copra) are strictly barred from check-in baggage due to high flammability risks under aviation guidelines.',
            'Spice containers (chili powder, curry powders) in large quantities must be packed in sealed checked baggage only.'
          ],
          tips: [
            'Surrendered prohibited items at security checkpoints cannot be returned.',
            'When in doubt, check with your airline representative before checking in.'
          ]
        }
      }
    ]
  },
  {
    stepNumber: 'Step 04',
    stepCode: '04',
    title: 'Immigration and Customs',
    description: 'Information for international passengers.',
    image: '/Passport at Immigration Control.png',
    altText: 'Passport and travel documents at airport immigration control desk',
    items: [
      {
        id: 'immigration-information',
        label: 'Immigration Information',
        iconName: 'globe',
        badge: 'International',
        summary: 'Bureau of Immigration passport control and departure verification',
        details: {
          headline: 'Bureau of Immigration Procedures (Terminal 2)',
          points: [
            'All passengers flying overseas must pass through immigration clearance counters located on Level 1 of Terminal 2.',
            'Documents required: Valid passport (valid for at least 6 months), boarding pass, valid visa or residency card (GCC Iqama/Work Permit).',
            'Indian passport holders do not require departure embarkation cards.',
            'Fast-track automated biometric e-Gates are under phased trial for eligible e-passport holders.'
          ],
          tips: [
            'Ensure your passport has at least two blank visa pages for entry/exit stamps.',
            'Foreign nationals must ensure their Indian visa or e-Visa exit permit is active and valid.'
          ]
        }
      },
      {
        id: 'customs-information',
        label: 'Customs Information',
        iconName: 'file-text',
        badge: 'Baggage Rules',
        summary: 'Indian Customs declarations, currency allowances, and duty-free limits',
        details: {
          headline: 'Indian Customs Regulations & Allowances',
          points: [
            'Departing Passengers: Gold ornaments and high-value foreign currency exceeding USD 5,000 must be declared at the Customs counter before departure.',
            'Arriving Passengers: Dual channel system (Green Channel for passenger with no dutiable goods, Red Channel for dutiable goods).',
            'Duty-Free Allowance: Returning Indian residents staying abroad for >3 days are eligible for standard personal baggage duty-free allowance.',
            'Alcohol Allowance: Maximum 2 liters of alcoholic liquor or wine per adult passenger from authorized airport duty-free shops.'
          ],
          tips: [
            'Always declare expensive commercial electronics or excess gold jewelry to avoid seizure or penalties.',
            'Official Customs duty counters accept UPI, credit cards, and cash.'
          ]
        }
      }
    ]
  },
  {
    stepNumber: 'Step 05',
    stepCode: '05',
    title: 'Boarding',
    description: 'Arrive on time and proceed to your gate.',
    image: '/Golden Sunset at the Airport Gate.png',
    altText: 'Golden sunset over airport runway and airliner at boarding gate',
    notice: {
      iconName: 'clock',
      text: 'Arrive at the boarding gate 30–40 minutes before boarding and proceed to the boarding area.'
    },
    items: [
      {
        id: 'boarding-guidelines',
        label: 'Boarding Gate & Seating Zones',
        iconName: 'user',
        badge: 'Gate Protocol',
        summary: 'Boarding sequence, aerobridge access and final calls',
        details: {
          headline: 'Boarding Gate Protocol & Timings',
          points: [
            'Boarding Gates: Domestic Gates 1 to 3 (T1), International Gates 4 to 8 (T2) equipped with modern passenger aerobridges.',
            'Boarding starts 45 minutes prior to scheduled flight departure time.',
            'Boarding gate strictly closes 20 minutes prior to scheduled departure. Late arrivals cannot be accommodated.',
            'Boarding is conducted by zones/rows (e.g., Zone 1, families with infants and elderly first, followed by rear to front rows).'
          ],
          tips: [
            'Keep your boarding pass barcode facing up and your passport/ID handy when queuing at the aerobridge gate.',
            'Listen to PA announcements for gate changes or final boarding calls.'
          ]
        }
      }
    ]
  }
];

export const ASSISTANCE_CONTACTS = {
  phone: '+91 495 223 3000',
  phoneLabel: 'Airport Information',
  email: 'support@ccjairport.com',
  emailLabel: 'Email Support',
  chatLabel: 'Live Chat',
  chatSub: 'Get quick help'
};


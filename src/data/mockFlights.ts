export interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  airlineCode: string;
  airlineLogoColor: string;
  type: 'arrival' | 'departure';
  origin?: string;
  destination?: string;
  scheduledTime: string;
  estimatedTime: string;
  status: 'On Time' | 'Landed' | 'Boarding' | 'Departed' | 'Delayed' | 'Scheduled';
  gate: string;
  terminal: 'T1 (Domestic)' | 'T2 (International)';
  belt?: string;
}

export const MOCK_FLIGHTS: Flight[] = [
  // Departures
  {
    id: 'd1',
    flightNumber: 'IX 343',
    airline: 'Air India Express',
    airlineCode: 'IX',
    airlineLogoColor: 'bg-red-600',
    type: 'departure',
    destination: 'Dubai (DXB)',
    scheduledTime: '17:45',
    estimatedTime: '17:45',
    status: 'Boarding',
    gate: 'Gate 4',
    terminal: 'T2 (International)'
  },
  {
    id: 'd2',
    flightNumber: '6E 1408',
    airline: 'IndiGo',
    airlineCode: '6E',
    airlineLogoColor: 'bg-blue-700',
    type: 'departure',
    destination: 'Bangalore (BLR)',
    scheduledTime: '18:15',
    estimatedTime: '18:20',
    status: 'On Time',
    gate: 'Gate 2',
    terminal: 'T1 (Domestic)'
  },
  {
    id: 'd3',
    flightNumber: 'G9 454',
    airline: 'Air Arabia',
    airlineCode: 'G9',
    airlineLogoColor: 'bg-red-500',
    type: 'departure',
    destination: 'Sharjah (SHJ)',
    scheduledTime: '18:50',
    estimatedTime: '18:50',
    status: 'On Time',
    gate: 'Gate 5',
    terminal: 'T2 (International)'
  },
  {
    id: 'd4',
    flightNumber: 'FZ 4412',
    airline: 'flydubai',
    airlineCode: 'FZ',
    airlineLogoColor: 'bg-blue-500',
    type: 'departure',
    destination: 'Dubai (DXB)',
    scheduledTime: '19:30',
    estimatedTime: '19:40',
    status: 'On Time',
    gate: 'Gate 3',
    terminal: 'T2 (International)'
  },
  {
    id: 'd5',
    flightNumber: 'AI 998',
    airline: 'Air India',
    airlineCode: 'AI',
    airlineLogoColor: 'bg-amber-600',
    type: 'departure',
    destination: 'Jeddah (JED)',
    scheduledTime: '20:10',
    estimatedTime: '20:10',
    status: 'Scheduled',
    gate: 'Gate 6',
    terminal: 'T2 (International)'
  },
  {
    id: 'd6',
    flightNumber: '6E 5321',
    airline: 'IndiGo',
    airlineCode: '6E',
    airlineLogoColor: 'bg-blue-700',
    type: 'departure',
    destination: 'Mumbai (BOM)',
    scheduledTime: '20:45',
    estimatedTime: '20:45',
    status: 'Scheduled',
    gate: 'Gate 1',
    terminal: 'T1 (Domestic)'
  },
  {
    id: 'd7',
    flightNumber: 'SV 772',
    airline: 'Saudia',
    airlineCode: 'SV',
    airlineLogoColor: 'bg-emerald-700',
    type: 'departure',
    destination: 'Riyadh (RUH)',
    scheduledTime: '21:30',
    estimatedTime: '21:30',
    status: 'Scheduled',
    gate: 'Gate 7',
    terminal: 'T2 (International)'
  },

  // Arrivals
  {
    id: 'a1',
    flightNumber: 'IX 356',
    airline: 'Air India Express',
    airlineCode: 'IX',
    airlineLogoColor: 'bg-red-600',
    type: 'arrival',
    origin: 'Abu Dhabi (AUH)',
    scheduledTime: '17:10',
    estimatedTime: '17:05',
    status: 'Landed',
    gate: 'Bay 12',
    terminal: 'T2 (International)',
    belt: 'Belt 3'
  },
  {
    id: 'a2',
    flightNumber: '6E 518',
    airline: 'IndiGo',
    airlineCode: '6E',
    airlineLogoColor: 'bg-blue-700',
    type: 'arrival',
    origin: 'Chennai (MAA)',
    scheduledTime: '17:35',
    estimatedTime: '17:30',
    status: 'Landed',
    gate: 'Bay 4',
    terminal: 'T1 (Domestic)',
    belt: 'Belt 1'
  },
  {
    id: 'a3',
    flightNumber: 'QR 536',
    airline: 'Qatar Airways',
    airlineCode: 'QR',
    airlineLogoColor: 'bg-rose-900',
    type: 'arrival',
    origin: 'Doha (DOH)',
    scheduledTime: '18:20',
    estimatedTime: '18:15',
    status: 'On Time',
    gate: 'Bay 8',
    terminal: 'T2 (International)',
    belt: 'Belt 4'
  },
  {
    id: 'a4',
    flightNumber: 'IX 374',
    airline: 'Air India Express',
    airlineCode: 'IX',
    airlineLogoColor: 'bg-red-600',
    type: 'arrival',
    origin: 'Bahrain (BAH)',
    scheduledTime: '18:55',
    estimatedTime: '19:10',
    status: 'Delayed',
    gate: 'Bay 9',
    terminal: 'T2 (International)',
    belt: 'Belt 2'
  },
  {
    id: 'a5',
    flightNumber: '6E 7122',
    airline: 'IndiGo',
    airlineCode: '6E',
    airlineLogoColor: 'bg-blue-700',
    type: 'arrival',
    origin: 'Delhi (DEL)',
    scheduledTime: '19:40',
    estimatedTime: '19:40',
    status: 'On Time',
    gate: 'Bay 5',
    terminal: 'T1 (Domestic)',
    belt: 'Belt 2'
  },
  {
    id: 'a6',
    flightNumber: 'EK 562',
    airline: 'Emirates',
    airlineCode: 'EK',
    airlineLogoColor: 'bg-red-700',
    type: 'arrival',
    origin: 'Dubai (DXB)',
    scheduledTime: '20:15',
    estimatedTime: '20:15',
    status: 'Scheduled',
    gate: 'Bay 14',
    terminal: 'T2 (International)',
    belt: 'Belt 3'
  }
];


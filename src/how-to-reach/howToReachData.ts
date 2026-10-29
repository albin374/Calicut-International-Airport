export interface TransportDetail {
  icon: 'clock' | 'map-pin' | 'dollar' | 'shield' | 'info';
  title: string;
  description: string;
}

export interface CityRoute {
  city: string;
  title: string;
  distance: string;
  duration: string;
  googleMapsUrl: string;
  embedMapUrl: string;
}

export const CAR_CITY_ROUTES: CityRoute[] = [
  {
    city: 'Kondotty',
    title: 'From Kondotty',
    distance: '28 kilometers',
    duration: '45 minutes',
    googleMapsUrl: 'https://maps.app.goo.gl/GGHo7rYkRepN3jpB6',
    embedMapUrl:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15658.528340656687!2d75.9514838!3d11.140428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3ba64ee2471144f5%3A0x8692de4117c315d!2sKondotty%2C%20Kerala!3m2!1d11.1456988!2d75.9642632!4m5!1s0x3ba64efeb68826df%3A0xacf29d816d02287a!2sCalicut%20International%20Airport%2C%20Karipur%2C%20Kerala!3m2!1d11.1363818!2d75.9545375!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin',
  },
  {
    city: 'Feroke',
    title: 'From Feroke',
    distance: '12 kilometers',
    duration: '22 minutes',
    googleMapsUrl: 'https://maps.app.goo.gl/25tf4yayP11EqT9p9',
    embedMapUrl:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d62627.027042079075!2d75.8520222!3d11.1542093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3ba650968482c131%3A0x719dca021ac7bfd7!2sFeroke%2C%20Kerala!3m2!1d11.1734548!2d75.8352429!4m5!1s0x3ba64efeb68826df%3A0xacf29d816d02287a!2sCalicut%20International%20Airport%2C%20Karipur%2C%20Kerala!3m2!1d11.1363818!2d75.9545375!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin',
  },
  {
    city: 'Malappuram',
    title: 'From Malappuram',
    distance: '55 kilometers',
    duration: '1 hour 20 minutes',
    googleMapsUrl: 'https://maps.app.goo.gl/XRKAQP6NXus7RARX7',
    embedMapUrl:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d125274.65437837777!2d75.9750156!3d11.0924822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3ba64a9be29b058f%3A0x23e371e0d4c30d8e!2sMalappuram%2C%20Kerala!3m2!1d11.0509762!2d76.0710967!4m5!1s0x3ba64efeb68826df%3A0xacf29d816d02287a!2sCalicut%20International%20Airport%2C%20Karipur%2C%20Kerala!3m2!1d11.1363818!2d75.9545375!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin',
  },
  {
    city: 'Thrissur',
    title: 'From Thrissur',
    distance: '115 kilometers',
    duration: '2 hours 10 minutes',
    googleMapsUrl: 'https://maps.app.goo.gl/e9Zm8Eh9r3SyDqjg8',
    embedMapUrl:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d501869.8373367175!2d75.7216028!3d10.8391402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3ba7ee15ed42d1bb%3A0x82e45aa016ca7db!2sThrissur%2C%20Kerala!3m2!1d10.5241176!2d76.2120649!4m5!1s0x3ba64efeb68826df%3A0xacf29d816d02287a!2sCalicut%20International%20Airport%2C%20Karipur%2C%20Kerala!3m2!1d11.1363818!2d75.9545375!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin',
  },
  {
    city: 'Tirur',
    title: 'From Tirur',
    distance: '45 kilometers',
    duration: '1 hour 5 minutes',
    googleMapsUrl: 'https://maps.app.goo.gl/VtNNcjJCiAEhS4ty7',
    embedMapUrl:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d250669.8373367175!2d75.768624!3d11.0352038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3ba7b18ce2f8645d%3A0x460f5865302bbabc!2sTirur%2C%20Kerala!3m2!1d10.9166586!2d75.9245118!4m5!1s0x3ba64efeb68826df%3A0xacf29d816d02287a!2sCalicut%20International%20Airport%2C%20Karipur%2C%20Kerala!3m2!1d11.1363818!2d75.9545375!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin',
  },
];

export interface TransportMode {
  id: 'bus' | 'train' | 'car';
  label: string;
  badge: string;
  tag: string;
  headline: string;
  overview: string;
  image: string;
  imageCaption: string;
  routeInfo: {
    origin: string;
    destination: string;
    duration: string;
    distance: string;
    via: string;
    googleMapsUrl: string;
    embedMapUrl: string;
  };
  features: TransportDetail[];
  bottomBanner: {
    title: string;
    description: string;
    buttonText: string;
    buttonActionType: string;
  };
}

export const TRANSPORT_MODES: Record<'bus' | 'train' | 'car', TransportMode> = {
  bus: {
    id: 'bus',
    label: 'Bus',
    badge: 'Public Transit',
    tag: 'BY BUS',
    headline: 'Bus',
    overview:
      'Calicut International Airport is well connected by public bus services from major towns and cities in Kerala. Regular services are available from Kozhikode city and nearby areas to the airport.',
    image: '/Golden Kerala Bus Journey.png',
    imageCaption: 'KSRTC Kerala State Bus Route',
    routeInfo: {
      origin: 'Mofussil Bus Stand, Kozhikode',
      destination: 'Calicut International Airport (CCJ)',
      duration: '55 min',
      distance: '28 km',
      via: 'via NH 66 & Calicut Airport Rd',
      googleMapsUrl: 'https://maps.app.goo.gl/AYsv2P8uQAT9SZir9',
      embedMapUrl:
        'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d125219.04944883508!2d75.870442!3d11.2008267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3ba659487cbd1df5%3A0x9d643c0d1e16a77!2sMofussil%20Bus%20Stand%20Building%2C%20Mavoor%20Rd%2C%20New%20Bus%20Stand%2C%20EMS%20Stadium%2C%20Arayidathupalam%2C%20Kozhikode%2C%20Kerala%20673004!3m2!1d11.2590014!2d75.7863465!4m5!1s0x3ba64efeb68826df%3A0xacf29d816d02287a!2sCalicut%20International%20Airport%2C%20Karipur%2C%20Kerala!3m2!1d11.1363818!2d75.9545375!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin',
    },
    features: [
      {
        icon: 'clock',
        title: 'Travel Time',
        description: 'The journey takes around 45–60 minutes depending on traffic conditions.',
      },
      {
        icon: 'map-pin',
        title: 'Major Bus Stations',
        description: 'Buses are available from Mofussil Bus Stand (Kozhikode), KSRTC Stand, and other key locations.',
      },
      {
        icon: 'dollar',
        title: 'Convenient & Economical',
        description: 'A cost-effective and reliable option for passengers traveling to the airport.',
      },
    ],
    bottomBanner: {
      title: 'Kerala State RTC Bus Services',
      description: 'Kerala State RTC (KSRTC) operates regular bus services to Calicut International Airport from Kozhikode and nearby towns.',
      buttonText: 'View Bus Services',
      buttonActionType: 'bus-schedule',
    },
  },
  train: {
    id: 'train',
    label: 'Train',
    badge: 'Railways',
    tag: 'BY TRAIN',
    headline: 'Train',
    overview:
      'Several major railway stations on the Southern Railway network are situated near Calicut Airport. Passengers can easily alight and take quick connecting taxis or direct buses.',
    image: '/Golden Hour Indian Railway Platform.png',
    imageCaption: 'Kozhikode Southern Railway Platform',
    routeInfo: {
      origin: 'Kozhikode Railway Station (CLT)',
      destination: 'Calicut International Airport (CCJ)',
      duration: '45 min',
      distance: '26 km',
      via: 'via NH 66 & Ramanattukara Bypass',
      googleMapsUrl: 'https://maps.app.goo.gl/finQs4ebfXK1mb9E9',
      embedMapUrl:
        'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d125219.04944883508!2d75.867704!3d11.191342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3ba65900678d7479%3A0xd4c2aaca2fe88605!2sKozhikode%20Railway%20Station%2C%20Palayam%2C%20Kozhikode%2C%20Kerala!3m2!1d11.2463021!2d75.7808707!4m5!1s0x3ba64efeb68826df%3A0xacf29d816d02287a!2sCalicut%20International%20Airport%2C%20Karipur%2C%20Kerala!3m2!1d11.1363818!2d75.9545375!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin',
    },
    features: [
      {
        icon: 'map-pin',
        title: 'Nearest Railway Stations',
        description: 'Kozhikode Main CLT (26 km), Feroke FK (18 km), and Parappanangadi PGI (16 km).',
      },
      {
        icon: 'clock',
        title: 'Travel Duration',
        description: 'Connecting road transfer from nearest rail station takes approximately 25–45 minutes.',
      },
      {
        icon: 'shield',
        title: '24/7 Station Taxis',
        description: 'Dedicated 24x7 prepaid taxis and auto-rickshaws available right outside railway exits.',
      },
    ],
    bottomBanner: {
      title: 'Southern Railway Rail Connectivity',
      description: 'Direct express and superfast trains connect Kozhikode with Kochi, Thiruvananthapuram, Bangalore, Chennai, and Mumbai.',
      buttonText: 'View Station Info',
      buttonActionType: 'rail-info',
    },
  },
  car: {
    id: 'car',
    label: 'Car',
    badge: 'Taxi & Cabs',
    tag: 'BY CAR / TAXI',
    headline: 'Routes from Nearest Main Cities to Calicut Airport',
    overview:
      'Direct highway access via National Highway 66 and arterial state corridors makes reaching Calicut International Airport seamless. Check driving distances, travel times, and live routes from nearby key cities.',
    image: '/Modern Airport Entrance Driveway (1).png',
    imageCaption: 'Calicut Airport Terminal Entrance Driveway',
    routeInfo: {
      origin: 'Kondotty',
      destination: 'Calicut International Airport (CCJ)',
      duration: '45 min',
      distance: '28 km',
      via: 'via Calicut Airport Rd',
      googleMapsUrl: 'https://maps.app.goo.gl/GGHo7rYkRepN3jpB6',
      embedMapUrl:
        'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15658.528340656687!2d75.9514838!3d11.140428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3ba64ee2471144f5%3A0x8692de4117c315d!2sKondotty%2C%20Kerala!3m2!1d11.1456988!2d75.9642632!4m5!1s0x3ba64efeb68826df%3A0xacf29d816d02287a!2sCalicut%20International%20Airport%2C%20Karipur%2C%20Kerala!3m2!1d11.1363818!2d75.9545375!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin',
    },
    features: [
      {
        icon: 'clock',
        title: 'Drive Time',
        description: 'Approximately 20 minutes to 2 hours depending on departure city and traffic conditions.',
      },
      {
        icon: 'shield',
        title: 'Prepaid Taxi Counter',
        description: 'Police-monitored 24/7 official prepaid taxi booth situated right at Arrival gates.',
      },
      {
        icon: 'dollar',
        title: 'FASTag Parking (1,200+ Bays)',
        description: 'Automated barrier entry with 10-minute free passenger pick-up & drop-off grace period.',
      },
    ],
    bottomBanner: {
      title: 'Airport Prepaid Taxis & Car Parking',
      description: 'Book official prepaid cabs or park with ease across multi-level covered bays with automated FASTag payments.',
      buttonText: 'View Parking & Cabs',
      buttonActionType: 'parking-info',
    },
  },
};


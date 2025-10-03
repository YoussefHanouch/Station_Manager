export const products = [
  // 🛢️ HUILES ET LUBRIFIANTS
  {
    id: 1,
    name: 'Huile Moteur Synthétique 5W-30',
    brand: 'Total Quartz',
    category: 'lubrifiants',
    price: '189',
    oldPrice: '220',
    rating: 4,
    reviews: 127,
    stock: 15,
    isBestSeller: true,
    image: 'https://tse1.mm.bing.net/th/id/OIP.9VKyEsuScnuQtUyGf9GvkwHaLF?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'
  },

  // 🛞 PNEUS ET JANTES
  {
    id: 2,
    name: 'Pneu Sport 205/55 R16 91V',
    brand: 'Michelin Pilot',
    category: 'pneus',
    price: '799',
    rating: 5,
    reviews: 156,
    stock: 8,
    isBestSeller: true,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WPQiM76r8_-V1x7qnufPma6TQIwR0Efi2Q&s'
  },

  // 🔋 BATTERIES
  {
    id: 3,
    name: 'Batterie 12V 60Ah',
    brand: 'Varta Blue Dynamic',
    category: 'batteries',
    price: '649',
    oldPrice: '720',
    rating: 4,
    reviews: 92,
    stock: 12,
    image: 'https://th.bing.com/th/id/OIP.uQWn1pwVCZBA_10GvVVKtAHaHa?w=196&h=196&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3'
  },

  // 🔧 FILTRES
  {
    id: 4,
    name: 'Filtre à Huile',
    brand: 'MANN Filter',
    category: 'filtres',
    price: '45',
    rating: 4,
    reviews: 203,
    stock: 25,
    image: 'https://th.bing.com/th/id/OIP.B11nsVA3xdm4n-ggXl0RSgHaGR?w=224&h=190&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3'
  },

  // 🚗 FREINAGE
  {
    id: 5,
    name: 'Plaquettes de Frein Avant',
    brand: 'Brembo',
    category: 'freinage',
    price: '229',
    oldPrice: '280',
    rating: 5,
    reviews: 98,
    stock: 14,
    isBestSeller: true,
    image: 'https://th.bing.com/th/id/OIP.FRPyKRuOFCBjJuqy1sJ2BAHaHa?w=192&h=192&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3'
  },

  // ⚡ BOUGIES ET ALLUMAGE
  {
    id: 6,
    name: 'Jeu de 4 Bougies d\'Allumage',
    brand: 'NGK',
    category: 'moteur',
    price: '89',
    rating: 4,
    reviews: 167,
    stock: 20,
    image: 'https://th.bing.com/th/id/OIP.1J6ypdnFx4Yt80XTJPlxqAHaEK?w=330&h=185&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3'
  },

  // 🧽 NETTOYAGE ET ENTRETIEN
  {
    id: 7,
    name: 'Kit de Nettoyage Complet',
    brand: 'Turtle Wax',
    category: 'entretien',
    price: '149',
    oldPrice: '180',
    rating: 4,
    reviews: 89,
    stock: 10,
    image: 'https://th.bing.com/th/id/OIP.yCTuO9ZJ1JPPXck4W3SQQwHaHa?w=184&h=184&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3'
  },

  // 🚙 ACCESSOIRES
  {
    id: 8,
    name: 'Balais d\'Essuie-Glace Avant',
    brand: 'Bosch Aerotwin',
    category: 'accessoires',
    price: '129',
    rating: 4,
    reviews: 203,
    stock: 18,
    image: 'https://th.bing.com/th/id/OIP.9HBY-c_mVybL9qaA0xgZtQHaHa?w=182&h=182&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3'
  },

  // 🔧 OUTILLAGE
  {
    id: 9,
    name: 'Cric Hydraulique 2 Tonnes',
    brand: 'KS Tools',
    category: 'outillage',
    price: '189',
    rating: 4,
    reviews: 45,
    stock: 6,
    image: 'https://th.bing.com/th/id/OIP.RPVqrojTBCU3qbxJMWJ4uwHaFo?w=248&h=189&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3'
  },

  // 🎧 ÉLECTRONIQUE
  {
    id: 10,
    name: 'Autoradio Bluetooth USB',
    brand: 'Pioneer',
    category: 'electronique',
    price: '299',
    oldPrice: '350',
    rating: 4,
    reviews: 167,
    stock: 5,
    image: 'https://th.bing.com/th/id/OIP.cL3QbX0CzhlSCUTlE72cUwHaGQ?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'
  }
];




// Data for home page
 export const stats = [
  { value: "10K+", label: "Satisfied Customers" },
  { value: "15+", label: "Years of Experience" },
  { value: "50+", label: "Certified Technicians" },
  { value: "24/7", label: "Customer Support" }
];

 export const features = [
  {
    icon: "fas fa-user-tie",
    color: "bg-blue-500",
    title: "Certified Experts",
    description: "Our team of technicians holds the most demanding certifications in the automotive industry."
  },
  {
    icon: "fas fa-shield-alt",
    color: "bg-green-500",
    title: "12 Month Warranty",
    description: "All our services and parts are guaranteed for 12 months for your peace of mind."
  },
  {
    icon: "fas fa-bolt",
    color: "bg-orange-500",
    title: "Fast Service",
    description: "Efficient interventions with optimized timelines to minimize your waiting time."
  },
  {
    icon: "fas fa-tag",
    color: "bg-purple-500",
    title: "Transparent Pricing",
    description: "Detailed quotes without surprises. You know exactly what you're paying for."
  }
];

 export const services = [
  {
    id: 'oil-change',
    name: 'Complete Oil Change',
    description: 'Engine oil and oil filter change with premium quality products.',
    price: '299',
    duration: '45 min',
    rating: '4.9',
    image: 'https://images.pexels.com/photos/13065699/pexels-photo-13065699.jpeg',
  },
  {
    id: 'brakes',
    name: 'Brake System',
    description: 'Complete inspection and replacement of brake discs and pads.',
    price: '599',
    duration: '2h',
    rating: '4.8',
    image: 'https://images.pexels.com/photos/6870307/pexels-photo-6870307.jpeg',
  },
  {
    id: 'tires',
    name: 'Tires & Balancing',
    description: 'Mounting, balancing and wheel alignment for optimal driving.',
    price: '199',
    duration: '1h',
    rating: '4.9',
    image: 'https://media.istockphoto.com/id/1227609881/photo/wheel-alignment-equipment-on-a-car-wheel-in-a-repair-station.jpg?s=1024x1024&w=is&k=20&c=e1LYwaoJtqI7r6gAXdnhSRNB9EblDLydIJaOlI2L55o=',
  }
];

 export const testimonials = [
  {
    name: "Ahmed B.",
    car: "Mercedes C-Class",
    comment: "Exceptional service! My vehicle has never run better. Highly recommended.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Fatima Z.",
    car: "Renault Clio",
    comment: "Professional team and transparent about prices. I will definitely come back.",
    avatar: "https://th.bing.com/th/id/OIP.VW1_vB-wMDc8VW8A466eMAHaLH?w=125&h=187&c=7&r=0&o=5&cb=12&dpr=1.3&pid=1.7"
  },
  {
    name: "Karim M.",
    car: "BMW 3 Series",
    comment: "The best garage in Meknes. Competent technicians and impeccable customer service.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  }
];

 export const socialLinks = [
  { icon: 'facebook-f', url: '#' },
  { icon: 'twitter', url: '#' },
  { icon: 'instagram', url: '#' },
  { icon: 'linkedin-in', url: '#' }
];

export  const quickLinks = [
  { name: 'Our Services', path: '/services' },
  { name: 'Online Shop', path: '/products' },
  { name: 'Book Appointment', path: '/appointments' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'About Us', path: '/about' }
];


  export const service = [
    { id: 'oil-change', name: 'Complete Oil Change', duration: '45 min', price: '299 DH' },
    { id: 'brakes', name: 'Brake System Service', duration: '2h', price: '599 DH' },
    { id: 'tires', name: 'Tire Change', duration: '1h', price: '199 DH' },
    { id: 'diagnostic', name: 'Electronic Diagnostic', duration: '1h30', price: '249 DH' },
    { id: 'battery', name: 'Battery Replacement', duration: '30 min', price: '149 DH' },
    { id: 'ac', name: 'AC Service', duration: '1h', price: '349 DH' }
  ];

   export const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];
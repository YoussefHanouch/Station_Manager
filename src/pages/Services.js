import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: 'fas fa-list' },
    { id: 'maintenance', name: 'Maintenance', icon: 'fas fa-oil-can' },
    { id: 'repair', name: 'Repair', icon: 'fas fa-tools' },
    { id: 'tires', name: 'Tires', icon: 'fas fa-tire' },
    { id: 'electronics', name: 'Electronics', icon: 'fas fa-bolt' },
    { id: 'bodywork', name: 'Bodywork', icon: 'fas fa-car-crash' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Image */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 sm:py-16 md:py-20 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Automotive services"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Services</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto px-4">
            Complete and professional solutions for the maintenance and repair of your vehicle
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex overflow-x-auto pb-4 sm:pb-0 sm:flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center mb-8 sm:mb-12 scrollbar-hide">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition duration-300 whitespace-nowrap flex-shrink-0 text-sm sm:text-base ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              <i className={`${category.icon} mr-2 text-xs sm:text-sm`}></i>
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl sm:hover:shadow-2xl transition duration-300 group cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                  {service.price} DH
                </div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  {service.duration}
                </div>
              </div>
              
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3 flex-shrink-0">
                    <i className={`${service.icon} text-blue-600 text-base sm:text-lg`}></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">{service.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base flex-1">
                  {service.description}
                </p>
                
                <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs sm:text-sm text-gray-700">
                      <i className="fas fa-check-circle text-green-500 mr-2 text-xs sm:text-sm"></i>
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs sm:text-sm text-blue-600 font-medium">
                      +{service.features.length - 3} more benefits
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i}
                        className={`fas fa-star ${i < service.rating ? 'text-yellow-400' : 'text-gray-300'} text-xs sm:text-sm`}
                      ></i>
                    ))}
                    <span className="text-gray-500 text-xs sm:text-sm ml-1 sm:ml-2">({service.reviews})</span>
                  </div>
                  
                  <Link 
                    to={`/appointments?service=${service.id}`}
                    className="bg-blue-600 text-white px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold flex items-center text-xs sm:text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fas fa-calendar-plus mr-1 sm:mr-2"></i>
                    Book
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Services Found */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <i className="fas fa-search text-gray-300 text-4xl sm:text-5xl mb-4"></i>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-2">No services found</h3>
            <p className="text-gray-500 text-sm sm:text-base">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedService.image}
                alt={selectedService.name}
                className="w-full h-48 sm:h-64 object-cover"
              />
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white p-1 sm:p-2 rounded-full hover:bg-gray-100 transition duration-300"
              >
                <i className="fas fa-times text-gray-600 text-lg sm:text-xl"></i>
              </button>
            </div>
            
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <i className={`${selectedService.icon} text-blue-600 text-xl sm:text-2xl`}></i>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{selectedService.name}</h2>
                  <p className="text-gray-600 text-sm sm:text-base">{selectedService.categoryName}</p>
                </div>
              </div>
              
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">{selectedService.fullDescription}</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">This service includes:</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {selectedService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <i className="fas fa-check text-green-500 mr-2 sm:mr-3 text-sm sm:text-base"></i>
                        <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Information</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm sm:text-base">Estimated duration:</span>
                      <span className="font-semibold text-sm sm:text-base">{selectedService.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm sm:text-base">Warranty:</span>
                      <span className="font-semibold text-green-600 text-sm sm:text-base">{selectedService.warranty}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm sm:text-base">Price:</span>
                      <span className="text-xl sm:text-2xl font-bold text-blue-600">{selectedService.price} DH</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/appointments?service=${selectedService.id}`}
                    className="w-full bg-orange-500 text-white py-2 sm:py-3 rounded-lg hover:bg-orange-600 transition duration-300 font-semibold text-sm sm:text-base md:text-lg flex items-center justify-center mt-4 sm:mt-6"
                  >
                    <i className="fas fa-calendar-check mr-2"></i>
                    Book This Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Services data with real images
const services = [
  {
    id: 'oil-change',
    name: 'Complete Oil Change',
    category: 'maintenance',
    categoryName: 'Maintenance & Service',
    description: 'Engine oil and oil filter change for optimal performance',
    fullDescription: 'Our complete oil change service includes changing the engine oil with high-quality synthetic oils, replacing the oil filter, and comprehensive checking of all your vehicle\'s fluid levels. This essential service extends your engine\'s lifespan and improves its performance.',
    price: '299',
    oldPrice: '350',
    duration: '45 min',
    warranty: '12 months',
    icon: 'fas fa-oil-can',
    rating: 4,
    reviews: 127,
    image: 'https://images.pexels.com/photos/13065699/pexels-photo-13065699.jpeg',
    features: [
      'High-quality synthetic engine oil',
      'New original oil filter',
      'Check of all fluid levels',
      'Oil pan cleaning',
      'Oil pressure test',
      'Detailed service report'
    ]
  },
  {
    id: 'brakes',
    name: 'Brake System Service',
    category: 'repair',
    categoryName: 'Mechanical Repair',
    description: 'Inspection and replacement of brake pads and discs',
    fullDescription: 'Our brake system expertise ensures your safety on the road. We perform a complete diagnostic of your brake system and replace worn parts with high-quality components.',
    price: '599',
    duration: '2h',
    warranty: '18 months',
    icon: 'fas fa-brake-warning',
    rating: 5,
    reviews: 89,
    image: 'https://images.pexels.com/photos/6870307/pexels-photo-6870307.jpeg',
    features: [
      'Complete brake system diagnostic',
      'Front/rear brake pad replacement',
      'Disc inspection and replacement',
      'Brake fluid flush and replacement',
      'Hand brake adjustment',
      'Road safety test'
    ]
  },
  {
    id: 'tires',
    name: 'Tires & Balancing',
    category: 'tires',
    categoryName: 'Tires & Wheels',
    description: 'Mounting, balancing and wheel alignment',
    fullDescription: 'Proper tires are essential for your safety. We offer mounting, balancing and wheel alignment to ensure even wear and stable driving.',
    price: '199',
    duration: '1h',
    warranty: '6 months',
    icon: 'fas fa-tire',
    rating: 4,
    reviews: 203,
    image: 'https://media.istockphoto.com/id/1227609881/photo/wheel-alignment-equipment-on-a-car-wheel-in-a-repair-station.jpg?s=1024x1024&w=is&k=20&c=e1LYwaoJtqI7r6gAXdnhSRNB9EblDLydIJaOlI2L55o=',
    features: [
      'Tire mounting and dismounting',
      'High-precision balancing',
      'Pressure check',
      'Wheel alignment',
      'Tire rotation',
      'Wear inspection'
    ]
  },
  {
    id: 'battery',
    name: 'Battery & Electrical',
    category: 'electronics',
    categoryName: 'Electrical Systems',
    description: 'Battery testing and replacement, electrical diagnostic',
    fullDescription: 'Electrical problems? Our battery diagnostic and replacement service guarantees reliable starting in all circumstances.',
    price: '449',
    duration: '30 min',
    warranty: '24 months',
    icon: 'fas fa-battery-full',
    rating: 4,
    reviews: 54,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    features: [
      'Complete battery testing',
      'Professional charging',
      'Terminal cleaning',
      'Alternator diagnostic',
      'Starter motor check',
      'Guaranteed installation'
    ]
  },
  {
    id: 'ac',
    name: 'Air Conditioning',
    category: 'maintenance',
    categoryName: 'Comfort & AC',
    description: 'AC system recharge and maintenance',
    fullDescription: 'Enjoy fresh, clean air in your cabin. Our AC service includes gas recharge and complete system maintenance.',
    price: '399',
    duration: '1h',
    warranty: '12 months',
    icon: 'fas fa-snowflake',
    rating: 4,
    reviews: 78,
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    features: [
      'R134a or R1234yf gas recharge',
      'Cabin filter cleaning',
      'Compressor performance test',
      'Circuit leak check',
      'Cabin disinfection',
      'Functionality test'
    ]
  },
  {
    id: 'diagnostic',
    name: 'Electronic Diagnostic',
    category: 'electronics',
    categoryName: 'Advanced Diagnostic',
    description: 'Complete scan of computers and electronic systems',
    fullDescription: 'Using our state-of-the-art diagnostic tools, we identify and solve the most complex electronic problems in your vehicle.',
    price: '249',
    duration: '1h30',
    warranty: '3 months',
    icon: 'fas fa-laptop-medical',
    rating: 4,
    reviews: 92,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    features: [
      'Scan of all computers',
      'Detailed fault report',
      'Error code clearing',
      'CAN network diagnostic',
      'Parameter optimization',
      'Personalized advice'
    ]
  }
];

export default Services;
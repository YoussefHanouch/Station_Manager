import React from 'react';
import { Link } from 'react-router-dom';
import {stats,features,services,testimonials,socialLinks,quickLinks} from '../Data'
 import './index.css'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img 
          src="https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern service station"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Your Trusted
            <span className="block text-orange-400 mt-2">Service Station</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Exceptional quality automotive services with certified technicians
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link 
              to="/appointments" 
              className="bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-orange-600 transition duration-300 font-semibold text-base sm:text-lg flex items-center justify-center"
            >
              <i className="fas fa-calendar-check mr-2"></i>
              Book Appointment
            </Link>
            <Link 
              to="/services" 
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition duration-300 font-semibold text-base sm:text-lg flex items-center justify-center"
            >
              <i className="fas fa-tools mr-2"></i>
              Discover Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Images */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-3 sm:mb-4">Why Choose Us?</h2>
          <p className="text-lg sm:text-xl text-center text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            Discover what makes us the ideal partner for your vehicle maintenance
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                >
                  <div className={`p-3 sm:p-4 rounded-full ${feature.color} flex-shrink-0`}>
                    <i className={`${feature.icon} text-xl sm:text-2xl text-white`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Professional automotive technician"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 sm:p-3 rounded-full">
                    <i className="fas fa-shield-alt text-green-600 text-xl sm:text-2xl"></i>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm sm:text-base">12 Month Warranty</div>
                    <div className="text-xs sm:text-sm text-gray-600">On all our services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview with Real Images */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-3 sm:mb-4">Our Popular Services</h2>
          <p className="text-lg sm:text-xl text-center text-gray-600 mb-8 sm:mb-12 px-4">
            Complete solutions for your vehicle
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group flex flex-col h-full"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {service.price} DH
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{service.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <i className="fas fa-clock mr-1"></i>
                      {service.duration}
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-yellow-500">
                      <i className="fas fa-star"></i>
                      <span className="ml-1 text-gray-600">{service.rating}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/appointments?service=${service.id}`}
                    className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold text-sm sm:text-base flex items-center justify-center"
                  >
                    <i className="fas fa-calendar-plus mr-2"></i>
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-base sm:text-lg"
            >
              View all our services
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">What Our Customers Say</h2>
          <p className="text-lg sm:text-xl text-center mb-8 sm:mb-12 opacity-90 px-4">
            Discover the experiences of our satisfied customers
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-opacity-20 transition duration-300"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
                  />
                  <div>
                    <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-blue-200 text-xs sm:text-sm">{testimonial.car}</div>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3 text-sm sm:text-base">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="text-blue-100 leading-relaxed text-sm sm:text-base">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center mb-3 sm:mb-4">
                <h3 className="text-xl sm:text-2xl font-bold">Infinity Station</h3>
              </div>
              <p className="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                Your trusted partner for all your automotive needs since 2010.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    <i className={`fab fa-${social.icon} text-base sm:text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-gray-400 hover:text-white transition duration-300 flex items-center text-sm sm:text-base"
                    >
                      <i className="fas fa-chevron-right text-xs mr-2"></i>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-3 sm:mb-4">Contact</h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-3 text-blue-500 text-sm sm:text-base"></i>
                  Boulevard Hassan II, Meknes
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone mr-3 text-green-500 text-sm sm:text-base"></i>
                  +212 5XX-XXXXXX
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-purple-500 text-sm sm:text-base"></i>
                  contact@infinitystation.ma
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-3 sm:mb-4">Opening Hours</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li className="flex justify-between">
                  <span>Mon - Thu:</span>
                  <span>8AM - 6PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday:</span>
                  <span>8AM - 12PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8AM - 4PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-red-400">Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2024 Infinity Station. All rights reserved. | Developed with <i className="fas fa-heart text-red-500 mx-1"></i> by Youssef Hanouch</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
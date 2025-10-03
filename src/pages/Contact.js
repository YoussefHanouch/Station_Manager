import React, { useState } from 'react';
 import './index.css'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    alert('Message sent! We will get back to you as soon as possible.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl">We're here to answer your questions</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Our Contact Information</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-blue-600 text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Address</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Boulevard Hassan II<br />
                      Meknes, Morocco
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <i className="fas fa-phone text-green-600 text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Phone</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      +212 5XX-XXXXXX<br />
                      +212 5XX-XXXXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <i className="fas fa-envelope text-purple-600 text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Email</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      contact@infinitystation.ma<br />
                      support@infinitystation.ma
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <i className="fas fa-clock text-orange-600 text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Opening Hours</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Monday - Thursday: 8:00 AM - 6:00 PM<br />
                      Friday: 8:00 AM - 12:00 PM<br />
                      Saturday: 8:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6 sm:mt-8">
                <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Follow Us</h3>
                <div className="flex space-x-3 sm:space-x-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map(social => (
                    <a
                      key={social}
                      href="#"
                      className="bg-gray-100 p-2 sm:p-3 rounded-lg hover:bg-blue-100 transition duration-300 flex-shrink-0"
                    >
                      <i className={`fab fa-${social} text-gray-600 hover:text-blue-600 text-lg sm:text-xl`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="">Choose a subject</option>
                    <option value="service">Service Request</option>
                    <option value="appointment">Appointment</option>
                    <option value="product">Products</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold text-base sm:text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mt-6 sm:mt-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Our Location</h2>
              <div className="bg-gray-200 h-48 sm:h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-map text-3xl sm:text-4xl text-gray-400 mb-3 sm:mb-4"></i>
                  <p className="text-gray-600 text-sm sm:text-base">Interactive Google Maps</p>
                  <p className="text-xs sm:text-sm text-gray-500">Integration coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-8 sm:mt-12">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-600 mb-2">How quickly do you respond to messages?</h3>
                  <p className="text-gray-600 text-sm">We typically respond within 2 hours during business hours and within 24 hours on weekends.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-600 mb-2">Do you offer emergency services?</h3>
                  <p className="text-gray-600 text-sm">Yes, we offer 24/7 emergency roadside assistance for our premium service members.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-600 mb-2">What payment methods do you accept?</h3>
                  <p className="text-gray-600 text-sm">We accept cash, credit cards, and mobile payments. Financing options are also available.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-600 mb-2">Do you provide loaner vehicles?</h3>
                  <p className="text-gray-600 text-sm">Yes, we offer complimentary loaner vehicles for services that take more than 4 hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
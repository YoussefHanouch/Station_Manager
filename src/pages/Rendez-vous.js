import React, { useState } from 'react';

const Appointments = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [step, setStep] = useState(1);

  const services = [
    { id: 'oil-change', name: 'Complete Oil Change', duration: '45 min', price: '299 DH' },
    { id: 'brakes', name: 'Brake System Service', duration: '2h', price: '599 DH' },
    { id: 'tires', name: 'Tire Change', duration: '1h', price: '199 DH' },
    { id: 'diagnostic', name: 'Electronic Diagnostic', duration: '1h30', price: '249 DH' },
    { id: 'battery', name: 'Battery Replacement', duration: '30 min', price: '149 DH' },
    { id: 'ac', name: 'AC Service', duration: '1h', price: '349 DH' }
  ];

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for appointment submission
    alert('Appointment confirmed! We will contact you for confirmation.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-purple-600 text-white py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Book an Appointment</h1>
          <p className="text-lg sm:text-xl">Book online in just a few clicks</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Progress Steps */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="flex items-center">
            {[1, 2, 3].map((stepNumber) => (
              <React.Fragment key={stepNumber}>
                <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full ${
                  step >= stepNumber ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-600'
                } font-semibold text-sm sm:text-base`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-12 sm:w-16 md:w-20 h-1 ${
                    step > stepNumber ? 'bg-purple-600' : 'bg-gray-300'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
          {step === 1 && (
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Choose a Service</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {services.map(service => (
                  <div
                    key={service.id}
                    onClick={() => {
                      setSelectedService(service.id);
                      setStep(2);
                    }}
                    className="border-2 border-gray-200 rounded-lg p-4 sm:p-6 hover:border-purple-500 hover:bg-purple-50 cursor-pointer transition duration-300"
                  >
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.name}</h3>
                    <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                      <span>Duration: {service.duration}</span>
                      <span className="font-bold text-purple-600">{service.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Choose Date and Time</h2>
              
              {/* Date Selection */}
              <div className="mb-6 sm:mb-8">
                <label className="block text-base sm:text-lg font-semibold mb-3 sm:mb-4">Appointment Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <div>
                  <label className="block text-base sm:text-lg font-semibold mb-3 sm:mb-4">Appointment Time</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                    {timeSlots.map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 sm:p-4 border-2 rounded-lg font-semibold transition duration-300 text-sm sm:text-base ${
                          selectedTime === time
                            ? 'border-purple-500 bg-purple-100 text-purple-700'
                            : 'border-gray-200 hover:border-purple-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-6 sm:mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm sm:text-base order-2 sm:order-1"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!selectedDate || !selectedTime}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm sm:text-base order-1 sm:order-2"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Personal Information</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Vehicle Make and Model</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                    placeholder="e.g., Toyota Corolla 2020"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Additional Notes (optional)</label>
                  <textarea
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                    placeholder="Any special requirements or notes..."
                  ></textarea>
                </div>

                {/* Appointment Summary */}
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Appointment Summary</h3>
                  <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span>Service:</span>
                      <span className="font-medium">{services.find(s => s.id === selectedService)?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span className="font-medium">{selectedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between font-semibold border-t pt-1 sm:pt-2 text-sm sm:text-base">
                      <span>Total:</span>
                      <span className="text-purple-600">{services.find(s => s.id === selectedService)?.price}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm sm:text-base order-2 sm:order-1"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold text-sm sm:text-base order-1 sm:order-2"
                  >
                    Confirm Appointment
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="bg-blue-100 p-2 sm:p-3 rounded-full flex-shrink-0">
              <i className="fas fa-info-circle text-blue-600 text-lg sm:text-xl"></i>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">Important Information</h3>
              <ul className="text-blue-700 text-xs sm:text-sm space-y-1">
                <li className="flex items-start">
                  <i className="fas fa-clock mt-1 mr-2 text-xs"></i>
                  <span>Please arrive 10 minutes before your scheduled time</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-car mt-1 mr-2 text-xs"></i>
                  <span>Bring your vehicle registration and maintenance book</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-phone mt-1 mr-2 text-xs"></i>
                  <span>We'll call you to confirm your appointment within 2 hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
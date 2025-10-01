// pages/admin/AdminSettings.js
import React, { useState } from 'react';

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    stationName: 'Infinity Station',
    email: 'contact@infinitystation.ma',
    phone: '+212 5XX-XXXXXX',
    address: 'Boulevard Hassan II, Meknès',
    workingHours: {
      monday: { open: '08:00', close: '18:00' },
      tuesday: { open: '08:00', close: '18:00' },
      wednesday: { open: '08:00', close: '18:00' },
      thursday: { open: '08:00', close: '18:00' },
      friday: { open: '08:00', close: '12:00' },
      saturday: { open: '08:00', close: '16:00' },
      sunday: { open: '00:00', close: '00:00' }
    }
  });

  const tabs = [
    { id: 'general', name: 'Général', icon: 'fas fa-cog' },
    { id: 'working-hours', name: 'Heures d\'ouverture', icon: 'fas fa-clock' },
    { id: 'services', name: 'Services', icon: 'fas fa-concierge-bell' },
    { id: 'notifications', name: 'Notifications', icon: 'fas fa-bell' },
    { id: 'security', name: 'Sécurité', icon: 'fas fa-shield-alt' }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white">
        {/* ... même sidebar ... */}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm border-b">
          <div className="flex justify-between items-center px-6 py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Paramètres</h1>
              <p className="text-gray-600">Configurez votre application</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              <i className="fas fa-save mr-2"></i>
              Sauvegarder
            </button>
          </div>
        </header>

        <div className="p-6">
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="border-b">
              <nav className="flex -mb-px">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-6 py-4 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <i className={`${tab.icon} mr-2`}></i>
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {/* Onglet Général */}
              {activeTab === 'general' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Informations de la Station</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom de la station
                        </label>
                        <input
                          type="text"
                          value={settings.stationName}
                          onChange={(e) => setSettings({...settings, stationName: e.target.value})}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          value={settings.email}
                          onChange={(e) => setSettings({...settings, email: e.target.value})}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          value={settings.phone}
                          onChange={(e) => setSettings({...settings, phone: e.target.value})}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Adresse
                        </label>
                        <input
                          type="text"
                          value={settings.address}
                          onChange={(e) => setSettings({...settings, address: e.target.value})}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Logo de la Station</h3>
                    <div className="flex items-center space-x-6">
                      <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                        <i className="fas fa-camera text-gray-400 text-xl"></i>
                      </div>
                      <div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                          <i className="fas fa-upload mr-2"></i>
                          Changer le logo
                        </button>
                        <p className="text-sm text-gray-500 mt-2">PNG, JPG max 2MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Onglet Heures d'Ouverture */}
              {activeTab === 'working-hours' && (
                <div>
                  <h3 className="text-lg font-medium mb-4">Heures d'Ouverture</h3>
                  <div className="space-y-4">
                    {Object.entries(settings.workingHours).map(([day, hours]) => (
                      <div key={day} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <span className="font-medium capitalize w-24">
                            {getDayName(day)}
                          </span>
                          <div className="flex items-center space-x-2">
                            <input
                              type="time"
                              value={hours.open}
                              className="p-2 border border-gray-300 rounded"
                            />
                            <span>-</span>
                            <input
                              type="time"
                              value={hours.close}
                              className="p-2 border border-gray-300 rounded"
                            />
                          </div>
                        </div>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={hours.open !== '00:00'}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">Ouvert</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Autres onglets... */}
              {activeTab === 'services' && (
                <div className="text-center py-12">
                  <i className="fas fa-concierge-bell text-4xl text-gray-400 mb-4"></i>
                  <p className="text-gray-600">Gestion des services à venir</p>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="text-center py-12">
                  <i className="fas fa-bell text-4xl text-gray-400 mb-4"></i>
                  <p className="text-gray-600">Paramètres des notifications à venir</p>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="text-center py-12">
                  <i className="fas fa-shield-alt text-4xl text-gray-400 mb-4"></i>
                  <p className="text-gray-600">Paramètres de sécurité à venir</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function getDayName(day) {
  const days = {
    monday: 'Lundi',
    tuesday: 'Mardi',
    wednesday: 'Mercredi',
    thursday: 'Jeudi',
    friday: 'Vendredi',
    saturday: 'Samedi',
    sunday: 'Dimanche'
  };
  return days[day];
}

export default AdminSettings;
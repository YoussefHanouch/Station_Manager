import React, { useState } from 'react';

const AdminAppointments = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const statusFilters = [
    { id: 'all', name: 'Tous', color: 'gray' },
    { id: 'pending', name: 'En attente', color: 'yellow' },
    { id: 'confirmed', name: 'Confirmé', color: 'blue' },
    { id: 'in_progress', name: 'En cours', color: 'orange' },
    { id: 'completed', name: 'Terminé', color: 'green' },
    { id: 'cancelled', name: 'Annulé', color: 'red' }
  ];

  const filteredAppointments = selectedStatus === 'all' 
    ? appointments 
    : appointments.filter(apt => apt.status === selectedStatus);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar (identique au dashboard) */}
      <div className="w-64 bg-blue-800 text-white">
        {/* ... même sidebar que le dashboard ... */}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm border-b">
          <div className="flex justify-between items-center px-6 py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Gestion des Rendez-vous</h1>
              <p className="text-gray-600">Gérez les rendez-vous clients</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              <i className="fas fa-plus mr-2"></i>
              Nouveau RDV
            </button>
          </div>
        </header>

        <div className="p-6">
          {/* Filtres et Recherche */}
          <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Statut</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  {statusFilters.map(status => (
                    <option key={status.id} value={status.id}>{status.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Recherche</label>
                <input
                  type="text"
                  placeholder="Client, service..."
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-end">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  <i className="fas fa-filter mr-2"></i>
                  Filtrer
                </button>
              </div>
            </div>
          </div>

          {/* Tableau des Rendez-vous */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client & Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date & Heure
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Technicien
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Statut
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Montant
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredAppointments.map((appointment, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition duration-300">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="font-medium text-gray-900">{appointment.clientName}</div>
                          <div className="text-sm text-gray-500">{appointment.service}</div>
                          <div className="text-xs text-gray-400">{appointment.vehicle}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{appointment.date}</div>
                        <div className="text-sm text-gray-500">{appointment.time}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            src={appointment.technician.avatar}
                            alt={appointment.technician.name}
                            className="h-8 w-8 rounded-full mr-3"
                          />
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {appointment.technician.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {appointment.technician.specialty}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${appointment.statusColor}`}>
                          {appointment.statusText}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {appointment.amount} DH
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <i className="fas fa-edit"></i>
                          </button>
                          <button className="text-green-600 hover:text-green-900">
                            <i className="fas fa-check"></i>
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Calendrier Vue */}
          <div className="mt-8 bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-4">Vue Calendrier</h3>
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <i className="fas fa-calendar-alt text-4xl text-gray-400 mb-4"></i>
              <p className="text-gray-600">Intégration calendrier à venir</p>
              <p className="text-sm text-gray-500">Affichage des RDV par jour/semaine/mois</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const appointments = [
  {
    id: 1,
    clientName: 'Ahmed Benali',
    service: 'Vidange Complète',
    vehicle: 'Renault Clio 2020',
    date: '15 Déc 2024',
    time: '10:00 - 11:00',
    technician: {
      name: 'Karim Tech',
      specialty: 'Mécanicien',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    status: 'confirmed',
    statusText: 'Confirmé',
    statusColor: 'bg-blue-100 text-blue-800',
    amount: '299'
  },
  {
    id: 2,
    clientName: 'Fatima Zahra',
    service: 'Changement Pneus',
    vehicle: 'Dacia Sandero 2021',
    date: '15 Déc 2024',
    time: '11:30 - 12:30',
    technician: {
      name: 'Mohamed Mech',
      specialty: 'Pneus',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    status: 'in_progress',
    statusText: 'En cours',
    statusColor: 'bg-orange-100 text-orange-800',
    amount: '199'
  },
  {
    id: 3,
    clientName: 'Youssef Alami',
    service: 'Diagnostic Électronique',
    vehicle: 'BMW Série 3 2019',
    date: '15 Déc 2024',
    time: '14:00 - 15:30',
    technician: {
      name: 'Hassan Elec',
      specialty: 'Électricité',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    status: 'pending',
    statusText: 'En attente',
    statusColor: 'bg-yellow-100 text-yellow-800',
    amount: '249'
  },
  {
    id: 4,
    clientName: 'Samira K.',
    service: 'Système de Freinage',
    vehicle: 'Peugeot 208 2022',
    date: '16 Déc 2024',
    time: '09:00 - 11:00',
    technician: {
      name: 'Karim Tech',
      specialty: 'Mécanicien',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    status: 'completed',
    statusText: 'Terminé',
    statusColor: 'bg-green-100 text-green-800',
    amount: '599'
  }
];

export default AdminAppointments;
// pages/admin/AdminEmployees.js
import React, { useState } from 'react';

const AdminEmployees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Karim Tech',
      email: 'karim@station.ma',
      phone: '+212 6XX-XXXXXX',
      role: 'Mécanicien Senior',
      specialty: 'Mécanique Générale',
      status: 'active',
      hireDate: '2022-03-15',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      name: 'Mohamed Mech',
      email: 'mohamed@station.ma',
      phone: '+212 6XX-XXXXXX',
      role: 'Spécialiste Pneus',
      specialty: 'Pneus & Roues',
      status: 'active',
      hireDate: '2023-01-10',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 3,
      name: 'Hassan Elec',
      email: 'hassan@station.ma',
      phone: '+212 6XX-XXXXXX',
      role: 'Électricien Auto',
      specialty: 'Systèmes Électriques',
      status: 'active',
      hireDate: '2021-11-20',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
  ]);

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
              <h1 className="text-2xl font-bold text-gray-800">Gestion des Employés</h1>
              <p className="text-gray-600">Gérez votre équipe technique</p>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
              <i className="fas fa-user-plus mr-2"></i>
              Nouvel Employé
            </button>
          </div>
        </header>

        <div className="p-6">
          {/* Statistiques Employés */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Employés</p>
                  <p className="text-2xl font-bold text-gray-800">8</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <i className="fas fa-users text-blue-600 text-xl"></i>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Disponibles</p>
                  <p className="text-2xl font-bold text-green-600">6</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <i className="fas fa-user-check text-green-600 text-xl"></i>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">En Congé</p>
                  <p className="text-2xl font-bold text-orange-600">2</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-lg">
                  <i className="fas fa-umbrella-beach text-orange-600 text-xl"></i>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Taux Occupation</p>
                  <p className="text-2xl font-bold text-purple-600">85%</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <i className="fas fa-chart-line text-purple-600 text-xl"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Liste des Employés */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Employé
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Poste
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date d'embauche
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Statut
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {employees.map((employee) => (
                    <tr key={employee.id} className="hover:bg-gray-50 transition duration-300">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            src={employee.avatar}
                            alt={employee.name}
                            className="h-10 w-10 rounded-full mr-4"
                          />
                          <div>
                            <div className="font-medium text-gray-900">{employee.name}</div>
                            <div className="text-sm text-gray-500">{employee.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{employee.role}</div>
                        <div className="text-sm text-gray-500">{employee.specialty}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {employee.phone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(employee.hireDate).toLocaleDateString('fr-FR')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          Actif
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <i className="fas fa-edit"></i>
                          </button>
                          <button className="text-green-600 hover:text-green-900">
                            <i className="fas fa-calendar"></i>
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Planning Hebdomadaire */}
          <div className="mt-8 bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-4">Planning de la Semaine</h3>
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <i className="fas fa-calendar-alt text-4xl text-gray-400 mb-4"></i>
              <p className="text-gray-600">Planning des employés à venir</p>
              <p className="text-sm text-gray-500">Affichage des shifts et disponibilités</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEmployees;
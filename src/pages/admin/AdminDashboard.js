import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-blue-800 text-white transition-all duration-300`}>
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen && (
            <div className="flex items-center">
              <img src="/logo.png" alt="Admin" className="h-8 w-8 mr-3" />
              <h1 className="text-xl font-bold">Admin Panel</h1>
            </div>
          )}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-blue-700"
          >
            <i className={`fas ${sidebarOpen ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
          </button>
        </div>

        <nav className="mt-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center px-4 py-3 text-gray-200 hover:bg-blue-700 hover:text-white transition duration-300"
            >
              <i className={`${item.icon} ${sidebarOpen ? 'mr-3' : 'mx-auto'} text-lg`}></i>
              {sidebarOpen && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b">
          <div className="flex justify-between items-center px-6 py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Tableau de Bord</h1>
              <p className="text-gray-600">Bienvenue, Administrateur</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 text-gray-600 hover:text-blue-600">
                  <i className="fas fa-bell text-xl"></i>
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Admin"
                  className="h-10 w-10 rounded-full"
                />
                <span className="text-gray-700 font-medium">Admin</span>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg ${stat.color} mr-4`}>
                    <i className={`${stat.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    <p className={`text-sm ${stat.trendColor}`}>
                      <i className={`fas ${stat.trendIcon} mr-1`}></i>
                      {stat.trend}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts and Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Chart */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4">Revenus Mensuels</h3>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <i className="fas fa-chart-bar text-4xl mb-2"></i>
                  <p>Graphique des revenus</p>
                </div>
              </div>
            </div>

            {/* Recent Appointments */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Rendez-vous Récents</h3>
                <Link to="/admin/appointments" className="text-blue-600 hover:text-blue-800 text-sm">
                  Voir tout
                </Link>
              </div>
              <div className="space-y-4">
                {recentAppointments.map((appointment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">{appointment.client}</p>
                      <p className="text-sm text-gray-600">{appointment.service}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${appointment.statusColor}`}>
                        {appointment.status}
                      </span>
                      <p className="text-sm text-gray-600">{appointment.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Actions Rapides</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.path}
                  className="bg-white border rounded-lg p-4 text-center hover:shadow-md transition duration-300"
                >
                  <div className={`p-3 rounded-lg ${action.color} inline-flex`}>
                    <i className={`${action.icon} text-white text-xl`}></i>
                  </div>
                  <p className="mt-2 font-medium text-gray-800">{action.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const menuItems = [
  { name: 'Tableau de Bord', path: '/admin', icon: 'fas fa-tachometer-alt' },
  { name: 'Rendez-vous', path: '/admin/appointments', icon: 'fas fa-calendar-check' },
  { name: 'Inventaire', path: '/admin/inventory', icon: 'fas fa-boxes' },
  { name: 'Employés', path: '/admin/employees', icon: 'fas fa-users' },
  { name: 'Rapports', path: '/admin/reports', icon: 'fas fa-chart-bar' },
  { name: 'Paramètres', path: '/admin/settings', icon: 'fas fa-cog' }
];

const stats = [
  {
    label: 'Rendez-vous Aujourd\'hui',
    value: '12',
    icon: 'fas fa-calendar-day',
    color: 'bg-blue-500',
    trend: '+2 vs hier',
    trendIcon: 'fa-arrow-up',
    trendColor: 'text-green-600'
  },
  {
    label: 'Revenu Mensuel',
    value: '45,800 DH',
    icon: 'fas fa-money-bill-wave',
    color: 'bg-green-500',
    trend: '+12% vs mois dernier',
    trendIcon: 'fa-arrow-up',
    trendColor: 'text-green-600'
  },
  {
    label: 'Produits en Stock',
    value: '156',
    icon: 'fas fa-boxes',
    color: 'bg-orange-500',
    trend: '8 en rupture',
    trendIcon: 'fa-exclamation-triangle',
    trendColor: 'text-red-600'
  },
  {
    label: 'Clients Actifs',
    value: '1,248',
    icon: 'fas fa-users',
    color: 'bg-purple-500',
    trend: '+34 ce mois',
    trendIcon: 'fa-arrow-up',
    trendColor: 'text-green-600'
  }
];

const recentAppointments = [
  {
    client: 'Ahmed B.',
    service: 'Vidange Complète',
    status: 'Confirmé',
    statusColor: 'bg-green-100 text-green-800',
    time: '10:00 AM'
  },
  {
    client: 'Fatima Z.',
    service: 'Changement Pneus',
    status: 'En cours',
    statusColor: 'bg-blue-100 text-blue-800',
    time: '11:30 AM'
  },
  {
    client: 'Karim M.',
    service: 'Diagnostic',
    status: 'En attente',
    statusColor: 'bg-yellow-100 text-yellow-800',
    time: '02:00 PM'
  }
];

const quickActions = [
  {
    name: 'Nouveau RDV',
    path: '/admin/appointments/new',
    icon: 'fas fa-plus',
    color: 'bg-blue-500'
  },
  {
    name: 'Ajouter Produit',
    path: '/admin/inventory/new',
    icon: 'fas fa-box',
    color: 'bg-green-500'
  },
  {
    name: 'Générer Rapport',
    path: '/admin/reports',
    icon: 'fas fa-chart-pie',
    color: 'bg-purple-500'
  },
  {
    name: 'Paramètres',
    path: '/admin/settings',
    icon: 'fas fa-cogs',
    color: 'bg-gray-500'
  }
];

export default AdminDashboard;
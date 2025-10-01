// pages/admin/AdminReports.js
import React, { useState } from 'react';

const AdminReports = () => {
  const [dateRange, setDateRange] = useState('month');
  const [reportType, setReportType] = useState('revenue');

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
              <h1 className="text-2xl font-bold text-gray-800">Rapports & Analytics</h1>
              <p className="text-gray-600">Analysez les performances de votre station</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              <i className="fas fa-download mr-2"></i>
              Exporter PDF
            </button>
          </div>
        </header>

        <div className="p-6">
          {/* Filtres Rapports */}
          <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Période</label>
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="week">Cette semaine</option>
                  <option value="month">Ce mois</option>
                  <option value="quarter">Ce trimestre</option>
                  <option value="year">Cette année</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type de rapport</label>
                <select
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="revenue">Revenus</option>
                  <option value="services">Services</option>
                  <option value="products">Produits</option>
                  <option value="clients">Clients</option>
                  <option value="employees">Employés</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  <i className="fas fa-chart-bar mr-2"></i>
                  Générer Rapport
                </button>
              </div>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpis.map((kpi, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{kpi.label}</p>
                    <p className="text-2xl font-bold text-gray-800">{kpi.value}</p>
                    <p className={`text-sm ${kpi.trendColor}`}>
                      <i className={`fas ${kpi.trendIcon} mr-1`}></i>
                      {kpi.trend}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${kpi.color}`}>
                    <i className={`${kpi.icon} text-white text-xl`}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Graphiques */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Revenus par Service */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4">Revenus par Service</h3>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <i className="fas fa-chart-pie text-4xl mb-2"></i>
                  <p>Graphique camembert</p>
                </div>
              </div>
            </div>

            {/* Évolution Mensuelle */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4">Évolution des Revenus</h3>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <i className="fas fa-chart-line text-4xl mb-2"></i>
                  <p>Graphique linéaire</p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Services & Produits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Services */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4">Services les Plus Populaires</h3>
              <div className="space-y-4">
                {topServices.map((service, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <i className="fas fa-wrench text-blue-600 text-sm"></i>
                      </div>
                      <span className="text-gray-700">{service.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{service.revenue} DH</div>
                      <div className="text-sm text-gray-500">{service.count} interventions</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Produits */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4">Produits les Plus Vendus</h3>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                        <i className="fas fa-box text-green-600 text-sm"></i>
                      </div>
                      <span className="text-gray-700">{product.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{product.sales} ventes</div>
                      <div className="text-sm text-gray-500">{product.revenue} DH</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const kpis = [
  {
    label: 'Revenu Total',
    value: '45,800 DH',
    trend: '+12% vs mois dernier',
    trendIcon: 'fa-arrow-up',
    trendColor: 'text-green-600',
    icon: 'fas fa-money-bill-wave',
    color: 'bg-green-500'
  },
  {
    label: 'RDV Complets',
    value: '156',
    trend: '+8% vs mois dernier',
    trendIcon: 'fa-arrow-up',
    trendColor: 'text-green-600',
    icon: 'fas fa-calendar-check',
    color: 'bg-blue-500'
  },
  {
    label: 'Clients Nouveaux',
    value: '34',
    trend: '+5 vs mois dernier',
    trendIcon: 'fa-arrow-up',
    trendColor: 'text-green-600',
    icon: 'fas fa-user-plus',
    color: 'bg-purple-500'
  },
  {
    label: 'Satisfaction Client',
    value: '4.8/5',
    trend: '+0.2 vs mois dernier',
    trendIcon: 'fa-arrow-up',
    trendColor: 'text-green-600',
    icon: 'fas fa-star',
    color: 'bg-orange-500'
  }
];

const topServices = [
  { name: 'Vidange Complète', revenue: '8,970 DH', count: 30 },
  { name: 'Changement Pneus', revenue: '7,960 DH', count: 40 },
  { name: 'Système Freinage', revenue: '11,980 DH', count: 20 },
  { name: 'Diagnostic', revenue: '4,980 DH', count: 20 }
];

const topProducts = [
  { name: 'Huile Moteur', sales: 45, revenue: '8,505 DH' },
  { name: 'Pneus 205/55', sales: 12, revenue: '9,588 DH' },
  { name: 'Filtres à Huile', sales: 38, revenue: '1,710 DH' },
  { name: 'Batteries', sales: 8, revenue: '5,192 DH' }
];

export default AdminReports;
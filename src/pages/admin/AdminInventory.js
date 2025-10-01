import React, { useState } from 'react';

const AdminInventory = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lowStockOnly, setLowStockOnly] = useState(false);

  const categories = [
    { id: 'all', name: 'Tous les produits' },
    { id: 'oil', name: 'Huiles & Lubrifiants' },
    { id: 'tires', name: 'Pneus' },
    { id: 'battery', name: 'Batteries' },
    { id: 'filters', name: 'Filtres' },
    { id: 'accessories', name: 'Accessoires' }
  ];

  let filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  if (lowStockOnly) {
    filteredProducts = filteredProducts.filter(product => product.stock <= product.minStock);
  }

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
              <h1 className="text-2xl font-bold text-gray-800">Gestion du Stock</h1>
              <p className="text-gray-600">Inventaire et gestion des produits</p>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
              <i className="fas fa-plus mr-2"></i>
              Ajouter Produit
            </button>
          </div>
        </header>

        <div className="p-6">
          {/* Filtres et Statistiques */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Produits Total</p>
                  <p className="text-2xl font-bold text-gray-800">156</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <i className="fas fa-boxes text-blue-600 text-xl"></i>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">En Rupture</p>
                  <p className="text-2xl font-bold text-red-600">8</p>
                </div>
                <div className="bg-red-100 p-3 rounded-lg">
                  <i className="fas fa-exclamation-triangle text-red-600 text-xl"></i>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Stock Faible</p>
                  <p className="text-2xl font-bold text-orange-600">12</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-lg">
                  <i className="fas fa-box text-orange-600 text-xl"></i>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Valeur Stock</p>
                  <p className="text-2xl font-bold text-green-600">85K DH</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <i className="fas fa-money-bill-wave text-green-600 text-xl"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Filtres */}
          <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Catégorie</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={lowStockOnly}
                    onChange={(e) => setLowStockOnly(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Afficher seulement stock faible</span>
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Recherche</label>
                <input
                  type="text"
                  placeholder="Nom du produit..."
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Tableau des Produits */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Produit
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Catégorie
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stock
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prix
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
                  {filteredProducts.map((product, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition duration-300">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-10 w-10 rounded-lg object-cover mr-4"
                          />
                          <div>
                            <div className="font-medium text-gray-900">{product.name}</div>
                            <div className="text-sm text-gray-500">{product.brand}</div>
                            <div className="text-xs text-gray-400">SKU: {product.sku}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                            <div 
                              className={`h-2 rounded-full ${
                                product.stockStatus === 'low' ? 'bg-orange-500' : 
                                product.stockStatus === 'out' ? 'bg-red-500' : 'bg-green-500'
                              }`}
                              style={{ width: `${(product.stock / product.maxStock) * 100}%` }}
                            ></div>
                          </div>
                          <div className="text-sm text-gray-900">
                            {product.stock} / {product.maxStock}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="font-medium">{product.price} DH</div>
                        <div className="text-xs text-gray-500">Coût: {product.cost} DH</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${product.statusColor}`}>
                          {product.statusText}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <i className="fas fa-edit"></i>
                          </button>
                          <button className="text-green-600 hover:text-green-900">
                            <i className="fas fa-plus"></i>
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
        </div>
      </div>
    </div>
  );
};

const products = [
  {
    id: 1,
    name: 'Huile Moteur Synthétique',
    brand: 'Total Quartz',
    category: 'Huiles & Lubrifiants',
    sku: 'HMS-001',
    image: 'https://images.unsplash.com/photo-1603712618944-1a81a5d236c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    stock: 15,
    minStock: 5,
    maxStock: 50,
    price: '189',
    cost: '120',
    stockStatus: 'good',
    statusText: 'En stock',
    statusColor: 'bg-green-100 text-green-800'
  },
  {
    id: 2,
    name: 'Pneu Sport 205/55 R16',
    brand: 'Michelin Pilot',
    category: 'Pneus',
    sku: 'PT-205',
    image: 'https://images.unsplash.com/photo-1550613373-b58e3adc7ce0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    stock: 3,
    minStock: 4,
    maxStock: 20,
    price: '799',
    cost: '550',
    stockStatus: 'low',
    statusText: 'Stock faible',
    statusColor: 'bg-orange-100 text-orange-800'
  },
  {
    id: 3,
    name: 'Batterie 12V 60Ah',
    brand: 'Varta Blue',
    category: 'Batteries',
    sku: 'BAT-60',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    stock: 0,
    minStock: 2,
    maxStock: 15,
    price: '649',
    cost: '480',
    stockStatus: 'out',
    statusText: 'Rupture',
    statusColor: 'bg-red-100 text-red-800'
  },
  {
    id: 4,
    name: 'Filtre à Huile',
    brand: 'MANN Filter',
    category: 'Filtres',
    sku: 'FIL-001',
    image: 'https://images.unsplash.com/photo-1603712618944-1a81a5d236c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    stock: 25,
    minStock: 10,
    maxStock: 100,
    price: '45',
    cost: '25',
    stockStatus: 'good',
    statusText: 'En stock',
    statusColor: 'bg-green-100 text-green-800'
  }
];

export default AdminInventory;
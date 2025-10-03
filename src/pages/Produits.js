import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './context/CartContext';
import { products } from '../Data';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [showFilters, setShowFilters] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(6); // Commence avec 6 produits
  const { cart, addToCart } = useCart();

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'lubrifiants', name: 'Oils & Lubricants' },
    { id: 'pneus', name: 'Tires' },
    { id: 'batteries', name: 'Batteries' },
    { id: 'filtres', name: 'Filters' },
    { id: 'freinage', name: 'Brakes' },
    { id: 'moteur', name: 'Engine' },
    { id: 'entretien', name: 'Maintenance' },
    { id: 'accessoires', name: 'Accessories' },
    { id: 'outillage', name: 'Tools' },
    { id: 'electronique', name: 'Electronics' }
  ];

  const sortOptions = [
    { id: 'default', name: 'Default' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'name', name: 'Name: A to Z' }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const handleLoadMore = () => {
    setVisibleProducts(prev => prev + 6); // Ajoute 6 produits supplémentaires
  };

  // Filtrer les produits par catégorie
  let filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Appliquer le tri
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'name') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  // Produits visibles actuellement
  const productsToShow = filteredProducts.slice(0, visibleProducts);
  const hasMoreProducts = visibleProducts < filteredProducts.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-700 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Online Store</h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Original auto parts and quality accessories
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Mobile Filter Button */}
        <div className="lg:hidden flex justify-between items-center mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border shadow-sm"
          >
            <i className="fas fa-filter text-gray-600"></i>
            <span>Filters</span>
            <i className={`fas fa-chevron-${showFilters ? 'up' : 'down'} text-gray-600`}></i>
          </button>
          
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
            <i className="fas fa-chevron-down absolute right-3 top-3 text-gray-400 pointer-events-none"></i>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className={`
            lg:w-64 flex-shrink-0
            ${showFilters ? 'block' : 'hidden lg:block'}
          `}>
            <div className="bg-white rounded-lg shadow-sm border p-6 space-y-6">
              {/* Categories */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setVisibleProducts(6); // Reset à 6 produits quand on change de catégorie
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg transition duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-green-100 text-green-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">Price Range</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition duration-200">
                    Under 200 DH
                  </button>
                  <button className="w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition duration-200">
                    200 - 500 DH
                  </button>
                  <button className="w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition duration-200">
                    Above 500 DH
                  </button>
                </div>
              </div>

              {/* Availability */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">Availability</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" defaultChecked />
                    <span className="text-gray-600">In Stock</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                    <span className="text-gray-600">Out of Stock</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Desktop Sort and Results */}
            <div className="hidden lg:flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{productsToShow.length}</span> of <span className="font-semibold">{filteredProducts.length}</span> products
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Filters - Horizontal Scroll on Mobile */}
            <div className="mb-6 lg:mb-8">
              <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setVisibleProducts(6); // Reset à 6 produits
                    }}
                    className={`flex-shrink-0 px-4 py-2 rounded-full font-medium transition duration-300 whitespace-nowrap ${
                      selectedCategory === category.id
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border shadow-sm'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            {productsToShow.length === 0 ? (
              <div className="text-center py-12">
                <i className="fas fa-search text-gray-300 text-6xl mb-4"></i>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {productsToShow.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full">
                      <div className="h-40 sm:h-48 bg-gray-50 flex items-center justify-center p-4 relative">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="h-24 sm:h-32 object-contain transition duration-300 hover:scale-105"
                        />
                        {product.isBestSeller && (
                          <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">Best Seller</span>
                        )}
                        {parseFloat(product.oldPrice) > 0 && (
                          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            -{Math.round((1 - parseFloat(product.price) / parseFloat(product.oldPrice)) * 100)}%
                          </span>
                        )}
                      </div>
                      
                      <div className="p-4 flex-1 flex flex-col">
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-800 text-sm sm:text-base line-clamp-2">{product.name}</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 mb-3">{product.brand}</p>
                          
                          <div className="flex items-center mb-3">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <i 
                                  key={i}
                                  className={`fas fa-star ${
                                    i < product.rating 
                                      ? 'text-yellow-400' 
                                      : 'text-gray-300'
                                  } text-xs sm:text-sm`}
                                ></i>
                              ))}
                            </div>
                            <span className="text-xs sm:text-sm text-gray-500 ml-2">({product.reviews})</span>
                          </div>

                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <span className="text-lg sm:text-xl font-bold text-green-600">{product.price} DH</span>
                              {product.oldPrice && (
                                <span className="text-xs sm:text-sm text-gray-500 line-through ml-2">{product.oldPrice} DH</span>
                              )}
                            </div>
                            {product.stock > 0 ? (
                              <span className="text-xs sm:text-sm text-green-600 bg-green-50 px-2 py-1 rounded">In Stock</span>
                            ) : (
                              <span className="text-xs sm:text-sm text-red-600 bg-red-50 px-2 py-1 rounded">Out of Stock</span>
                            )}
                          </div>
                        </div>

                        <button
                          onClick={() => handleAddToCart(product)}
                          disabled={product.stock === 0}
                          className={`w-full py-2 sm:py-3 rounded-lg font-semibold transition duration-300 text-sm sm:text-base ${
                            product.stock > 0
                              ? 'bg-green-600 text-white hover:bg-green-700 transform hover:scale-105'
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          {product.stock > 0 ? (
                            <>
                              <i className="fas fa-shopping-cart mr-2"></i>
                              Add to Cart
                            </>
                          ) : (
                            'Out of Stock'
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Load More Button - Seulement s'il reste des produits à afficher */}
                {hasMoreProducts && (
                  <div className="text-center mt-8">
                    <button 
                      onClick={handleLoadMore}
                      className="bg-white border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition duration-300 font-semibold"
                    >
                      Load More Products ({filteredProducts.length - visibleProducts} remaining)
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
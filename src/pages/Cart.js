import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './context/CartContext';
 import './index.css'

const Cart = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getCartTotal, 
    getCartItemsCount 
  } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
              <i className="fas fa-shopping-cart text-gray-300 text-6xl mb-6"></i>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
              <p className="text-gray-600 mb-8">Add some products to your cart to see them here</p>
              <Link
                to="/products"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold inline-block"
              >
                <i className="fas fa-shopping-bag mr-2"></i>
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center flex-col sm:flex-row gap-4">
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
              <p className="text-gray-600 mt-2">
                {getCartItemsCount()} {getCartItemsCount() === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={clearCart}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 flex items-center"
              >
                <i className="fas fa-trash mr-2"></i>
                Clear Cart
              </button>
              <Link
                to="/products"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center"
              >
                <i className="fas fa-plus mr-2"></i>
                Add More
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {cart.map((item) => (
                <div key={item.id} className="border-b border-gray-200 last:border-b-0">
                  <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-contain"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 text-lg mb-1">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{item.brand}</p>
                      <p className="text-green-600 font-bold text-lg">{item.price} DH</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition duration-200 disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        <i className="fas fa-minus text-gray-600 text-xs"></i>
                      </button>
                      
                      <span className="w-12 text-center font-semibold text-gray-800 text-lg">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition duration-200"
                      >
                        <i className="fas fa-plus text-gray-600 text-xs"></i>
                      </button>
                    </div>

                    {/* Item Total */}
                    <div className="text-right">
                      <p className="font-bold text-gray-800 text-lg">
                        {(parseFloat(item.price) * item.quantity).toFixed(2)} DH
                      </p>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition duration-200 mt-2 flex items-center justify-end w-full"
                      >
                        <i className="fas fa-trash mr-1"></i>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Items ({getCartItemsCount()})</span>
                  <span className="font-semibold">{getCartTotal().toFixed(2)} DH</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">50.00 DH</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (10%)</span>
                  <span className="font-semibold">
                    {(getCartTotal() * 0.1).toFixed(2)} DH
                  </span>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-green-600">
                      {(getCartTotal() + 50 + getCartTotal() * 0.1).toFixed(2)} DH
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 font-semibold flex items-center justify-center">
                  <i className="fas fa-credit-card mr-2"></i>
                  Proceed to Checkout
                </button>
                
                <Link
                  to="/products"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold flex items-center justify-center"
                >
                  <i className="fas fa-shopping-bag mr-2"></i>
                  Continue Shopping
                </Link>
              </div>

              {/* Security Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-center space-x-6 text-gray-400">
                  <i className="fas fa-shield-alt text-xl" title="Secure Payment"></i>
                  <i className="fas fa-truck text-xl" title="Fast Delivery"></i>
                  <i className="fas fa-undo text-xl" title="Easy Returns"></i>
                </div>
                <p className="text-center text-gray-500 text-sm mt-2">
                  Secure and encrypted payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

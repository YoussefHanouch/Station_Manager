import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Cart from './pages/Cart';
// Pages Client
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Produits';
import Appointments from './pages/Rendez-vous';
import Contact from './pages/Contact';

// Pages Administrateur
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminAppointments from './pages/admin/AdminAppointments';
import AdminInventory from './pages/admin/AdminInventory';
import AdminEmployees from './pages/admin/AdminEmployees';
import AdminReports from './pages/admin/AdminReports';
import AdminSettings from './pages/admin/AdminSettings';

// Composants d'Authentification
import Login from './pages/auth/Login';

// Context et Protection de Routes
import { AuthProvider, useAuth } from './pages/context/AuthContext';
import { CartProvider, useCart } from './pages/context/CartContext';

// Hook pour détecter le type d'appareil
const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isMobile;
};

// Composant de Navigation Publique
function PublicNavigation() {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useDeviceType();
  
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50" style={{ fontSize: '16px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl sm:text-2xl font-bold text-blue-600" style={{ fontSize: '1.25rem' }}>
              Infinity Station
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex space-x-8" style={{ fontSize: '16px' }}>
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 text-base">
                Home
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 text-base">
                Services
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 text-base">
                Products
              </Link>
              <Link to="/appointments" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 text-base">
                Appointments
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 text-base">
                Contact
              </Link>
            </div>
          )}

          {/* Right Side Items */}
          <div className="flex items-center space-x-3 sm:space-x-4" style={{ fontSize: '16px' }}>
            {/* Cart Icon */}
            <Link 
              to="/cart" 
              className="relative p-2 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              <i className="fas fa-shopping-cart text-gray-700 text-lg sm:text-xl hover:text-blue-600 transition duration-300"></i>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            {isMobile && (
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition duration-300"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-gray-700 text-lg`}></i>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobile && isMenuOpen && (
          <div className="bg-white border-t border-gray-200 py-4" style={{ fontSize: '16px' }}>
            <div className="flex flex-col space-y-4 px-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/products" 
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/appointments" 
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Appointments
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Layout Principal
function MainLayout({ children }) {
  return (
    <div style={{ fontSize: '16px' }}>
      <PublicNavigation />
      <main style={{ fontSize: '16px' }}>
        {children}
      </main>
    </div>
  );
}

function App() {
  return (
    <div className="App" style={{ fontSize: '16px' }}>
      <AuthProvider>
        <CartProvider>
          <Router>
            <Routes>
              {/* Routes Publiques */}
              <Route path="/" element={<MainLayout><Home /></MainLayout>} />
              <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
              <Route path="/products" element={<MainLayout><Products /></MainLayout>} />
              <Route path="/appointments" element={<MainLayout><Appointments /></MainLayout>} />
              <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />

              {/* Routes Admin */}
              <Route path="/admin/*" element={<AdminLayout />} />

              {/* Redirection par défaut */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

// Layout Admin
function AdminLayout() {
  const { user, loading } = useAuth();
  const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(false);
  const isMobile = useDeviceType();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center" style={{ fontSize: '16px' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-base">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="admin-layout" style={{ fontSize: '16px' }}>
      {/* Navigation Admin */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14 sm:h-16">
            <div className="flex items-center">
              <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Administration</h1>
            </div>

            {/* Desktop Admin Navigation */}
            {!isMobile && (
              <div className="flex items-center space-x-6" style={{ fontSize: '16px' }}>
                <Link to="/admin" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 text-base">
                  Dashboard
                </Link>
                <Link to="/admin/appointments" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 text-base">
                  Appointments
                </Link>
                <Link to="/admin/inventory" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 text-base">
                  Inventory
                </Link>
                <Link to="/admin/employees" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 text-base">
                  Employees
                </Link>
                <Link to="/admin/reports" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 text-base">
                  Reports
                </Link>
                <Link to="/admin/settings" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 text-base">
                  Settings
                </Link>
                <Link 
                  to="/" 
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300 font-medium text-base"
                >
                  Back to Site
                </Link>
              </div>
            )}

            {/* Mobile Admin Menu Button */}
            {isMobile && (
              <button 
                onClick={() => setIsAdminMenuOpen(!isAdminMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition duration-300"
              >
                <i className={`fas ${isAdminMenuOpen ? 'fa-times' : 'fa-bars'} text-gray-700 text-lg`}></i>
              </button>
            )}
          </div>

          {/* Mobile Admin Navigation Menu */}
          {isMobile && isAdminMenuOpen && (
            <div className="bg-white border-t border-gray-200 py-4" style={{ fontSize: '16px' }}>
              <div className="flex flex-col space-y-3">
                <Link 
                  to="/admin" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-2 px-4 text-base"
                  onClick={() => setIsAdminMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/admin/appointments" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-2 px-4 text-base"
                  onClick={() => setIsAdminMenuOpen(false)}
                >
                  Appointments
                </Link>
                <Link 
                  to="/admin/inventory" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-2 px-4 text-base"
                  onClick={() => setIsAdminMenuOpen(false)}
                >
                  Inventory
                </Link>
                <Link 
                  to="/admin/employees" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-2 px-4 text-base"
                  onClick={() => setIsAdminMenuOpen(false)}
                >
                  Employees
                </Link>
                <Link 
                  to="/admin/reports" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-2 px-4 text-base"
                  onClick={() => setIsAdminMenuOpen(false)}
                >
                  Reports
                </Link>
                <Link 
                  to="/admin/settings" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-2 px-4 text-base"
                  onClick={() => setIsAdminMenuOpen(false)}
                >
                  Settings
                </Link>
                <Link 
                  to="/" 
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300 font-medium text-center mt-2 text-base"
                  onClick={() => setIsAdminMenuOpen(false)}
                >
                  Back to Site
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Contenu Admin */}
      <div className="container mx-auto p-4 sm:p-6" style={{ fontSize: '16px' }}>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/appointments" element={<AdminAppointments />} />
          <Route path="/inventory" element={<AdminInventory />} />
          <Route path="/employees" element={<AdminEmployees />} />
          <Route path="/reports" element={<AdminReports />} />
          <Route path="/settings" element={<AdminSettings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
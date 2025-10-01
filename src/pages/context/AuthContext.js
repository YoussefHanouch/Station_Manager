// context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Vérifier l'authentification au chargement
    const savedUser = localStorage.getItem('station_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Simulation de login
    if (email === 'admin@station.ma' && password === 'admin123') {
      const userData = {
        id: 1,
        email: email,
        name: 'Administrateur',
        role: 'admin',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      };
      setUser(userData);
      localStorage.setItem('station_user', JSON.stringify(userData));
      return { success: true };
    }
    return { success: false, error: 'Email ou mot de passe incorrect' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('station_user');
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
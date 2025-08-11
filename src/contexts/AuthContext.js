import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Check if user is already logged in on app load
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Verify token with backend
      verifyToken(token);
    } else {
      setLoading(false);
    }
  }, []);

  const verifyToken = async (token) => {
    try {
      // You can add a verify endpoint to your PHP backend
      // For now, we'll just check if token exists
      if (token) {
        setCurrentUser({ token });
      }
    } catch (error) {
      console.error('Token verification failed:', error);
      localStorage.removeItem('authToken');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setError('');
      setLoading(true);
      
      const response = await axios.post('http://localhost/login-system/login.php', {
        email,
        password
      });

      if (response.data.success) {
        const { token, user } = response.data;
        localStorage.setItem('authToken', token);
        setCurrentUser({ ...user, token });
        return { success: true };
      } else {
        setError(response.data.message || 'Login failed');
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Network error. Please try again.');
      return { success: false, message: 'Network error. Please try again.' };
    } finally {
      setLoading(false);
    }
  };

  const googleSignIn = async (userData) => {
    try {
      setError('');
      setLoading(true);
      
      // Send Google user data to your backend for verification/creation
      const response = await axios.post('http://localhost/login-system/google-login.php', {
        credential: userData.credential,
        email: userData.email,
        name: userData.name,
        picture: userData.picture,
        provider: 'google'
      });

      if (response.data.success) {
        const { token, user } = response.data;
        localStorage.setItem('authToken', token);
        setCurrentUser({ ...user, token });
        return { success: true };
      } else {
        setError(response.data.message || 'Google sign-in failed');
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      console.error('Google sign-in error:', error);
      setError('Google sign-in failed. Please try again.');
      return { success: false, message: 'Google sign-in failed. Please try again.' };
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name, email, password) => {
    try {
      setError('');
      setLoading(true);
      
      const response = await axios.post('http://localhost/login-system/signup.php', {
        name,
        email,
        password
      });

      if (response.data.success) {
        const { token, user } = response.data;
        localStorage.setItem('authToken', token);
        setCurrentUser({ ...user, token });
        return { success: true };
      } else {
        setError(response.data.message || 'Signup failed');
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      console.error('Signup error:', error);
      setError('Network error. Please try again.');
      return { success: false, message: 'Network error. Please try again.' };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setCurrentUser(null);
    setError('');
  };

  const clearError = () => {
    setError('');
  };

  const value = {
    currentUser,
    login,
    signup,
    googleSignIn,
    logout,
    loading,
    error,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 
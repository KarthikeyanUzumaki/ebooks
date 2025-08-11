import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { GOOGLE_CONFIG } from '../config/google';

const GoogleSignIn = ({ onSuccess, onError, disabled = false }) => {
  const googleSignInRef = useRef(null);



  const handleCredentialResponse = useCallback((response) => {
    try {
      // Decode the JWT token to get user information
      const payload = JSON.parse(atob(response.credential.split('.')[1]));
      
      const userData = {
        id: payload.sub,
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
        provider: 'google',
        credential: response.credential
      };

      onSuccess(userData);
    } catch (error) {
      console.error('Error processing Google sign-in:', error);
      onError('Failed to process Google sign-in. Please try again.');
    }
  }, [onSuccess, onError]);

  useEffect(() => {
    // Initialize Google Sign-In when component mounts
    if (window.google && googleSignInRef.current) {
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CONFIG.CLIENT_ID,
        callback: handleCredentialResponse,
        auto_select: false,
        cancel_on_tap_outside: true,
      });

      window.google.accounts.id.renderButton(googleSignInRef.current, GOOGLE_CONFIG.BUTTON_CONFIG);
    }
  }, [handleCredentialResponse]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="w-full"
    >
      <div 
        ref={googleSignInRef}
        className={`w-full ${disabled ? 'opacity-50 pointer-events-none' : ''}`}
      />
    </motion.div>
  );
};

export default GoogleSignIn; 
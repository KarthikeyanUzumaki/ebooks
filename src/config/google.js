// Google Sign-In Configuration
export const GOOGLE_CONFIG = {
  // Replace with your actual Google OAuth 2.0 Client ID
  CLIENT_ID: process.env.REACT_APP_GOOGLE_CLIENT_ID || 'your-google-client-id.apps.googleusercontent.com',
  
  // Google Sign-In button configuration
  BUTTON_CONFIG: {
    theme: 'outline',
    size: 'large',
    type: 'standard',
    text: 'signin_with',
    shape: 'rectangular',
    logo_alignment: 'left',
    width: '100%',
    height: '48px',
  },
  
  // Scopes for Google Sign-In
  SCOPES: [
    'openid',
    'profile',
    'email'
  ].join(' '),
};

// Instructions for setting up Google Sign-In:
// 1. Go to Google Cloud Console (https://console.cloud.google.com/)
// 2. Create a new project or select existing one
// 3. Enable Google+ API and Google Identity Services
// 4. Go to Credentials > Create Credentials > OAuth 2.0 Client IDs
// 5. Set Application Type to "Web application"
// 6. Add authorized JavaScript origins:
//    - http://localhost:3000 (for development)
//    - https://yourdomain.com (for production)
// 7. Copy the Client ID and set it as REACT_APP_GOOGLE_CLIENT_ID in your .env file
// 8. For production, add your domain to authorized origins 
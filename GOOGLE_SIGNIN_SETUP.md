# Google Sign-In Setup Guide

## Prerequisites
- Google Cloud Console account
- React application running on localhost:3000 (for development)

## Step-by-Step Setup

### 1. Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Google+ API
   - Google Identity Services
4. Go to **Credentials** > **Create Credentials** > **OAuth 2.0 Client IDs**
5. Set **Application Type** to "Web application"
6. Add **Authorized JavaScript origins**:
   - `http://localhost:3000` (for development)
   - `https://yourdomain.com` (for production)
7. Click **Create**
8. Copy the **Client ID** (you'll need this for the next step)

### 2. Environment Configuration

Create a `.env` file in your project root with:

```bash
REACT_APP_GOOGLE_CLIENT_ID=your-actual-client-id.apps.googleusercontent.com
```

Replace `your-actual-client-id.apps.googleusercontent.com` with the Client ID from step 1.

### 3. Backend Setup

The Google Sign-In functionality requires a backend endpoint to handle authentication. A sample PHP file is provided at `backend/google-login.php`.

**Important Security Notes:**
- In production, always verify Google ID tokens with Google's servers
- Store user data securely in your database
- Use proper JWT tokens or secure sessions
- Implement proper CORS policies

### 4. Testing

1. Start your React development server: `npm start`
2. Navigate to the login page
3. You should see a Google Sign-In button below the regular login form
4. Click the Google button to test the integration

### 5. Troubleshooting

**Common Issues:**

1. **"Google Sign-In button not appearing"**
   - Check browser console for errors
   - Verify Google Identity Services script is loaded
   - Ensure your Client ID is correct

2. **"Invalid origin" error**
   - Add `http://localhost:3000` to authorized origins in Google Cloud Console
   - For production, add your actual domain

3. **"Google sign-in failed" error**
   - Check your backend endpoint is running
   - Verify the backend URL in `AuthContext.js`
   - Check browser network tab for failed requests

### 6. Production Deployment

When deploying to production:

1. Update authorized origins in Google Cloud Console
2. Set proper environment variables
3. Ensure your backend endpoint is accessible
4. Implement proper security measures
5. Test the complete authentication flow

## Files Modified

- `public/index.html` - Added Google Identity Services script
- `src/components/GoogleSignIn.js` - New Google Sign-In component
- `src/contexts/AuthContext.js` - Added Google Sign-In authentication
- `src/components/Login.js` - Integrated Google Sign-In button
- `src/config/google.js` - Google Sign-In configuration
- `backend/google-login.php` - Sample backend endpoint

## Security Considerations

- Always verify Google ID tokens on the backend
- Implement proper session management
- Use HTTPS in production
- Regularly rotate API keys and tokens
- Monitor authentication logs for suspicious activity 
# eBook Library Website

A professional, responsive eBook library website built with React, featuring Tamil and English content support, smooth animations, and authentication system.

## Features

### 🎨 Design & UX
- **Professional Theme**: Clean, calm color palette with no saturated colors
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Tamil Font Support**: Full support for Tamil language content
- **Premium Feel**: Subtle hover effects and section reveal animations

### 📱 Pages
1. **Home Page**
   - Stunning landing animation with fade-in and slide effects
   - Hero section with site branding
   - Featured categories showcase
   - Statistics section
   - About section with Tamil content

2. **Category Page**
   - Browse all eBook categories
   - Language filtering (Tamil, English, Both)
   - Smooth transitions to PDF listings
   - Search functionality
   - Responsive grid layout

3. **Contact Page**
   - Professional contact form
   - Social media links
   - Office hours and location info
   - Placeholder for map integration

### 🔐 Authentication
- **User Login/Signup**: Email and password authentication
- **Backend Integration**: Ready for PHP backend integration
- **Protected Routes**: PDF access requires authentication
- **Session Management**: Token-based authentication

### 🚀 Functionality
- **Search & Filter**: Find books by title, author, or language
- **Category Management**: Organized content structure
- **PDF Downloads**: Secure access to eBook content
- **Loading States**: Smooth loading animations

## Tech Stack

- **Frontend**: React 18 with Hooks
- **Styling**: TailwindCSS with custom components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **State Management**: React Context API

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ebook-library
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Build for Production

```bash
npm run build
```

The build files will be created in the `build/` directory.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation component
│   ├── Login.js        # Authentication forms
│   ├── LoadingSpinner.js # Loading animation
│   └── ProtectedRoute.js # Route protection
├── contexts/           # React contexts
│   └── AuthContext.js  # Authentication state
├── pages/              # Page components
│   ├── Home.js         # Landing page
│   ├── Category.js     # Categories and PDFs
│   └── Contact.js      # Contact page
├── App.js              # Main app component
├── index.js            # App entry point
└── index.css           # Global styles and Tailwind
```

## Configuration

### Backend Integration

The authentication system is configured to work with your PHP backend:

- **Login Endpoint**: `http://localhost/login-system/login.php`
- **Signup Endpoint**: `http://localhost/login-system/signup.php`

Update these URLs in `src/contexts/AuthContext.js` to match your backend configuration.

### TailwindCSS

Custom colors and animations are defined in `tailwind.config.js`:

- **Primary Colors**: Professional grays and blues
- **Accent Colors**: Subtle blue accents
- **Custom Animations**: Fade, slide, and scale effects
- **Tamil Font**: Noto Sans Tamil integration

## Customization

### Colors
Modify the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom primary colors
  },
  accent: {
    // Your custom accent colors
  }
}
```

### Animations
Add custom animations in `tailwind.config.js`:

```javascript
animation: {
  'custom-animation': 'customKeyframes 1s ease-in-out',
}
```

### Content
Update mock data in the components to match your actual content:

- Categories in `src/pages/Category.js`
- Featured content in `src/pages/Home.js`
- Contact information in `src/pages/Contact.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Code Splitting**: React Router for lazy loading
- **Optimized Images**: Placeholder images for development
- **Efficient Animations**: Framer Motion optimizations
- **Responsive Design**: Mobile-first approach

## Deployment

### Netlify
1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `build`

### Vercel
1. Import your repository
2. Framework preset: Create React App
3. Build command: `npm run build`

### Traditional Hosting
1. Run `npm run build`
2. Upload `build/` folder contents
3. Configure server for SPA routing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions:
- Create an issue in the repository
- Contact: info@ebooklibrary.com

## Roadmap

- [ ] Google Maps integration
- [ ] Advanced search filters
- [ ] User favorites system
- [ ] Reading progress tracking
- [ ] Multi-language support expansion
- [ ] Admin dashboard
- [ ] Analytics integration

---

Built with ❤️ using React and TailwindCSS 
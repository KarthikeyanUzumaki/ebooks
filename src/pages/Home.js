import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Star, Users, FileText } from 'lucide-react';

const Home = () => {
  // Featured categories data
  const featuredCategories = [
    {
      id: 1,
      name: 'Tamil Literature',
      tamilName: 'தமிழ் இலக்கியம்',
      description: 'Classic and contemporary Tamil literary works',
      bookCount: 150,
      color: 'from-orange-400 to-red-500',
      icon: BookOpen
    },
    {
      id: 2,
      name: 'English Classics',
      tamilName: 'ஆங்கில கிளாசிக்ஸ்',
      description: 'Timeless English literature masterpieces',
      bookCount: 200,
      color: 'from-blue-400 to-purple-500',
      icon: Star
    },
    {
      id: 3,
      name: 'Academic Books',
      tamilName: 'கல்வி புத்தகங்கள்',
      description: 'Educational resources for all levels',
      bookCount: 300,
      color: 'from-green-400 to-teal-500',
      icon: FileText
    },
    {
      id: 4,
      name: 'Children\'s Books',
      tamilName: 'குழந்தைகள் புத்தகங்கள்',
      description: 'Engaging stories for young readers',
      bookCount: 100,
      color: 'from-pink-400 to-rose-500',
      icon: Users
    }
  ];

  // Stats data
  const stats = [
    { number: '10,000+', label: 'eBooks Available', tamilLabel: 'புத்தகங்கள்' },
    { number: '50+', label: 'Categories', tamilLabel: 'வகைகள்' },
    { number: '25,000+', label: 'Happy Readers', tamilLabel: 'வாசகர்கள்' },
    { number: '24/7', label: 'Access', tamilLabel: 'அணுகல்' }
  ];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-accent-50 to-primary-100">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container-custom section-padding">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-900 mb-6"
            >
              <span className="text-gradient">eBook</span> Library
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-primary-700 mb-8 leading-relaxed"
            >
              Discover thousands of books in Tamil and English
              <br className="hidden md:block" />
              <span className="tamil-text text-lg md:text-xl">
                தமிழ் மற்றும் ஆங்கிலத்தில் ஆயிரக்கணக்கான புத்தகங்களை கண்டறியுங்கள்
              </span>
            </motion.p>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Link to="/category">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
                >
                  <span>Browse Categories</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-accent-400 opacity-20"
        >
          <BookOpen className="w-16 h-16" />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 right-20 text-primary-400 opacity-20"
        >
          <Star className="w-12 h-12" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-600 font-medium">
                  {stat.label}
                </div>
                <div className="text-primary-500 text-sm tamil-text">
                  {stat.tamilLabel}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Featured Categories
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Explore our diverse collection of eBooks organized into carefully curated categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link to={`/pdfs/${category.id}`}>
                  <div className="card p-6 h-full cursor-pointer">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      {category.name}
                    </h3>
                    
                    <p className="text-primary-600 text-sm mb-3">
                      {category.description}
                    </p>
                    
                    <div className="text-primary-500 text-sm tamil-text mb-4">
                      {category.tamilName}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-accent-600 font-medium">
                        {category.bookCount} books
                      </span>
                      <ArrowRight className="w-5 h-5 text-primary-400 group-hover:text-accent-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Your Gateway to Knowledge
              </h2>
              <p className="text-lg text-primary-600 mb-6 leading-relaxed">
                Our eBook library is designed to provide easy access to a vast collection of literature, 
                academic resources, and educational materials in both Tamil and English languages. 
                Whether you're a student, researcher, or book lover, you'll find something valuable here.
              </p>
              <p className="text-lg text-primary-600 mb-8 leading-relaxed">
                <span className="tamil-text">
                  எங்கள் மின்-புத்தக நூலகம் தமிழ் மற்றும் ஆங்கில மொழிகளில் இலக்கியம், 
                  கல்வி வளங்கள் மற்றும் கல்வி பொருட்களின் பரந்த தொகுப்புக்கு எளிதான அணுகலை வழங்க வடிவமைக்கப்பட்டுள்ளது.
                </span>
              </p>
              
              <Link to="/category">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-8 py-4"
                >
                  Start Exploring
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="w-full h-80 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl shadow-2xl"></div>
                <div className="absolute -bottom-6 -right-6 w-full h-80 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <BookOpen className="w-24 h-24 text-white opacity-90" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Download, ArrowLeft, BookOpen, Filter } from 'lucide-react';


const Category = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  // const { currentUser } = useAuth(); // Unused for now
  const [view, setView] = useState('categories'); // 'categories' or 'pdfs'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLanguage, setFilterLanguage] = useState('all');

  // Mock data - replace with API calls later
  const categories = useMemo(() => [
    {
      id: 1,
      name: 'Tamil Literature',
      tamilName: 'தமிழ் இலக்கியம்',
      description: 'Classic and contemporary Tamil literary works',
      bookCount: 150,
      color: 'from-orange-400 to-red-500',
      language: 'tamil'
    },
    {
      id: 2,
      name: 'English Classics',
      tamilName: 'ஆங்கில கிளாசிக்ஸ்',
      description: 'Timeless English literature masterpieces',
      bookCount: 200,
      color: 'from-blue-400 to-purple-500',
      language: 'english'
    },
    {
      id: 3,
      name: 'Academic Books',
      tamilName: 'கல்வி புத்தகங்கள்',
      description: 'Educational resources for all levels',
      bookCount: 300,
      color: 'from-green-400 to-teal-500',
      language: 'both'
    },
    {
      id: 4,
      name: 'Children\'s Books',
      tamilName: 'குழந்தைகள் புத்தகங்கள்',
      description: 'Engaging stories for young readers',
      bookCount: 100,
      color: 'from-pink-400 to-rose-500',
      language: 'both'
    },
    {
      id: 5,
      name: 'Science & Technology',
      tamilName: 'அறிவியல் & தொழில்நுட்பம்',
      description: 'Latest scientific discoveries and tech innovations',
      bookCount: 250,
      color: 'from-indigo-400 to-blue-500',
      language: 'both'
    },
    {
      id: 6,
      name: 'History & Culture',
      tamilName: 'வரலாறு & கலாச்சாரம்',
      description: 'Rich historical accounts and cultural heritage',
      bookCount: 180,
      color: 'from-amber-400 to-orange-500',
      language: 'both'
    }
  ], []);

  const mockPdfs = useMemo(() => [
    {
      id: 1,
      title: 'தமிழ் இலக்கிய வரலாறு',
      englishTitle: 'History of Tamil Literature',
      author: 'Dr. சுப்பிரமணியன்',
      language: 'tamil',
      thumbnail: 'https://via.placeholder.com/150x200/FF6B6B/FFFFFF?text=தமிழ்',
      downloadUrl: '#',
      category: 'Tamil Literature'
    },
    {
      id: 2,
      title: 'Pride and Prejudice',
      englishTitle: 'Pride and Prejudice',
      author: 'Jane Austen',
      language: 'english',
      thumbnail: 'https://via.placeholder.com/150x200/4ECDC4/FFFFFF?text=English',
      downloadUrl: '#',
      category: 'English Classics'
    },
    {
      id: 3,
      title: 'கணிதவியல் அடிப்படைகள்',
      englishTitle: 'Mathematics Fundamentals',
      author: 'Prof. இராமச்சந்திரன்',
      language: 'tamil',
      thumbnail: 'https://via.placeholder.com/150x200/45B7D1/FFFFFF?text=கணிதம்',
      downloadUrl: '#',
      category: 'Academic Books'
    },
    {
      id: 4,
      title: 'Physics for Beginners',
      englishTitle: 'Physics for Beginners',
      author: 'Dr. Smith',
      language: 'english',
      thumbnail: 'https://via.placeholder.com/150x200/96CEB4/FFFFFF?text=Physics',
      downloadUrl: '#',
      category: 'Academic Books'
    }
  ], []);

  useEffect(() => {
    if (categoryId) {
      const category = categories.find(cat => cat.id === parseInt(categoryId));
      if (category) {
        setSelectedCategory(category);
        setView('pdfs');
      }
    }
  }, [categoryId, categories]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setView('pdfs');
    navigate(`/pdfs/${category.id}`);
  };

  const handleBackToCategories = () => {
    setView('categories');
    setSelectedCategory(null);
    setSearchTerm('');
    setFilterLanguage('all');
    navigate('/category');
  };

  const filteredCategories = categories.filter(category => {
    if (filterLanguage === 'all') return true;
    if (filterLanguage === 'tamil') return category.language === 'tamil';
    if (filterLanguage === 'english') return category.language === 'english';
    return category.language === 'both';
  });

  const filteredPdfs = mockPdfs.filter(pdf => {
    const matchesSearch = pdf.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pdf.englishTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pdf.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterLanguage === 'all') return matchesSearch;
    if (filterLanguage === 'tamil') return pdf.language === 'tamil' && matchesSearch;
    if (filterLanguage === 'english') return pdf.language === 'english' && matchesSearch;
    
    return matchesSearch;
  });

  const renderCategories = () => (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          Browse Categories
        </h1>
        <p className="text-lg text-primary-600 max-w-2xl mx-auto">
          Explore our diverse collection of eBooks organized into carefully curated categories
        </p>
      </motion.div>

      {/* Language Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex justify-center"
      >
        <div className="flex bg-white rounded-lg shadow-md p-1">
          {['all', 'tamil', 'english'].map((lang) => (
            <button
              key={lang}
              onClick={() => setFilterLanguage(lang)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                filterLanguage === lang
                  ? 'bg-accent-600 text-white'
                  : 'text-primary-600 hover:text-accent-600'
              }`}
            >
              {lang === 'all' ? 'All Languages' : lang === 'tamil' ? 'தமிழ்' : 'English'}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group cursor-pointer"
            onClick={() => handleCategoryClick(category)}
          >
            <div className="card p-6 h-full">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <BookOpen className="w-8 h-8 text-white" />
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
                <div className="text-primary-400 group-hover:text-accent-600 transition-colors duration-300">
                  →
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderPdfs = () => (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <div>
          <button
            onClick={handleBackToCategories}
            className="flex items-center space-x-2 text-accent-600 hover:text-accent-700 transition-colors duration-200 mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Categories</span>
          </button>
          <h1 className="text-3xl font-bold text-primary-900">
            {selectedCategory?.name}
          </h1>
          <p className="text-primary-600 tamil-text">
            {selectedCategory?.tamilName}
          </p>
        </div>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400" />
          <input
            type="text"
            placeholder="Search books by title, author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-primary-400" />
          <select
            value={filterLanguage}
            onChange={(e) => setFilterLanguage(e.target.value)}
            className="px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
          >
            <option value="all">All Languages</option>
            <option value="tamil">தமிழ்</option>
            <option value="english">English</option>
          </select>
        </div>
      </motion.div>

      {/* PDFs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPdfs.map((pdf, index) => (
          <motion.div
            key={pdf.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="card p-4"
          >
            <div className="text-center">
              <img
                src={pdf.thumbnail}
                alt={pdf.title}
                className="w-full h-48 object-cover rounded-lg mb-4 mx-auto"
              />
              
              <h3 className="font-semibold text-primary-900 mb-2 text-sm">
                {pdf.language === 'tamil' ? pdf.title : pdf.englishTitle}
              </h3>
              
              {pdf.language === 'both' && (
                <p className="text-primary-600 text-xs mb-2 tamil-text">
                  {pdf.title}
                </p>
              )}
              
              <p className="text-primary-500 text-xs mb-3">
                by {pdf.author}
              </p>
              
              <button
                onClick={() => window.open(pdf.downloadUrl, '_blank')}
                className="w-full btn-primary text-sm py-2 flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredPdfs.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <BookOpen className="w-16 h-16 text-primary-300 mx-auto mb-4" />
          <p className="text-primary-600">No books found matching your search criteria.</p>
        </motion.div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container-custom section-padding">
        <AnimatePresence mode="wait">
          {view === 'categories' ? (
            <motion.div
              key="categories"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {renderCategories()}
            </motion.div>
          ) : (
            <motion.div
              key="pdfs"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderPdfs()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Category; 
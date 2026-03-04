import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Principal\'s Message', href: '/principal-message' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Campus Life', href: '/campus-life' },
    { name: 'Careers', href: '/careers' },
    { name: 'Alumni', href: '/alumni' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || !isHome ? 'glass-nav py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isScrolled || !isHome ? 'bg-navy text-white' : 'bg-white text-navy'} shadow-lg`}>
            <GraduationCap size={28} />
          </div>
          <div>
            <h1 className={`text-xl font-serif font-bold leading-none ${isScrolled || !isHome ? 'text-navy' : 'text-white'}`}>LITTLE ANGELS</h1>
            <p className={`text-[10px] tracking-[0.2em] font-medium ${isScrolled || !isHome ? 'text-gold' : 'text-gold-light'}`}>HIGH SCHOOL</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-xs font-bold uppercase tracking-wider transition-colors hover:text-gold ${isScrolled || !isHome ? 'text-navy' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/admissions" className="bg-gold text-navy px-6 py-2 rounded-full text-xs font-bold hover:bg-gold-light transition-all shadow-md">
            APPLY NOW
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled || !isHome ? 'text-navy' : 'text-white'} />
          ) : (
            <Menu className={isScrolled || !isHome ? 'text-navy' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl lg:hidden border-t border-slate-100"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="text-navy font-semibold text-lg hover:text-gold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/admissions" className="bg-navy text-white px-6 py-3 rounded-xl font-bold mt-4 text-center">
                ADMISSIONS OPEN
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

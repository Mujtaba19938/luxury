import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import ProfileModal from './ProfileModal';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const location = useLocation();
  const { user, isAuthenticated } = useAuth();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled past threshold
      setIsScrolled(currentScrollY > 50);
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleProfileClick = () => {
    setIsProfileModalOpen(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', newsletterEmail);
    setNewsletterEmail('');
    setIsNewsletterOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] transition-all duration-500 hidden lg:block ${
        isScrolled ? 'scale-95' : 'scale-100'
      } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        {/* Navbar Grid Background */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/85 via-primary-100/85 to-primary-200/85 dark:from-luxury-dark-bg/85 dark:via-luxury-dark-surface/85 dark:to-luxury-dark-surface/85"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20 animate-grid-pulse">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(201, 173, 167, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(201, 173, 167, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          
          {/* Animated Grid Dots */}
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 10px 10px, rgba(201, 173, 167, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
              animation: 'pulse 4s ease-in-out infinite'
            }}></div>
          </div>
          
          {/* Secondary Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(154, 140, 152, 0.12) 1px, transparent 1px),
                linear-gradient(90deg, rgba(154, 140, 152, 0.12) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>
        
        <div className="relative bg-white/30 backdrop-blur-md rounded-full px-8 py-2 shadow-lg border border-white/20 dark:bg-luxury-dark-surface/30 dark:border-luxury-dark-border/20 h-12">
          <div className="flex items-center justify-between h-full">
            {/* Left: Navigation Links */}
            <div className="flex items-center space-x-5">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative px-3 py-1 rounded-full transition-all duration-300 hover:bg-white/40 dark:hover:bg-luxury-dark-surfaceHover/40 font-['Inter'] font-medium text-sm ${
                    location.pathname === path 
                      ? 'bg-white/50 text-primary-900 dark:bg-luxury-dark-surfaceHover/50 dark:text-luxury-dark-text' 
                      : 'text-primary-500 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Right: Newsletter, Theme Toggle, Auth Buttons or Profile Icon */}
            <div className="flex items-center gap-4 ml-16 pl-6 border-l border-white/30 dark:border-luxury-dark-border/30">
              {/* Newsletter Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setIsNewsletterOpen(true)}
                  onMouseLeave={() => setIsNewsletterOpen(false)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-white/40 dark:hover:bg-luxury-dark-surfaceHover/40 transition-all duration-300 group"
                >
                  <Mail className="w-4 h-4 text-primary-500 dark:text-luxury-dark-textSecondary" />
                  <span className="font-['Inter'] font-medium text-sm text-primary-500 dark:text-luxury-dark-textSecondary group-hover:text-primary-900 dark:group-hover:text-luxury-dark-text">
                    Newsletter
                  </span>
                </button>
                
                {/* Newsletter Dropdown */}
                {isNewsletterOpen && (
                  <div 
                    className="absolute top-full right-0 mt-2 w-80 bg-white/95 dark:bg-luxury-dark-surface/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/30 dark:border-luxury-dark-border/30 p-4"
                    onMouseEnter={() => setIsNewsletterOpen(true)}
                    onMouseLeave={() => setIsNewsletterOpen(false)}
                  >
                    <div className="text-center mb-3">
                      <h3 className="font-['Playfair_Display'] font-semibold text-primary-900 dark:text-luxury-dark-text text-lg mb-1">
                        Stay Inspired
                      </h3>
                      <p className="text-primary-500 dark:text-luxury-dark-textSecondary text-sm">
                        Get the latest luxury design insights
                      </p>
                    </div>
                    <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                      <input
                        type="email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 bg-white/70 dark:bg-luxury-dark-surfaceHover/70 border border-white/40 dark:border-luxury-dark-border/40 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent text-primary-900 dark:text-luxury-dark-text placeholder-primary-500 dark:placeholder-luxury-dark-textSecondary font-['Inter'] text-sm"
                        required
                      />
                      <button
                        type="submit"
                        className="w-full px-4 py-2 bg-primary-300 dark:bg-luxury-dark-accent text-white rounded-full font-['Inter'] font-medium text-sm hover:bg-primary-400 dark:hover:bg-luxury-dark-accentHover hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Subscribe
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <ThemeToggle size="sm" />
              
              {isAuthenticated ? (
                <button
                  onClick={handleProfileClick}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-white/40 dark:hover:bg-luxury-dark-surfaceHover/40 transition-all duration-300 group"
                >
                  <img
                    src={user?.avatar}
                    alt={`${user?.firstName} ${user?.lastName}`}
                    className="w-8 h-8 rounded-full border-2 border-white/50 dark:border-luxury-dark-border/50"
                  />
                  <span className="font-['Inter'] font-medium text-sm text-primary-500 dark:text-luxury-dark-textSecondary group-hover:text-primary-900 dark:group-hover:text-luxury-dark-text">
                    {user?.firstName}
                  </span>
                </button>
              ) : (
                <>
                  <Link to="/login" className="font-['Inter'] font-medium text-sm text-primary-500 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text transition-all duration-300 px-3 py-1">
                    Login
                  </Link>
                  <Link to="/signup" className="px-4 py-1.5 bg-primary-300 dark:bg-luxury-dark-accent text-white rounded-full font-['Inter'] font-medium text-sm hover:bg-primary-400 dark:hover:bg-luxury-dark-accentHover hover:shadow-md transition-all duration-300 whitespace-nowrap">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className={`fixed top-4 left-4 right-4 z-[100] transition-all duration-500 lg:hidden ${
        isScrolled ? 'scale-95' : 'scale-100'
      } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        {/* Mobile Navbar Grid Background */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/85 via-primary-100/85 to-primary-200/85 dark:from-luxury-dark-bg/85 dark:via-luxury-dark-surface/85 dark:to-luxury-dark-surface/85"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20 animate-grid-pulse">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(201, 173, 167, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(201, 173, 167, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          
          {/* Animated Grid Dots */}
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 10px 10px, rgba(201, 173, 167, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
              animation: 'pulse 4s ease-in-out infinite'
            }}></div>
          </div>
          
          {/* Secondary Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(154, 140, 152, 0.12) 1px, transparent 1px),
                linear-gradient(90deg, rgba(154, 140, 152, 0.12) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>
        
        <div className="relative bg-white/30 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-white/20 dark:bg-luxury-dark-surface/30 dark:border-luxury-dark-border/20 h-12">
          <div className="flex items-center justify-between h-full">
            {/* Logo/Brand */}
            <Link to="/" className="font-['Playfair_Display'] text-base font-semibold text-primary-900 dark:text-luxury-dark-text">
              Luxury
            </Link>

            {/* Theme Toggle, Auth Buttons + Menu Toggle with increased spacing */}
            <div className="flex items-center gap-3">
              {/* Newsletter Button */}
              <button
                onClick={() => setIsNewsletterOpen(!isNewsletterOpen)}
                className="p-1.5 rounded-full hover:bg-white/40 dark:hover:bg-luxury-dark-surfaceHover/40 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-primary-500 dark:text-luxury-dark-textSecondary" />
              </button>

              {/* Theme Toggle */}
              <ThemeToggle size="sm" />
              
              {isAuthenticated ? (
                <button
                  onClick={handleProfileClick}
                  className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-white/40 dark:hover:bg-luxury-dark-surfaceHover/40 transition-all duration-300"
                >
                  <img
                    src={user?.avatar}
                    alt={`${user?.firstName} ${user?.lastName}`}
                    className="w-6 h-6 rounded-full border border-white/50 dark:border-luxury-dark-border/50"
                  />
                  <span className="font-['Inter'] font-medium text-xs text-primary-500 dark:text-luxury-dark-textSecondary">
                    {user?.firstName}
                  </span>
                </button>
              ) : (
                <>
                  <Link to="/login" className="font-['Inter'] font-medium text-xs text-primary-500 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text transition-all duration-300 px-2">
                    Login
                  </Link>
                  <Link to="/signup" className="px-3 py-1 bg-primary-300 dark:bg-luxury-dark-accent text-white rounded-full font-['Inter'] font-medium text-xs hover:bg-primary-400 dark:hover:bg-luxury-dark-accentHover hover:shadow-md transition-all duration-300 whitespace-nowrap">
                    Sign Up
                  </Link>
                </>
              )}
              <div className="w-px h-4 bg-white/30 dark:bg-luxury-dark-border/30 mx-1"></div>
              <button
                onClick={toggleMobileMenu}
                className="p-1.5 rounded-full hover:bg-white/40 dark:hover:bg-luxury-dark-surfaceHover/40 transition-all duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="w-4 h-4 text-primary-900 dark:text-luxury-dark-text" />
                ) : (
                  <Menu className="w-4 h-4 text-primary-900 dark:text-luxury-dark-text" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Newsletter Overlay */}
      {isNewsletterOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsNewsletterOpen(false)}></div>
          <div className="absolute top-20 left-4 right-4 bg-white/95 dark:bg-luxury-dark-surface/95 backdrop-blur-md rounded-3xl shadow-xl border border-white/30 dark:border-luxury-dark-border/30 p-6">
            <div className="text-center mb-4">
              <h3 className="font-['Playfair_Display'] font-semibold text-primary-900 dark:text-luxury-dark-text text-xl mb-2">
                Stay Inspired
              </h3>
              <p className="text-primary-500 dark:text-luxury-dark-textSecondary text-sm">
                Get the latest luxury design insights
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/70 dark:bg-luxury-dark-surfaceHover/70 border border-white/40 dark:border-luxury-dark-border/40 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent text-primary-900 dark:text-luxury-dark-text placeholder-primary-500 dark:placeholder-luxury-dark-textSecondary font-['Inter'] text-sm"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-primary-300 dark:bg-luxury-dark-accent text-white rounded-full font-['Inter'] font-medium text-sm hover:bg-primary-400 dark:hover:bg-luxury-dark-accentHover hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={toggleMobileMenu}></div>
          <div className="absolute top-20 left-4 right-4 bg-white/90 dark:bg-luxury-dark-surface/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/30 dark:border-luxury-dark-border/30 p-6">
            <div className="space-y-4">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={toggleMobileMenu}
                  className={`block px-4 py-3 rounded-2xl transition-all duration-300 font-['Inter'] font-medium ${
                    location.pathname === path 
                      ? 'bg-primary-400/20 dark:bg-luxury-dark-accent/20 text-primary-900 dark:text-luxury-dark-text' 
                      : 'text-primary-500 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text hover:bg-white/60 dark:hover:bg-luxury-dark-surfaceHover/60'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      <ProfileModal 
        isOpen={isProfileModalOpen} 
        onClose={() => setIsProfileModalOpen(false)} 
      />
    </>
  );
}

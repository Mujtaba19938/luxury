import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 hidden lg:block ${
        isScrolled ? 'scale-95' : 'scale-100'
      } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        {/* Navbar Grid Background */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#fefcfb]/80 via-[#f3f0ee]/80 to-[#e8e4e2]/80"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10 animate-grid-pulse">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(201, 173, 167, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(201, 173, 167, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          
          {/* Animated Grid Dots */}
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 15px 15px, rgba(201, 173, 167, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
              animation: 'pulse 4s ease-in-out infinite'
            }}></div>
          </div>
        </div>
        
        <div className="relative bg-white/30 backdrop-blur-md rounded-full px-8 py-2 shadow-lg border border-white/20 h-12">
          <div className="flex items-center justify-between h-full">
            {/* Left: Navigation Links */}
            <div className="flex items-center space-x-5">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative px-3 py-1 rounded-full transition-all duration-300 hover:bg-white/40 font-['Inter'] font-medium text-sm ${
                    location.pathname === path 
                      ? 'bg-white/50 text-[#22223b]' 
                      : 'text-[#9a8c98] hover:text-[#22223b]'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Right: Auth Buttons with proper spacing and visual separator */}
            <div className="flex items-center gap-4 ml-16 pl-6 border-l border-white/30">
              <button className="font-['Inter'] font-medium text-sm text-[#9a8c98] hover:text-[#22223b] transition-all duration-300 px-3 py-1">
                Login
              </button>
              <button className="px-4 py-1.5 bg-[#d8b4a0] text-white rounded-full font-['Inter'] font-medium text-sm hover:bg-[#c9ada7] hover:shadow-md transition-all duration-300 whitespace-nowrap">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 lg:hidden ${
        isScrolled ? 'scale-95' : 'scale-100'
      } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        {/* Mobile Navbar Grid Background */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#fefcfb]/80 via-[#f3f0ee]/80 to-[#e8e4e2]/80"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10 animate-grid-pulse">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(201, 173, 167, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(201, 173, 167, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          
          {/* Animated Grid Dots */}
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 15px 15px, rgba(201, 173, 167, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
              animation: 'pulse 4s ease-in-out infinite'
            }}></div>
          </div>
        </div>
        
        <div className="relative bg-white/30 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-white/20 h-12">
          <div className="flex items-center justify-between h-full">
            {/* Logo/Brand */}
            <Link to="/" className="font-['Playfair_Display'] text-base font-semibold text-[#22223b]">
              Luxury
            </Link>

            {/* Auth Buttons + Menu Toggle with increased spacing */}
            <div className="flex items-center gap-3">
              <button className="font-['Inter'] font-medium text-xs text-[#9a8c98] hover:text-[#22223b] transition-all duration-300 px-2">
                Login
              </button>
              <button className="px-3 py-1 bg-[#d8b4a0] text-white rounded-full font-['Inter'] font-medium text-xs hover:bg-[#c9ada7] hover:shadow-md transition-all duration-300 whitespace-nowrap">
                Sign Up
              </button>
              <div className="w-px h-4 bg-white/30 mx-1"></div>
              <button
                onClick={toggleMobileMenu}
                className="p-1.5 rounded-full hover:bg-white/40 transition-all duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="w-4 h-4 text-[#22223b]" />
                ) : (
                  <Menu className="w-4 h-4 text-[#22223b]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={toggleMobileMenu}></div>
          <div className="absolute top-20 left-4 right-4 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/30 p-6">
            <div className="space-y-4">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={toggleMobileMenu}
                  className={`block px-4 py-3 rounded-2xl transition-all duration-300 font-['Inter'] font-medium ${
                    location.pathname === path 
                      ? 'bg-[#c9ada7]/20 text-[#22223b]' 
                      : 'text-[#9a8c98] hover:text-[#22223b] hover:bg-white/60'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

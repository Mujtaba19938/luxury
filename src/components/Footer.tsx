import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Button from './Button';

export default function Footer() {
  return (
    <footer className="bg-white/60 dark:bg-luxury-dark-surface/60 backdrop-blur-md border-t border-white/30 dark:border-luxury-dark-border/30 mt-20">
      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-primary-50/50 via-primary-100/30 to-primary-200/50 dark:from-luxury-dark-bg/50 dark:via-luxury-dark-surface/30 dark:to-luxury-dark-surface/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text mb-6">
            Stay Inspired
          </h2>
          <p className="text-xl text-primary-500 dark:text-luxury-dark-textSecondary mb-8 font-['Inter'] max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on luxury design trends and exclusive project showcases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 w-full px-6 py-4 bg-white/70 dark:bg-luxury-dark-surfaceHover/70 border border-white/40 dark:border-luxury-dark-border/40 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent text-primary-900 dark:text-luxury-dark-text placeholder-primary-500 dark:placeholder-luxury-dark-textSecondary font-['Inter'] shadow-sm"
            />
            <Button className="group whitespace-nowrap shadow-sm">
              Subscribe
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Main Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Luxury Design Studio */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-['Playfair_Display'] font-semibold text-primary-900 dark:text-luxury-dark-text mb-4">
              Luxury Design Studio
            </h3>
            <p className="text-primary-600 dark:text-luxury-dark-textSecondary mb-6 text-sm leading-relaxed">
              Creating extraordinary experiences for discerning brands and businesses worldwide. Where elegance meets innovation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Mail className="w-4 h-4 text-primary-500 dark:text-luxury-dark-accent" />
                <a href="mailto:hello@luxurydesign.com" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-[#CFA88D] transition-colors text-sm">
                  hello@luxurydesign.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="w-4 h-4 text-primary-500 dark:text-luxury-dark-accent" />
                <a href="tel:+15551234567" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-[#CFA88D] transition-colors text-sm">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin className="w-4 h-4 text-primary-500 dark:text-luxury-dark-accent" />
                <span className="text-primary-600 dark:text-luxury-dark-textSecondary text-sm">
                  New York, London, Tokyo
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-['Inter'] font-semibold text-primary-900 dark:text-luxury-dark-text mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-[#CFA88D] transition-colors text-sm">
                  Brand Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-[#CFA88D] transition-colors text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-[#CFA88D] transition-colors text-sm">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-[#CFA88D] transition-colors text-sm">
                  Digital Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-['Inter'] font-semibold text-primary-900 dark:text-luxury-dark-text mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-[#CFA88D] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-[#CFA88D] transition-colors text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-[#CFA88D] transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-[#CFA88D] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-['Inter'] font-semibold text-primary-900 dark:text-luxury-dark-text mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/portfolio" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-[#CFA88D] transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-[#CFA88D] transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-[#CFA88D] transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-[#CFA88D] transition-colors text-sm">
                  FAQ
                </Link>
                  </li>
              </ul>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/30 dark:border-luxury-dark-border/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            {/* Instagram */}
            <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-luxury-dark-surfaceHover rounded-full flex items-center justify-center text-gray-600 dark:text-luxury-dark-textSecondary hover:bg-[#CFA88D] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out group">
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-luxury-dark-surfaceHover rounded-full flex items-center justify-center text-gray-600 dark:text-luxury-dark-textSecondary hover:bg-[#CFA88D] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out group">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            {/* Twitter */}
            <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-luxury-dark-surfaceHover rounded-full flex items-center justify-center text-gray-600 dark:text-luxury-dark-textSecondary hover:bg-[#CFA88D] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out group">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-luxury-dark-surfaceHover rounded-full flex items-center justify-center text-gray-600 dark:text-luxury-dark-textSecondary hover:bg-[#CFA88D] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out group">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Copyright and Policy Links */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-primary-600 dark:text-luxury-dark-textSecondary text-sm">
              © 2024 Luxury Design Studio. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-[#CFA88D] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-[#CFA88D] transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

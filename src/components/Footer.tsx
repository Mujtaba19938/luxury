import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white/60 dark:bg-luxury-dark-surface/60 backdrop-blur-md border-t border-white/30 dark:border-luxury-dark-border/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-2xl font-['Playfair_Display'] font-semibold text-primary-900 dark:text-luxury-dark-text">
                Luxury
              </h3>
            </Link>
            <p className="text-primary-600 dark:text-luxury-dark-textSecondary mb-6 max-w-md">
              Experience the epitome of luxury and sophistication. We bring you the finest in design, 
              craftsmanship, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-500 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-primary-500 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.098 3.098 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.041v-.08zm4.616 1.33c.702 0 1.27.568 1.27 1.27s-.568 1.27-1.27 1.27-1.27-.568-1.27-1.27.568-1.27 1.27-1.27zm-4.616 1.33c.702 0 1.27.568 1.27 1.27s-.568 1.27-1.27 1.27-1.27-.568-1.27-1.27.568-1.27 1.27-1.27z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-primary-500 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-['Inter'] font-semibold text-primary-900 dark:text-luxury-dark-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-['Inter'] font-semibold text-primary-900 dark:text-luxury-dark-text mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-primary-600 dark:text-luxury-dark-textSecondary">
                123 Luxury Avenue<br />
                New York, NY 10001
              </li>
              <li>
                <a href="tel:+1234567890" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="mailto:info@luxury.com" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text transition-colors">
                  info@luxury.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/30 dark:border-luxury-dark-border/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-600 dark:text-luxury-dark-textSecondary text-sm">
            © 2024 Luxury. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-primary-600 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

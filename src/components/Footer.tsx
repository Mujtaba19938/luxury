import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';
import Button from './Button';

export default function Footer() {
  const footerLinks = {
    Services: ['Brand Design', 'Web Development', 'Mobile Apps', 'Digital Strategy'],
    Company: ['About Us', 'Our Team', 'Careers', 'Contact'],
    Resources: ['Portfolio', 'Case Studies', 'Blog', 'FAQ']
  };

  const socialLinks = [
    { name: 'Instagram', handle: '@luxurydesign', icon: Instagram },
    { name: 'LinkedIn', handle: 'luxury-design-studio', icon: Linkedin },
    { name: 'Twitter', handle: '@luxurydesign', icon: Twitter },
    { name: 'Facebook', handle: 'luxurydesign', icon: Facebook }
  ];

  return (
    <footer className="bg-white/40 backdrop-blur-sm border-t border-white/30 rounded-t-3xl mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Newsletter Section */}
        <div className="text-center mb-12 sm:mb-20 pb-8 sm:pb-16 border-b border-white/20 bg-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-['Playfair_Display'] text-[#22223b] mb-3 sm:mb-4">
            Stay Inspired
          </h3>
          <p className="text-sm sm:text-base text-[#9a8c98] font-['Inter'] mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Subscribe to our newsletter for the latest insights on luxury design trends and exclusive project showcases.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto px-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/50 border border-white/30 rounded-full focus:outline-none focus:ring-2 focus:ring-[#c9ada7] font-['Inter'] text-sm sm:text-base"
            />
            <Button size="sm" className="sm:size-md">
              Subscribe
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-['Playfair_Display'] text-[#22223b] mb-3 sm:mb-4">
              Luxury Design Studio
            </h2>
            <p className="text-sm sm:text-base text-[#9a8c98] font-['Inter'] mb-4 sm:mb-6 max-w-md mx-auto sm:mx-0">
              Creating extraordinary experiences for discerning brands and businesses worldwide. Where elegance meets innovation.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Mail className="w-4 h-4 text-[#c9ada7] flex-shrink-0" />
                <span className="text-sm sm:text-base text-[#9a8c98] font-['Inter']">hello@luxurydesign.com</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Phone className="w-4 h-4 text-[#c9ada7] flex-shrink-0" />
                <span className="text-sm sm:text-base text-[#9a8c98] font-['Inter']">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <MapPin className="w-4 h-4 text-[#c9ada7] flex-shrink-0" />
                <span className="text-sm sm:text-base text-[#9a8c98] font-['Inter']">New York, London, Tokyo</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="text-center sm:text-left">
              <h3 className="font-['Playfair_Display'] text-[#22223b] text-base sm:text-lg mb-3 sm:mb-4">{title}</h3>
              <ul className="space-y-1 sm:space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm sm:text-base text-[#9a8c98] font-['Inter'] hover:text-[#c9ada7] transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-white/20 space-y-4 sm:space-y-0">
          <div className="flex space-x-3 sm:space-x-4 mb-4 sm:mb-0">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#d8b4a0]/20 transition-all duration-300 group hover:scale-110 hover:shadow-lg"
                  title={`${social.name}: ${social.handle}`}
                >
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#9a8c98] group-hover:text-[#d8b4a0] transition-all duration-300" />
                </a>
              );
            })}
          </div>
          <div className="text-center sm:text-right">
            <p className="text-xs sm:text-sm text-[#9a8c98] font-['Inter']">
              © 2024 Luxury Design Studio. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4 mt-2">
              <a href="#" className="text-xs sm:text-sm text-[#9a8c98] font-['Inter'] hover:text-[#c9ada7] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-xs sm:text-sm text-[#9a8c98] font-['Inter'] hover:text-[#c9ada7] transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

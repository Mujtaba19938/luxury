import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'hello@luxurydesign.com',
      link: 'mailto:hello@luxurydesign.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office',
      details: 'New York, London, Tokyo',
      link: '#'
    }
  ];



  return (
    <div className="pt-0">
             {/* Hero Section */}
       <section className="py-20 flex items-center justify-center px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-400/10 dark:bg-luxury-dark-accent/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary-500/10 dark:bg-luxury-dark-primary/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-400/5 dark:bg-luxury-dark-accent/5 rounded-full animate-bounce delay-500"></div>
        </div>
        
                 <div className="text-center max-w-4xl mx-auto relative z-10">
           <div className="mb-4">
             {/* Animated title with gradient and effects */}
             <h1 className="text-6xl md:text-8xl font-['Playfair_Display'] mb-4 relative">
              <span className="inline-block animate-fade-in-up bg-gradient-to-r from-primary-900 dark:from-luxury-dark-text via-primary-400 dark:via-luxury-dark-accent to-primary-500 dark:to-luxury-dark-primary bg-clip-text text-transparent bg-size-200 animate-gradient-x">
                Let's
              </span>
              <br />
              <span className="inline-block animate-fade-in-up delay-300 bg-gradient-to-r from-primary-400 dark:from-luxury-dark-accent via-primary-500 dark:via-luxury-dark-primary to-primary-900 dark:to-luxury-dark-text bg-clip-text text-transparent bg-size-200 animate-gradient-x">
                Talk
              </span>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-400/20 dark:bg-luxury-dark-accent/20 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-500/30 dark:bg-luxury-dark-primary/30 rounded-full animate-pulse delay-700"></div>
            </h1>
            
                         {/* Animated underline */}
             <div className="flex justify-center mb-4">
               <div className="w-0 h-1 bg-gradient-to-r from-primary-400 dark:from-luxury-dark-accent to-primary-500 dark:to-luxury-dark-primary rounded-full animate-expand-width"></div>
             </div>
          </div>
          
          <p className="text-xl md:text-2xl text-primary-500 dark:text-luxury-dark-textSecondary font-['Inter'] max-w-3xl mx-auto animate-fade-in-up delay-600">
            Ready to create something extraordinary? We'd love to hear about your project and explore how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionHeader
                title="Send us a message"
                subtitle="Tell us about your project and we'll get back to you within 24 hours"
              />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-white/40 dark:bg-luxury-dark-surface/40 backdrop-blur-sm rounded-2xl p-8 border border-white/30 dark:border-luxury-dark-border/30">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-primary-900 dark:text-luxury-dark-text font-['Inter'] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 border border-white/30 dark:border-luxury-dark-border/30 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent font-['Inter'] text-primary-900 dark:text-luxury-dark-text placeholder-primary-500 dark:placeholder-luxury-dark-textSecondary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-primary-900 dark:text-luxury-dark-text font-['Inter'] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 border border-white/30 dark:border-luxury-dark-border/30 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent font-['Inter'] text-primary-900 dark:text-luxury-dark-text placeholder-primary-500 dark:placeholder-luxury-dark-textSecondary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="company" className="block text-primary-900 dark:text-luxury-dark-text font-['Inter'] mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 border border-white/30 dark:border-luxury-dark-border/30 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent font-['Inter'] text-primary-900 dark:text-luxury-dark-text placeholder-primary-500 dark:placeholder-luxury-dark-textSecondary"
                      placeholder="Your company"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-primary-900 dark:text-luxury-dark-text font-['Inter'] mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 border border-white/30 dark:border-luxury-dark-border/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent font-['Inter'] resize-none text-primary-900 dark:text-luxury-dark-text placeholder-primary-500 dark:placeholder-luxury-dark-textSecondary"
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div>
                <SectionHeader
                  title="Get in touch"
                  subtitle="Multiple ways to reach us for your convenience"
                />
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center space-x-4 p-4 bg-white/40 dark:bg-luxury-dark-surface/40 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-luxury-dark-border/30 hover:bg-white/60 dark:hover:bg-luxury-dark-surface/60 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-primary-400/20 dark:bg-luxury-dark-accent/20 rounded-full flex items-center justify-center group-hover:bg-primary-400/30 dark:group-hover:bg-luxury-dark-accent/30 transition-colors duration-300">
                        <div className="text-primary-400 dark:text-luxury-dark-accent">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text text-lg">{info.title}</h3>
                        <p className="text-primary-500 dark:text-luxury-dark-textSecondary font-['Inter']">{info.details}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="bg-white/40 dark:bg-luxury-dark-surface/40 backdrop-blur-sm rounded-3xl p-8 border border-white/30 dark:border-luxury-dark-border/30">
                <h3 className="font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text text-xl mb-4">Our Locations</h3>
                <div className="aspect-square bg-gradient-to-br from-primary-400/20 dark:from-luxury-dark-accent/20 to-primary-500/20 dark:to-luxury-dark-primary/20 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-primary-400 dark:text-luxury-dark-accent" />
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="w-16 h-16 bg-primary-400 dark:bg-luxury-dark-accent rounded-full flex items-center justify-center text-white shadow-lg hover:bg-primary-500 dark:hover:bg-luxury-dark-accentHover transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white/30 dark:bg-luxury-dark-surface/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text mb-6">
            Ready to Begin?
          </h2>
          <p className="text-xl text-primary-500 dark:text-luxury-dark-textSecondary mb-8 font-['Inter']">
            Every great project starts with a conversation. Let's make yours extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Schedule a Call
            </Button>
            <Button variant="outline" size="lg">
              View Our Process
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
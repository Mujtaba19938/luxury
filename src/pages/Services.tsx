import React, { useState } from 'react';
import { Palette, Code, Smartphone, Globe, ArrowRight, Plus, Minus } from 'lucide-react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Brand Design',
      description: 'Complete brand identity creation from concept to execution, ensuring your brand stands out in the luxury market.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom websites that combine stunning design with flawless functionality and performance.',
      features: ['Custom Development', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'App Store Optimization']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Digital Strategy',
      description: 'Comprehensive digital strategies that drive growth and engagement for luxury brands.',
      features: ['Market Research', 'User Experience', 'Digital Marketing', 'Analytics & Insights']
    }
  ];

  const whyChooseUs = [
    {
      title: 'Premium Quality',
      description: 'Every project meets the highest standards of excellence and craftsmanship.',
      stat: '100%'
    },
    {
      title: 'Expert Team',
      description: 'Award-winning designers and developers with years of luxury brand experience.',
      stat: '15+'
    },
    {
      title: 'Client Satisfaction',
      description: 'Consistently exceeding expectations with personalized service and attention to detail.',
      stat: '98%'
    }
  ];

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope and complexity. Brand identity projects typically take 4-6 weeks, while custom websites can take 8-12 weeks. We provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes, we work with clients worldwide. Our team is experienced in managing projects across different time zones and cultural contexts, ensuring seamless communication throughout the process.'
    },
    {
      question: 'What is included in your brand design service?',
      answer: 'Our brand design service includes logo design, brand guidelines, color palette, typography selection, business card design, and brand application examples. We also provide source files and usage guidelines.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer various support packages including maintenance, updates, and additional design work. We believe in building long-term relationships with our clients.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 flex items-center justify-center px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c9ada7]/5 via-transparent to-[#9a8c98]/5"></div>
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-['Playfair_Display'] text-[#22223b] mb-4 sm:mb-6">
            Our Services
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-[#9a8c98] font-['Inter'] max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Comprehensive luxury design and development services tailored for discerning brands and businesses.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="What We Do"
            subtitle="Comprehensive services designed to elevate your brand"
            centered
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/30 hover:bg-white/60 transition-all duration-300 h-full">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#c9ada7]/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#c9ada7]/30 transition-colors duration-300">
                    <div className="text-[#c9ada7]">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-['Playfair_Display'] text-[#22223b] mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-sm sm:text-base text-[#9a8c98] font-['Inter'] mb-4 sm:mb-6">{service.description}</p>
                  <ul className="space-y-1 sm:space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm sm:text-base text-[#22223b] font-['Inter']">
                        <div className="w-2 h-2 bg-[#c9ada7] rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Why Choose Us"
            subtitle="What sets us apart in the luxury design industry"
            centered
          />
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/50 rounded-2xl p-8 backdrop-blur-sm border border-white/30 hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-['Playfair_Display'] text-[#c9ada7] mb-4">{item.stat}</div>
                  <h3 className="text-xl font-['Playfair_Display'] text-[#22223b] mb-4">{item.title}</h3>
                  <p className="text-[#9a8c98] font-['Inter']">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about working with us"
            centered
          />
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/40 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/30 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-white/20 transition-colors duration-300"
                >
                  <span className="font-['Playfair_Display'] text-base sm:text-lg text-[#22223b] pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9ada7] flex-shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9ada7] flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                    <p className="text-sm sm:text-base text-[#9a8c98] font-['Inter']">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#c9ada7]/10 to-[#9a8c98]/10 rounded-2xl sm:rounded-full p-8 sm:p-16 backdrop-blur-sm border border-white/30">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-['Playfair_Display'] text-[#22223b] mb-4 sm:mb-6">
              Book a Discovery Call
            </h2>
            <p className="text-base sm:text-xl text-[#9a8c98] mb-6 sm:mb-8 font-['Inter'] px-4">
              Let's discuss your project and explore how we can bring your vision to life.
            </p>
            <Button size="sm" className="sm:size-lg">
              Schedule Consultation
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
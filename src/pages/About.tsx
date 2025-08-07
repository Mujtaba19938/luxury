import React from 'react';
import { Heart, Lightbulb, Target, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';

export default function About() {
  const philosophy = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion',
      description: 'Every project is infused with genuine passion and dedication to excellence.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We push boundaries and explore new possibilities in design and technology.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision',
      description: 'Attention to detail and meticulous craftsmanship in every aspect of our work.'
    }
  ];

  const timeline = [
    { year: '2010', title: 'Foundation', description: 'Started with a vision to redefine luxury design' },
    { year: '2015', title: 'Expansion', description: 'Opened offices in major cities worldwide' },
    { year: '2018', title: 'Recognition', description: 'Received industry awards for innovation' },
    { year: '2023', title: 'Evolution', description: 'Leading the future of luxury experiences' }
  ];

  const team = [
    { name: 'Alexandra Chen', role: 'Creative Director', image: 'AC' },
    { name: 'Marcus Rodriguez', role: 'Lead Designer', image: 'MR' },
    { name: 'Sophie Laurent', role: 'Strategy Director', image: 'SL' },
    { name: 'David Kim', role: 'Technical Lead', image: 'DK' }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c9ada7]/10 to-[#9a8c98]/10 rounded-3xl mx-6"></div>
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <h1 className="text-6xl md:text-8xl font-['Playfair_Display'] text-[#22223b] mb-6">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-[#9a8c98] font-['Inter'] max-w-3xl mx-auto">
            Born from a desire to create extraordinary experiences, we've spent over a decade perfecting the art of luxury design and innovation.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Our Philosophy"
            subtitle="Three core principles guide everything we do"
            centered
          />
          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30 group-hover:bg-[#c9ada7]/20 transition-all duration-300">
                  <div className="text-[#c9ada7] group-hover:text-[#22223b] transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-['Playfair_Display'] text-[#22223b] mb-4">{item.title}</h3>
                <p className="text-[#9a8c98] font-['Inter']">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Our Journey"
            subtitle="Milestones that shaped our story"
            centered
          />
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#c9ada7] to-[#9a8c98] rounded-full"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white/50 rounded-2xl p-6 backdrop-blur-sm border border-white/30">
                      <span className="text-[#c9ada7] font-['Playfair_Display'] text-2xl font-bold">{item.year}</span>
                      <h3 className="text-xl font-['Playfair_Display'] text-[#22223b] mb-2">{item.title}</h3>
                      <p className="text-[#9a8c98] font-['Inter']">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-[#c9ada7] rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Meet Our Team"
            subtitle="The creative minds behind our success"
            centered
          />
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-[#c9ada7] to-[#9a8c98] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-['Playfair_Display'] text-2xl">{member.image}</span>
                </div>
                <h3 className="text-xl font-['Playfair_Display'] text-[#22223b] mb-2">{member.name}</h3>
                <p className="text-[#9a8c98] font-['Inter']">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#c9ada7]/10 to-[#9a8c98]/10 rounded-3xl p-12 backdrop-blur-sm border border-white/30">
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#22223b] mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl text-[#9a8c98] mb-8 font-['Inter']">
              Ready to be part of something extraordinary? Let's create the future together.
            </p>
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Star, Users, Award, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';

// Custom hook for counting animation
function useCountUp(end: number, duration: number = 2000, delay: number = 0) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const startTime = Date.now();
      const startValue = 0;

      const updateCount = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      updateCount();
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, end, duration, delay]);

  return { count, ref };
}

export default function Home() {
  const trustedBrands = [
    'Brand A', 'Brand B', 'Brand C', 'Brand D', 'Brand E', 'Brand F'
  ];

  // Counters for stats
  const projectsCount = useCountUp(500, 2500, 0);
  const satisfactionCount = useCountUp(98, 2000, 500);
  const yearsCount = useCountUp(15, 1500, 1000);

  return (
    <div className="pt-16 relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Hero Grid Background */}
        <div className="absolute inset-0 z-[-1]">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#fefcfb] via-[#f3f0ee] to-[#e8e4e2]"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20 animate-grid-pulse">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(201, 173, 167, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(201, 173, 167, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          
          {/* Animated Grid Dots */}
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 30px 30px, rgba(201, 173, 167, 0.3) 2px, transparent 2px)
              `,
              backgroundSize: '60px 60px',
              animation: 'pulse 4s ease-in-out infinite'
            }}></div>
          </div>
          
          {/* Secondary Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(154, 140, 152, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(154, 140, 152, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: '120px 120px'
            }}></div>
          </div>
          
          {/* Floating Grid Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 border border-[#c9ada7]/20 rounded-lg transform rotate-12 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#9a8c98]/20 rounded-full animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#c9ada7]/15 rounded-lg transform -rotate-12 animate-float delay-500"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-[#9a8c98]/15 rounded-full animate-float delay-1500"></div>
          
          {/* Additional Grid Accents */}
          <div className="absolute top-1/4 right-1/4 w-12 h-12 border border-[#c9ada7]/10 rounded-lg transform rotate-45 animate-float delay-2000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-8 h-8 border border-[#9a8c98]/10 rounded-full animate-float delay-3000"></div>
        </div>

        <div className="text-center max-w-4xl mx-auto relative z-10">
          <h1 className="text-6xl md:text-8xl font-['Playfair_Display'] text-[#22223b] mb-6 leading-tight">
            Luxury
            <span className="block text-[#c9ada7]">Redefined</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#9a8c98] mb-8 font-['Inter'] max-w-2xl mx-auto">
            Where elegance meets innovation. We craft extraordinary experiences for discerning clients who demand nothing but perfection.
          </p>
          <Button size="lg" className="group shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Discover Excellence
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 px-6 overflow-hidden">
        <div className="text-center mb-12">
          <p className="text-[#9a8c98] font-['Inter'] text-lg">Trusted by industry leaders</p>
        </div>
        <div className="relative">
                     {/* First row - moving left */}
           <div className="flex animate-marquee-left space-x-12 mb-8">
             {[...trustedBrands, ...trustedBrands, ...trustedBrands, ...trustedBrands].map((brand, index) => (
               <div key={`left-${index}`} className="flex-shrink-0">
                 <div className="w-24 h-24 bg-white/50 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 hover:scale-110 transition-transform duration-300">
                   <span className="text-[#9a8c98] font-['Inter'] text-sm font-medium">{brand}</span>
                 </div>
               </div>
             ))}
           </div>
           
           {/* Second row - moving right */}
           <div className="flex animate-marquee-right space-x-12">
             {[...trustedBrands, ...trustedBrands, ...trustedBrands, ...trustedBrands].map((brand, index) => (
               <div key={`right-${index}`} className="flex-shrink-0">
                 <div className="w-24 h-24 bg-white/50 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 hover:scale-110 transition-transform duration-300">
                   <span className="text-[#9a8c98] font-['Inter'] text-sm font-medium">{brand}</span>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#c9ada7]/20 to-[#9a8c98]/20 rounded-3xl overflow-hidden">
                <div className="w-full h-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                  <Sparkles className="w-24 h-24 text-[#c9ada7]" />
                </div>
              </div>
            </div>
            <div>
              <SectionHeader
                title="Crafting Excellence"
                subtitle="For over a decade, we've been at the forefront of luxury design and innovation. Our commitment to perfection drives every project we undertake."
              />
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#c9ada7] rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#22223b] font-['Inter']">Award-winning design team</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#c9ada7] rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#22223b] font-['Inter']">500+ satisfied clients worldwide</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#c9ada7] rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#22223b] font-['Inter']">Industry recognition and accolades</span>
                </div>
              </div>
              <Button variant="outline" className="group">
                Discover More
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Projects Completed */}
            <div className="text-center" ref={projectsCount.ref}>
              <div className="w-32 h-32 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30 hover:scale-105 transition-transform duration-300">
                <span className="text-3xl font-['Playfair_Display'] text-[#22223b]">
                  {projectsCount.count}+
                </span>
              </div>
              <p className="text-[#9a8c98] font-['Inter'] text-lg">Projects Completed</p>
            </div>

            {/* Client Satisfaction */}
            <div className="text-center" ref={satisfactionCount.ref}>
              <div className="w-32 h-32 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30 hover:scale-105 transition-transform duration-300">
                <span className="text-3xl font-['Playfair_Display'] text-[#22223b]">
                  {satisfactionCount.count}%
                </span>
              </div>
              <p className="text-[#9a8c98] font-['Inter'] text-lg">Client Satisfaction</p>
            </div>

            {/* Years of Excellence */}
            <div className="text-center" ref={yearsCount.ref}>
              <div className="w-32 h-32 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30 hover:scale-105 transition-transform duration-300">
                <span className="text-3xl font-['Playfair_Display'] text-[#22223b]">
                  {yearsCount.count}+
                </span>
              </div>
              <p className="text-[#9a8c98] font-['Inter'] text-lg">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] text-[#22223b] mb-6">
            Ready to Create Something
            <span className="block text-[#c9ada7]">Extraordinary?</span>
          </h2>
          <p className="text-xl text-[#9a8c98] mb-8 font-['Inter']">
            Let's discuss your vision and bring it to life with our expertise and passion for excellence.
          </p>
          <Button size="lg" className="group">
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
    </div>
  );
}
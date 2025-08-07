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
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        {/* Hero Grid Background - Starts from very top */}
        <div className="absolute inset-0 top-0 left-0 right-0 bottom-0 z-[-1] w-full h-full">
          {/* Gradient overlay */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 dark:from-luxury-dark-bg dark:via-luxury-dark-surface dark:to-luxury-dark-surface"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 w-full h-full opacity-30 animate-grid-pulse">
            <div className="absolute inset-0 w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(201, 173, 167, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(201, 173, 167, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          {/* Animated Grid Dots */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 w-full h-full" style={{
              backgroundImage: `
                radial-gradient(circle at 20px 20px, rgba(201, 173, 167, 0.4) 2px, transparent 2px)
              `,
              backgroundSize: '40px 40px',
              animation: 'pulse 4s ease-in-out infinite'
            }}></div>
          </div>
          
          {/* Secondary Grid Pattern */}
          <div className="absolute inset-0 w-full h-full opacity-15">
            <div className="absolute inset-0 w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(154, 140, 152, 0.12) 1px, transparent 1px),
                linear-gradient(90deg, rgba(154, 140, 152, 0.12) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}></div>
          </div>
          

        </div>

        <div className="text-center max-w-4xl mx-auto relative z-10 pt-20">
          <h1 className="text-6xl md:text-8xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text mb-6 leading-tight">
            Luxury
            <span className="block text-primary-400 dark:text-luxury-dark-accent">Redefined</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-500 dark:text-luxury-dark-textSecondary mb-8 font-['Inter'] max-w-2xl mx-auto">
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
          <p className="text-primary-500 dark:text-luxury-dark-textSecondary font-['Inter'] text-lg">Trusted by industry leaders</p>
        </div>
        <div className="relative">
          {/* Single row - moving left */}
          <div className="flex animate-marquee-left space-x-12">
            {[...trustedBrands, ...trustedBrands, ...trustedBrands, ...trustedBrands].map((brand, index) => (
              <div key={`left-${index}`} className="flex-shrink-0">
                <div className="w-24 h-24 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 dark:border-luxury-dark-border/30 hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-500 dark:text-luxury-dark-textSecondary font-['Inter'] text-sm font-medium">{brand}</span>
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
              <div className="aspect-square bg-gradient-to-br from-primary-400/20 dark:from-luxury-dark-accent/20 to-primary-500/20 dark:to-luxury-dark-primary/20 rounded-3xl overflow-hidden">
                <div className="w-full h-full bg-white/30 dark:bg-luxury-dark-surfaceHover/30 backdrop-blur-sm flex items-center justify-center">
                  <Sparkles className="w-24 h-24 text-primary-400 dark:text-luxury-dark-accent" />
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
                  <div className="w-8 h-8 bg-primary-400 dark:bg-luxury-dark-accent rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-primary-900 dark:text-luxury-dark-text font-['Inter']">Award-winning design team</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary-400 dark:bg-luxury-dark-accent rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-primary-900 dark:text-luxury-dark-text font-['Inter']">500+ satisfied clients worldwide</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary-400 dark:bg-luxury-dark-accent rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-primary-900 dark:text-luxury-dark-text font-['Inter']">Industry recognition and accolades</span>
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
      <section className="py-20 px-6 bg-white/30 dark:bg-luxury-dark-surface/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Projects Completed */}
            <div className="text-center" ref={projectsCount.ref}>
              <div className="w-32 h-32 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30 dark:border-luxury-dark-border/30 hover:scale-105 transition-transform duration-300">
                <span className="text-3xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text">
                  {projectsCount.count}+
                </span>
              </div>
              <p className="text-primary-500 dark:text-luxury-dark-textSecondary font-['Inter'] text-lg">Projects Completed</p>
            </div>

            {/* Client Satisfaction */}
            <div className="text-center" ref={satisfactionCount.ref}>
              <div className="w-32 h-32 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30 dark:border-luxury-dark-border/30 hover:scale-105 transition-transform duration-300">
                <span className="text-3xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text">
                  {satisfactionCount.count}%
                </span>
              </div>
              <p className="text-primary-500 dark:text-luxury-dark-textSecondary font-['Inter'] text-lg">Client Satisfaction</p>
            </div>

            {/* Years of Excellence */}
            <div className="text-center" ref={yearsCount.ref}>
              <div className="w-32 h-32 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30 dark:border-luxury-dark-border/30 hover:scale-105 transition-transform duration-300">
                <span className="text-3xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text">
                  {yearsCount.count}+
                </span>
              </div>
              <p className="text-primary-500 dark:text-luxury-dark-textSecondary font-['Inter'] text-lg">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text mb-6">
            Ready to Create Something
            <span className="block text-primary-400 dark:text-luxury-dark-accent">Extraordinary?</span>
          </h2>
          <p className="text-xl text-primary-500 dark:text-luxury-dark-textSecondary mb-8 font-['Inter']">
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
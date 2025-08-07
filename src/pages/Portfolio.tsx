import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filters = ['All', 'Web', 'Branding', 'UI/UX', 'Mobile'];

  const projects = [
    {
      id: 1,
      title: 'Luxury Resort Branding',
      category: 'Branding',
      image: 'LR',
      description: 'Complete brand identity for a premium resort chain',
      client: 'Azure Resorts',
      year: '2023',
      services: ['Brand Identity', 'Logo Design', 'Brand Guidelines'],
      testimonial: 'Exceptional work that perfectly captured our luxury positioning.'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      category: 'Web',
      image: 'EP',
      description: 'Custom e-commerce solution for high-end fashion',
      client: 'Elegance Fashion',
      year: '2023',
      services: ['Web Development', 'E-commerce', 'UI/UX Design'],
      testimonial: 'The platform exceeded our expectations in both design and functionality.'
    },
    {
      id: 3,
      title: 'Investment App UI',
      category: 'UI/UX',
      image: 'IA',
      description: 'Sophisticated interface for wealth management app',
      client: 'WealthTech Pro',
      year: '2023',
      services: ['UI Design', 'UX Research', 'Prototyping'],
      testimonial: 'Beautiful, intuitive design that our users absolutely love.'
    },
    {
      id: 4,
      title: 'Restaurant Mobile App',
      category: 'Mobile',
      image: 'RM',
      description: 'Premium dining experience mobile application',
      client: 'Michelin Star Restaurant',
      year: '2022',
      services: ['Mobile App', 'iOS', 'Android'],
      testimonial: 'The app perfectly reflects our restaurant\'s premium experience.'
    },
    {
      id: 5,
      title: 'Corporate Website',
      category: 'Web',
      image: 'CW',
      description: 'Modern corporate website for consulting firm',
      client: 'Elite Consulting',
      year: '2022',
      services: ['Web Design', 'Development', 'CMS'],
      testimonial: 'Professional, elegant, and exactly what we envisioned.'
    },
    {
      id: 6,
      title: 'Jewelry Brand Identity',
      category: 'Branding',
      image: 'JB',
      description: 'Luxury jewelry brand complete visual identity',
      client: 'Diamond Elite',
      year: '2022',
      services: ['Brand Strategy', 'Visual Identity', 'Packaging'],
      testimonial: 'Stunning work that elevated our brand to new heights.'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 flex items-center justify-center px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text mb-4 sm:mb-6">
            Our Work
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-primary-500 dark:text-luxury-dark-textSecondary font-['Inter'] max-w-3xl mx-auto px-4">
            A curated collection of our finest projects, showcasing the intersection of luxury design and innovative technology.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-['Inter'] text-sm sm:text-base transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-primary-400 dark:bg-luxury-dark-accent text-white shadow-lg'
                    : 'bg-white/40 dark:bg-luxury-dark-surface/40 text-primary-500 dark:text-luxury-dark-textSecondary hover:bg-white/60 dark:hover:bg-luxury-dark-surface/60 backdrop-blur-sm border border-white/30 dark:border-luxury-dark-border/30'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="bg-white/40 dark:bg-luxury-dark-surface/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-white/30 dark:border-luxury-dark-border/30 hover:bg-white/60 dark:hover:bg-luxury-dark-surface/60 transition-all duration-300 hover:scale-105">
                  <div className="aspect-square bg-gradient-to-br from-primary-400/20 dark:from-luxury-dark-accent/20 to-primary-500/20 dark:to-luxury-dark-primary/20 flex items-center justify-center">
                    <span className="text-2xl sm:text-4xl font-['Playfair_Display'] text-primary-400 dark:text-luxury-dark-accent">{project.image}</span>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-primary-400 dark:text-luxury-dark-accent font-['Inter'] bg-primary-400/10 dark:bg-luxury-dark-accent/10 px-2 sm:px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500 dark:text-luxury-dark-textSecondary group-hover:text-primary-400 dark:group-hover:text-luxury-dark-accent transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text mb-2">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-primary-500 dark:text-luxury-dark-textSecondary font-['Inter']">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="bg-white/90 dark:bg-luxury-dark-surface/90 backdrop-blur-md rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text mb-2">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h2>
                  <p className="text-sm sm:text-base text-primary-500 dark:text-luxury-dark-textSecondary font-['Inter']">
                    {projects.find(p => p.id === selectedProject)?.client} • {projects.find(p => p.id === selectedProject)?.year}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-primary-500 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text transition-colors duration-300 text-lg sm:text-xl"
                >
                  ✕
                </button>
              </div>
              
              <div className="aspect-video bg-gradient-to-br from-primary-400/20 dark:from-luxury-dark-accent/20 to-primary-500/20 dark:to-luxury-dark-primary/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl lg:text-6xl font-['Playfair_Display'] text-primary-400 dark:text-luxury-dark-accent">
                  {projects.find(p => p.id === selectedProject)?.image}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text mb-3 sm:mb-4">Project Details</h3>
                  <p className="text-sm sm:text-base text-primary-500 dark:text-luxury-dark-textSecondary font-['Inter'] mb-4 sm:mb-6">
                    {projects.find(p => p.id === selectedProject)?.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text text-sm sm:text-base">Services Provided:</h4>
                    <ul className="space-y-1">
                      {projects.find(p => p.id === selectedProject)?.services.map((service, index) => (
                        <li key={index} className="flex items-center text-sm sm:text-base text-primary-500 dark:text-luxury-dark-textSecondary font-['Inter']">
                          <div className="w-2 h-2 bg-primary-400 dark:bg-luxury-dark-accent rounded-full mr-3 flex-shrink-0"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text mb-3 sm:mb-4">Client Testimonial</h3>
                  <blockquote className="text-sm sm:text-base text-primary-500 dark:text-luxury-dark-textSecondary font-['Inter'] italic mb-4 sm:mb-6">
                    "{projects.find(p => p.id === selectedProject)?.testimonial}"
                  </blockquote>
                  <Button size="sm" className="sm:size-md">
                    View Live Project
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text mb-4 sm:mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-base sm:text-xl text-primary-500 dark:text-luxury-dark-textSecondary mb-6 sm:mb-8 font-['Inter'] px-4">
            Let's create something extraordinary together. Your vision, our expertise.
          </p>
          <Button size="sm" className="sm:size-lg">
            Discuss Your Project
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

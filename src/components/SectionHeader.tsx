import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, icon, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {icon && (
        <div className={`mb-4 ${centered ? 'flex justify-center' : ''}`}>
          <div className="w-12 h-12 bg-[#c9ada7]/20 rounded-full flex items-center justify-center text-[#c9ada7]">
            {icon}
          </div>
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#22223b] mb-4">
        {title}
      </h2>
      <div className={`w-24 h-1 bg-gradient-to-r from-[#c9ada7] to-[#9a8c98] rounded-full ${centered ? 'mx-auto' : ''} mb-4`}></div>
      {subtitle && (
        <p className="text-lg text-[#9a8c98] max-w-2xl font-['Inter']">
          {subtitle}
        </p>
      )}
    </div>
  );
}

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function ThemeToggle({ className = '', size = 'md' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative ${sizeClasses[size]} rounded-full 
        bg-white/20 backdrop-blur-md border border-white/30
        hover:bg-white/40 hover:border-white/50
        dark:bg-luxury-dark-surface/20 dark:border-luxury-dark-border/30
        dark:hover:bg-luxury-dark-surface/40 dark:hover:border-luxury-dark-border/50
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent
        group
        ${className}
      `}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Sun Icon */}
        <Sun 
          className={`
            absolute transition-all duration-300 ease-in-out
            ${iconSizes[size]} text-yellow-500
            ${theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-75'
            }
            group-hover:animate-pulse
          `}
        />
        
        {/* Moon Icon */}
        <Moon 
          className={`
            absolute transition-all duration-300 ease-in-out
            ${iconSizes[size]} text-blue-400
            ${theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-90 scale-75'
            }
            group-hover:animate-pulse
          `}
        />
      </div>
      
      {/* Glow effect */}
      <div className={`
        absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        ${theme === 'light' 
          ? 'bg-gradient-to-r from-yellow-400/20 to-orange-400/20' 
          : 'bg-gradient-to-r from-blue-400/20 to-purple-400/20'
        }
      `} />
    </button>
  );
}

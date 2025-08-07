/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'Playfair_Display': ['Playfair Display', 'serif'],
        'Inter': ['Inter', 'sans-serif'],
      },
      colors: {
        // Light theme colors
        primary: {
          50: '#fefcfb',
          100: '#f3f0ee',
          200: '#e8e4e2',
          300: '#d8b4a0',
          400: '#c9ada7',
          500: '#9a8c98',
          600: '#8a7c88',
          700: '#7a6c78',
          800: '#6a5c68',
          900: '#5a4c58',
        },
        // Dark theme colors
        dark: {
          50: '#1a1a1a',
          100: '#2a2a2a',
          200: '#3a3a3a',
          300: '#4a4a4a',
          400: '#5a5a5a',
          500: '#6a6a6a',
          600: '#7a7a7a',
          700: '#8a8a8a',
          800: '#9a9a9a',
          900: '#aaaaaa',
        },
        // Luxury dark theme specific colors
        luxury: {
          dark: {
            bg: '#0a0a0a',
            surface: '#1a1a1a',
            surfaceHover: '#2a2a2a',
            border: '#333333',
            text: '#ffffff',
            textSecondary: '#cccccc',
            textMuted: '#999999',
            accent: '#d8b4a0',
            accentHover: '#c9ada7',
            primary: '#9a8c98',
            primaryHover: '#8a7c88',
          }
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'expand-width': 'expandWidth 0.8s ease-out',
        'gradient-x': 'gradientX 3s ease infinite',
        'marquee': 'marquee 20s linear infinite',
        'marquee-left': 'marqueeLeft 25s linear infinite',
        'marquee-right': 'marqueeRight 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'grid-pulse': 'gridPulse 8s ease-in-out infinite',
        'theme-toggle': 'themeToggle 0.3s ease-in-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        expandWidth: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gridPulse: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.4' },
        },
        themeToggle: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}


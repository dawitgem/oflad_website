import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    rotate: {
      'y-180': 'rotateY(180deg)',
    },
    screens: {
      'xs': "310px",
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',

    },
    extend: {
      animation: {
        heartbeat: "heartbeat 2 infinite",
        'infinite-scroll': 'infinite-scroll 30s linear infinite',

      },
      keyframes: {
        heartbeat: {
          "0%,100%": {
            transform: "scale(1)"
          },
          "50%": {
            transform: "scale(1.2)"
          }
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],      // Default sans-serif font
        montserrat: ['Montserrat', 'sans-serif'],     // Additional font option
      },
      colors: {
        // Primary Color (Main brand color)
        primary: {
          DEFAULT: '#fcc414',
          light: '#fde58b',
          dark: '#d1a312',
        },

        secondary: {
          DEFAULT: '#0c646b',
          light: '#4e8c90',
          dark: '#084b52',
        },

        accent: {
          yellow: {
            DEFAULT: '#f4c414',
            light: '#f8da80',
            dark: '#d0a50f',
          },
          green: {
            DEFAULT: '#049840',
            light: '#5cb983',
            dark: '#036f2e',
          },
        },

        mosque: {
          DEFAULT: '#046464',
          light: '#409090',
          dark: '#024848',
        },


      },
    },
  },
};


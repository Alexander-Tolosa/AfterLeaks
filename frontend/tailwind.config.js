/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxury-gold': '#d4a853',
        'luxury-gold-light': '#f0c775',
        'luxury-dark': '#0a0a0f',
        'luxury-charcoal': '#121218',
        'luxury-glass': 'rgba(255, 255, 255, 0.05)',
        'luxury-glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        handwriting: ['Caveat', 'cursive'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glass': '0 20px 45px -15px rgba(0, 0, 0, 0.08)',
        'glass-hover': '0 25px 55px -12px rgba(0, 0, 0, 0.12)',
        'glass-inset': 'inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.9)',
      },
      colors: {
        glass: {
          surface: 'rgba(255, 255, 255, 0.45)',
          border: 'rgba(255, 255, 255, 0.65)',
        }
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2.5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(-1.5deg)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

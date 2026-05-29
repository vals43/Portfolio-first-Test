export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.32, 0.72, 0, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.32, 0.72, 0, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
}
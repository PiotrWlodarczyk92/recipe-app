/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    screens: {
      sm: '500px',
      lg: '1024px',
    },
    colors: {
      'main-color': '#eeeeee',
      'secondary-color': '#222222',
      'font-color': '#444444',
      'accent-color': '#a30e0e',
      'cta_color': '#39990f',
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}


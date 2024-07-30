/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        work: ['"Work Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#001489',
        primaryLight: '#001AAF',
        secondary: '#EAEAEA',
        'base-100': '#323232',
        'base-200': '#666666',
        'base-300': '#7D7D7D',
        accent: '#9B9B9B',
      },
    },
  },
  plugins: [],
};

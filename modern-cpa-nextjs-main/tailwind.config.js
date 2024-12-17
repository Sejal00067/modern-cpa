/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Look for components and pages in the app directory
    './components/**/*.{js,ts,jsx,tsx}', // Look for components in the components directory
  ],
  theme: {
    extend: {
      colors: {
        backgroundImage: {
          'hero-pattern': "url('/app/finance.jpg')", // Replace with your image path
        },
        indigo: {
          600: '#4C51BF',
        },
      },
    },
  },
  plugins: [],
}

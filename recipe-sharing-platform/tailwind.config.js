/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',       // this is your main HTML file
    './public/index.html', // <-- needed for ALX checker
    './src/**/*.{js,jsx,ts,tsx}', // all React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

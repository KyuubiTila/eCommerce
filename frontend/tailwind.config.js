/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      minHeight: {
        5: '12rem', // You can adjust the value (20rem) to your desired height
      },
    },
  },
  plugins: [],
};

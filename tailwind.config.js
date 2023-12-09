/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'newgreen' : '#1FA911',
        'newblue' : '#2F15D0',
        'newblack' : '#000000',
      },
      spacing: {
        '88': '22rem',
      }
    },
  },
  plugins: [],
}
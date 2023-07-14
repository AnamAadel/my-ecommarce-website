/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'popins': ["Poppins","sans-serif"]
      },
      colors: {
        'sweet-yellow': '#FBEBB5',
        'light-pink': '#FAF4F4',
        'black-overlay': " rgba(0,0,0,0.4)"
      }

    },
  },
  plugins: [],
}

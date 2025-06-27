/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
      orbitron: ['Orbitron', 'sans-serif'],
    },
      colors: {
        primary: '#00bfff', // deep sky blue
        grayBg: '#1e1e1e',
      },
      boxShadow: {
        highlight: '0 0 15px #00bfff',
      },
    },
  },
  plugins: [],
}

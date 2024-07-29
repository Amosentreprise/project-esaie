/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary:"#f1ae65",
        secondary:"#f1f5f9",
        accent:"#52525b"
      },
      fontFamily:{
        inter:["Inter", "sans-serif"],
        open:["Open Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}


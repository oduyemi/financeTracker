/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:['ClashDisplayRegular', ...defaultTheme.fontFamily.sans]
      },
      colors:{
        main: "#1E3888",
        whi: "#F4F4F9 ",
        mint: "#00C49A",
        blu: "#5BC0EB"
      }
    },
  },
  plugins: [],
}
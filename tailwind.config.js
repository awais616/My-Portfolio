/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        bodyFont :["Poppins", "Sans-serif"],
        titleFont :["Montserrat", "Sans-Serif"],
      },
      colors :{
        bodyColor : "#212428",
        lightText : "c4cfde",
        boxBg : "linear-gradient(145deg, #1e2024, #23272b)",
        designColor : "#ff014f"
      },
      boxShaddow : {
        shadowOne : "10px 10px 19px #1c1e22 , -10px -10px 19px #262e2e"
      }
    },
  },
  plugins: [],
}
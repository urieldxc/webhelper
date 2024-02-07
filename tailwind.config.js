/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        blackEvil:"#1D1E2C",
        ironBlue: "#047889",
        lightStone: "#F4F5FB",
        darkGray: "#ACACAD",
        someWhite: "#ECFFF8",
        waterBlue: "#258EA6",
        snowWhite: "#ECFFF8",
        lightPurple: "#E3DAFF",
        purple: "#C589E8"
      }
    },
  },
  plugins: [],
}


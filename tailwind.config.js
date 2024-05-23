/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SourceSans: ["Source Sans Pro", "sans-serif"]
      },
      backgroundImage: {
        "parallax": "url('../public/melinderPortfolio.jpg')",
      },
    },
  },
  plugins: [],

}
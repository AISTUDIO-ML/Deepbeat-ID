/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#061C38",
        themeOrange: "#D9222D",
        themeLightBlue: "#3F6B8C",
        lightPink: "#FEF1E0",
        lightBlue: "#E8E7FF",
        // extra colors
        themeBlack: "#01002B",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        beVietnam: ["Be Vietnam Pro", "sans-serif"],
      },
      backgroundImage: {
        banner: "url('/src/assets/images/hero-image-wr.jpg')",
      },
      colors: {
        "darkest-gray": "#111112",
        "dark-gray": "#1B1D1F",
        "medium-gray": "#282B30",
        "light-gray": "#6C727F",
        offwhite: "#D2D5DA",
        "blue-world-rank": "#4E80EE",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      sm: "400px",
      // md: "768px",
      md: "976px",
      xl: "1440px",
      ds: "1920px",
      dm: "2480px",
      dl: "2700px",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      gros: ["Space Grotesk", "sans-serif"],
      mono: ["DM Mono", "sans-serif"]
    },
    extend: {
      colors: {
        exxBlue: "#174AFF",
        exxDark: "#111315",
        exxGrey: "#f5f5f5"
      },
    },
  },
  plugins: [],
};
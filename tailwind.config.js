/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Marcellus: ["Marcellus", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#269BA3", // example (change if needed)
        textcolor: "#696969",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};

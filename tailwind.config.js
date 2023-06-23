/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        grey1: "#666",
        grey2: "#999",
        green: "#9BDD7C",
        violet: "#6972C3",

        white: "#ffffff",
        ash: "#F5F5F5",
        lightgreen: "#DDEFE0",
        lightviolet: "#DEE0EF",
        lightred: "#EFDADA",
        lightorange: "#F4ECDD",
        violet: "#6972C3",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

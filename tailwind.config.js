/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "480px",
        md: "768px",
        lg: "960px",
      },
      colors: {
        transparent: "transparent",
        secondary: "#8FE9D0",
        dark: "#2E2E2E",
        text: "#414141",
        gray: "#777777",
        light: "#FFFFFF",
        c300: "#FFCC21",
        c400: "#FF963C",
        c500: "#EA6C00",
        linear: "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",
      },
    },
  },
  plugins: [],
};

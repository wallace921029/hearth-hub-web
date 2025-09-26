// tailwind.config.js
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: "#2A623D",
            secondary: "#AAAAAA",
          },
        },
        dark: {
          colors: {
            primary: "#2A623D",
            secondary: "#AAAAAA",
          },
        },
      },
    }),
  ],
};

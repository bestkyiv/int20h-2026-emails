/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("tailwindcss-preset-email")],
  content: [
    "./components/**/*.html",
    "./emails/**/*.html",
    "./layouts/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixeloid: ["Pixeloid Sans", "Nunito Sans", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
};

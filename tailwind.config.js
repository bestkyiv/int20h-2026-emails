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
      fontSize: {
        md: "14px",
        lg: "20px",
      },
      dropShadow: {
        soft: "0 4px 40px rgba(239, 239, 239, 0.25)",
        softPink: "0 4px 40px rgba(246, 65, 123, 0.25)",
      },
    },
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          50: "#fff5f1",
          100: "#ffe4d6",
          200: "#ffc6a6",
          300: "#ffa47c",
          400: "#ff8354",
          500: "#ff6330",
          600: "#f7511c",
          700: "#d43b10",
          800: "#a8300e",
          900: "#7d240b",
        },
      },
    },
  },
  plugins: [],
};

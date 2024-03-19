/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#A13838",
      },
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        "luckiest-guy": ["Luckiest Guy", "sans-serif"],
      },
    },
  },
  plugins: [],
};

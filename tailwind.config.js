/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js, ts, vue}", "./src/**/*"],
  theme: {
    extend: {
      colors: {
        primary: "#182857",
        default: '#182857',
        danger: "#FF7F51",
        purple: "#8758FF",
        line: "#F2F2F2",
      },
      fontFamily: {
        'halverica': ['HelveticaNeueCyr', 'sans-serif']
      }
    },
  },
  plugins: [],
};

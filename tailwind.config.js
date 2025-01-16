/** @type {import('tailwindcss').Config} */
//eslint-disable-line
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/container-queries'),],
};

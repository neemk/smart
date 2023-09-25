/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hnt: ["HelveticaNowText", "sans-serif"],
        hntm: ["HelveticaNowTextMedium", "sans-serif"],
        hndm: ["HelveticaNowDisplayMedium", "sans-serif"],
        ntg: ["Nike-TG", "sans-serif"],
      },
    },
  },
  plugins: [],
};

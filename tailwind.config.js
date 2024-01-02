/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: { max: "431px" },
      xss: { max: "376px" },
      xsss: { max: "321px" },
      lg: { min: "1023px", max: "1279px" },
      xl: { min: "1439px" },
      md: { min: "768px", max: "1022px" },
    },
    extend: {},
  },
  plugins: [],
};

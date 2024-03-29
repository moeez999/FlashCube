/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: { max: "431px" },
      xss: { max: "376px" },
      xsss: { max: "321px" },
      lg: { min: "1023px", max: "1279px" },
      lgg: { min: "1280px", max: "1438px" },
      xl: { min: "1439px" },
      md: { min: "768px", max: "1022px" },
      mds: { min: "432px", max: "767px" },
      ms: { width: "1278px" },
    },
    extend: {},
  },
  plugins: [],
};

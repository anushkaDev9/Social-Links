/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': "640px",
      // => @media (min-width: 640px) { ... }
      'md': "768px",
      // => @media (min-width: 768px) { ... }
      'lg': "1024px",
      // => @media (min-width: 1024px) { ... }
      'xl': "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    colors: {
      gray: "hsl(0, 0%, 20%)",
      white: "hsl(0, 0%, 100%)",
      yellowGreen: "hsl(75, 94%, 57%)",
      lightgrey: "rgb(121, 121, 121)",
      greyLight: "hsl(0, 0%, 36%)",
      black: "rgb(10, 10, 10)",
    },
    fontFamily: {
      inter: ["inter", "cursive"],
    },
    extend: {},
  },
  plugins: [],
};


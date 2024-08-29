/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(135deg, hsla(223, 65%, 21%, 1) 0%, hsla(222, 47%, 11%, 1) 25%)",
      },
      fontFamily: {
        specialAlphabe: ["SpecialAlphabet10"],
      },
    },

    colors: {
      ...colors,
      background: "#0F172A",
      headers: "#C9D4ED",
      body: "#94A3B8",
      map: "#33B3AE",
    },
  },
  plugins: [],
};

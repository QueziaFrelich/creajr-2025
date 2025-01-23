/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const { nextui } = require("@nextui-org/react");

module.exports = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "creajovem-gradient": `
          radial-gradient(circle at 100% 0%, rgba(225, 255, 0, 0.38) 30%, rgba(7, 15, 173, 0.2) 100%);
        `,
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      "creajovem-green": {
        500: "#CFE533",
      },
      "creajovem-blue": {
        100: "#E5F2FF",
        400: "#202AE9",
        500: "#070FAD",
        600: "#103357",
        700: "#02076B",
        900: "#001C39",
        1000: "#010326",
      },
    },
  },
  plugins: [require("tailwindcss-animated"), nextui()],
};

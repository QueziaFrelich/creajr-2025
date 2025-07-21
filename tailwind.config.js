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
   safelist: [
    "bg-red-100", "text-red-800",
    "bg-green-100", "text-green-800",
    "bg-blue-100", "text-blue-800",
    "bg-yellow-100", "text-yellow-800",
    "bg-purple-100", "text-purple-800",
    "bg-pink-100", "text-pink-800",
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
      "creajr-blue": {
        100: "#E5F2FF",
        400: "#202AE9",
        500: "#2387D8",
        600: "#103357",
        700: "#02076B",
        900: "#001C39",
        1000: "#010326",
      },
      "creajr-pink": {
        100: "#FF9DAD",
        400: "#F3516C",
        500: "#E32646",
      },
      "tag": {
        100: "#8CF3C2",
        200: "#0D5835",
        300: "#C1EAFB",
        400: "#0D2E58",
        500: "#FFA6AF",
        600: "#A12036",
      },
    },
  },
  plugins: [require("tailwindcss-animated"), nextui()],
};

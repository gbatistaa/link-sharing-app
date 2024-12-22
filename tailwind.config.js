/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#633cff",
        "custom-light-purple": "#beadff",
        "custom-lavender": "#efebff",
        "custom-black": "#333333",
        "custom-gray": "#737373",
        "custom-light-gray": "#d9d9d9",
        "custom-off-white": "#fafafa",
        "custom-white": "#ffffff",
        "custom-red": "#ff3939",
      },
      borderWidth: {
        1.5: "1.5px",
      },
      width: {
        120: "476px",
      },
      height: {
        84: "21rem",
        11.5: "46px",
        phone: "610px",
        ["1/10"]: "10%",
        ["3/20"]: "15%",
      },
      fontFamily: {
        custom: ["instrument", "sans-serif"],
      },
      maxHeight: {
        phone: "610px",
      },
      gap: {
        links: "0.76rem",
      },
    },
  },
  plugins: [],
};

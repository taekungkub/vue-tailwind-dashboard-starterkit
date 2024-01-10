const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#696cff",
        secondary: "#8592a3",
        success: "#71dd37",
        danger: "#ff3e1d",
        warning: "#ffab00",
        info: "#03c3ec",
        light: "#b4bdc6",
        dark: "#233446",
        link: "transparent",
        body: "#f5f5f9",
        gray300: "#697a8d",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

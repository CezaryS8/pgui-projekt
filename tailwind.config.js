// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        c: "#d0d1d2",
        "light-black": "#11263c",
        "light-indigo": "#7459d9",
        d9: "#fbbc05",
        white: "#fff",
        black: "#000",
        "background-light-tertiary": "#f8f9fe",
        mediumslateblue: "rgba(114, 71, 204, 0.16)",
      },
      spacing: {},
      fontFamily: {
        "body-input-14px-r": "Poppins",
        "noto-sans": "'Noto Sans'",
      },
      borderRadius: {
        "11xl": "30px",
        "15xl": "34px",
        "base-9": "16.9px",
        lg: "18px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      "3xl": "22px",
      "11xl": "30px",
      "7xl": "26px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

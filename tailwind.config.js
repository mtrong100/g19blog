/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Roboto",
      secondary: "Inter",
    },
    extend: {
      colors: {
        colorDark: "#15202b",
        colorDarkest: "#242526",
        colorDime: "#1e2732",

        reduxBG: "#1b1b1d",
        colorPrimary: "#ba8fff",
        colorSecondary: "#593d88",
        colorDarkRedux: "#272729",
        colorLightGray: "#dadde1",

        colorSaga: "#86d46b",
        colorDarkSaga: "#2f2f2f",

        colorPurple: "#7856ff",
        colorPink: "#f91880",
        colorBlue: "#1d9bf0",
        colorYellow: "#ffd400",
        colorOrange: "#ff7a00",
        colorGreen: "#00ba7c",
      },
      backgroundImage: {
        /* GRADIENT-COLOR */
        colorGradient: "linear-gradient(to right , #ba8fff, #f91880)",
        colorGradient2: "linear-gradient(to right , #7856ff, #1d9bf0)",
        /* REVERSE GRADIENT-COLOR */
        reverseGradientColor_4:
          "linear-gradient(to left top, #7856ff, #f91880)",
      },
    },
  },
  plugins: [],
};

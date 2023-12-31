/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      "b-yekan": "B-YEKAN",
      "yekan-Bakh": "Y-BAKH",
    },
    screens: {
      xs: "320px",
      sm: "425px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xl2: "1440px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2150F5",
          5: "#D3DCFD",
          10: "#B5C5FC",
          20: "#90A7FA",
          30: "#6B8AF8",
          40: "#466DF7",
          50: "#2150F5",
          60: "#1C43CC",
          70: "#D3DCFD",
          80: "#1635A3",
          90: "#0B1B52",
          100: "#071031",
        },
        secondary: {
          DEFAULT: "#F53A21",
          5: "#FDD8D3",
          10: "#FCBDB5",
          20: "#FA9C90",
          30: "#F87C6B",
          40: "#F75B46",
          50: "#F53A21",
          60: "#CC301C",
          70: "#A32716",
          80: "#7B1D11",
          90: "#52130B",
          100: "#310C07",
        },
        light: {
          DEFAULT: "#E5F5FD",
          5: "#FAFDFF",
          10: "#F6FCFE",
          20: "#F2FAFE",
          30: "#EEF8FE",
          40: "#E9F7FD",
          50: "#E5F5FD",
          60: "#BFCCD3",
          70: "#BFCCD3",
          80: "#BFCCD3",
          90: "#4C5254",
          100: "#2E3133",
        },
        title: "#000517",
        x: "#E5AE1F",
        z: "#18CE2A",
      },
    },
  },
  plugins: [
    function({addVariant}){
      addVariant(`child`,`&>*`);
      addVariant(`child-hover`,`&>*:hover`)
    }
  ],
};

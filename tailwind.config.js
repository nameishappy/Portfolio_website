/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    mode: "jit",
  theme: {
    extend: {backgroundImage: {
      'hero-pattern': "url('C:\Users\hk769\OneDrive\Desktop\Projects\portfolio\my-portfolio\src\assets\myimg.jpg')",
     
    },
      colors: {
      primary: "#2d2e32",
      secondary: "##75bbff",
      dimWhite: "rgba(255, 255, 255, 0.7)",
      dimBlue: "rgba(9, 151, 124, 0.1)",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      mulish: ["Mulish","sans-serif"],
    },},
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}


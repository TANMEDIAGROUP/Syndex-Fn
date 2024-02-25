/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandRed: "#F24137",
        lightGray: "#4D4D4D",
        offWhite:'#F5F7FA'
      },
      fontFamily: {
        logoFont: "Irish Grover",
      },
<<<<<<< HEAD
      screens: {
        'ipad': '820px',
        'asus':{'min': '853px', 'max': '860px'},
        'surface-pro':{'min': '912px', 'max': '950px'},
      },
=======
>>>>>>> 0a1c534 (Ch(V1.0):initial release)
    },
  },
  plugins: [],
};

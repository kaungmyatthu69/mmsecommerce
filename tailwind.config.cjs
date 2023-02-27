/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "popin":"Poppins"
      },
      colors:{
        "primary":"#fffffe",
        "header" : "#094067",
        "secondary" :"#3da9fc",
        "danger":"#ef4565",
        "info" :"#3da9fc",
        "para" :"#5f6c7b"
      }
    },
  },
  plugins: [],
}

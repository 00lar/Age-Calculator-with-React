/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Poppins": ['Poppins',"sans-serif"],
      },
      colors: {
        "white-gray": "#f0f0f0",
        "purple-muppet": "#834df8"
      },
      borderRadius: {
        "sized": "100px",
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'poppins' : 'Poppins',
      },
      backgroundImage: {
        'vector11' : "url('/public/assets/Vector11.png')",
        'blobred' : "url('/public/assets/BlobblobRed.png')",
        'blobyellow' : "url('/public/assets/BlobblobYellow.png')"
      },
      boxShadow: {
        'button': '5px 5px 35px 0 rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

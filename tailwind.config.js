/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        discovery: ["Over the Rainbow", "cursive"],
      },
      backgroundImage: {
        vector11: "url('/public/assets/Vector11.png')",
        vector10: "url('/public/assets/Vector10.png')",
        wavePhone: "url('/public/assets/wavePhone.png')",
        blobred: "url('/public/assets/BlobblobRed.png')",
        blobyellow: "url('/public/assets/BlobblobYellow.png')",
        "radial-card": "radial-gradient(circle at center, #FFFFFF, #FFE99E)",
        waveJudges: "url('/public/assets/waveJudges.png')",
        blob_benefits: "url('/public/assets/images/Blob-blob.png')",
      },
      boxShadow: {
        button: "5px 5px 35px 0 rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        pulse: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        scale: "pulse 2s linear infinite",
      },
    },
  },
  plugins: [],
};

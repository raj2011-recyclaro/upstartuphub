module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F97316",
          orangeDeep: "#C2410C",
          orangeSoft: "#FED7AA",
          cream: "#FFF7ED",
          slate: "#FFFDF8",
          ink: "#1F2937",
          gold: "#FDBA74",
          navy: "#0B1F3A",
          lightGrey: "#F7F9FC",
          accent: "#0284c7",       // Ocean Blue
          accentLight: "#bae6fd"   // Soft Sky Blue
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(194, 65, 12, 0.14)"
      }
    }
  },
  plugins: []
};

module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1E3A8A",
          emerald: "#10B981",
          amber: "#F59E0B",
          slate: "#F9FAFB",
          navy: "#10245C"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 50px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

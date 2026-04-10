module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1A428A",       // Main CTA blue
          blueDeep: "#112C66",   // Hover/Dark states
          cyan: "#0D9488",       // Teal/Cyan accent
          teal: "#14B8A6",       // Lighter accent
          navy: "#0B1F3A",       // Structural darks
          lightGrey: "#F8FAFC",  // Off-white sections
          cream: "#FFFFFF",
          slate: "#F1F5F9"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(26, 66, 138, 0.08)"
      }
    }
  },
  plugins: []
};

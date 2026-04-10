module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "surface-dim": "#d3daef",
        "primary": "#1E3A8A", 
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#ef9900",
        "surface-variant": "#dce2f7",
        "outline": "#757682",
        "on-primary-fixed": "#00164e",
        "surface-container-high": "#e1e8fd",
        "outline-variant": "#c5c5d3",
        "tertiary": "#3e2400",
        "primary-fixed-dim": "#b6c4ff",
        "secondary-container": "#10B981",
        "secondary": "#10B981",
        "inverse-surface": "#293040",
        "primary-container": "#1E3A8A",
        "surface-container-low": "#f8fafc",
        "on-surface": "#141b2b",
        "on-tertiary-fixed": "#2a1700",
        "tertiary-container": "#5c3800",
        "secondary-fixed": "#6ffbbe",
        "surface-bright": "#f9f9ff",
        "on-primary-fixed-variant": "#264191",
        "surface-container": "#e9edff",
        "on-secondary-container": "#ffffff",
        "surface-tint": "#4059aa",
        "on-secondary-fixed": "#002113",
        "primary-fixed": "#dce1ff",
        "on-tertiary-fixed-variant": "#653e00",
        "on-primary-container": "#90a8ff",
        "on-error-container": "#93000a",
        "tertiary-fixed-dim": "#ffb95f",
        "surface-container-lowest": "#ffffff",
        "on-secondary-fixed-variant": "#005236",
        "surface-container-highest": "#dce2f7",
        "tertiary-fixed": "#ffddb8",
        "inverse-primary": "#b6c4ff",
        "error": "#ba1a1a",
        "on-surface-variant": "#444651",
        "inverse-on-surface": "#edf0ff",
        "error-container": "#ffdad6",
        "on-background": "#141b2b",
        "on-secondary": "#ffffff",
        "background": "#f9f9ff",
        "on-primary": "#ffffff",
        "surface": "#ffffff",
        "on-error": "#ffffff",
        "secondary-fixed-dim": "#4edea3",
        brand: {
          blue: "#1E3A8A",
          emerald: "#10B981",
          navy: "#0B1F3A",
          lightGrey: "#F8FAFC",
        }
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      fontFamily: {
        headline: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"]
      },
      animation: {
        "draw-line": "draw 1.5s ease-out forwards",
        "fade-in-node": "fadeIn 0.8s ease-out forwards",
        "pulse-glow": "pulseGlow 3s infinite ease-in-out",
        "flow": "flow 20s linear infinite"
      },
      keyframes: {
        draw: {
          "from": { "stroke-dashoffset": "100" },
          "to": { "stroke-dashoffset": "0" }
        },
        fadeIn: {
          "from": { "opacity": "0", "transform": "scale(0.9)" },
          "to": { "opacity": "1", "transform": "scale(1)" }
        },
        pulseGlow: {
          "0%, 100%": { "box-shadow": "0 0 0px rgba(30, 58, 138, 0)" },
          "50%": { "box-shadow": "0 0 25px rgba(30, 58, 138, 0.4)" }
        },
        flow: {
          "from": { "stroke-dashoffset": "1000" },
          "to": { "stroke-dashoffset": "0" }
        }
      }
    }
  },
  plugins: []
};

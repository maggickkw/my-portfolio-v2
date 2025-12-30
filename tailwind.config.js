/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xm: "420px",
        xs: "520px",
      },
      fontFamily: {
        display: ["Clash Display", "system-ui", "sans-serif"],
        body: ["Satoshi", "system-ui", "sans-serif"],
      },
      colors: {
        // Sophisticated dark palette
        base: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          850: "#1f1f23",
          900: "#18181b",
          950: "#0f0f12",
        },
        // Muted warm accent - soft amber/bronze
        accent: {
          DEFAULT: "#c9a87c",
          light: "#ddc4a0",
          dark: "#a68a5b",
          muted: "#8b7355",
        },
        // Cool secondary - slate blue
        secondary: {
          DEFAULT: "#64748b",
          light: "#94a3b8",
          dark: "#475569",
        },
        // Subtle highlight - soft sage
        highlight: {
          DEFAULT: "#84a98c",
          muted: "#6b8f73",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "subtle-gradient": "linear-gradient(135deg, #0f0f12 0%, #1a1a1f 50%, #0f0f12 100%)",
      },
      animation: {
        "float": "float 8s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "glow": "0 0 40px rgba(201, 168, 124, 0.15)",
        "glow-sm": "0 0 20px rgba(201, 168, 124, 0.1)",
        "soft": "0 4px 30px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

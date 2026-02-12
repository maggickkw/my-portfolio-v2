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
        mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
      },
      colors: {
        base: {
          50: "#f0f6fc",
          100: "#e6edf3",
          200: "#c9d1d9",
          300: "#b1bac4",
          400: "#8b949e",
          500: "#6e7681",
          600: "#484f58",
          700: "#30363d",
          800: "#21262d",
          850: "#161b22",
          900: "#0d1117",
          950: "#010409",
        },
        accent: {
          DEFAULT: "#6b8cc7",
          light: "#8da7d6",
          dark: "#5272a8",
          muted: "#4a6490",
        },
        secondary: {
          DEFAULT: "#64748b",
          light: "#94a3b8",
          dark: "#475569",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(15px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

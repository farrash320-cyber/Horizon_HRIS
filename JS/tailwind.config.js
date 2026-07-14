/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#0F172A",
        background: "#F8FAFC",
        success: "#22C55E",
        danger: "#EF4444",
        warning: "#F59E0B",
        border: "#E2E8F0"
      },

      borderRadius: {
        xl: "16px",
        "2xl": "20px"
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },

      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,.05)"
      }
    }
  },
  plugins: []
};

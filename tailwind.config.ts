import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        better: {
          blue: "#2563eb",
          "blue-light": "#3b82f6", 
          "blue-dark": "#1d4ed8",
          green: "#059669",
          "green-light": "#10b981",
          "green-dark": "#047857",
          orange: "#ea580c",
          "orange-light": "#f97316",
          "orange-dark": "#c2410c",
          purple: "#7c3aed",
          "purple-light": "#8b5cf6",
          "purple-dark": "#6d28d9",
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
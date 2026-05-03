import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#053DCA",
          "blue-2": "#1a50d6",
          "blue-pale": "#f0f4fd",
          "blue-lighter": "#e8effe",
          "blue-ultra": "#f7f9fe",
          gold: "#E88F04",
          "gold-pale": "#fdf4e3",
          "gold-light": "#faecd0",
          dark: "#0d1240",
          gray: "#444343",
          "gray-mid": "#666666",
        },
      },
      fontFamily: {
        serif: ["var(--font-baskerville)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
      animation: {
        ticker: "ticker 35s linear infinite",
        pulse: "pulse 1.5s infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
        countdown: "countdown 1s step-end infinite",
      },
      keyframes: {
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      clipPath: {
        skew: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
        "skew-sm": "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
        "skew-lg": "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

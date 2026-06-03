import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-geist-sans)"] },
      colors: {
        brand: { DEFAULT: "#0f172a", light: "#1e293b", accent: "#6366f1" },
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Primary green
          600: '#16a34a', // Darker green for hover/accents
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
      },
      keyframes: {
        fadeInUp: {
          "from": { opacity: "0", transform: "translateY(20px)" },
          "to": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "from": { opacity: "0", transform: "translateX(-30px)" },
          "to": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "from": { opacity: "0", transform: "translateX(30px)" },
          "to": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        slideInLeft: "slideInLeft 0.8s ease-out forwards 0.2s", // Added slight delay
        slideInUp: "fadeInUp 0.8s ease-out forwards 0.3s", // Re-using fadeInUp for a generic up reveal
        slideInRight: "slideInRight 0.8s ease-out forwards 0.4s", // Added slight delay
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // For prose styling on text-heavy pages
  ],
};
export default config;

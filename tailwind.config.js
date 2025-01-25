/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Enables dark mode with a class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Your existing content paths
    "app/**/*.{ts,tsx}", // Additional paths from the new configuration
    "components/**/*.{ts,tsx}", // Additional paths from the new configuration
  ],
  theme: {
    extend: {
      fontSize: {
        "cursor-lg": "4rem", // Custom size for the cursor
      },
      animation: {
        slideIn: "slideIn 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) both", // Add custom slideIn animation
        fadeIn: "fadeIn 1s ease-out forwards", // Add custom fadeIn animation
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(30%)", opacity: "0" }, // Starts off-screen and transparent
          "60%": { transform: "translateX(-60%)", opacity: "0.6" }, // Mid-point with slight bounce and fade-in
          "100%": { transform: "translateX(0)", opacity: "1" }, // Ends at its normal position
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none" /* For IE and Edge */,
          "scrollbar-width": "none" /* For Firefox */,
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none" /* For Chrome, Safari, and modern Edge */,
        },
      });
    },
    require("tailwindcss-animate"), // Plugin from the new configuration
  ],
};

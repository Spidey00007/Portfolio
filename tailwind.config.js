module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'cursor-lg': '4rem', // Custom size for the cursor
      },
      animation: {
        slideIn: 'slideIn 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) both', // Add custom slideIn animation
        fadeIn: 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(30%)', opacity: '0' }, // Starts off-screen and transparent
          '60%': { transform: 'translateX(-60%)', opacity: '0.6' }, // Mid-point with slight bounce and fade-in
          '100%': { transform: 'translateX(0)', opacity: '1' }, // Ends at its normal position
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', /* For IE and Edge */
          'scrollbar-width': 'none', /* For Firefox */
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none', /* For Chrome, Safari, and modern Edge */
        },
      });
    },
  ],
};
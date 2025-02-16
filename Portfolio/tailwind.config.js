// filepath: /c:/xampp/htdocs/AstroPortfolio/minimal/tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        'from-45%': '#560E89',
        'to-45%': '#372544',
      },
    },
  },
  plugins: [],
};
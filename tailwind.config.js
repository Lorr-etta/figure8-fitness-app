export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandNavy: '#1a365d',
        lilac: '#e9d5ff',
        paleRose: '#fdf2f8',
        brandOrange: '#f97316',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
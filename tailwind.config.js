/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4A3AFF',
      },
      backgroundImage: {
        // Hero: "url('components/assets/Hero.png')",
      },
    },
  },
  plugins: [],
}

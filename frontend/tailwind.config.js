/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F5F1',
        ink: '#111111',
        body: '#222222',
        muted: '#666666',
        accent: '#8B5E3C',
        gold: '#B89F72',
        line: '#E5E5E5',
        leaf: '#2D6A4F',
      },
      fontFamily: {
        head: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

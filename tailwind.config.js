/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        'custom-green': 'rgba(53, 121, 55, 0.16)',
      },
    },
  },
  plugins: [],
}


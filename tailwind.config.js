/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system', 
          'BlinkMacSystemFont', 
          '"SF Pro Display"', 
          '"SF Pro Text"', 
          '"Helvetica Neue"', 
          'Arial', 
          'sans-serif'
        ],
      },
      boxShadow: {
        'liquid-light': '0 8px 32px 0 rgba(31, 38, 135, 0.07), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.05)',
        'liquid-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.4)',
        'glossy-btn': '0 4px 12px 0 rgba(0,0,0,0.05), inset 0 1px 0 0 rgba(255,255,255,0.2)',
      }
    },
  },
  plugins: [],
}

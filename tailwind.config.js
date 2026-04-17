/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        orange: { DEFAULT: '#E8541A', light: '#FFF0EA', dark: '#c94210' },
        navy:   { DEFAULT: '#1A3A6B', light: '#EAF0FB' },
        green:  { DEFAULT: '#2D7A4F' },
        dark:   { DEFAULT: '#0F1C2E' },
        cream:  { DEFAULT: '#F7F4EF' },
        muted:  { DEFAULT: '#6B7A8D' },
        border: { DEFAULT: '#E2DDD6' },
        ink:    { DEFAULT: '#2C3E50' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

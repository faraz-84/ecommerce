/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        textLight: 'var(--color-text-light)',
        textDark: 'var(--color-text-dark)',
        bgLight: 'var(--color-background-light)',
        bgDark: 'var(--color-background-dark)',
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}


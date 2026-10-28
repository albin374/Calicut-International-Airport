/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0062E3',
          darkBlue: '#004ec2',
          navy: '#0B192C',
          dark: '#0f172a',
          terracotta: '#9E5727',
          terracottaLight: '#B86834',
          cream: '#FAF7F2',
          creamBg: '#FDFBF7',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Plus Jakarta Sans', 'serif'],
      }
    },
  },
  plugins: [],
}


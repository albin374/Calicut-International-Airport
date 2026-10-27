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
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Cormorant Garamond', 'serif'],
      }
    },
  },
  plugins: [],
}


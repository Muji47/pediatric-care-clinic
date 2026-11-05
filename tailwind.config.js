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
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        coral: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        warmbg: {
          50: '#fcfbf9',
          100: '#f7f5f0',
          200: '#eeeae2',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e5ebe5',
          200: '#cddacb',
          600: '#4d7c58',
          700: '#3c6245',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 25px -4px rgba(15, 118, 110, 0.08), 0 2px 10px -2px rgba(15, 118, 110, 0.04)',
        'card': '0 10px 30px -5px rgba(14, 94, 111, 0.06), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'pop': '0 20px 40px -10px rgba(15, 118, 110, 0.12)',
      }
    },
  },
  plugins: [],
}

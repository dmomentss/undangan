/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite'

      },
      fontSize: {
        xss: ['8px', '14px'],
      }
    },
    fontFamily: {
      poppins: ['Poppins'],
      'gyahegi': ['gyahegi', 'sans-serif'],
      'classy': ['classy', 'sans-serif'],
      'mileadilan': ['mileadilan', 'sans-serif'],
      'soage': ['soage', 'sans-serif'],
      'charlotte': ['charlotte', 'sans-serif'],
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%'
      },
      borderRadius: {
        '50%': '50%'      
      },
      colors: {
        'gris': '#d9d9d9',
        'turquesa-1': '#cff5e7',
        'turquesa-2': '#a0e4cb',
        'turquesa-3': '#59c1bd',
        'azul': '#0d4c92',
        'verde': '#04c80c',
        'rojo': '#ca5656',
      },
      spacing: {
        'special': 'calc(100% - 95px)',
      },
      maxWidth: {
        '4/5': '80%',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Estética de palco/estúdio escuro e iluminação cênica
        stage: {
          bg: '#0B0C10',       // Preto profundo (coxia/estúdio)
          surface: '#14161F',  // Cartões e superfícies
          border: '#23263A',   // Bordas sutis
        },
        spotlight: {
          purple: '#8B5CF6',   // Luz cênica principal (Violeta)
          amber: '#F59E0B',    // Luz quente de destaque (Âmbar)
          cyan: '#06B6D4',     // Detalhe tech/código
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
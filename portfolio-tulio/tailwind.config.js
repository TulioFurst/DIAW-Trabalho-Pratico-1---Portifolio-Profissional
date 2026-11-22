/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fundo escuro profundo com subtom azulado/esverdeado sutil
        stage: {
          bg: '#070D12',       // Fundo principal (Abismo/Noturno)
          surface: '#0E1720',  // Cartões e superfícies
          border: '#1B2B3A',   // Bordas sutis
        },
        // Paleta inspirada na bandeira gay (Esmeralda -> Turquesa/Menta -> Azul Índigo)
        pride: {
          emerald: '#078D70',  // Verde-esmeralda profundo
          mint: '#26CEAA',     // Verde-menta / Turquesa luminoso (Destaque principal)
          ice: '#98E8C1',      // Menta claro (Brilho suave)
          sky: '#7BADE2',      // Azul celeste
          indigo: '#5049CC',   // Azul índigo vibrante (Destaque secundário)
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores de la Feria con alto contraste para accesibilidad
        feria: {
          blue: '#74ACDF',      // Tu azul celeste
          darkBlue: '#1a3a5c',  // Azul oscuro para textos legibles sobre blanco
          yellow: '#FFD700',    // Amarillo Girasol
          gray: '#4B5563',      // Gris oscuro (text-gray-600) para iconos secundarios
        }
      },
      fontFamily: {
        // System fonts: Carga instantánea (Performance 100%)
        // No necesita descargar archivos de Google Fonts
        sans: [
          'Inter', // Si la tienes instalada, es muy legible
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
      },
    },
  },
  plugins: [],
}

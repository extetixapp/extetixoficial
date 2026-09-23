import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Tu nuevo esquema de colores
        brand: {
          primary: '#A0A0A0', // Color Plata Principal
          secondary: '#D1D1D1', // Gris claro para bordes
          dark: '#4A4A4A',      // Gris oscuro para textos
        },
      },
    },
  },
  plugins: [],
};
export default config;
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        background: {
          light: '#f8fafc', // slate-50
          dark: '#0f172a', // slate-900
        },
        surface: {
          light: '#ffffff',
          dark: '#1e293b', // slate-800
        },
        surfaceHighlight: {
          light: '#f1f5f9', // slate-100
          dark: '#334155', // slate-700
        },
        accent: {
          DEFAULT: '#10b981', // emerald-500
          light: '#34d399', // emerald-400
          dark: '#059669', // emerald-600
        },
        text: {
          light: '#1e293b', // slate-800
          mutedLight: '#64748b', // slate-500
          dark: '#f8fafc', // slate-50
          mutedDark: '#94a3b8', // slate-400
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

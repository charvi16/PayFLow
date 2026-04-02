/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#07111f',
        panel: '#0d1b2d',
        panelSoft: '#10233b',
        accent: '#00a8ff',
        accentDark: '#007ad6',
        success: '#22c55e',
        warning: '#f59e0b',
        danger: '#ef4444',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.04), 0 20px 60px rgba(0, 168, 255, 0.15)',
        soft: '0 10px 40px rgba(0,0,0,0.25)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top right, rgba(0,168,255,0.22), transparent 22%), radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 18%)',
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        ecoprint: {
          red: '#D7263D',
          sky: '#4FD1C5',
          black: '#0B0B0B',
          white: '#FFFFFF'
        },
        // Paleta provista por el usuario
        palette: {
          'blue-1': '#6dd5fa',
          'blue-2': '#2980b9',
          'nav-bg': 'rgba(8, 12, 30, 0.92)',
          'accent': '#00e0ff',
          'gold': '#ffdd59',
          'card-bg': 'rgba(255, 255, 255, 0.96)',
          'muted': '#123'
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}

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
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}

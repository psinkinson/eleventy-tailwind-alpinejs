module.exports = {
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors:{
        primary: {
          light: '#c0d5f6',
          DEFAULT: '#2E73E2',
          dark: '#1d56d6',
        },
        secondary: {
          light: '#b6b6cc',
          DEFAULT: '#0a0a54',
          dark: '#05053a',
        },
        accent: {
          light: '#bff2e7',
          DEFAULT: '#2AD4AE',
          dark: '#19c394',
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
  ],
  purge: [
    './src/**/*.js',
    './src/**/*.njk',
    './src/**/*.svg',
  ],
}

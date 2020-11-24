module.exports = {
  darkMode: 'class',
  purge: ['./dist/**/*.html', './dist/assets/js/*.js'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    maxWidth: {
      md: '768px'
    },
    extend: {
      spacing: {
        full: '100%',
        sm: '640px'
      },
      width: {
        'screen-75': '75vw',
        'screen-50': '50vw',
        'screen-25': '25vw'
      },
      minHeight: {
        96: '24rem'
      }
    }
  },
  variants: {},
  plugins: []
};

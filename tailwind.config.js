module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screen: {
        xxl: '1440px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      textColor: {
        'form-primary': 'var(--form-primary)',
      },
      backgroundColor: {
        'form-primary': 'var(--form-primary)',
      },
      aspectRatio: {
        '17/13': '17 / 13',
      },
      transitionProperty: {
        height: 'height',
      },
      height: {
        54: '216px',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('allChildren', '& *')
    },
  ],
}

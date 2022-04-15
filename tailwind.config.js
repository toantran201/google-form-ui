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
        primary: 'var(--text-primary)',
      },
      backgroundColor: {
        primary: 'var(--background)',
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
  plugins: [],
}

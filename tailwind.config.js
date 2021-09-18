module.exports = {
  mode: 'jit',
  purge: [
    "./index.html",
    "./script.js"
  ]
  ,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/15':'6.666666666%',
        '2/15':'13.333333333%',
        '3/15':'20%',
        '4/15':'26.666666666%',
        '5/15':'33.333333333%',
        '6/15':'40%',
        '7/15':'46.666666666%',
        '8/15':'53.333333333%',
        '9/15':'60%',
        '10/15':'66.666666666%',
        '11/15':'73.333333333%',
        '12/15':'80%',
        '13/15':'86.666666666%',
        '14/15':'93.333333333%',
      },
      colors: {
        'cyan':'hsl(176, 50%, 47%)',
        'cyan-dark': 'hsl(176, 72%, 28%)',
      },
      backgroundImage: {
        'hero-desktop': "linear-gradient(to bottom, black, 25%, transparent),url('./images/image-hero-desktop.jpg')",
        'hero': "linear-gradient(to bottom, black, 25%, transparent),url('./images/image-hero-mobile.jpg')"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

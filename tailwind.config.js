module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "cw-gray-050" : "#E5E5E5",
        "cw-gray-100" : "#D9E2EC",
        "cw-gray-200" : "#4C4C4C",
        "cw-gray-700" : "#334E68",
        "cw-gray-800" : "#243D53",
        "cw-gray-900" : "#102A43",
        "cw-blue-100" : "#343FFF",
        "cw-purple-200" : "#18236F",
        orange: {
          100: '#FEEDD3',
          200: '#FE7865',
          300: '#E6604D',
          400: '#F55C46',
          500: '#FF3434'
        },
        blue:{
          100: '#F5F8FC',
          200: '#EFEDFE',
          300: '#5BD5E6' 
        },
        green:{
          100: '#FFFBF8',
          200: '#E8F8F7',
          300: '#5BE6B0'
        },
      },
      fontFamily: {
        'lato' : ['Lato', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

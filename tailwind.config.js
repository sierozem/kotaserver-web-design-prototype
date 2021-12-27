module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'orange': '#ffa355',
        'light-orange': '#ffa400',
        'deep-orange': '#fd8c29',
        'cream': '#fffbf2',
      },
      fontFamily: {
        'sans': ["'M Plus Rounded 1c'", 'sans-serif'],
      },
      boxShadow: {
        'flat': '0 3px 0 rgba(0, 0, 0, .06)',
      },
      backgroundImage: {
        'wave-top': "url('/wave_top.svg'), url('/wave_top.svg')",
        'wave-bottom': "url('/wave_bottom.svg'), url('/wave_bottom.svg')",
      },
      backgroundPosition: {
        'layerd-top': '0 bottom, 100px bottom',
        'layerd-bottom': '0 top, 100px top',
      },
    },
  },
}

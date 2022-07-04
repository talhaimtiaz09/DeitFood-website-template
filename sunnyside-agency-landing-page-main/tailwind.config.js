/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Barlow: ['Barlow', 'sans-serif'],
        Fraunces: ['Fraunces', 'serif'],

      },
      colors:{

        'Soft-red': 'hsl(7, 99%, 70%)',
        'Yellow': 'hsl(51, 100%, 49%)',
        'graphic-design-text-color': 'hsl(167, 40%, 24%)',
        'photography-text-color': 'hsl(198, 62%, 26%)',
        'footer-color': 'hsl(168, 34%, 41%)',      
        'Very-dark-desaturated blue': 'hsl(212, 27%, 19%)',
        'Very-dark-grayish blue': 'hsl(213, 9%, 39%)',
        'Dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'Grayish-blue': 'hsl(210, 4%, 67%)',
        'White': 'hsl(0, 0%, 100%)',
      },

    },
  },
  plugins: [],
}

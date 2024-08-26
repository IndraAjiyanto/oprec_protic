/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '128': '32rem',
      },
      keyframes: {
        melayang :{
          '0%, 100%' : {transform: 'translateY(-10%)',
                  transition: 'ease 0.5s'},
          '50%' : {transform: 'translateY(10%)',
                   transition: 'ease 0.5s'}
        }
      },

      animation :{
        melayang : 'melayang 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}


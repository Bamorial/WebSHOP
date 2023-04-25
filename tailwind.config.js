/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        grainy: "url('./assets/BG.png')",
        
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      colors:{
        primary: {
          light:'#ffdba5',
          dark:'#ffdba5'
        },
        background:{
          light:'#8c9d5f',
          dark:'#8c9d5f'
        },
        accent:{
          light:'#e9492f',
          dark:'#e9492f'
        },
      },
      fontFamily:{
        blueocean:['OCEAN','o'],
        pixel:['PIXEL','o'],
        poppins:['Poppins','sans']
      },
      
    },
  },
  plugins: [],
}

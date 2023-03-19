/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  
  ],

  daisyui: {

    themes: [{
        
          mytheme: {
              
            "primary": "#1d1a39",
          
            "secondary": "#282343",
          
            "accent": "#ef723f",
          
            "neutral": "#a49cb7",
          
            "base-100": "#080528",
          
            "info": "#821860",
          
            "success": "#c2c2c0",
          
            "warning": "#FBBD23",
          
            "error": "#e93056",

            },

          }],

      },

  plugins: [
    require('daisyui'),
  ],

  safelist: [
    'animate-[fade-in-down_1s_ease-in-out]',

  ],

}

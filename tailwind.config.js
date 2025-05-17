/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
         'blue-light':{
             100: '#CCDBEF',
             200: '#014DAF',
             300: '#f8fbff',
             400: '#F1F7FF',
             500:'#175CD3',
             600:'#B2DDFF'
         },
         'gray-light':{
            100:'#7E8B9C',
            200:'#D0D5DD',
            300:'#DEDEDF',
            500:'#a6a6a6',
            600:'#EFFAF6',
            700:'#EAECF0',
            800:'#344054',
            900:'#808080',
            910:'#E2E2E2'
         },
         'green-light':{
            100:'#29A174',
            200:'#067647',
            300:'#ABEFC6'
         },
         'yellow-light':{
            100:'#B54708',
            200:'#FEDF89'
         },
         'black-light':{
          100:'#121212'
         }
      }
    },
  },
  plugins: [
      require('tailwind-scrollbar-hide') 
  ],
}


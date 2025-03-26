/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'ppt': ["Outfit", "sans-serif"],
        'ppt2':["Bodoni Moda", "serif"]
      },
      screens:{
        'xextralarge':{'max':'2560px'},
        'extralarge':{'max':"1700px"},
        'large':{'max':"1322px"},
        'medium':{'max':"1099px"},
        'small':{'max':"918px"},
        'xsmall':{'max':"801px"},
        'xxsmall':{'max':"700px"},
        'xxxsmall':{'max':'660px'},
        'xxxxsmall':{'max':'640px'},
        'extrasmall':{'max':'500px'},
        'lextrasmall':{'max':'478px'},
        'xextrasmall':{'max':'420px'}
      }
    },
  },
  plugins: [
  ],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs': '400px',
      // => @media (min-width: 400px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1630px',
      // => @media (min-width: 1600px) { ... }

      '4xl': '1800px',
      // => @media (min-width: 1800px) { ... }
    },
    extend: {
      backgroundImage: {
        "separator": "radial-gradient(circle, rgba(145,132,127,1) 0%, rgba(217,217,217,0) 100%)",
      },
      keyframes: {
        transformLeftSide: {
          '0%': { transform: 'translateX(-25px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        transformRightSide: {
          '0%': { transform: 'translateX(25px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        transformBottomTop: {
          '0%': { transform: 'translateY(25px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        transformTopBottom: {
          '0%': { transform: 'translateY(-7px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
    },
    fontFamily: {
      "RhodiumLibre": ["Rhodium Libre", "sans-serif"],
      "Roboto": ["Roboto", "sans-serif"],
      "Habibi": ["Habibi", "sans-serif"],
      "Gruppo": ["Gruppo", "sans-serif"],
      "ZenTokyoZoo" : ["Zen Tokyo Zoo", "sans-serif"],
      "ZenOldMincho": ["Zen Old Mincho", "sans-serif"],
      "Genos": ["Genos", "sans-serif"],
      "Galindo": ["Galindo", "sans-serif"],
      "ZenDots": ["Zen Dots", "sans-serif"],
      "YujiSyuku" : ["Yuji Syuku", "sans-serif"],
      "Syncopate" : ["Syncopate", "sans-serif"],
      "Sura" : ["Sura", "sans-serif"],
      "RobotoFlex" : ["Roboto Flex", "sans-serif"],
      "Galada" : ["Galada", "sans-serif"],
      "SquadaOne" : ["Squada One", "sans-serif"],
      "SplineSans" : ["Spline Sans", "sans-serif"],
      "VollkornSC" : ["Vollkorn SC", "sans-serif"],
      "Trykker" : ["Trykker", "sans-serif"],
      "RedHatText" : ["Red Hat Text", "sans-serif"],
      "RedRose" : ["Red Rose", "sans-serif"],
      "GoblinOne" : ["Goblin One", "sans-serif"]
    }
  },
  plugins: [
    require("tailwindcss-animation-delay"), // Plugin found here : https://www.npmjs.com/package/tailwindcss-animation-delay
  ],

}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'kata': "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixel4k.com%2Fpreview.php%3Fsrc%3Dhttps%3A%2F%2Fwww.pixel4k.com%2Fwp-content%2Fuploads%2F2019%2F11%2Fdeath-sworn-katarina-lol-splash-art-league-of-legends_1574096205.jpg%26w%3D1680%26h%3D1050&f=1&nofb=1&ipt=d02fc3bbfb8477831b79e9aa56f40313e07565cf163b06d070d2b9d04a0e09c2&ipo=images')",
        'kata-m':"url('https://images.hdqwalls.com/download/death-sworn-katarina-league-of-legends-kb-2160x3840.jpg')",
      }
    },
    colors: {
      'richblack': '#06080F',
      'prussianblue': '1D2D44',
      'paynesgray': '#3E5C76',
      'silverlakeblue': '#748CAB',
      'flame': '#CF5C36',
      'atomictangerine': '#DF957C',
      'white': '#FBFCFF'
    },
    fontFamily:{
      'cabin': ['Cabin', 'sans-serif'],
    },
   
  },
  plugins: [],
}


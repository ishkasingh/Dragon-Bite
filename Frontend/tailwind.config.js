/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'imgage': "url('https://hgtvhome.sndimg.com/content/dam/images/hgtv/stock/2018/3/22/01/shutterstock_gunsan-gimbanjang_647022712_garlic.jpg.rend.hgtvcom.616.411.suffix/1521751497410.jpeg')",
      },
      height: {
        'calc-header': 'calc(100% - 100px)', // For example, for a full-screen height minus a header
      },
       fontFamily: {
        poppins: ['poppins', 'sans-serif'],
        
        
      },

    },
  },
  plugins: [],
}


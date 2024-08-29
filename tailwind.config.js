/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {

      gridTemplateColumns: {
        '2': 'repeat(2, minmax(0, 40rem))',
      },

      fontFamily:{
        "primary" : ["Barlow Condensed", "sans-serif"],
        "secondary" : ["Bellefair", "serif"],
        "tertiary": ["Barlow", "sans-serif"]
      },
      colors:{
        "primary" : "#FFFFFF",
        "secondary" : "#D0D6F9",
        "primary-dark" : "#0B0D17",
      },

      fontSize: 
      {
        "xs": ["0.875rem", "1.0625rem"],   // ["14px", "17px"]
        "sm": ["0.9375rem", "1.5625rem"],  // ["15px", "25px"]
        "base": ["1rem", "1.1875rem"],     // ["16px", "19px"]
        "lg": ["1.125rem", "2rem"],        // ["18px", "32px"]
        "xl": ["1.25rem", "1.5rem"],       // ["20px", "24px"]
        "2xl": ["1.5rem", "1.75rem"],       // ["24px", "28px"]
        "3xl": ["1.75rem", "2.125rem"],    // ["28px", "34px"]
        "4xl": ["2rem", "2.3125rem"],      // ["32px", "37px"]
        "5xl": ["2.5rem", "2.875rem"],      // ["32px", "37px"]
        "6xl": ["3.5rem", "4rem"],         // ["56px", "64px"]
        "7xl": ["5rem", "6.25rem"],        // ["80px", "100px"]
        "8xl": ["6.25rem", "7.25rem"],     // ["100px", "116px"]
        "10xl": ["9.375rem", "1"]          // ["150px", "16px"]
    },
    
      letterSpacing: {
        "xl" : "2.35px",
        "2xl" : "2.7px",
        "3xl" : "3.38px",
        "4xl" : "4.72px",
      },
      
      lineHeight:{
        "tighter" : "1.15",
      },
  
      backgroundImage: {
        // 'home-desktop': "url('./src/assets/home/background-home-desktop.jpg')",
        // 'home-tablet': "url('./src/assets/home/background-home-tablet.jpg')",
        // 'home-mobile': "url('./src/assets/home/background-home-mobile.jpg')",
        // 'destination-desktop': "url('./src/assets/destination/background-destination-desktop.jpg')",
        // 'destination-tablet': "url('./src/assets/destination/background-destination-tablet.jpg')",
        // 'destination-mobile': "url('./src/assets/destination/background-destination-mobile.jpg')",
        // 'technology-desktop': "url('./src/assets/technology/background-technology-desktop.jpg')",
        // 'technology-tablet': "url('./src/assets/technology/background-technology-tablet.jpg')",
        // 'technology-mobile': "url('./src/assets/technology/background-technology-mobile.jpg')",
        // 'crew-desktop': "url('./src/assets/crew/background-crew-desktop.jpg')",
        // 'crew-tablet': "url('./src/assets/crew/background-crew-tablet.jpg')",
        // 'crew-mobile': "url('./src/assets/crew/background-crew-mobile.jpg')",
      },
    },
  },
}


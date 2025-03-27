/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      // Small screens (mobile)
      'max-sm': { 'max': '639px' },
      
      // Medium screens
      'sm': '640px',
      
      // Large screens
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        "color-scheme-1-text": "#000",
        "color-white": "#fff",
        steelblue: "#5a7fa6",
        whitesmoke: "#f5f5f5",
        gray: "rgba(0, 0, 0, 0.6)",
      },
      fontFamily: {
        "text-regular-link": "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
      },
      borderWidth: {
        "stroke-border-width": "1px",
      },
      padding: {
        "61xl": "80px",
        "45xl": "64px",
        "93xl": "112px",
        "54xl": "73px",
        "13xl": "32px",
        xl: "20px",
        "28xl": "47px",
        "12xl": "31px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "5xl": "24px",
      "21xl": "40px",
      lg: "18px",
      "29xl": "48px",
      "37xl": "56px",
      xl: "20px",
      "19xl": "38px",
      "10xl": "29px",
      lgi: "19px",
      "13xl": "32px",
      "15xl": "34px",
      "26xl": "45px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
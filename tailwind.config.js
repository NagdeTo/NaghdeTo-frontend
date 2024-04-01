/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["IRANSansX-Regular.ttf", "sans-serif"],

      iranSans: ["IRANSansX-Regular.ttf", "sans-serif"],
      // serif: ["Merriweather", "serif"],
    },
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primary: {
          1000: "rgba(88, 129, 87, 1)",
          100: "rgba(88, 129, 87, 0.1)",
          200: "rgba(88, 129, 87, 0.2)",
          300: "rgba(88, 129, 87, 0.3)",
          400: "rgba(88, 129, 87, 0.4)",
          500: "rgba(88, 129, 87, 0.5)",
          600: "rgba(88, 129, 87, 0.6)",
          700: "rgba(88, 129, 87, 0.7)",
          800: "rgba(88, 129, 87, 0.8)",
          900: "rgba(88, 129, 87, 0.9)",
        },
        secondary: {
          100: "rgba(233, 245, 219, 0.1)",
          200: "rgba(233, 245, 219, 0.2)",
          300: "rgba(233, 245, 219, 0.3)",
          400: "rgba(233, 245, 219, 0.4)",
          500: "rgba(233, 245, 219, 0.5)",
          600: "rgba(233, 245, 219, 0.6)",
          700: "rgba(233, 245, 219, 0.7)",
          800: "rgba(233, 245, 219, 0.8)",
          900: "rgba(233, 245, 219, 0.9)",
          1000: "rgba(233, 245, 219, 1)",
        },
        white: "#fff",
        grey: "#f8f9fa",
        placeHolder: "rgba(0, 0, 0, 0.65)",
      },
     
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

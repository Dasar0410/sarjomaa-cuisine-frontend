/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prime: "#166534", //potential: #1A7B42  #4C9A2A
        lighprime: "#C3D09A",
        brandGreen: "#00FF00",
        txtColor: "#333333" //Obsidian black
        // Add as many single colors as you like
      },
    },
  },
  plugins: [],
}

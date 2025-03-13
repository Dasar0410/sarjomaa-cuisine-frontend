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
        lightprime: "#16A34A",
        brandGreen: "#00FF00",
        txtColor: "#333333", //Obsidian black
        cardColor: 		"hsl(143, 64%, 95%)",
        borderColor: "#A3C293",
        accentColor: "#D84315" //Amber
        // Add as many single colors as you like
      },
    },
  },
  plugins: [],
}

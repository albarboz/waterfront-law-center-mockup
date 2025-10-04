// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { 50:"#f4f7fb",100:"#e9eef7",600:"#1e3a5f",700:"#172f4d",900:"#0e2136" },
        accent: { 600:"#b48b1e" }
      }
    }
  },
  plugins: []
}

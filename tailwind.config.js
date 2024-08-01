// tailwind.config.js
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}", // This covers all files in the screens directory
    // "./src/screens/HomeScreen.{js,jsx,ts,tsx}",      
    // Add more files as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

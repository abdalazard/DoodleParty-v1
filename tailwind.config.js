/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./App.{js,jsx,ts,tsx}",
      "./src/**/*.{js,jsx,ts,tsx}",
      "./app/**/*.{js,jsx,ts,tsx}", // Se você tiver outras pastas com componentes
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
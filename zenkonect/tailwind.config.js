/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkCustom: "#F175BF", // Add your custom color here
      },
    },
  },
  plugins: [],
};

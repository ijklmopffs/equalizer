/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        "background-desktop": "url('/assets/bg-main-desktop.png')",
        "background-tablet": "url('/assets/bg-main-tablet.png')",
        "background-mobile": "url('/assets/bg-main-mobile.png')",
      }),
    },
  },
  plugins: [],
};

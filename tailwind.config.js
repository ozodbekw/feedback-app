/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)",
      },
      boxShadow: {
        dropdownShadow: "box-shadow: 0px 10px 40px -7px #373F6859;",
      },
    },
  },
  plugins: [require("daisyui")],
};

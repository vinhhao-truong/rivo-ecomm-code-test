import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "system-green-1": "#C2EFD4",
        "system-green-2": "#224F34",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        "roboto-slab": ['"Roboto Slab"', "serif"],
        rufina: ['"Rufina"', "serif"],
      },
      screens: {
        xs: "350px",
      },
    },
  },
  plugins: [],
};
export default config;

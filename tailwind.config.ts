import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        alata: ["Alata", "sans-serif"],
        noto: ["Noto Sans JP", "sans-serif"],
        mont: ["Montserrat Alternates", "sans-serif"],
      },
      colors: {
        biru: "#030537",
        coklat: "#674636",
        krem1: "#FFF8E8",
        krem2: "#F7EED3",
        hijau: "#AAB396",
      },
      backgroundImage: {
        bg_home: "url('/app/image/bg-home.svg')",
      },
    },
  },
  plugins: [],
};
export default config;

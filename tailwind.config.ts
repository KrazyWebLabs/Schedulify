import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'boston-blue': {
          '50': '#f0faff',
          '100': '#e0f4fe',
          '200': '#b9ebfe',
          '300': '#7cddfd',
          '400': '#36cdfa',
          '500': '#0cb7eb',
          '600': '#008dbf',
          '700': '#0176a3',
          '800': '#066386',
          '900': '#0b526f',
          '950': '#07344a',
        },
    
      },
    },
  },
  plugins: [],
} satisfies Config;

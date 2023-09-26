import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        cinder: "#040305",
        "sea-green": "#2c9645",
        white: "#fffbff",
        jaffa: "#f19a38",
        "wild-blue-yonder": "#7e83b0",
        astronaut: "#222a68",
        "royal-blue": "#574ae2",
        gray: "#0d1239",
        alto: "#e0e0e0",
        snow: "rgba(255, 251, 255, 0.01)",
        darkslateblue: "#414da4",
        "dodger-blue": "#2887f7",
        "medium-purple": "#ab67ed",
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: {}
        },
        extend: {
            fontFamily: {
                dana: ["var(--font-dana)"],
                morabba: ["var(--font-morabba)"],
            },
            colors: {
                primary: '#2962FF',
                secondary: '#135D66',
                tertiary: '#77B0AA',
                danger: '#FF1A34',
                grass: '#1C9922',
            },
            boxShadow: {
                '3xl': '0px 6px 60px 0px rgba(0,0,0,.2)',
              }
        },
    },
    plugins: [],
};
export default config;

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
                primary: '#ff1a34',
                secondary: '#ffcf40'
            }
        },
    },
    plugins: [],
};
export default config;

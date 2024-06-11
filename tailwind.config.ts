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
                primary: '#ffcf40',
                secondary: '#ff1a34'
            }
        },
    },
    plugins: [],
};
export default config;

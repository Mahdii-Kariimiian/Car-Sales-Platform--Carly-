/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "poppins-light": ["Poppins", "sans-serif"],
                "poppins-regular": ["Poppins", "sans-serif"],
                "poppins-bold": ["Poppins", "sans-serif"],
                "poppins-black": ["Poppins", "sans-serif"],
                "dm-sans": ["DM Sans", "sans-serif"],
            },
            fontSize: {
                main: "12px",
            },
            colors: {
                dark: "#050B20",
                light: "FFFFFF",
                primary: "#405FF2",
                secondary: "#FF5CF4",
                cyan: "#CEE1F2",
                pink: "#FFE9F3",
            },
        },
    },
    plugins: [],
};

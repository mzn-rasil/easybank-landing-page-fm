/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "pri-dark-blue": "hsl(233, 26%, 24%)",
                "pri-lime-green": "hsl(136, 65%, 51%)",
                "pri-bright-cyan": "hsl(192, 70%, 51%)",
                "neu-grayish-blue": "hsl(233, 8%, 62%)",
                "neu-light-grayish-blue": "hsl(220, 16%, 96%)",
                "neu-very-light-gray": "hsl(0, 0%, 98%)",
                "neu-white": "hsl(0, 0%, 100%)",
            },
            fontFamily: {
                "public-sans": ["Public Sans", "sans-serif"],
            }
        },
    },
    plugins: [],
}
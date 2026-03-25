/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./input.css",
    ],
    theme: {
        extend: {
            colors: {
                accent: '#C4005F',
                ink: '#111111',
                inkMid: '#3A3A3A',
                inkLight: '#666666',
                border: '#DEDEDE',
                surface: '#F5F5F5',
            },
            fontFamily: {
                display: ['Oswald', 'sans-serif'],
                body: ['Work Sans', 'sans-serif'],
            },
        }
    },
    plugins: [],
}
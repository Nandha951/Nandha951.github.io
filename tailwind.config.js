/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // User requested default to Dark Mode, usually handled by class or media. I'll use 'class' to control it if needed, or just let 'media' be default. Prompt says "The site should default to Dark Mode". I'll force dark mode often by adding 'dark' class to html or just styling body with dark colors by default.
    theme: {
        extend: {
            colors: {
                // Custom colors if needed
            }
        },
    },
    plugins: [],
}

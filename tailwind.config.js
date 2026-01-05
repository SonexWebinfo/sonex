/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            /* =========================
               Animations
            ========================= */
            animation: {
                // Right → Left (logos, etc.)
                scrollRTL: "scrollRTL 35s linear infinite",

                // Left → Right (testimonials)
                scrollLTR: "scrollLTR 40s linear infinite",

                // Floating blobs
                blob: "blob 30s infinite",
            },

            /* =========================
               Keyframes
            ========================= */
            keyframes: {
                // Right → Left
                scrollRTL: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },

                // Left → Right
                scrollLTR: {
                    "0%": { transform: "translateX(-50%)" },
                    "100%": { transform: "translateX(0)" },
                },

                // Gradient blobs
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(40px, -60px) scale(1.1)",
                    },
                    "66%": {
                        transform: "translate(-30px, 30px) scale(0.95)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
            },
        },
    },
    plugins: [],
};

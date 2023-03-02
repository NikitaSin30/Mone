/** @type {import('tailwindcss').Config} */
module.exports = {
    content : ['./src/**/*.{html,js,ts,tsx,jsx}'],
    theme   : {
        extend : {
            backgroundColor : {
                'nav'  : '#1F2339',
                'main' : '#4D5474',
                'card' : '#383E57',
            },
        },
    },
    plugins : [],
};

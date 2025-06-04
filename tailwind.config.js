/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}', './libs/**/*.{html,ts}'],
    presets: [require('@spartan-ng/brain/hlm-tailwind-preset.js')],
    plugins: [require('tailwindcss-animate')],
};

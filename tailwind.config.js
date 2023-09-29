/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-1': '#455e57',
        'primary-2': '#f4ce14',
        'secondary-1': '#ee9972',
        'secondary-2': '#fbdabb',
        'secondary-3': '#edefee',
        'secondary-4': '#333333',
      },
    },
  },
  plugins: [],
};

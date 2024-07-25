import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      caps: 'Encode Sans SC',
      sans: 'Inter',
      serif: 'Crimson Pro',
    },
    extend: {
      colors: {
        'lexi-ignored-light': colors.red['50'],
        'lexi-ignored-dark': colors.red['50'],

        'lexi-0-light': colors.slate['50'],
        'lexi-0-dark': colors.slate['800'],

        'lexi-1-light': colors.emerald['100'],
        'lexi-1-dark': colors.emerald['800'],

        'lexi-2-light': colors.sky['100'],
        'lexi-2-dark': colors.sky['800'],

        'lexi-3-light': colors.amber['100'],
        'lexi-3-dark': colors.amber['800'],

        'lexi-4-light': colors.rose['100'],
        'lexi-4-dark': colors.rose['800'],

        'lexi-5-light': colors.fuchsia['100'],
        'lexi-5-dark': colors.fuchsia['800'],
      },
    },
  },
  plugins: [],
};

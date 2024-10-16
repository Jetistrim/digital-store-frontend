/* eslint-disable no-unused-vars */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      fontFamily: {
        'sans': ["Inter", "sans-serif"],
      },
      fontSize: {
        'c-title-large': ['64px', { lineHeight: '66px', letterSpacing: '1px' }],
        'c-title-medium': ['48px', { lineHeight: '50px', letterSpacing: '1px' }],
        'c-title-small': ['32px', { lineHeight: '36px', letterSpacing: '1px' }],
        'c-title-extra-small': ['28px', { lineHeight: '36px', letterSpacing: '2px' }],
        'c-text-large': ['24px', { lineHeight: '38px', letterSpacing: '0.74px' }],
        'c-text-medium': ['18px', { lineHeight: '34px', letterSpacing: '0.74px' }],
        'c-text-small': ['16px', { lineHeight: '28px', letterSpacing: '0.74px' }],
        'c-text-extra-small': ['14px', { lineHeight: '22px', letterSpacing: '0.25px' }],
        'c-text-tinny': ['12px', { lineHeight: '18px', letterSpacing: '0.5px' }],
      },
      fontWeight: {
        'c-normal': '400',
        'c-medium': '500',
        'c-bold': '700',
      },
      backgroundImage: theme => ({
        'custom-gradient': 'linear-gradient(to right, #B5B6F2, #EFEFFF)',
      }),
      colors: {
        'dark-gray': '#1F1F1F',
        'dark-gray-2': '#474747',
        'dark-gray-3': '#666666',
        'light-gray': '#8F8F8F',
        'light-gray-2': '#CCCCCC',
        'light-gray-3': '#F5F5F5',
        'white': '#FFFFFF',
        'primary-1': '#C92071',
        'secondary-1': '#B5B6F2',
        'tertiary': '#991956',
        'error': '#EE4266',
        'success': '#52CA76',
        'warning': '#F6AA1C',
        'warning-hover': '#CF8900',
        'primary-2': '#EDABCA',
        'secondary-2': '#EFEFFF',        
        'red': '#e11d48',
      },
    },
  },
  plugins: [function({ addUtilities, theme }) {
    const newUtilities = {
      '.c-title-large': {
        fontSize: theme('fontSize.c-title-large[0]'),
        lineHeight: theme('fontSize.c-title-large[1].lineHeight'),
        letterSpacing: theme('fontSize.c-title-large[1].letterSpacing'),
        fontWeight: theme('fontWeight.c-normal'),
      },
      '.c-title-medium': {
        fontSize: theme('fontSize.c-title-medium[0]'),
        lineHeight: theme('fontSize.c-title-medium[1].lineHeight'),
        letterSpacing: theme('fontSize.c-title-medium[1].letterSpacing'),
        fontWeight: theme('fontWeight.c-normal'),
      },
      '.c-title-small': {
        fontSize: theme('fontSize.c-title-small[0]'),
        lineHeight: theme('fontSize.c-title-small[1].lineHeight'),
        letterSpacing: theme('fontSize.c-title-small[1].letterSpacing'),
        fontWeight: theme('fontWeight.c-normal'),
      },
      '.c-title-extra-small': {
        fontSize: theme('fontSize.c-title-extra-small[0]'),
        lineHeight: theme('fontSize.c-title-extra-small[1].lineHeight'),
        letterSpacing: theme('fontSize.c-title-extra-small[1].letterSpacing'),
        fontWeight: theme('fontWeight.c-normal'),
      },
      '.c-text-large': {
        fontSize: theme('fontSize.c-text-large[0]'),
        lineHeight: theme('fontSize.c-text-large[1].lineHeight'),
        letterSpacing: theme('fontSize.c-text-large[1].letterSpacing'),
        fontWeight: theme('fontWeight.c-normal'),
      },
      '.c-text-medium': {
        fontSize: theme('fontSize.c-text-medium[0]'),
        lineHeight: theme('fontSize.c-text-medium[1].lineHeight'),
        letterSpacing: theme('fontSize.c-text-medium[1].letterSpacing'),
        fontWeight: theme('fontWeight.c-normal'),
      },
      '.c-text-small': {
        fontSize: theme('fontSize.c-text-small[0]'),
        lineHeight: theme('fontSize.c-text-small[1].lineHeight'),
        letterSpacing: theme('fontSize.c-text-small[1].letterSpacing'),
        fontWeight: theme('fontWeight.c-normal'),
      },
      '.c-text-extra-small': {
        fontSize: theme('fontSize.c-text-extra-small[0]'),
        lineHeight: theme('fontSize.c-text-extra-small[1].lineHeight'),
        letterSpacing: theme('fontSize.c-text-extra-small[1].letterSpacing'),
        fontWeight: theme('fontWeight.c-medium'),
      },
      '.c-text-tinny': {
        fontSize: theme('fontSize.c-text-tinny[0]'),
        lineHeight: theme('fontSize.c-text-tinny[1].lineHeight'),
        letterSpacing: theme('fontSize.c-text-tinny[1].letterSpacing'),
        fontWeight: theme('fontWeight.c-medium'),
      },
      '.bold': {
        fontWeight: theme('fontWeight.c-bold'),
      },
      '.mobile': {
        '@media (max-width: 767px)': {
          '&.c-title-large': { fontSize: '32px', lineHeight: '36px', letterSpacing: '1px' },
          '&.c-title-medium': { fontSize: '32px', lineHeight: '36px', letterSpacing: '1px' },
          '&.c-title-small': { fontSize: '24px', lineHeight: '32px', letterSpacing: '1px' },
          '&.c-title-extra-small': { fontSize: '22px', lineHeight: '34px', letterSpacing: '2px' },
          '&.c-text-large': { fontSize: '20px', lineHeight: '32px', letterSpacing: '0.75px' },
          '&.c-text-medium': { fontSize: '16px', lineHeight: '28px', letterSpacing: '0.75px' },
          '&.c-text-small': { fontSize: '14px', lineHeight: '24px', letterSpacing: '0.25px' },
          '&.c-text-extra-small, &.c-text-tinny': { fontSize: '12px', lineHeight: '22px', letterSpacing: '1px' },
        }
      },
    };
    addUtilities(newUtilities, ['responsive', 'hover']);
  }]
}
/** @type {import('tailwindcss').Config} */

const theme = require('./src/styles/theme')
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        ...theme.colors,
      },
      fontFamily: {
        display: [...defaultTheme.fontFamily.sans],
        header: ['Inter', ...defaultTheme.fontFamily.sans],
        body: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        layout: '88rem',
        content: '64rem',
        optical: '75ch',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundSize: {
        '300%': '300%',
      },
      cursor: {
        fancy: 'url(public/cursor.svg), pointer',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'slide-in': {
          from: {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },

        'animated-gradient': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-in': 'slide-in 3s ease 100ms forwards',

        gradient: 'animated-gradient 6s ease infinite alternate',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

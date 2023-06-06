/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
        
      },
      listStyleImage: {
        checkmark: 'url("/corner-down-right.png")',
      },
      colors: {
        'basic': '#bbbbbb',
        'basic-easy': '#848484',
        'primary': '#59834a',
      },

      backgroundImage: {

        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-bg-top': 'linear-gradient(180deg, rgba(52, 72, 45, 0.78) 0%, rgba(35, 40, 33, 0.260417) 59.9%, rgba(29, 29, 29, 0) 100%)',
        'gradient-center': 'radial-gradient(50% 50% at 50% 50%, #3E4C38 0%, rgba(33, 37, 32, 0) 100%)',

      },
      backgroundColor: {
        'main-bg': '#1d1d1d',
        'header-bg': '#7D7C79'

      }
    },
  },
  plugins: [],
}

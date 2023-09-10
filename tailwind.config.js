/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      'x-iphone': '375px',
      'small-mobile': '376px',
      'medium-mobile': '400px',
      mobile: '600px',
      'small-tablet': '768px',
      tablet: '900px',
      'small-desktop': '1040px',
      'medium-desktop': '1300px',
      'large-desktop': '1600px',
    },
    extend: {
      fontFamily: { 
      'abril': ['Abril Fatface Regular', 'serif'],
      'droid-regular': ['Droid Sans', 'san-serif'],
      'droid-bold': ['Droid Sans Bold', 'san-serif'],
      'noto': ['Noto', 'serif'],
    },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      center: true,
    },
    screens: {
      'xs': '475px',     // Extra small - modernebb kisebb készülékek
      'sm': '640px',     // Small - mobil vízszintes
      'md': '768px',     // Medium - tablet
      'lg': '1024px',    // Large - tablet vízszintes / kisebb laptop
      'xl': '1280px',    // Extra large - laptop
      '2xl': '1440px',   // 2X large - desktop
      '3xl': '1920px',   // 3X large - nagy desktop
      '4xl': '2560px',   // 4X large - 2K/4K monitorok
    },
    extend: {
      colors: {
        primary: '#101828',
        secondary: '#666708',
        accent: {
          DEFAULT: '#ed1d24',
          hover: '#dd242a',
        },
        body: '#dedede',
      },
      //Grid rendszer
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
        'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      // Container 
      containers: {
        'xs': '20rem',
        'sm': '24rem',
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '42rem',
      },
    },
  },
  plugins: [
    // Container queries plugin
    require('@tailwindcss/container-queries'),
  ],
}
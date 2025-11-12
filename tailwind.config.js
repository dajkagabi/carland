/** @type {import('tailwindcss').Config} */

{/*v3 vagy a régebbi verziók használják már általában */}

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1300px',
      2xl: '1536px',
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
    },
  },
}
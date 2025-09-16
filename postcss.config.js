// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {
      content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
      theme: {
        extend: {
          colors: {
            primary: '#4a6cf7',
            secondary: '#6f42c1',
            dark: '#1d2144',
            light: '#f8f9fa',
            gray: '#6c757d',
            success: '#198754',
          }
        },
      },
    },
    autoprefixer: {},
  }
}
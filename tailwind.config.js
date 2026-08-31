/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#070A0F',
        secondary: '#0B0F17',
        cards: '#0F141D',
        primaryText: '#FFFFFF',
        secondaryText: '#A1A1AA',
        primaryAccent: '#A855F7',
        secondaryAccent: '#6366F1',
        subtleAccent: '#22D3EE',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
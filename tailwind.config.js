/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'brand-lavender': '#FAD7F8',
        'brand-lavender-dark': '#E7B8E7',
        'brand-pink': '#FF9AA2',
        'brand-pink-dark': '#F7647C',
        'brand-peach': '#FFB19E',
        'brand-peach-dark': '#FF977E',
        'brand-midnight': '#020617',
        'brand-slate': '#4b5563',
        github: '#5FED83',
        discord: '#5865F2',
        twitter: '#1D9BF0',
        youtube: '#FF0000',
        instagram: '#E1306C',
        tiktok: '#25F4EE',
        linkedin: '#0A66C2',
        sora: '#0968DA',
      },
      fontFamily: {
        'nexa': ['Nexa', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/**/*.md',
    './*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Google Sans"', '"Noto Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Noto Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        latex: ['"Computer Modern Serif"', '"CMU Serif"', 'serif'],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

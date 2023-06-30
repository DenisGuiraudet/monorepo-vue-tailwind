const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // './node_modules/@guidap/ui/**/*.{vue,js,ts,jsx,tsx}',
    path.join(path.dirname(require.resolve('@guidap/ui')), '**/*.{vue,js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


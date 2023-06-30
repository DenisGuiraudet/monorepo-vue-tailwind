const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@guidap/config/tailwind.config.js')],
  content: [
    // "./index.html",
    // "./src/**/*.{vue,js,ts,jsx,tsx}",
    path.join(path.dirname(require.resolve('@guidap/ui')), '**/*.{vue,js,ts,jsx,tsx}'),
  ]
}


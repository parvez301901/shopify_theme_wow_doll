/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./layout/*.liquid",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#2BA5DD',
      },
    },
  },
  plugins: [
   // require('daisyui'),
  ],
}


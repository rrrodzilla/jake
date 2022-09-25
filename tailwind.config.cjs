/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts}"],
  theme: {
    fontFamily: {
      'display': ['filmotype-yale'],
      'copy': ['serenity'],
    },
    extend: {
      backgroundImage: {
        'jake': "url('/JakePortrait.jpg')",
        'jp': "url('/JakePortraitOrientation.jpg')",
        'wall': "url('/white_wall_hash.webp')",
      },
      backgroundPosition: {
        'top-4': 'center top -20rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

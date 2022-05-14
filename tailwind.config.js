module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

    "./node_modules/flowbite/**/*.js",

  ],
  theme: {
    extend: {},
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'maincolor': '#D76E2D',
      'maincolordeep': "#B5581F",
      'LiveBtnColor': '#FC4646',
      'SpeedMeter': '#7CCC1F',
      'ShareColor': '##7CCC1F',
      'BgLoveIcon': '#F9F9FC',
      'CertificateColor': '#F5A625',
      'CourseTitle': '#1D2733',
      'btngreen': '#39741F',
      'sectionTitleColor': "#1D2733",
      'maingray': "#1D2733",
      'client-section-des': '#A5A7AB',
      'des-gray': '#414853',
      'facebook-color': '#3B5998',
      'twitter-color': '#00ACEE',
      'google-color': '#EF213D',
      'login-bg-color': '#F5EAC8',
      'amber': {
        300: '#fcd34d',
        400: '#fbbf24',
      },

    },
    container: {
      center: true,
    },
  },
  
  plugins: [
    require('flowbite/plugin')
  ]

}
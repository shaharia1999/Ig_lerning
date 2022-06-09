const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {}
  },
  plugins: []
});

module.exports = {
  darkMode: 'class',
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
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
      'master-degree-bg': '#D76E2D1F',
      'master-degree-text':'#803100',
      'apply-now':'#39741F',
      'about-text1': '#02073E',
      'visionBg': '#FCFBFB',
      'watch-video':'#83C982',
      'watch-video-play':'#ABDAAA',
      'about-analytics-bg':'#FBFFFE',
      'about-analytics-title1':'#28D1DC',
      'about-analytics-title2':'#FA578E',
      'about-analytics-title3':'#FF753A',
      'about-analytics-title4':'#28DCB2',
      'about-analytics-subTitle':'#0F2137',
      'shadow-about':'#45589D14',
      'our-team':'#485470',
      'our-team-subtitle':'#7D8CAC',
      'student-card-bg':'#FFFBF8',
      'teacher-card':'#F8FFF8',
      'teacher-card-button':'#FF8F33',
      'breadcrumbs':'#F9F9FC',
      'breadcrumbs-text':'#999B9F',
      'progress-bar':'#F3C81A',
      'upcomming-green':'#39741F',
      'hash-tag':' #3DB9FB',
      'pagination':'#39741F',
      'price':'#83C982',
      'price-deep': '#7ABB79',
      'cart-item-title':'#02073E',
      'light-version':'#F3F4F6',
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
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin'),
    require("daisyui"),
  ]

}
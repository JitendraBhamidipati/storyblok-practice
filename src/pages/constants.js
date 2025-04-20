import localFont from 'next/font/local';

// Font files can be colocated inside of `app`
export const myFont = localFont({
  src: [
    {
      path: '../common/Assets/SimplonNorm-Regular.ttf',
      variable: '--font-Simplon'
    },
    {
      path: '../common/Assets/SimplonNorm-Bold.ttf',
      variable: '--font-SimplonBold'
    },
    {
      path: '../common/Assets/SimplonNorm-Medium.ttf',
      variable: '--font-SimplonMedium'
    },
    {
      path: '../common/Assets/SimplonNorm-Light.ttf',
      variable: '--font-SimplonLight'
    }
  ]
});

export const resolveRelations = [
  'page.header',
  'page.speed_dial',
  'page.footer',
  'footer.links',
  'hero.booking',
  'header.menus',
  'header.mainMenu',
  'header.accommodation',
  'header.surfcamps'
];

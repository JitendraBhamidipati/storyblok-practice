import localFont from 'next/font/local';

// Font files can be colocated inside of `app`
export const myFont = localFont({
  src: [
    {
      path: '../common/Assets/SimplonNorm-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../common/Assets/SimplonNorm-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../common/Assets/SimplonNorm-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../common/Assets/SimplonNorm-Light.ttf',
      weight: '300',
      style: 'normal'
    }
  ],
  variable: '--font-Simplon',
  display: 'swap'
});

export const resolveRelations = [
  'page.header',
  'page.speed_dial',
  'page.footer',
  'mainFooter.infoLinks',
  'mainFooter.surfInstructorLinks',
  'mainFooter.locationLinks',
  'hero.booking',
  'campaign.to',
  'campaign.to2',
  'bungalowCard.to',
  'bungalowCard.to2',
  'header.menus',
  'banner.to',
  'header.mainMenu',
  'header.accommodation',
  'header.surfcamps'
];

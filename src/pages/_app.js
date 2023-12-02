'use client';

import { storyblokInit, apiPlugin } from '@storyblok/react';
import Page from '../components/Page';
import FooterImages from '../components/FooterImages';
import Image from '../components/Image';
import Team from '../components/Team';
import Member from '../components/Member';
import Footer from '../components/Footer';
import Link from '../components/Link';
import GlobalReference from '@/components/GlobalReference';
import Content from '@/components/Content';
import SpeedDial from '@/components/SpeedDial';

const components = {
  page: Page,
  footerImages: FooterImages,
  image: Image,
  team: Team,
  member: Member,
  footer: Footer,
  link: Link,
  global_reference: GlobalReference,
  content: Content,
  ['speed-dial']: SpeedDial
};

storyblokInit({
  accessToken: 'a4YWytrfrIQNts22wPcP5gtt',
  use: [apiPlugin],
  // apiOptions: {
  //   //   region: "us" or "cn", // you need to specify the region
  //   // },
  components
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

import Head from 'next/head';
import { getStoryblokApi, StoryblokComponent } from '@storyblok/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import { resolveRelations } from './constants';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export default function Home({ story }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Coastline Kollektive</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CssBaseline />
        <StoryblokComponent blok={story.content} />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export async function getStaticProps() {
  const slug = 'home';

  const sbParams = {
    version: 'draft', // or 'published'
    resolve_relations: resolveRelations
  };

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false
    },
    revalidate: 3600
  };
}

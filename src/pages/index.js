import Head from 'next/head';
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent
} from '@storyblok/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

const resolveRelations = ['global_reference.reference'];

export default function Home({ story }) {
  story = useStoryblokState(story);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Coastline Kollektive</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <StoryblokComponent blok={story.content} />
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  let slug = 'home';

  let sbParams = {
    version: 'draft', // or 'published'
    resolve_relations: resolveRelations
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false
    },
    revalidate: 3600
  };
}

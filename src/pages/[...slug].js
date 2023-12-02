import Head from 'next/head';
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent
} from '@storyblok/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

const resolveRelations = ['global_reference.reference'];

export default function Page({ story }) {
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

export async function getStaticProps({ params }) {
  let slug = params.slug ? params.slug.join('/') : 'home';

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

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get('cdn/links/', {
    version: 'draft',
    resolve_relations: resolveRelations
  });

  let paths = [];
  Object.keys(data.links).forEach(linkKey => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split('/');

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false
  };
}

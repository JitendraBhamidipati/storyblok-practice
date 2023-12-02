import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { Grid } from '@mui/material';

const Page = ({ blok }) => {
  return (
    <Grid container {...storyblokEditable(blok)}>
      {blok.body.map(nestedBlok => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </Grid>
  );
};

export default Page;

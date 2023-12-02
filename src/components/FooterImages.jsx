import { StoryblokComponent } from '@storyblok/react';
import { Grid } from '@mui/material';

const styles = {
  imagesWrap: {}
};

const FooterImages = ({ blok }) => {
  return (
    <Grid container sx={styles.imagesWrap}>
      {blok.images.map(image => (
        <StoryblokComponent
          item
          xs
          key={image._uid}
          blok={image}
          height={220}
          width={'100%'}
        />
      ))}
    </Grid>
  );
};

export default FooterImages;

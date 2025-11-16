import { Grid, Typography } from '@mui/material';
import { StoryblokComponent } from '@storyblok/react';
import React from 'react';

const styles = {
  conatiner: { p: '2rem 6rem' },
  image: { mt: '5rem' }
};

function Arrival({ blok }) {
  const { header, image, types } = blok;
  return (
    <Grid container spacing={2} sx={styles.conatiner}>
      <Grid size={6}>
        <Typography variant="h3">{header}</Typography>
        {types.map(type => (
          <StoryblokComponent key={type.id} blok={type} />
        ))}
      </Grid>
      <Grid size={6}>
        {image.filename && (
          <Grid
            component="img"
            sx={styles.image}
            alt={image.alt}
            src={image.filename}
            width="fit-content"
            height="fit-content"
          />
        )}
      </Grid>
    </Grid>
  );
}

export default Arrival;

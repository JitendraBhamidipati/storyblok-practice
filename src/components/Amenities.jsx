import { Grid, Typography } from '@mui/material';
import { StoryblokComponent } from '@storyblok/react';

const styles = {
  container: { px: '2rem', py: '4rem' },
  title: { mb: '2rem' }
};

function Amenities({ blok }) {
  const { title, note, amenities } = blok;
  return (
    <Grid container sx={styles.container}>
      <Grid size={12}>
        <Typography variant="h2" sx={styles.title}>
          {title}
        </Typography>
      </Grid>
      {amenities.map(amenity => (
        <Grid
          size={12 / amenities.length}
          key={amenity.id}
          container
          textAlign="center"
          alignItems="center"
          flexDirection="column"
        >
          <StoryblokComponent blok={amenity} />
        </Grid>
      ))}
      <Grid size={4}>
        <Typography variant="caption">{note}</Typography>
      </Grid>
    </Grid>
  );
}

export default Amenities;

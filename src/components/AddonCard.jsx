import { Grid, Typography } from '@mui/material';
import { StoryblokComponent } from '@storyblok/react';
import React from 'react';

const styles = {
  conatiner: { px: '4rem', py: '2rem' },
  title: { textTransform: 'uppercase' },
  info: { display: 'flex', alignItems: 'center' },
  infoIcon: { mr: '1rem' }
};

function AddonCard({ blok }) {
  const { title, infoSvg, note, addons } = blok;
  const [width, height] = infoSvg?.source?.split('*') || ['100%', '100%'];
  return (
    <Grid container sx={styles.conatiner} spacing={2}>
      <Grid size={12}>
        <Typography variant="h4" sx={styles.title}>
          {title}
        </Typography>
      </Grid>
      {addons.map(amenity => (
        <Grid
          size={12 / addons.length}
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
        <Typography variant="body1" sx={styles.info}>
          {infoSvg && (
            <Grid
              component="img"
              alt={infoSvg.alt}
              width={`${width}px`}
              height={`${height}px`}
              src={infoSvg.filename}
              sx={styles.infoIcon}
            />
          )}
          {note}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default AddonCard;

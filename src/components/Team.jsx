import { StoryblokComponent } from '@storyblok/react';
import { Grid, Typography } from '@mui/material';

const styles = {
  container: {
    bgcolor: '#f3f1e9',
    p: '2rem'
  }
};

const Team = ({ blok }) => {
  return (
    <Grid container sx={styles.container} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">{blok.heading}</Typography>
      </Grid>
      {blok.member.map(member => (
        <Grid key={member._uid} item xs={12} md={6}>
          <StoryblokComponent blok={member} height={200} width="100%" />
        </Grid>
      ))}
    </Grid>
  );
};

export default Team;

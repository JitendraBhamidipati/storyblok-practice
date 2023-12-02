import React from 'react';
import { StoryblokComponent } from '@storyblok/react';
import { Grid, Typography } from '@mui/material';
import { InfoIcon, WebIcon } from '@/svgs';

const styles = {
  header: {
    color: 'common.white',
    fontSize: '1rem',
    mb: '1rem',
    fontWeight: 'bold'
  },
  container: {
    bgcolor: '#020a0a',
    py: '2rem',
    px: '4rem'
  },
  address: {
    color: 'common.white',
    mb: '1rem'
  }
};

const Footer = ({ blok }) => {
  return (
    <Grid container sx={styles.container}>
      <Grid item xs={12} md={4}></Grid>
      <Grid item xs={12} md={4}>
        <Grid container alignItems={'center'} sx={styles.header}>
          <Typography component={'div'} variant="button">
            {blok.linkHeader}
          </Typography>
          <InfoIcon />
        </Grid>
        {blok.links.map((link, index) => (
          <StoryblokComponent key={link._uid} blok={link} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container alignItems={'center'} sx={styles.header}>
          <Typography component={'div'} variant="button">
            {blok.contactHeader}
          </Typography>
          <WebIcon />
        </Grid>
        <Typography sx={styles.address}>{blok.address}</Typography>
        <Typography sx={styles.address}>{blok.contactNumber}</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;

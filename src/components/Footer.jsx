import React from 'react';
import { Grid } from '@mui/material';
import { StoryblokComponent } from '@storyblok/react/rsc';

const styles = {
  header: {
    color: 'common.black',
    fontSize: '1rem',
    mb: '1rem',
    fontWeight: 'bold'
  },
  link: {
    '& a': {
      color: 'common.black'
    }
  },
  container: {
    bgcolor: 'colors.footerBackground',
    py: '2rem',
    px: '4rem'
  },
  address: {
    color: 'common.black',
    mb: '1rem'
  }
};

function Footer({ blok }) {
  return (
    <React.Fragment>
      {blok.blocks.map(nestedBlok => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </React.Fragment>
  );
}

export default Footer;

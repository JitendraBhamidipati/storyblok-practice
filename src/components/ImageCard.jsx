import React from 'react';
import { renderRichText } from '@storyblok/react';
import { Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { Button } from '@/common';

const styles = {
  container: color => ({
    p: '2rem',
    bgcolor: color.color
  }),
  title: {
    fontSize: '3rem',
    fontWeight: 700,
    lineHeight: 1,
    mb: '3.5rem',
    mt: '1rem'
  },
  outlinedBtn: { '& a': { color: 'common.black' } },
  btn: {
    width: 'inherit',
    mb: '2rem',
    mt: 'auto'
  }
};

function ImageCard({ blok }) {
  const { image, title, bgcolor, isBtnFilled, content, svg } = blok;
  const renderedRichText = renderRichText(content);
  const [width, height] = svg?.source?.split('*') || [];

  return (
    <Grid
      container
      sx={styles.container(bgcolor)}
      justifyContent="space-around"
    >
      <Grid size={5} container flexDirection="column">
        {svg && (
          <Grid
            component="img"
            alt={svg.alt}
            width={`${width}px`}
            height={`${height}px`}
            src={svg.filename}
          />
        )}
        <Typography variant="button" component="h2" sx={styles.title}>
          {title}
        </Typography>
        <Grid dangerouslySetInnerHTML={{ __html: renderedRichText }} />
        {blok.to && (
          <Button
            sx={[styles.btn, !isBtnFilled && styles.outlinedBtn]}
            variant={isBtnFilled ? 'contained' : 'outlined'}
          >
            <Link href={blok.to.full_slug}>{blok.to.name}</Link>
          </Button>
        )}
      </Grid>
      <Grid size={5}>
        <Grid
          component="img"
          alt={image.alt}
          width="100%"
          height={400}
          src={image.filename}
        />
      </Grid>
    </Grid>
  );
}

export default ImageCard;

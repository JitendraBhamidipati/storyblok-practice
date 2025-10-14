import { Button, Grid, Typography } from '@mui/material';
import { renderRichText } from '@storyblok/react';
import React from 'react';
import Link from 'next/link';
import { Carousel } from '@/common';

const styles = {
  container: { pb: '2rem', pt: '5rem' },
  carouselWrap: { position: 'relative' },
  label: { lineHeight: 1, textTransform: 'uppercase' },
  discountValue: { fontSize: '2.5rem', lineHeight: 1 },
  btn: {
    bgcolor: 'common.black',
    color: 'common.white',
    fontWeight: 'bold',
    mt: '4rem',
    width: 400,
    px: '6rem'
  },
  btn2: {
    bgcolor: 'common.white',
    color: 'common.black',
    fontWeight: 'bold',
    mt: '1rem',
    width: 400,
    px: '6rem',
    '& a': {
      color: 'common.black'
    }
  },
  discount: color => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    bgcolor: color,
    width: '8rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    overflowWrap: 'break-word',
    height: '8rem',
    position: 'absolute',
    borderRadius: '50%',
    top: -50,
    left: -50,
    zIndex: 10
  })
};

function Campaign({ blok }) {
  const renderedRichText = renderRichText(blok.content);
  const slides = blok.images.map(image => ({
    key: image.id,
    content: (
      <Grid
        key={image.id}
        component="img"
        alt={image.alt}
        width="100%"
        height={430}
        src={image.filename}
      />
    )
  }));

  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-around"
      flexDirection={blok.alternate ? 'row' : 'row-reverse'}
      sx={styles.container}
    >
      <Grid size={5} sx={styles.carouselWrap}>
        {blok.discount && (
          <Grid sx={styles.discount(blok.themeColor.color)}>
            <Typography variant="button" sx={styles.discountValue}>
              {blok.discount}%
            </Typography>
            <Typography variant="h6" sx={styles.label}>
              {blok.discountLabel}
            </Typography>
          </Grid>
        )}
        <Carousel slides={slides} slidesPerView={1} isCircular isAutoPlay />
      </Grid>
      <Grid size={5}>
        <Grid dangerouslySetInnerHTML={{ __html: renderedRichText }} />
        {blok.to && (
          <Button variant="contained" sx={[styles.btn]}>
            <Link href={blok.to.full_slug}>{blok.to.name}</Link>
          </Button>
        )}
        {blok.to2 && (
          <Button variant="outlined" sx={[styles.btn2]}>
            <Link href={blok.to2.full_slug}>{blok.to2.name}</Link>
          </Button>
        )}
      </Grid>
    </Grid>
  );
}

export default Campaign;

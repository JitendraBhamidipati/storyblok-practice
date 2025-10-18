import { Grid, Paper } from '@mui/material';
import { renderRichText } from '@storyblok/react';
import React from 'react';
import Link from 'next/link';
import { Button, Carousel } from '@/common';

const styles = {
  container: { pb: '3rem', pt: '4rem', mx: '2rem', mb: '2rem' },
  carouselWrap: { position: 'relative' },
  label: { lineHeight: 1, textTransform: 'uppercase' },
  discountValue: { fontSize: '2.5rem', lineHeight: 1 },
  btn: {
    bgcolor: 'common.black',
    color: 'common.white',
    fontWeight: 'bold',
    width: '100%',
    px: '3rem'
  },
  btn2: {
    bgcolor: 'common.white',
    color: 'common.black',
    fontWeight: 'bold',
    width: '100%',
    px: '3rem',
    ml: '.5rem',
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

function BungalowCard({ blok }) {
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
      component={Paper}
      elevation={4}
      justifyContent="space-around"
      flexDirection={blok.alternate ? 'row' : 'row-reverse'}
      sx={styles.container}
    >
      <Grid size={5.5} sx={styles.carouselWrap}>
        <Carousel
          key={blok.id}
          slides={slides}
          slidesPerView={1}
          isCircular
          isAutoPlay
        />
      </Grid>
      <Grid size={5}>
        <Grid dangerouslySetInnerHTML={{ __html: renderedRichText }} />
        <Grid container>
          <Grid size={5.5}>
            {blok.to && (
              <Button variant="contained" sx={[styles.btn]}>
                <Link href={blok.to.full_slug}>{blok.to.name}</Link>
              </Button>
            )}
          </Grid>
          <Grid size={5.5}>
            {blok.to2 && (
              <Button variant="outlined" sx={[styles.btn2]}>
                <Link href={blok.to2.full_slug}>{blok.to2.name}</Link>
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BungalowCard;

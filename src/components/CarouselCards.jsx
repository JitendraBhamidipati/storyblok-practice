import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Carousel } from '@/common';

const styles = {
  container: { px: '8rem', py: '2rem' },
  header: { fontSize: '1.75rem' },
  img: { height: 160, width: 160 },
  circleImg: { borderRadius: '50%' },
  carousel: { pt: '2rem' },
  card: { p: '2rem', bgcolor: '#F3F1E9' },
  cardHeader: { width: '10rem', mb: '1rem' }
};

function CarouselCards({ blok }) {
  const slides = blok.cards.map(card => {
    return {
      key: card._uid,
      content: (
        <Grid
          container
          textAlign="center"
          justifyContent="center"
          sx={styles.card}
        >
          <Grid size={12}>
            <Grid
              sx={[styles.img, card.isImageCircle && styles.circleImg]}
              component="img"
              alt={card.image.alt}
              src={card.image.filename}
            />
          </Grid>
          <Grid size={12} justifyItems="center">
            <Typography sx={styles.cardHeader} variant="h6">
              {card.header}
            </Typography>
          </Grid>
          <Grid size={12}>
            <Typography>{card.content}</Typography>
          </Grid>
        </Grid>
      )
    };
  });

  return (
    <Grid
      container
      sx={styles.container}
      textAlign="center"
      justifyContent="center"
    >
      <Grid size={6}>
        <Typography variant="button" sx={styles.header}>
          {blok.header}
        </Typography>
      </Grid>
      <Grid size={8}>
        <Typography sx={styles.content}>{blok.content}</Typography>
      </Grid>
      <Grid size={12}>
        <Carousel
          key={blok.id}
          buttonType="side"
          sx={styles.carousel}
          slides={slides}
          slidesPerView={3}
          isCircular
        />
      </Grid>
    </Grid>
  );
}

export default CarouselCards;

import { Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { LocationIcon } from '@/common/svgs';

const styles = {
  container: {
    pt: '6rem',
    height: '100vh',
    backgroundSize: 'cover',
    alignItems: 'flex-end'
  },
  discountValue: {
    fontSize: '2.5rem'
  },
  title: {
    fontSize: '60px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'common.white'
  },
  btn: {
    bgcolor: 'common.black',
    color: 'common.white',
    fontWeight: 'bold',
    mt: '4rem',
    px: '8rem'
  },
  location: {
    color: 'common.white',
    margin: 0,
    fontSize: '1.25rem'
  },
  caption: {
    fontSize: '2rem',
    color: 'common.white'
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
    top: 150,
    right: 80
  }),
  icon: { color: 'transparent', m: 0 }
};

function Hero({ blok }) {
  return (
    <Grid
      container
      textAlign="center"
      sx={{
        backgroundImage: `url( ${blok.bgImage.filename})`,
        ...styles.container
      }}
      spacing={2}
    >
      <Grid
        size={{ xs: 12, sm: 10, md: 8, lg: 6, xl: 4 }}
        offset={1}
        textAlign="left"
      >
        {blok.location && (
          <Typography variant="h6" sx={styles.location}>
            <LocationIcon sx={styles.icon} /> {blok.location}
          </Typography>
        )}
        <Typography variant="h1" sx={styles.title}>
          {blok.title}
        </Typography>
        <Button variant="contained" sx={styles.btn}>
          <Link href={blok.booking.full_slug}>{blok.booking.name}</Link>
        </Button>
        {blok.discount && (
          <Grid sx={styles.discount(blok.themeColor.color)}>
            <Grid sx={styles.discountValue}>{blok.discount}%</Grid>
            <Grid>{blok.discountLabel}</Grid>
          </Grid>
        )}
      </Grid>
      <Grid size={12} offset={1} textAlign="left">
        {blok.caption && (
          <Typography variant="h4" sx={styles.caption}>
            {blok.caption}
          </Typography>
        )}
      </Grid>
      <Grid
        size={12}
        sx={{
          bgcolor: blok.themeColor.color,
          maxHeight: 60,
          textAlign: 'center'
        }}
      >
        <Typography variant="body1">{blok.banner}</Typography>
      </Grid>
    </Grid>
  );
}

export default Hero;

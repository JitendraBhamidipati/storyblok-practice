import { Grid, Typography } from '@mui/material';
import Link from 'next/link';
import {
  ContactIcon,
  InfoIcon,
  LocationIcon,
  PaymentIcon,
  SurfInstructorIcon
} from '@/common/svgs';
import Content from './Content';

const styles = {
  container: {
    alignItems: 'flex-start',
    p: '2rem'
  },
  contact: { mb: '1rem', fontWeight: 'bold' }
};

function MainFooter({ blok }) {
  const {
    contactTitle,
    contactText,
    paymentTitle,
    paymentGateway,
    infoTitle,
    locationTitle,
    surfInstructorTitle,
    locationLinks,
    infoLinks,
    surfInstructorLinks
  } = blok;

  return (
    <Grid container sx={[styles.container]}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Typography sx={styles.contact}>
          <InfoIcon width={40} height={40} />
          {infoTitle}
        </Typography>
        {infoLinks.map(item => (
          <Grid key={item.id}>
            <Link href={item.full_slug}>{item.name}</Link>
          </Grid>
        ))}
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Typography sx={styles.contact}>
          <SurfInstructorIcon width={40} height={40} />
          {surfInstructorTitle}
        </Typography>
        {surfInstructorLinks.map(item => (
          <Grid key={item.id}>
            <Link href={item.full_slug}>{item.name}</Link>
          </Grid>
        ))}
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Typography sx={styles.contact}>
          <LocationIcon width={40} height={40} />
          {locationTitle}
        </Typography>
        {locationLinks.map(item => (
          <Grid key={item.id}>
            <Link href={item.full_slug}>{item.name}</Link>
          </Grid>
        ))}
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Typography sx={styles.contact}>
          <PaymentIcon width={40} height={40} />
          {paymentTitle}
        </Typography>
        <Typography>{paymentGateway}</Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }} offset={{ xs: 0, md: 4 }}>
        <Typography sx={styles.contact}>
          <ContactIcon width={40} height={40} />
          {contactTitle}
        </Typography>
        <Content blok={{ text: contactText }} />
      </Grid>
    </Grid>
  );
}

export default MainFooter;

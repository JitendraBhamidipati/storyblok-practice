import { Grid, Typography } from '@mui/material';
import { PhoneIcon, MailIcon } from '../svgs';

const styles = {
  image: { borderRadius: '50%' },
  iconWrap: { display: 'flex', alignItems: 'center', mt: '.5rem' },
  icon: { mr: '1rem' }
};

const Member = ({ blok }) => {
  return (
    <Grid container textAlign={'center'} spacing={2}>
      <Grid item xs={4}>
        <Grid
          component={'img'}
          sx={styles.image}
          src={blok.image}
          height={110}
          width={110}
        ></Grid>
      </Grid>
      <Grid item xs={8} textAlign={'left'}>
        <Typography variant="button">{blok.name}</Typography>
        <Typography variant="body2">{blok.Designation}</Typography>
        {blok.mobile && (
          <Typography sx={styles.iconWrap} variant="body2">
            <PhoneIcon sx={styles.icon} />
            {blok.mobile}
          </Typography>
        )}
        {blok.mail && (
          <Typography sx={styles.iconWrap} variant="body2">
            <MailIcon sx={styles.icon} />
            {blok.mail}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Member;

import { Grid, Link as MuiLink } from '@mui/material';

const styles = {
  link: {
    color: 'common.white',
    textDecoration: 'none'
  }
};

const Link = ({ blok }) => {
  return (
    <Grid container textAlign={'center'}>
      <MuiLink sx={styles.link} target={blok.link.target} href={blok.link.url}>
        {blok.label}
      </MuiLink>
    </Grid>
  );
};

export default Link;

import { renderRichText } from '@storyblok/react';
import { Grid } from '@mui/material';

const styles = {
  dataProtection: { bgcolor: '#f3f1e9', py: '2rem', px: '4rem' }
};

function Content({ blok }) {
  const renderedRichText = renderRichText(blok.text);
  return (
    <Grid container sx={styles.dataProtection}>
      <Grid dangerouslySetInnerHTML={{ __html: renderedRichText }} />
    </Grid>
  );
}

export default Content;

import { Grid, Typography } from '@mui/material';
import React from 'react';

const styles = {
  svgWrap: color => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: '50%',
    bgcolor: color.color
  }),
  text: { mt: '1rem' }
};

function Amenity({ blok }) {
  const { text, title, svg, bgcolor, price } = blok;
  const [width, height] = svg?.source?.split('*') || ['100%', '100%'];

  return (
    <React.Fragment>
      <Grid sx={styles.svgWrap(bgcolor)}>
        <Grid
          component="img"
          alt={svg.alt}
          width={`${width}px`}
          height={`${height}px`}
          src={svg.filename}
        />
      </Grid>
      {title && <Typography variant="h4">{title}</Typography>}
      <Typography variant="body" sx={styles.text}>
        {text}
      </Typography>
      {price && <Typography variant="h6">{price}</Typography>}
    </React.Fragment>
  );
}

export default Amenity;

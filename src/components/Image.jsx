import { Grid } from '@mui/material';

const Image = ({ blok, height, width, ...rest }) => {
  return (
    <Grid
      component="img"
      src={blok.image}
      height={height}
      width={width}
      {...rest}
    />
  );
};

export default Image;

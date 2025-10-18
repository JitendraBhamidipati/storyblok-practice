import { createTheme } from '@mui/material';
import { myFont } from './constants';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#000' },
    colors: {
      footerBackground: '#F3F1E9',
      dotColor: '#333333'
    }
  },
  cssVariables: true,
  typography: {
    fontFamily: myFont.style.fontFamily
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
          margin: 0
        }
        a {
          font-weight: bold;
          text-decoration: none;
        }
      `
    }
  }
});

export default theme;

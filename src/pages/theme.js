import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#000' },
    colors: {
      footerBackground: '#F3F1E9'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        a {
          font-weight: bold;
          color: white;
          text-decoration: none;
        }
      `
    }
  }
});

export default theme;

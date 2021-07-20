import { createTheme } from '@material-ui/core/styles';

const globalStyles = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});

export default globalStyles;

import { ThemeProvider } from '@material-ui/styles';
import { CardMedia } from '@material-ui/core';
import globalStyles from '../../../assets/styles/globalStyles';
import NavBar from '../../components/NavigationBar/NavBar';
import Group_3 from './Group_3.png';

import useStyles from './styles';

const Main = ({ children }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={{ ...globalStyles }}>
      <div className={classes.main}>
        <CardMedia
          component='img'
          src={Group_3}
          className={classes.backgroundImg}
        />
        <NavBar />
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Main;

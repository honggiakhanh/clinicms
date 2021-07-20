import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  main: {
    backgroundColor: '#f9f6ff',
    minHeight: '100vh',
    fontFamily: 'Montserrat',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 999,
  },
  backgroundImg: {
    position: 'absolute',
    top: '-280px',
    right: '-80px',
    zIndex: -2,
  },
}));

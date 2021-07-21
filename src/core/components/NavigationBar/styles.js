import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0',
  },
  navBarLinks: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
  },
  navBarLogo: {
    width: 350,
  },
}));

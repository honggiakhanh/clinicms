import { makeStyles } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles({
  heroTitle: {
    fontSize: 36,
    fontWeight: 500,
    letterSpacing: 2,
    marginBottom: 20,
    '& > span': {
      color: deepPurple[400],
      fontWeight: 600,
    },
  },
});

import { makeStyles } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles({
  heroTitle: {
    fontSize: "1.5em",
    fontWeight: 600,
    letterSpacing: 4,
    marginBottom: 20,
    '& > span': {
      color: deepPurple[400],
      fontWeight: 600,
    },
  },
});

import { makeStyles } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles({
  heroTitle: {
    fontSize: "1.5rem",
    fontWeight: 700,
    letterSpacing: 4,
    marginBottom: 20,
    '& > span': {
      color: deepPurple[400],
      fontWeight: 600,
      paddingLeft: "0.25rem",
    },
  },
});

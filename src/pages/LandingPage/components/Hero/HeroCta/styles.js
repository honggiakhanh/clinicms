import { makeStyles } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles({
  button: {
    width: 220,
    position: 'relative',
    height: 50,
    borderRadius: 999,
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    background: deepPurple[400],
    '&:hover > div': {
      width: 214,
    },
    '&:hover > span': {
      color: deepPurple[400],
    },
  },
  buttonIconOuter: {
    position: 'absolute',
    background: 'white',
    height: 45,
    width: 45,
    top: '50%',
    left: `3px`,
    transform: 'translateY(-50%)',
    borderRadius: 999,
    transition: 'all 0.25s ease',
  },
  buttonText: {
    position: 'absolute',
    left: '30px',
    fontSize: 18,
    fontWeight: 500,
    letterSpacing: 2,
    color: 'white',
    marginLeft: 40,
    transform: 'translateY(-50%)',

    transition: 'all 0.25s ease',
  },
  buttonIcon: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: '10px',
    color: deepPurple[400],
  },
});

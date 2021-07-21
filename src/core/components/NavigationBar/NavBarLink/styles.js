import { makeStyles } from '@material-ui/core';

export default makeStyles({
  navBarLink: {
    cursor: 'pointer',
    clipPath: 'polygon(10% 0%, 100% 0, 90% 100%, 0% 100%)',
    padding: '20px',
    color: '#003024',
    fontWeight: 500,
    transition: 'all 0.25s ease',
    fontSize: 16,
    textDecoration: 'none',
    '&:hover': {
      background: '#35DAB2',
      color: 'white',
    },
    '&:not(&:last-of-type)': {
      marginRight: -15,
    },
  },
  navBarLinkActive: {
    background: '#35DAB2',
    color: 'white',
  },
});

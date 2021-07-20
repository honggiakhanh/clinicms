import { Box, CardMedia } from '@material-ui/core';
import Doctor from './Image.png';
import useStyles from './styles';

const LandingRight = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <CardMedia
        component='img'
        src={Doctor}
        className={classes.heroRightImg}
      />
    </Box>
  );
};

export default LandingRight;

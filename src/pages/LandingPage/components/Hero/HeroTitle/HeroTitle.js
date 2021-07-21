import { Typography } from '@material-ui/core';
import useStyles from './styles';
const HeroTitle = () => {
  const classes = useStyles();
  return (
    <Typography variant='h1' className={classes.heroTitle}>
      Phòng khám bác sĩ <span>TRUNG</span>
    </Typography>
  );
};

export default HeroTitle;

import { Grid } from '@material-ui/core';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';
import SectionContainer from '../../../../components/layout/SectionContainer/SectionContainer';
import useStyles from './styles';

const Hero = () => {
  const classes = useStyles();
  return (
    <SectionContainer>
      <Grid container alignItems='center'>
        <Grid item xl={6}>
          <HeroLeft />
        </Grid>
        <Grid item xl={6} className={classes.heroRightContainer}>
          <HeroRight />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default Hero;

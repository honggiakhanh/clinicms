import { Fragment } from 'react';
import HeroTitle from '../HeroTitle/HeroTitle';
import HeroDesc from '../HeroDesc/HeroDesc';
import HeroCta from '../HeroCta/HeroCta';

const LandingLeft = () => {
  return (
    <Fragment>
      <HeroTitle />
      <HeroDesc />
      <HeroCta />
    </Fragment>
  );
};

export default LandingLeft;

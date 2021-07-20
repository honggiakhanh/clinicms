import clsx from 'clsx';
import { Fragment } from 'react';
import useStyles from './styles';

const HeroDesc = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <p className={clsx(classes.heroDescBase, classes.heroDescContent)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse pariatur
        quidem voluptatibus saepe? Nobis ex excepturi ipsum accusantium
        perferendis numquam, quasi dolor atque laudantium magni.
      </p>
      <p className={clsx(classes.heroDescBase, classes.heroDescPhone)}>
        123456789
      </p>
    </Fragment>
  );
};

export default HeroDesc;

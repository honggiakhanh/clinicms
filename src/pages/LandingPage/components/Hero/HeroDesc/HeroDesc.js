import clsx from 'clsx';
import { Fragment } from 'react';
import useStyles from './styles';

const HeroDesc = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <p className={clsx(classes.heroDescBase, classes.heroDescContent)}>
      Chuyên trị các bệnh về tâm lý, nội tiết tố, mập, các vấn đề về cân nặng, các vấn đề lag não hay quên
      </p>
      <p className={clsx(classes.heroDescBase, classes.heroDescPhone)}>
        123456789
      </p>
    </Fragment>
  );
};

export default HeroDesc;

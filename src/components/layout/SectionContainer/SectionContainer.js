import useStyles from './styles';

const SectionContainer = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.sectionContainer}>{children}</div>;
};

export default SectionContainer;

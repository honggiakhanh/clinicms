import { Container } from '@material-ui/core';
import useStyles from './styles';

const BaseContainer = ({ children }) => {
  const classes = useStyles();
  return <Container className={classes.baseContainer}>{children}</Container>;
};

export default BaseContainer;

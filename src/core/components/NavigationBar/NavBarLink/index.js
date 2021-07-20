import { NavLink } from 'react-router-dom';
import useStyles from './styles';

const NavBarLink = ({ title, pathname }) => {
  const classes = useStyles();
  return (
    <NavLink
      to={pathname}
      className={classes.navBarLink}
      activeClassName={classes.navBarLinkActive}
    >
      {title}
    </NavLink>
  );
};

export default NavBarLink;

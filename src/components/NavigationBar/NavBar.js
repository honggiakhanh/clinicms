import React from 'react';
import { CardMedia } from '@material-ui/core';
import BaseContainer from '../layout/BaseContainer/Container';
import NavBarLogo from '../../assets/img/NavbarLogo.png';
import useStyles from './styles';

const NavBarItems = [
  {
    id: 1,
    title: 'Quản lý dịch vụ',
  },
  {
    id: 2,
    title: 'Quản lý thuốc',
  },
  {
    id: 3,
    title: 'Quản lý lượt khám',
  },
  {
    id: 4,
    title: 'Thống kê doanh thu',
  },
];

const NavBar = () => {
  const classes = useStyles();
  return (
    <BaseContainer>
      <nav className={classes.navBar}>
        <CardMedia
          component='img'
          src={NavBarLogo}
          className={classes.navBarLogo}
        />
        <ul className={classes.navBarLinks}>
          {NavBarItems.map(({ id, title }) => (
            <li className={classes.navBarLink} key={id}>
              {title}
            </li>
          ))}
        </ul>
      </nav>
    </BaseContainer>
  );
};

export default NavBar;

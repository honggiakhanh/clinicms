import { Link } from "react-router-dom";
import { CardMedia } from "@material-ui/core";
import BaseContainer from "core/layout/BaseContainer/Container";
import NavBarLink from "./NavBarLink";
import NavBarLogo from "assets/img/NavbarLogo.png";
import useStyles from "./styles";

const NavBarItems = [
  {
    id: 1,
    title: "Quản lý dịch vụ",
    pathname: "/service",
  },
  {
    id: 2,
    title: "Quản lý thuốc",
    pathname: "/medicine",
  },
  {
    id: 3,
    title: "Quản lý lượt khám",
    pathname: "/appointment",
  },
  {
    id: 4,
    title: "Thống kê doanh thu",
    pathname: "/revenue",
  },
];

const NavBar = () => {
  const classes = useStyles();
  return (
    <BaseContainer>
      <nav className={classes.navBar}>
        <Link to="/">
          <CardMedia
            component="img"
            src={NavBarLogo}
            className={classes.navBarLogo}
          />
        </Link>

        <ul className={classes.navBarLinks}>
          {NavBarItems.map(({ id, title, pathname }) => (
            <NavBarLink title={title} key={id} pathname={pathname} />
          ))}
        </ul>
      </nav>
    </BaseContainer>
  );
};

export default NavBar;

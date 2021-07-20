import React from "react";
import "./NavBar.css";
import NavBarLogo from "./NavbarLogo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={NavBarLogo} alt="LOGO" className="navbar-logo" />
      <ul className="navbar-item-container">
        <li className="navbar-item">Quản lý dịch vụ</li>
        <li className="navbar-item">Quản lý thuốc</li>
        <li className="navbar-item">Quản lý lượt khám</li>
        <li className="navbar-item">Thống kế doanh thu</li>
      </ul>
    </nav>
  );
};

export default NavBar;

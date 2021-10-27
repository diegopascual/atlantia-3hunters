import React from "react";
import styles from "./Header.module.css";
import logo from "images/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Atlantia Search" className={styles.headerLogo} />
    </header>
  );
};

export default Header;

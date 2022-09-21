import React from "react";
import styles from "./footer.module.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footer}>
      <Link to="/">
        <div className={styles["footer-icon"]}>
          <HomeIcon />
        </div>
      </Link>
      <Link to="/search">
        <div className={styles["footer-icon"]}>
          <SearchIcon />
        </div>
      </Link>
      <Link to="/cart">
        <div className={styles["footer-icon2"]}>
          <ShoppingCartIcon />
        </div>
      </Link>
      <Link to="/">
        <div className={styles["footer-icon"]}>
          <EmailIcon />
        </div>
      </Link>
      <Link to="/">
        
        <div className={styles["footer-icon"]}>
          <PersonIcon />
        </div>
      </Link>
    </div>
  );
}

export default Footer;

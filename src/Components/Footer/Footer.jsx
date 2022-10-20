import React, { useEffect, useState } from "react";
import styles from "./footer.module.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

function Footer() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(100);

  function navbarHandler() {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", navbarHandler);
      return () => {
        window.removeEventListener("scroll", navbarHandler);
      };
    }
    // eslint-disable-next-line
  }, [lastScrollY]);
  return (
    <div
      className={`${styles.footer} ${!showNavbar && styles["footer-scroll"]}`}
    >
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
      <Link to="/watchlist">
        <div className={styles["footer-icon"]}>
          <FormatListBulletedIcon />
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

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

  const footerLinks = [
    {
      link: "/",
      icon: <HomeIcon />,
    },
    {
      link: "/search",
      icon: <SearchIcon />,
    },
    {
      link: "/cart",
      icon: <ShoppingCartIcon />,
    },
    {
      link: "/watchList",
      icon: <FormatListBulletedIcon />,
    },
    {
      link: "/",
      icon: <PersonIcon />,
    },
  ];

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
      {footerLinks.map((i, idx) => (
        <Link to={i.link} key={idx}>
          <div
            className={
              styles[i.link === "/cart" ? "footer-icon2" : "footer-icon"]
            }
          >
            {i.icon}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Footer;

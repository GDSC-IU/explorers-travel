import classes from "../styles/navbar.module.scss";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import Link from "next/link";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { FaPlaneDeparture } from "react-icons/fa";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const openMenu = () => {
    setClick(!click);
    document.getElementById("menu").style.top = "100%";
  };
  const closeMenu = () => {
    setClick(!click);
    document.getElementById("menu").style.top = "-1000px";
  };
  const changeNavColor = () => {
    if (window.scrollY > 80) setScroll(true);
    else setScroll(false);
  };
  useEffect(() => {
    changeNavColor();
    window.addEventListener("scroll", changeNavColor);
  }, []);
  return (
    <nav
      className={`${classes.navbar} ${scroll ? classes.color_change : null} 
      ${click ? classes.color_change : null}`}
    >
      <div className={classes.navbar_container}>
        <Link href="/" passHref>
          <a className={classes.nav_header}>
            <FaPlaneDeparture />
            EXPLORER'S
          </a>
        </Link>
        {click ? (
          <CgClose className={classes.menubars} onClick={closeMenu} />
        ) : (
          <CgMenuRightAlt className={classes.menubars} onClick={openMenu} />
        )}
        <div className={classes.nav_menu} id="menu">
          <Link href="/" passHref>
            <a className={classes.nav_link}>Home</a>
          </Link>
          <Link href="/" passHref>
            <a className={classes.nav_link}>Images</a>
          </Link>
          <Link href="/" passHref>
            <a className={classes.nav_link}>Destinations</a>
          </Link>
        </div>
        <div className={classes.nav_btn}>
          <Button path="/" big="true" type="button">
            Travel Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

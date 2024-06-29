import "./Navbar.css";
import darkLogo from "../../assets/Logo_black.png";
import lightLogo from "../../assets/Logo_white.png";
import { useTheme } from "../../common/ThemeContext";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faSquareXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? faMoon : faSun;
  const logo = theme === "light" ? darkLogo : lightLogo;
  const themeText = theme === "light" ? "Dark" : "Light";
  const iconClass = theme === "light" ? "icon-moon" : "icon-sun";
  // const Menu_iconClass = theme === "light" ? "menu_moon" : "menu_sun";

  const menuRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(true);
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    setMenuOpen(false);
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <AnchorLink href="#home" className="logo">
        <img src={logo} alt="" className="user_logo" />
      </AnchorLink>

      {!menuOpen && (
        <FontAwesomeIcon
          icon={faBars}
          className="fa-solid nav_menu_open"
          onClick={openMenu}
        />
      )}
      <ul ref={menuRef} className="nav_menu">
        <FontAwesomeIcon
          icon={faSquareXmark}
          className="fa-solid nav_menu_close"
          onClick={closeMenu}
        />

        <li onClick={closeMenu}>
          <AnchorLink className="anchor_link" href="#home">
            Home
          </AnchorLink>
        </li>
        <li onClick={closeMenu}>
          <AnchorLink className="anchor_link" href="#about">
            About
          </AnchorLink>
        </li>
        <li onClick={closeMenu}>
          <AnchorLink className="anchor_link" href="#projects">
            Projects
          </AnchorLink>
        </li>
        <li onClick={closeMenu}>
          <AnchorLink className="anchor_link" href="#contact">
            Contact
          </AnchorLink>
        </li>
      </ul>

      <div className="colorMode" onClick={toggleTheme}>
        <FontAwesomeIcon icon={themeIcon} className={iconClass} id="modeIcon" />
        <span>{themeText}</span>
      </div>
    </div>
  );
};

export default Navbar;

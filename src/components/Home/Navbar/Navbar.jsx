import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../../assets/Home/x.svg";
import { ReactComponent as MenuIcon } from "../../../assets/Home/menu.svg";
import { ReactComponent as Logo } from "../../../assets/Home/logo.svg";
import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header" id="Navbar">
      <div className="logo-nav">
        <div className="logo-container">
          <Link to="Navbar" spy={true} smooth={true}>
            <Logo className="logo" />
          </Link>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link   to="about" spy={true} smooth={true}><div className="about">ABOUT</div></Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link   to="project" spy={true} smooth={true}><div className="about">PROJECT</div></Link>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
          <Link   to="contact" spy={true} smooth={true}><div className="about">CONTACT</div></Link>
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        
        <li onClick={closeMobileMenu}>
        <Link   to="contact" spy={true} smooth={true}><div className="about">CONTACT</div></Link>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Navbar;

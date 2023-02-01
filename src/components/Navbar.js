import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MdFilterHdr, MdShoppingBasket } from "react-icons/md";
import useIsMobile from "./useIsMobile";
import { useStateValue } from "./StateProvide";

function Navbar() {
  const [click, setClick] = useState(false);
  const isMobile = useIsMobile();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            IsraTravel
            <MdFilterHdr />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/order_list"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <div className="icS">
                  <MdShoppingBasket />
                  <span className="number-icon">{basket?.length}</span>
                </div>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/favorite_items"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Favorite Items
              </Link>
            </li>

            <li>
              <Link
                to="/log_in"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Log In
              </Link>
            </li>

            <li>
              <Link
                to="/sign_up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
        {!isMobile && <Button buttonStyle="btn--outline">SIGN UP</Button>}
      </nav>
    </>
  );
}

export default Navbar;

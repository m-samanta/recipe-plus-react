import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className={`menu ${menuOpen && "menu-open"}`}>
      <i className="menu__close" onClick={() => setMenuOpen(false)}>
        <FontAwesomeIcon icon={faTimes} />
      </i>
      <div className="menu__links">
        <Link to="/" className="menu__link" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link
          to="/recipe"
          className="menu__link"
          onClick={() => setMenuOpen(false)}
        >
          Recipe
        </Link>
      </div>
    </nav>
  );
};

export default Menu;

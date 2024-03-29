import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import React, { useContext, useState } from "react";
import LandingBackground from "../assets/food-header.jpg";
import PageLogo from "../assets/logo-white.png";
import { AppContext } from "../context/AppContext";
import Filter from "./ui/Filter";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import Menu from "./ui/Menu";

const Nav = () => {
  const {
    inputValue,
    handleKeyPress,
    handleIconClick,
    handleChange,
    focusInput,
    inputRef,
    inputPlaceholder,
  } = useContext(AppContext);

  const [menuOpen, setMenuOpen] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Navigate to /recipe page
  const handleSearch = (e) => {
    e.preventDefault();
    if (location.pathname !== "/recipe") {
      navigate("/recipe");
    }
  };

  return (
    <>
      <section id="landing">
        <div className="recipe__background">
          <figure className="recipe__background__wrapper">
            <div className="nav__content">
              <div className="nav__left">
                <figure className="nav__logo__wrapper">
                  <img src={PageLogo} alt="" className="nav__logo" />
                </figure>
                <Link to="/" className="nav__link__1">
                  Home
                </Link>
                <Link to="/recipe" className="nav__link__2">
                  Recipe
                </Link>
              </div>
              <div className="nav__right">
                <div className="nav__input__wrapper">
                  <form onSubmit={handleSearch}>
                    <input
                      ref={inputRef}
                      type="text"
                      className="nav__input"
                      placeholder={inputPlaceholder}
                      value={inputValue}
                      onChange={handleChange}
                      onKeyDown={handleKeyPress}
                    />
                    <i className="nav__search" onClick={focusInput}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </i>
                  </form>
                </div>
                <i className="nav__user">
                  {" "}
                  <FontAwesomeIcon icon={faCircleUser} />
                </i>
                <i className="nav__menu" onClick={() => setMenuOpen(true)}>
                  <FontAwesomeIcon icon={faBars} />
                </i>
              </div>
            </div>
            <img
              src={LandingBackground}
              alt=""
              className="recipe__background__img"
            />
            <div className="recipe__background__text">
              <h1 className="recipe__background__title">
                Recipe <span className="textcolor">+</span>
              </h1>
              <h3 className="recipe__background__para">
                With over <span className="textcolor">100</span> recipes, the
                choice for <span className="textcolor">your next meal</span> is
                endless!
              </h3>
              <div className="recipe__background__search">
                <div className="recipe__input__wrapper form__submit">
                  <form onSubmit={handleSearch}>
                    <input
                      type="text"
                      className="recipe__input"
                      placeholder={inputPlaceholder}
                      value={inputValue}
                      onChange={handleChange}
                      onKeyDown={handleKeyPress}
                    />
                    <i
                      className="recipe__search"
                      onClick={(e) => {
                        handleIconClick();
                        handleSearch(e);
                      }}
                    >
                      {" "}
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </i>
                  </form>
                </div>
                <h4
                  className="recipe__background__filter"
                  onClick={() => setFilterOpen(true)}
                >
                  Advanced Filter
                </h4>
              </div>
            </div>
          </figure>
        </div>
      </section>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Filter filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
    </>
  );
};

export default Nav;

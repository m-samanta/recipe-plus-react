import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import React from 'react';
import LandingBackground from "../assets/food-header.jpg";
import PageLogo from "../assets/logo-white.png";



const Nav = () => {
    return (
        <section id="landing">
        <div className="recipe__background">
          <figure className="recipe__background__wrapper">
            <div className="nav__content">
              <div className="nav__left">
                <figure className="nav__logo__wrapper">
                  <img src={PageLogo} alt="" className="nav__logo" />
                </figure>
                <a href="" className="nav__link">Home</a>
                <a href="" className="nav__link">Contact</a>
              </div>
              <div className="nav__right">
                <div className="nav__input__wrapper">
                  <input
                    type="text"
                    className="nav__input"
                    placeholder="Find a Recipe"
                  />
                  <i className="nav__search"> 
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </i>
                </div>
                <i
                    className="nav__user"> <FontAwesomeIcon icon={faCircleUser} />
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
                With over <span className="textcolor">100</span> recipes, the choice
                for <span className="textcolor">your next meal</span> is endless!
              </h3>
              <div className="recipe__background__search">
                <div className="recipe__input__wrapper form__submit">
                  <input
                    type="text"
                    className="recipe__input"
                    placeholder="Find a Recipe"
                  />
                  <i
                    className="recipe__search"> <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </i>
                </div>
              </div>
              <h4 className="recipe__background__filter">
                Advanced Filter
              </h4>
            </div>
          </figure>
        </div>
      </section>
    );
}

export default Nav;

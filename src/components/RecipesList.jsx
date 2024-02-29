import Img1 from "../assets/postertest1.jpg"
import Img2 from "../assets/postertest2.jpg"
import Img3 from "../assets/postertest3.jpg"
import Img4 from "../assets/postertest4.jpg"
import Img5 from "../assets/postertest5.jpg"
import Img6 from "../assets/postertest6.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faList,
  faMagnifyingGlass,
  faSpinner,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const RecipeList = () => {
  return (
    <>
      <section id="recipes">
        <div className="container">
          <div className="row">
            <div className="recipes__content">
              <div className="recipes__top">
                <h2 className="recipes__top__title">Search results for:</h2>
                <h2 className="recipes__top__title_landing">Top searches:</h2>
                <h2 className="recipe__search__result">""</h2>
              </div>
              <div className="recipes__list">
                <div className="recipe">
                  <figure className="recipe__img__wrapper">
                    <img
                      src={Img1}
                      alt=""
                      className="recipe__img"
                    />
                    <h3 className="recipe__info__title">
                      Pizza Express Margherita
                    </h3>
                    <div className="recipe__info__list">
                      <div className="recipe__info recipe__info1">
                        <i className="recipe__info__icon">
                          <FontAwesomeIcon icon={faEarthAmericas} />
                        </i>
                        <p className="recipe__info__text">Italian</p>
                      </div>
                      <div className="recipe__info recipe__info2">
                      <i className="recipe__info__icon">
                          <FontAwesomeIcon icon={faStar} />
                        </i>
                        <p className="recipe__info__text">Miscellanous</p>
                      </div>
                      <div className="recipe__info recipe__info3">
                      <i className="recipe__info__icon">
                          <FontAwesomeIcon icon={faList} />
                        </i>
                        <p className="recipe__info__text">Water...</p>
                      </div>
                    </div>
                  </figure>
                  <h4 className="recipe__title">Pizza Express Margherita</h4>
                </div>
                <div className="recipe">
                  <figure className="recipe__img__wrapper">
                    <img
                      src={Img2}
                      alt=""
                      className="recipe__img"
                    />
                    <h3 className="recipe__info__title">Vegan Lasagna</h3>
                    <div className="recipe__info__list">
                      <div className="recipe__info recipe__info1">
                      <i className="recipe__info__icon">
                          <FontAwesomeIcon icon={faEarthAmericas} />
                        </i>
                        <p className="recipe__info__text">Italian</p>
                      </div>
                      <div className="recipe__info recipe__info2">
                      <i className="recipe__info__icon">
                          <FontAwesomeIcon icon={faStar} />
                        </i>
                        <p className="recipe__info__text">Vegan</p>
                      </div>
                      <div className="recipe__info recipe__info3">
                      <i className="recipe__info__icon">
                          <FontAwesomeIcon icon={faList} />
                        </i>
                        <p className="recipe__info__text">green red lentils...</p>
                      </div>
                    </div>
                  </figure>
                  <h4 className="recipe__title">Vegan Lasagna</h4>
                </div>
                <div className="recipe">
                  <figure className="recipe__img__wrapper">
                    <img
                      src={Img3}
                      alt=""
                      className="recipe__img"
                    />
                    <h3 className="recipe__info__title">Big Mac</h3>
                    <div className="recipe__info__list">
                      <div className="recipe__info recipe__info1">
                      <i className="recipe__info__icon">
                          <FontAwesomeIcon icon={faEarthAmericas} />
                        </i>
                        <p className="recipe__info__text">American</p>
                      </div>
                      <div className="recipe__info recipe__info2">
                      <i className="recipe__info__icon">
                          <FontAwesomeIcon icon={faStar} />
                        </i>
                        <p className="recipe__info__text">Beef</p>
                      </div>
                      <div className="recipe__info recipe__info3">
                      <i className="recipe__info__icon">
                          <FontAwesomeIcon icon={faList} />
                        </i>
                        <p className="recipe__info__text">Minced Beef...</p>
                      </div>
                    </div>
                  </figure>
                  <h4 className="recipe__title">Big Mac</h4>
                </div>
                <div className="recipe">
                  <figure className="recipe__img__wrapper">
                    <img
                      src={Img4}
                      alt=""
                      className="recipe__img"
                    />
                    <h3 className="recipe__info__title">Poutine</h3>
                    <div className="recipe__info__list">
                      <div className="recipe__info recipe__info1">
                      <i className="recipe__info__icon">
                          <FontAwesomeIcon icon={faEarthAmericas} />
                        </i>
                        <p className="recipe__info__text">Canadian</p>
                      </div>
                      <div className="recipe__info recipe__info2">
                      <i className="recipe__info__icon">
                          <FontAwesomeIcon icon={faStar} />
                        </i>
                        <p className="recipe__info__text">Miscellanous</p>
                      </div>
                      <div className="recipe__info recipe__info3">
                      <i className="recipe__info__icon">
                          <FontAwesomeIcon icon={faList} />
                        </i>
                        <p className="recipe__info__text">Vegetable Oil...</p>
                      </div>
                    </div>
                  </figure>
                  <h4 className="recipe__title">Poutine</h4>
                </div>
                <div className="recipe">
                  <figure className="recipe__img__wrapper">
                    <img
                      src={Img5}
                      alt=""
                      className="recipe__img"
                    />
                    <h3 className="recipe__info__title">Kentucky Fried Chicken</h3>
                    <div className="recipe__info__list">
                      <div className="recipe__info recipe__info1">
                      <i className="recipe__info__icon">
                          <FontAwesomeIcon icon={faEarthAmericas} />
                        </i>
                        <p className="recipe__info__text">American</p>
                      </div>
                      <div className="recipe__info recipe__info2">
                      <i className="recipe__info__icon">
                          <FontAwesomeIcon icon={faStar} />
                        </i>
                        <p className="recipe__info__text">Chicken</p>
                      </div>
                      <div className="recipe__info recipe__info3">
                      <i className="recipe__info__icon">
                          <FontAwesomeIcon icon={faList} />
                        </i>
                        <p className="recipe__info__text">Chicken...</p>
                      </div>
                    </div>
                  </figure>
                  <h4 className="recipe__title">Kentucky Fried Chicken</h4>
                </div>
                <div className="recipe">
                  <figure className="recipe__img__wrapper">
                    <img
                      src={Img6}
                      alt=""
                      className="recipe__img"
                    />
                    <h3 className="recipe__info__title">
                      Salmon Eggs Eggs Benedict
                    </h3>
                    <div className="recipe__info__list">
                      <div className="recipe__info recipe__info1">
                      <i className="recipe__info__icon">
                          <FontAwesomeIcon icon={faEarthAmericas} />
                        </i>
                        <p className="recipe__info__text">American</p>
                      </div>
                      <div className="recipe__info recipe__info2">
                      <i className="recipe__info__icon">
                          <FontAwesomeIcon icon={faStar} />
                        </i>
                        <p className="recipe__info__text">Breakfast</p>
                      </div>
                      <div className="recipe__info recipe__info3">
                      <i className="recipe__info__icon">
                          <FontAwesomeIcon icon={faList} />
                        </i>
                        <p className="recipe__info__text">Eggs...</p>
                      </div>
                    </div>
                  </figure>
                  <h4 className="recipe__title">Salmon Eggs Eggs Benedict</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecipeList;

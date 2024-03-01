import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faList,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const RecipeBanner = ({ recipe }) => {
  return (
    <>
      <div className="recipe">
        <figure className="recipe__img__wrapper">
          <img src={recipe.strMealThumb} alt="" className="recipe__img" />
          <h3 className="recipe__info__title">{recipe.strMeal}</h3>
          <div className="recipe__info__list">
            <div className="recipe__info recipe__info1">
              <i className="recipe__info__icon">
                <FontAwesomeIcon icon={faEarthAmericas} />
              </i>
              <p className="recipe__info__text">{recipe.strArea}</p>
            </div>
            <div className="recipe__info recipe__info2">
              <i className="recipe__info__icon">
                <FontAwesomeIcon icon={faStar} />
              </i>
              <p className="recipe__info__text">{recipe.strCategory}</p>
            </div>
            <div className="recipe__info recipe__info3">
              <i className="recipe__info__icon">
                <FontAwesomeIcon icon={faList} />
              </i>
              <p className="recipe__info__text">
                {recipe.strIngredient1 &&
                  recipe.strIngredient1.substring(0, 5) + "..."}
              </p>
            </div>
          </div>
        </figure>
        <h4 className="recipe__title">{recipe.strMeal}</h4>
      </div>
    </>
  );
};

export default RecipeBanner;

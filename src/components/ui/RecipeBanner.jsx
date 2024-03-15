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
      <Link to={`/recipe/${recipe.idMeal}`} className="recipe">
        <figure className="recipe__img__wrapper">
          <img src={recipe.strMealThumb} alt="" className="recipe__img" />
          <h3 className="recipe__info__title">{recipe.strMeal}</h3>
          <div className="recipe__info__list">
            <div className="recipe__info recipe__info1">
              <i className="recipe__info__icon">
                <FontAwesomeIcon icon={faEarthAmericas} />
              </i>
              <p className="recipe__info__text">
                {recipe.strArea ? recipe.strArea : "Click for info"}
              </p>
            </div>
            <div className="recipe__info recipe__info2">
              <i className="recipe__info__icon">
                <FontAwesomeIcon icon={faStar} />
              </i>
              <p className="recipe__info__text">
                {recipe.strCategory ? recipe.strCategory : "Click for info"}
              </p>
            </div>
            <div className="recipe__info recipe__info3">
              <i className="recipe__info__icon">
                <FontAwesomeIcon icon={faList} />
              </i>
              <p className="recipe__info__text">
                {recipe.strIngredient1
                  ? recipe.strIngredient1.substring(0, 5) + "..."
                  : "Click for info"}
              </p>
            </div>
          </div>
        </figure>
        <h4 className="recipe__title">{recipe.strMeal}</h4>
      </Link>
    </>
  );
};

export default RecipeBanner;

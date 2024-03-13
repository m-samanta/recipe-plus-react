import React from "react";

const RecipeDetails = () => {
  return (
    <>
      <div className="container">
        <div className="recipe__page__wrapper">
          <figure className="recipe__page__img__wrapper skeleton">
            <div className="recipe__page__img--skeleton" src="" alt="" />
          </figure>
          <div className="recipe__page__info__row__1">
            <h2 className="recipe__page__title--skeleton skeleton"></h2>
            <div className="recipe__page__info">
              <div className="recipe__page__text__container__1">
                <h2 className="recipe__page__base__text">Location: </h2>
                <h2 className="recipe__page__text--skeleton skeleton"></h2>
              </div>
              <div className="recipe__page__text__container__1">
                <h2 className="recipe__page__base__text">Category: </h2>
                <h2 className="recipe__page__text--skeleton skeleton"></h2>
              </div>
              <div className="recipe__page__text__container__2">
                <h2 className="recipe__page__base__text">Ingredients:</h2>
                <ul>
              <li className="recipe__page__list--skeleton"></li>
              <li className="recipe__page__list--skeleton"></li>
              <li className="recipe__page__list--skeleton"></li>
              <li className="recipe__page__list--skeleton"></li>
              <li className="recipe__page__list--skeleton"></li>
              <li className="recipe__page__list--skeleton"></li>
              <li className="recipe__page__list--skeleton"></li>
              <li className="recipe__page__list--skeleton"></li>
              <li className="recipe__page__list--skeleton"></li>
              <li className="recipe__page__list--skeleton"></li>
            </ul>
              </div>
            </div>
          </div>
          <div className="recipe__page__info__row__2">
            <h2 className="recipe__page__base__text">Instructions:</h2>
            <ul className="recipe__page__para__wrapper">
              <li className="recipe__page__para--skeleton"></li>
              <li className="recipe__page__para--skeleton"></li>
              <li className="recipe__page__para--skeleton"></li>
              <li className="recipe__page__para--skeleton"></li>
              <li className="recipe__page__para--skeleton"></li>
              <li className="recipe__page__para--skeleton"></li>
              <li className="recipe__page__para--skeleton"></li>
              <li className="recipe__page__para--skeleton"></li>
            </ul>

            <div className="recipe__page__video">
              <h2 className="recipe__page__base__text">Youtube Video:</h2>
              <br />
              <iframe className="recipe__page__video skeleton" width="560" height="315"></iframe>
            </div>
            <h2 className="recipe__page__base__text">
              Source: <span className="recipe__page__source--skeleton skeleton"/>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;

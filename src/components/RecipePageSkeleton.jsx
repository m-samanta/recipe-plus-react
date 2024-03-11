import React from 'react';

const RecipeDetails = () => {
    return (
<>
<div className="container">
        <div className="recipe__page__wrapper">
              <figure className="recipe__page__img__wrapper">
                <img
                  className="recipe__page__img"
                  src=""
                  alt=""
                />
              </figure>
              <div className="recipe__page__info__row__1">
                <h2 className="recipe__page__title">
                  
                </h2>
                <div className="recipe__page__info">
                  <div className="recipe__page__text__container__1">
                  <h2 className="recipe__page__base__text">Location: </h2>
                  <h2 className="recipe__page__text"> 
                  </h2>
                  </div>
                  <div className="recipe__page__text__container__1">
                  <h2 className="recipe__page__base__text">Category: </h2>
                  <h2 className="recipe__page__text">
                  </h2>
                  </div>
                  <div className="recipe__page__text__container__2">
              <h2 className="recipe__page__base__text">Ingredients:</h2>
              <ul>
                
              </ul>
                  </div>
                </div>
              </div>
              <div className="recipe__page__info__row__2">
              <h2 className="recipe__page__base__text">
              Instructions:
              </h2>
              <div className="recipe__page__para__wrapper">
    <p className="recipe__page__para">
    </p>
</div>

                <div className="recipe__page__video">
                  <h2 className="recipe__page__base__text">
                  Youtube Video:
                  </h2>
                  <br />
                  <iframe
                    width="560"
                    height="315"
                  ></iframe>
                </div>
                <p>
                  Source:{" "}
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  </a>
                </p>
              </div>
        </div>
      </div>
</>
    );
}

export default RecipeDetails;

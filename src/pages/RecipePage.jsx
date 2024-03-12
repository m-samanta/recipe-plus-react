import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import RecipesList from "../components/RecipesList";

const RecipePage = () => {
  const { recipes } = useContext(AppContext);
  const { idMeal } = useParams();
  const selectedRecipe = recipes.find((recipe) => recipe.idMeal === idMeal);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="container">
        <div className="recipe__page__wrapper">
          {selectedRecipe && (
            <>
              <figure className="recipe__page__img__wrapper">
                <img
                  className="recipe__page__img"
                  src={selectedRecipe.strMealThumb}
                  alt=""
                />
              </figure>
              <div className="recipe__page__info__row__1">
                <h2 className="recipe__page__title">
                  {selectedRecipe.strMeal}
                </h2>
                <div className="recipe__page__info">
                  <div className="recipe__page__text__container__1">
                  <h2 className="recipe__page__base__text">Location: </h2>
                  <h2 className="recipe__page__text"> {selectedRecipe.strArea}
                  </h2>
                  </div>
                  <div className="recipe__page__text__container__1">
                  <h2 className="recipe__page__base__text">Category: </h2>
                  <h2 className="recipe__page__text"> {selectedRecipe.strCategory}
                  </h2>
                  </div>
                  <div className="recipe__page__text__container__2">
              <h2 className="recipe__page__base__text">Ingredients:</h2>
              <ul>
                {Object.keys(selectedRecipe)
                  .filter(
                    (key) =>
                      key.startsWith("strIngredient") && selectedRecipe[key]
                  )
                  .map((key) => (
                    <li key={key}>
                      {selectedRecipe[key]} - {""}
                      {selectedRecipe[`strMeasure${key.slice(13)}`]}
                    </li>
                  ))}
              </ul>
                  </div>
                </div>
              </div>
              <div className="recipe__page__info__row__2">
              <h2 className="recipe__page__base__text">
              Instructions:
              </h2>
              <div className="recipe__page__para__wrapper">
  {selectedRecipe.strInstructions.split('.').map((sentence, index) => (
    <p key={index} className="recipe__page__para">
      {sentence.trim()}
    </p>
  ))}
</div>

              {selectedRecipe.strYoutube && (
                <div className="recipe__page__video">
                  <h2 className="recipe__page__base__text">
                  Youtube Video:
                  </h2>
                  <br />
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${
                      selectedRecipe.strYoutube.split("v=")[1]
                    }`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              )}
              {selectedRecipe.strSource && (
                <h2 className="recipe__page__base__text">
                  Source:{" "}
                  <a
                    href={selectedRecipe.strSource}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedRecipe.strSource}
                  </a>
                </h2>
              )}
              </div>
            </>
          )}
        </div>
      </div>
      <RecipesList />
    </>
  );
};

export default RecipePage;

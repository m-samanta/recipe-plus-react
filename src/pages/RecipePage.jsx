import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipesList from "../components/RecipesList";
import RecipePageSkeleton from "../components/RecipePageSkeleton";
import { useStore } from "../store";
import ReactPlayer from "react-player/lazy";

const RecipePage = () => {
  const { recipeData, fetchRecipeById, fetchRecipes } = useStore();
  const { idMeal } = useParams();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showSkeleton, setShowSkeleton] = useState(true);

  // Select recipe data based on idMeal for detailed display
  useEffect(() => {
    if (idMeal) {
      fetchRecipeById(idMeal);
      fetchRecipes();
    }
  }, [idMeal]);

  useEffect(() => {
    setSelectedRecipe(recipeData);
  }, [recipeData]);

  // Forced loading state to show skeleton before loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      {showSkeleton ? (
        <RecipePageSkeleton />
      ) : (
        <div className="container">
          <div className="recipe__page__wrapper">
            {selectedRecipe && (
              <>
                <figure className="recipe__page__img__wrapper">
                  <img
                    className="recipe__page__img"
                    src={selectedRecipe[0].strMealThumb}
                    alt=""
                  />
                </figure>
                <div className="recipe__page__info__row__1">
                  <h2 className="recipe__page__title">
                    {selectedRecipe[0].strMeal}
                  </h2>
                  <div className="recipe__page__info">
                    <div className="recipe__page__text__container__1">
                      <h2 className="recipe__page__base__text">Location: </h2>
                      <h2 className="recipe__page__text">
                        {" "}
                        {selectedRecipe[0].strArea}
                      </h2>
                    </div>
                    <div className="recipe__page__text__container__1">
                      <h2 className="recipe__page__base__text">Category: </h2>
                      <h2 className="recipe__page__text">
                        {" "}
                        {selectedRecipe[0].strCategory}
                      </h2>
                    </div>
                    <div className="recipe__page__text__container__2">
                      <h2 className="recipe__page__base__text">Ingredients:</h2>
                      <ul>
                        {Object.keys(selectedRecipe[0])
                          .filter(
                            (key) =>
                              key.startsWith("strIngredient") &&
                              selectedRecipe[0][key]
                          )
                          .map((key) => (
                            <li key={key}>
                              {selectedRecipe[0][key]} - {""}
                              {selectedRecipe[0][`strMeasure${key.slice(13)}`]}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="recipe__page__info__row__2">
                  <h2 className="recipe__page__base__text">Instructions:</h2>
                  <ul className="recipe__page__para__wrapper">
                    {selectedRecipe[0].strInstructions
                      .split(".")
                      .slice(0, -1)
                      .map((sentence, index) => (
                        <li key={index} className="recipe__page__para">
                          {sentence.trim()}.
                        </li>
                      ))}
                  </ul>

                  {selectedRecipe[0].strYoutube && (
                    <div className="recipe__page__video__wrapper">
                      <h2 className="recipe__page__base__text">
                        Youtube Video:
                      </h2>
                      <div className="recipe__page__player__wrapper">

                      <ReactPlayer
                      width="100%"
                      height="100%"
                        url={`https://www.youtube.com/embed/${
                          selectedRecipe[0].strYoutube.split("v=")[1]
                        }`}
                        controls={true}
                      />
                      </div>
                    </div>
                  )}
                  {selectedRecipe[0].strSource && (
                    <h2 className="recipe__page__base__text">
                      Source:{" "}
                      <a
                        className="recipe__page__source"
                        href={selectedRecipe[0].strSource}
                      >
                        {selectedRecipe[0].strSource}
                      </a>
                    </h2>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <RecipesList />
    </>
  );
};

export default RecipePage;

import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import RecipesList from "../components/RecipesList";

const RecipePage = () => {
  const { recipes } = useContext(AppContext);
  const { idMeal } = useParams();
  const selectedRecipe = recipes.find((recipe) => recipe.idMeal === idMeal);

  useEffect(() => {
    window.scrollTo(0, 0)
  })
  
  return (
    <>
      <div className="container">

      <div className="recipe__page__wrapper">
  {selectedRecipe && (
    <>
      <img className="recipe__page__img"
        src={selectedRecipe.strMealThumb}
        alt=""
      />
      <h2>{selectedRecipe.strMeal}</h2>
      <p><strong>Category:</strong> {selectedRecipe.strCategory}</p>
      <p><strong>Location:</strong> {selectedRecipe.strArea}</p>
      <p><strong>Instructions:</strong> {selectedRecipe.strInstructions}</p>
      <p><strong>Ingredients:</strong></p>
      <ul>
        {Object.keys(selectedRecipe)
          .filter(key => key.startsWith('strIngredient') && selectedRecipe[key])
          .map(key => (
            <li key={key}>
              {selectedRecipe[key]} - {selectedRecipe[`strMeasure${key.slice(13)}`]}
            </li>
          ))}
      </ul>
      {selectedRecipe.strYoutube && (
        <div>
          <strong>Youtube Video:</strong><br />
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${selectedRecipe.strYoutube.split('v=')[1]}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      )}
      {selectedRecipe.strSource && (
        <p><strong>Source:</strong> <a href={selectedRecipe.strSource} target="_blank" rel="noopener noreferrer">{selectedRecipe.strSource}</a></p>
      )}
    </>
  )}
</div>

      </div>
      <RecipesList />
    </>
  );
};

export default RecipePage;

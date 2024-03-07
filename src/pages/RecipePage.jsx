import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import RecipesList from "../components/RecipesList";

const RecipePage = () => {
  const { recipes } = useContext(AppContext);
  const { idMeal } = useParams();
  const selectedRecipe = recipes.find((recipe) => recipe.idMeal === idMeal);

  return (
    <>
      <div className="container">

      <div className="recipe__page__wrapper">
        {selectedRecipe && (
          <>
            <img
              src={selectedRecipe.strMealThumb}
              alt=""
            />
            <h2>{selectedRecipe.strMeal}</h2>
          </>
        )}
      </div>
      </div>
      <RecipesList />
    </>
  );
};

export default RecipePage;

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

const RecipePage = () => {
  const { recipes } = useContext(AppContext);
  const { idMeal } = useParams();
  const selectedRecipe = recipes.find((recipe) => recipe.idMeal === idMeal);

  return (
    <>
      <div className="recipe__page__wrapper__test">
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
    </>
  );
};

export default RecipePage;

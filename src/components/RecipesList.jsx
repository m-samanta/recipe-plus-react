import Img1 from "../assets/postertest1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faList,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import RecipeBanner from "./ui/RecipeBanner";
import RecipeBannerSkeleton from "./ui/RecipeBannerSkeleton";

const RecipeList = () => {
  const { recipes } = useContext(AppContext)

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
              {recipes?.length > 0
              ? recipes
                  .slice(0, 6)
                  .map((recipe) => (
                    <RecipeBanner key={recipe.idMeal} recipe={recipe} />
                  )) 
              : new Array(6).fill(0).map((_, index) => <RecipeBannerSkeleton key={index} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecipeList;

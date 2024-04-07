import React, { useEffect, useState } from "react";
import { useStore } from "../store";
import RecipeBanner from "./ui/RecipeBanner";
import RecipeBannerSkeleton from "./ui/RecipeBannerSkeleton";

const RecipesList = () => {
  const { recipes, searchMade, searchQuery } = useStore();
  const [showBanners, setShowBanners] = useState(false);

  // Forced loading state to show skeleton before loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanners(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="recipes__content">
              <div className="recipes__top">
                {searchMade && (
                  <>
                    <h2 className="recipes__top__title">Search results for:</h2>
                    <h2 className="recipe__search__result">"{searchQuery}"</h2>
                  </>
                )}
                {!searchMade && (
                  <h2 className="recipes__top__title_landing">Top searches:</h2>
                )}
              </div>
              <div className="recipes__list">
                {showBanners
                  ? recipes?.length > 0
                    ? recipes
                        .slice(0, 6)
                        .map((recipe) => (
                          <RecipeBanner key={recipe.idMeal} recipe={recipe} />
                        ))
                    : new Array(6)
                        .fill(0)
                        .map((_, index) => <RecipeBannerSkeleton key={index} />)
                  : new Array(6)
                      .fill(0)
                      .map((_, index) => <RecipeBannerSkeleton key={index} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecipesList;

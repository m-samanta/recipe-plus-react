import React, { useEffect } from "react";
import RecipesList from "../components/RecipesList";
import { useStore } from "../store";

function HomePage() {
  const { handleHomePage, fetchRecipes } = useStore();

  useEffect(() => {
    handleHomePage();
    fetchRecipes();
  }, [fetchRecipes]);

  // Scroll to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <RecipesList />
    </>
  );
}

export default HomePage;

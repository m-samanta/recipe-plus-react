import React, { useEffect } from "react";
import RecipesList from "../components/RecipesList";
import { useStore } from "../store";

const SearchPage = () => {
  const { handleSearchPage, fetchRecipes, searchQuery } = useStore();

  useEffect(() => {
    handleSearchPage();
    fetchRecipes();
  }, [fetchRecipes, searchQuery]);

  // Scroll to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <RecipesList />
    </>
  );
};

export default SearchPage;

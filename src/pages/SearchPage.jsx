import React, { useEffect } from "react";
import RecipesList from "../components/RecipesList";
import { useStore } from "../store";

const SearchPage = () => {
  const { handleSearchPage, fetchRecipes, setSearchMade, query } = useStore();

  useEffect(() => {
    handleSearchPage()
    fetchRecipes(query);
    setSearchMade(true);
  }, [fetchRecipes, setSearchMade]); 


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

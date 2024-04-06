import React, { useEffect } from "react";
import RecipesList from "../components/RecipesList";
import { useStore } from "../store";

function HomePage() {
  const { handleHomePage, fetchRecipes, setSearchMade } = useStore();

  useEffect(() => {
    handleHomePage()
    fetchRecipes("chicken");
    setSearchMade(false);
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

export default HomePage;
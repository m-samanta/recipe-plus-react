import React, { useContext, useEffect } from "react";
import RecipesList from "../components/RecipesList";
import { AppContext } from "../context/AppContext";

const HomePage = () => {
  const { handleHomePage } = useContext(AppContext);

  // Load home page recipes
  useEffect(() => {
    handleHomePage();
  }, [handleHomePage]);

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

import React, { useContext, useEffect } from "react";
import RecipesList from "../components/RecipesList";
import { AppContext } from "../context/AppContext";

const HomePage = () => {
    const {
        handleHomePage,
      } = useContext(AppContext);

useEffect(() => {
    handleHomePage();
}, [handleHomePage])

    useEffect(() => {
        window.scrollTo(0, 0)
      })

  return (
    <>
      <RecipesList />
    </>
  );
};

export default HomePage;

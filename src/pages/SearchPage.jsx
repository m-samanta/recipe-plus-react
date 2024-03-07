import React, { useContext, useEffect } from 'react';
import RecipesList from '../components/RecipesList';
import { AppContext } from '../context/AppContext';

const SearchPage = () => {
    const {
        handleIconClick,
      } = useContext(AppContext);

useEffect(() => {
    handleIconClick();
}, [handleIconClick])

    useEffect(() => {
        window.scrollTo(0, 0)
      })

    return (
        <>
        <RecipesList />
        </> 
    );
}

export default SearchPage;

import { create } from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  filter: "search.php?s",
  inputPlaceholder: "Find a Recipe by Name",
  recipes: [],
  searchMade: false,
  recipeData: null,
  query: "",

  handleFilterChange: (newFilter) => {
    let placeholderText = "";

    switch (newFilter) {
      case "search.php?s":
        placeholderText = "Find a Recipe by Name";
        break;
      case "filter.php?a":
        placeholderText = "Find a Recipe by Area";
        break;
      case "filter.php?c":
        placeholderText = "Find a Recipe by Category";
        break;
    }
    set({ filter: newFilter, inputPlaceholder: placeholderText })
  },

  fetchRecipes: async (query) => {
    const filterValue =
    query === "chicken"
      ? "search.php?s=chicken"
      : `${useStore.getState().filter}=${useStore.getState().query}`;
    const searchURL = `https://themealdb.com/api/json/v1/1/${filterValue}`;

    const response = await axios.get(searchURL);
    const { meals } = response.data;
    set({ recipes: meals });
  },

  setSearchMade: (value) => {
    set({ searchMade: value });
  },

  handleHomePage: () => {
    set({ searchMade: false });
  },

  handleSearchPage: () => {
    set({ searchMade: true });
  },

  fetchRecipeById: async (idMeal) => {
    const searchURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    try {
      const response = await axios.get(searchURL);
      const { data: recipeData } = response;
      set({ recipeData: recipeData.meals });
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  },

  setRecipeData: (newRecipeData) => {
    set({ recipeData: newRecipeData });
  },

}));

export { useStore };
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { AppContext } from "./context/AppContext";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import RecipePage from "./pages/RecipePage";
import SearchPage from "./pages/SearchPage";

function App() {
  const [filter, setFilter] = useState("search.php?s");
  const [recipes, setRecipes] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [inputPlaceholder, setInputPlaceholder] = useState(
    "Find a Recipe by Name"
  );
  const [searchMade, setSearchMade] = useState(false);
  const inputRef = useRef(null);

  // Fetch + store data for homepage (static recipes - chicken)
  async function fetchChickenRecipes() {
    const searchURL = `https://themealdb.com/api/json/v1/1/search.php?s=chicken`;
    const response = await axios.get(searchURL);
    const { data: recipesData } = response;
    setRecipes(recipesData.meals);
  }

  // Fetch + store data for recipepage (dynamic recipes based on search made)
  async function fetchRecipes(searchQuery) {
    const searchURL = `https://themealdb.com/api/json/v1/1/${filter}=${searchQuery}`;
    const response = await axios.get(searchURL);
    const { data: recipesData } = response;
    setRecipes(recipesData.meals);
  }

// Fetch data based on idMeal
async function fetchRecipeById(idMeal) {
  const searchURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  const response = await axios.get(searchURL);
  const { data: recipeData } = response;
  return recipeData.meals;
}

  // Filter function
  const handleFilterChange = (newFilter) => {
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

    setFilter(newFilter);
    setInputPlaceholder(placeholderText);
  };

  // Choosing data based on if a search is made/clicked on recipe page
  useEffect(() => {
    if (!searchMade) {
      fetchChickenRecipes();
    } else {
      fetchRecipes(searchQuery);
    }
  }, [searchMade, searchQuery]);

  // Search via pressing Enter
  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      setSearchQuery(inputValue.trim());
      setSearchMade(true);
    }
  };

  // Search via click
  const handleIconClick = () => {
    setSearchQuery(inputValue.trim());
    setSearchMade(true);
  };

  // Turning on homepage data when accessing homepage
  const handleHomePage = () => {
    setSearchMade(false);
  }

  // Focus nav searchbar
  const focusInput = () => {
    inputRef.current.focus();
  };

  // Update fetching text to latest searched text
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        searchQuery,
        recipes,
        handleKeyPress,
        handleIconClick,
        handleChange,
        focusInput,
        inputRef,
        handleFilterChange,
        inputPlaceholder,
        searchMade,
        handleHomePage,
        fetchRecipeById,
        setRecipes
      }}
    >
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:idMeal" element={<RecipePage />} />
          <Route path="/recipe" element={<SearchPage />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;

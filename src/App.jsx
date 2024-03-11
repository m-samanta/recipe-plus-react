import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { AppContext } from "./context/AppContext";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import RecipePage from "./pages/RecipePage";
import SearchPage from "./pages/SearchPage";
import RecipePageSkeleton from "./components/RecipePageSkeleton"

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

  async function fetchChickenRecipes() {
    const searchURL = `https://themealdb.com/api/json/v1/1/search.php?s=chicken`;
    const response = await axios.get(searchURL);
    const { data: recipesData } = response;
    setRecipes(recipesData.meals);
  }

  async function fetchRecipes(searchQuery) {
    const searchURL = `https://themealdb.com/api/json/v1/1/${filter}=${searchQuery}`;
    const response = await axios.get(searchURL);
    const { data: recipesData } = response;

    setRecipes(recipesData.meals);
  }

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

  useEffect(() => {
    if (!searchMade) {
      fetchChickenRecipes();
    } else {
      fetchRecipes(searchQuery);
    }
  }, [searchMade, searchQuery]);

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      setSearchQuery(inputValue.trim());
      setSearchMade(true);
    }
  };

  const handleIconClick = () => {
    setSearchQuery(inputValue.trim());
    setSearchMade(true);
  };

  const handleHomePage = () => {
    setSearchMade(false);
  }

  const focusInput = () => {
    inputRef.current.focus();
  };

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
        handleHomePage
      }}
    >
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:idMeal" element={<RecipePage />} />
          <Route path="/recipe" element={<SearchPage />} />
          <Route path="/test" element={<RecipePageSkeleton />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;

import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { AppContext } from "./context/AppContext";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import RecipePage from "./pages/RecipePage";

function App() {
  const [filter, setFilter] = useState('search.php?s')
  const [recipes, setRecipes] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('chicken');
  const [inputPlaceholder, setInputPlaceholder] = useState('Find a Recipe by Name');
  const inputRef = useRef(null);

  async function fetchRecipes(searchQuery) {
    const searchURL = `https://themealdb.com/api/json/v1/1/${filter}=${searchQuery}`;
    const response = await axios.get(searchURL);
    const { data: recipesData } = response;
  
    setRecipes(recipesData.meals);
  }

  const handleFilterChange = (newFilter) => {
    let placeholderText = '';

  switch (newFilter) {
    case 'search.php?s':
      placeholderText = 'Find a Recipe by Name';
      break;
    case 'filter.php?a':
      placeholderText = 'Find a Recipe by Area';
      break;
    case 'filter.php?c':
      placeholderText = 'Find a Recipe by Category';
      break;
  }

  setFilter(newFilter);
  setInputPlaceholder(placeholderText);

    
    console.log(handleChange)
};
  

  useEffect(() => {
      fetchRecipes(searchQuery)
  }, [searchQuery]);

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      setSearchQuery(inputValue.trim())
    }
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
 
  const handleIconClick = () => {
    setSearchQuery(inputValue.trim())

  };

  const focusInput = () => {
    inputRef.current.focus();
  };


  return (
    <AppContext.Provider value={{ recipes, handleKeyPress, handleIconClick, handleChange, focusInput, inputRef, handleFilterChange, inputPlaceholder }}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:idMeal" element={<RecipePage />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;

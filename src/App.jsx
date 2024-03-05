import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { AppContext } from "./context/AppContext";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

function App() {
  const [filter, setFilter] = useState('search.php?s')
  const [recipes, setRecipes] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('chicken');
  const inputRef = useRef(null);

  async function fetchRecipes(searchQuery) {
    const searchURL = `https://themealdb.com/api/json/v1/1/${filter}=${searchQuery}`;
    const response = await axios.get(searchURL);
    const { data: recipesData } = response;
  
    setRecipes(recipesData.meals);
  }

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
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
    <AppContext.Provider value={{ recipes, handleKeyPress, handleIconClick, handleChange, focusInput, inputRef, handleFilterChange }}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;

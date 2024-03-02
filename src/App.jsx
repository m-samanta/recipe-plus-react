import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { AppContext } from "./context/AppContext";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('chicken');
  const inputRef = useRef(null);

  async function fetchRecipes(searchQuery) {
    const response = await axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
    const { data: recipesData } = response;
  
    setRecipes(recipesData.meals);
  }

   
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
    <AppContext.Provider value={{ recipes, handleKeyPress, handleIconClick, handleChange, focusInput, inputRef }}>
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

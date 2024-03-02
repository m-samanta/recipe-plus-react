import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { AppContext } from "./context/AppContext";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);

  async function fetchRecipes() {
    const response = await axios.get("https://themealdb.com/api/json/v1/1/search.php?s=chicken");
    const { data: recipesData } = response;
  
    setRecipes(recipesData.meals);
  }

    const [inputValue, setInputValue] = useState('');

   
  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      console.log('Pressed Enter:', inputValue);
    }
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
 
  const handleSearch = (inputValue) => {
    console.log('Clicked Search:', inputValue);
  };

  const handleIconClick = () => {
    handleSearch(inputValue);
  };


  return (
    <AppContext.Provider value={{ recipes, handleKeyPress, handleIconClick, handleChange }}>
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


// search functions + filter
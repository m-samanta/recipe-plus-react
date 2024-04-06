import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { AppContext } from "./context/AppContext";
import RecipePage from "./pages/RecipePage";
import SearchPage from "./pages/SearchPage";

function App() {

  return (
    <AppContext.Provider value={{}}>
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
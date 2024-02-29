import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <RecipeList />
      </Router>
    </>
  );
}

export default App;

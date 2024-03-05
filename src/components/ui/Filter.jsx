import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Filter = ({ filterOpen, setFilterOpen }) => {
  const { handleFilterChange } = useContext(AppContext);

  const handleWrapperClick = (event) => {
    if (!event.target.closest('.recipe__filter')) {
      setFilterOpen(false);
    }
  }
  

  return (
    <>
      <div className={`recipe__filter__wrapper ${filterOpen && 'recipe__filter-open'}`} onClick={handleWrapperClick}>
        <div className="recipe__filter">
            <div className="recipe__filter__select__1" onClick={() => {handleFilterChange('search.php?s'); setFilterOpen(false)}}>
        <span className="recipe__filter__select__text">Find a Recipe by Name</span>
            </div>
            <div className="recipe__filter__select__2" onClick={() => {handleFilterChange('search.php?f'); setFilterOpen(false)}}>
        <span className="recipe__filter__select__text">Find a Recipe by First Letter</span>
            </div>
            <div className="recipe__filter__select__3" onClick={() => {handleFilterChange('filter.php?a'); setFilterOpen(false)}}>
        <span className="recipe__filter__select__text">Find a Recipe by Area</span>
            </div>
            <div className="recipe__filter__select__4" onClick={() => {handleFilterChange('filter.php?c'); setFilterOpen(false)}}>
        <span className="recipe__filter__select__text">Find a Recipe by Category</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Filter;

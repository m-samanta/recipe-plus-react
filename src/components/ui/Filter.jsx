import { useStore } from "../../store";


const Filter = ({ filterOpen, setFilterOpen }) => {
  const { handleFilterChange } = useStore();

  // Close filter if clicked outside the filter section
  const handleFilterWrapperClick = (event) => {
    if (!event.target.closest(".recipe__filter")) {
      setFilterOpen(false);
    }
  };

  return (
    <>
      <div
        className={`recipe__filter__wrapper ${
          filterOpen && "recipe__filter-open"
        }`}
        onClick={handleFilterWrapperClick}
      >
        <div className="recipe__filter">
          <div
            className="recipe__filter__select"
            onClick={() => {
              handleFilterChange("search.php?s");
              setFilterOpen(false);
            }}
          >
            <span className="recipe__filter__select__text">
              Find a Recipe by Name
            </span>
          </div>
          <div
            className="recipe__filter__select"
            onClick={() => {
              handleFilterChange("filter.php?a");
              setFilterOpen(false);
            }}
          >
            <span className="recipe__filter__select__text">
              Find a Recipe by Area
            </span>
          </div>
          <div
            className="recipe__filter__select"
            onClick={() => {
              handleFilterChange("filter.php?c");
              setFilterOpen(false);
            }}
          >
            <span className="recipe__filter__select__text">
              Find a Recipe by Category
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;

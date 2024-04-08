import { useStore } from "../../store";

const ErrorMsg = ({ errorOpen, setErrorOpen }) => {
  const { searchQuery, fetchRecipes, setNewSearchQuery } = useStore();

  // Close error message if clicked outside the error message section
  const handleErrorWrapperClick = (event) => {
    if (!event.target.closest(".error__msg")) {
      setErrorOpen(false);
      setNewSearchQuery();
      fetchRecipes();
    }
  };

  return (
    <>
      <div
        className={`error__msg__wrapper ${
          errorOpen && "error__msg__wrapper-open"
        }`}
        onClick={handleErrorWrapperClick}
      >
        <div className="error__msg">
          <div className="error__msg__text__wrapper">
            <span className="error__msg__text">No recipes found for:</span> <span className="error__msg__search">"{searchQuery}"</span>
          </div>
          <button
          className="error__msg__button"
            onClick={() => {
              setErrorOpen(false);
              setNewSearchQuery();
              fetchRecipes();
            }}
          >
            OK
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorMsg;

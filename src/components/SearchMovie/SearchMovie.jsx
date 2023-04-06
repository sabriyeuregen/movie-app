import { useDispatch } from "react-redux";
import { searchActions } from "../../store/search-slice";
const SearchMovie = () => {
  const dispatch = useDispatch();

  const inputChangeHandler = (event) => {
    if (!event.target.value) {
      return;
    }

    dispatch(searchActions.searchMovies(event.target.value));
    dispatch(searchActions.fetchedSearchMovies(event.target.value));
  };

  return (
    <div>
      <h1>Search Movie</h1>
      <input onChange={inputChangeHandler}></input>
    </div>
  );
};

export default SearchMovie;

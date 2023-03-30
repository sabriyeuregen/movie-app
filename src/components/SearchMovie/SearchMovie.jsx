import { useDispatch } from "react-redux";
import { searchActions } from "../../store/search-slice";
const SearchMovie = () => {
  const dispatch = useDispatch();

  const inputChangeHandler = (event) => {
    if (!event.target.value) {
      return;
    }

    dispatch(
      searchActions.searchMovies({
        state: event.target.value,
      })
    );
  };

  return (
    <div>
      <div>
        <input onChange={inputChangeHandler}></input>
      </div>
    </div>
  );
};

export default SearchMovie;

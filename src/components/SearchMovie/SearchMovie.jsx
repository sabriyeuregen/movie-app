import { useDispatch } from "react-redux";
import { searchActions } from "../../store/search-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import "./SearchMovie.scss";
const SearchMovie = () => {
  const dispatch = useDispatch();

  const inputChangeHandler = (event) => {
    if (!event.target.value) {
      return;
    }

    //dispatch(searchActions.searchMovies(event.target.value));
    dispatch(
      searchActions.fetchedSearchMovies({ results: event.target.value })
    );
  };
  return (
    <div className="search">
      <input className="search-bar"  onChange={inputChangeHandler}>
      </input>
      <button className="search-bar__button">
        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default SearchMovie;

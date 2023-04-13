import { useDispatch } from "react-redux";
import { searchActions } from "../../store/search-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./SearchMovie.scss";
import MovieSuggestion from "../MovieSuggestion/MovieSuggestion";
const SearchMovie = () => {
  const dispatch = useDispatch();

  const [suggestion, showSuggestion] = useState(false);

  const inputChangeHandler = (event) => {
    if (!event.target.value) {
      return;
    }
    showSuggestion(true);
    
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
      {suggestion === true ? <MovieSuggestion/> : <></>}
    </div>
  );
};

export default SearchMovie;

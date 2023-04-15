import "./MovieSuggestion.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SuggestionCart from "../SuggestionCart/SuggestionCart";
import { Link } from "react-router-dom";
const MovieSuggestion = () => {
  const [data, setData] = useState("");

  const query = useSelector((state) => state.searchSlice.results);

  const fetchSearchedMovie = async () => {
    const movie = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=8007da3ba2c47e0304c3a0e70c97a6b8&query=${query}`
    )
      .then((response) => response.json())
      .then((response) => response.results);
    setData(movie);
  };

  useEffect(() => {
    fetchSearchedMovie();
  }, []);

  const IMAGES_PATH = "https://image.tmdb.org/t/p";

  const suggestionList =
    query.length > 3 &&
    data.map((movie) => (
      <SuggestionCart
        key={movie.id}
        link={
          <Link to={`/movie/${movie.id}`}>
            {movie.poster_path && (
              <img
                src={`${IMAGES_PATH}/w300${movie.poster_path}`}
                alt={movie.title}
              />
            )}
          </Link>
        }
        title={movie.title}
      />
    ));

  return <div>{suggestionList}</div>;
};

export default MovieSuggestion;

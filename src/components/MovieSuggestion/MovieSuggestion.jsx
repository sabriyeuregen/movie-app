import "./MovieSuggestion.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SuggestionCart from "../SuggestionCart/SuggestionCart";
const MovieSuggestion = () => {

  const [data, setData] = useState("");

  const query = useSelector((state) => state.searchSlice.results);

  const fetchSearchedMovie = async () => {
    const movie = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=8007da3ba2c47e0304c3a0e70c97a6b8&query=${query}`
    )
    .then((response) => response.json())
    .then((response) => response.results)
    setData(movie)
  };

  useEffect(() => {
    fetchSearchedMovie();
  }, []);

  console.log(query)

  return (
    <div>
        {query.length > 3 && data.map((movie) => (
        <SuggestionCart key={movie.id} title={movie.title} />
      ))}
    </div>
  )
}

export default MovieSuggestion
import { useDispatch } from "react-redux";
import { movieActions } from "../../store/movie-slice";
import { useSelector } from "react-redux";
import MovieCart from "../MovieCart/MovieCart";
import { fetchData } from "../../store/movie-slice";
import { useEffect } from "react";

const Movies = () => {
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchData());
  }, []);

  console.log(movie.data);
  return (
    <div>
      <h1>MOVİES</h1>
      {movie.loading && "fetching data"}
      {movie.error && movie.error}
      {movie.data.map((movie) => {<MovieCart key={movie.id} originaltitle={movie.original_title}/>})}
    </div>
  );
};

export default Movies;

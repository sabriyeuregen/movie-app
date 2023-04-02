import { useDispatch } from "react-redux";
import { movieActions } from "../../store/movie-slice";
import { useSelector } from "react-redux";
import MovieCart from "../MovieCart";

const Movies = () => {
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const buttonClickHandler = () => {
    dispatch(movieActions.fetchMovies);
  };

  return (
    <div>
      <h1 style={{textColor:"white"}}>MOVİES</h1>
      <button onClick={buttonClickHandler}>fetch data</button>
      {movie.loading && "fetching data"}
      {movie.error && movie.error}
      {movie.data.map((movie) => {<MovieCart id={movie.id} name={movie.name}/>})}
    </div>
  );
};

export default Movies;

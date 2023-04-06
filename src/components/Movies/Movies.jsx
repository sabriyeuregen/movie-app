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
  }, [dispatch]);

  const movieList = movie.data.map((movie) =>( 
    <MovieCart
      key={movie.id}
      title={movie.title}
      /*image={<img src={movie.poster_path} alt="movie-img"/>} *//>))

  console.log(movie.data);
  return (
    <div>
      <h1>MOVİES</h1>
      {movie.loading && "fetching data"}
      {movie.error && movie.error}
      {movieList}
    </div>
  );
};

export default Movies;

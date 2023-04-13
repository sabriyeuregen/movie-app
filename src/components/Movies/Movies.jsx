import { useDispatch } from "react-redux";
import { movieActions } from "../../store/movie-slice";
import { useSelector } from "react-redux";
import MovieCart from "../MovieCart/MovieCart";
import { fetchData } from "../../store/movie-slice";
import { useEffect } from "react";
import "./Movies.scss";

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
      image={<img src={movie.poster_path} style={{ objectFit: "contain" }}  alt="movie-img"></img>} />))

  return (
    <div className="movies">
      {movie.loading && "fetching data"}
      {movie.error && movie.error}
      <div className="movie-list">
      {movieList}
      </div>
    </div>
  );
};

export default Movies;

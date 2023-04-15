import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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

  const IMAGES_PATH = "https://image.tmdb.org/t/p";

  const movieList = movie.data.map((movie) => (
    <MovieCart
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

  return (
    <div className="movies">
      {movie.loading && "fetching data"}
      {movie.error && movie.error}
      <div className="movie-list">{movieList}</div>
    </div>
  );
};

export default Movies;

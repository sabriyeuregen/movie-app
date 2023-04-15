import { useState, useEffect } from "react";
import MovieCart from "../MovieCart/MovieCart";
const MovieDetail = () => {
  const [detail, setDetail] = useState("");

  const getMovie = async (id) => {
    const movie = await fetch(
      `https://api.themoviedb.org/movie/${id}?api_key=8007da3ba2c47e0304c3a0e70c97a6b8&append_to_response=recommendations`
    )
      .then((response) => response.json())
      .then((response) => response.results);
    setDetail(movie);
  };

  useEffect(() => {
    getMovie(id);
  }, []);

  const movieDetail = detail.map((movie) => (
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

  return <div>{movieDetail}</div>;
};

export default MovieDetail;

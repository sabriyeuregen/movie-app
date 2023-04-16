import { useState, useEffect } from "react";
import MovieCart from "../MovieCart/MovieCart";
import { useParams } from "react-router-dom";
const MovieDetail = () => {

  const [ detail, setDetail] = useState("");

  const { id } = useParams();

  const getMovie = async () => {
    const movie = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8007da3ba2c47e0304c3a0e70c97a6b8`
      )
      .then((response) => response.json())
      .then((response) => response.results);
      setDetail(movie);
      console.log(movie+"movie")
  };

  useEffect(() => {
    getMovie(id ? parseInt(id,10) : 0);
  }, []);

  console.log(id)
  console.log(detail+ "data")

 /* const movieDetail = detail.map((movie) => (
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
  ));*/

  return <div>{/*movieDetail*/}</div>;
};

export default MovieDetail;

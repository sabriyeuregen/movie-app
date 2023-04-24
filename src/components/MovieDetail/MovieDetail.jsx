import { useState, useEffect } from "react";
import MovieCart from "../MovieCart/MovieCart";
import { useParams } from "react-router-dom";
const MovieDetail = () => {
  const [detail, setDetail] = useState([]);

  const { id } = useParams();

  const getMovie = async (id) => {
    const movie = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8007da3ba2c47e0304c3a0e70c97a6b8`
    )
      .then((response) => response)
      .then((response) => response.json());
      setDetail(movie);
  };
  // const IMAGES_PATH = "https://image.tmdb.org/t/p";

  useEffect(() => {
    getMovie(id);
  }, []);

  return (
    <div>
      {console.log(detail)}
     
    </div>
  );
};

export default MovieDetail;

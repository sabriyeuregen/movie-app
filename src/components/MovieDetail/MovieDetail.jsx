import { useSelector } from "react-redux";
const MovieDetail = () => {

   const query = useSelector((state) => state.searchSlice.results)

   const fetchSearchMovie = async () => {
     const movie = (await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8007da3ba2c47e0304c3a0e70c97a6b8&query=${query}`)).
     then((response) => response.json())
    .then((response) => response.results)
   }   

   console.log(query)

  return (
    <div>

    </div>
  )
}

export default MovieDetail;
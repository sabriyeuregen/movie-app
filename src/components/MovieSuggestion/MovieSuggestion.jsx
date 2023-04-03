import { useSelector } from "react-redux";
const MovieSuggestion = () => {

  const search  = useSelector((state) => state.searchSlice);

  return (
    <div>{console.log(search.isFetching)}</div>
  )
}

export default MovieSuggestion;
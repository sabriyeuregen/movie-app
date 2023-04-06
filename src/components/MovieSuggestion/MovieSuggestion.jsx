import { useSelector } from "react-redux";
import SearchMovie from "../SearchMovie/SearchMovie";
const MovieSuggestion = () => {

  const search = useSelector((state) => state.searchSlice.isFetching);

  console.log("Search"+search)

  return (
    <div>
     <SearchMovie/>
    </div>
  )
}

export default MovieSuggestion;
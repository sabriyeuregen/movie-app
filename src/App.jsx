// react-router-dom
//react-infinite-scroll-component
// www.themoviedb.org
import { useEffect } from "react";
import Movies from "./components/Movies/Movies";
import { sendCartData } from "./store/cart-slice";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import MovieList from "./pages/MovieList/MovieList";
import MovieDetail from "./components/MovieDetail/MovieDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  element={<RootLayout />}>
      <Route path="/" index element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Route>
  )
);


const App = () => {
  
  return (
    <div className="App">

    </div>
  );
};

export default App;

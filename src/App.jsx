// react-router-dom
//react-infinite-scroll-component
// www.themoviedb.org
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import MovieList from "./pages/MovieList/MovieList";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import RootLayout from "./pages/RootLayout/RootLayout";
import Movies from "./components/Movies/Movies";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<MovieList />} />
      {/*<Route path="/movie/:id" element={<MovieDetail />} />*/}
      <Route path="/moviedetail" element={<MovieDetail/>}/>
    </Route>
  )
);

const App = () => {
  return <div className="App">
    <RouterProvider router={router}></RouterProvider>
  </div>;
};

export default App;

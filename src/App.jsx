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
import RootLayout from "./pages/RootLayout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<MovieList />} />
    </Route>
  )
);

const App = () => {
  return <div className="App">
    <RouterProvider router={router}></RouterProvider>
  </div>;
};

export default App;

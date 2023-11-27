import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './Feature/header/Header';
import TrendingToday from './Feature/TrendingContainer/Trending';
import Movies from './Feature/MoviesContainer/MoviesContainer';
import SeriesCont from './Feature/SeriesContainer/series';
import "./App.css"


const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <TrendingToday />,
    },
    {
    path:"/movies",
    element:<Movies/>
    },
    {
        path: "/series",
        element: <SeriesCont />,
    },
  ])
  

ReactDOM.createRoot(document.getElementById('root')).render(
 <>
 <div className='main-container'>
      <Header/>
      <RouterProvider router={myRouter}/>
 </div>
 </>
)

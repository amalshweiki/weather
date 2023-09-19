import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Header from './components/Header';
import Forcast from "./pages/Forcast";
import Favorites from './pages/Favorites';
import SignIn from "./pages/SignIn";
function App() {
 
  const Router=createBrowserRouter([
    {
      path:'/',
      element:<Header/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'forcast',
          element:<Forcast/>,
        },
        {
          path:'favorites',
          element:<Favorites/>,
        },
        {
          path:'signin',
          element:<SignIn/>,
        },
        // {
        //   path: "*",
        //   element: < />,
        // }
      ]
    },
    
  ])
  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App

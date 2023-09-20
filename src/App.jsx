import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";

import Forcast from "./pages/Forcast";
import Favorites from './pages/Favorites';
import SignIn from "./pages/SignIn";
import SharedLayOut from "./components/SharedLayOut";
function App() {
 
  const Router=createBrowserRouter([
    {
      path:'/',
      element:<SharedLayOut/>,
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

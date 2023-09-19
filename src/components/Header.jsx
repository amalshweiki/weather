import { Link, Outlet } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <Link to='/'> Home </Link>
      <Link to='favorites'> Favorite </Link>
      <Link to='forcast'> Forcast </Link>
      <Link to='signin'>Sign In </Link>
      <Outlet/>
    </div>
  )
}

export default Header

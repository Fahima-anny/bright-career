import { Link, NavLink } from "react-router-dom";
import logo from '../../public/star.png'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {

  const {signOutUser, user} = useContext(AuthContext) ;

const handleLogOut = () => {
  signOutUser()
  .then( () => {
    toast("User Logged out")
  })
  .catch(er => {
    toast(er.message)
  })
}

const links = < >
<li><NavLink className='text-gray-400 font-medium' to='/'>Home</NavLink></li>
<li><NavLink className='text-gray-400 font-medium' to='/myProfile'>My Profile</NavLink></li>
<li><NavLink className='text-gray-400 font-medium' to='/contact'>Contact us</NavLink></li>
</>

    return (
        <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              id='navMenu'
              className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {links}
            </ul>
          </div>
          <a className=" font-bold text-2xl flex items-center gap-2">
            <img className="w-8 hidden md:block" src={logo} alt="" />
            Bright Career</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul id="navMenu" className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? 
            <button onClick={handleLogOut} className="btn btn-accent text-white">Log out</button>
            :  <Link to='/login' className="btn btn-accent text-white">Login</Link>
          }

        </div>
      </div>
    );
};

export default Navbar;
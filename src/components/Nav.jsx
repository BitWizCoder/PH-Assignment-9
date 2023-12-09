import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../Context/DataContext";

const Nav = () => {
  const { logout, user } = useContext(DataContext);

  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/talks">Talks</NavLink>
      </li>
      <li>
        <NavLink to="/speakers">Speakers</NavLink>
      </li>
      <li>
        <NavLink to="/join">Join</NavLink>
      </li>
    </>
  );

  const handleSignout = () => {
    logout()
      .then(() => {
        console.log("signe out successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-base-100 container mx-auto justify-between">
      <div className="navbar-start justify-between md:justify-normal">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <img
          src="https://i.ibb.co/k2WDzvr/logo.png"
          className="w-[160px]"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      {user ? (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src={
                  user.photoURL
                    ? user.photoURL
                    : "https://i.ibb.co/XDX72TC/avataaars-1696865980387.png"
                }
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">{user.displayName}</a>
            </li>
            <li>
              <button onClick={handleSignout}>Signout</button>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-end menu items-end">
          <ul className="flex gap-5">
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign up</NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;

import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to='/'>Home 🏠</Link>
      </li>
      <li>
        <Link to="/products">Products🌿</Link>
      </li>
      <li>
      <Link to="/cart"> Cart🛒 </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 text-green-400">
      <div className="">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="Logo" className="logo-image" />
          <i>E-Nursery</i>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className=" menu menu-horizontal px-1">{navItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;

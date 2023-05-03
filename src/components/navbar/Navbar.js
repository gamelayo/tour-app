import React, { useState } from "react";
import "./NavbarStyles.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FaAddressBook,
  FaBars,
  FaBriefcase,
  FaHome,
  FaInfoCircle,
  FaTimes,
} from "react-icons/fa";
import { logout, reset } from "../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  const closeNav = () => {
    setMenu(!menu);
  };
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav className="navbar-items">
      <h1 className="navbar-logo">
        <Link to="/">Tour</Link>
      </h1>
      <div className="menu-icons" onClick={toggleMenu}>
        {menu ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      <ul className={menu ? "nav-menu" : "nav-menu active"}>
        <li onClick={closeNav}>
          <Link to="/" className="nav-links">
            <FaHome />
            Home
          </Link>
        </li>
        <li onClick={closeNav}>
          <Link to="/about" className="nav-links">
            <FaInfoCircle />
            About
          </Link>
        </li>
        <li onClick={closeNav}>
          <Link to="/service" className="nav-links">
            <FaBriefcase />
            Service
          </Link>
        </li>
        <li onClick={closeNav}>
          <Link to="/contact" className="nav-links">
            <FaAddressBook />
            Contact
          </Link>
        </li>
        <li className="mobile-li" onClick={closeNav}>
          {user ? (
            <button onClick={onLogout} className="nav-logout">
              LogOut({user.name})
            </button>
          ) : (
            <Link to="/log-in" className="nav-sign-up">
              Sign Up
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

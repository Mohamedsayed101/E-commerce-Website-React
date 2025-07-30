import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow">
      <div className="container">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact Us
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link to="/login" className="btn btn-outline-light me-2">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <NavLink to="/signup" className="nav-link">
                    <i className="fas fa-user-plus me-1"></i> Sign Up
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button className="btn btn-outline-danger me-2" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">
                <i className="fas fa-shopping-cart me-1"></i> Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

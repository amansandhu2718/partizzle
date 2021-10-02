import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark pblack">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="/google.com">
            <h3>Partizzle</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link
                to="/"
                className="mx-2 nav-link text-light"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Contact Us"
              >
                <i className="fas fa-home fa-lg mx-2"></i>HOME
              </Link>

              <Link
                to="/contact"
                className="mx-2 nav-link text-light"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Contact Us"
              >
                <i className="fas fa-lg fa-id-card-alt mx-2"></i>CONTACT
              </Link>
              <Link
                to="/cart"
                className="mx-2 nav-link text-light"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Contact Us"
              >
                <i className="fas fa-lg fa-shopping-cart mx-2"></i>CART
              </Link>
              <Link
                to="/login"
                className="mx-2 nav-link text-light"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Contact Us"
              >
                <i className="fas fa-user fa-lg mx-2"></i>Profile
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

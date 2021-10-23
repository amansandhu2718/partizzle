import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark ok">
        <div className="container-fluid ddd">
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
              <motion.div
                className="mx-2 nav-link text-light"
                transition={{ duration: 0.1, delay: 0 }}
                whileTap={{
                  scale: 1.2,
                  backgroundColor: "#fff",
                }}
                whileHover={{
                  opacity: 1,
                  boxShadow: "0px 0px 50px #fff",
                  borderRadius: "30px",
                }}
              >
                <Link
                  to="/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Contact Us"
                >
                  <i className="fas fa-home fa-lg mx-2"></i>HOME
                </Link>
              </motion.div>
              <motion.div
                className="mx-2 nav-link text-light"
                transition={{ duration: 0.1, delay: 0 }}
                whileTap={{
                  scale: 1.2,
                  backgroundColor: "#fff",
                }}
                whileHover={{
                  opacity: 1,
                  boxShadow: "0px 0px 50px #fff",
                  borderRadius: "30px",
                }}
              >
                <Link
                  to="/contact"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Contact Us"
                >
                  <i className="fas fa-lg fa-id-card-alt mx-2"></i>CONTACT
                </Link>
              </motion.div>
              <motion.div
                className="mx-2 nav-link text-light"
                transition={{ duration: 0.1, delay: 0 }}
                whileTap={{
                  scale: 1.2,
                  backgroundColor: "#fff",
                }}
                whileHover={{
                  opacity: 1,
                  boxShadow: "0px 0px 50px #fff",
                  borderRadius: "30px",
                }}
              >
                <Link
                  to="/cart"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Contact Us"
                >
                  <i className="fas fa-lg fa-shopping-cart mx-2"></i>CART
                </Link>
              </motion.div>
              <motion.div
                className="mx-2 nav-link text-light"
                transition={{ duration: 0.1, delay: 0 }}
                whileTap={{
                  scale: 1.2,
                  backgroundColor: "#fff",
                }}
                whileHover={{
                  opacity: 1,
                  boxShadow: "0px 0px 50px #fff",
                  borderRadius: "30px",
                }}
              >
                <Link
                  to="/login"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Contact Us"
                >
                  <i className="fas fa-user fa-lg mx-2"></i>Profile
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

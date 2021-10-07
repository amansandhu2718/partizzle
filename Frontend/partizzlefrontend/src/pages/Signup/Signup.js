import React, { Component } from "react";
import "../../pages/Login/Login.css";
import Navbar from "../../comps/header/Navbar";
import Footer from "../../comps/Footer/Footer";
import { Link } from "react-router-dom";

export default class Signup extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="loginbgg">
          <section>
            <div className="container mainsection">
              <div className="row w-100">
                <div className="col col-12  col-md-6 col-lg-5 ">
                  <div className="writings my-auto">
                    <h1 className="mainheading">Sign Up</h1>

                    <form action="" method="post" className="loginform">
                      <input
                        type="text"
                        className="form-control mt-5"
                        placeholder="Name"
                      />
                      <input
                        type="Email"
                        className="form-control mt-3"
                        placeholder="Email"
                      />
                      <input
                        type="text"
                        className="form-control mt-3"
                        placeholder="Address"
                      />
                      <input
                        type="number"
                        className="form-control mt-3"
                        placeholder="Mobile"
                      />
                      <input
                        type="Password"
                        className="form-control mt-3"
                        placeholder="Password"
                      />
                      <input
                        type="Password"
                        className="form-control mt-3"
                        placeholder="Confirm Password"
                      />
                      <input
                        type="button"
                        value="Sign Up"
                        className="btn btn-lg btn-primary mt-4"
                      />

                      <Link
                        to="/login"
                        className="mt-2"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Contact Us"
                      >
                        Already a user? Sign In here
                      </Link>
                    </form>
                  </div>
                </div>
                <div className="col col-12 col-lg-6 "></div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  }
}

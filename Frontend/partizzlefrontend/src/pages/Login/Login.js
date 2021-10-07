import React, { Component } from "react";
import "./Login.css";
import Navbar from "../../comps/header/Navbar";
import Mainbg from "../../assets/images/party.svg";
import Footer from "../../comps/Footer/Footer";
import { Link } from "react-router-dom";

export default class Login extends Component {
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
                    <h1 className="mainheading">Sign in</h1>

                    <form action="" method="post" className="loginform">
                      <input
                        type="Email"
                        className="form-control mt-5"
                        placeholder="Email"
                      />
                      <input
                        type="Password"
                        className="form-control mt-3"
                        placeholder="Password"
                      />
                      <input
                        type="button"
                        value="Sign In"
                        className="btn btn-lg btn-primary mt-4"
                      />
                      
                      <Link
                to="/sign-up"
                className="mt-2"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Contact Us"
              >
                        Not a user, Sign up here
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
